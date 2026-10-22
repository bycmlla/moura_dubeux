import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import { getStateNameFromLocation, getUfFromLocation } from './utils/location';

beforeEach(() => {
  window.location.hash = '';
  window.sessionStorage.clear();
  Element.prototype.scrollIntoView = jest.fn();
  window.scrollTo = jest.fn();
});

afterEach(() => {
  window.sessionStorage.clear();
  jest.restoreAllMocks();
});

test('renders the homepage and featured developments', () => {
  const { container } = render(<App />);
  const header = within(container.querySelector('.site-header'));
  expect(screen.getByRole('heading', { name: /seu próximo endereço começa/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /empreendimentos em destaque/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Elleve Horto' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Casa Sombreiros' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Infinity Salvador Business' })).toBeInTheDocument();
  expect(header.getByRole('link', { name: 'Empreendimentos' })).toHaveAttribute('href', '#todos-empreendimentos');
  expect(screen.getAllByText(/Bahia/i).length).toBeGreaterThanOrEqual(3);
  expect(screen.getByRole('link', { name: /ver todos os empreendimentos/i })).toHaveAttribute('href', '#todos-empreendimentos');
  expect(screen.getByRole('heading', { name: /solicitar informações/i })).toBeInTheDocument();
  expect(screen.getAllByText(/\(71\) 98780-3690/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/dimenezescomercial@gmail.com/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('checkbox', { name: /autorizo o uso dos dados/i })).toBeRequired();
  expect(screen.getByRole('link', { name: /pol.tica de privacidade/i })).toHaveAttribute('href', '#politica-de-privacidade');
  expect(screen.getByRole('button', { name: /enviar solicitação/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/vídeo de apresentação dione menezes/i)).toBeInTheDocument();
});

test('derives the full state name from the development location UF', () => {
  expect(getStateNameFromLocation('Salvador, BA')).toBe('Bahia');
  expect(getStateNameFromLocation('Recife, PE')).toBe('Pernambuco');
  expect(getStateNameFromLocation('Fortaleza, CE')).toBe('Ceará');
  expect(getStateNameFromLocation('Natal, RN')).toBe('Rio Grande do Norte');
  expect(getStateNameFromLocation('Cidade sem UF')).toBeNull();
  expect(getUfFromLocation('Salvador, BA')).toBe('BA');
  expect(getUfFromLocation('Cidade sem UF')).toBeNull();
});

test('opens the state selection page from the header navigation', async () => {
  const { container } = render(<App />);
  const header = within(container.querySelector('.site-header'));

  fireEvent.click(header.getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('heading', { name: /qual será o seu próximo endereço/i })).toBeInTheDocument());
  expect(window.location.hash).toBe('#todos-empreendimentos');
});

test('does not open the state selection automatically on initial load', () => {
  window.location.hash = '#todos-empreendimentos';
  render(<App />);

  expect(screen.queryByRole('heading', { name: /qual será o seu próximo endereço/i })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /todos os empreendimentos/i })).toBeInTheDocument();
});

test('renders the all developments page from the see all link', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: /ver todos os empreendimentos/i }));
  await waitFor(() => expect(screen.getByRole('heading', { name: /qual será o seu próximo endereço/i })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Bahia' }));

  expect(screen.getByRole('heading', { name: /todos os empreendimentos/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Elleve Horto' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Casa Sombreiros' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Infinity Salvador Business' })).toBeInTheDocument();
});

test('asks for a state on the first access and filters Alagoas without mixing Bahia', async () => {
  render(<App />);
  const header = within(document.querySelector('.site-header'));
  fireEvent.click(header.getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('heading', { name: /qual será o seu próximo endereço/i })).toBeInTheDocument());
  expect(screen.getByRole('button', { name: 'Bahia' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Alagoas' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Pernambuco' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Ceará' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Rio Grande do Norte' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /todos os empreendimentos/i })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Alagoas' }));

  expect(screen.getByRole('heading', { name: /todos os empreendimentos/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Jardins do Parque' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Elleve Horto' })).not.toBeInTheDocument();
});

test('opens all developments grouped by state and keeps Todos selected', async () => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Ver todos os empreendimentos' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Ver todos os empreendimentos' }));

  expect(window.sessionStorage.getItem('selectedState')).toBe('ALL');
  expect(screen.getByRole('button', { name: 'Todos os estados' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Todos', pressed: true })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Bahia', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Alagoas', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Pernambuco', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ceará', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Rio Grande do Norte', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Beach Class Natal', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Beach Class Cumbuco', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Arthur Bruno Schwambach', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Jardins do Parque' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Bahia', pressed: false }));
  expect(window.sessionStorage.getItem('selectedState')).toBe('BA');
  expect(screen.getByRole('button', { name: 'Bahia', pressed: true })).toBeInTheDocument();
});

test('uses the map and header dropdown to change the selected state', async () => {
  render(<App />);
  const header = within(document.querySelector('.site-header'));
  fireEvent.click(header.getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Selecionar Bahia' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Selecionar Bahia' }));
  expect(screen.getByRole('heading', { name: 'Elleve Horto' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Bahia/, expanded: false }));
  fireEvent.click(screen.getByRole('menuitem', { name: 'Alagoas' }));

  expect(screen.getByRole('heading', { name: 'Jardins do Parque' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Elleve Horto' })).not.toBeInTheDocument();
});

test.each([
  ['Pernambuco', 'PE', 'Arthur Bruno Schwambach', 'arthur-bruno-schwambach'],
  ['Ceará', 'CE', 'Beach Class Cumbuco', 'beach-class-cumbuco'],
  ['Rio Grande do Norte', 'RN', 'Beach Class Natal', 'beach-class-natal'],
])('selects %s from the map and lists only its developments', async (stateName, uf, projectName, slug) => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: `Selecionar ${stateName}` })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: `Selecionar ${stateName}` }));

  expect(window.sessionStorage.getItem('selectedState')).toBe(uf);
  expect(screen.getByRole('button', { name: stateName, pressed: true })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: projectName, level: 3 })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Elleve Horto' })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Jardins do Parque' })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: uf === 'CE' ? 'Arthur Bruno Schwambach' : 'Beach Class Cumbuco' })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: new RegExp(`${projectName}.*Conhecer empreendimento`, 'i') })).toHaveAttribute('href', `#empreendimento/${slug}`);

  fireEvent.click(screen.getByRole('button', { name: stateName, expanded: false }));
  expect(screen.getByRole('menuitem', { name: new RegExp(`^${stateName}`) })).toHaveClass('is-selected');
  fireEvent.click(screen.getByRole('menuitem', { name: 'Bahia' }));
  expect(screen.queryByRole('heading', { name: projectName })).not.toBeInTheDocument();
});

