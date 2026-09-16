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
  window.scrollY = 120;
  fireEvent.scroll(window);
  expect(header).toHaveClass('site-header--scrolled');
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
  expect(screen.getByRole('navigation', { name: /sumário do empreendimento/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /imagens/i })).toHaveAttribute('href', '#detalhes-imagens');
  fireEvent.click(screen.getByRole('link', { name: /imagens/i }));
  expect(window.location.hash).toBe('#empreendimento/casa-sombreiros');
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  expect(screen.getAllByText('Alameda dos Sombreiros, Caminho das Árvores, Salvador/BA').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /ficha técnica/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /plantas dos imóveis/i })).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /^ampliar (?!planta)/i })).toHaveLength(5);
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(4);
  expect(screen.queryByRole('button', { name: /ampliar planta implantação/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /ampliar planta pavimento tipo/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /consulte o material completo/i })).not.toBeInTheDocument();
  expect(screen.queryByText(/ver book digital/i)).not.toBeInTheDocument();
});

test('cycles through development images in the lightbox', () => {
  window.location.hash = '#empreendimento/casa-sombreiros';
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /ampliar fachada cidade/i }));
  expect(screen.getByRole('dialog', { name: /fachada cidade/i })).toBeInTheDocument();
  expect(screen.getByText('1 / 15')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByText('15 / 15')).toBeInTheDocument();
});
