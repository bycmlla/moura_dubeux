import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.location.hash = '';
  Element.prototype.scrollIntoView = jest.fn();
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the homepage and featured developments', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /seu próximo endereço começa/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /empreendimentos em destaque/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Elleve Horto' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Casa Sombreiros' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Infinity Salvador Business' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /ver todos os empreendimentos/i })).toHaveAttribute('href', '#todos-empreendimentos');
  expect(screen.getByRole('heading', { name: /solicitar informações/i })).toBeInTheDocument();
  expect(screen.getAllByText(/\(71\) 98780-3690/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/dimenezescomercial@gmail.com/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('checkbox', { name: /autorizo o uso dos dados/i })).toBeRequired();
  expect(screen.getByRole('link', { name: /pol.tica de privacidade/i })).toHaveAttribute('href', '#politica-de-privacidade');
  expect(screen.getByRole('button', { name: /enviar solicitação/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/vídeo de apresentação dione menezes/i)).toBeInTheDocument();
});

test('renders the all developments page from the see all link', () => {
  window.location.hash = '#todos-empreendimentos';
  render(<App />);

  expect(screen.getByRole('heading', { name: /todos os empreendimentos/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Elleve Horto' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Casa Sombreiros' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Infinity Salvador Business' })).toBeInTheDocument();
});

test('renders the additional book-based developments', () => {
  window.location.hash = '#todos-empreendimentos';
  render(<App />);

  [
    'Beach Class Bahia',
    'Beach Class Jaguaribe',
    'Beach Class Rio Vermelho',
    'Cyano',
    'Horto Essence',
    'Mansão Othon',
    'Mirat Martins de Sá',
    'Poème Horto',
    'Rivê',
    'Salvador 220',
    'Vivant',
    'Jardins do Parque',
  ].forEach((name) => expect(screen.getByRole('heading', { name, level: 3 })).toBeInTheDocument());
});

test('renders a new development with extracted book data and images', () => {
  window.location.hash = '#empreendimento/vivant';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Vivant', level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText(/Alameda das Catabas/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/116 m²/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /segurança/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sustentabilidade/i })).toBeInTheDocument();
  expect(screen.getAllByRole('img', { name: /Vivant/i }).length).toBeGreaterThan(0);
  expect(screen.queryByText(/consulte o book/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/no material completo/i)).not.toBeInTheDocument();
});

test('renders the privacy policy page from the contact policy link', () => {
  window.location.hash = '#politica-de-privacidade';
  render(<App />);

  expect(screen.getByRole('heading', { name: /pol.tica de privacidade/i, level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/última revisão: 16 de setembro de 2026/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /direitos do titular/i })).toBeInTheDocument();
  expect(screen.getByText(/Lei Geral de Proteção de Dados Pessoais/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /voltar para contato/i })).toHaveAttribute('href', '#contato');
});

test('changes the header to the light state after scrolling', () => {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value: 0 });
  const { container } = render(<App />);
  const header = container.querySelector('.site-header');

  expect(header).not.toHaveClass('site-header--scrolled');
  expect(header.style.getPropertyValue('--header-surface-alpha')).toBe('0');
  window.scrollY = 120;
  fireEvent.scroll(window);
  expect(header).toHaveClass('site-header--scrolled');
  expect(header.style.getPropertyValue('--header-surface-alpha')).toBe('0.6666666666666666');
});

test('renders the development summary as four balanced information blocks', () => {
  window.location.hash = '#empreendimento/jardinsdoparque';
  const { container } = render(<App />);
  const summary = container.querySelector('.detail-info-bar__grid');

  expect(summary.querySelectorAll('article')).toHaveLength(4);
  expect(summary).toHaveTextContent('Construtora');
  expect(summary).toHaveTextContent('Localização');
  expect(summary).toHaveTextContent('Tipologias');
  expect(summary).toHaveTextContent('Garagem');
  expect(summary.querySelectorAll('.icon')).toHaveLength(4);
});

test('uses the organized Elleve Horto assets by section and title', () => {
  window.location.hash = '#empreendimento/elleve-horto';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Elleve Horto', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+16 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/191 vagas internas/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Planta padrão - 119,06 m² - 3 suítes/i)).toBeInTheDocument();
  expect(screen.getByText(/Mapa do Horto Florestal e pontos de interesse/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar elleve horto - fachada e acesso principal/i }));
  Array.from({ length: 4 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina adulto com raia de 25 m/i })).toBeInTheDocument();
});

test('uses the organized Mirat Martins de Sá assets by section and title', () => {
  window.location.hash = '#empreendimento/miratmartins';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Mirat Martins de Sá', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+16 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/11 vagas internas para visitantes/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Planta padrão - 253,15 m² - 4 suítes/i)).toBeInTheDocument();
  expect(screen.getByText(/Vista aérea do Horto Florestal/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar mirat martins de sá - fachada principal/i }));
  Array.from({ length: 4 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscinas adulto e infantil/i })).toBeInTheDocument();
});