test('shows the state selection again after a new visit', async () => {
  const { unmount } = render(<App />);

  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));
  await waitFor(() => expect(screen.getByRole('button', { name: 'Bahia' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Bahia' }));
  expect(screen.getByRole('heading', { name: /todos os empreendimentos/i })).toBeInTheDocument();

  unmount();
  const secondVisit = render(<App />);

  expect(screen.getByRole('heading', { name: /todos os empreendimentos/i })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /qual será o seu próximo endereço/i })).not.toBeInTheDocument();

  window.sessionStorage.clear();
  secondVisit.unmount();
  window.location.hash = '';
  render(<App />);

  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));
  await waitFor(() => expect(screen.getByRole('heading', { name: /qual será o seu próximo endereço/i })).toBeInTheDocument());
}, 20000);

test('renders the additional book-based developments', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: /ver todos os empreendimentos/i }));
  await waitFor(() => expect(screen.getByRole('button', { name: 'Bahia' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Bahia' }));

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

test('renders the development detail page with organized images and location without PDF links', () => {
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
  expect(screen.queryByRole('link', { name: /abrir material completo/i })).not.toBeInTheDocument();
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();
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
  expect(screen.getByText('+2 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/Pavimento tipo Business/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Avenida Oceânica - Ondina/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Qualidade urbana/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar infinity salvador - torre business/i }));
  Array.from({ length: 3 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
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

test('uses the organized Única Cardeal assets by section and title', () => {
  window.location.hash = '#empreendimento/unica-cardeal';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Única Cardeal', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+16 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/4 torres/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Planta Home Garden - 58,99 m²/i)).toBeInTheDocument();
  expect(screen.getByText(/Guarita com controle de acesso/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar única cardeal - vista geral/i }));
  Array.from({ length: 5 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina adulto e infantil com prainha/i })).toBeInTheDocument();
});

test('uses the organized Mood Colina assets by section and title', () => {
  window.location.hash = '#empreendimento/mood-colina';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Mood Colina', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('+6 fotos')).toBeInTheDocument();
  expect(screen.getAllByText(/258 apartamentos/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Planta Smart - 57,65 m² - 2 quartos/i)).toBeInTheDocument();
  expect(screen.getByText(/Certificação IPTU Verde indicada no material/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar mood colina - vista geral/i }));
  Array.from({ length: 4 }).forEach(() => fireEvent.click(screen.getByRole('button', { name: /próxima imagem/i })));
  expect(screen.getByRole('dialog', { name: /piscina com deck molhado e raia de 20 m/i })).toBeInTheDocument();
});

test('renders Beach Class Cumbuco perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-cumbuco';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Cumbuco', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('640 unidades residenciais, com 64 por bloco')).toBeInTheDocument();
  expect(screen.getAllByText(/646 vagas rotativas/).length).toBeGreaterThan(0);
  expect(screen.getByText('+18 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(13);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Caucaia%20CE'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Cumbuco - perspectiva aérea frente ao mar/i }));
  expect(screen.getByText('1 / 23')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva da guarderia para equipamentos náuticos/i })).toBeInTheDocument();
  expect(screen.getByText('23 / 23')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta Bloco guarderia para equipamentos náuticos/i }));
  expect(screen.getByText('13 / 13')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar Mapa de localização do Beach Class Cumbuco/i }));
  expect(screen.getByText('1 / 6')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /Entorno: coqueiros e praia do Cumbuco/i })).toBeInTheDocument();
  expect(screen.getByText('6 / 6')).toBeInTheDocument();
});

