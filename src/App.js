import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

import dionePhoto from './assets/dione-foto1.jpg';
import homeVideo from './assets/video.mp4';
import logoBlue from './assets/logo-azul-dm-transparente.png';
import logoWhite from './assets/logo-branco-dm-transparente.png';
import heroMorning from './assets/Empreendimentos/elleve-horto/banner2.png';
import heroEvening from './assets/Empreendimentos/elleve-horto/banner3.png';
import heroSunset from './assets/Empreendimentos/elleve-horto/banner4.png';
import elleveCard from './assets/Empreendimentos/elleve-horto/06_-_Embasamento.webp';
import elleveFacade from './assets/Empreendimentos/elleve-horto/01_-_Fachada.webp';
import elleveFacadeVertical from './assets/Empreendimentos/elleve-horto/elleve-horto-Fachada-3.webp';
import elleveLobby from './assets/Empreendimentos/elleve-horto/elleve-horto-Lobby_Elevadores.webp';
import ellevePool from './assets/Empreendimentos/elleve-horto/elleve-horto-piscina.png';
import elleveGym from './assets/Empreendimentos/elleve-horto/elleve-horto-academia.png';
import elleveBook from './assets/Empreendimentos/elleve-horto/book.pdf';
import sombreirosCard from './assets/Empreendimentos/casa-sombreiros/MOUBO_08_Fachada_Cidade_High_1_CaBJKhz.webp';
import sombreirosFacade from './assets/Empreendimentos/casa-sombreiros/Casa_Sombreiros_PNG_Fachada.webp';
import sombreirosBook from './assets/Empreendimentos/casa-sombreiros/book.pdf';
import infinityCard from './assets/Empreendimentos/infinity-business/infinity-business-cover.jpg';
import infinityBook from './assets/Empreendimentos/infinity-business/book.pdf';

const CONTACT_EMAIL = 'dimenezescomercial@gmail.com';
const WHATSAPP_DISPLAY = '(71) 98780-3690';
const WHATSAPP_URL = `https://wa.me/5571987803690?text=${encodeURIComponent(
  'Olá, Dione! Vim pelo seu site e gostaria de receber mais informações sobre os empreendimentos Moura Dubeux. Pode me ajudar?'
)}`;

const CONTACT_API_BASE_URL = (
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '')
).replace(/\/$/, '');
const CONTACT_API_URL = `${CONTACT_API_BASE_URL}/api/contact`;
const PRIVACY_POLICY_HASH = '#politica-de-privacidade';

const heroSlides = [
  { src: heroEvening, position: 'center center', alt: 'Elleve Horto ao anoitecer, com Salvador ao fundo' },
  { src: heroMorning, position: 'center center', alt: 'Elleve Horto com vista panorâmica para Salvador e o mar' },
  { src: heroSunset, position: 'center center', alt: 'Entrada do Elleve Horto iluminada pelo pôr do sol' },
];

const createBookPages = (slug, total) => Array.from({ length: total }, (_, index) => ({
  src: `/book-pages/${slug}/page-${String(index + 1).padStart(2, '0')}.jpg`,
  label: `Página ${String(index + 1).padStart(2, '0')}`,
}));

const createBookPagesFrom = (slug, pages, labels = {}) => pages.map((page) => ({
  src: `/book-pages/${slug}/page-${String(page).padStart(2, '0')}.jpg`,
  label: labels[page] || `Página ${String(page).padStart(2, '0')}`,
}));