test('uses the organized Beach Class Rio Vermelho assets by section and title', () => {
  window.location.hash = '#empreendimento/beachclassriovermelho';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Rio Vermelho', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+18 fotos')).toBeInTheDocument();
  expect(screen.getByText(/Planta Studio - 26 m²/i)).toBeInTheDocument();
  expect(screen.getByText(/Mapa de localização - Rio Vermelho/i)).toBeInTheDocument();
  expect(screen.getByText(/Selo IPTU Verde Ouro/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar beach class rio vermelho - fachada e orla/i }));
  Array.from({ length: 4 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina aquecida e spa com vista para o mar/i })).toBeInTheDocument();
});

test('submits the contact form to the API', async () => {
  const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ ok: true }),
  });

  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/seu nome completo/i), { target: { value: 'Cliente Teste' } });
  fireEvent.change(screen.getByPlaceholderText(/\(71\) 9 0000-0000/i), { target: { value: '(71) 98780-3690' } });
  fireEvent.change(screen.getByPlaceholderText(/seu@email.com/i), { target: { value: 'cliente@email.com' } });
  fireEvent.change(screen.getByDisplayValue(/selecione uma/i), { target: { value: 'Morar' } });
  fireEvent.click(screen.getByRole('checkbox', { name: /autorizo o uso dos dados/i }));
  fireEvent.click(screen.getByRole('button', { name: /enviar solicita/i }));

  await waitFor(() => expect(fetchMock).toHaveBeenCalledWith('/api/contact', expect.objectContaining({ method: 'POST' })));
  expect(await screen.findByText(/solicitação enviada com sucesso/i)).toBeInTheDocument();
});

test('renders the development detail page with book images and location', () => {
  window.location.hash = '#empreendimento/casa-sombreiros';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Casa Sombreiros', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^voltar$/i })).toHaveAttribute('href', '#todos-empreendimentos');
  expect(screen.getByRole('navigation', { name: /sumário do empreendimento/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /imagens/i })).toHaveAttribute('href', '#detalhes-imagens');
  fireEvent.click(screen.getByRole('link', { name: /imagens/i }));
  expect(window.location.hash).toBe('#empreendimento/casa-sombreiros');
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  expect(screen.getAllByText('Alameda dos Sombreiros, Caminho das Árvores, Salvador/BA').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /ficha técnica/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /plantas dos imóveis/i })).toBeInTheDocument();
  expect(document.querySelectorAll('.detail-gallery__grid button')).toHaveLength(5);
  expect(screen.getByText('+14 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(7);
  expect(screen.queryByRole('heading', { name: /consulte o material completo/i })).not.toBeInTheDocument();
  expect(screen.queryByText(/ver book digital/i)).not.toBeInTheDocument();
});

test('cycles through development images in the lightbox', () => {
  window.location.hash = '#empreendimento/casa-sombreiros';
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /ampliar casa sombreiros - fachada e acesso/i }));
  expect(screen.getByRole('dialog', { name: /casa sombreiros - fachada e acesso/i })).toBeInTheDocument();
  expect(screen.getByText('1 / 19')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByText('19 / 19')).toBeInTheDocument();
});

test('uses the organized Casa Sombreiros assets by section and title', () => {
  window.location.hash = '#empreendimento/casa-sombreiros';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Casa Sombreiros', level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/Planta padrão - 168 m² - 4 suítes/i)).toBeInTheDocument();
  expect(screen.getByText(/Vista aérea do Caminho das Árvores e entorno/i)).toBeInTheDocument();
  expect(screen.getByText(/188 vagas: 3 por apartamento/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar casa sombreiros - fachada e acesso/i }));
  Array.from({ length: 4 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina adulto com raia de 25 m/i })).toBeInTheDocument();
});

test('uses the organized Horto Essence assets by section and title', () => {
  window.location.hash = '#empreendimento/hortoessence';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Horto Essence', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+28 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/Planta - 133 m² - 3 suítes/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Parque Lucaia/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Não identificado no material/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar horto essence - torre principal/i }));
  Array.from({ length: 4 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /guarita de acesso à rua da sapucaia/i })).toBeInTheDocument();
});

test('uses the organized Infinity Salvador Business assets by section and title', () => {
  window.location.hash = '#empreendimento/infinity-salvador-business';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Infinity Salvador Business', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+3 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/Pavimento tipo Business/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Avenida Oceânica - Ondina/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Qualidade urbana/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar infinity salvador - torre business/i }));
  Array.from({ length: 4 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /lobby oceânica/i })).toBeInTheDocument();
});

test('uses the organized Poème Horto assets by section and title', () => {
  window.location.hash = '#empreendimento/poeme-horto';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Poème Horto', level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/Planta padrão.*203,91 m².*4 suítes/i)).toBeInTheDocument();
  expect(screen.getByText(/Mapa aéreo do entorno do Poème Horto/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar capa do poème horto/i }));
  Array.from({ length: 5 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina adulto com raia de 25 m/i })).toBeInTheDocument();
});