test('lists Beach Class Iracema under Ceará next to Beach Class Cumbuco', async () => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Selecionar Ceará' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Selecionar Ceará' }));

  expect(screen.getByRole('heading', { name: 'Beach Class Iracema', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Beach Class Cumbuco', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Beach Class Iracema.*Conhecer empreendimento/i })).toHaveAttribute('href', '#empreendimento/beach-class-iracema');
});

test('renders Beach Class Iracema perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-iracema';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Iracema', level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText(/93,41 m²/).length).toBeGreaterThan(0);
  expect(screen.getByText('+11 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(9);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Fortaleza%20CE'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Iracema - perspectiva da fachada da torre/i }));
  expect(screen.getByText('1 / 16')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva do studio com ambiente integrado/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta Studio - 29,16 m²/i }));
  expect(screen.getByText('9 / 9')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar Localização do Beach Class Iracema sobre vista aérea/i }));
  expect(screen.getByText('1 / 3')).toBeInTheDocument();
});

test('lists Beach Class Manguinhos under Pernambuco next to Arthur Bruno Schwambach', async () => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Selecionar Pernambuco' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Selecionar Pernambuco' }));

  expect(screen.getByRole('heading', { name: 'Beach Class Manguinhos', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Arthur Bruno Schwambach', level: 3 })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Beach Class Cumbuco' })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Beach Class Manguinhos.*Conhecer empreendimento/i })).toHaveAttribute('href', '#empreendimento/beach-class-manguinhos');
});