const developments = [
  {
    slug: 'elleve-horto',
    name: 'Elleve Horto',
    status: 'Lançamento',
    developer: 'Moura Dubeux',
    city: 'Salvador, BA',
    neighborhood: 'Horto Florestal',
    locationTitle: 'Rua Piratancará - Horto Florestal',
    address: 'Rua Piratancará - Horto Florestal, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Piratancar%C3%A1%20Horto%20Florestal%20Salvador%20BA',
    area: '119 a 150 m²',
    profile: '3 e 4 quartos',
    detail: 'Até 4 suítes',
    delivery: 'Janeiro/30',
    image: elleveCard,
    book: elleveBook,
    description: 'Um residencial pensado para viver Salvador com conforto, sofisticação e uma rotina mais leve. O Elleve Horto reúne plantas amplas, áreas comuns completas e arquitetura contemporânea em uma das regiões mais desejadas da cidade.',
    highlights: ['119 a 150 m²', '3 e 4 quartos', 'Até 4 suítes', 'Horto Florestal'],
    stats: [
      ['Construtora', 'Moura Dubeux'],
      ['Localização', 'Horto Florestal'],
      ['Status', 'Lançamento'],
      ['Entrega', 'Janeiro/30'],
    ],
    technical: [
      ['Área total do terreno', '2.508,64 m²'],
      ['Torre', '1 torre'],
      ['Pavimentos', 'G2, G1, lazer, 1º pavimento, 37 pavimentos tipo e cobertura'],
      ['Vagas', '191 vagas internas e vagas externas para visitantes'],
    ],
    amenities: ['Salão de Festas', 'Área gourmet piscina', 'Academia', 'Apoio quadra', 'Brinquedoteca', 'Bicicletário', 'Sala de Jogos', 'Piscina adulto e infantil', 'Parque infantil', 'Praças e lounges', 'Pet Care', 'Delivery e E-commerce', 'Quadra recreativa'],
    projectTeam: ['GAM Arquitetos | Arquitetura', 'Benedito Abbud | Paisagismo', 'Taís Abreu e Luiza Buratto | Ambientação'],
    gallery: [
      { src: elleveCard, label: 'Embasamento' },
      { src: elleveFacade, label: 'Fachada' },
      { src: elleveFacadeVertical, label: 'Fachada vertical' },
      { src: elleveLobby, label: 'Lobby dos elevadores' },
      { src: ellevePool, label: 'Piscina' },
      { src: elleveGym, label: 'Academia' },
    ],
    bookImages: createBookPagesFrom('elleve-horto', [11, 18, 19, 20, 21, 22, 23, 25, 27, 28, 29, 30, 31, 35, 37, 42, 44, 45, 46], {
      11: 'Fachada',
      18: 'Piscina',
      19: 'Pavimento de lazer',
      20: 'Lounge com cascata',
      21: 'Parque infantil',
      22: 'Quadra recreativa',
      23: 'Lobby social',
      25: 'Salão de festas',
      27: 'Brinquedoteca',
      28: 'Sala de jogos',
      29: 'Academia',
      30: 'Gourmet piscina',
      31: 'Apoio quadra',
      35: 'Suíte master',
      37: 'Living',
      42: 'Living',
      44: 'Living',
      45: 'Varanda',
      46: 'Cozinha',
    }),
    floorPlans: createBookPagesFrom('elleve-horto', [34, 36, 38, 40, 41, 43], {
      34: 'Apartamento 119 m² - Coluna 1 padrão',
      36: 'Apartamento 119 m² - Coluna 1 opção 1',
      38: 'Apartamento 119 m² - Coluna 1 opção 2',
      40: 'Apartamento 150 m² - Coluna 2 padrão',
      41: 'Apartamento 150 m² - Coluna 2 opção 1',
      43: 'Apartamento 150 m² - Coluna 2 opção 2',
    }),
    bookPages: createBookPages('elleve-horto', 54),
  },
  {
    slug: 'casa-sombreiros',
    name: 'Casa Sombreiros',
    status: 'Em construção',
    developer: 'Moura Dubeux',
    city: 'Salvador, BA',
    neighborhood: 'Caminho das Árvores',
    locationTitle: 'Alameda dos Sombreiros',
    address: 'Alameda dos Sombreiros, Caminho das Árvores, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Alameda%20dos%20Sombreiros%20Caminho%20das%20%C3%81rvores%20Salvador%20BA',
    area: '168 m²',
    profile: '4 suítes',
    detail: '3 vagas',
    delivery: 'Outubro/29',
    image: sombreirosCard,
    book: sombreirosBook,
    description: 'O Casa Sombreiros nasce da harmonia entre o essencial e o sofisticado. Localizado no Caminho das Árvores, oferece proximidade com natureza, comodidades e design contemporâneo, com apartamentos de 168 m², 4 suítes e 3 vagas de garagem.',
    highlights: ['168 m²', '4 suítes', '3 vagas', 'Caminho das Árvores'],
    stats: [
      ['Construtora', 'Moura Dubeux'],
      ['Localização', 'Caminho das Árvores'],
      ['Status', 'Em construção'],
      ['Entrega', 'Outubro/29'],
    ],
    technical: [
      ['Área total do terreno', '2.526,06 m²'],
      ['Torre', '2 apartamentos por andar, 60 apartamentos'],
      ['Pavimentos', 'Garagens G1, G2 e G3, pavimento de lazer, 30 pavimentos tipo e cobertura'],
      ['Vagas', '188 vagas totais, sendo 3 vagas por apartamento'],
    ],
    amenities: ['Salão de Festas', 'Brinquedoteca', 'Sala de Jogos', 'Lobby', 'Piscina com raia de 25m', 'Piscina infantil', 'Hidromassagem aquecida', 'Parque infantil', '2 áreas gourmet externas', 'Quadra recreativa', 'Pet Care', 'Espaço Delivery', 'Espaço E-commerce', 'Bicicletários'],
    projectTeam: ['Arc+CO | Arquitetura', 'Laís Galvão | Ambientação', 'Benedito Abbud | Paisagismo'],
    gallery: [
      { src: sombreirosCard, label: 'Fachada cidade' },
      { src: sombreirosFacade, label: 'Fachada' },
      ...createBookPagesFrom('casa-sombreiros', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], {
        10: 'Embasamento',
        11: 'Detalhe de fachada',
        12: 'Piscina',
        13: 'Piscina',
        14: 'Quadra recreativa',
        15: 'Apoio quadra',
        16: 'Parque infantil',
        17: 'Lobby',
        18: 'Academia',
        19: 'Sala de jogos',
        20: 'Brinquedoteca',
        21: 'Salão de festas',
        22: 'Circulação externa',
      }),
    ],
    bookImages: createBookPagesFrom('casa-sombreiros', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 31, 32, 34, 35], {
      10: 'Embasamento',
      11: 'Detalhe de fachada',
      12: 'Piscina',
      13: 'Piscina',
      14: 'Quadra recreativa',
      15: 'Apoio quadra',
      16: 'Parque infantil',
      17: 'Lobby',
      18: 'Academia',
      19: 'Sala de jogos',
      20: 'Brinquedoteca',
      21: 'Salão de festas',
      22: 'Circulação externa',
      31: 'Living',
      32: 'Suíte master ampliada',
      34: 'Living ampliado com cozinha integrada',
      35: 'Living ampliado',
    }),
    floorPlans: createBookPagesFrom('casa-sombreiros', [28, 29, 30, 33], {
      28: 'Apartamento 168 m² - Terminação 02 padrão',
      29: 'Apartamento 168 m² - Terminação 02 opção 1',
      30: 'Apartamento 168 m² - Terminação 02 opção 2',
      33: 'Apartamento 168 m² - Terminação 02 opção 3',
    }),
    bookPages: createBookPages('casa-sombreiros', 41),
  },
  {
    slug: 'infinity-salvador-business',
    name: 'Infinity Salvador Business',
    status: 'Lançamento',
    developer: 'Moura Dubeux',
    city: 'Salvador, BA',
    neighborhood: 'Ondina',
    locationTitle: 'Av. Oceânica, 2294 - Ondina',
    address: 'Av. Oceânica, 2294 - Ondina, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Av.%20Oce%C3%A2nica%202294%20Ondina%20Salvador%20BA',
    area: '32 a 83 m²',
    profile: 'Salas comerciais',
    detail: 'Vista para o mar',
    delivery: 'Dezembro/28',
    image: infinityCard,
    book: infinityBook,
    description: 'Um endereço empresarial em Ondina para quem busca presença, vista e uma localização estratégica em Salvador. O Infinity Salvador Business reúne salas comerciais com metragens versáteis e uma apresentação pensada para negócios de alto padrão.',
    highlights: ['32 a 83 m²', 'Salas comerciais', 'Vista para o mar', 'Ondina'],
    stats: [
      ['Construtora', 'Moura Dubeux'],
      ['Localização', 'Ondina'],
      ['Status', 'Lançamento'],
      ['Entrega', 'Dezembro/28'],
    ],
    technical: [
      ['Tipologia', 'Salas comerciais e consultórios'],
      ['Área privativa', '32 a 83 m²'],
      ['Projeto', 'Retrofit com pavimentos business'],
      ['Registro', 'R-19 da matrícula nº 15.248 do 1º Ofício de Registro de Imóveis de Salvador'],
    ],
    amenities: ['Lobby Oceânica', 'Pavimento Business', 'Garden Business', 'Consultório odontológico', 'Escritórios com colunas integradas', 'Vista para o mar', 'Implantação com acesso business'],
    projectTeam: ['Moura Dubeux | Incorporação e construção'],
    gallery: [
      { src: infinityCard, label: 'Perspectiva do empreendimento' },
      ...createBookPagesFrom('infinity-business', [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19], {
        5: 'Infinity Salvador',
        6: 'Fachada',
        7: 'Vista aérea',
        8: 'Lobby',
        9: 'Ambiente business',
        10: 'Sala comercial',
        11: 'Consultório',
        12: 'Fachada',
        13: 'Lobby',
        14: 'Ambiente corporativo',
        15: 'Área comum',
        18: 'Lobby Oceânica',
        19: 'Ambiente interno',
      }),
    ],
    bookImages: createBookPagesFrom('infinity-business', [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 28, 29, 30, 31], {
      5: 'Infinity Salvador',
      6: 'Fachada',
      7: 'Vista aérea',
      8: 'Lobby',
      9: 'Ambiente business',
      10: 'Sala comercial',
      11: 'Consultório',
      12: 'Fachada',
      13: 'Lobby',
      14: 'Ambiente corporativo',
      15: 'Área comum',
      18: 'Lobby Oceânica',
      19: 'Ambiente interno',
      28: 'Ambiente business',
      29: 'Ambiente business',
      30: 'MD Store',
      31: 'Personalização',
    }),
    floorPlans: createBookPagesFrom('infinity-business', [20, 21, 22, 23, 26, 27], {
      20: 'Sala/consultório - 1 coluna',
      21: 'Sala comercial - 2 colunas integradas',
      22: 'Sala/consultório odontológico',
      23: 'Sala comercial',
      26: 'Sala comercial - 4 colunas integradas',
      27: 'Sala business',
    }),
    bookPages: createBookPages('infinity-business', 32),
  },
];

