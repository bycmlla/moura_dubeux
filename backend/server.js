require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = Number(process.env.PORT) || 3001;
const configuredOrigins = [
  process.env.FRONTEND_ORIGIN,
  ...(process.env.FRONTEND_ORIGINS || '').split(','),
].filter(Boolean);
const allowedOrigins = new Set([
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://192.168.1.13:3000',
  ...configuredOrigins.map((origin) => origin.trim()),
]);

const fieldLimits = {
  name: 120,
  phone: 40,
  email: 254,
  goal: 80,
  bestTime: 120,
  message: 1000,
};

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_SECURE', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_EMAIL'];

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    message: 'Muitas solicitações foram enviadas. Aguarde alguns minutos e tente novamente.',
  },
});

app.use(express.json({ limit: '32kb' }));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Origem não permitida pelo CORS.'));
  },
}));

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true, status: 'healthy' });
});

app.post('/api/contact', limiter, async (req, res) => {
  try {
    const payload = normalizePayload(req.body);
    const validationErrors = validatePayload(payload);

    if (validationErrors.length) {
      return res.status(400).json({
        ok: false,
        message: validationErrors[0],
        errors: validationErrors,
      });
    }

    const missingEnv = requiredEnv.filter((key) => !process.env[key]);
    if (missingEnv.length) {
      return res.status(500).json({
        ok: false,
        message: 'O envio de e-mail ainda não está configurado no servidor.',
        missing: missingEnv,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: parseBoolean(process.env.SMTP_SECURE),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Dione Menezes" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: payload.email,
      subject: `Novo contato pelo site — ${payload.name}`,
      text: buildTextEmail(payload),
      html: buildHtmlEmail(payload),
    });

    return res.status(200).json({
      ok: true,
      message: 'Solicitação enviada com sucesso.',
    });
  } catch (error) {
    console.error('Erro ao enviar contato:', error);
    return res.status(500).json({
      ok: false,
      message: 'Não foi possível enviar sua solicitação agora. Tente novamente em alguns minutos.',
    });
  }
});

app.use((error, _req, res, _next) => {
  if (error && error.message === 'Origem não permitida pelo CORS.') {
    return res.status(403).json({ ok: false, message: error.message });
  }
  return res.status(500).json({ ok: false, message: 'Erro interno no servidor.' });
});

app.listen(PORT, () => {
  console.log(`Servidor de contato rodando na porta ${PORT}`);
});

function normalizePayload(body = {}) {
  return {
    name: cleanText(body.name),
    phone: cleanText(body.phone),
    email: cleanText(body.email).toLowerCase(),
    goal: cleanText(body.goal),
    bestTime: cleanText(body.bestTime),
    message: cleanText(body.message),
    privacy: Boolean(body.privacy),
  };
}

function cleanText(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim();
}

function validatePayload(payload) {
  const errors = [];

  if (!payload.name) errors.push('Informe seu nome completo.');
  if (!payload.phone) errors.push('Informe seu telefone ou WhatsApp.');
  if (!payload.email) errors.push('Informe seu e-mail.');
  if (!payload.goal) errors.push('Informe a finalidade do imóvel.');
  if (!payload.privacy) errors.push('É necessário autorizar o uso dos dados para responder à solicitação.');

  Object.entries(fieldLimits).forEach(([field, maxLength]) => {
    if (payload[field] && payload[field].length > maxLength) {
      errors.push(`O campo ${field} deve ter no máximo ${maxLength} caracteres.`);
    }
  });

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push('Informe um e-mail válido.');
  }

  return errors;
}

function buildTextEmail(payload) {
  return [
    'Novo contato pelo site — Dione Menezes',
    '',
    `Nome: ${payload.name}`,
    `Telefone/WhatsApp: ${payload.phone}`,
    `E-mail: ${payload.email}`,
    `Finalidade do imóvel: ${payload.goal}`,
    `Horário preferido: ${payload.bestTime || 'Não informado'}`,
    '',
    'Mensagem:',
    payload.message || 'Não informada',
  ].join('\n');
}

function buildHtmlEmail(payload) {
  const rows = [
    ['Nome', payload.name],
    ['Telefone/WhatsApp', payload.phone],
    ['E-mail', payload.email],
    ['Finalidade do imóvel', payload.goal],
    ['Horário preferido', payload.bestTime || 'Não informado'],
    ['Mensagem', payload.message || 'Não informada'],
  ];

  return `
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <title>Novo contato pelo site</title>
      </head>
      <body style="margin:0;padding:0;background:#f5f7fb;color:#0e1e30;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f7fb;padding:28px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #d9e1ea;border-radius:16px;overflow:hidden;">
                <tr>
                  <td style="background:#001e3e;color:#ffffff;padding:28px 32px;">
                    <p style="margin:0 0 8px;color:#8fd0ff;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Site Dione Menezes</p>
                    <h1 style="margin:0;font-size:26px;line-height:1.2;">Novo contato pelo site</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 32px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      ${rows.map(([label, value]) => `
                        <tr>
                          <td style="padding:14px 0;border-bottom:1px solid #edf1f5;vertical-align:top;">
                            <strong style="display:block;margin-bottom:6px;color:#0d64ab;font-size:12px;letter-spacing:1.8px;text-transform:uppercase;">${escapeHtml(label)}</strong>
                            <span style="color:#0e1e30;font-size:16px;line-height:1.55;white-space:pre-wrap;">${escapeHtml(value)}</span>
                          </td>
                        </tr>
                      `).join('')}
                    </table>
                    <p style="margin:22px 0 0;color:#637083;font-size:13px;line-height:1.6;">
                      Responda este e-mail para falar diretamente com o cliente. O campo reply-to foi configurado com o e-mail informado no formulário.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseBoolean(value) {
  return String(value).toLowerCase() === 'true';
}