test('renders Beach Class Manguinhos perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-manguinhos';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Manguinhos', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('93.025,66 m²')).toBeInTheDocument();
  expect(screen.getAllByText(/652 vagas/).length).toBeGreaterThan(0);
  expect(screen.getByText('+31 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(28);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Tamandare%20PE'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Manguinhos - perspectiva aérea das casas e do Beach Club/i }));
  expect(screen.getByText('1 / 36')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva da suíte do apartamento de 3 quartos/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta Apartamento de 3 quartos - térreo com Garden e piscina/i }));
  expect(screen.getByText('28 / 28')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar Mapa de localização do Beach Class Manguinhos/i }));
  expect(screen.getByText('1 / 3')).toBeInTheDocument();
});

test('lists Beach Class Marine under Pernambuco with the other Carneiros project', async () => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Selecionar Pernambuco' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Selecionar Pernambuco' }));

  expect(screen.getByRole('heading', { name: 'Beach Class Marine', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Beach Class Manguinhos', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Beach Class Marine.*Conhecer empreendimento/i })).toHaveAttribute('href', '#empreendimento/beach-class-marine');
});

test('renders Beach Class Marine perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-marine';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Marine', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('86.000 m²')).toBeInTheDocument();
  expect(screen.getAllByText(/580 vagas/).length).toBeGreaterThan(0);
  expect(screen.getByText('+24 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(47);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Tamandare%20PE'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Marine - perspectiva aérea do condomínio e da orla/i }));
  expect(screen.getByText('1 / 29')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva da sala de estar do apartamento de 3 quartos de 126 m²/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta 3 quartos 126 m² - Garden e legendas/i }));
  expect(screen.getByText('47 / 47')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar Localização do Beach Class Marine sobre vista aérea/i }));
  expect(screen.getByText('1 / 4')).toBeInTheDocument();
});

test('lists Beach Class Milagres under Alagoas next to Jardins do Parque', async () => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Selecionar Alagoas' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Selecionar Alagoas' }));

  expect(screen.getByRole('heading', { name: 'Beach Class Milagres', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Jardins do Parque' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Beach Class Marine' })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Beach Class Milagres.*Conhecer empreendimento/i })).toHaveAttribute('href', '#empreendimento/beach-class-milagres');
});

test('renders Beach Class Milagres perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-milagres';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Milagres', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('31.068,86 m²')).toBeInTheDocument();
  expect(screen.getAllByText(/227 vagas/).length).toBeGreaterThan(0);
  expect(screen.getByText('+33 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(15);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Milagres%20AL'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Milagres - perspectiva aérea das piscinas e jardins/i }));
  expect(screen.getByText('1 / 38')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva da suíte 2 do bangalô com quarto duplo/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta Bangalô 114,30 m² - pavimento superior/i }));
  expect(screen.getByText('15 / 15')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  expect(screen.getByRole('button', { name: /ampliar Mapa aéreo de localização do Beach Class Milagres/i })).toBeInTheDocument();
});

test('renders Beach Class Natal perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-natal';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Natal', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('2.776,90 m²')).toBeInTheDocument();
  expect(screen.getAllByText(/143 vagas/).length).toBeGreaterThan(0);
  expect(screen.getByText('+22 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(18);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Natal%20RN'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Natal - perspectiva da fachada da torre/i }));
  expect(screen.getByText('1 / 27')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva do quarto do apartamento de 2 quartos de 60,83 m²/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta Apartamento de 2 quartos 60,83 m² .página de referência/i }));
  expect(screen.getByText('18 / 18')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  expect(screen.getByRole('button', { name: /ampliar Entorno: vista aérea de Ponta Negra/i })).toBeInTheDocument();
});