function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.4" /></>,
    ruler: <><path d="m3 17 14-14 4 4L7 21H3v-4Z" /><path d="m14 6 4 4M11 9l2 2M8 12l2 2M5 15l2 2" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    document: <><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v5h5M9 12h6M9 16h6" /></>,
    handshake: <><path d="m8 12 3 3a2 2 0 0 0 3 0l4-4" /><path d="m2 12 5-5 4 2 2-2 4 2 5 5M5 15l2 2M9 16l2 2M13 16l1 1" /></>,
    whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.5A9 9 0 1 1 21 11.5Z" /><path d="M8.2 7.8c.3 3.8 2.2 5.7 6 6.4.5.1 1-.8 1.3-1.2-.9-.4-1.7-.8-2.5-1.3-.3.4-.6.8-.9.8-1.1-.5-2.1-1.5-2.6-2.6 0-.3.4-.7.8-1-.5-.8-.9-1.6-1.3-2.4-.4.2-.9.8-.8 1.3Z" /></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.2" /><path d="M16.8 7.2h.01" /></>,
    mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></>,
  };

  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Brand({ variant = 'auto' }) {
  return (
    <span className={`brand brand--${variant}`} aria-label="Dione Menezes">
      <span className="brand__mark" aria-hidden="true">
        <img className="brand__logo brand__logo--light" src={logoWhite} alt="" />
        <img className="brand__logo brand__logo--blue" src={logoBlue} alt="" />
      </span>
      <span className="brand__copy">
        <strong>Dione Menezes</strong>
        <small>Especialista em vendas Moura Dubeux</small>
      </span>
    </span>
  );
}

function Header({ scrolled, activeSection, menuOpen, setMenuOpen }) {
  const navItems = [['inicio', 'Início'], ['empreendimentos', 'Empreendimentos'], ['sobre', 'Sobre'], ['contato', 'Contato']];
  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}>
      <div className="container site-header__inner">
        <a href="#inicio" className="site-header__brand" onClick={() => setMenuOpen(false)}><Brand /></a>
        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Navegação principal">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="button button--header button--mobile-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={19} /> Falar no WhatsApp
          </a>
        </nav>
        <a className="button button--header site-header__contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={19} /> Falar no WhatsApp
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  );
}