test('uses the organized Jardins do Parque assets by section and title', () => {
  window.location.hash = '#empreendimento/jardinsdoparque';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Jardins do Parque', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /Piscina adulto com prainha e solarium/i })).toBeInTheDocument();
  expect(screen.getByText(/Planta 81 m².*3 quartos.*1 suíte/i)).toBeInTheDocument();
  expect(screen.getByText(/Mapa do entorno e pontos de interesse/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar piscina adulto com prainha e solarium/i }));
  expect(screen.getByRole('dialog', { name: /piscina adulto com prainha e solarium/i })).toBeInTheDocument();
});

test('uses the organized Cyano assets by section and title', () => {
  window.location.hash = '#empreendimento/cyano';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Cyano', level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/Planta 4 suítes garden - 204 m²/i)).toBeInTheDocument();
  expect(screen.getByText(/Localização do Cyano no Rio Vermelho - Salvador/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar cyano - vista geral/i }));
  Array.from({ length: 6 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina com borda infinita e vista para o mar/i })).toBeInTheDocument();
});

test('uses the organized Salvador 220 assets by section and title', () => {
  window.location.hash = '#empreendimento/salvador220';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Salvador 220', level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText(/438 apartamentos/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Planta - 2 quartos com 1 suíte - 73 m²/i)).toBeInTheDocument();
  expect(screen.getByText(/Localização do Salvador 220 no Rio Vermelho/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar salvador 220 - vista geral/i }));
  Array.from({ length: 11 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina com borda infinita$/i })).toBeInTheDocument();
});

test('uses the organized Vivant assets by section and title', () => {
  window.location.hash = '#empreendimento/vivant';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Vivant', level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText(/116 m²/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Planta padrão - 116 m² - 3 suítes/i)).toBeInTheDocument();
  expect(screen.getByText(/Mapa do entorno - Caminho das Árvores/i)).toBeInTheDocument();
  expect(screen.getByText('Platô Zen')).toBeInTheDocument();
  expect(screen.getByText('Platô Kids')).toBeInTheDocument();
  expect(screen.getByText('Platô Barbecue')).toBeInTheDocument();
  expect(screen.getByText('Platô Pet')).toBeInTheDocument();
  expect(screen.getByText('Fitness')).toBeInTheDocument();
  expect(screen.getByText('Crossfit')).toBeInTheDocument();
  expect(screen.getByText('Piscina com raia de 22 m')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar vivant - fachada e acesso/i }));
  Array.from({ length: 10 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina adulto com raia de 22 m e hidromassagem/i })).toBeInTheDocument();
});

test('uses the organized Beach Class Jaguaribe assets by section and title', () => {
  window.location.hash = '#empreendimento/beachclassjaguaribe';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Jaguaribe', level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText(/202 apartamentos/i).length).toBeGreaterThan(0);
  expect(screen.getByText('+18 fotos')).toBeInTheDocument();
  expect(screen.getByText(/Planta 74 m² - 2 quartos \(1 suíte\) - terminação 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Localização frente ao mar - Praia de Jaguaribe/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar beach class jaguaribe - empreendimento em frente à praia/i }));
  Array.from({ length: 6 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina com borda infinita frente ao mar/i })).toBeInTheDocument();
});

test('uses the organized Beach Class Bahia assets by section and title', () => {
  window.location.hash = '#empreendimento/beachclassbahia';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Bahia', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+14 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/612 apartamentos/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Localização - Caminho das Árvores e Shopping da Bahia/i)).toBeInTheDocument();
  expect(screen.getByText(/Planta - rooftop wellness - 42º andar/i)).toBeInTheDocument();
  expect(screen.getByText(/Infraestrutura para controle de acesso de pessoas/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar beach class bahia - fachada principal/i }));
  Array.from({ length: 6 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina/i })).toBeInTheDocument();
});

test('uses the organized Rivê assets by section and title', () => {
  window.location.hash = '#empreendimento/rive';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Rivê', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+21 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/2 vagas por apartamento/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Localização do Rivê - a 200 metros do mar/i)).toBeInTheDocument();
  expect(screen.getByText(/Planta padrão - 143 m² - 4 quartos/i)).toBeInTheDocument();
  expect(screen.getByText(/Guarita com vidro blindado e clausura para pedestres/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar rivê - fachada e localização/i }));
  Array.from({ length: 8 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina com borda infinita/i })).toBeInTheDocument();
});

test('uses the organized Mansão Othon assets by section and title', () => {
  window.location.hash = '#empreendimento/mansaoothon';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Mansão Othon', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+12 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/32 apartamentos/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Orla de Ondina - Salvador/i)).toBeInTheDocument();
  expect(screen.getByText(/Planta padrão - 572 m² - 5 suítes/i)).toBeInTheDocument();
  expect(screen.getByText(/Guarita com vidros blindados/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar mansão othon - fachada e vista para o mar/i }));
  Array.from({ length: 5 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina adulto com vista para o mar/i })).toBeInTheDocument();
});