test('lists Beach Class Ponta Negra under Rio Grande do Norte next to Beach Class Natal', async () => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Selecionar Rio Grande do Norte' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Selecionar Rio Grande do Norte' }));

  expect(screen.getByRole('heading', { name: 'Beach Class Ponta Negra', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Beach Class Natal', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Beach Class Ponta Negra.*Conhecer empreendimento/i })).toHaveAttribute('href', '#empreendimento/beach-class-ponta-negra');
});

test('renders Beach Class Ponta Negra perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-ponta-negra';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Ponta Negra', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('6.600,00 m²')).toBeInTheDocument();
  expect(screen.getAllByText(/67 vagas/).length).toBeGreaterThan(0);
  expect(screen.getByText('+17 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(18);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Ponta%20Negra%20Natal%20RN'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Ponta Negra - perspectiva do acesso principal/i }));
  expect(screen.getByText('1 / 22')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva aérea do empreendimento e da praia/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta Apartamento 07 - metragens/i }));
  expect(screen.getByText('18 / 18')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  expect(screen.getByRole('button', { name: /ampliar Mapa de localização com referências/i })).toBeInTheDocument();
});

test('lists Beach Class Porto das Dunas under Ceará with the other Ceará projects', async () => {
  render(<App />);
  fireEvent.click(within(document.querySelector('.site-header')).getByRole('link', { name: 'Empreendimentos' }));

  await waitFor(() => expect(screen.getByRole('button', { name: 'Selecionar Ceará' })).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: 'Selecionar Ceará' }));

  expect(screen.getByRole('heading', { name: 'Beach Class Porto das Dunas', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Beach Class Cumbuco', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Beach Class Iracema', level: 3 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Beach Class Porto das Dunas.*Conhecer empreendimento/i })).toHaveAttribute('href', '#empreendimento/beach-class-porto-das-dunas');
});

test('renders Beach Class Porto das Dunas perspectives, all floor plans and location separately', () => {
  window.location.hash = '#empreendimento/beach-class-porto-das-dunas';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Beach Class Porto das Dunas', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('52.004,97 m²')).toBeInTheDocument();
  expect(screen.getAllByText(/393 vagas/).length).toBeGreaterThan(0);
  expect(screen.getByText('+20 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(19);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Porto%20das%20Dunas'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Beach Class Porto das Dunas - perspectiva das piscinas com hidromassagem/i }));
  expect(screen.getByText('1 / 25')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /perspectiva da área externa do apartamento Garden da coluna 6/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta 3 quartos Garden 116,67 m²/i }));
  expect(screen.getByText('19 / 19')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  expect(screen.getByRole('button', { name: /ampliar Mapa da região de Porto das Dunas e Fortaleza/i })).toBeInTheDocument();
});

test('renders Arthur Bruno Schwambach photos and floor plans in their own sections', () => {
  window.location.hash = '#empreendimento/arthur-bruno-schwambach';
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Arthur Bruno Schwambach', level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText(/122,76 m²/).length).toBeGreaterThan(0);
  expect(screen.getByText('7 pavimentos por edifício')).toBeInTheDocument();
  expect(screen.getAllByText('2 vagas por apartamento').length).toBeGreaterThan(0);
  expect(screen.getByText('+19 fotos')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /ampliar planta/i })).toHaveLength(3);
  expect(screen.getByRole('link', { name: /abrir no mapa/i })).toHaveAttribute('href', expect.stringContaining('Recife%20PE'));
  expect(document.querySelector('a[href$=".pdf"]')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ampliar Arthur Bruno Schwambach - vista aérea e área verde/i }));
  expect(screen.getByText('1 / 24')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /imagem anterior/i }));
  expect(screen.getByRole('dialog', { name: /piscina aquecida e entorno/i })).toBeInTheDocument();
  expect(screen.getByText('24 / 24')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /fechar/i }));

  fireEvent.click(screen.getByRole('button', { name: /ampliar planta pavimento térreo - áreas comuns e legenda/i }));
  expect(screen.getByText('1 / 3')).toBeInTheDocument();
});