function Hero({ currentSlide, setCurrentSlide }) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img key={slide.src} src={slide.src} alt="" className={currentSlide === index ? 'is-active' : ''}
            style={{ objectPosition: slide.position }} fetchPriority={index === 0 ? 'high' : 'auto'} />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__copy">
          <h1 id="hero-title">Seu próximo endereço começa com a <em>escolha certa.</em></h1>
          <p className="hero__description">Atendimento especializado para você encontrar o imóvel Moura Dubeux ideal, com orientação personalizada, segurança, transparência e acompanhamento em cada etapa da sua compra.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#empreendimentos">Ver empreendimentos <Icon name="arrow" /></a>
            <a className="button button--outline-light" href="#sobre"><Icon name="play" size={22} /> Conhecer a Dione</a>
          </div>
        </div>
        <div className="hero__side-note" aria-hidden="true"><span /><p>Mais que imóveis,<br />novos capítulos<br />começam aqui.</p></div>
      </div>
      <div className="container hero__footer">
        <div className="hero__controls" aria-label="Selecionar imagem do empreendimento">
          {heroSlides.map((slide, index) => (
            <button key={slide.src} type="button" className={currentSlide === index ? 'is-active' : ''}
              onClick={() => setCurrentSlide(index)} aria-label={`Exibir imagem ${index + 1}: ${slide.alt}`}
              aria-current={currentSlide === index ? 'true' : undefined}><span /></button>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentCard({ development, index }) {
  return (
    <a className="development-card" href={`#empreendimento/${development.slug}`} style={{ '--card-delay': `${index * 90}ms` }}>
      <div className="development-card__media">
        <img src={development.image} alt={`Fachada do empreendimento ${development.name}`} loading="lazy" />
        <span className="development-card__tag">{development.status}</span>
        <span className="development-card__number">0{index + 1}</span>
      </div>
      <div className="development-card__body">
        <div className="development-card__heading">
          <div><p><Icon name="pin" size={16} /> {development.city}</p><h3>{development.name}</h3></div>
          <span className="development-card__arrow" aria-hidden="true"><Icon name="arrow" size={19} /></span>
        </div>
        <div className="development-card__facts">
          <span><Icon name="ruler" size={17} /> {development.area}</span>
          <span><Icon name={development.name.includes('Business') ? 'briefcase' : 'home'} size={17} /> {development.profile}</span>
          <span><Icon name="document" size={17} /> {development.detail}</span>
        </div>
        <span className="development-card__link">Conhecer empreendimento <Icon name="arrow" size={17} /></span>
      </div>
    </a>
  );
}

function Developments() {
  const featuredDevelopments = developments.slice(0, 4);

  return (
    <section className="developments section" id="empreendimentos" aria-labelledby="developments-title">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow"><span /> Viva o seu melhor agora</p><h2 id="developments-title">Empreendimentos <em>em destaque</em></h2></div>
          <p className="section-heading__intro">Uma seleção de endereços especiais em Salvador para morar, trabalhar ou investir com confiança.</p>
        </div>
        <div className="developments__grid">
          {featuredDevelopments.map((development, index) => <DevelopmentCard key={development.name} development={development} index={index} />)}
        </div>
        <div className="developments__bottom">
          <p><strong>Não encontrou o que procura?</strong> Veja todas as opções disponíveis.</p>
          <a className="developments__cta" href="#todos-empreendimentos">Ver todos os empreendimentos <Icon name="arrow" size={19} /></a>
        </div>
      </div>
    </section>
  );
}

function AllDevelopmentsPage() {
  return (
    <main className="all-developments-page" id="conteudo">
      <section className="all-developments-hero">
        <div className="container">
          <a className="detail-back" href="#empreendimentos"><Icon name="arrow" size={18} /> Voltar para início</a>
          <p className="eyebrow eyebrow--light"><span /> Portfólio</p>
          <h1>Todos os empreendimentos</h1>
          <p>Conheça a seleção completa de oportunidades Moura Dubeux disponíveis para morar, trabalhar ou investir.</p>
        </div>
      </section>

      <section className="all-developments-list section" aria-labelledby="all-developments-title">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span /> Salvador / BA</p><h2 id="all-developments-title">Escolha seu próximo endereço</h2></div>
            <p className="section-heading__intro">Abra cada empreendimento para ver imagens, plantas, localização e informações completas.</p>
          </div>
          <div className="developments__grid">
            {developments.map((development, index) => <DevelopmentCard key={development.name} development={development} index={index} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

function PrivacyPolicyPage() {
  return (
    <main className="privacy-page" id="conteudo">
      <section className="privacy-hero" aria-labelledby="privacy-title">
        <div className="container">
          <a className="detail-back" href="#contato"><Icon name="arrow" size={18} /> Voltar para contato</a>
          <p className="eyebrow eyebrow--light"><span /> Privacidade</p>
          <h1 id="privacy-title">Política de Privacidade</h1>
          <p>Última revisão: 16 de setembro de 2026</p>
        </div>
      </section>

      <section className="privacy-content section" aria-label="Texto da política de privacidade">
        <div className="container privacy-content__grid">
          <aside className="privacy-content__summary" aria-label="Resumo da política">
            <span>Dione Menezes</span>
            <strong>Especialista em Vendas - CRECI 36634</strong>
            <a href={`mailto:${CONTACT_EMAIL}`}><Icon name="mail" size={17} /> {CONTACT_EMAIL}</a>
          </aside>

          <div className="privacy-content__body">
            <section>
              <h2>Canal profissional</h2>
              <p>Este site é o canal profissional de Dione Menezes, Especialista em Vendas - CRECI 36634, destinado ao atendimento relacionado a imóveis e empreendimentos.</p>
              <p>Dúvidas relacionadas à privacidade e ao tratamento de dados pessoais poderão ser encaminhadas para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </section>

            <section>
              <h2>Dados coletados</h2>
              <p>Quando você entra em contato por meio dos formulários disponíveis neste site, poderão ser coletadas informações como nome, telefone, e-mail, empreendimento de interesse, mensagem e outras informações fornecidas voluntariamente durante o atendimento.</p>
              <p>Caso o contato seja realizado por serviços externos, como WhatsApp ou e-mail, os dados também poderão ser tratados de acordo com as políticas próprias dessas plataformas.</p>
            </section>

            <section>
              <h2>Uso das informações</h2>
              <p>Os dados fornecidos poderão ser utilizados para responder solicitações de contato, fornecer informações sobre imóveis e empreendimentos, compreender o interesse do cliente, encaminhar materiais solicitados e dar continuidade ao atendimento comercial.</p>
              <p>Informações sobre preços, disponibilidade, condições comerciais, características e demais detalhes dos empreendimentos estão sujeitas à confirmação junto à construtora ou ao responsável pelo imóvel.</p>
            </section>

            <section>
              <h2>Compartilhamento e serviços</h2>
              <p>Os dados pessoais poderão ser processados por serviços necessários ao funcionamento do site e ao atendimento, como serviços de e-mail, formulários, comunicação e hospedagem.</p>
              <p>Quando necessário para atender à solicitação do usuário, determinadas informações poderão ser compartilhadas com a construtora ou profissionais envolvidos no atendimento imobiliário.</p>
              <p>Os dados pessoais não são comercializados.</p>
            </section>

            <section>
              <h2>Navegação e cookies</h2>
              <p>O site poderá coletar informações técnicas relacionadas à navegação, como páginas acessadas, tipo de dispositivo, origem do acesso e interações realizadas no site.</p>
              <p>Caso sejam utilizadas ferramentas de análise, publicidade ou medição de campanhas, esta política poderá ser atualizada para informar os serviços utilizados e os dados tratados.</p>
              <p>O uso de cookies, quando aplicável, poderá ocorrer para garantir o funcionamento do site, analisar a utilização das páginas e melhorar a experiência do visitante.</p>
            </section>

            <section>
              <h2>Retenção e segurança</h2>
              <p>Os dados serão mantidos pelo período necessário para realização do atendimento, cumprimento de obrigações aplicáveis e proteção de direitos.</p>
              <p>São adotadas medidas razoáveis de segurança para reduzir riscos de acesso não autorizado, alteração, divulgação ou perda de informações. Entretanto, nenhum sistema conectado à internet pode garantir segurança absoluta.</p>
            </section>

            <section>
              <h2>Direitos do titular</h2>
              <p>Nos termos da Lei Geral de Proteção de Dados Pessoais - LGPD (Lei nº 13.709/2018), o titular poderá solicitar, quando aplicável:</p>
              <ul>
                <li>confirmação da existência de tratamento;</li>
                <li>acesso aos seus dados pessoais;</li>
                <li>correção de informações incorretas, incompletas ou desatualizadas;</li>
                <li>informações sobre o tratamento realizado;</li>
                <li>exclusão dos dados pessoais, quando cabível.</li>
              </ul>
              <p>As solicitações poderão ser realizadas pelo e-mail <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
              <p>Para proteger os dados do próprio titular, poderá ser necessária a confirmação de identidade antes do atendimento da solicitação.</p>
            </section>

            <section>
              <h2>Serviços externos</h2>
              <p>Este site poderá conter links para serviços externos, incluindo WhatsApp, redes sociais, sites de construtoras e páginas de empreendimentos.</p>
              <p>Esses serviços possuem suas próprias políticas de privacidade e condições de uso, sendo recomendável que o usuário consulte esses documentos ao acessar plataformas externas.</p>
            </section>

            <section>
              <h2>Atualizações desta política</h2>
              <p>Esta Política de Privacidade poderá ser atualizada sempre que houver mudanças no funcionamento do site, nos serviços utilizados ou nas práticas relacionadas ao tratamento de dados.</p>
              <p>A data apresentada no início desta página indicará a versão mais recente da política.</p>
            </section>

            <footer className="privacy-content__signature">
              <strong>Dione Menezes</strong>
              <span>Especialista em Vendas - CRECI 36634</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>Contato: {CONTACT_EMAIL}</a>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}

function DevelopmentDetail({ development }) {
  const lightboxGroups = useMemo(() => (
    development ? {
      gallery: development.gallery,
      floorPlans: development.floorPlans,
    } : { gallery: [], floorPlans: [] }
  ), [development]);
  const [activeLightbox, setActiveLightbox] = useState(null);
  const activeImages = activeLightbox ? lightboxGroups[activeLightbox.group] : [];
  const activeImage = activeLightbox ? activeImages[activeLightbox.index] : null;
  const visibleGalleryImages = lightboxGroups.gallery.slice(0, 5);

  const openImage = (group, index) => setActiveLightbox({ group, index });
  const scrollToDetailSection = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
  };
  const closeImage = useCallback(() => setActiveLightbox(null), []);
  const showImage = useCallback((direction) => {
    setActiveLightbox((current) => {
      if (!current) return current;
      const groupImages = lightboxGroups[current.group];
      if (!groupImages.length) return current;
      return {
        ...current,
        index: (current.index + direction + groupImages.length) % groupImages.length,
      };
    });
  }, [lightboxGroups]);

  useEffect(() => {
    if (!activeLightbox) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeImage();
      if (event.key === 'ArrowRight') showImage(1);
      if (event.key === 'ArrowLeft') showImage(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightbox, closeImage, showImage]);

  if (!development) {
    return (
      <main className="detail-page detail-page--missing" id="conteudo">
        <section className="detail-hero detail-hero--missing">
          <div className="container">
            <a className="detail-back" href="#empreendimentos"><Icon name="arrow" size={18} /> Voltar para empreendimentos</a>
            <h1>Empreendimento não encontrado</h1>
            <p>Volte para a seleção de empreendimentos e escolha uma das opções disponíveis.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="detail-page" id="conteudo">
      <section className="detail-hero">
        <div className="detail-hero__media" aria-hidden="true">
          <img src={development.image} alt="" />
        </div>
        <div className="detail-hero__overlay" />
        <div className="container detail-hero__content">
          <a className="detail-back" href="#empreendimentos"><Icon name="arrow" size={18} /> Voltar para empreendimentos</a>
          <p className="eyebrow eyebrow--light"><span /> {development.status}</p>
          <h1>{development.name}</h1>
          <p className="detail-hero__location"><Icon name="pin" size={18} /> {development.address}</p>
        </div>
      </section>

      <section className="detail-info-bar" aria-label={`Resumo do ${development.name}`}>
        <div className="container detail-info-bar__grid">
          {development.stats.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Saber mais via WhatsApp <Icon name="arrow" size={16} /></a>
        </div>
      </section>

      <nav className="detail-toc" aria-label="Sumário do empreendimento">
        <div className="container detail-toc__inner">
          <span>Sumário</span>
          <a href="#detalhes-informacoes" onClick={(event) => scrollToDetailSection(event, 'detalhes-informacoes')}>Informações</a>
          <a href="#detalhes-ficha-tecnica" onClick={(event) => scrollToDetailSection(event, 'detalhes-ficha-tecnica')}>Ficha técnica</a>
          <a href="#detalhes-lazer" onClick={(event) => scrollToDetailSection(event, 'detalhes-lazer')}>Lazer</a>
          <a href="#detalhes-imagens" onClick={(event) => scrollToDetailSection(event, 'detalhes-imagens')}>Imagens</a>
          <a href="#detalhes-plantas" onClick={(event) => scrollToDetailSection(event, 'detalhes-plantas')}>Plantas</a>
          <a href="#detalhes-localizacao" onClick={(event) => scrollToDetailSection(event, 'detalhes-localizacao')}>Localização</a>
        </div>
      </nav>

      <section className="detail-summary section" id="detalhes-informacoes">
        <div className="container detail-summary__grid">
          <div>
            <p className="eyebrow"><span /> Informações</p>
            <h2>{development.name}</h2>
            <p>{development.description}</p>
          </div>
          <div className="detail-facts" aria-label={`Características do ${development.name}`}>
            <article><Icon name="pin" size={22} /><span>Localização</span><strong>{development.locationTitle}</strong></article>
            <article><Icon name="ruler" size={22} /><span>Área</span><strong>{development.area}</strong></article>
            <article><Icon name={development.name.includes('Business') ? 'briefcase' : 'home'} size={22} /><span>Perfil</span><strong>{development.profile}</strong></article>
            <article><Icon name="document" size={22} /><span>Destaque</span><strong>{development.detail}</strong></article>
          </div>
        </div>
      </section>

      <section className="detail-technical section" id="detalhes-ficha-tecnica" aria-labelledby="technical-title">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span /> Detalhes</p><h2 id="technical-title">Ficha técnica</h2></div>
            <p className="section-heading__intro">Informações organizadas a partir do book do empreendimento.</p>
          </div>
          <div className="detail-technical__grid">
            {development.technical.map(([label, value]) => (
              <article key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
          <div className="detail-projects">
            <h3>Projetistas</h3>
            <ul>
              {development.projectTeam.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="detail-amenities section" id="detalhes-lazer" aria-labelledby="amenities-title">
        <div className="container">
          <p className="eyebrow eyebrow--warm"><span /> Áreas comuns e lazer</p>
          <h2 id="amenities-title">Tudo pensado para o dia a dia.</h2>
          <div className="detail-amenities__chips">
            {development.amenities.map((item) => <span key={item}><Icon name="play" size={17} /> {item}</span>)}
          </div>
        </div>
      </section>

      <section className="detail-gallery section" id="detalhes-imagens" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span /> Galeria</p><h2 id="gallery-title">Imagens do empreendimento</h2></div>
            <p className="section-heading__intro">Clique em qualquer imagem para visualizar em tela cheia.</p>
          </div>
          <div className="detail-gallery__grid">
            {visibleGalleryImages.map((item, index) => (
              <figure key={`${item.src}-${item.label}`} className={index === 0 ? 'is-large' : ''}>
                <button type="button" onClick={() => openImage('gallery', index)} aria-label={`Ampliar ${item.label}`}>
                  <img src={item.src} alt={`${item.label} do ${development.name}`} loading="lazy" />
                </button>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-floor-plans section" id="detalhes-plantas" aria-labelledby="floor-plans-title">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span /> Plantas</p><h2 id="floor-plans-title">Plantas dos imóveis</h2></div>
            <p className="section-heading__intro">Somente plantas internas de cada unidade, apartamento ou sala. Ao abrir uma imagem, você navega por todas as opções disponíveis.</p>
          </div>
          <div className="detail-floor-plans__grid">
            {development.floorPlans.slice(0, 5).map((item, index) => (
              <button key={item.src} type="button" onClick={() => openImage('floorPlans', index)} aria-label={`Ampliar planta ${item.label}`}>
                <img src={item.src} alt={`Planta interna ${item.label} do ${development.name}`} loading="lazy" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-location section" id="detalhes-localizacao" aria-labelledby="location-title">
        <div className="container detail-location__grid">
          <div>
            <p className="eyebrow"><span /> Localização</p>
            <h2 id="location-title">Endereço do empreendimento</h2>
            <p>{development.address}</p>
          </div>
          <a className="button button--primary" href={development.mapUrl} target="_blank" rel="noreferrer">Abrir no mapa <Icon name="pin" size={18} /></a>
        </div>
      </section>

      {activeImage && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.label} onClick={closeImage}>
          <button type="button" className="image-lightbox__close" onClick={closeImage} aria-label="Fechar imagem"><Icon name="close" size={26} /></button>
          <button type="button" className="image-lightbox__nav image-lightbox__nav--prev" onClick={(event) => { event.stopPropagation(); showImage(-1); }} aria-label="Imagem anterior"><Icon name="arrow" size={30} /></button>
          <button type="button" className="image-lightbox__nav image-lightbox__nav--next" onClick={(event) => { event.stopPropagation(); showImage(1); }} aria-label="Próxima imagem"><Icon name="arrow" size={30} /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.label} />
            <figcaption>
              <span>{activeImage.label}</span>
              <small>{activeLightbox.index + 1} / {activeImages.length}</small>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}

function About() {
  const pillars = [
    { icon: 'user', title: 'Curadoria personalizada', text: 'Indico os empreendimentos que realmente combinam com seu perfil e seus planos.' },
    { icon: 'document', title: 'Condições exclusivas', text: 'Você recebe oportunidades e informações claras para decidir com tranquilidade.' },
    { icon: 'handshake', title: 'Presença em cada etapa', text: 'Da primeira conversa à entrega, sigo ao seu lado durante toda a jornada.' },
  ];
  return (
    <section className="about section" id="sobre" aria-labelledby="about-title">
      <div className="about__visual">
        <img src={dionePhoto} alt="Dione Menezes, especialista em vendas Moura Dubeux" loading="lazy" />
        <div className="about__visual-copy" aria-hidden="true"><span>Sonhos</span><span>Planos</span><span>Conquistas</span></div>
        <blockquote>“Imóveis que vão além de endereços. São histórias de vida.”<cite>Dione Menezes</cite></blockquote>
      </div>
      <div className="about__content">
        <p className="eyebrow"><span /> Sobre mim</p>
        <h2 id="about-title">Atendimento próximo.<br /><em>Escolha segura.</em></h2>
        <p>Sou Dione Menezes, especialista em vendas da Moura Dubeux em Salvador. Meu propósito é entender o que você busca e transformar essa escolha em uma experiência leve, clara e segura.</p>
        <p>Acompanho cada detalhe - da curadoria dos melhores empreendimentos às condições de compra - para que você tenha confiança em todas as decisões.</p>
        <div className="about__pillars">
          {pillars.map((pillar) => <article key={pillar.title}><span className="about__pillar-icon"><Icon name={pillar.icon} size={25} /></span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line no-unused-vars
function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="contact__background" aria-hidden="true" />
      <div className="container contact__inner">
        <div><p className="eyebrow eyebrow--light"><span /> Vamos conversar?</p><h2 id="contact-title">Vamos encontrar o imóvel<br /><em>certo para você?</em></h2></div>
        <div className="contact__action">
          <a className="button button--whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={25} /> Falar no WhatsApp <Icon name="arrow" size={19} /></a>
          <p>Conte sobre o seu momento. Estou pronta para ajudar você a dar o próximo passo em Salvador.</p>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line no-unused-vars
function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = 'Solicitação de informações - Site Dione Menezes';
    const body = [
      `Nome: ${formData.get('name')}`,
      `Telefone/WhatsApp: ${formData.get('phone')}`,
      `E-mail: ${formData.get('email')}`,
      `Finalidade do imóvel: ${formData.get('goal')}`,
      `Melhor horário para contato: ${formData.get('bestTime') || 'Não informado'}`,
      '',
      `Mensagem:`,
      formData.get('message') || 'Não informada',
      '',
      'Autorização: o usuário autorizou o uso dos dados enviados para responder a esta solicitação.',
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact contact--form" id="contato" aria-labelledby="contact-title">
      <div className="contact__background" aria-hidden="true" />
      <div className="container contact-form__inner">
        <div className="contact-form__copy">
          <p className="eyebrow eyebrow--light"><span /> Contato</p>
          <h2 id="contact-title">Vamos encontrar o imóvel ideal <em>para você.</em></h2>
          <p>Preencha o formulário ao lado ou fale diretamente comigo no WhatsApp. Vou entender o seu momento e indicar as melhores opções com segurança e transparência.</p>
          <div className="contact-form__details">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={25} /><span><small>WhatsApp</small>{WHATSAPP_DISPLAY}</span></a>
            <a href={`mailto:${CONTACT_EMAIL}`}><Icon name="mail" size={25} /><span><small>E-mail</small>{CONTACT_EMAIL}</span></a>
            <p><Icon name="pin" size={25} /><span><small>Atendimento</small>Salvador, Feira de Santana e região</span></p>
          </div>
        </div>

        <form className="contact-form__card" onSubmit={handleSubmit}>
          <div className="contact-form__card-corner" aria-hidden="true" />
          <h3>Solicitar informações</h3>
          <p>Retorno em até 24h úteis.</p>
          <div className="contact-form__grid">
            <label>
              <span>Nome completo</span>
              <input name="name" type="text" placeholder="Seu nome completo" required />
            </label>
            <label>
              <span>Telefone / WhatsApp</span>
              <input name="phone" type="tel" placeholder="(71) 9 0000-0000" required />
            </label>
            <label className="is-wide">
              <span>E-mail</span>
              <input name="email" type="email" placeholder="seu@email.com" required />
            </label>
            <label>
              <span>Finalidade do imóvel</span>
              <select name="goal" defaultValue="" required>
                <option value="" disabled>Selecione uma opção</option>
                <option value="Morar">Morar</option>
                <option value="Investir">Investir</option>
                <option value="Sala comercial">Sala comercial</option>
                <option value="Ainda estou avaliando">Ainda estou avaliando</option>
              </select>
            </label>
            <label>
              <span>Melhor horário para contato (opcional)</span>
              <input name="bestTime" type="text" placeholder="Ex.: dias úteis, depois das 18h" />
            </label>
            <label className="is-wide">
              <span>Mensagem</span>
              <textarea name="message" maxLength="500" placeholder="Como posso ajudar você?" />
            </label>
          </div>
          <label className="contact-form__privacy">
            <input name="privacy" type="checkbox" required />
            <span>Autorizo o uso dos dados enviados para responder a esta solicitação, conforme a <a href={PRIVACY_POLICY_HASH}>Política de Privacidade</a>.</span>
          </label>
          <button className="button contact-form__submit" type="submit">Enviar solicitação <Icon name="arrow" size={19} /></button>
          <div className="contact-form__divider"><span>ou</span></div>
          <a className="contact-form__alternate" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={22} /> Ou, se preferir, converse pelo <strong>WhatsApp.</strong></a>
        </form>
      </div>
    </section>
  );
}

function ContactFormApi() {
  const [formFeedback, setFormFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      goal: formData.get('goal'),
      bestTime: formData.get('bestTime'),
      message: formData.get('message'),
      privacy: formData.get('privacy') === 'on',
    };

    setIsSubmitting(true);
    setFormFeedback(null);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Não foi possível enviar sua solicitação agora.');
      }

      form.reset();
      setFormFeedback({ type: 'success', message: 'Solicitação enviada com sucesso. Em breve entrarei em contato.' });
    } catch (error) {
      setFormFeedback({ type: 'error', message: error.message || 'Não foi possível enviar sua solicitação. Tente novamente ou fale pelo WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact contact--form" id="contato" aria-labelledby="contact-title">
      <div className="contact__background" aria-hidden="true" />
      <div className="container contact-form__inner">
        <div className="contact-form__copy">
          <p className="eyebrow eyebrow--light"><span /> Contato</p>
          <h2 id="contact-title">Vamos encontrar o imóvel ideal <em>para você.</em></h2>
          <p>Preencha o formulário ao lado ou fale diretamente comigo no WhatsApp. Vou entender o seu momento e indicar as melhores opções com segurança e transparência.</p>
          <div className="contact-form__details">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={25} /><span><small>WhatsApp</small>{WHATSAPP_DISPLAY}</span></a>
            <a href={`mailto:${CONTACT_EMAIL}`}><Icon name="mail" size={25} /><span><small>E-mail</small>{CONTACT_EMAIL}</span></a>
            <p><Icon name="pin" size={25} /><span><small>Atendimento</small>Salvador, Feira de Santana e região</span></p>
          </div>
        </div>

        <form className="contact-form__card" onSubmit={handleSubmit}>
          <div className="contact-form__card-corner" aria-hidden="true" />
          <h3>Solicitar informações</h3>
          <p>Retorno em até 24h úteis.</p>
          <div className="contact-form__grid">
            <label>
              <span>Nome completo</span>
              <input name="name" type="text" placeholder="Seu nome completo" required />
            </label>
            <label>
              <span>Telefone / WhatsApp</span>
              <input name="phone" type="tel" placeholder="(71) 9 0000-0000" required />
            </label>
            <label className="is-wide">
              <span>E-mail</span>
              <input name="email" type="email" placeholder="seu@email.com" required />
            </label>
            <label>
              <span>Finalidade do imóvel</span>
              <select name="goal" defaultValue="" required>
                <option value="" disabled>Selecione uma opção</option>
                <option value="Morar">Morar</option>
                <option value="Investir">Investir</option>
                <option value="Sala comercial">Sala comercial</option>
                <option value="Ainda estou avaliando">Ainda estou avaliando</option>
              </select>
            </label>
            <label>
              <span>Melhor horário para contato (opcional)</span>
              <input name="bestTime" type="text" placeholder="Ex.: dias úteis, depois das 18h" />
            </label>
            <label className="is-wide">
              <span>Mensagem</span>
              <textarea name="message" maxLength="500" placeholder="Como posso ajudar você?" />
            </label>
          </div>
          <label className="contact-form__privacy">
            <input name="privacy" type="checkbox" required />
            <span>Autorizo o uso dos dados enviados para responder a esta solicitação, conforme a <a href={PRIVACY_POLICY_HASH}>Política de Privacidade</a>.</span>
          </label>
          <button className="button contact-form__submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar solicitação'} <Icon name="arrow" size={19} />
          </button>
          {formFeedback && (
            <p className={`contact-form__feedback contact-form__feedback--${formFeedback.type}`} role="status">
              {formFeedback.message}
            </p>
          )}
          <div className="contact-form__divider"><span>ou</span></div>
          <a className="contact-form__alternate" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={22} /> Ou, se preferir, converse pelo <strong>WhatsApp.</strong></a>
        </form>
      </div>
    </section>
  );
}

function HomeVideo() {
  return (
    <section className="home-video" aria-labelledby="home-video-title">
      <div className="container home-video__inner">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow"><span /> Vídeo</p>
            <h2 id="home-video-title">Conheça a experiência</h2>
          </div>
          <p className="section-heading__intro">Veja um pouco mais sobre a forma como cada escolha é conduzida com cuidado, clareza e atenção aos detalhes.</p>
        </div>
        <video className="home-video__player" controls preload="metadata" playsInline aria-label="Vídeo de apresentação Dione Menezes">
          <source src={homeVideo} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeo.
        </video>
      </div>
    </section>
  );
}

// eslint-disable-next-line no-unused-vars
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <p className="footer__eyebrow">Especialista · Salvador / BA</p>
          <h2>Dione Menezes<span>.</span></h2>
          <a className="footer__cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Conversar no WhatsApp <Icon name="arrow" size={17} />
          </a>
        </div>
        <div className="footer__main">
          <div className="footer__about">
            <Brand variant="blue" />
            <p>Atendimento especializado para encontrar o imóvel Moura Dubeux ideal em Salvador, com orientação personalizada em cada etapa da compra.</p>
            <span>Moura Dubeux · Salvador / BA</span>
          </div>
          <nav className="footer__nav" aria-label="Navegação do rodapé">
            <h3>Navegação</h3>
            <a href="#inicio">Início</a>
            <a href="#empreendimentos">Empreendimentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="footer__contact">
            <h3>Contato</h3>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp com Dione</a>
            <a href="#empreendimentos">Empreendimentos Moura Dubeux</a>
            <p>Salvador, BA<br />Atendimento para imóveis residenciais e empresariais.</p>
            <p>Segurança, transparência e acompanhamento até a escolha certa.</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom"><div className="container"><span>© {new Date().getFullYear()} Dione Menezes. Todos os direitos reservados.</span><span>Salvador/BA <i /> Moura Dubeux</span></div></div>
    </footer>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__about">
          <Brand variant="blue" />
          <p>Atendimento especializado para encontrar o imóvel Moura Dubeux ideal, com segurança, transparência e acompanhamento personalizado.</p>
          <span>Pessoas · Projetos · Novas histórias</span>
        </div>
        <nav className="site-footer__nav" aria-label="Navegação do rodapé">
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#empreendimentos">Empreendimentos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href={PRIVACY_POLICY_HASH}>Privacidade</a>
        </nav>
        <nav className="site-footer__ventures" aria-label="Empreendimentos no rodapé">
          <h3>Empreendimentos</h3>
          <a href="#empreendimentos">Lançamentos</a>
          <a href="#empreendimentos">Prontos para morar</a>
          <a href="#empreendimentos">Alto padrão</a>
          <a href="#empreendimentos">Investimento</a>
          <a href="#empreendimentos">Moura Dubeux</a>
        </nav>
        <div className="site-footer__contact">
          <h3>Contato</h3>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={16} /> WhatsApp com Dione</a>
          <a href="https://www.instagram.com/dionemenezes" target="_blank" rel="noreferrer"><Icon name="instagram" size={16} /> @dionemenezes</a>
          <a href={`mailto:${CONTACT_EMAIL}`}><Icon name="mail" size={16} /> {CONTACT_EMAIL}</a>
          <p><Icon name="pin" size={16} /> Salvador e Feira de Santana</p>
          <span>Atendimento em toda a Bahia</span>
        </div>
        <blockquote className="site-footer__quote">Viver bem<br />também é<br />um bom<br />investimento.</blockquote>
      </div>
    </footer>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [route, setRoute] = useState(() => decodeURIComponent(window.location.hash.replace(/^#/, '')));
  const sectionIds = useMemo(() => ['inicio', 'empreendimentos', 'sobre', 'contato'], []);
  const selectedDevelopment = route.startsWith('empreendimento/')
    ? developments.find((development) => development.slug === route.split('/')[1])
    : null;
  const isDetailPage = route.startsWith('empreendimento/');
  const isAllDevelopmentsPage = route === 'todos-empreendimentos';
  const isPrivacyPage = route === 'politica-de-privacidade';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDetailPage || isAllDevelopmentsPage || isPrivacyPage) {
      setActiveSection(isPrivacyPage ? 'contato' : 'empreendimentos');
      return undefined;
    }
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isDetailPage, isAllDevelopmentsPage, isPrivacyPage, sectionIds]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setCurrentSlide((slide) => (slide + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 1023) setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!window.location.hash) return undefined;
    if (isDetailPage || isAllDevelopmentsPage || isPrivacyPage) return undefined;
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
      window.requestAnimationFrame(() => setScrolled(window.scrollY > 40));
    }, 120);
    return () => window.clearTimeout(timer);
  }, [isDetailPage, isAllDevelopmentsPage, isPrivacyPage]);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = decodeURIComponent(window.location.hash.replace(/^#/, ''));
      setRoute(nextRoute);
      setMenuOpen(false);
      window.requestAnimationFrame(() => {
        if (nextRoute.startsWith('empreendimento/') || nextRoute === 'todos-empreendimentos' || nextRoute === 'politica-de-privacidade') {
          window.scrollTo({ top: 0, behavior: 'auto' });
          setScrolled(true);
        }
      });
    };
    window.addEventListener('hashchange', syncRoute);
    syncRoute();
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header scrolled={scrolled || isDetailPage || isAllDevelopmentsPage || isPrivacyPage} activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {isDetailPage
        ? <DevelopmentDetail development={selectedDevelopment} />
        : isAllDevelopmentsPage
          ? <AllDevelopmentsPage />
          : isPrivacyPage
            ? <PrivacyPolicyPage />
            : <main id="conteudo"><Hero currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} /><Developments /><About /><ContactFormApi /><HomeVideo /></main>}
      <SiteFooter />
      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com Dione no WhatsApp"><Icon name="whatsapp" size={27} /><span>Fale comigo</span></a>
    </div>
  );
}

export default App;
