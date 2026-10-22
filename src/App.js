import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './App.css';
import { getStateNameFromLocation, getStateNameFromUf, getUfFromLocation } from './utils/location';

import dionePhoto from './assets/dione-foto1.jpg';
import homeVideo from './assets/video.mp4';
import homeVideoThumbnail from './assets/thumb.png';
import logoLight from './assets/logo1.png';
import logoRed from './assets/logo2vermelho.png';
import logoComplementLight from './assets/logocomplementar1.png';
import logoComplementRed from './assets/logocomplementar2bkp.png';
import brazilMap from './assets/mapa.png';
import bahiaFlag from './assets/Bandeira_da_Bahia.png';
import alagoasFlag from './assets/Bandeira_de_Alagoas.svg';
import pernambucoFlag from './assets/Bandeira_de_Pernambuco.svg';
import cearaFlag from './assets/Bandeira_do_Ceará.svg';
import rioGrandeDoNorteFlag from './assets/Bandeira_do_Rio_Grande_do_Norte.svg';
import sergipeFlag from './assets/Bandeira_de_Sergipe.svg';
import paraibaFlag from './assets/Bandeira_da_Paraiba.svg';
import heroBanner1 from './assets/banners/banner1.jpg';
import heroBanner2 from './assets/banners/banner2.webp';
import heroBanner3 from './assets/banners/banner3.png';
import heroBanner4 from './assets/banners/banner4.png';
import heroBanner5 from './assets/banners/banner5.png';
import heroBanner6 from './assets/banners/banner6.png';
import heroBanner7 from './assets/banners/banner7.png';
import heroBanner8 from './assets/banners/banner8.jpg';
import heroBanner9 from './assets/banners/banner9.png';
import heroBanner10 from './assets/banners/banner10.png';
import elleveOrganizedCover from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/capa/capa_elleve_horto.png';
import elleveFacade from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/fachadas/fachada_torre_elleve_horto.png';
import elleveAccess from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/fachadas/acesso_principal_rua_piratancara.png';
import elleveFacadeDetail from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/fachadas/detalhe_fachada_varandas.png';
import ellevePool from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_raia_25m.png';
import elleveLeisureAerial from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/pavimento_lazer_vista_aerea.png';
import elleveLoungeCascade from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/lounge_externo_com_cascata.png';
import ellevePlayground from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import elleveCourt from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/quadra_recreativa.png';
import elleveLobby from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/lobby_social_elevadores.png';
import ellevePartyRoom from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import ellevePlayroom from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import elleveGamesRoom from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/sala_de_jogos.png';
import elleveGym from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import ellevePoolGourmet from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/gourmet_piscina.png';
import elleveCourtSupport from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/apoio_quadra.png';
import elleveLiving119 from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/living_apartamento_119m2.png';
import elleveLiving150 from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/living_apartamento_150m2.png';
import elleveLiving150Option from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/living_opcao_apartamento_150m2.png';
import elleveMasterSuite119 from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_119m2.png';
import elleveMasterSuite150 from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_150m2.png';
import elleveLocationMap from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/localizacao/mapa_horto_florestal_entorno.png';
import elleveLocationAerial from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/localizacao/vista_aerea_horto_florestal.png';
import elleveGeneralPlan from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/implantacao_geral.png';
import elleveGarageG1Plan from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/pavimento_g1_garagem.png';
import elleveGarageG2Plan from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/pavimento_g2_garagem.png';
import elleveLeisurePlan from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/pavimento_lazer.png';
import elleveTypicalFloorPlan from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/pavimento_tipo_colunas_1_e_2.png';
import ellevePlan119Standard from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/planta_119m2_3_suites_padrao.png';
import ellevePlan119OptionTv from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/planta_119m2_2_suites_sala_tv_gabinete.png';
import ellevePlan119OptionKitchen from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/planta_119m2_2_suites_cozinha_integrada.png';
import ellevePlan150Standard from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/planta_150m2_4_suites_padrao.png';
import ellevePlan150OptionTv from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/planta_150m2_3_suites_sala_tv_gabinete.png';
import ellevePlan150OptionKitchen from './assets/Empreendimentos/Bahia/Elleve_Horto_Organizado/plantas/planta_150m2_3_suites_cozinha_ampliada.png';
import sombreirosOrganizedCover from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/capa/capa_casa_sombreiros.png';
import sombreirosTower from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/fachadas/torre_casa_sombreiros.png';
import sombreirosEmbasement from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/fachadas/fachada_embasamento_alameda_dos_sombreiros.png';
import sombreirosFacadeDetail from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/fachadas/detalhe_fachada_varandas.png';
import sombreirosGym from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import sombreirosPlayroom from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import sombreirosLeisureCirculation from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/circulacao_externa_pavimento_lazer.png';
import sombreirosCourtGourmet from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/gourmet_apoio_quadra.png';
import sombreirosLobby from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import sombreirosPlayground from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import sombreirosAdultPool from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_raia_25m.png';
import sombreirosPoolAerial from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/piscina_vista_aerea.png';
import sombreirosCourt from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/quadra_recreativa.png';
import sombreirosPartyRoom from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import sombreirosGamesRoom from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/sala_de_jogos.png';
import sombreirosLiving from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/living.png';
import sombreirosLivingExpanded from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/living_ampliado.png';
import sombreirosLivingIntegrated from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/living_ampliado_cozinha_integrada.png';
import sombreirosMasterSuite from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada_com_closet.png';
import sombreirosLeisurePlan from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/plantas/implantacao_pavimento_lazer.png';
import sombreirosGaragePlan from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/plantas/pavimento_g1_acessos_garagem.png';
import sombreirosTypicalFloorPlan from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/plantas/pavimento_tipo_terminacoes_01_02.png';
import sombreirosStandardPlan from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/plantas/planta_padrao_168m2_4_suites.png';
import sombreirosOptionOnePlan from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/plantas/planta_opcao_1_168m2_3_suites_sala_cozinha_ampliadas.png';
import sombreirosOptionTwoPlan from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/plantas/planta_opcao_2_168m2_3_suites_master_ampliada.png';
import sombreirosOptionThreePlan from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/plantas/planta_opcao_3_168m2_3_suites_sala_cozinha_integrada.png';
import sombreirosLocation from './assets/Empreendimentos/Bahia/Casa_Sombreiros_Organizado/localizacao/vista_aerea_caminho_das_arvores.png';
import infinityOrganizedCover from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/capa/capa_infinity_salvador_business.png';
import infinityBusinessBase from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/imagens_empreendimento/fachadas/embasamento_e_acesso_torre_business.png';
import infinityBusinessTower from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/imagens_empreendimento/fachadas/torre_business_e_distribuicao_pavimentos.png';
import infinityLobby from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/imagens_empreendimento/areas_comuns/lobby_oceanica.png';
import infinityDentalOffice from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/imagens_empreendimento/ambientes_comerciais/consultorio_odontologico_1_coluna.png';
import infinityOfficeTwoColumns from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/imagens_empreendimento/ambientes_comerciais/escritorio_2_colunas_integradas.png';
import infinityOfficeFourColumns from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/imagens_empreendimento/ambientes_comerciais/escritorio_4_colunas_integradas.png';
import infinityGeneralPlan from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/plantas/implantacao_geral_complexo.png';
import infinityGroundPlan from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/plantas/pavimento_acesso_terreo_business.png';
import infinityDentalPlan from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/plantas/planta_consultorio_odontologico.png';
import infinityIntegratedOfficePlan from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/plantas/planta_escritorio_integrado.png';
import infinityTypicalPlan from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/plantas/pavimento_tipo_business.png';
import infinityGardenPlan from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/plantas/pavimento_garden_business.png';
import infinityAerialLocation from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/localizacao/vista_aerea_orla_ondina.png';
import infinityUrbanContext from './assets/Empreendimentos/Bahia/Infinity_Salvador_Business_Organizado/localizacao/contexto_empreendimentos_orla_ondina.png';
import beachClassBahiaVideo1 from './assets/Empreendimentos/Bahia/videos/beachclassbahiabahiavideo1.mp4';
import beachClassBahiaVideo2 from './assets/Empreendimentos/Bahia/videos/beachclassbahiabahiavideo2.mp4';
import beachClassJaguaribeVideo from './assets/Empreendimentos/Bahia/videos/beachclassjaguaribevideo.mp4';
import sombreirosVideo from './assets/Empreendimentos/Bahia/videos/casa_sombreiros.mp4';
import elleveVideo from './assets/Empreendimentos/Bahia/videos/ellevevideo.mp4';
import infinityVideo from './assets/Empreendimentos/Bahia/videos/Infinity Salvador.mp4';
import miratMartinsVideo from './assets/Empreendimentos/Bahia/videos/miratmartinsvideo.mp4';
import moodCostaAzulVideo from './assets/Empreendimentos/Bahia/videos/moodcostaazulvideo.mp4';
import moodSolBahiaVideo1 from './assets/Empreendimentos/Bahia/videos/moodsolbahia.mp4';
import moodSolBahiaVideo2 from './assets/Empreendimentos/Bahia/videos/moodsolbahiavideo2.mp4';
import poemeHortoVideo from './assets/Empreendimentos/Bahia/videos/poeme.mp4';
import salvador220Video from './assets/Empreendimentos/Bahia/videos/salvador220video.mp4';
import unicaCardealVideo from './assets/Empreendimentos/Bahia/videos/unica_cardeal.mp4';
import vivantVideo from './assets/Empreendimentos/Bahia/videos/Vivant.mp4';
import poemeHortoOrganizedCover from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/capa/capa_poeme_horto.png';
import poemeHortoAccess from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/acesso_principal.png';
import poemeHortoPlayroom from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/brinquedoteca.png';
import poemeHortoFacadeAccess from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/fachada_torre_acesso.png';
import poemeHortoFacade from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/fachada_torre_completa.png';
import poemeHortoFitness from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/fitness_espaco_funcional.png';
import poemeHortoGamesGourmet from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/jogos_gourmet.png';
import poemeHortoAerialLeisure from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/lazer_vista_aerea.png';
import poemeHortoLobby from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/lobby_acesso.png';
import poemeHortoPool from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/piscina_raia_25m.png';
import poemeHortoCourt from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/quadra_tenis_poliesportiva.png';
import poemeHortoPartyRoom from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/salao_de_festas.png';
import poemeHortoApartment173Expanded from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_173_ampliada.png';
import poemeHortoApartment173Kitchen from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_173_cozinha_aberta.png';
import poemeHortoApartment173Standard from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_173_padrao.png';
import poemeHortoApartment203Expanded from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_203_sala_ampliada.png';
import poemeHortoSuite173 from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/suite_master_apto_173.png';
import poemeHortoSuite203 from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/suite_master_apto_203.png';
import poemeHortoBalcony203 from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/imagens_empreendimento/varanda_gourmet_apto_203.png';
import poemeHortoGroundPlan from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/implantacao_terreo.png';
import poemeHortoMezzaninePlan from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/implantacao_mezanino.png';
import poemeHortoTypicalFloorPlan from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/implantacao_pavimento_tipo.png';
import poemeHortoFloor173203 from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/pavimento_tipo_173_203.png';
import poemeHortoPlan203Standard from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/planta_203_padrao_4_suites.png';
import poemeHortoPlan203Option from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/planta_203_opcao_3_suites.png';
import poemeHortoPlan173Standard from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/planta_173_padrao_4_suites.png';
import poemeHortoPlan173Option from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/plantas/planta_173_opcao_3_suites.png';
import poemeHortoLocationMap from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/localizacao/mapa_aereo_entorno.png';
import poemeHortoLocationAerial from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/localizacao/vista_aerea_localizacao.png';
import poemeHortoAerial from './assets/Empreendimentos/Bahia/Poeme_Horto_Organizado/localizacao/vista_aerea_poeme_horto.png';
import beachClassBahiaOrganizedCover from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/capa/capa_beach_class_bahia.png';
import beachClassBahiaPerspective from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/fachada_perspectiva_empreendimento.png';
import beachClassBahiaFacade from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/fachada_principal.png';
import beachClassBahiaClarivalAccess from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/acesso_rua_clarival_prado_valadares.png';
import beachClassBahiaAlfazemaAccess from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/acesso_rua_da_alfazema.png';
import beachClassBahiaPoolArea from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/area_da_piscina.png';
import beachClassBahiaPool from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/piscina.png';
import beachClassBahiaBeachTennis from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/quadra_beach_tennis.png';
import beachClassBahiaAlamedaAerial from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/alameda_de_acesso_vista_superior.png';
import beachClassBahiaAlameda from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/alameda_de_acesso.png';
import beachClassBahiaLobbyReception from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/lobby_e_recepcao.png';
import beachClassBahiaReception from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/recepcao.png';
import beachClassBahiaLobby from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import beachClassBahiaSpa from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/spa_rooftop.png';
import beachClassBahiaRooftopPool from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/piscina_aquecida_rooftop.png';
import beachClassBahiaGym from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/academia_rooftop_200m2.png';
import beachClassBahiaStudio from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/apartamentos/studio_25_86m2.png';
import beachClassBahiaOneBedroom from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/apartamentos/quarto_e_sala_35m2.png';
import beachClassBahiaResidence from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/imagens_empreendimento/apartamentos/residence_2_quartos_61m2.png';
import beachClassBahiaLeisurePlan from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/implantacao_pavimento_lazer.png';
import beachClassBahiaMezzaninePlan from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_mezanino_7_pavimento.png';
import beachClassBahiaRooftopPlan from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_rooftop_wellness_42_andar.png';
import beachClassBahiaApartmentsPlan from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/pavimento_apartments_1_ao_27_andar.png';
import beachClassBahiaStudioPlan from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_studio_25_86m2.png';
import beachClassBahiaOneBedroomPlan from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_quarto_e_sala_35m2.png';
import beachClassBahiaResidencesPlan from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/pavimento_residences_28_ao_40_andar.png';
import beachClassBahiaTwoBedroomPlanColumns from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_2_quartos_61m2_colunas_02_04_05_06_07_08_09.png';
import beachClassBahiaTwoBedroomPlanColumnsAlt from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_2_quartos_61m2_colunas_01_03.png';
import beachClassBahiaGaragePlan1 from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_garagem_1_pavimento.png';
import beachClassBahiaGaragePlan2 from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/plantas/planta_garagem_2_pavimento.png';
import beachClassBahiaLocation from './assets/Empreendimentos/Bahia/Beach_Class_Bahia_Organizado/localizacao/localizacao_caminho_das_arvores_shopping_da_bahia.png';
import beachClassRioVermelhoOrganizedCover from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/capa/capa_beach_class_rio_vermelho.png';
import beachClassRioVermelhoFacade from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/fachadas/fachada_torre_e_orla.png';
import beachClassRioVermelhoAccess from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/fachadas/acesso_integrado_a_cidade.png';
import beachClassRioVermelhoRooftopLounge from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/rooftop_lounge.png';
import beachClassRioVermelhoPoolSpa from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/piscina_aquecida_spa_vista_mar.png';
import beachClassRioVermelhoSkyLounge from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/sky_lounge.png';
import beachClassRioVermelhoConfraria from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/espaco_confraria_rooftop.png';
import beachClassRioVermelhoFitnessTreadmills from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/sky_fitness_esteiras.png';
import beachClassRioVermelhoFitness from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/sky_fitness.png';
import beachClassRioVermelhoConcierge from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/hall_concierge.png';
import beachClassRioVermelhoCoffeeLoungeCoworking from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/coffee_shop_lounge_coworking.png';
import beachClassRioVermelhoCoffeeCoworking from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/coffee_shop_coworking.png';
import beachClassRioVermelhoGardenLounge from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/lounge_garden.png';
import beachClassRioVermelhoCarPoint from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/app_car_point.png';
import beachClassRioVermelhoMiniMarket from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/mini_market.png';
import beachClassRioVermelhoBikeScooter from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/espaco_bike_scooter.png';
import beachClassRioVermelhoLaundry from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/laundry_omo.png';
import beachClassRioVermelhoPetCare from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import beachClassRioVermelhoStudio from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_studio.png';
import beachClassRioVermelhoOneBedroomLiving from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_quarto_e_sala_living.png';
import beachClassRioVermelhoOneBedroom from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_quarto_e_sala_quarto.png';
import beachClassRioVermelhoTwoBedroomLiving from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_2_quartos_sala_varanda.png';
import beachClassRioVermelhoTwoBedroom from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_2_quartos_quarto.png';
import beachClassRioVermelhoGroundAccessPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_terreo_acessos_estacionamento.png';
import beachClassRioVermelhoGroundAmenitiesPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_terreo_areas_comuns.png';
import beachClassRioVermelhoRooftopPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_rooftop.png';
import beachClassRioVermelhoStudioPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/planta_studio_26m2.png';
import beachClassRioVermelhoOneBedroomPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/planta_quarto_e_sala_37m2.png';
import beachClassRioVermelhoTwoBedroomPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/planta_2_quartos_67m2.png';
import beachClassRioVermelhoTypicalFloorPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/pavimento_tipo.png';
import beachClassRioVermelhoTypicalImplementationPlan from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_pavimento_tipo.png';
import beachClassRioVermelhoLocation from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/localizacao/rio_vermelho_orla_e_bairro.png';
import beachClassRioVermelhoLocationMap from './assets/Empreendimentos/Bahia/Beach_Class_Rio_Vermelho_Organizado/localizacao/mapa_localizacao_rio_vermelho.png';
import hortoEssenceOrganizedCover from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/capa/capa_horto_essence.png';
import hortoEssenceBambooBoulevard from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/fachadas/boulevard_de_acesso_bambus.png';
import hortoEssenceTower from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/fachadas/torre_horto_essence.png';
import hortoEssenceParkAccess from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/fachadas/acesso_empreendimento_parque_lucaia.png';
import hortoEssenceGatehouse from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/fachadas/guarita_acesso_rua_sapucaia.png';
import hortoEssencePoolFacade from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/fachadas/fachada_area_piscina.png';
import hortoEssenceLobby from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import hortoEssencePocketPark from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/pocket_parque.png';
import hortoEssenceLoungeBar from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/lounge_bar.png';
import hortoEssenceCourt from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/quadra_poliesportiva_tenis.png';
import hortoEssencePoolGourmet from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/gourmet_da_piscina.png';
import hortoEssencePartyRoom from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import hortoEssencePlayroom from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import hortoEssencePlayground from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import hortoEssenceGym from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/espaco_musculacao.png';
import hortoEssenceCrossfit from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/espaco_crossfit.png';
import hortoEssenceMassage from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/sala_de_massagem.png';
import hortoEssenceBeauty from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/espaco_beauty.png';
import hortoEssenceGarden from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/horta.png';
import hortoEssencePetPark from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/pet_parque.png';
import hortoEssencePetCare from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import hortoEssenceBalcony133 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/varanda_133m2_3_suites.png';
import hortoEssenceLiving133 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/living_133m2_3_suites.png';
import hortoEssenceSuite133 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/suite_master_133m2_3_suites.png';
import hortoEssenceKitchen133 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/cozinha_133m2_3_suites.png';
import hortoEssenceOffice133 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/home_office_133m2_3_suites.png';
import hortoEssenceBalcony167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/varanda_167m2_4_suites.png';
import hortoEssenceLiving167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/living_167m2_4_suites.png';
import hortoEssenceSuite167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/suite_master_167m2_4_suites.png';
import hortoEssenceKitchen167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/cozinha_167m2_4_suites.png';
import hortoEssenceOffice167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/home_office_167m2_4_suites.png';
import hortoEssenceLivingExpanded167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/living_ampliado_167m2.png';
import hortoEssenceSuiteExpanded167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada_167m2.png';
import hortoEssencePlaygroundPlan from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/plantas/implantacao_pavimento_playground.png';
import hortoEssenceWellnessPlan from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/plantas/implantacao_pavimento_wellness_ss3.png';
import hortoEssenceParkPlan from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/plantas/implantacao_acesso_parque_lucaia_ss4.png';
import hortoEssencePlan133 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/plantas/planta_133m2_3_suites.png';
import hortoEssencePlan133OpenKitchen from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/plantas/planta_133m2_3_suites_cozinha_aberta_home_office.png';
import hortoEssencePlan167 from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/plantas/planta_167m2_4_suites.png';
import hortoEssencePlan167OpenKitchen from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/plantas/planta_167m2_4_suites_cozinha_aberta_sala_suites_ampliadas.png';
import hortoEssenceLocationMap from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/localizacao/mapa_entorno_horto_florestal.png';
import hortoEssenceLocationAerial from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/localizacao/vista_aerea_horto_florestal.png';
import hortoEssenceLucaiaPark from './assets/Empreendimentos/Bahia/Horto_Essence_Organizado/localizacao/parque_lucaia.png';
import mansaoOthonOrganizedCover from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/capa/capa_mansao_othon.png';
import mansaoOthonNightFacade from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/fachadas/fachada_noturna_frente_mar.png';
import mansaoOthonFacade from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/fachadas/fachada_avenida_oceanica.png';
import mansaoOthonMainAccess from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/fachadas/acesso_principal_avenida_oceanica.png';
import mansaoOthonLeisureAerial from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/area_lazer_piscina_vista_aerea.png';
import mansaoOthonAdultPool from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_vista_mar.png';
import mansaoOthonCourts from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/quadras_tenis_e_beach_tennis.png';
import mansaoOthonLobby from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/entrada_lobby.png';
import mansaoOthonSpa from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/spa_piscina_aquecida_coberta.png';
import mansaoOthonGym from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import mansaoOthonPlayroom from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import mansaoOthonKidsPlay from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/kids_play_externo.png';
import mansaoOthonPartyRoom from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import mansaoOthonLiving from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/living_estar_vista_mar.png';
import mansaoOthonDining from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/living_jantar_vista_mar.png';
import mansaoOthonIntimateRoom from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/sala_intima.png';
import mansaoOthonMasterSuite from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/suite_master_vista_mar.png';
import mansaoOthonLeisurePlan from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/plantas/implantacao_area_lazer.png';
import mansaoOthonGaragePlan from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/plantas/garagem_g1.png';
import mansaoOthonWellnessPlan from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/plantas/pavimento_lazer_wellness.png';
import mansaoOthonTypicalPlan from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/plantas/pavimento_tipo_2_unidades.png';
import mansaoOthonStandardPlan from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/plantas/planta_padrao_572m2_5_suites.png';
import mansaoOthonOptionPlan from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/plantas/planta_opcao_4_suites_ampliada.png';
import mansaoOthonLocation from './assets/Empreendimentos/Bahia/Mansao_Othon_Organizado/localizacao/orla_de_ondina_salvador.png';
import miratMartinsOrganizedCover from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/capa/capa_mirat_martins_de_sa.png';
import miratFacade from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/fachadas/fachada_torre_mirat.png';
import miratMainAccess from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/fachadas/acesso_principal_paisagismo.png';
import miratBicycle from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/bicicletario.png';
import miratPlayroom from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import miratConfraria from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/confraria_salao_de_jogos.png';
import miratFitness from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/fitness_130m2.png';
import miratSocialHall from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/hall_social.png';
import miratMinicampo from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/minicampo.png';
import miratPetCare from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import miratPetPlay from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/pet_play.png';
import miratPools from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/piscinas_adulto_e_infantil.png';
import miratPoolLane from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/piscina_raia_20m_e_hidros.png';
import miratPlayground from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/playground.png';
import miratPartyRoom from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import miratSpa from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/spa_ofuro_hidromassagem.png';
import miratBalcony from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/varanda_gourmet.png';
import miratLiving from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/living.png';
import miratMasterSuite from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/suite_master.png';
import miratExpandedSuite from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada.png';
import miratCloset from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/closet.png';
import miratLeisurePlan from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/plantas/implantacao_lazer.png';
import miratWellnessConfrariaPlan from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/plantas/planta_espaco_wellness_confraria_spa.png';
import miratWellnessFitnessPlan from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/plantas/planta_espaco_wellness_fitness.png';
import miratStandardPlan from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/plantas/planta_padrao_253m2_4_suites.png';
import miratSuggestionTwoPlan from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/plantas/planta_sugestao_2_253m2_3_suites.png';
import miratSuggestionThreePlan from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/plantas/planta_sugestao_3_253m2_3_suites.png';
import miratAerialLocation from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/localizacao/vista_aerea_horto_florestal.png';
import miratSalvadorSeaView from './assets/Empreendimentos/Bahia/Mirat_Martins_de_Sa_Organizado/localizacao/vista_planejada_salvador_mar.png';
import riveOrganizedCover from './assets/Empreendimentos/Bahia/Rive_Organizado/capa/capa_rive.png';
import riveContextFacade from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/fachadas/fachada_rive_contexto_rio_vermelho.png';
import riveNightTower from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/fachadas/torre_rive_perspectiva_noturna.png';
import riveStreetTower from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/fachadas/torre_rive_perspectiva_rua.png';
import riveMainAccess from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/fachadas/acesso_principal_rive.png';
import riveSeaFacade from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/fachadas/fachada_varandas_vista_mar.png';
import riveRooftopSea from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/rooftop_vista_mar.png';
import riveRooftopPanoramic from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/rooftop_panoramico.png';
import riveInfinityPool from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita.png';
import riveRooftopGourmet from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_rooftop.png';
import riveRooftopGym from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/academia_rooftop.png';
import riveSeaGym from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/academia_vista_mar.png';
import riveLobby from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import riveViewpointPlayground from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/playground_mirante.png';
import rivePartyPlayground from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/playground_salao_festas.png';
import rivePartyRoom from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import riveGamesRoom from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/sala_de_jogos.png';
import rivePlayroom from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import riveSportsCourt from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/areas_comuns/quadra_esportiva.png';
import riveApartment3Balcony from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/apartamentos/varanda_apartamento_3_quartos.png';
import riveApartment3Suite from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_3_quartos.png';
import riveApartment3Living from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/apartamentos/living_apartamento_3_quartos.png';
import riveGardenBalcony from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/apartamentos/varanda_garden_3_quartos.png';
import riveApartment4Balcony from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/apartamentos/varanda_apartamento_4_quartos.png';
import riveApartment4Suite from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_4_quartos.png';
import riveApartment4Living from './assets/Empreendimentos/Bahia/Rive_Organizado/imagens_empreendimento/apartamentos/living_apartamento_4_quartos.png';
import riveGeneralPlan from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/implantacao_geral_torres.png';
import riveRooftopPlan from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_rooftop.png';
import riveGroundPlan from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/implantacao_terreo_g2.png';
import riveLeisurePlan from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/implantacao_pavimento_lazer.png';
import riveMareSereiaPlan from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/pavimento_tipo_torres_mare_sereia_3_quartos.png';
import rivePlan97Standard from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_97m2_3_quartos_padrao.png';
import rivePlan97Master from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_97m2_2_suites_banheiro_senhor_senhora.png';
import rivePlan97Office from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_97m2_2_suites_gabinete.png';
import riveGardenPlan from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_garden_130m2_3_quartos.png';
import riveAmadoPlan from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/pavimento_tipo_torre_amado_4_quartos.png';
import rivePlan143Standard from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_143m2_4_quartos_padrao.png';
import rivePlan143Master from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_143m2_3_suites_lavabo_sala_ampliada.png';
import rivePlan143Integrated from './assets/Empreendimentos/Bahia/Rive_Organizado/plantas/planta_143m2_3_quartos_cozinha_integrada_suite_master_ampliada.png';
import riveAerialLocation from './assets/Empreendimentos/Bahia/Rive_Organizado/localizacao/vista_aerea_rio_vermelho.png';
import riveSeaLocation from './assets/Empreendimentos/Bahia/Rive_Organizado/localizacao/localizacao_200m_do_mar.png';
import riveNeighborhoodMap from './assets/Empreendimentos/Bahia/Rive_Organizado/localizacao/mapa_entorno_rio_vermelho.png';
import jardinsDoParqueOrganizedCover from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/capa/capa_jardins_do_parque.png';
import jardinsDoParqueFacadeTowers from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/fachada/fachada_torres_orquideas_e_hortensias.png';
import jardinsDoParqueTowerPerspective from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/fachada/perspectiva_torre_jardins_do_parque.png';
import jardinsDoParqueApartment60Bedroom from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_quarto.png';
import jardinsDoParqueApartment60Living from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_sala_estar_jantar.png';
import jardinsDoParqueApartment60Suite from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_suite.png';
import jardinsDoParqueApartment60Balcony from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_varanda.png';
import jardinsDoParqueApartment81Children from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_quarto_filhos.png';
import jardinsDoParqueApartment81Office from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_quarto_office.png';
import jardinsDoParqueApartment81Living from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_sala_estar_jantar.png';
import jardinsDoParqueApartment81Suite from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_suite.png';
import jardinsDoParqueApartment81Balcony from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_varanda.png';
import jardinsDoParqueAcademy from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import jardinsDoParqueAerialLeisure from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/area_lazer_vista_aerea.png';
import jardinsDoParquePlayroom from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import jardinsDoParqueGourmets from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/gourmets.png';
import jardinsDoParqueVipGourmet from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/gourmet_vip_com_piscina.png';
import jardinsDoParqueHortensiasHall from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/hall_torre_hortensias.png';
import jardinsDoParqueMinimarket from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/minimarket.png';
import jardinsDoParqueMiniCourt from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/miniquadra_recreativa.png';
import jardinsDoParquePetPlace from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/pet_place.png';
import jardinsDoParqueAdultPool from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_prainha_solarium.png';
import jardinsDoParqueChildrenPool from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/piscina_infantil.png';
import jardinsDoParquePlayground from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/playground.png';
import jardinsDoParquePartyRoom from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import jardinsDoParqueSportsBar from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/sports_bar.png';
import jardinsDoParqueTerrace from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/terraco_salao_de_festas.png';
import jardinsDoParqueGroundPlan from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/plantas/implantacao_pavimento_terreo.png';
import jardinsDoParqueGeneralPlan from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/plantas/implantacao_geral_torres.png';
import jardinsDoParqueHortensiasFloorPlan from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/plantas/pavimento_tipo_torre_hortensias.png';
import jardinsDoParqueOrchidsFloorPlan from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/plantas/pavimento_tipo_torre_orquideas.png';
import jardinsDoParquePlan60 from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/plantas/planta_60m_2_quartos_1_suite_terminacao_04.png';
import jardinsDoParquePlan81 from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/plantas/planta_81m_3_quartos_1_suite_terminacao_01.png';
import jardinsDoParqueCommerce from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/localizacao/entorno_comercio_e_servicos.png';
import jardinsDoParqueInterestMap from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/localizacao/mapa_entorno_pontos_de_interesse.png';
import jardinsDoParqueBeach from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/localizacao/praia_cruz_das_almas.png';
import jardinsDoParqueSeaShopping from './assets/Empreendimentos/Alagoas/Jardins_do_Parque_Organizado/localizacao/vista_aerea_proximidade_mar_e_shopping.png';
import conceptJatiucaCover from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/01_Capa/capa_horizontal.png';
import conceptJatiucaFrontFacade from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/fachada_principal.png';
import conceptJatiucaSideFacade from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/fachada_perspectiva_lateral.png';
import conceptJatiucaFacadeDetail from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/fachada_detalhe_arquitetonico.png';
import conceptJatiucaEntrance from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/acesso_entrada_e_fachada.png';
import conceptJatiucaSeaPool from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/piscina_rooftop_vista_mar.png';
import conceptJatiucaPoolDeck from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/piscina_e_deck_rooftop.png';
import conceptJatiucaCoveredTerrace from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/terraco_coberto_rooftop.png';
import conceptJatiucaOutdoorGourmet from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/espaco_gourmet_externo.png';
import conceptJatiucaIndoorGourmet from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/espaco_gourmet_interno.png';
import conceptJatiucaFitness from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/academia.png';
import conceptJatiucaApartment62 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/apartamento_62m2_ambiente_integrado.png';
import conceptJatiucaStudio28 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/apartamento_28m2_studio_decorado.png';
import conceptJatiucaStudio26 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/apartamento_26m2_studio_decorado.png';
import conceptJatiucaStudio25 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/apartamento_25m2_studio_cozinha.png';
import conceptJatiucaReception1 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/recepcao_coliving_ambiente_01.png';
import conceptJatiucaReception2 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/recepcao_coliving_ambiente_02.png';
import conceptJatiucaDelivery from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/espaco_delivery.png';
import conceptJatiucaEcommerce from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/espaco_ecommerce.png';
import conceptJatiucaLaundry from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/lavanderia_compartilhada.png';
import conceptJatiucaMinimarket from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/02_Imagens_Empreendimento/minimarket.png';
import conceptJatiucaPlan25 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_apartamento_25m2.png';
import conceptJatiucaPlan26 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_apartamento_26m2.png';
import conceptJatiucaPlan28 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_apartamento_28m2.png';
import conceptJatiucaPlan62 from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_apartamento_62m2.png';
import conceptJatiucaGroundPlan from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_pavimento_terreo.png';
import conceptJatiucaIntermediatePlan from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_pavimento_intermediario.png';
import conceptJatiucaTypicalFloorPlan from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_pavimentos_1_ao_10.png';
import conceptJatiucaRooftopPlan from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/03_Plantas/planta_rooftop_lazer.png';
import conceptJatiucaNeighborhood from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/04_Localizacao/vista_aerea_bairro_jatiuca.png';
import conceptJatiucaLocationMap from './assets/Empreendimentos/Alagoas/Concept_Jatiuca_Organizado/04_Localizacao/mapa_localizacao_e_comodidades.png';
import lanaiBeachCapaLanaiBeachTorresEOrlaDeJacarecica from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/01_Capa/capa_lanai_beach_torres_e_orla_de_jacarecica.png';
import lanaiBeachFachadaDuasTorresNaluEMakaniAnoitecer from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/fachada_duas_torres_nalu_e_makani_anoitecer.png';
import lanaiBeachVistaAereaAreaDeLazerEntreTorres from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/vista_aerea_area_de_lazer_entre_torres.png';
import lanaiBeachPiscinaBeiraMarComDeck from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/piscina_beira_mar_com_deck.png';
import lanaiBeachJardinsECaminhosLazerExterno from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/jardins_e_caminhos_lazer_externo.png';
import lanaiBeachPiscinaAdultoComSpa from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/piscina_adulto_com_spa.png';
import lanaiBeachPiscinaBordaInfinitaVistaMarDia from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/piscina_borda_infinita_vista_mar_dia.png';
import lanaiBeachPiscinaBordaInfinitaVistaMarNoite from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/piscina_borda_infinita_vista_mar_noite.png';
import lanaiBeachPiscinaInfantilAquatica from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/piscina_infantil_aquatica.png';
import lanaiBeachPlaygroundParquinho from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/playground_parquinho.png';
import lanaiBeachPetPlaceAreaParaAnimais from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/pet_place_area_para_animais.png';
import lanaiBeachSalaoDeFestasInterno from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/salao_de_festas_interno.png';
import lanaiBeachSalaoDeFestasTerracoExterno from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/salao_de_festas_terraco_externo.png';
import lanaiBeachBarDaPraia from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/bar_da_praia.png';
import lanaiBeachSportsBarJogos from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/sports_bar_jogos.png';
import lanaiBeachEspacoKidsBrinquedoteca from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/espaco_kids_brinquedoteca.png';
import lanaiBeachCinemaKids from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/cinema_kids.png';
import lanaiBeachAcademiaFitness from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/academia_fitness.png';
import lanaiBeachCoworkingSalaDeReuniao from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/coworking_sala_de_reuniao.png';
import lanaiBeachMinimarketLojaConveniencia from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/minimarket_loja_conveniencia.png';
import lanaiBeachEspacoEcommerceGuardaEncomendas from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/espaco_ecommerce_guarda_encomendas.png';
import lanaiBeachPetWashBanhoAnimais from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/pet_wash_banho_animais.png';
import lanaiBeachBicicletario from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/bicicletario.png';
import lanaiBeachApartamento130m2SalaDeEstarVistaMar from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_130m2_sala_de_estar_vista_mar.png';
import lanaiBeachApartamento130m2SuiteVistaMar from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_130m2_suite_vista_mar.png';
import lanaiBeachApartamento115m2Sala from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_115m2_sala.png';
import lanaiBeachApartamento115m2Suite from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_115m2_suite.png';
import lanaiBeachApartamento99m2SalaECozinha from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_99m2_sala_e_cozinha.png';
import lanaiBeachApartamento99m2Suite from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_99m2_suite.png';
import lanaiBeachApartamento86m2SalaECozinha from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_86m2_sala_e_cozinha.png';
import lanaiBeachApartamento79m2SalaECozinha from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_79m2_sala_e_cozinha.png';
import lanaiBeachApartamento79m2Quarto from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_79m2_quarto.png';
import lanaiBeachPlantaApartamento130m2TorreNalu from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/01_Apartamentos/planta_apartamento_130m2_torre_nalu.png';
import lanaiBeachPlantaApartamento130m2TorreNaluComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_apartamento_130m2_torre_nalu_com_legenda.png';
import lanaiBeachPlantaApartamento115m2TorreMakani from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/01_Apartamentos/planta_apartamento_115m2_torre_makani.png';
import lanaiBeachPlantaApartamento115m2TorreMakaniComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_apartamento_115m2_torre_makani_com_legenda.png';
import lanaiBeachPlantaApartamento99m2 from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/01_Apartamentos/planta_apartamento_99m2.png';
import lanaiBeachPlantaApartamento99m2ComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_apartamento_99m2_com_legenda.png';
import lanaiBeachPlantaApartamento86m2 from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/01_Apartamentos/planta_apartamento_86m2.png';
import lanaiBeachPlantaApartamento86m2ComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_apartamento_86m2_com_legenda.png';
import lanaiBeachPlantaApartamento79m2 from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/01_Apartamentos/planta_apartamento_79m2.png';
import lanaiBeachPlantaApartamento79m2ComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_apartamento_79m2_com_legenda.png';
import lanaiBeachPlantaPavimentoLazerGeral from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/02_Pavimentos_e_Implantacao/planta_pavimento_lazer_geral.png';
import lanaiBeachPlantaPavimentoLazerGeralComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_pavimento_lazer_geral_com_legenda.png';
import lanaiBeachPlantaPavimentoLazerTorreNalu from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/02_Pavimentos_e_Implantacao/planta_pavimento_lazer_torre_nalu.png';
import lanaiBeachPlantaPavimentoLazerTorreNaluComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_pavimento_lazer_torre_nalu_com_legenda.png';
import lanaiBeachPlantaPavimentoLazerTorreMakani from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/02_Pavimentos_e_Implantacao/planta_pavimento_lazer_torre_makani.png';
import lanaiBeachPlantaPavimentoLazerTorreMakaniComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_pavimento_lazer_torre_makani_com_legenda.png';
import lanaiBeachPlantaPavimentoTipoTorreNalu from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/02_Pavimentos_e_Implantacao/planta_pavimento_tipo_torre_nalu.png';
import lanaiBeachPlantaPavimentoTipoTorreNaluComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_pavimento_tipo_torre_nalu_com_legenda.png';
import lanaiBeachPlantaPavimentoTipoTorreMakani from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/02_Pavimentos_e_Implantacao/planta_pavimento_tipo_torre_makani.png';
import lanaiBeachPlantaPavimentoTipoTorreMakaniComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_pavimento_tipo_torre_makani_com_legenda.png';
import lanaiBeachPlantaMapaImplantacaoUnidades from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/02_Pavimentos_e_Implantacao/planta_mapa_implantacao_unidades.png';
import lanaiBeachPlantaMapaImplantacaoUnidadesComLegenda from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/03_Plantas/03_Paginas_com_Legendas/planta_mapa_implantacao_unidades_com_legenda.png';
import lanaiBeachPraiaJacarecicaVistaLitoral from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/04_Localizacao_e_Entorno/praia_jacarecica_vista_litoral.png';
import lanaiBeachAreaVerdeProximaAPraia from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/04_Localizacao_e_Entorno/area_verde_proxima_a_praia.png';
import lanaiBeachVistaMarDeJacarecica from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/04_Localizacao_e_Entorno/vista_mar_de_jacarecica.png';
import lanaiBeachVistaAreaVerdeEOrla from './assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/04_Localizacao_e_Entorno/vista_area_verde_e_orla.png';
import milagresCover from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/01_Capa/capa_principal_piscina_vista_mar.png';
import milagresPhotoLazerVistaAereaPiscinasJardins from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_vista_aerea_piscinas_jardins.png';
import milagresPhotoLazerPiscinaVistaMar from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_piscina_vista_mar.png';
import milagresPhotoLazerPiscinaPrincipalEstruturaSombreada from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_piscina_principal_estrutura_sombreada.png';
import milagresPhotoLazerHidromassagemIntegradaPiscina from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_hidromassagem_integrada_piscina.png';
import milagresPhotoLazerLoungeBeiraPiscina from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_lounge_beira_piscina.png';
import milagresPhotoLazerPoolBarEGourmetPiscina from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_pool_bar_e_gourmet_piscina.png';
import milagresPhotoLazerPracaChegadaEspelhoAgua from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_praca_chegada_espelho_agua.png';
import milagresPhotoLazerGourmetQuadraPergolado from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_gourmet_quadra_pergolado.png';
import milagresPhotoLazerGourmetQuadraMesaExterna from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_gourmet_quadra_mesa_externa.png';
import milagresPhotoLazerPlaygroundInfantil from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/lazer_playground_infantil.png';
import milagresPhotoGastronomiaRestauranteSalao from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/gastronomia_restaurante_salao.png';
import milagresPhotoGastronomiaRestauranteBar from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/gastronomia_restaurante_bar.png';
import milagresPhotoBemEstarSpa from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bem_estar_spa.png';
import milagresPhotoBemEstarEspacoRelaxamento from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bem_estar_espaco_relaxamento.png';
import milagresPhotoBemEstarSalaoBeleza from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bem_estar_salao_beleza.png';
import milagresPhotoBemEstarAcademia from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bem_estar_academia.png';
import milagresPhotoBemEstarAcademiaTerraco from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bem_estar_academia_terraco.png';
import milagresPhotoServicosEntradaRececaoFachada from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/servicos_entrada_rececao_fachada.png';
import milagresPhotoServicosLobbyCheckin from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/servicos_lobby_checkin.png';
import milagresPhotoServicosLojaConveniencia from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/servicos_loja_conveniencia.png';
import milagresPhotoStudioEstarIntegrado from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/studio_estar_integrado.png';
import milagresPhotoStudioQuartoPerspectiva from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/studio_quarto_perspectiva.png';
import milagresPhotoStudioQuartoDetalhe from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/studio_quarto_detalhe.png';
import milagresPhotoStudioTerracoGardenPrivativo from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/studio_terraco_garden_privativo.png';
import milagresPhotoApartamento1QuartoSalaJantar from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_sala_jantar.png';
import milagresPhotoApartamento1QuartoVaranda from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_varanda.png';
import milagresPhotoApartamento1QuartoDormitorio from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_dormitorio.png';
import milagresPhotoApartamento1QuartoGarden from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_garden.png';
import milagresPhotoApartamento2QuartosSalaJantar from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_sala_jantar.png';
import milagresPhotoApartamento2QuartosVaranda from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_varanda.png';
import milagresPhotoApartamento2QuartosSuite from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_suite.png';
import milagresPhotoApartamento2QuartosQuartoInfantil from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_quarto_infantil.png';
import milagresPhotoApartamento2QuartosGarden from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_garden.png';
import milagresPhotoBangaloFachadaComPiscina from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bangalo_fachada_com_piscina.png';
import milagresPhotoBangaloTerracoPrivativoComPiscina from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bangalo_terraco_privativo_com_piscina.png';
import milagresPhotoBangaloSalaEstarJantar from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bangalo_sala_estar_jantar.png';
import milagresPhotoBangaloSuite01 from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bangalo_suite_01.png';
import milagresPhotoBangaloSuite02QuartoDuplo from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/02_Imagens_Empreendimento/bangalo_suite_02_quarto_duplo.png';
import milagresPlanImplantacaoGeralETerreno from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/01_Implantacao_Geral/implantacao_geral_e_terreno.png';
import milagresPlanImplantacaoPavimentoLazer from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/01_Implantacao_Geral/implantacao_pavimento_lazer.png';
import milagresPlanPlantaBlocoCentralPavimentoTerreo from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_bloco_central_pavimento_terreo.png';
import milagresPlanPlantaBlocoCentralPavimentoSuperior from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_bloco_central_pavimento_superior.png';
import milagresPlanPlantaBlocosAbcdTerreoGardens from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_blocos_abcd_terreo_gardens.png';
import milagresPlanPlantaBlocosAbcdPavimentos1E2 from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_blocos_abcd_pavimentos_1_e_2.png';
import milagresPlanPlantaBlocosEfTerreoGardens from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_blocos_ef_terreo_gardens.png';
import milagresPlanPlantaBlocosEfPavimentos1E2 from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_blocos_ef_pavimentos_1_e_2.png';
import milagresPlanPlantaBlocosGhTerreoGardens from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_blocos_gh_terreo_gardens.png';
import milagresPlanPlantaBlocosGhPavimentos1E2 from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/02_Plantas_Pavimentos/planta_blocos_gh_pavimentos_1_e_2.png';
import milagresPlanPlantaStudio3309m2Garden1657m2 from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/03_Plantas_Unidades/planta_studio_33_09m2_garden_16_57m2.png';
import milagresPlanPlanta1Quarto4257m2Garden2873m2 from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/03_Plantas_Unidades/planta_1_quarto_42_57m2_garden_28_73m2.png';
import milagresPlanPlanta2Quartos6132m2Garden2996m2 from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/03_Plantas_Unidades/planta_2_quartos_61_32m2_garden_29_96m2.png';
import milagresPlanPlantaBangalo11430m2TerreoPiscinaPrivativa from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/03_Plantas_Unidades/planta_bangalo_114_30m2_terreo_piscina_privativa.png';
import milagresPlanPlantaBangalo11430m2PavimentoSuperior from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/03_Plantas_e_Implantacao/03_Plantas_Unidades/planta_bangalo_114_30m2_pavimento_superior.png';
import milagresLocLocalizacaoMapaAereoMilagres from './assets/Empreendimentos/Alagoas/Beach_Class_Milagres_Organizado/04_Localizacao_e_Entorno/localizacao_mapa_aereo_milagres.png';
import lesAmisCover from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/01_Capa/capa_alternativa_horizontal_aerea.png';
import lesAmisAcademiaEspacoFitness01 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/academia_espaco_fitness_01.png';
import lesAmisAcademiaEspacoFitness02 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/academia_espaco_fitness_02.png';
import lesAmisApartamentoEloAmbienteIntegrado from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_elo_ambiente_integrado.png';
import lesAmisApartamentoEloCozinhaESalaIntegradas from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_elo_cozinha_e_sala_integradas.png';
import lesAmisApartamentoEloSalaAmpliada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_elo_sala_ampliada.png';
import lesAmisApartamentoEloVarandaGourmet from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_elo_varanda_gourmet.png';
import lesAmisApartamentoEncontroLiving01 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_encontro_living_01.png';
import lesAmisApartamentoEncontroLiving02 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_encontro_living_02.png';
import lesAmisApartamentoEncontroSalaAmpliada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_encontro_sala_ampliada.png';
import lesAmisApartamentoEncontroVarandaGourmet from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_encontro_varanda_gourmet.png';
import lesAmisApartamentoEstiloCozinhaIntegrada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_cozinha_integrada.png';
import lesAmisApartamentoEstiloQuarto01 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_quarto_01.png';
import lesAmisApartamentoEstiloQuarto02 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_quarto_02.png';
import lesAmisApartamentoEstiloSalaAmpliada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_sala_ampliada.png';
import lesAmisApartamentoEstiloSalaCozinhaIntegradas from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_sala_cozinha_integradas.png';
import lesAmisApartamentoEstiloSuiteMaster from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_suite_master.png';
import lesAmisApartamentoEstiloVarandaGourmet01 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_varanda_gourmet_01.png';
import lesAmisApartamentoEstiloVarandaGourmet02 from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamento_estilo_varanda_gourmet_02.png';
import lesAmisApartamentosFachadaEVarandaGourmet from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/apartamentos_fachada_e_varanda_gourmet.png';
import lesAmisBrinquedoteca from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/brinquedoteca.png';
import lesAmisDeckJardimComChurrasqueira from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/deck_jardim_com_churrasqueira.png';
import lesAmisEntradaPortariaPrincipal from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/entrada_portaria_principal.png';
import lesAmisEspacoCoworking from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/espaco_coworking.png';
import lesAmisEspacoGourmet from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/espaco_gourmet.png';
import lesAmisEspacoGuardaEcommerce from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/espaco_guarda_ecommerce.png';
import lesAmisEspacoPetPlayEPetShower from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/espaco_pet_play_e_pet_shower.png';
import lesAmisFachadaPrincipalAoEntardecer from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/fachada_principal_ao_entardecer.png';
import lesAmisFachadaVistaAereaDoBairro from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/fachada_vista_aerea_do_bairro.png';
import lesAmisFachadaVistaFrontalDaTorre from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/fachada_vista_frontal_da_torre.png';
import lesAmisFitnessOutdoor from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/fitness_outdoor.png';
import lesAmisHallDeEntrada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/hall_de_entrada.png';
import lesAmisLazerPavimentoVazadoVistaAerea from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/lazer_pavimento_vazado_vista_aerea.png';
import lesAmisLazerTerreoPiscinasVistaSuperior from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/lazer_terreo_piscinas_vista_superior.png';
import lesAmisMiniquadraPoliesportiva from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/miniquadra_poliesportiva.png';
import lesAmisMinispa from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/minispa.png';
import lesAmisPiscinaAdultoComDeckMolhado from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/piscina_adulto_com_deck_molhado.png';
import lesAmisPiscinaInfantil from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/piscina_infantil.png';
import lesAmisPiscinasAdultoInfantilDeckMolhadoNoturna from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/piscinas_adulto_infantil_deck_molhado_noturna.png';
import lesAmisPlayground from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/playground.png';
import lesAmisPracaVivantEspacoDeConvivencia from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/praca_vivant_espaco_de_convivencia.png';
import lesAmisPracaVivantVistaSuperior from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/praca_vivant_vista_superior.png';
import lesAmisSalaoDeFestas from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/02_Imagens_Empreendimento/salao_de_festas.png';
import lesAmisPlantaElo6101m21SuiteClosetSalaAmpliada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Apartamentos/planta_elo_61_01m2_1_suite_closet_sala_ampliada.png';
import lesAmisPlantaElo6101m22Quartos1Suite from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Apartamentos/planta_elo_61_01m2_2_quartos_1_suite.png';
import lesAmisPlantaEncontro8234m22QuartosSalaAmpliada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Apartamentos/planta_encontro_82_34m2_2_quartos_sala_ampliada.png';
import lesAmisPlantaEncontro8234m23Quartos1Suite from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Apartamentos/planta_encontro_82_34m2_3_quartos_1_suite.png';
import lesAmisPlantaEstilo9794m22SuitesSalaAmpliada from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Apartamentos/planta_estilo_97_94m2_2_suites_sala_ampliada.png';
import lesAmisPlantaEstilo9794m23Quartos1Suite from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Apartamentos/planta_estilo_97_94m2_3_quartos_1_suite.png';
import lesAmisImplantacaoGeralTerreno from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Pavimentos_e_Implantacao/implantacao_geral_terreno.png';
import lesAmisPlantaPavimentoLazer from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Pavimentos_e_Implantacao/planta_pavimento_lazer.png';
import lesAmisPlantaPavimentoSemienterrado from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Pavimentos_e_Implantacao/planta_pavimento_semienterrado.png';
import lesAmisPlantaPavimentoTerreo from './assets/Empreendimentos/Rio Grande do Norte/Les_Amis_Lagoa_Nova_Oeganizado/03_Plantas/Plantas_Pavimentos_e_Implantacao/planta_pavimento_terreo.png';
import florataTirolCover from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/01_Capa/capa_fachada_florata_tirol.png';
import florataTirolFacade from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/fachada_torres_vista_completa.png';
import florataTirolLeisureAerialOne from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/area_de_lazer_vista_aerea_01.png';
import florataTirolLeisureAerialTwo from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/area_de_lazer_vista_aerea_02.png';
import florataTirolEntrance from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/fachada_entrada_e_acesso.png';
import florataTirolArrivalSquare from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/praca_de_chegada_jardins.png';
import florataTirolGardens from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/praca_jardins_paisagismo.png';
import florataTirolAdultPoolOne from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/piscina_adulto_vista_01.png';
import florataTirolAdultPoolTwo from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/piscina_adulto_vista_02.png';
import florataTirolChildrenPool from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/piscina_infantil.png';
import florataTirolPlayground from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/parquinho_infantil.png';
import florataTirolPetPlace from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/pet_place.png';
import florataTirolOpenTerrace from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/terraco_descoberto.png';
import florataTirolGourmetTerrace from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/terraco_gourmet.png';
import florataTirolLobby from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/hall_social.png';
import florataTirolCoworking from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/coworking.png';
import florataTirolPlayroom from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/brinquedoteca.png';
import florataTirolGym from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/academia.png';
import florataTirolPartyRoom from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/salao_de_festas.png';
import florataTirolSportsBar from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/sports_bar.png';
import florataTirolLargeLiving from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_150m2_sala_de_estar.png';
import florataTirolLargeDining from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_150m2_sala_de_jantar.png';
import florataTirolLargeBalcony from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_150m2_varanda_gourmet.png';
import florataTirolLargeSuite from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_150m2_suite_master.png';
import florataTirolLargeOfficeSuite from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_150m2_suite_escritorio.png';
import florataTirolSmallLiving from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_100m2_sala_de_estar.png';
import florataTirolSmallBalcony from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_100m2_varanda_gourmet.png';
import florataTirolSmallSuite from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_100m2_suite_master.png';
import florataTirolSmallChildrenSuite from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/02_Imagens_Empreendimento/apto_100m2_suite_infantil.png';
import florataTirolGroundFloor from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/03_Plantas/implantacao_pavimento_terreo.png';
import florataTirolOpenFloor from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/03_Plantas/implantacao_pavimento_vazado.png';
import florataTirolTypicalFloor from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/03_Plantas/planta_tipo_15_andar_duas_torres.png';
import florataTirolAcaciasLargePlan from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/03_Plantas/torre_acacias_apto_150m2_terminacao_01.png';
import florataTirolBromeliasLargePlan from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/03_Plantas/torre_bromelias_apto_150m2_terminacao_01.png';
import florataTirolAcaciasSmallPlan from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/03_Plantas/torre_acacias_apto_100m2_terminacao_02.png';
import florataTirolBromeliasSmallPlan from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/03_Plantas/torre_bromelias_apto_100m2_terminacao_02.png';
import florataTirolLocation from './assets/Empreendimentos/Rio Grande do Norte/Florata_Tirol_organizado/04_Localizacao/localizacao_aerea_tirol_natal_pontos_de_referencia.png';
import natalCover from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/01_Capa/capa_beach_class_natal_torre_fachada.png';
import natalPhotoFachadaTorreCompleta from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/fachada_torre_completa.png';
import natalPhotoFachadaDetalheComVistaMar from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/fachada_detalhe_com_vista_mar.png';
import natalPhotoAcessoEntradaPrincipal from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/acesso_entrada_principal.png';
import natalPhotoHallSocialRecepcao from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/hall_social_recepcao.png';
import natalPhotoLobbyEstar from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/lobby_estar.png';
import natalPhotoPracaDeEncontros from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/praca_de_encontros.png';
import natalPhotoColivingSalaDeReunioes from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/coliving_sala_de_reunioes.png';
import natalPhotoMinimarket from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/minimarket.png';
import natalPhotoLavanderiaColetiva from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/lavanderia_coletiva.png';
import natalPhotoBicicletario from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/bicicletario.png';
import natalPhotoBrinquedoteca from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/brinquedoteca.png';
import natalPhotoAcademiaVista01 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/academia_vista_01.png';
import natalPhotoAcademiaVista02 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/academia_vista_02.png';
import natalPhotoRooftopPiscinaVistaMar01 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/rooftop_piscina_vista_mar_01.png';
import natalPhotoRooftopPiscinaVistaMar02 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/rooftop_piscina_vista_mar_02.png';
import natalPhotoRooftopPiscinaVistaPanorama03 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/rooftop_piscina_vista_panorama_03.png';
import natalPhotoTerracoRooftopExterno from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/terraco_rooftop_externo.png';
import natalPhotoTerracoCobertoVistaPanoramica from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/terraco_coberto_vista_panoramica.png';
import natalPhotoEspacoGourmetSalaoFestas from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/espaco_gourmet_salao_festas.png';
import natalPhotoStudio2877m2AmbienteIntegrado from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/studio_28_77m2_ambiente_integrado.png';
import natalPhotoStudio2982m2AmbienteIntegrado from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/studio_29_82m2_ambiente_integrado.png';
import natalPhotoStudio2998m2AmbienteIntegrado from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/studio_29_98m2_ambiente_integrado.png';
import natalPhotoApartamento1Quarto4309m2SalaCozinha from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_43_09m2_sala_cozinha.png';
import natalPhotoApartamento1Quarto4309m2Suite from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_43_09m2_suite.png';
import natalPhotoApartamento2Quartos6083m2SalaCozinha from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_60_83m2_sala_cozinha.png';
import natalPhotoApartamento2Quartos6083m2Suite from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_60_83m2_suite.png';
import natalPhotoApartamento2Quartos6083m2Quarto from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_60_83m2_quarto.png';
import natalPlanPavimentoTerreoImplantacao from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_terreo_implantacao.png';
import natalPlanPavimentoMezaninoImplantacao from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_mezanino_implantacao.png';
import natalPlanPavimentoRooftopImplantacao from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_rooftop_implantacao.png';
import natalPlanPavimentoTipoDistribuicaoUnidades from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_tipo_distribuicao_unidades.png';
import natalPlanPlantaStudio2877m2E2939m2Terminacoes04A09 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/02_Plantas_dos_Apartamentos/planta_studio_28_77m2_e_29_39m2_terminacoes_04_a_09.png';
import natalPlanPlantaStudio2982m2Terminacao02 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/02_Plantas_dos_Apartamentos/planta_studio_29_82m2_terminacao_02.png';
import natalPlanPlantaStudio2998m2Terminacao01 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/02_Plantas_dos_Apartamentos/planta_studio_29_98m2_terminacao_01.png';
import natalPlanPlantaApartamento1Quarto4309m2Terminacao10 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/02_Plantas_dos_Apartamentos/planta_apartamento_1_quarto_43_09m2_terminacao_10.png';
import natalPlanPlantaApartamento2Quartos6083m2Terminacao03 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/02_Plantas_dos_Apartamentos/planta_apartamento_2_quartos_60_83m2_terminacao_03.png';
import natalPlanReferenciaPavimentoTerreoComLegenda from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pavimento_terreo_com_legenda.png';
import natalPlanReferenciaMezaninoComLegenda from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_mezanino_com_legenda.png';
import natalPlanReferenciaRooftopComLegenda from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_rooftop_com_legenda.png';
import natalPlanReferenciaPavimentoTipoComMetragens from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pavimento_tipo_com_metragens.png';
import natalPlanReferenciaPlantaStudio2877m2E2939m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_planta_studio_28_77m2_e_29_39m2.png';
import natalPlanReferenciaPlantaStudio2982m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_planta_studio_29_82m2.png';
import natalPlanReferenciaPlantaStudio2998m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_planta_studio_29_98m2.png';
import natalPlanReferenciaPlanta1Quarto4309m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_planta_1_quarto_43_09m2.png';
import natalPlanReferenciaPlanta2Quartos6083m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_planta_2_quartos_60_83m2.png';
import natalLocEntornoCapimMacioParqueDasDunas from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/04_Localizacao_e_Entorno/entorno_capim_macio_parque_das_dunas.png';
import natalLocEntornoPontaNegraVistaAerea from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/04_Localizacao_e_Entorno/entorno_ponta_negra_vista_aerea.png';
import natalLocPontaNegraVistaAereaMarMorroDoCareca from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/04_Localizacao_e_Entorno/ponta_negra_vista_aerea_mar_morro_do_careca.png';
import natalLocPraiaPorDoSolContexto from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Natal_Organizado/04_Localizacao_e_Entorno/praia_por_do_sol_contexto.png';
import pontaNegraCover from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/01_Capa/capa_fachada_e_piscina.png';
import pontaNegraPhoto01AcessoPrincipalFachada from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/01_acesso_principal_fachada.png';
import pontaNegraPhoto02LobbyRecepcao from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/02_lobby_recepcao.png';
import pontaNegraPhoto03FachadaDosApartamentos from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/03_fachada_dos_apartamentos.png';
import pontaNegraPhoto04PiscinasVistaLongitudinal from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/04_piscinas_vista_longitudinal.png';
import pontaNegraPhoto05PiscinasVistaSuperior from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/05_piscinas_vista_superior.png';
import pontaNegraPhoto06FachadaEPiscina from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/06_fachada_e_piscina.png';
import pontaNegraPhoto07PiscinaDeckEspreguicadeiras from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/07_piscina_deck_espreguicadeiras.png';
import pontaNegraPhoto08SpaSalaDeMassagem from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/08_spa_sala_de_massagem.png';
import pontaNegraPhoto09SpaAreaExternaDeDescanso from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/09_spa_area_externa_de_descanso.png';
import pontaNegraPhoto10Academia from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/10_academia.png';
import pontaNegraPhoto11SalaMultiusoYoga from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/11_sala_multiuso_yoga.png';
import pontaNegraPhoto12PoolBar from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/12_pool_bar.png';
import pontaNegraPhoto13PiscinasPaisagismo from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/13_piscinas_paisagismo.png';
import pontaNegraPhoto14SalaoDeFestas from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/14_salao_de_festas.png';
import pontaNegraPhoto15Minimarket from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/15_minimarket.png';
import pontaNegraPhoto16Apartamento244QuartoPavimentoInferior from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/16_apartamento_244_quarto_pavimento_inferior.png';
import pontaNegraPhoto17Apartamento244MezaninoTerraco from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/17_apartamento_244_mezanino_terraco.png';
import pontaNegraPhoto18Apartamento44StudioComGardenAmbiente from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/18_apartamento_44_studio_com_garden_ambiente.png';
import pontaNegraPhoto19Apartamento38StudioComGardenAmbiente from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/19_apartamento_38_studio_com_garden_ambiente.png';
import pontaNegraPhoto20Apartamento07SalaLiving from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/20_apartamento_07_sala_living.png';
import pontaNegraPhoto21Apartamento07Quarto from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/21_apartamento_07_quarto.png';
import pontaNegraPhoto22VistaAereaEmpreendimentoEPraia from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/02_Imagens_Empreendimento/22_vista_aerea_empreendimento_e_praia.png';
import pontaNegraPlan01ImplantacaoPavimentoGardenLazer from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/01_implantacao_pavimento_garden_lazer.png';
import pontaNegraPlan02ImplantacaoPavimentoGardenUnidades from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/02_implantacao_pavimento_garden_unidades.png';
import pontaNegraPlan03ImplantacaoPavimentoTipo01 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/03_implantacao_pavimento_tipo_01.png';
import pontaNegraPlan04ImplantacaoPavimentoTipo02 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/04_implantacao_pavimento_tipo_02.png';
import pontaNegraPlan05ImplantacaoMezanino from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/05_implantacao_mezanino.png';
import pontaNegraPlan06PlantaApartamento2446516m2PavimentoInferior from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/06_planta_apartamento_244_65_16m2_pavimento_inferior.png';
import pontaNegraPlan07PlantaApartamento2446516m2PavimentoSuperior from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/07_planta_apartamento_244_65_16m2_pavimento_superior.png';
import pontaNegraPlan08PlantaApartamento44Studio3790m2Garden1650m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/08_planta_apartamento_44_studio_37_90m2_garden_16_50m2.png';
import pontaNegraPlan09PlantaApartamento38Studio4090m2Garden1350m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/09_planta_apartamento_38_studio_40_90m2_garden_13_50m2.png';
import pontaNegraPlan10PlantaApartamento072Quartos7607m2Garden1723m2 from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/10_planta_apartamento_07_2_quartos_76_07m2_garden_17_23m2.png';
import pontaNegraPlan11ReferenciaPavimentoGardenAreasDeLazerELegenda from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/11_referencia_pavimento_garden_areas_de_lazer_e_legenda.png';
import pontaNegraPlan12ReferenciaPavimentoGardenAreasDasUnidades from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/12_referencia_pavimento_garden_areas_das_unidades.png';
import pontaNegraPlan13ReferenciaPavimentoTipo01AreasDasUnidades from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/13_referencia_pavimento_tipo_01_areas_das_unidades.png';
import pontaNegraPlan14ReferenciaPavimentoTipo02AreasDasUnidades from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/14_referencia_pavimento_tipo_02_areas_das_unidades.png';
import pontaNegraPlan15ReferenciaApartamento244PlantasEMetragem from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/15_referencia_apartamento_244_plantas_e_metragem.png';
import pontaNegraPlan16ReferenciaStudio44Metragens from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/16_referencia_studio_44_metragens.png';
import pontaNegraPlan17ReferenciaStudio38Metragens from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/17_referencia_studio_38_metragens.png';
import pontaNegraPlan18ReferenciaApartamento07Metragens from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/03_Plantas_e_Implantacao/18_referencia_apartamento_07_metragens.png';
import pontaNegraLoc01PraiaDePontaNegraVistaPanoramica from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/04_Localizacao_e_Entorno/01_praia_de_ponta_negra_vista_panoramica.png';
import pontaNegraLoc02VistaAereaDaLocalizacaoDoTerreno from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/04_Localizacao_e_Entorno/02_vista_aerea_da_localizacao_do_terreno.png';
import pontaNegraLoc03MapaLocalizacaoComReferencias from './assets/Empreendimentos/Rio Grande do Norte/Beach_Class_Ponta_Negra_Organizado/04_Localizacao_e_Entorno/03_mapa_localizacao_com_referencias.png';
import portoDasDunasCover from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/01_Capa/capa_perspectiva_aerea_piscinas_e_mar.png';
import portoDasDunasPhotoPiscinasVistaSuperiorHidromassagem from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/piscinas_vista_superior_hidromassagem.png';
import portoDasDunasPhotoPiscinaComplexoAquaticoVistaInterna from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/piscina_complexo_aquatico_vista_interna.png';
import portoDasDunasPhotoPiscinaInfantilComToboaguas from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/piscina_infantil_com_toboaguas.png';
import portoDasDunasPhotoEspacoZenHidromassagemERedario from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/espaco_zen_hidromassagem_e_redario.png';
import portoDasDunasPhotoPracaMarAcessoPraiaPaisagismo from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/praca_mar_acesso_praia_paisagismo.png';
import portoDasDunasPhotoLoungeRestauranteVistaParaMar from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/lounge_restaurante_vista_para_mar.png';
import portoDasDunasPhotoRestauranteFachadaETerraco from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/restaurante_fachada_e_terraco.png';
import portoDasDunasPhotoEspacoParrillaChurrasqueira from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/espaco_parrilla_churrasqueira.png';
import portoDasDunasPhotoEntradaPortariaEAcessoVeiculos from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/entrada_portaria_e_acesso_veiculos.png';
import portoDasDunasPhotoRecepcaoSocialAmbienteInterno from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/recepcao_social_ambiente_interno.png';
import portoDasDunasPhotoAcademiaEquipada from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/academia_equipada.png';
import portoDasDunasPhotoSpaComSaunaEPiscina from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/spa_com_sauna_e_piscina.png';
import portoDasDunasPhotoSalaDeMassagem from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/sala_de_massagem.png';
import portoDasDunasPhotoQuadraBeachTenisEBlocoWellness from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/quadra_beach_tenis_e_bloco_wellness.png';
import portoDasDunasPhotoPlaygroundAreaInfantil from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/playground_area_infantil.png';
import portoDasDunasPhotoBrinquedotecaBlocoSocial from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/brinquedoteca_bloco_social.png';
import portoDasDunasPhotoStudio29m2AmbienteIntegradoEVaranda from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/studio_29m2_ambiente_integrado_e_varanda.png';
import portoDasDunasPhotoApartamentoQuartoSala41m2AmbienteIntegrado from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_quarto_sala_41m2_ambiente_integrado.png';
import portoDasDunasPhotoApartamento2Quartos67m2SalaECozinha from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_67m2_sala_e_cozinha.png';
import portoDasDunasPhotoApartamento2Quartos69m2VarandaGourmet from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_69m2_varanda_gourmet.png';
import portoDasDunasPhotoApartamento3Quartos80m2SalaEVaranda from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_80m2_sala_e_varanda.png';
import portoDasDunasPhotoApartamento3Quartos80m2Suite from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_80m2_suite.png';
import portoDasDunasPhotoApartamentoGarden2QuartosVarandaEPiscinas from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_garden_2_quartos_varanda_e_piscinas.png';
import portoDasDunasPhotoApartamentoGarden3QuartosSala from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_garden_3_quartos_sala.png';
import portoDasDunasPhotoApartamentoGardenColuna6AreaExterna from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/02_Imagens_Empreendimento/apartamento_garden_coluna_6_area_externa.png';
import portoDasDunasPlanImplantacaoGeralBlocosEAcessos from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/01_Implantacao_Geral/implantacao_geral_blocos_e_acessos.png';
import portoDasDunasPlanImplantacaoTrecho01FrenteMarELazer from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/01_Implantacao_Geral/implantacao_trecho_01_frente_mar_e_lazer.png';
import portoDasDunasPlanImplantacaoTrecho02WellnessEEsportes from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/01_Implantacao_Geral/implantacao_trecho_02_wellness_e_esportes.png';
import portoDasDunasPlanImplantacaoTrecho03BlocosEPiscinas from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/01_Implantacao_Geral/implantacao_trecho_03_blocos_e_piscinas.png';
import portoDasDunasPlanPavimentoTerreoBlocosABCD2e3Quartos from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimento_terreo_blocos_A_B_C_D_2e3_quartos.png';
import portoDasDunasPlanPavimentoTipo1a3BlocosABCD from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimento_tipo_1a3_blocos_A_B_C_D.png';
import portoDasDunasPlanPavimentoTerreoBlocosEFG from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimento_terreo_blocos_E_F_G.png';
import portoDasDunasPlanPavimentoTipo1a3BlocosEFG from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimento_tipo_1a3_blocos_E_F_G.png';
import portoDasDunasPlanPlantaStudio2932m2 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_studio_29_32m2.png';
import portoDasDunasPlanPlantaGardenStudio3873m2 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_garden_studio_38_73m2.png';
import portoDasDunasPlanPlantaQuartoSala4150m2 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_quarto_sala_41_50m2.png';
import portoDasDunasPlanPlantaGardenQuartoSala5894m2 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_garden_quarto_sala_58_94m2.png';
import portoDasDunasPlanPlanta2Quartos6728m2Colunas1235 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_2_quartos_67_28m2_colunas_1_2_3_5.png';
import portoDasDunasPlanPlanta2Quartos6919m2Colunas1011 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_2_quartos_69_19m2_colunas_10_11.png';
import portoDasDunasPlanPlantaGarden2Quartos9561m2 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_garden_2_quartos_95_61m2.png';
import portoDasDunasPlanPlantaGarden2Quartos9767m2Colunas12345 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_garden_2_quartos_97_67m2_colunas_1_2_3_4_5.png';
import portoDasDunasPlanPlanta3Quartos8047m2Coluna6 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_3_quartos_80_47m2_coluna_6.png';
import portoDasDunasPlanPlanta3Quartos8922m2Coluna4 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_3_quartos_89_22m2_coluna_4.png';
import portoDasDunasPlanPlantaGarden3Quartos11667m2Coluna6 from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/03_Plantas_e_Implantacao/03_Plantas_das_Unidades/planta_garden_3_quartos_116_67m2_coluna_6.png';
import portoDasDunasLocMapaRegiaoPortoDasDunasFortaleza from './assets/Empreendimentos/Ceará/Beach_Class_Porto_das_Dunas_Organizado/04_Localizacao_e_Entorno/mapa_regiao_porto_das_dunas_fortaleza.png';
import cyanoOrganizedCover from './assets/Empreendimentos/Bahia/Cyano_Organizado/capa/capa_cyano.png';
import cyanoApartment3Living from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_3_suites_living.png';
import cyanoApartment3Kitchen from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_3_suites_living_cozinha_integrada.png';
import cyanoApartment3Suite from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_3_suites_suite_master.png';
import cyanoApartment4Living from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_4_suites_living_integrado_varanda.png';
import cyanoApartment4Suite from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_4_suites_suite_master.png';
import cyanoAcademy from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/academia_185m2.png';
import cyanoCourt from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/area_de_lazer_quadra.png';
import cyanoPlayroom from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca_com_terraco.png';
import cyanoOutdoorGourmet from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_externo.png';
import cyanoSeaGourmet from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_vista_mar.png';
import cyanoInfinityPool from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita_vista_mar.png';
import cyanoRooftop from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/rooftop_vista_mar.png';
import cyanoPartyRoom from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas_175m2.png';
import cyanoAccess from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/fachadas/acesso_rua_da_fonte_do_boi.png';
import cyanoTowerSet from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/fachadas/conjunto_torres_frente_mar.png';
import cyanoCurvedFacade from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/fachadas/fachada_residencial_curvas_varandas.png';
import cyanoGeneralView from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/fachadas/vista_geral_empreendimento_frente_mar.png';
import cyanoNightView from './assets/Empreendimentos/Bahia/Cyano_Organizado/imagens_empreendimento/fachadas/vista_noturna_conjunto_cyano.png';
import cyanoGeneralPlan from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/implantacao_geral_torres.png';
import cyanoMarRooftopPlan from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/rooftop_torre_mar.png';
import cyanoOceanLeisurePlan from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/pavimento_lazer_torre_oceano.png';
import cyanoGroundPlan from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/pavimento_terreo.png';
import cyanoAtlanticFloorPlan from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/pavimento_tipo_torre_atlantico.png';
import cyanoMarFloorPlan from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/pavimento_tipo_torre_mar.png';
import cyanoOceanFloorPlan from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/pavimento_tipo_torre_oceano.png';
import cyanoPlan3Suites133 from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/planta_3_suites_133m2.png';
import cyanoPlan3SuitesGarden155 from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/planta_3_suites_garden_155m2.png';
import cyanoPlan4Suites182 from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/planta_4_suites_182m2.png';
import cyanoPlan4SuitesGarden204 from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/planta_4_suites_garden_204m2.png';
import cyanoPlan3SuitesIntegratedKitchen from './assets/Empreendimentos/Bahia/Cyano_Organizado/plantas/planta_opcao_3_suites_cozinha_integrada_133m2.png';
import cyanoLocation from './assets/Empreendimentos/Bahia/Cyano_Organizado/localizacao/localizacao_rio_vermelho_salvador.png';
import salvador220OrganizedCover from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/capa/capa_salvador_220.png';
import salvador220GeneralView from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/fachadas/vista_geral_salvador_220.png';
import salvador220LobbyAccess from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/fachadas/acesso_lobby_fachada.png';
import salvador220Tower from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/fachadas/torre_salvador_220.png';
import salvador220SeaFacade from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/fachadas/fachada_salvador_220_frente_mar.png';
import salvador220Reception from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/recepcao.png';
import salvador220CoLiving from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/co_living.png';
import salvador220Gourmet from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/gourmet.png';
import salvador220Academy from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import salvador220AcademySeaView from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/academia_com_vista_mar.png';
import salvador220Spa from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/spa_com_sauna_e_sala_massagem.png';
import salvador220InfinityPool from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita.png';
import salvador220PoolAerial from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/vista_aerea_piscina.png';
import salvador220Rooftop from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/vista_rooftop.png';
import salvador220RooftopGourmet from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_rooftop.png';
import salvador220ApartmentOneBedroom from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_1_quarto_33_34m2.png';
import salvador220ApartmentOneBedroom48 from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_1_quarto_48m2.png';
import salvador220ApartmentTwoSuites from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_2_suites_com_lavabo_74m2.png';
import salvador220SuiteTwoSuites from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_2_suites_74m2.png';
import salvador220ApartmentTwoBedrooms from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_2_quartos_1_suite_73m2.png';
import salvador220SuiteTwoBedrooms from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_2_quartos_1_suite_73m2.png';
import salvador220LanaiApartment from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/imagens_empreendimento/apartamentos/lanai_apartamento_1_quarto_32m2.png';
import salvador220LobbyPlan from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/implantacao_pavimento_lobby_terreo.png';
import salvador220LeisurePlan from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/implantacao_pavimento_lazer.png';
import salvador220RooftopPlan from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/planta_rooftop_22_pavimento.png';
import salvador220PlanOneBedroom from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/planta_1_quarto_33_34m2.png';
import salvador220PlanOneBedroom48 from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/planta_1_quarto_48m2.png';
import salvador220PlanTwoSuites from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/planta_2_suites_com_lavabo_74m2.png';
import salvador220PlanTwoBedrooms73 from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/planta_2_quartos_1_suite_73m2.png';
import salvador220PlanTwoBedrooms69 from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/planta_2_quartos_1_suite_69m2.png';
import salvador220LanaiPlan from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/implantacao_lanai_2_pavimentos.png';
import salvador220FirstFloorPlan from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/pavimento_primeiro.png';
import salvador220TypicalFloor2To6 from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/pavimento_tipo_2_ao_6_andar.png';
import salvador220TypicalFloor7To20 from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/pavimento_tipo_7_ao_20_andar.png';
import salvador220TypicalFloor21 from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/pavimento_tipo_21_andar.png';
import salvador220RooftopCoverPlan from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/plantas/rooftop_cobertura_22_andar.png';
import salvador220Location from './assets/Empreendimentos/Bahia/Salvador_220_Organizado/localizacao/localizacao_salvador_220_rio_vermelho.png';
import vivantOrganizedCover from './assets/Empreendimentos/Bahia/Vivant_Organizado/capa/capa_vivant.png';
import vivantNightTower from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/fachadas/torre_vivant_vista_noturna.png';
import vivantClaraNunesAccess from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/fachadas/fachada_acesso_rua_clara_nunes.png';
import vivantCatabasGate from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/fachadas/portaria_alameda_das_catabas.png';
import vivantMinibosque from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/fachadas/minibosque_acesso_praca_aquarius.png';
import vivantPlatoZen from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_zen.png';
import vivantPlatoKids from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_kids.png';
import vivantPlatoBarbecue from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_barbecue.png';
import vivantPlatoPet from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_pet.png';
import vivantExternalLeisure from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/lazer_externo_vista_aerea.png';
import vivantPoolLane from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/piscina_raia_22m_hidromassagem.png';
import vivantAdultChildrenPool from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_infantil.png';
import vivantPoolGourmet from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/gourmet_da_piscina.png';
import vivantSportsCourt from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/quadra_esportiva_quiosque_barbecue.png';
import vivantPlayground from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import vivantLobbyEnergie from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/lobby_energie.png';
import vivantPartyRoom from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import vivantConfraria from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/confraria.png';
import vivantTeenLounge from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/teen_lounge.png';
import vivantPlayroom from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import vivantFitness from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/fitness.png';
import vivantCrossfit from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/crossfit.png';
import vivantPetCare from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import vivantCoworking from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/areas_comuns/coworking.png';
import vivantBalcony from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/apartamentos/varanda_gourmet_vista_34_andar.png';
import vivantLiving from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/apartamentos/living.png';
import vivantMasterSuite from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/apartamentos/suite_master.png';
import vivantHomeTheater from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/apartamentos/home_theater_office.png';
import vivantExpandedSuite from './assets/Empreendimentos/Bahia/Vivant_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada.png';
import vivantCatabasPlan from './assets/Empreendimentos/Bahia/Vivant_Organizado/plantas/implantacao_pavimento_catabas.png';
import vivantWellnessPlan from './assets/Empreendimentos/Bahia/Vivant_Organizado/plantas/implantacao_pavimento_wellness.png';
import vivantClaraNunesPlan from './assets/Empreendimentos/Bahia/Vivant_Organizado/plantas/implantacao_pavimento_clara_nunes.png';
import vivantTypicalFloorPlan from './assets/Empreendimentos/Bahia/Vivant_Organizado/plantas/pavimento_tipo_implantado.png';
import vivantPlanStandard from './assets/Empreendimentos/Bahia/Vivant_Organizado/plantas/planta_padrao_116m2_3_suites.png';
import vivantPlanHome from './assets/Empreendimentos/Bahia/Vivant_Organizado/plantas/planta_opcao_home_116m2_2_suites.png';
import vivantPlanExpandedSuite from './assets/Empreendimentos/Bahia/Vivant_Organizado/plantas/planta_opcao_suite_ampliada_116m2_2_suites.png';
import vivantLocationMap from './assets/Empreendimentos/Bahia/Vivant_Organizado/localizacao/mapa_entorno_caminho_das_arvores.png';
import vivantTancredoNeves from './assets/Empreendimentos/Bahia/Vivant_Organizado/localizacao/entorno_av_tancredo_neves.png';
import vivantAquariusGardens from './assets/Empreendimentos/Bahia/Vivant_Organizado/localizacao/praca_aquarius_jardins.png';
import vivantAquariusPaths from './assets/Empreendimentos/Bahia/Vivant_Organizado/localizacao/praca_aquarius_caminhos.png';
import vivantAquariusGreenArea from './assets/Empreendimentos/Bahia/Vivant_Organizado/localizacao/praca_aquarius_area_verde.png';
import beachClassJaguaribeOrganizedCover from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/capa/capa_beach_class_jaguaribe.png';
import beachClassJaguaribeFacade from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/fachadas/fachada_principal_torre.png';
import beachClassJaguaribeSeaTower from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/fachadas/torre_frente_mar.png';
import beachClassJaguaribeAccess from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/fachadas/acesso_rua_desembargador_lafayette_velloso.png';
import beachClassJaguaribeNightLeisure from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/lazer_vista_aerea_noturna.png';
import beachClassJaguaribePoolAerial from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita_vista_aerea.png';
import beachClassJaguaribeSeaPool from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita_frente_mar.png';
import beachClassJaguaribePoolView from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/piscina_vista_mar.png';
import beachClassJaguaribeLounge from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/lounge_externo.png';
import beachClassJaguaribeExternalGourmet from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/gourmet_externo.png';
import beachClassJaguaribePartyTerrace from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/terraco_salao_de_festas.png';
import beachClassJaguaribePartyRoom from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas_gourmet.png';
import beachClassJaguaribePlayground from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/playground.png';
import beachClassJaguaribeHall from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/hall_social.png';
import beachClassJaguaribeColiving from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/coliving_coworking.png';
import beachClassJaguaribeGrabAndGo from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/grab_and_go.png';
import beachClassJaguaribeFitness from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/fitness.png';
import beachClassJaguaribeBoardGuard from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/guarderia_pranchas.png';
import beachClassJaguaribeTwoBedroomLiving from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/living_apartamento_2_quartos_frente_mar.png';
import beachClassJaguaribeTwoBedroomSuite from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_2_quartos_frente_mar.png';
import beachClassJaguaribeTwoSuitesLiving from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/living_apartamento_2_suites.png';
import beachClassJaguaribeOneSuiteLiving from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/living_apartamento_1_suite.png';
import beachClassJaguaribeOneSuite from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_1_suite.png';
import beachClassJaguaribeGroundPlan from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/implantacao_pavimento_terreo.png';
import beachClassJaguaribeLeisurePlan from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/implantacao_pavimento_lazer.png';
import beachClassJaguaribeColumnsPlan from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/planta_indicativa_colunas_tipologias_1_ao_16.png';
import beachClassJaguaribeTypicalFloor1 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_1_1_ao_16_andar.png';
import beachClassJaguaribePlan74 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/planta_74m2_2_quartos_1_suite_terminacao_1.png';
import beachClassJaguaribePlan64 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/planta_64m2_2_suites_terminacao_3.png';
import beachClassJaguaribePlan40 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/planta_40m2_1_suite_terminacao_7.png';
import beachClassJaguaribePlan65 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/planta_65m2_2_quartos_1_suite_terminacao_10.png';
import beachClassJaguaribeTypicalFloor2 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_2_17_andar.png';
import beachClassJaguaribeTypicalFloor3 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_3_18_andar.png';
import beachClassJaguaribeTypicalFloor4 from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_4_19_ao_21_andar.png';
import beachClassJaguaribeLocation from './assets/Empreendimentos/Bahia/Beach_Class_Jaguaribe_Organizado/localizacao/frente_mar_praia_jaguaribe.png';
import unicaCardealCover from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/foto_capa.png';
import unicaCardealAcademy from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/academia.png';
import unicaCardealAccess from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/acesso_empreendimento.png';
import unicaCardealPlayroom from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/brinquedoteca.png';
import unicaCardealGourmet from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/espaco_gourmet.png';
import unicaCardealTowers from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/fachada_torres.png';
import unicaCardealOutdoorFitness from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/fitness_externo.png';
import unicaCardealMinicampo from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/minicampo.png';
import unicaCardealPool from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/piscina.png';
import unicaCardealPlayground from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/playground.png';
import unicaCardealHomeBedroom from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/quarto_casal_apto_home.png';
import unicaCardealLivingBedroom from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/quarto_casal_apto_living.png';
import unicaCardealPartyRoom from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/salao_de_festas.png';
import unicaCardealHomeLiving from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/sala_apto_home.png';
import unicaCardealLiving from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/sala_apto_living.png';
import unicaCardealGamesRoom from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/sala_de_jogos.png';
import unicaCardealHomeSecondBedroom from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/segundo_quarto_apto_home.png';
import unicaCardealLivingSecondBedroom from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/segundo_quarto_apto_living.png';
import unicaCardealBalcony from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/varanda_apto_living.png';
import unicaCardealLeisureAerial from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/vista_aerea_area_de_lazer.png';
import unicaCardealSeaView from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/imagens_empreendimento/vista_empreendimento_e_mar.png';
import unicaCardealGeneralPlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/implantacao_geral.png';
import unicaCardealLeisurePlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/implantacao_lazer.png';
import unicaCardealTowersPlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/implantacao_torres.png';
import unicaCardealGroundPlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/pavimento_terreo.png';
import unicaCardealTypicalFloorPlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/pavimento_tipo.png';
import unicaCardealHomePlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/planta_apto_home_41_1m2.png';
import unicaCardealLivingPlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/planta_apto_living_44_7m2.png';
import unicaCardealHomeGardenPlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/planta_home_garden_58_99m2.png';
import unicaCardealLivingGardenPlan from './assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/planta_living_garden_63_64m2.png';
import moodColinaCover from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/foto_capa.png';
import moodColinaAccess from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/04_acesso_principal.png';
import moodColinaLeisureAerial from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/02_vista_aerea_mood_colina.png';
import moodColinaPlayground from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/07_parque_infantil.png';
import moodColinaPool from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/06_piscina_area_lazer.png';
import moodColinaPoolAerial from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/05_piscina_vista_aerea.png';
import moodColinaCourt from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/08_quadra_recreativa.png';
import moodColinaBedroom from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/11_quarto_apto_57_65m2.png';
import moodColinaLiving from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/09_sala_estar_apto_66_90m2.png';
import moodColinaSuite from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/10_suite_apto_66_90m2.png';
import moodColinaOrlaView from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/01_vista_orla_patamares.png';
import moodColinaGeneralPlan from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/plantas/01_implantacao_geral.png';
import moodColinaLeisurePlan from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/plantas/02_pavimento_lazer.png';
import moodColinaTypicalFloorPlan from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/plantas/03_pavimento_tipo_57_65_e_66_90m2.png';
import moodColinaComfortExpandedPlan from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/plantas/05_planta_apto_comfort_66_90m2_sala_ampliada_2_quartos.png';
import moodColinaComfortPlan from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/plantas/04_planta_apto_comfort_66_90m2_3_quartos.png';
import moodColinaSmartPlan from './assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/plantas/06_planta_apto_smart_57_65m2_2_quartos.png';
import moodClubCover from './assets/Empreendimentos/Bahia/Mood_Club_organizado/00_capa/capa_mood_club_acesso_principal.png';
import moodClubAccess from './assets/Empreendimentos/Bahia/Mood_Club_organizado/01_imagens_empreendimento/01_acesso_principal.png';
import moodClubGarden from './assets/Empreendimentos/Bahia/Mood_Club_organizado/01_imagens_empreendimento/02_unidade_garden_area_externa.png';
import moodClubComfortLiving from './assets/Empreendimentos/Bahia/Mood_Club_organizado/01_imagens_empreendimento/03_living_apto_comfort_65_59m2.png';
import moodClubSmartLiving from './assets/Empreendimentos/Bahia/Mood_Club_organizado/01_imagens_empreendimento/04_living_apto_smart_53_30m2.png';
import moodClubComfortPlan from './assets/Empreendimentos/Bahia/Mood_Club_organizado/02_plantas/apartamentos/01_planta_apto_comfort_65_59m2_3_quartos.png';
import moodClubSmartPlan from './assets/Empreendimentos/Bahia/Mood_Club_organizado/02_plantas/apartamentos/02_planta_apto_smart_53_30m2_2_quartos.png';
import moodClubSitePlan from './assets/Empreendimentos/Bahia/Mood_Club_organizado/02_plantas/implantacao_e_areas_comuns/01_implantacao_no_terreno.png';
import moodClubGroundPlan from './assets/Empreendimentos/Bahia/Mood_Club_organizado/02_plantas/implantacao_e_areas_comuns/02_implantacao_terreo_geral.png';
import moodClubLeisurePlan from './assets/Empreendimentos/Bahia/Mood_Club_organizado/02_plantas/implantacao_e_areas_comuns/03_pavimento_terreo_lazer_e_servicos.png';
import moodClubGardenPlan from './assets/Empreendimentos/Bahia/Mood_Club_organizado/02_plantas/implantacao_e_areas_comuns/04_pavimento_garden_torre_a.png';
import moodClubTypicalPlan from './assets/Empreendimentos/Bahia/Mood_Club_organizado/02_plantas/implantacao_e_areas_comuns/05_pavimento_tipo_torre_a.png';
import moodClubAerialLocation from './assets/Empreendimentos/Bahia/Mood_Club_organizado/03_localizacao/01_vista_aerea_localizacao_terreno.png';
import moodClubLocationMap from './assets/Empreendimentos/Bahia/Mood_Club_organizado/03_localizacao/02_mapa_localizacao_e_pontos_proximos.png';
import moodCostaAzulCover from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/00_capa/capa_mood_costa_azul_fachada_torres_vista_mar.png';
import moodCostaAzulFacade from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/fachadas_e_acesso/01_fachada_duas_torres_vista_mar.png';
import moodCostaAzulAccess from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/fachadas_e_acesso/02_acesso_fachada_principal.png';
import moodCostaAzulPool from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/lazer_e_areas_comuns/01_piscina_borda_infinita_vista_mar.png';
import moodCostaAzulPoolBetween from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/lazer_e_areas_comuns/02_piscina_entre_torres.png';
import moodCostaAzulGym from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/lazer_e_areas_comuns/05_academia.png';
import moodCostaAzulPartyRoom from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/lazer_e_areas_comuns/06_salao_de_festas.png';
import moodCostaAzulLiving100 from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/apartamentos_decorados/01_sala_apto_100m2_sala_ampliada.png';
import moodCostaAzulLiving80 from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/apartamentos_decorados/03_sala_apto_80m2_sala_ampliada.png';
import moodCostaAzulLiving73 from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/01_imagens_empreendimento/apartamentos_decorados/05_sala_apto_73m2.png';
import moodCostaAzulPlan100 from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/apartamentos/01_planta_apto_comfort_plus_100m2_3_quartos_home_office.png';
import moodCostaAzulPlan100Expanded from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/apartamentos/02_planta_apto_comfort_plus_100m2_sala_ampliada_2_quartos.png';
import moodCostaAzulPlan80 from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/apartamentos/03_planta_apto_comfort_80m2_3_quartos.png';
import moodCostaAzulPlan80Expanded from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/apartamentos/04_planta_apto_comfort_80m2_sala_ampliada_2_quartos.png';
import moodCostaAzulPlan73 from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/apartamentos/05_planta_apto_smart_73m2_3_quartos.png';
import moodCostaAzulPlan73Expanded from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/apartamentos/06_planta_apto_smart_73m2_sala_ampliada_2_quartos.png';
import moodCostaAzulSitePlan from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/implantacao_e_areas_comuns/01_implantacao_geral_torres_coral_e_brisa.png';
import moodCostaAzulLeisurePlan from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/implantacao_e_areas_comuns/02_pavimento_lazer_implantacao.png';
import moodCostaAzulGardenPlan from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/02_plantas/implantacao_e_areas_comuns/03_pavimento_lazer_apartamentos_garden.png';
import moodCostaAzulLocationBeach from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/03_localizacao/01_localizacao_170m_da_praia.png';
import moodCostaAzulLocationMap from './assets/Empreendimentos/Bahia/Mood_Costa_Azul_organizado/03_localizacao/02_localizacao_costa_azul_orla.png';
import moodSolBahiaCover from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/00_capa/capa_mood_sol_bahia_torres_vista_mar.png';
import moodSolBahiaAerial from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/01_vista_aerea_empreendimento_e_orla.png';
import moodSolBahiaFacade from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/02_fachada_vista_mar.png';
import moodSolBahiaNight from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/03_torres_vista_noturna.png';
import moodSolBahiaAccess from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/04_acesso_portaria.png';
import moodSolBahiaHall from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/05_hall_de_entrada.png';
import moodSolBahiaLeisure from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/06_lazer_vista_aerea.png';
import moodSolBahiaPool from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/12_piscina_vista_aerea.png';
import moodSolBahiaTerrace from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/08_terraco_vista_mar.png';
import moodSolBahiaComfortLiving from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/24_living_apto_65_59m2.png';
import moodSolBahiaSmartLiving from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/27_living_apto_53_30m2.png';
import moodSolBahiaGarden from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/01_imagens_empreendimento/30_apartamento_garden_area_externa.png';
import moodSolBahiaComfortPlan from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/02_plantas/apartamentos/01_planta_apto_65_59m2_3_quartos_1_suite.png';
import moodSolBahiaSmartPlan from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/02_plantas/apartamentos/02_planta_apto_53_30m2_2_quartos_1_suite.png';
import moodSolBahiaTypicalPlan from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/02_plantas/apartamentos/03_pavimento_tipo_torres_mar_sol_brisa.png';
import moodSolBahiaGroundPlan from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/02_plantas/apartamentos/04_pavimento_terreo_apartamentos_garden.png';
import moodSolBahiaSitePlan from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/02_plantas/implantacao_e_areas_comuns/08_implantacao_geral_3_torres.png';
import moodSolBahiaLeisurePlan from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/02_plantas/implantacao_e_areas_comuns/05_lazer_bem_viver_torre_sol.png';
import moodSolBahiaGymPlan from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/02_plantas/implantacao_e_areas_comuns/07_academia_layout_e_equipamentos.png';
import moodSolBahiaAerialLocation from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/03_localizacao/01_vista_aerea_orla_patamares_pituacu.png';
import moodSolBahiaLocationMap from './assets/Empreendimentos/Bahia/Mood_Sol_Bahia_organizado/03_localizacao/02_mapa_localizacao_e_entorno.png';
import arthurBrunoCover from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/01_Capa/capa_fachada_principal.png';
import arthurBrunoAerial from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/fachada_vista_aerea_principal.png';
import arthurBrunoHistoricHouse from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/casarao_historico_espaco_comercial.png';
import arthurBrunoGreenTunnel from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/tunel_verde_redario.png';
import arthurBrunoPool1 from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/piscina_adulto_infantil_deck_vista_01.png';
import arthurBrunoPool2 from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/piscina_adulto_infantil_deck_vista_02.png';
import arthurBrunoPoolSupport from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/apoio_piscina.png';
import arthurBrunoMinicampo from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/minicampo.png';
import arthurBrunoGourmet from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/espaco_gourmet.png';
import arthurBrunoKidsPartyRoom from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/salao_festas_infantil.png';
import arthurBrunoPlayroom from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/brinquedoteca.png';
import arthurBrunoOutdoorPlay1 from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/espaco_infantil_externo_01.png';
import arthurBrunoOutdoorPlay2 from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/espaco_infantil_externo_02.png';
import arthurBrunoPetPlace from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/pet_place.png';
import arthurBrunoPetWash from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/pet_wash.png';
import arthurBrunoFitness from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/fitness_academia.png';
import arthurBrunoFunctionalFitness from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/espaco_ginastica_funcional.png';
import arthurBrunoParcelStorage from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/guarda_volumes.png';
import arthurBrunoBikeRack from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/bicicletario.png';
import arthurBrunoAppPickup from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/espera_transporte_por_app.png';
import arthurBrunoGourmetTerrace from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/apartamento_terraco_gourmet_perspectiva.png';
import arthurBrunoLivingDining from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/apartamento_sala_estar_jantar_perspectiva.png';
import arthurBrunoMasterSuite from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/apartamento_suite_master_perspectiva.png';
import arthurBrunoFurnishedLeisure from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/area_lazer_equipada_mobiliada.png';
import arthurBrunoHeatedPool from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/piscina_aquecida_ambiente.png';
import arthurBrunoGroundPlan from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/03_Plantas_e_Implantacao/planta_terreo_areas_comuns_legenda.png';
import arthurBrunoSitePlan from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/03_Plantas_e_Implantacao/implantacao_torres_a_b_c_d_e_f.png';
import arthurBrunoTypicalFloorPlan from './assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/03_Plantas_e_Implantacao/planta_pavimento_tipo_apartamentos.png';
import conceptJoaoFarinhaCover from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/01_Capa/capa_principal_torre_concept_joao_farinha.png';
import conceptJoaoFarinhaFacade from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/fachada_torre_perspectiva_geral.png';
import conceptJoaoFarinhaEntrance from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/fachada_acesso_principal.png';
import conceptJoaoFarinhaFacadeBelow from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/fachada_torre_vista_de_baixo.png';
import conceptJoaoFarinhaFacadeVertical from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/fachada_torre_perspectiva_vertical.png';
import conceptJoaoFarinhaLobby from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/hall_social_recepcao.png';
import conceptJoaoFarinhaLawnLounge from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/lounge_gramado_paisagismo.png';
import conceptJoaoFarinhaPetPlace from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/pet_place_pet_wash.png';
import conceptJoaoFarinhaHammocks from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/espaco_redario_jardim.png';
import conceptJoaoFarinhaColivingCafe from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/coliving_coworking_cafe.png';
import conceptJoaoFarinhaCoworkingRooms from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/coliving_coworking_salas.png';
import conceptJoaoFarinhaGym from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/academia_interna.png';
import conceptJoaoFarinhaOutdoorFitness from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/fitness_externo.png';
import conceptJoaoFarinhaGourmetRoom from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/salao_gourmet.png';
import conceptJoaoFarinhaMassageRoom from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/sala_de_massagem.png';
import conceptJoaoFarinhaLaundry from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/lavanderia_compartilhada.png';
import conceptJoaoFarinhaPool from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/piscina_ao_ar_livre.png';
import conceptJoaoFarinhaGardenDeck from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/deck_jardim_daybeds.png';
import conceptJoaoFarinhaSwings from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/espaco_balancos_jardim.png';
import conceptJoaoFarinhaLawnSunset from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/lounge_gramado_entardecer.png';
import conceptJoaoFarinhaGourmetTerrace from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/terraco_gourmet.png';
import conceptJoaoFarinhaStudio from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/apartamento_studio_26_a_28m2_interior.png';
import conceptJoaoFarinhaOneBedroom from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_39m2_sala.png';
import conceptJoaoFarinhaLoftLiving from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/apartamento_loft_44_a_46m2_sala.png';
import conceptJoaoFarinhaLoftMezzanine from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/apartamento_loft_44_a_46m2_mezanino.png';
import conceptJoaoFarinhaTwoBedroomLiving from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_56m2_sala.png';
import conceptJoaoFarinhaTwoBedroomSuite from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_56m2_suite.png';
import conceptJoaoFarinhaSitePlan from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/implantacao_geral_condominio.png';
import conceptJoaoFarinhaGroundFloor from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_terreo_acessos_e_estacionamento.png';
import conceptJoaoFarinhaParkingFloor from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_vazado_01_estacionamento.png';
import conceptJoaoFarinhaLeisureFloor from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_lazer_piscina_gourmet_academia.png';
import conceptJoaoFarinhaFloorsOneToThree from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/02_Plantas_Tipo/planta_tipo_pavimentos_01_a_03.png';
import conceptJoaoFarinhaFloorsFourToTwentyThree from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/02_Plantas_Tipo/planta_tipo_pavimentos_04_a_23.png';
import conceptJoaoFarinhaFloorsTwentyFourAndTwentySix from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/02_Plantas_Tipo/planta_tipo_pavimentos_24_e_26.png';
import conceptJoaoFarinhaLoftFloors from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/02_Plantas_Tipo/planta_tipo_pavimentos_25_e_27_lofts.png';
import conceptJoaoFarinhaSitePlanReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/implantacao_geral_legendas.png';
import conceptJoaoFarinhaGroundFloorReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/pavimento_terreo_legendas.png';
import conceptJoaoFarinhaParkingFloorReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/pavimento_vazado_01_legendas.png';
import conceptJoaoFarinhaLeisureFloorReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/pavimento_lazer_legendas.png';
import conceptJoaoFarinhaFloorsOneToThreeReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/planta_tipo_pavimentos_01_a_03_metragens.png';
import conceptJoaoFarinhaFloorsFourToTwentyThreeReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/planta_tipo_pavimentos_04_a_23_metragens.png';
import conceptJoaoFarinhaFloorsTwentyFourAndTwentySixReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/planta_tipo_pavimentos_24_e_26_metragens.png';
import conceptJoaoFarinhaLoftFloorsReference from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Metragens/planta_tipo_pavimentos_25_e_27_metragens.png';
import conceptJoaoFarinhaLocation from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/04_Localizacao_e_Entorno/localizacao_via_mangue_praia_boa_viagem_shopping_recife.png';
import conceptJoaoFarinhaShopping from './assets/Empreendimentos/Pernambuco/Concept_Joao_Farinha_Organizado/04_Localizacao_e_Entorno/entorno_shopping_recife.png';
import infinityRecifeCover from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/01_Capa/capa_principal_infinity_recife_fachada_torre.png';
import infinityRecifeFachadaEmbasamentoEntrada from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/fachada_embasamento_entrada.png';
import infinityRecifeFachadaPrincipalVistaAvenida from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/fachada_principal_vista_avenida.png';
import infinityRecifeWellnessAreaRelaxamentoPiscina from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/wellness_area_relaxamento_piscina.png';
import infinityRecifeRestauranteSalaoInterno from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/restaurante_salao_interno.png';
import infinityRecifePiscinaPanoramaBordaInfinita from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/piscina_panorama_borda_infinita.png';
import infinityRecifeEspacoGourmetMesaJantar from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/espaco_gourmet_mesa_jantar.png';
import infinityRecifeGaragemEElevadores from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/garagem_e_elevadores.png';
import infinityRecifePiscinaBordaInfinitaVistaAerea from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/piscina_borda_infinita_vista_aerea.png';
import infinityRecifeAcademiaMusculacao from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/academia_musculacao.png';
import infinityRecifeAcademiaEsteirasVistaMar from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/academia_esteiras_vista_mar.png';
import infinityRecifeLavanderiaCompartilhada from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/lavanderia_compartilhada.png';
import infinityRecifeStudioInfinitySolo26m2Ambiente from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/studio_infinity_solo_26m2_ambiente.png';
import infinityRecifeApartamentoStudioSalaEVaranda from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/apartamento_studio_sala_e_varanda.png';
import infinityRecifeApartamentoInfinityOneSalaDeJantar from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/apartamento_infinity_one_sala_de_jantar.png';
import infinityRecifeApartamentoInfinityTwoSalaSocial from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/apartamento_infinity_two_sala_social.png';
import infinityRecifeApartamentoVistaMarLounge from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/apartamento_vista_mar_lounge.png';
import infinityRecifeApartamentoAmbienteSalaPequena from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/apartamento_ambiente_sala_pequena.png';
import infinityRecifeApartamentoDetalhePoltronaVista from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/02_Imagens_Empreendimento/apartamento_detalhe_poltrona_vista.png';
import infinityRecifePavimentoSemienterradoGaragemEBicicletario from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/01_Pavimentos_e_Areas_Comuns/pavimento_semienterrado_garagem_e_bicicletario.png';
import infinityRecifePaginaOriginalPavimentoSemienterradoGaragemEBicicletario from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/03_Paginas_Com_Legendas/pagina_original_pavimento_semienterrado_garagem_e_bicicletario.png';
import infinityRecifePavimentoTerreoHallAcessosEntrada from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/01_Pavimentos_e_Areas_Comuns/pavimento_terreo_hall_acessos_entrada.png';
import infinityRecifePaginaOriginalPavimentoTerreoHallAcessosEntrada from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/03_Paginas_Com_Legendas/pagina_original_pavimento_terreo_hall_acessos_entrada.png';
import infinityRecifePrimeiroPavimentoEstacionamento from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/01_Pavimentos_e_Areas_Comuns/primeiro_pavimento_estacionamento.png';
import infinityRecifePaginaOriginalPrimeiroPavimentoEstacionamento from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/03_Paginas_Com_Legendas/pagina_original_primeiro_pavimento_estacionamento.png';
import infinityRecifePavimentoLazerPiscinasAcademiaGourmet from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/01_Pavimentos_e_Areas_Comuns/pavimento_lazer_piscinas_academia_gourmet.png';
import infinityRecifePaginaOriginalPavimentoLazerPiscinasAcademiaGourmet from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/03_Paginas_Com_Legendas/pagina_original_pavimento_lazer_piscinas_academia_gourmet.png';
import infinityRecifeSegundoPavimentoDistribuicaoUnidades from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/01_Pavimentos_e_Areas_Comuns/segundo_pavimento_distribuicao_unidades.png';
import infinityRecifePaginaOriginalSegundoPavimentoDistribuicaoUnidades from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/03_Paginas_Com_Legendas/pagina_original_segundo_pavimento_distribuicao_unidades.png';
import infinityRecifePavimentos04A18DistribuicaoUnidades from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/01_Pavimentos_e_Areas_Comuns/pavimentos_04_a_18_distribuicao_unidades.png';
import infinityRecifePaginaOriginalPavimentos04A18DistribuicaoUnidades from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/03_Paginas_Com_Legendas/pagina_original_pavimentos_04_a_18_distribuicao_unidades.png';
import infinityRecifeDecimoNonoPavimentoDistribuicaoUnidades from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/01_Pavimentos_e_Areas_Comuns/decimo_nono_pavimento_distribuicao_unidades.png';
import infinityRecifePaginaOriginalDecimoNonoPavimentoDistribuicaoUnidades from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/03_Paginas_Com_Legendas/pagina_original_decimo_nono_pavimento_distribuicao_unidades.png';
import infinityRecifePlanta2pInfinitySolo3220m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_2p_infinity_solo_32_20m2.png';
import infinityRecifePlanta2pInfinitySolo3835m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_2p_infinity_solo_38_35m2.png';
import infinityRecifePlanta2pInfinitySolo4980m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_2p_infinity_solo_49_80m2.png';
import infinityRecifePlanta2pInfinityTwo7890m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_2p_infinity_two_78_90m2.png';
import infinityRecifePlanta4a18InfinitySolo2690m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_4a18_infinity_solo_26_90m2.png';
import infinityRecifePlanta4a18InfinitySolo3570m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_4a18_infinity_solo_35_70m2.png';
import infinityRecifePlanta4a18InfinitySolo3975m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_4a18_infinity_solo_39_75m2.png';
import infinityRecifePlanta4a18InfinitySolo3930m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_4a18_infinity_solo_39_30m2.png';
import infinityRecifePlanta4a18InfinityOne6190m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_4a18_infinity_one_61_90m2.png';
import infinityRecifePlanta4a18InfinityTwo7615m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_4a18_infinity_two_76_15m2.png';
import infinityRecifePlanta19pInfinitySolo3505m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_19p_infinity_solo_35_05m2.png';
import infinityRecifePlanta19pInfinityOne4395m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_19p_infinity_one_43_95m2.png';
import infinityRecifePlanta19pInfinityOne4860m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_19p_infinity_one_48_60m2.png';
import infinityRecifePlanta19pInfinityOne4800m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_19p_infinity_one_48_00m2.png';
import infinityRecifePlanta19pInfinityOne6270m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_19p_infinity_one_62_70m2.png';
import infinityRecifePlanta19pInfinityTwo9445m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_19p_infinity_two_94_45m2.png';
import infinityRecifePlanta19pInfinityTwo9710m2 from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/03_Plantas_e_Implantacao/02_Plantas_Individuais/planta_19p_infinity_two_97_10m2.png';
import infinityRecifeMapaLocalizacaoInfinityRecife from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/04_Localizacao_e_Contexto/mapa_localizacao_infinity_recife.png';
import infinityRecifeEntornoPraiaPorDoSol from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/04_Localizacao_e_Contexto/entorno_praia_por_do_sol.png';
import infinityRecifeFachadaEdificioOriginalRetrofit from './assets/Empreendimentos/Pernambuco/Infinity_Recife_Organizado/04_Localizacao_e_Contexto/fachada_edificio_original_retrofit.png';
import solareCover from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/01_Capa/capa_principal_piscinas_e_fachadas_ao_entardecer.png';
import solarePoolsAerial from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/piscinas_vista_aerea_geral.png';
import solareFacade from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/fachada_blocos_vista_para_piscina.png';
import solarePoolsSunset from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/piscinas_e_fachadas_ao_entardecer.png';
import solarePoolsHydromassage from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/piscinas_com_ilhas_e_hidromassagem.png';
import solareLobby from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/lobby_recepcao_social.png';
import solareSportsCourt from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/quadra_poliesportiva.png';
import solareFitness from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/academia_fitness.png';
import solarePlayroom from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/brinquedoteca.png';
import solarePlayground from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/playground_ao_ar_livre.png';
import solareRestaurant from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/restaurante_com_bar.png';
import solareRestaurantTerrace from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/terraco_do_restaurante.png';
import solareStudioLiving from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_32m2_estar_e_cozinha.png';
import solareStudioBedroom from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_32m2_quarto_e_estar.png';
import solareStudioBalcony from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_32m2_varanda.png';
import solareApartmentLiving from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_63m2_sala_de_estar.png';
import solareApartmentBalcony from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_63m2_varanda.png';
import solareIntegratedStudiosLiving from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_32mais32m2_sala_integrada.png';
import solareIntegratedStudiosLivingAlt from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_32mais32m2_sala_segunda_perspectiva.png';
import solareIntegratedStudiosSuite from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_32mais32m2_suite.png';
import solareIntegratedStudiosBalcony from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_32mais32m2_varanda.png';
import solareIntegratedApartmentLiving from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_63mais32m2_sala_integrada.png';
import solareIntegratedApartmentBalcony from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/apartamento_63mais32m2_varanda.png';
import solareStudioGarden from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/garden_apt_32m2_area_externa.png';
import solareApartmentGarden from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/garden_apt_63m2_area_externa.png';
import solareBicycleRack from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/bicicletario.png';
import solarePetPlace from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/02_Imagens_Empreendimento/pet_place_e_pet_wash.png';
import solareStudioPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_apartamento_32m2.png';
import solareApartmentPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_apartamento_63m2.png';
import solareIntegratedStudiosPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_apartamento_integrado_32mais32m2.png';
import solareIntegratedStudiosTwoSuitesPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_apartamento_integrado_32mais32m2_duas_suites.png';
import solareIntegratedApartmentPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_apartamento_integrado_63mais32m2.png';
import solareGroundPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimento_terreo_desenho.png';
import solareGroundPlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimento_terreo_com_legendas.png';
import solareTypicalFloorPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimentos_01_a_03_desenho.png';
import solareTypicalFloorPlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/02_Pavimentos/pavimentos_01_a_03_com_legendas.png';
import solareSitePlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/03_Implantacao_Geral/implantacao_geral_desenho.png';
import solareSitePlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/03_Plantas_e_Implantacao/03_Implantacao_Geral/implantacao_geral_com_legendas.png';
import solareLocationMap from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/04_Localizacao_e_Entorno/localizacao_com_pontos_de_referencia.png';
import solareCupeAerial from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/04_Localizacao_e_Entorno/vista_aerea_praia_do_cupe_e_entorno.png';
import solareBeachLandscape from './assets/Empreendimentos/Pernambuco/Beach_Class_Solare_Organizado/04_Localizacao_e_Entorno/fotografia_praia_paisagem_litoranea.png';
import waveCover from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/01_Capa/capa_principal_vista_geral_piscinas_e_blocos.png';
import wavePoolsAndBlocks from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/vista_geral_empreendimento_piscinas_e_blocos.png';
import wavePoolSpa from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/piscina_prainha_e_spa_vista_aerea.png';
import wavePoolBar from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/bar_da_piscina.png';
import waveLuau from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/espaco_luau_e_convivencia.png';
import waveBarbecue from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/espaco_barbecue_e_redario.png';
import waveSportsCourts from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/quadras_esportivas_vista_aerea.png';
import waveFitness from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/academia_equipamentos.png';
import waveBeachAccess from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/alameda_acesso_praia_caiques_stand_up.png';
import wavePlayground from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/playground_ao_ar_livre.png';
import wavePlayroom from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/brinquedoteca_infantil.png';
import waveHall from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/hall_social_e_lounge.png';
import waveRestaurant from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/restaurante_interno.png';
import waveRestaurantTerrace from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/terraco_do_restaurante.png';
import waveFacade from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/fachada_bloco_residencial_com_piscina.png';
import waveStudioLiving from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/studio_32m2_estar_e_cozinha.png';
import waveStudioBedroom from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/studio_32m2_quarto.png';
import waveStudioBalcony from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/studio_32m2_varanda_gourmet.png';
import waveStudioGarden from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/studio_32m2_garden_privativo.png';
import waveApartmentLiving from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/apartamento_63m2_sala_e_cozinha.png';
import waveApartmentBalcony from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/apartamento_63m2_varanda_gourmet.png';
import waveApartmentGarden from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/apartamento_63m2_garden_privativo.png';
import waveSitePlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/implantacao_geral_condominio.png';
import waveSocialBlockPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/implantacao_bloco_social.png';
import waveGroundPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimento_terreo_gardens.png';
import waveTypicalFloorPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Pavimentos/pavimentos_tipo_1_ao_3_andar.png';
import waveStudioPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_studio_32m2.png';
import waveApartmentPlan from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_apartamento_2_quartos_63m2.png';
import waveSitePlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_implantacao_geral_com_legendas.png';
import waveSocialBlockPlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_bloco_social_com_legendas.png';
import waveGroundPlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pavimento_terreo.png';
import waveTypicalFloorPlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pavimentos_1_ao_3.png';
import waveStudioPlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_planta_studio_32m2.png';
import waveApartmentPlanLegends from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_planta_2_quartos_63m2.png';
import waveLocationAerial from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/04_Localizacao_e_Entorno/localizacao_aerea_implantacao_e_entorno.png';
import waveLocationMap from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/04_Localizacao_e_Entorno/referencia_localizacao_pontos_de_interesse.png';
import waveCarneirosAerial from './assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/04_Localizacao_e_Entorno/praia_dos_carneiros_vista_aerea.png';
import marineCover from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/01_Capa/capa_vista_aerea_empreendimento_frente_mar.png';
import marinePhotoVistaAereaGeralCondominio from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/vista_aerea_geral_condominio.png';
import marinePhotoFachadaBlocoResidencialComPiscinaAnoitecer from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/fachada_bloco_residencial_com_piscina_anoitecer.png';
import marinePhotoFachadaBlocoVistaDaPiscina from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/fachada_bloco_vista_da_piscina.png';
import marinePhotoHallSocialRecepcao from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/hall_social_recepcao.png';
import marinePhotoPiscinaBordaInfinitaFrenteMar from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/piscina_borda_infinita_frente_mar.png';
import marinePhotoGazeboFrenteMar from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/gazebo_frente_mar.png';
import marinePhotoBarDaPraiaIntegradoPiscina from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/bar_da_praia_integrado_piscina.png';
import marinePhotoPoolHouse from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/pool_house.png';
import marinePhotoParqueAquaticoPiscinaInfantil from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/parque_aquatico_piscina_infantil.png';
import marinePhotoRestauranteInterno from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/restaurante_interno.png';
import marinePhotoDeckExternoRestaurante from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/deck_externo_restaurante.png';
import marinePhotoEspacoGourmetExterno from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/espaco_gourmet_externo.png';
import marinePhotoPlaygroundAreaInfantil from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/playground_area_infantil.png';
import marinePhotoAcademiaFitness from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/academia_fitness.png';
import marinePhotoSpaComSauna from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/spa_com_sauna.png';
import marinePhotoSalasDeMassagem from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/salas_de_massagem.png';
import marinePhotoSalaoDeBeleza from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/salao_de_beleza.png';
import marinePhotoStudio3251m2AmbienteInterno from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/studio_32_51m2_ambiente_interno.png';
import marinePhotoApartamento1Quarto44m2SalaEVaranda from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_44m2_sala_e_varanda.png';
import marinePhotoApartamento1Quarto52m2SalaECozinha from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_52m2_sala_e_cozinha.png';
import marinePhotoApartamento2Quartos62m2SalaECozinha from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_62m2_sala_e_cozinha.png';
import marinePhotoApartamento2Quartos62m2Varanda from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_62m2_varanda.png';
import marinePhotoApartamento2Quartos7135m2Quarto from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_71_35m2_quarto.png';
import marinePhotoApartamento2Quartos78m2GardenEPiscinaPrivativa from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_78m2_garden_e_piscina_privativa.png';
import marinePhotoApartamento3Quartos118m2GardenPiscinaPatio from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_118m2_garden_piscina_patio.png';
import marinePhotoApartamento3Quartos118m2GardenAreaDeDescanso from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_118m2_garden_area_de_descanso.png';
import marinePhotoApartamento3Quartos118m2SalaEVaranda from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_118m2_sala_e_varanda.png';
import marinePhotoApartamento3Quartos118m2Suite from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_118m2_suite.png';
import marinePhotoApartamento3Quartos126m2SalaDeEstar from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_126m2_sala_de_estar.png';
import marinePlanImplantacaoGeralBlocosAreasLazer from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/implantacao_geral_blocos_areas_lazer.png';
import marinePlanPlantaBlocoSocialPavimentoTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_bloco_social_pavimento_terreo.png';
import marinePlanPlantaBlocoSocialPrimeiroPavimento from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_bloco_social_primeiro_pavimento.png';
import marinePlanPlantaBlocosACEPavimentoTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_blocos_a_c_e_pavimento_terreo.png';
import marinePlanPlantaBlocosACEPavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_blocos_a_c_e_pavimento_tipo.png';
import marinePlanPlantaBlocosBDPavimentoTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_blocos_b_d_pavimento_terreo.png';
import marinePlanPlantaBlocosBDPavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_blocos_b_d_pavimento_tipo.png';
import marinePlanPlantaBlocoFPavimentoTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_bloco_f_pavimento_terreo.png';
import marinePlanPlantaBlocoFPavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_bloco_f_pavimento_tipo.png';
import marinePlanPlantaBlocosGIPavimentoTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_blocos_g_i_pavimento_terreo.png';
import marinePlanPlantaBlocosGIPavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_blocos_g_i_pavimento_tipo.png';
import marinePlanPlantaBlocoHPavimentoTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_bloco_h_pavimento_terreo.png';
import marinePlanPlantaBlocoHPavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/01_Implantacao_e_Blocos/planta_bloco_h_pavimento_tipo.png';
import marinePlanPlantaStudio3251m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_studio_32_51m2_com_garden_terreo.png';
import marinePlanPlantaStudio3251m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_studio_32_51m2_pavimento_tipo.png';
import marinePlanPlantaStudio4066m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_studio_40_66m2_com_garden_terreo.png';
import marinePlanPlantaStudio4066m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_studio_40_66m2_pavimento_tipo.png';
import marinePlanPlanta1Quarto44m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_1_quarto_44m2_com_garden_terreo.png';
import marinePlanPlanta1Quarto44m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_1_quarto_44m2_pavimento_tipo.png';
import marinePlanPlanta1Quarto52A54m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_1_quarto_52_a_54m2_com_garden_terreo.png';
import marinePlanPlanta1Quarto52m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_1_quarto_52m2_pavimento_tipo.png';
import marinePlanPlanta1Quarto57m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_1_quarto_57m2_pavimento_tipo.png';
import marinePlanPlanta2Quartos62m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_62m2_com_garden_terreo.png';
import marinePlanPlanta2Quartos62m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_62m2_pavimento_tipo.png';
import marinePlanPlanta2Quartos7135m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_71_35m2_com_garden_terreo.png';
import marinePlanPlanta2Quartos7135m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_71_35m2_pavimento_tipo.png';
import marinePlanPlanta2Quartos78m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_78m2_com_garden_terreo.png';
import marinePlanPlanta2Quartos78m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_78m2_pavimento_tipo.png';
import marinePlanPlanta2Quartos79m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_79m2_com_garden_terreo.png';
import marinePlanPlanta2Quartos81m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_81m2_com_garden_terreo.png';
import marinePlanPlanta2Quartos81m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_81m2_pavimento_tipo.png';
import marinePlanPlanta2Quartos85m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_2_quartos_85m2_pavimento_tipo.png';
import marinePlanPlanta3Quartos118m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_3_quartos_118m2_com_garden_terreo.png';
import marinePlanPlanta3Quartos118m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_3_quartos_118m2_pavimento_tipo.png';
import marinePlanPlanta3Quartos126m2ComGardenTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_3_quartos_126m2_com_garden_terreo.png';
import marinePlanPlanta3Quartos129m2PavimentoTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/02_Plantas_das_Unidades/planta_3_quartos_129m2_pavimento_tipo.png';
import marinePlanImplantacaoGeralELegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/implantacao_geral_e_legendas.png';
import marinePlanStudio3251m2PlantasELegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/studio_32_51m2_plantas_e_legendas.png';
import marinePlanStudio4066m2PlantasELegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/studio_40_66m2_plantas_e_legendas.png';
import marinePlanApartamento1Quarto44m2TerreoLegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_1_quarto_44m2_terreo_legendas.png';
import marinePlanApartamento1Quarto5254m2GardenLegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_1_quarto_52_54m2_garden_legendas.png';
import marinePlanApartamento2Quartos62m2GardenLegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_2_quartos_62m2_garden_legendas.png';
import marinePlanApartamento2Quartos7135m2Legendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_2_quartos_71_35m2_legendas.png';
import marinePlanApartamento2Quartos78m2Legendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_2_quartos_78m2_legendas.png';
import marinePlanApartamento2Quartos81m2GardenLegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_2_quartos_81m2_garden_legendas.png';
import marinePlanApartamento3Quartos118m2GardenLegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_3_quartos_118m2_garden_legendas.png';
import marinePlanApartamento3Quartos126m2GardenLegendas from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/03_Plantas_e_Implantacao/03_Paginas_Referencia_Com_Legendas/apartamento_3_quartos_126m2_garden_legendas.png';
import marineLocLocalizacaoAereaEmpreendimentosBeachClassMarineCarneiros from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/04_Localizacao/localizacao_aerea_empreendimentos_beach_class_marine_carneiros.png';
import marineLocLocalizacaoPraiaCarneirosMapaEReferencias from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/04_Localizacao/localizacao_praia_carneiros_mapa_e_referencias.png';
import marineLocPaisagemAereaMarPraiaDosCarneiros from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/05_Contexto_Praia_Carneiros/paisagem_aerea_mar_praia_dos_carneiros.png';
import marineLocPraiaDosCarneirosIgrejaEMar from './assets/Empreendimentos/Pernambuco/Beach_Class_Marine_Organizado/05_Contexto_Praia_Carneiros/praia_dos_carneiros_igreja_e_mar.png';
import manguinhosCover from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/01_Capa/capa_beach_class_manguinhos.png';
import manguinhosPhotoVisaoAereaGeralCasasEBeachClub from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/visao_aerea_geral_casas_e_beach_club.png';
import manguinhosPhotoCondominioVistaGeralBlocosEPiscinas from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/condominio_vista_geral_blocos_e_piscinas.png';
import manguinhosPhotoBeachClubPiscinaBeiraMar from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/beach_club_piscina_beira_mar.png';
import manguinhosPhotoBeachClubSalao from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/beach_club_salao.png';
import manguinhosPhotoBeachClubTerraco from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/beach_club_terraco.png';
import manguinhosPhotoAreaLazerPiscinasPanoramica from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_piscinas_panoramica.png';
import manguinhosPhotoAreaLazerPiscinaKids from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_piscina_kids.png';
import manguinhosPhotoAreaLazerBarDaPiscina from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_bar_da_piscina.png';
import manguinhosPhotoAreaLazerEstarPiscina from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_estar_piscina.png';
import manguinhosPhotoAreaLazerTerracoDeJogos from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_terraco_de_jogos.png';
import manguinhosPhotoAreaLazerQuadraPoliesportivaEMinicampo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_quadra_poliesportiva_e_minicampo.png';
import manguinhosPhotoAreaLazerPlaygroundEQuadrasDeAreia from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_playground_e_quadras_de_areia.png';
import manguinhosPhotoAreaLazerEspacoGourmetExterno from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_espaco_gourmet_externo.png';
import manguinhosPhotoAreaLazerAcademia from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_academia.png';
import manguinhosPhotoAreaLazerSpaPiscinaAquecida from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/area_lazer_spa_piscina_aquecida.png';
import manguinhosPhotoCasasCaminhoParaPraia from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/casas_caminho_para_praia.png';
import manguinhosPhotoCasasFachadaJardimEPiscinaPrivativa from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/casas_fachada_jardim_e_piscina_privativa.png';
import manguinhosPhotoCasasTerracoComPiscinaPrivativa from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/casas_terraco_com_piscina_privativa.png';
import manguinhosPhotoCasasSalaDeEstar from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/casas_sala_de_estar.png';
import manguinhosPhotoCasasSuiteMaster from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/casas_suite_master.png';
import manguinhosPhotoCasasQuartoSuite from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/casas_quarto_suite.png';
import manguinhosPhotoApartamento1QuartoSalaCozinhaIntegrada from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_sala_cozinha_integrada.png';
import manguinhosPhotoApartamento1QuartoSalaEVaranda from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_sala_e_varanda.png';
import manguinhosPhotoApartamento1QuartoSuite from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_1_quarto_suite.png';
import manguinhosPhotoApartamento2QuartosGardenPiscinaPrivativa from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_garden_piscina_privativa.png';
import manguinhosPhotoApartamento2QuartosVaranda from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_varanda.png';
import manguinhosPhotoApartamento2QuartosSalaCozinhaIntegrada from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_sala_cozinha_integrada.png';
import manguinhosPhotoApartamento2QuartosSuite from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_suite.png';
import manguinhosPhotoApartamento2Quartos67m2SalaEVaranda from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_67m2_sala_e_varanda.png';
import manguinhosPhotoApartamento2Quartos67m2SalaCozinha from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_67m2_sala_cozinha.png';
import manguinhosPhotoApartamento2Quartos67m2Suite from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_2_quartos_67m2_suite.png';
import manguinhosPhotoApartamento3QuartosGardenPiscinaPrivativa from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_garden_piscina_privativa.png';
import manguinhosPhotoApartamento3QuartosSalaCozinhaIntegrada from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_sala_cozinha_integrada.png';
import manguinhosPhotoApartamento3QuartosVarandaGourmet from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_varanda_gourmet.png';
import manguinhosPhotoApartamento3QuartosSuiteMaster from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_suite_master.png';
import manguinhosPhotoApartamento3QuartosSuite from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/02_Imagens_Empreendimento/apartamento_3_quartos_suite.png';
import manguinhosPlanImplantacaoGeralBlocosCasasBeachClub from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/implantacao_geral_blocos_casas_beach_club.png';
import manguinhosPlanImplantacao12Casas from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/implantacao_12_casas.png';
import manguinhosPlanPlantaBeachClub from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_beach_club.png';
import manguinhosPlanPlantaBlocoSocialBarPiscinaJogos from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_bloco_social_bar_piscina_jogos.png';
import manguinhosPlanPlantaBlocoSocialAcademiaSpa from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_bloco_social_academia_spa.png';
import manguinhosPlanPlantaBlocoServicos from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_bloco_servicos.png';
import manguinhosPlanPlantaBlocosACEGITerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_blocos_a_c_e_g_i_terreo.png';
import manguinhosPlanPlantaBlocosACEGITipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_blocos_a_c_e_g_i_tipo.png';
import manguinhosPlanPlantaBlocoBTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_bloco_b_terreo.png';
import manguinhosPlanPlantaBlocoBTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_bloco_b_tipo.png';
import manguinhosPlanPlantaBlocosDFHJTerreo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_blocos_d_f_h_j_terreo.png';
import manguinhosPlanPlantaBlocosDFHJTipo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_blocos_d_f_h_j_tipo.png';
import manguinhosPlanPlantaCasa5SuitesTerreoAmbientada from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_casa_5_suites_terreo_ambientada.png';
import manguinhosPlanPlantaCasa5SuitesTerreoTecnica from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_casa_5_suites_terreo_tecnica.png';
import manguinhosPlanPlantaCasa5SuitesPrimeiroPavimentoAmbientada from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_casa_5_suites_primeiro_pavimento_ambientada.png';
import manguinhosPlanPlantaCasa5SuitesPrimeiroPavimentoTecnica from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_casa_5_suites_primeiro_pavimento_tecnica.png';
import manguinhosPlanPlantaApartamento1QuartoComparativoMetragens from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_1_quarto_comparativo_metragens.png';
import manguinhosPlanPlantaApartamento1QuartoTipo4445m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_1_quarto_tipo_44_45m2.png';
import manguinhosPlanPlantaApartamento1QuartoGarden4445m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_1_quarto_garden_44_45m2.png';
import manguinhosPlanPlantaApartamento2Quartos6263m2Comparativo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_2_quartos_62_63m2_comparativo.png';
import manguinhosPlanPlantaApartamento2QuartosTipo6263m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_2_quartos_tipo_62_63m2.png';
import manguinhosPlanPlantaApartamento2QuartosGarden6263m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_2_quartos_garden_62_63m2.png';
import manguinhosPlanPlantaApartamento2Quartos67m2Comparativo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_2_quartos_67m2_comparativo.png';
import manguinhosPlanPlantaApartamento2QuartosTipo67m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_2_quartos_tipo_67m2.png';
import manguinhosPlanPlantaApartamento2QuartosGarden67m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_2_quartos_garden_67m2.png';
import manguinhosPlanPlantaApartamento3Quartos109110m2Comparativo from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_3_quartos_109_110m2_comparativo.png';
import manguinhosPlanPlantaApartamento3QuartosTipo109110m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_3_quartos_tipo_109_110m2.png';
import manguinhosPlanPlantaApartamento3QuartosGarden109110m2 from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/03_Plantas_e_Implantacao/planta_apartamento_3_quartos_garden_109_110m2.png';
import manguinhosLocMapaLocalizacaoBeachClassManguinhos from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/04_Localizacao_e_Entorno/mapa_localizacao_beach_class_manguinhos.png';
import manguinhosLocPraiaDosCarneirosVistaAerea from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/04_Localizacao_e_Entorno/praia_dos_carneiros_vista_aerea.png';
import manguinhosLocPaisagemMarPraiaDosCarneiros from './assets/Empreendimentos/Pernambuco/Beach_Class_Manguinhos_Organizado/04_Localizacao_e_Entorno/paisagem_mar_praia_dos_carneiros.png';
import cumbucoCover from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/01_Capa/capa_beach_class_cumbuco_vista_aerea_frente_mar.png';
import cumbucoAerialContext from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/vista_aerea_implantacao_e_praia.png';
import cumbucoSeaAerial from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/vista_aerea_frente_mar.png';
import cumbucoPool from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/piscina_externa_palmeiras.png';
import cumbucoEntrance from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/portaria_principal.png';
import cumbucoFacade from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/fachada_blocos_residenciais.png';
import cumbucoReceptionExterior from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/recepcao_entrada_externa.png';
import cumbucoReceptionInterior from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/recepcao_interna.png';
import cumbucoPoolsAerial from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/piscinas_frente_mar_vista_superior.png';
import cumbucoRestaurantExterior from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/restaurante_externo_proximo_piscina.png';
import cumbucoRestaurantTables from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/restaurante_area_de_mesas.png';
import cumbucoSportsCourts from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/quadras_esportivas.png';
import cumbucoGym from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/academia.png';
import cumbucoSpa from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/spa.png';
import cumbucoPlayroom from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/brinquedoteca.png';
import cumbucoPlayground from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/playground.png';
import cumbucoGames from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/espaco_jogos.png';
import cumbucoCentralSquare from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/praca_central.png';
import cumbucoTwoBedroomGarden from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/apartamento_2_quartos_terraco_garden.png';
import cumbucoTwoBedroomLiving from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/apartamento_2_quartos_sala_cozinha.png';
import cumbucoOneBedroomGarden from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/apartamento_quarto_sala_garden.png';
import cumbucoStudioGarden from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/apartamento_studio_garden.png';
import cumbucoStudioInterior from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/apartamento_studio_interior.png';
import cumbucoNauticalStorage from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/02_Imagens_Empreendimento/guarderia_esportes_nauticos.png';
import cumbucoSitePlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/implantacao_geral_dez_blocos.png';
import cumbucoReceptionPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_bloco_recepcao.png';
import cumbucoRestaurantPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_bloco_restaurante.png';
import cumbucoLeisurePlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_bloco_lazer.png';
import cumbucoGroundPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_pavimento_terreo_garden.png';
import cumbucoTypicalFloorPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_pavimento_1_2_3_andares.png';
import cumbucoTwoBedroomGardenPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_apto_2_quartos_83m2_terreo_61m2_mais_22m2_garden.png';
import cumbucoTwoBedroomPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_apto_2_quartos_61m2_andar_tipo.png';
import cumbucoOneBedroomGardenPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_apto_quarto_sala_61m2_terreo_40m2_mais_21m2_garden.png';
import cumbucoOneBedroomPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_apto_quarto_sala_40m2_andar_tipo.png';
import cumbucoStudioGardenPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_apto_studio_42m2_terreo_30m2_mais_12m2_garden.png';
import cumbucoStudioPlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_apto_studio_30m2_andar_tipo.png';
import cumbucoNauticalStoragePlan from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/03_Plantas_e_Implantacao/planta_bloco_guarderia.png';
import cumbucoBeachSunset from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/04_Contexto_Praia_Cumbuco/praia_cumbuco_ao_entardecer.png';
import cumbucoKitesurfSea from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/04_Contexto_Praia_Cumbuco/kitesurf_no_mar.png';
import cumbucoKitesurfGroup from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/04_Contexto_Praia_Cumbuco/kitesurf_multiplos_velejadores.png';
import cumbucoKitesurfSailing from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/04_Contexto_Praia_Cumbuco/kitesurf_velejo.png';
import cumbucoBeachPalms from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/04_Contexto_Praia_Cumbuco/coqueiros_praia.png';
import cumbucoLocationMap from './assets/Empreendimentos/Ceará/Beach_Class_Cumbuco/05_Localizacao/mapa_localizacao_beach_class_cumbuco.png';
import conceptJoaoPessoaCover from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/01_Capa/foto_capa_fachada_concept_joao_pessoa.png';
import conceptJoaoPessoaStreetFacade from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/01_Fachadas_e_Acessos/fachada_torre_completa_vista_da_rua.png';
import conceptJoaoPessoaBalconies from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/01_Fachadas_e_Acessos/fachada_detalhe_varandas_e_vista_da_cidade.png';
import conceptJoaoPessoaEntrance from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/01_Fachadas_e_Acessos/fachada_acesso_principal_e_loja_terreo.png';
import conceptJoaoPessoaUpperFloors from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/01_Fachadas_e_Acessos/fachada_pavimentos_altos_terracos.png';
import conceptJoaoPessoaTowerCutout from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/01_Fachadas_e_Acessos/fachada_torre_recortada_fundo_transparente.png';
import conceptJoaoPessoaPoolPanorama from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/piscina_rooftop_vista_panoramica.png';
import conceptJoaoPessoaPoolGourmet from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/piscina_rooftop_com_area_gourmet.png';
import conceptJoaoPessoaSeaTerrace from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/terraco_gourmet_vista_para_o_mar.png';
import conceptJoaoPessoaGourmetPanorama from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/lounge_gourmet_vista_panoramica.png';
import conceptJoaoPessoaGourmetIndoor from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/lounge_gourmet_interno.png';
import conceptJoaoPessoaFitness from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/academia_equipada.png';
import conceptJoaoPessoaConvenienceLaundry from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/lounge_conveniencia_e_lavanderia.png';
import conceptJoaoPessoaReception from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/hall_social_recepcao.png';
import conceptJoaoPessoaElevatorHall from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/02_Lazer_e_Areas_Comuns/hall_de_elevadores_pavimento.png';
import conceptJoaoPessoaLiving39 from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/03_Apartamentos_Decorados/apartamento_decorado_suite_e_living_39m2.png';
import conceptJoaoPessoaLiving35 from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/03_Apartamentos_Decorados/apartamento_decorado_suite_e_living_35m2.png';
import conceptJoaoPessoaStudio24 from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/03_Apartamentos_Decorados/apartamento_decorado_studio_24m2.png';
import conceptJoaoPessoaStudio21 from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/03_Apartamentos_Decorados/apartamento_decorado_studio_21m2.png';
import conceptJoaoPessoaHomeOfficeLiving from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/03_Apartamentos_Decorados/apartamento_decorado_suite_e_home_office_49m2_sala.png';
import conceptJoaoPessoaHomeOfficeBedroom from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/02_Imagens_Empreendimento/03_Apartamentos_Decorados/apartamento_decorado_suite_e_home_office_49m2_quarto.png';
import conceptJoaoPessoaRooftopPlan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_rooftop_piscina_terracos_e_lounges.png';
import conceptJoaoPessoaMezzaninePlan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_mezanino_academia_coworking_e_lavanderia.png';
import conceptJoaoPessoaGroundPlan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_terreo_hall_loja_e_estacionamentos.png';
import conceptJoaoPessoaTypicalFloorPlan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_pavimento_tipo_10_unidades.png';
import conceptJoaoPessoaLiving39Plan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_suite_e_living_39m2_terminacao_04.png';
import conceptJoaoPessoaLiving35Plan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_suite_e_living_35m2_terminacao_01.png';
import conceptJoaoPessoaStudio24Plan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_studio_24m2_terminacoes_02_03_06.png';
import conceptJoaoPessoaStudio21Plan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_studio_21m2_terminacoes_08_09.png';
import conceptJoaoPessoaHomeOfficePlan from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/03_Plantas/planta_suite_e_home_office_49m2_terminacao_07.png';
import conceptJoaoPessoaLocation from './assets/Empreendimentos/Paraíba/Concept_Joao_Pessoa_organizado/04_Localizacao/vista_aerea_empreendimento_bairro_miramar.png';
import conceptJardinsCover from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/01_Capa/capa_principal_fachada_e_piscina.png';
import conceptJardinsPoolFacade from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/01_Fachadas/fachada_com_piscina_e_areas_verdes.png';
import conceptJardinsVerticalFacade from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/01_Fachadas/fachada_torre_perspectiva_vertical.png';
import conceptJardinsFrontFacade from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/01_Fachadas/fachada_torre_vista_frontal.png';
import conceptJardinsShops from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/01_Fachadas/fachada_lojas_comerciais_terreo.png';
import conceptJardinsKidsPool from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/piscina_infantil.png';
import conceptJardinsPartyRoom from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/salao_de_festas.png';
import conceptJardinsGourmet from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/espaco_gourmet.png';
import conceptJardinsSpa from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/spa.png';
import conceptJardinsSportsBar from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/sports_bar.png';
import conceptJardinsKidsSpace from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/espaco_kids.png';
import conceptJardinsFitnessArea from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/academia_area_de_treino.png';
import conceptJardinsFitnessEquipment from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/academia_equipamentos.png';
import conceptJardinsMinimarket from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/02_Areas_de_Lazer/minimarket.png';
import conceptJardinsTwoBedroomLiving from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/apartamento_68m2_sala.png';
import conceptJardinsTwoBedroomRoom from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/apartamento_68m2_quarto.png';
import conceptJardinsTwoBedroomSuite from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/apartamento_68m2_suite.png';
import conceptJardinsOneBedroomLiving from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/apartamento_39m2_sala.png';
import conceptJardinsOneBedroomBalcony from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/apartamento_39m2_varanda.png';
import conceptJardinsOneBedroomSuite from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/apartamento_39m2_suite.png';
import conceptJardinsStudio from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/studio_31m2_ambiente.png';
import conceptJardinsStudioBalcony from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/03_Apartamentos/studio_31m2_varanda.png';
import conceptJardinsHall from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/04_Servicos_e_Areas_Comuns/hall_de_entrada.png';
import conceptJardinsBicycleRack from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/04_Servicos_e_Areas_Comuns/bicicletario.png';
import conceptJardinsPetPlace from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/04_Servicos_e_Areas_Comuns/pet_place.png';
import conceptJardinsLaundry from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/04_Servicos_e_Areas_Comuns/lavanderia_compartilhada.png';
import conceptJardinsDelivery from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/04_Servicos_e_Areas_Comuns/espaco_delivery_armarios.png';
import conceptJardinsCarWash from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/02_Imagens_Empreendimento/04_Servicos_e_Areas_Comuns/car_wash_bike_station.png';
import conceptJardinsTwoBedroomPlan from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_apartamento_68m2_2_quartos.png';
import conceptJardinsOneBedroomPlan from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_apartamento_39m2_1_quarto.png';
import conceptJardinsStudioPlan from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_studio_31m2.png';
import conceptJardinsSitePlan from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/02_Implantacao_e_Pavimentos/implantacao_geral_condominio.png';
import conceptJardinsLeisurePlan from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/02_Implantacao_e_Pavimentos/pavimento_de_lazer_e_legenda_visual.png';
import conceptJardinsTypicalFloorPlan from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/02_Implantacao_e_Pavimentos/planta_pavimento_tipo.png';
import conceptJardinsGroundPlan from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/02_Implantacao_e_Pavimentos/planta_pavimento_terreo.png';
import conceptJardinsSitePlanLegends from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pagina_10_implantacao_geral.png';
import conceptJardinsLeisurePlanLegends from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pagina_11_lazer.png';
import conceptJardinsTypicalFloorPlanLegends from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pagina_23_pavimento_tipo.png';
import conceptJardinsTwoBedroomPlanLegends from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pagina_24_apto_68m2.png';
import conceptJardinsOneBedroomPlanLegends from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pagina_28_apto_39m2.png';
import conceptJardinsStudioPlanLegends from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pagina_32_studio_31m2.png';
import conceptJardinsGroundPlanLegends from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/03_Plantas_e_Implantacao/03_Referencias_com_Legendas/referencia_pagina_35_pavimento_terreo.png';
import conceptJardinsBuildingLocation from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/04_Localizacao_e_Entorno/vista_aerea_localizacao_predio_no_bairro.png';
import conceptJardinsNeighborhoodLocation from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/04_Localizacao_e_Entorno/vista_aerea_bairro_jardins_e_parque.png';
import conceptJardinsLocationMap from './assets/Empreendimentos/Sergipe/Concept_Jardins_Organizado/04_Localizacao_e_Entorno/mapa_e_servicos_proximos.png';
import casaJardinsCover from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/01_Capa/capa_casa_jardins_fachada_duas_torres.png';
import casaJardinsNightFacade from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/fachada_duas_torres_perspectiva_noturna.png';
import casaJardinsDayFacade from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/fachada_perspectiva_diurna_torres.png';
import casaJardinsParkFacade from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/detalhe_fachada_vista_parque.png';
import casaJardinsEntrance from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/acesso_pedestres_portaria_jardins.png';
import casaJardinsHall from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/hall_social_torre_casa_norte.png';
import casaJardinsPools from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/piscinas_deck_area_lazer.png';
import casaJardinsGrill from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/terraco_grill_espaco_gourmet.png';
import casaJardinsFamilyClub from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/family_club_hidromassagem_e_gourmet.png';
import casaJardinsPartyRoom from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/salao_de_festas.png';
import casaJardinsFitness from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/academia_fitness.png';
import casaJardinsCrossfit from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/area_crossfit_ao_ar_livre.png';
import casaJardinsPlayroom from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/atelie_kids_brinquedoteca.png';
import casaJardinsPlayground from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/playground_area_infantil.png';
import casaJardinsPetPlace from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/pet_place_area_pet.png';
import casaJardinsNorthGarden from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/apartamento_garden_casa_norte_terraco_hidro.png';
import casaJardinsSouthGarden from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/apartamento_garden_casa_sul_terraco_hidro.png';
import casaJardinsNorth124Balcony from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_norte_124m2_varanda_gourmet.png';
import casaJardinsNorth124Living from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_norte_124m2_sala_e_jantar.png';
import casaJardinsNorth124OptionalLiving from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_norte_124m2_sala_opcional.png';
import casaJardinsNorth101Living from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_norte_101m2_sala_e_jantar.png';
import casaJardinsNorth101OptionalLiving from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_norte_101m2_sala_opcional.png';
import casaJardinsSouth111Living from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_sul_111m2_sala_e_jantar.png';
import casaJardinsSouth111Balcony from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_sul_111m2_varanda_gourmet.png';
import casaJardinsSouth111KidsSuite from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_sul_111m2_suite_1_infantil.png';
import casaJardinsSouth111CoupleSuite from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_sul_111m2_suite_2_casal.png';
import casaJardinsSouth111ThirdSuite from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_sul_111m2_suite_3.png';
import casaJardinsSouth111OptionalLiving1 from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_sul_111m2_sala_opcional_1.png';
import casaJardinsSouth111OptionalLiving2 from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/casa_sul_111m2_sala_opcional_2.png';
import casaJardinsPetWash from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/pet_wash_area_lavagem_pets.png';
import casaJardinsBikeWash from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/bike_wash_area_lavagem_bicicletas.png';
import casaJardinsBikeStation from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/bike_station_apoio_bicicletas.png';
import casaJardinsKidsGarage from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/02_Imagens_Empreendimento/garagem_kids_espaco_infantil.png';
import casaJardinsGroundPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Implantacao_e_Areas_Comuns/implantacao_pavimento_terreo_e_acessos.png';
import casaJardinsLeisurePlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Implantacao_e_Areas_Comuns/implantacao_pavimento_lazer_e_legenda.png';
import casaJardinsSitePlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Implantacao_e_Areas_Comuns/implantacao_posicionamento_torres_norte_sul.png';
import casaJardinsNorthTypicalPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Norte/casa_norte_torre_a_planta_pavimento_tipo.png';
import casaJardinsNorthGardenPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Norte/casa_norte_garden_125m2_mais_129m2_terraco.png';
import casaJardinsNorth124StandardPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Norte/casa_norte_124m2_planta_padrao.png';
import casaJardinsNorth124OptionalPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Norte/casa_norte_124m2_planta_opcional.png';
import casaJardinsNorth101StandardPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Norte/casa_norte_101m2_planta_padrao.png';
import casaJardinsNorth101OptionalPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Norte/casa_norte_101m2_planta_opcional.png';
import casaJardinsSouthTypicalPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Sul/casa_sul_torre_b_planta_pavimento_tipo.png';
import casaJardinsSouthGardenPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Sul/casa_sul_garden_114m2_mais_102m2_terraco.png';
import casaJardinsSouth111StandardPlan from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Sul/casa_sul_111m2_planta_padrao.png';
import casaJardinsSouth111OptionalPlan1 from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Sul/casa_sul_111m2_planta_opcional_1.png';
import casaJardinsSouth111OptionalPlan2 from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/03_Plantas/Apartamentos_Casa_Sul/casa_sul_111m2_planta_opcional_2.png';
import casaJardinsParkLocation from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/04_Localizacao/vista_aerea_empreendimento_e_parque_sementeira.png';
import casaJardinsNeighborhoodLocation from './assets/Empreendimentos/Sergipe/Casa_Jardins_Organizado/04_Localizacao/vista_aerea_bairro_jardins_aracaju.png';
import casaBorisCover from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/01_Capa/capa_principal_torres_bertrand_e_arisa.png';
import casaBorisTowersFront from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/fachadas_torres_bertrand_arisa_angulo_frontal.png';
import casaBorisTowersBase from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/fachadas_torres_e_embasamento.png';
import casaBorisCurvedBalconies from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/fachada_varandas_curvas_vista_cidade.png';
import casaBorisEntrance from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/entrada_principal_porte_cochere.png';
import casaBorisReception from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/recepcao_hall_envidracado.png';
import casaBorisPoolAerial from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/piscina_adulto_vista_aerea.png';
import casaBorisPoolGardens from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/piscina_adulto_borda_e_jardins.png';
import casaBorisKidsPool from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/piscina_infantil_fachadas.png';
import casaBorisPlayground from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/playground_area_infantil_externa.png';
import casaBorisPlayroom from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/brinquedoteca_espaco_infantil.png';
import casaBorisPartyRoom from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/salao_de_festas.png';
import casaBorisSpa from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/spa_hidro_relax_perspectiva.png';
import casaBorisGourmet from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/espaco_gourmet_area_de_jogos.png';
import casaBorisFitness from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/academia_equipamentos.png';
import casaBorisBertrandBalcony from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/torre_bertrand_varanda_gourmet_203_75m2.png';
import casaBorisBertrandLiving from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/torre_bertrand_sala_padrao_203_75m2.png';
import casaBorisBertrandExpandedLiving from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/torre_bertrand_sala_ampliada_203_75m2.png';
import casaBorisBertrandSuite from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/torre_bertrand_suite_master_203_75m2.png';
import casaBorisArisaExpandedLiving from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/torre_arisa_sala_ampliada_163_93m2.png';
import casaBorisArisaSuite from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/02_Imagens_Empreendimento/torre_arisa_suite_master_163_93m2.png';
import casaBorisBertrandTypicalPlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_bertrand_tipo_203_75m2_4_suites_duas_unidades.png';
import casaBorisBertrandStandardPlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_bertrand_203_75m2_4_suites_padrao.png';
import casaBorisBertrandExpandedPlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_bertrand_203_75m2_3_suites_sala_ampliada.png';
import casaBorisArisaTypicalPlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_arisa_tipo_163_93m2_4_suites_duas_unidades.png';
import casaBorisArisaStandardPlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_arisa_163_93m2_4_suites_padrao.png';
import casaBorisArisaExpandedPlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/01_Plantas_das_Unidades/planta_arisa_163_93m2_3_suites_sala_ampliada.png';
import casaBorisLeisurePlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/02_Implantacao_e_Pavimentos/implantacao_pavimento_lazer.png';
import casaBorisGroundPlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/02_Implantacao_e_Pavimentos/implantacao_pavimento_terreo.png';
import casaBorisSitePlan from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/02_Implantacao_e_Pavimentos/implantacao_torres_bertrand_e_arisa.png';
import casaBorisLeisurePlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_pavimento_lazer_com_legenda.png';
import casaBorisGroundPlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_pavimento_terreo_com_legenda.png';
import casaBorisSitePlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_implantacao_das_torres.png';
import casaBorisBertrandTypicalPlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_planta_tipo_bertrand_203_75m2.png';
import casaBorisBertrandStandardPlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_bertrand_4_suites.png';
import casaBorisBertrandExpandedPlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_bertrand_3_suites_sala_ampliada.png';
import casaBorisArisaTypicalPlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_planta_tipo_arisa_163_93m2.png';
import casaBorisArisaStandardPlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_arisa_4_suites.png';
import casaBorisArisaExpandedPlanLegends from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/03_Plantas_e_Implantacao/03_Referencias_Com_Legendas/referencia_arisa_3_suites_sala_ampliada.png';
import casaBorisLocation from './assets/Empreendimentos/Ceará/Casa_Boris_Organizado/04_Localizacao_e_Entorno/localizacao_casa_boris_meireles_vista_aerea.png';
import iracemaCover from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/01_Capa/capa_principal_fachada_torre.png';
import iracemaTowerFacade from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/01_fachada_torre_vista_frontal.png';
import iracemaBaseAccess from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/02_fachada_embasamento_e_acesso.png';
import iracemaLobby from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/03_lobby_recepcao.png';
import iracemaPool from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/04_piscina_adulto.png';
import iracemaPoolDeck from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/05_deck_piscina.png';
import iracemaPoolBar from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/06_bar_da_piscina.png';
import iracemaGym from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/07_academia_fitness.png';
import iracemaGames from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/08_espaco_de_jogos.png';
import iracemaPlayroom from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/09_brinquedoteca.png';
import iracemaTerrace from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/10_terraco_com_estar.png';
import iracemaGourmet from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/11_salao_gourmet.png';
import iracemaNightFacade from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/12_fachada_apartamentos_anoitecer.png';
import iracemaGardenTerrace from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/13_terraco_garden_mobiliado.png';
import iracemaGardenLiving from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/14_sala_de_estar_apartamento_garden.png';
import iracemaGardenBedroom from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/15_quarto_apartamento_garden.png';
import iracemaStudio from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/02_Imagens_Empreendimento/16_studio_ambiente_integrado.png';
import iracemaBasementPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/01_planta_pavimento_subsolo.png';
import iracemaGroundPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/02_planta_pavimento_terreo.png';
import iracemaLeisurePlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/03_planta_pavimento_lazer.png';
import iracemaGardenFloorPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/04_planta_pavimento_garden.png';
import iracemaTypicalFloorPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/05_planta_pavimento_tipo_studios.png';
import iracemaTwoBedroomGardenPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/06_planta_apartamento_2_quartos_garden_93_41m2.png';
import iracemaOneBedroomGardenPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/07_planta_apartamento_1_quarto_garden_86_39m2.png';
import iracemaStudioGardenPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/08_planta_apartamento_studio_garden_43_91m2.png';
import iracemaStudioPlan from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/03_Plantas_e_Implantacao/09_planta_apartamento_studio_29_16m2.png';
import iracemaSeafront from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/04_Localizacao_e_Entorno/01_praia_de_iracema_orla.png';
import iracemaSeafrontLocation from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/04_Localizacao_e_Entorno/02_praia_de_iracema_orla_e_localizacao.png';
import iracemaLocationMap from './assets/Empreendimentos/Ceará/Beach_Class_Iracema/04_Localizacao_e_Entorno/03_mapa_visual_da_localizacao.png';

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
  { src: heroBanner1, position: 'center center', sideNote: 'blue', alt: 'Torre residencial à beira-mar sobre o costão rochoso' },
  { src: heroBanner2, position: 'center center', sideNote: 'white', alt: 'Duas torres residenciais ao anoitecer com vista para o mar' },
  { src: heroBanner3, position: 'center center', sideNote: 'white', alt: 'Varandas iluminadas com a cidade ao fundo ao anoitecer' },
  { src: heroBanner4, position: 'center center', sideNote: 'white', alt: 'Varandas com vista para a cidade ao pôr do sol' },
  { src: heroBanner5, position: 'center center', sideNote: 'white', alt: 'Varandas com vista para o mar e a orla' },
  { src: heroBanner6, position: 'center center', sideNote: 'white', alt: 'Rooftop com piscina e vista para o mar ao pôr do sol' },
  { src: heroBanner7, position: 'center center', sideNote: 'white', alt: 'Empreendimento à beira-mar com orla e coqueiros' },
  { src: heroBanner8, position: 'center center', sideNote: 'white', alt: 'Torre residencial com área de lazer ao entardecer' },
  { src: heroBanner9, position: 'center center', sideNote: 'white', alt: 'Fachada com varandas e vista para a praia' },
  { src: heroBanner10, position: 'center center', sideNote: 'blue', alt: 'Torre residencial em meio à cidade com o mar ao fundo' },
];

const getImageTitle = (image) => image.titulo || image.label || 'Imagem do empreendimento';

const createDevelopment = (development) => ({
  status: null,
  developer: 'Moura Dubeux',
  city: null,
  neighborhood: null,
  locationTitle: null,
  address: null,
  mapUrl: null,
  area: null,
  profile: null,
  detail: null,
  delivery: null,
  image: null,
  description: '',
  highlights: [],
  stats: [],
  technical: [],
  amenities: [],
  security: [],
  sustainability: [],
  projectTeam: [],
  gallery: [],
  floorPlans: [],
  locationImages: [],
  ...development,
});

const AVAILABLE_STATES = [
  { uf: 'BA', name: 'Bahia', flag: bahiaFlag },
  { uf: 'AL', name: 'Alagoas', flag: alagoasFlag },
  { uf: 'PE', name: 'Pernambuco', flag: pernambucoFlag },
  { uf: 'CE', name: 'Ceará', flag: cearaFlag },
  { uf: 'RN', name: 'Rio Grande do Norte', flag: rioGrandeDoNorteFlag },
  { uf: 'SE', name: 'Sergipe', flag: sergipeFlag },
  { uf: 'PB', name: 'Paraíba', flag: paraibaFlag },
];
const ALL_STATES_OPTION = { uf: 'ALL', name: 'Todos os estados', filterName: 'Todos' };
const STATE_FILTER_OPTIONS = [ALL_STATES_OPTION, ...AVAILABLE_STATES];
const SELECTED_STATE_SESSION_KEY = 'selectedState';
const getStateOption = (uf) => STATE_FILTER_OPTIONS.find((state) => state.uf === uf) || null;
const readSelectedStateFromSession = () => {
  try {
    return getStateOption(window.sessionStorage.getItem(SELECTED_STATE_SESSION_KEY))?.uf || null;
  } catch (error) {
    return null;
  }
};
const saveSelectedStateToSession = (uf) => {
  try {
    window.sessionStorage.setItem(SELECTED_STATE_SESSION_KEY, uf);
  } catch (error) {
    // A escolha continua válida durante a montagem atual quando o armazenamento não estiver disponível.
  }
};

const additionalDevelopments = [
  createDevelopment({
    slug: 'beachclassbahia', name: 'Beach Class Bahia', image: beachClassBahiaOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Caminho das Árvores', locationTitle: 'Conectado ao Shopping da Bahia',
    address: 'Acessos pela Rua Clarival do Prado Valadares e Rua da Alfazema, Caminho das Árvores, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Clarival%20do%20Prado%20Valadares%20Salvador%20BA',
    area: '25,86 a 61,79 m²', profile: 'Studios, quarto e sala e 2 quartos', detail: '612 apartamentos',
    description: 'O Beach Class Bahia integra moradia, lazer, trabalho, conveniência, gastronomia, wellness, hospitalidade e potencial de rentabilidade em uma localização conectada ao Shopping da Bahia. O material é preliminar e está sujeito a alterações.',
    highlights: ['25,86 a 61,79 m²', 'Studios, quarto e sala e 2 quartos', '612 apartamentos', 'Deck Park com 484 vagas'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Caminho das Árvores'], ['Unidades', '612 apartamentos'], ['Garagem', '1 vaga rotativa por unidade / Deck Park com 484 vagas']],
    technical: [
      ['Área total do terreno', '5.847,47 m²'],
      ['Unidades', '612 apartamentos'],
      ['Garagem', 'Direito de uso de uma vaga rotativa para todas as unidades; Deck Park com 484 vagas'],
      ['Pavimentos', '5 garagens (G1 a G5), lazer, mezanino, 27 pavimentos Apartments, 14 pavimentos Residences, rooftop e cobertura / telhado'],
      ['Apartments', 'Studios e quarto e sala do 1º ao 27º pavimento'],
      ['Residences', '2 quartos do 28º ao 41º pavimento'],
      ['Tipologias', 'Studio de 25,86 m²; quarto e sala de 35 m²; Residence de 2 quartos de 61 m²'],
      ['Material', 'Preliminar e sujeito a alteração'],
    ],
    amenities: ['Praça interna', 'Lobbies sociais', 'E-commerce', 'Delivery', 'Espaço para operação de restaurante', 'Piscina externa com solário / deck', 'Espaço gourmet da piscina', 'Quadra de beach tennis', 'Coworking', 'Sala de reunião', 'Pet wash', 'Lavanderia compartilhada', 'Minimarket', 'Sala multiuso', 'Piscina aquecida', 'Sauna úmida', 'Hidromassagem', 'Banheira de imersão para banho de gelo', 'Sala de relaxamento', 'Academia', 'Coliving', 'Grab and Go', 'Embarque e desembarque coberto'],
    security: ['Infraestrutura para controle de acesso de pessoas', 'Infraestrutura para controle de acesso de veículos', 'Infraestrutura para sistema de câmeras em parte das áreas comuns e elevadores', 'Fechadura eletrônica na porta de acesso dos apartamentos', 'Infraestrutura seca para Wi-Fi nas áreas comuns sociais'],
    sustainability: ['Louças e metais com redução de vazão de água', 'Reaproveitamento de água do gotejamento de condensadoras dos aparelhos de ar-condicionado', 'Sensores de presença para iluminação em parte das áreas comuns', 'Referência ao IPTU Verde no material'],
    projectTeam: ['Abbud | Paisagismo', 'Ricardo Farias | Arquitetura', 'Zirpolli | Arquitetura', 'Daniel Arruda | Design da fachada'],
    gallery: [
      { src: beachClassBahiaOrganizedCover, titulo: 'Beach Class Bahia - fachada principal' },
      { src: beachClassBahiaPerspective, titulo: 'Perspectiva do Beach Class Bahia' },
      { src: beachClassBahiaFacade, titulo: 'Fachada principal do Beach Class Bahia' },
      { src: beachClassBahiaClarivalAccess, titulo: 'Acesso pela Rua Clarival do Prado Valadares' },
      { src: beachClassBahiaAlfazemaAccess, titulo: 'Acesso pela Rua da Alfazema' },
      { src: beachClassBahiaPoolArea, titulo: 'Área da piscina' },
      { src: beachClassBahiaPool, titulo: 'Piscina' },
      { src: beachClassBahiaBeachTennis, titulo: 'Quadra de beach tennis' },
      { src: beachClassBahiaAlamedaAerial, titulo: 'Alameda de acesso - vista superior' },
      { src: beachClassBahiaAlameda, titulo: 'Alameda de acesso' },
      { src: beachClassBahiaLobbyReception, titulo: 'Lobby e recepção' },
      { src: beachClassBahiaReception, titulo: 'Recepção' },
      { src: beachClassBahiaLobby, titulo: 'Lobby' },
      { src: beachClassBahiaSpa, titulo: 'Spa no rooftop' },
      { src: beachClassBahiaRooftopPool, titulo: 'Piscina aquecida no rooftop' },
      { src: beachClassBahiaGym, titulo: 'Academia no rooftop - 200 m²' },
      { src: beachClassBahiaStudio, titulo: 'Studio - 25,86 m²' },
      { src: beachClassBahiaOneBedroom, titulo: 'Quarto e sala - 35 m²' },
      { src: beachClassBahiaResidence, titulo: 'Residence - 2 quartos - 61 m²' },
    ],
    floorPlans: [
      { src: beachClassBahiaLeisurePlan, titulo: 'Implantação - pavimento de lazer' },
      { src: beachClassBahiaMezzaninePlan, titulo: 'Planta - mezanino - 7º pavimento' },
      { src: beachClassBahiaRooftopPlan, titulo: 'Planta - rooftop wellness - 42º andar' },
      { src: beachClassBahiaApartmentsPlan, titulo: 'Pavimento Apartments - 1º ao 27º andar' },
      { src: beachClassBahiaStudioPlan, titulo: 'Planta - Studio - 25,86 m²' },
      { src: beachClassBahiaOneBedroomPlan, titulo: 'Planta - Quarto e sala - 35 m²' },
      { src: beachClassBahiaResidencesPlan, titulo: 'Pavimento Residences - 28º ao 40º andar' },
      { src: beachClassBahiaTwoBedroomPlanColumns, titulo: 'Planta - 2 quartos - 61 m² - colunas 02, 04, 05, 06, 07, 08 e 09' },
      { src: beachClassBahiaTwoBedroomPlanColumnsAlt, titulo: 'Planta - 2 quartos - 61 m² - colunas 01 e 03' },
      { src: beachClassBahiaGaragePlan1, titulo: 'Planta - garagem - 1º pavimento' },
      { src: beachClassBahiaGaragePlan2, titulo: 'Planta - garagem - 2º pavimento' },
      { src: beachClassBahiaVideo1, type: 'video', poster: beachClassBahiaOrganizedCover, titulo: 'Vídeo do Beach Class Bahia' },
      { src: beachClassBahiaVideo2, type: 'video', poster: beachClassBahiaOrganizedCover, titulo: 'Beach Class Bahia - vídeo 2' },
    ],
    locationImages: [
      { src: beachClassBahiaLocation, titulo: 'Localização - Caminho das Árvores e Shopping da Bahia' },
    ],
  }),
  createDevelopment({
    slug: 'beachclassjaguaribe', name: 'Beach Class Jaguaribe', image: beachClassJaguaribeOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Jaguaribe', locationTitle: 'Em frente à praia de Jaguaribe',
    address: 'Rua Desembargador Lafayette Velloso, 80 - Jaguaribe, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Desembargador%20Lafayette%20Velloso%2080%20Jaguaribe%20Salvador%20BA',
    area: '39 a 76 m²; 97 a 110 m² com terraço', profile: '1 e 2 quartos; opções com 2 suítes', detail: 'Vista para o mar',
    description: 'O Beach Class Jaguaribe integra estilo praiano, praticidade, conforto, lazer e vida urbana em um empreendimento da linha Beach Class, de frente para o mar e em frente à Praia de Jaguaribe.',
    highlights: ['39 a 76 m²', '97 a 110 m² com terraço', '202 unidades', '10 vagas para carros elétricos'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Jaguaribe'], ['Unidades', '202 apartamentos'], ['Garagem', '194 vagas']],
    technical: [
      ['Área do terreno', '2.800,28 m²'],
      ['Torre', '1 torre com 73 m de altura'],
      ['Pavimentos', '21 pavimentos'],
      ['Unidades', '202 apartamentos'],
      ['Unidades por pavimento', '10 do 1º ao 16º; 10 no 17º; 8 no 18º; 8 do 19º ao 21º'],
      ['Tipologias', '1 quarto; 2 quartos com 1 suíte; 2 suítes; opções de 2 quartos de 97 a 110 m² com terraço'],
      ['Garagem', '194 vagas, sendo 10 para carros elétricos'],
      ['Bicicletas e elevadores', '19 vagas para bicicletas e 4 elevadores'],
      ['Registro de incorporação', 'R-1 da matrícula nº 64.267 do 7º Registro de Imóveis de Salvador-BA'],
    ],
    amenities: ['Lazer com piscina de borda infinita, piscina infantil, solarium, SPA e prainha', 'Salão de festas gourmet com copa e terraço', 'Coliving e coworking com Grab and Go', 'Fitness', 'Playground', 'Lounge, estar e gourmet externos', 'Sala de reuniões e WCs sociais / externos', 'Lobby e hall social', 'Minimarket', 'Delivery e e-commerce', 'Lavanderia', 'Guarderia para pranchas', 'Bicicletário', 'Pet Care e Pet Place', 'Vagas para carros elétricos'],
    security: ['Guarita blindada e clausura para controle de acesso de pedestres', 'Acesso de pedestres por biometria ou tag', 'Projeto de segurança', 'Fechadura eletrônica nas portas das unidades'],
    sustainability: ['Vagas para veículos elétricos e estação para carregamento de bicicleta elétrica', 'Medição de água individualizada', 'Reaproveitamento das águas pluviais e dos drenos de ar-condicionado', 'Louças e metais com dispositivos economizadores de água', 'Sistema inteligente de iluminação das áreas comuns e placas solares', 'Pavimentação permeável em parte da área de passeio'],
    projectTeam: ['GAM Arquitetos | Arquitetura', 'Takeda | Paisagismo'],
    gallery: [
      { src: beachClassJaguaribeOrganizedCover, titulo: 'Beach Class Jaguaribe - empreendimento em frente à praia' },
      { src: beachClassJaguaribeFacade, titulo: 'Fachada principal do Beach Class Jaguaribe' },
      { src: beachClassJaguaribeSeaTower, titulo: 'Torre do Beach Class Jaguaribe em frente ao mar' },
      { src: beachClassJaguaribeAccess, titulo: 'Acesso pela Rua Desembargador Lafayette Velloso' },
      { src: beachClassJaguaribeNightLeisure, titulo: 'Área de lazer - vista aérea noturna' },
      { src: beachClassJaguaribePoolAerial, titulo: 'Piscina com borda infinita - vista aérea' },
      { src: beachClassJaguaribeSeaPool, titulo: 'Piscina com borda infinita frente ao mar' },
      { src: beachClassJaguaribePoolView, titulo: 'Piscina com vista para o mar' },
      { src: beachClassJaguaribeLounge, titulo: 'Lounge externo' },
      { src: beachClassJaguaribeVideo, type: 'video', poster: beachClassJaguaribeOrganizedCover, titulo: 'Vídeo do Beach Class Jaguaribe' },
      { src: beachClassJaguaribeExternalGourmet, titulo: 'Gourmet externo' },
      { src: beachClassJaguaribePartyTerrace, titulo: 'Terraço do salão de festas' },
      { src: beachClassJaguaribePartyRoom, titulo: 'Salão de festas gourmet' },
      { src: beachClassJaguaribePlayground, titulo: 'Playground' },
      { src: beachClassJaguaribeHall, titulo: 'Hall social' },
      { src: beachClassJaguaribeColiving, titulo: 'Coliving e coworking' },
      { src: beachClassJaguaribeGrabAndGo, titulo: 'Grab and Go' },
      { src: beachClassJaguaribeFitness, titulo: 'Fitness' },
      { src: beachClassJaguaribeBoardGuard, titulo: 'Guarderia para pranchas' },
      { src: beachClassJaguaribeTwoBedroomLiving, titulo: 'Living do apartamento de 2 quartos - frente para o mar' },
      { src: beachClassJaguaribeTwoBedroomSuite, titulo: 'Suíte do apartamento de 2 quartos - frente para o mar' },
      { src: beachClassJaguaribeTwoSuitesLiving, titulo: 'Living do apartamento de 2 suítes' },
      { src: beachClassJaguaribeOneSuiteLiving, titulo: 'Living do apartamento de 1 suíte' },
      { src: beachClassJaguaribeOneSuite, titulo: 'Suíte do apartamento de 1 suíte' },
    ],
    floorPlans: [
      { src: beachClassJaguaribeGroundPlan, titulo: 'Implantação - pavimento térreo' },
      { src: beachClassJaguaribeLeisurePlan, titulo: 'Implantação - pavimento de lazer' },
      { src: beachClassJaguaribeColumnsPlan, titulo: 'Planta indicativa de colunas e tipologias - 1º ao 16º andar' },
      { src: beachClassJaguaribeTypicalFloor1, titulo: 'Pavimento tipo 1 - 1º ao 16º andar' },
      { src: beachClassJaguaribePlan74, titulo: 'Planta 74 m² - 2 quartos (1 suíte) - terminação 1' },
      { src: beachClassJaguaribePlan64, titulo: 'Planta 64 m² - 2 suítes - terminação 3' },
      { src: beachClassJaguaribePlan40, titulo: 'Planta 40 m² - 1 suíte - terminação 7' },
      { src: beachClassJaguaribePlan65, titulo: 'Planta 65 m² - 2 quartos (1 suíte) - terminação 10' },
      { src: beachClassJaguaribeTypicalFloor2, titulo: 'Pavimento tipo 2 - 17º andar' },
      { src: beachClassJaguaribeTypicalFloor3, titulo: 'Pavimento tipo 3 - 18º andar' },
      { src: beachClassJaguaribeTypicalFloor4, titulo: 'Pavimento tipo 4 - 19º ao 21º andar' },
    ],
    locationImages: [
      { src: beachClassJaguaribeLocation, titulo: 'Localização frente ao mar - Praia de Jaguaribe' },
    ],
  }),
  createDevelopment({
    slug: 'beachclassriovermelho', name: 'Beach Class Rio Vermelho', image: beachClassRioVermelhoOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Rio Vermelho', locationTitle: 'Rio Vermelho, próximo à orla',
    address: 'Av. Cardeal da Silva - Rio Vermelho, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida%20Cardeal%20da%20Silva%20Rio%20Vermelho%20Salvador%20BA',
    area: '26, 37 e 67 m²', profile: 'Studio, 1 quarto ou 2 quartos', detail: 'Rooftop com vista para o mar',
    description: 'O Beach Class Rio Vermelho integra moradia, cultura, gastronomia, música, arte, lazer, praticidade e vida urbana. O projeto fica próximo à orla e traduz a atmosfera cultural do Rio Vermelho em ambientes para viver, trabalhar e aproveitar o cotidiano.',
    highlights: ['26, 37 e 67 m²', 'Studio, 1 ou 2 quartos', 'Rooftop com vista para o mar', 'Rio Vermelho'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Rio Vermelho'], ['Tipologias', 'Studio, 1 ou 2 quartos'], ['Garagem', 'Não informado no material']],
    technical: [
      ['Tipologias', 'Studio de 26 m²; quarto e sala de 37 m²; 2 quartos de 67 m²'],
      ['Endereço indicado no material', 'Av. Cardeal da Silva - Rio Vermelho, Salvador/BA'],
      ['Outras referências de acesso', 'Rua Conselheiro Pedro Luiz, nas plantas e implantações'],
      ['Rooftop e lazer', 'Rooftop Lounge, piscina aquecida com raia, SPA com vista para o mar, hidromassagem, solário, mirante com luneta, Sky Lounge, lounge externo, gourmet externo, Espaço Confraria, Sky Fitness e sanitários'],
      ['Conveniência e serviços', 'Praça de acesso, paraciclo, App Car Point, guarita de serviço, estacionamento, Hall do Concierge, Coffee Shop Lounge + Coworking, Coffee Shop, copa, sanitários, concierge, Mini Market, Laundry OMO, E-commerce, governança, Pet Care, Espaço Delivery, Bike & Scooter Space e Lounge Garden'],
      ['Registro', 'R-1 da matrícula nº 54.998 do 1º Ofício de Registro de Imóveis de Salvador'],
    ],
    amenities: ['Rooftop Lounge', 'Piscina aquecida e SPA com vista para o mar', 'Hidromassagem', 'Solário', 'Mirante com luneta', 'Sky Lounge', 'Lounge externo', 'Gourmet externo', 'Espaço Confraria', 'Sky Fitness', 'Praça de acesso', 'Hall do Concierge', 'Coffee Shop Lounge + Coworking', 'Coffee Shop e Coworking', 'Mini Market', 'Laundry OMO', 'E-commerce', 'Governança', 'Pet Care', 'Espaço Delivery', 'Espaço Bike & Scooter', 'Lounge Garden', 'App Car Point'],
    security: ['Guarita com vidro blindado', 'Clausura para pedestre no acesso de serviço', 'Infraestrutura para circuito fechado de TV', 'Infraestrutura para controle de acesso das áreas comuns', 'Controle de acesso para a torre e rooftop', 'Fechadura eletrônica nas portas sociais'],
    sustainability: ['Infraestrutura para medidores individuais de água', 'Bacias sanitárias de volume reduzido', 'Aproveitamento de águas pluviais', 'Aproveitamento de águas de ar-condicionado', 'Sensores de presença para iluminação nas áreas comuns', 'Placas solares para iluminação de parte das áreas comuns', '2 vagas com carregador para carro elétrico', 'Bike & Scooter Share', 'Selo IPTU Verde Ouro'],
    projectTeam: ['GAM Arquitetos | Arquitetura', 'Takeda Design | Profissionais de arquitetura, paisagismo e interiores'],
    gallery: [
      { src: beachClassRioVermelhoOrganizedCover, titulo: 'Beach Class Rio Vermelho - fachada e orla' },
      { src: beachClassRioVermelhoFacade, titulo: 'Fachada do Beach Class Rio Vermelho e orla' },
      { src: beachClassRioVermelhoAccess, titulo: 'Acesso integrado à cidade' },
      { src: beachClassRioVermelhoRooftopLounge, titulo: 'Rooftop Lounge' },
      { src: beachClassRioVermelhoPoolSpa, titulo: 'Piscina aquecida e SPA com vista para o mar' },
      { src: beachClassRioVermelhoSkyLounge, titulo: 'Sky Lounge' },
      { src: beachClassRioVermelhoConfraria, titulo: 'Espaço Confraria no rooftop' },
      { src: beachClassRioVermelhoFitnessTreadmills, titulo: 'Sky Fitness - área de esteiras' },
      { src: beachClassRioVermelhoFitness, titulo: 'Sky Fitness' },
      { src: beachClassRioVermelhoConcierge, titulo: 'Hall do Concierge' },
      { src: beachClassRioVermelhoCoffeeLoungeCoworking, titulo: 'Coffee Shop Lounge + Coworking' },
      { src: beachClassRioVermelhoCoffeeCoworking, titulo: 'Coffee Shop e Coworking' },
      { src: beachClassRioVermelhoGardenLounge, titulo: 'Lounge Garden' },
      { src: beachClassRioVermelhoCarPoint, titulo: 'App Car Point' },
      { src: beachClassRioVermelhoMiniMarket, titulo: 'Mini Market' },
      { src: beachClassRioVermelhoBikeScooter, titulo: 'Espaço Bike & Scooter' },
      { src: beachClassRioVermelhoLaundry, titulo: 'Laundry OMO' },
      { src: beachClassRioVermelhoPetCare, titulo: 'Pet Care' },
      { src: beachClassRioVermelhoStudio, titulo: 'Apartamento Studio' },
      { src: beachClassRioVermelhoOneBedroomLiving, titulo: 'Apartamento quarto e sala - living' },
      { src: beachClassRioVermelhoOneBedroom, titulo: 'Apartamento quarto e sala - quarto' },
      { src: beachClassRioVermelhoTwoBedroomLiving, titulo: 'Apartamento 2 quartos - sala e varanda' },
      { src: beachClassRioVermelhoTwoBedroom, titulo: 'Apartamento 2 quartos - quarto' },
    ],
    floorPlans: [
      { src: beachClassRioVermelhoGroundAccessPlan, titulo: 'Implantação térreo - acessos e estacionamento' },
      { src: beachClassRioVermelhoGroundAmenitiesPlan, titulo: 'Implantação térreo - áreas comuns e serviços' },
      { src: beachClassRioVermelhoRooftopPlan, titulo: 'Implantação do rooftop' },
      { src: beachClassRioVermelhoStudioPlan, titulo: 'Planta Studio - 26 m²' },
      { src: beachClassRioVermelhoOneBedroomPlan, titulo: 'Planta quarto e sala - 37 m²' },
      { src: beachClassRioVermelhoTwoBedroomPlan, titulo: 'Planta 2 quartos - 67 m²' },
      { src: beachClassRioVermelhoTypicalFloorPlan, titulo: 'Pavimento tipo' },
      { src: beachClassRioVermelhoTypicalImplementationPlan, titulo: 'Implantação do pavimento tipo' },
    ],
    locationImages: [
      { src: beachClassRioVermelhoLocation, titulo: 'Rio Vermelho - orla e bairro' },
      { src: beachClassRioVermelhoLocationMap, titulo: 'Mapa de localização - Rio Vermelho' },
    ],
  }),
  createDevelopment({
    slug: 'cyano', name: 'Cyano', image: cyanoOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Rio Vermelho', locationTitle: 'Frente ao mar, no Rio Vermelho',
    address: 'Rua da Fonte do Boi, Rio Vermelho, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20da%20Fonte%20do%20Boi%20Rio%20Vermelho%20Salvador%20BA',
    area: '133 a 204 m²', profile: '3 ou 4 suítes', detail: 'Opções garden',
    description: 'O Cyano Salvador Luxury Residence é um empreendimento residencial de luxo frente ao mar, no Rio Vermelho. O projeto reúne três torres, apartamentos de 3 ou 4 suítes, opções garden e uma proposta de lazer que integra vista, bem-estar e sofisticação ao cotidiano.',
    highlights: ['133 a 204 m²', '3 ou 4 suítes', 'Opções garden', '3 torres frente ao mar'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Rio Vermelho'], ['Unidades', '68 apartamentos'], ['Torres', 'Oceano, Atlântico e Mar'], ['Garagem', '186 vagas']],
    technical: [['Área do terreno', '8.004,75 m²'], ['Torres', 'Oceano: 24 apartamentos; Atlântico: 24; Mar: 20'], ['Unidades', '68 apartamentos'], ['Tipologias', '3 suítes de 133 m² ou 155 m² garden; 4 suítes de 182 m² ou 204 m² garden'], ['Torre Oceano', '24 apartamentos: 4 garden de 204 m² e 20 padrão de 182 m²'], ['Torre Atlântico', '24 apartamentos: 2 garden de 155 m², 2 garden de 204 m², 10 padrão de 133 m² e 10 padrão de 182 m²'], ['Torre Mar', '20 apartamentos: 4 garden de 155 m² e 16 padrão de 133 m²'], ['Garagem', '186 vagas; apartamentos de 4 suítes com 3 vagas e de 3 suítes com 2 vagas; 14 vagas condominiais / visitantes']],
    amenities: ['Lobbies sociais e de elevadores', 'Lounges externos integrados ao paisagismo', 'Pet care', 'Pet place', 'Bicicletários', 'Lobby social', 'Salão de festas - 175 m²', 'Academia - 185 m²', 'Fitness externo', 'Brinquedoteca', 'Terraço da brinquedoteca', 'Playground', 'Quadra', 'Espaço gourmet da quadra', 'Quadra poliesportiva', 'Espaço gourmet externo', 'Lobby social com vista para o mar', 'Espaço gourmet rooftop com vista para o mar', 'Espaço gourmet com piscina', 'Piscina com prainha e hidromassagem', 'Deck com vista para o mar', 'Sauna úmida', 'Lounge com champanheira', 'Acesso social de pedestres', 'Acesso de veículos', 'Guarita', 'Acesso de serviço', 'Vagas de visitantes'],
    security: ['Guarita', 'Acesso social de pedestres', 'Acesso de veículos', 'Acesso de serviço'],
    sustainability: [],
    projectTeam: ['Architects + Co | Arquitetura e ambientação', 'Takeda Design | Paisagismo'],
    gallery: [
      { src: cyanoOrganizedCover, titulo: 'Cyano - vista geral do empreendimento frente ao mar' },
      { src: cyanoGeneralView, titulo: 'Vista geral do empreendimento frente ao mar' },
      { src: cyanoCurvedFacade, titulo: 'Fachada residencial - curvas e varandas' },
      { src: cyanoTowerSet, titulo: 'Conjunto das torres do Cyano frente ao mar' },
      { src: cyanoAccess, titulo: 'Acesso pela Rua da Fonte do Boi' },
      { src: cyanoNightView, titulo: 'Vista noturna do conjunto Cyano' },
      { src: cyanoInfinityPool, titulo: 'Piscina com borda infinita e vista para o mar' },
      { src: cyanoRooftop, titulo: 'Rooftop com vista para o mar' },
      { src: cyanoSeaGourmet, titulo: 'Espaço gourmet com vista para o mar' },
      { src: cyanoAcademy, titulo: 'Academia - 185 m²' },
      { src: cyanoCourt, titulo: 'Área de lazer com quadra' },
      { src: cyanoPartyRoom, titulo: 'Salão de festas - 175 m²' },
      { src: cyanoPlayroom, titulo: 'Brinquedoteca com terraço' },
      { src: cyanoOutdoorGourmet, titulo: 'Espaço gourmet externo' },
      { src: cyanoApartment4Living, titulo: 'Apartamento 4 suítes - living integrado à varanda' },
      { src: cyanoApartment4Suite, titulo: 'Apartamento 4 suítes - suíte master' },
      { src: cyanoApartment3Living, titulo: 'Apartamento 3 suítes - living' },
      { src: cyanoApartment3Suite, titulo: 'Apartamento 3 suítes - suíte master' },
      { src: cyanoApartment3Kitchen, titulo: 'Apartamento 3 suítes - living com cozinha integrada' },
    ],
    floorPlans: [
      { src: cyanoGeneralPlan, titulo: 'Implantação geral - Torres Oceano, Atlântico e Mar' },
      { src: cyanoMarRooftopPlan, titulo: 'Planta do rooftop - Torre Mar' },
      { src: cyanoOceanLeisurePlan, titulo: 'Pavimento de lazer - Torre Oceano' },
      { src: cyanoGroundPlan, titulo: 'Pavimento térreo' },
      { src: cyanoPlan4Suites182, titulo: 'Planta 4 suítes - 182 m²' },
      { src: cyanoPlan4SuitesGarden204, titulo: 'Planta 4 suítes garden - 204 m²' },
      { src: cyanoPlan3Suites133, titulo: 'Planta 3 suítes - 133 m²' },
      { src: cyanoPlan3SuitesIntegratedKitchen, titulo: 'Opção de planta 3 suítes com cozinha integrada - 133 m²' },
      { src: cyanoPlan3SuitesGarden155, titulo: 'Planta 3 suítes garden - 155 m²' },
      { src: cyanoMarFloorPlan, titulo: 'Pavimento tipo - Torre Mar' },
      { src: cyanoAtlanticFloorPlan, titulo: 'Pavimento tipo - Torre Atlântico' },
      { src: cyanoOceanFloorPlan, titulo: 'Pavimento tipo - Torre Oceano' },
    ],
    locationImages: [
      { src: cyanoLocation, titulo: 'Localização do Cyano no Rio Vermelho - Salvador' },
    ],
  }),
  createDevelopment({
    slug: 'hortoessence', name: 'Horto Essence', image: hortoEssenceOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Horto Florestal', locationTitle: 'Acesso direto ao Parque Lucaia',
    address: 'Rua da Sapucaia, quadra 2, lote 22 - Horto Florestal, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20da%20Sapucaia%20quadra%202%20lote%2022%20Horto%20Florestal%20Salvador%20BA',
    area: '133 e 167 m²', profile: '3 ou 4 suítes', detail: '2 ou 3 vagas',
    description: 'Inspirado na leveza e na força do bambu, o Horto Essence foi pensado para criar um ambiente de tranquilidade, encontros e conexão com a natureza. O projeto tem acesso direto ao Parque Lucaia e áreas comuns integradas ao verde do Horto Florestal.',
    highlights: ['133 e 167 m²', '3 e 4 suítes', 'Acesso ao Parque Lucaia', '37 pavimentos'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Horto Florestal'], ['Tipologias', '3 ou 4 suítes'], ['Vagas', '2 ou 3 vagas']],
    technical: [
      ['Área privativa', '133 m² com 3 suítes; 167 m² com 4 suítes'],
      ['Pavimentos', '37 andares'],
      ['Vagas', '2 vagas para 133 m²; 3 vagas para 167 m²'],
      ['Endereço', 'Rua da Sapucaia, quadra 2, lote 22 - Horto Florestal'],
      ['Total de unidades', 'Não identificado no material'],
      ['Observação comercial', 'Material de treinamento para futura participação em Condomínio de Construção a preço de custo; confirme a existência de versão comercial autorizada antes da divulgação pública'],
    ],
    amenities: ['Boulevard de bambus', 'Pocket Parque', 'Quadra poliesportiva / tênis', 'Redário', 'Estar sob a copa', 'Gourmet da quadra', 'Fitness externo', 'Gourmet da piscina', 'Piscina infantil', 'Piscina com raia de 25 m', 'Garden Office / apoio do salão de festas', 'Lobby', 'Salão de festas', 'Lounge Bar', 'Brinquedoteca', 'Parque infantil', 'Espaço E-commerce', 'Espaço musculação', 'Espaço funcional', 'Espaço CrossFit', 'Sauna seca', 'Sala de massagem', 'Beauty Space', 'Horta', 'Pet Care', 'Pet Parque', 'Bicicletário', 'Acesso ao Parque Lucaia'],
    security: ['Controle de acesso nas áreas comuns', 'Acesso de veículos por TAG', 'Portaria com reconhecimento facial', 'Tomada USB e convencional nas áreas comuns', 'Automação de serviço nas áreas comuns', 'Wi-Fi nas áreas comuns'],
    sustainability: ['2 vagas para carregamento de carro elétrico', 'Placas solares para geração de energia para parte da área comum', 'Irrigação automatizada', 'Infraestrutura para medição individual de água, energia e gás', 'Iluminação LED nas áreas comuns', 'Iluminação com sensor de presença nas áreas técnicas e de serviço', 'Referência ao IPTU Verde no material'],
    projectTeam: ['Sidney Quintela | Arquitetura e projeto', 'Takeda | Arquitetura paisagística'],
    gallery: [
      { src: hortoEssenceOrganizedCover, titulo: 'Horto Essence - torre principal' },
      { src: hortoEssenceBambooBoulevard, titulo: 'Boulevard de acesso com bambus' },
      { src: hortoEssenceTower, titulo: 'Torre Horto Essence' },
      { src: hortoEssenceParkAccess, titulo: 'Acesso ao empreendimento pelo Parque Lucaia' },
      { src: hortoEssenceGatehouse, titulo: 'Guarita de acesso à Rua da Sapucaia' },
      { src: hortoEssencePoolFacade, titulo: 'Fachada integrada à área da piscina' },
      { src: hortoEssenceLobby, titulo: 'Lobby' },
      { src: hortoEssencePocketPark, titulo: 'Pocket Parque' },
      { src: hortoEssenceLoungeBar, titulo: 'Lounge Bar' },
      { src: hortoEssenceCourt, titulo: 'Quadra poliesportiva / tênis' },
      { src: hortoEssencePoolGourmet, titulo: 'Gourmet da piscina' },
      { src: hortoEssencePartyRoom, titulo: 'Salão de festas' },
      { src: hortoEssencePlayroom, titulo: 'Brinquedoteca' },
      { src: hortoEssencePlayground, titulo: 'Parque infantil' },
      { src: hortoEssenceGym, titulo: 'Espaço musculação' },
      { src: hortoEssenceCrossfit, titulo: 'Espaço CrossFit' },
      { src: hortoEssenceMassage, titulo: 'Sala de massagem' },
      { src: hortoEssenceBeauty, titulo: 'Espaço Beauty' },
      { src: hortoEssenceGarden, titulo: 'Horta' },
      { src: hortoEssencePetPark, titulo: 'Pet Parque' },
      { src: hortoEssencePetCare, titulo: 'Pet Care' },
      { src: hortoEssenceBalcony133, titulo: 'Varanda - apartamento 133 m² - 3 suítes' },
      { src: hortoEssenceLiving133, titulo: 'Living - apartamento 133 m² - 3 suítes' },
      { src: hortoEssenceSuite133, titulo: 'Suíte master - apartamento 133 m² - 3 suítes' },
      { src: hortoEssenceKitchen133, titulo: 'Cozinha - apartamento 133 m² - 3 suítes' },
      { src: hortoEssenceOffice133, titulo: 'Home office - apartamento 133 m² - 3 suítes' },
      { src: hortoEssenceBalcony167, titulo: 'Varanda - apartamento 167 m² - 4 suítes' },
      { src: hortoEssenceLiving167, titulo: 'Living - apartamento 167 m² - 4 suítes' },
      { src: hortoEssenceSuite167, titulo: 'Suíte master - apartamento 167 m² - 4 suítes' },
      { src: hortoEssenceKitchen167, titulo: 'Cozinha - apartamento 167 m² - 4 suítes' },
      { src: hortoEssenceOffice167, titulo: 'Home office - apartamento 167 m² - 4 suítes' },
      { src: hortoEssenceLivingExpanded167, titulo: 'Living ampliado - apartamento 167 m²' },
      { src: hortoEssenceSuiteExpanded167, titulo: 'Suíte master ampliada - apartamento 167 m²' },
    ],
    floorPlans: [
      { src: hortoEssencePlaygroundPlan, titulo: 'Implantação - pavimento Playground' },
      { src: hortoEssenceWellnessPlan, titulo: 'Implantação - pavimento Wellness SS3' },
      { src: hortoEssenceParkPlan, titulo: 'Implantação - acesso ao Parque Lucaia SS4' },
      { src: hortoEssencePlan133, titulo: 'Planta - 133 m² - 3 suítes' },
      { src: hortoEssencePlan133OpenKitchen, titulo: 'Planta - 133 m² - 3 suítes - cozinha aberta e home office' },
      { src: hortoEssencePlan167, titulo: 'Planta - 167 m² - 4 suítes' },
      { src: hortoEssencePlan167OpenKitchen, titulo: 'Planta - 167 m² - 4 suítes - cozinha aberta, sala e suítes ampliadas' },
    ],
    locationImages: [
      { src: hortoEssenceLocationMap, titulo: 'Mapa do entorno - Horto Florestal' },
      { src: hortoEssenceLocationAerial, titulo: 'Vista aérea do Horto Florestal' },
      { src: hortoEssenceLucaiaPark, titulo: 'Parque Lucaia' },
    ],
  }),
  createDevelopment({
    slug: 'mansaoothon', name: 'Mansão Othon', image: mansaoOthonOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Ondina', locationTitle: 'Orla de Ondina, no terreno do Bahia Othon Palace',
    address: 'Avenida Oceânica, Ondina, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida%20Oce%C3%A2nica%20Ondina%20Salvador%20BA',
    area: '572 m²', profile: '5 suítes', detail: '6 vagas por apartamento',
    description: 'O Mansão Othon representa um novo capítulo para o terreno onde existiu o Bahia Othon Palace, resgatando a relação do local com o mar e a paisagem de Salvador. O conceito destaca natureza, conforto, ventilação cruzada, vegetação nas fachadas e conexão permanente com o mar.',
    highlights: ['572 m²', '5 suítes', '32 apartamentos', '6 vagas por apartamento'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Ondina'], ['Unidades', '32 apartamentos'], ['Garagem', '6 vagas por apartamento']],
    technical: [
      ['Área total do terreno', '9.105,69 m²'],
      ['Unidades', '32 apartamentos'],
      ['Unidades por andar', '2'],
      ['Pavimentos', 'G1, G2, pavimento de lazer e 16 pavimentos tipo'],
      ['Tipologia', '572 m² com 5 suítes'],
      ['Garagem', '6 vagas vinculadas por apartamento; 30 vagas condominiais para visitantes e carga/descarga'],
    ],
    amenities: ['Lobby', 'Sala de jogos', 'Brinquedoteca com playground descoberto', 'Salão de festas com copa', 'SPA com piscina coberta', 'Hidromassagem', 'Sauna úmida', 'Salas de massagem', 'Academia com sala multiuso reservada', 'Área gourmet da piscina com churrasqueira e climatização', 'Área gourmet da quadra com churrasqueira', 'Pet place', 'Quadra de tênis', 'Quadra de beach tennis', 'Piscina adulto externa com vista para o mar', 'Piscina infantil externa com vista para o mar', 'Kids Play externo', 'Terraço de festas', 'Deck com duchas', 'Car Wash', 'Bicicletários', 'E-commerce para encomendas', 'Sala de motoristas com banheiro e copa', 'Sala de funcionários com banheiro e copa', 'Cozinha de serviço independente', 'Depósitos privativos'],
    security: ['Guarita com vidros blindados', 'Controle de acesso e clausura para pedestres', 'Infraestrutura para proteção perimetral e sistema de segurança', 'Fechadura eletrônica nas portas sociais dos apartamentos'],
    sustainability: ['Torneiras com regulador de tempo nas áreas comuns', 'Sistema de redução de vazão das torneiras', 'Bacias sanitárias dual flush 3L/6L', 'Placas solares condominiais para geração de energia renovável', 'Infraestrutura para pontos de carregamento elétrico', 'Reuso de água de gotejamento dos aparelhos de ar-condicionado das áreas comuns', 'Sensor de presença para iluminação das escadas de emergência e circulações secundárias'],
    projectTeam: ['Sidney Quintella | Arquitetura', 'Hanazaki | Paisagismo', 'Flávio Moura | Interiores'],
    gallery: [
      { src: mansaoOthonOrganizedCover, titulo: 'Mansão Othon - fachada e vista para o mar' },
      { src: mansaoOthonNightFacade, titulo: 'Fachada noturna do Mansão Othon frente ao mar' },
      { src: mansaoOthonFacade, titulo: 'Fachada do Mansão Othon pela Avenida Oceânica' },
      { src: mansaoOthonMainAccess, titulo: 'Acesso principal pela Avenida Oceânica' },
      { src: mansaoOthonLeisureAerial, titulo: 'Área de lazer com piscina - vista aérea' },
      { src: mansaoOthonAdultPool, titulo: 'Piscina adulto com vista para o mar' },
      { src: mansaoOthonCourts, titulo: 'Quadras de tênis e beach tennis' },
      { src: mansaoOthonLobby, titulo: 'Entrada do lobby' },
      { src: mansaoOthonSpa, titulo: 'SPA com piscina aquecida coberta' },
      { src: mansaoOthonGym, titulo: 'Academia' },
      { src: mansaoOthonPlayroom, titulo: 'Brinquedoteca' },
      { src: mansaoOthonKidsPlay, titulo: 'Kids Play externo' },
      { src: mansaoOthonPartyRoom, titulo: 'Salão de festas' },
      { src: mansaoOthonLiving, titulo: 'Living estar com vista para o mar' },
      { src: mansaoOthonDining, titulo: 'Living jantar com vista para o mar' },
      { src: mansaoOthonIntimateRoom, titulo: 'Sala íntima' },
      { src: mansaoOthonMasterSuite, titulo: 'Suíte master com vista para o mar' },
    ],
    floorPlans: [
      { src: mansaoOthonLeisurePlan, titulo: 'Implantação geral da área de lazer' },
      { src: mansaoOthonGaragePlan, titulo: 'Pavimento G1 - garagem e acessos' },
      { src: mansaoOthonWellnessPlan, titulo: 'Pavimento de lazer e wellness' },
      { src: mansaoOthonTypicalPlan, titulo: 'Pavimento tipo - 2 unidades por andar' },
      { src: mansaoOthonStandardPlan, titulo: 'Planta padrão - 572 m² - 5 suítes' },
      { src: mansaoOthonOptionPlan, titulo: 'Opção de planta - 4 suítes ampliadas com banheiro e closet Sr. e Sra.' },
    ],
    locationImages: [
      { src: mansaoOthonLocation, titulo: 'Orla de Ondina - Salvador' },
    ],
  }),
  createDevelopment({
    slug: 'miratmartins', name: 'Mirat Martins de Sá', image: miratMartinsOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Horto Florestal', locationTitle: 'Horto Florestal - Salvador/BA',
    address: 'Horto Florestal - Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mirat%20Martins%20Horto%20Florestal%20Salvador%20BA',
    area: '253,15 m²', profile: '4 suítes, com opções de 3 suítes', detail: '1 apartamento por andar',
    description: 'O Mirat Martins de Sá é apresentado como um empreendimento de alto padrão no Horto Florestal, voltado à exclusividade, sofisticação, bem-estar, segurança e integração com a região. O projeto combina uma unidade por andar, três pavimentos de lazer e integração com o verde do Horto Florestal.',
    highlights: ['253,15 m²', '4 suítes', '1 por andar', '3 pavimentos de lazer'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Horto Florestal'], ['Tipologias', '4 suítes / 253,15 m²'], ['Garagem', 'Não informado no material']],
    technical: [
      ['Área privativa', '253,15 m²'],
      ['Unidades por andar', '1 apartamento por andar'],
      ['Pavimentos de lazer', '3 pavimentos'],
      ['Planta padrão', '253,15 m² e 4 suítes'],
      ['Planta sugestão 2', '253,15 m², 3 suítes, sala ampliada e suíte ampliada'],
      ['Planta sugestão 3', '253,15 m², 3 suítes, suíte ampliada e W.C. Sr. e W.C. Sra.'],
      ['Segurança e serviços', 'Fechadura eletrônica, 11 vagas internas para visitantes, guarita com vidros blindados, eclusa de pedestres, CFTV, depósito privativo e gerador'],
      ['Registro', 'Não informado no material organizado'],
    ],
    amenities: ['Hall social', 'Piscina adulto', 'Piscina infantil', 'Piscina com raia de 20 m', 'Hidromassagens', 'Fitness com 130 m²', 'Minicampo', 'Brinquedoteca', 'Playground', 'Salão de festas', 'Confraria e salão de jogos', 'SPA com ofurô e hidromassagem', 'Pet Play', 'Pet Care', 'Bicicletário', 'Terraço gourmet', 'Salas de massagem', 'Terraço relax'],
    security: ['Fechadura eletrônica nos apartamentos', '11 vagas internas para visitantes', 'Áreas comuns entregues mobiliadas', 'Guarita com vidros blindados', 'Eclusa de pedestres', 'Proteção perimetral com sistema de CFTV', 'Depósito privativo', 'Gerador para o sistema de emergência e as áreas comuns'],
    sustainability: ['2 tomadas para carros elétricos', 'Bacia sanitária com sistema dual flush para economia de água', 'Bicicletário', 'Sensores de presença nas áreas comuns', 'Torneiras com temporizador nas áreas comuns', 'Esquadrias acústicas'],
    projectTeam: ['Flávio Moura | Áreas de lazer', 'Cassio Santana | Projeto'],
    gallery: [
      { src: miratMartinsOrganizedCover, titulo: 'Mirat Martins de Sá - fachada principal' },
      { src: miratFacade, titulo: 'Fachada da torre Mirat Martins de Sá' },
      { src: miratMainAccess, titulo: 'Acesso principal e paisagismo' },
      { src: miratSocialHall, titulo: 'Hall social' },
      { src: miratPools, titulo: 'Piscinas adulto e infantil' },
      { src: miratMartinsVideo, type: 'video', poster: miratMartinsOrganizedCover, titulo: 'Vídeo do Mirat Martins de Sá' },
      { src: miratPoolLane, titulo: 'Piscina com raia de 20 m e hidromassagem' },
      { src: miratFitness, titulo: 'Fitness - 130 m²' },
      { src: miratMinicampo, titulo: 'Minicampo' },
      { src: miratPlayroom, titulo: 'Brinquedoteca' },
      { src: miratPlayground, titulo: 'Playground' },
      { src: miratPartyRoom, titulo: 'Salão de festas' },
      { src: miratConfraria, titulo: 'Confraria / salão de jogos' },
      { src: miratSpa, titulo: 'SPA com ofurô e hidromassagem' },
      { src: miratPetPlay, titulo: 'Pet Play' },
      { src: miratPetCare, titulo: 'Pet Care' },
      { src: miratBicycle, titulo: 'Bicicletário' },
      { src: miratBalcony, titulo: 'Varanda gourmet' },
      { src: miratLiving, titulo: 'Living' },
      { src: miratMasterSuite, titulo: 'Suíte master' },
      { src: miratExpandedSuite, titulo: 'Suíte master ampliada' },
      { src: miratCloset, titulo: 'Closet' },
    ],
    floorPlans: [
      { src: miratLeisurePlan, titulo: 'Implantação geral do lazer' },
      { src: miratWellnessConfrariaPlan, titulo: 'Planta do espaço Wellness - confraria, terraço gourmet, massagens e SPA' },
      { src: miratWellnessFitnessPlan, titulo: 'Planta do espaço Wellness - fitness, lutas / dança e terraço funcional' },
      { src: miratStandardPlan, titulo: 'Planta padrão - 253,15 m² - 4 suítes' },
      { src: miratSuggestionTwoPlan, titulo: 'Planta sugestão 2 - 253,15 m² - 3 suítes - sala e suíte ampliadas' },
      { src: miratSuggestionThreePlan, titulo: 'Planta sugestão 3 - 253,15 m² - 3 suítes - suíte ampliada com W.C. Sr. e W.C. Sra.' },
    ],
    locationImages: [
      { src: miratAerialLocation, titulo: 'Vista aérea do Horto Florestal' },
      { src: miratSalvadorSeaView, titulo: 'Vista planejada de Salvador e do mar' },
    ],
  }),
  createDevelopment({
    slug: 'poeme-horto', name: 'Poème Horto', image: poemeHortoOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Horto Florestal', locationTitle: 'Horto Florestal',
    address: 'Rua da Sapucaia, 445 - Horto Florestal, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20da%20Sapucaia%20445%20Horto%20Florestal%20Salvador%20BA',
    area: '173,18 e 203,91 m²', profile: '4 suítes', detail: '3 ou 4 vagas',
    description: 'O Poème Horto nasce no Horto Florestal com um projeto que combina sofisticação, exclusividade, natureza e bem-estar. São apartamentos amplos de 4 suítes, com opções de planta, depósito privativo e lazer completo para toda a família.',
    highlights: ['173,18 e 203,91 m²', '4 suítes', '3 ou 4 vagas', 'Depósito privativo'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Horto Florestal'], ['Unidades', '72 apartamentos'], ['Pavimentos', '36 pavimentos'], ['Garagem', '235 vagas privativas']],
    technical: [['Área do terreno', '3.226,68 m²'], ['Blocos', '1 bloco'], ['pavimentos', '36'], ['Unidades por pavimento', '2'], ['Unidades', '72 apartamentos'], ['Tipologias', '4 suítes de 173,18 m² e 4 suítes de 203,91 m²; opções com 3 suítes'], ['Garagem', '235 vagas; 3 vagas para unidades de 173,18 m²; 3 ou 4 vagas para unidades de 203,91 m²'], ['Depósito', 'Depósito privativo de até 6 m² para todos os apartamentos']],
    amenities: ['Piscina adulto com raia de 25 m', 'Piscina infantil', 'SPA aquecido', 'Deck molhado', 'Solarium', 'Quadra de tênis / poliesportiva', 'Fitness com espaço funcional - 137 m²', 'Espaço massagem', 'Salão de festas - 173 m²', 'Playground', 'Brinquedoteca - 38 m²', 'Salão de jogos - 70 m²', 'Espaço gourmet - 63 m²', 'Lobby / hall de entrada - 86 m²', 'Sala delivery e e-commerce', 'Bicicletário', 'Depósito individual para os apartamentos', 'Pet care', 'Pet place'],
    security: ['Guarita de acesso blindada', 'Fechadura eletrônica', 'Clausura para pedestre', 'Infraestrutura para circuito interno de TV', 'Controle de acesso de carros', 'Guarita de acesso remoto na garagem 03'],
    sustainability: ['Equipamentos economizadores de água nas áreas comuns', 'Bacias sanitárias com sistema dual flush', 'Medidores individualizados de água, energia e gás', 'Aproveitamento de águas pluviais', 'Aproveitamento de água de condensação do ar-condicionado', 'Bicicletários', 'Sensores de presença nas áreas comuns', 'Infraestrutura para carregador de carro elétrico'],
    projectTeam: ['Benedito Abbud | Paisagismo', 'Bossa Arquitetura | Ambientação', 'Cássio Santana | Arquitetura'],
    gallery: [
      { src: poemeHortoOrganizedCover, titulo: 'Capa do Poème Horto' },
      { src: poemeHortoFacadeAccess, titulo: 'Fachada da torre e acesso principal' },
      { src: poemeHortoFacade, titulo: 'Fachada completa da torre' },
      { src: poemeHortoAccess, titulo: 'Acesso principal do empreendimento' },
      { src: poemeHortoAerialLeisure, titulo: 'Vista aérea das áreas de lazer' },
      { src: poemeHortoPool, titulo: 'Piscina adulto com raia de 25 m' },
      { src: poemeHortoCourt, titulo: 'Quadra de tênis e poliesportiva' },
      { src: poemeHortoLobby, titulo: 'Lobby e hall de entrada' },
      { src: poemeHortoPartyRoom, titulo: 'Salão de festas' },
      { src: poemeHortoPlayroom, titulo: 'Brinquedoteca' },
      { src: poemeHortoFitness, titulo: 'Fitness com espaço funcional' },
      { src: poemeHortoGamesGourmet, titulo: 'Salão de jogos e espaço gourmet' },
      { src: poemeHortoApartment203Expanded, titulo: 'Sala ampliada - apartamento 203,91 m²' },
      { src: poemeHortoBalcony203, titulo: 'Varanda gourmet - apartamento 203,91 m²' },
      { src: poemeHortoSuite203, titulo: 'Suíte master - apartamento 203,91 m²' },
      { src: poemeHortoApartment173Standard, titulo: 'Sala - apartamento 173,18 m², planta padrão' },
      { src: poemeHortoApartment173Expanded, titulo: 'Sala ampliada - apartamento 173,18 m²' },
      { src: poemeHortoApartment173Kitchen, titulo: 'Cozinha aberta - apartamento 173,18 m², opção de planta' },
      { src: poemeHortoSuite173, titulo: 'Suíte master - apartamento 173,18 m²' },
      { src: poemeHortoVideo, type: 'video', poster: poemeHortoOrganizedCover, titulo: 'Vídeo do Poème Horto' },
    ],
    floorPlans: [
      { src: poemeHortoGroundPlan, titulo: 'Implantação - térreo' },
      { src: poemeHortoMezzaninePlan, titulo: 'Implantação - mezanino' },
      { src: poemeHortoTypicalFloorPlan, titulo: 'Implantação - pavimento tipo' },
      { src: poemeHortoFloor173203, titulo: 'Pavimento tipo - apartamentos de 173,18 m² e 203,91 m²' },
      { src: poemeHortoPlan203Standard, titulo: 'Planta padrão - 203,91 m² - 4 suítes' },
      { src: poemeHortoPlan203Option, titulo: 'Opção de planta - 203,91 m² - 3 suítes' },
      { src: poemeHortoPlan173Standard, titulo: 'Planta padrão - 173,18 m² - 4 suítes' },
      { src: poemeHortoPlan173Option, titulo: 'Opção de planta - 173,18 m² - 3 suítes' },
    ],
    locationImages: [
      { src: poemeHortoLocationMap, titulo: 'Mapa aéreo do entorno do Poème Horto' },
      { src: poemeHortoLocationAerial, titulo: 'Vista aérea da localização' },
      { src: poemeHortoAerial, titulo: 'Vista aérea do Poème Horto' },
    ],
  }),
  createDevelopment({
    slug: 'rive', name: 'Rivê', image: riveOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Rio Vermelho', locationTitle: 'A aproximadamente 200 metros do mar',
    address: 'Avenida Juracy Magalhães Júnior, 188 - Rio Vermelho, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida%20Juracy%20Magalh%C3%A3es%20J%C3%BAnior%20188%20Rio%20Vermelho%20Salvador%20BA',
    area: '97 e 143 m²; gardens de 128 e 130 m²', profile: '3 ou 4 quartos', detail: '2 vagas por apartamento',
    description: 'O Rivê é apresentado como um empreendimento contemporâneo e sofisticado inspirado pelo Rio Vermelho e pelas vistas de Salvador, com proposta de conforto, contato com a natureza e integração com o bairro.',
    highlights: ['97 e 143 m²', '3 ou 4 quartos', 'Opções garden de 128 e 130 m²', 'A aproximadamente 200 m do mar'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Rio Vermelho'], ['Tipologias', '3 ou 4 quartos'], ['Garagem', '2 vagas por apartamento']],
    technical: [
      ['Área do terreno', '3.566,53 m²'],
      ['Torres', 'Amado: 4 quartos; Sereia e Maré: 3 quartos'],
      ['Apartamentos de 3 quartos', '97 m², 2 vagas e opções com garden'],
      ['Apartamentos de 4 quartos', '143 m² e 2 vagas'],
      ['Apartamentos garden', '128 m² e 130 m²; planta detalhada com 95 m² internos e 35 m² de garden'],
      ['Localização', 'Aproximadamente 200 metros do mar, no Rio Vermelho'],
      ['Registro de incorporação', 'R-17 da matrícula nº 15.100 do 6º Ofício de Registro de Imóveis de Salvador'],
    ],
    amenities: ['Rooftop com vista para o mar', 'Piscina adulto aquecida com borda infinita', 'Piscina infantil aquecida', 'Espaço gourmet', 'Academia de 80 m²', 'Lobby', 'Playground mirante', 'Playground junto ao salão de festas', 'Salão de festas com varanda externa', 'Sala de jogos', 'Brinquedoteca interna e externa', 'Espaço gourmet de apoio à quadra', 'Quadra esportiva', 'Fitness externo', 'Pet place', 'Bicicletários', 'Minimarket', 'E-commerce', 'Acesso de pedestres com clausura', 'Guarita / E-commerce', 'Hall de elevadores'],
    security: ['Guarita com vidro blindado e clausura para pedestres', 'Infraestrutura para proteção perimetral e sistema de segurança projetados por especialistas', 'Fechadura eletrônica nas portas sociais dos apartamentos'],
    sustainability: ['Torneiras com temporizador nas áreas comuns', 'Reuso de águas de ar-condicionado', 'Bacias sanitárias com sistema dual flush', 'IPTU Verde', 'Infraestrutura para tomada de carregamento de carro elétrico para todas as unidades', '5 bikes elétricas Moura Dubeux'],
    projectTeam: ['Sidney Quintela | Arquitetura e ambientação', 'Guilherme Takeda | Paisagismo', 'Arthur Fraga | Obra de arte exclusiva'],
    gallery: [
      { src: riveOrganizedCover, titulo: 'Rivê - fachada e localização no Rio Vermelho' },
      { src: riveContextFacade, titulo: 'Fachada do Rivê no Rio Vermelho' },
      { src: riveNightTower, titulo: 'Torre Rivê - perspectiva noturna' },
      { src: riveStreetTower, titulo: 'Torre Rivê - perspectiva da rua' },
      { src: riveMainAccess, titulo: 'Acesso principal do Rivê' },
      { src: riveSeaFacade, titulo: 'Fachada e varandas com vista para o mar' },
      { src: riveRooftopSea, titulo: 'Rooftop com vista para o mar' },
      { src: riveRooftopPanoramic, titulo: 'Rooftop panorâmico' },
      { src: riveInfinityPool, titulo: 'Piscina com borda infinita' },
      { src: riveRooftopGourmet, titulo: 'Espaço gourmet do rooftop' },
      { src: riveRooftopGym, titulo: 'Academia no rooftop' },
      { src: riveSeaGym, titulo: 'Academia com vista para o mar' },
      { src: riveLobby, titulo: 'Lobby' },
      { src: riveViewpointPlayground, titulo: 'Playground mirante' },
      { src: rivePartyPlayground, titulo: 'Playground junto ao salão de festas' },
      { src: rivePartyRoom, titulo: 'Salão de festas' },
      { src: riveGamesRoom, titulo: 'Sala de jogos' },
      { src: rivePlayroom, titulo: 'Brinquedoteca' },
      { src: riveSportsCourt, titulo: 'Quadra esportiva' },
      { src: riveApartment3Balcony, titulo: 'Varanda - apartamento de 3 quartos' },
      { src: riveApartment3Suite, titulo: 'Suíte master - apartamento de 3 quartos' },
      { src: riveApartment3Living, titulo: 'Living - apartamento de 3 quartos' },
      { src: riveGardenBalcony, titulo: 'Varanda garden - apartamento de 3 quartos' },
      { src: riveApartment4Balcony, titulo: 'Varanda - apartamento de 4 quartos' },
      { src: riveApartment4Suite, titulo: 'Suíte master - apartamento de 4 quartos' },
      { src: riveApartment4Living, titulo: 'Living - apartamento de 4 quartos' },
    ],
    floorPlans: [
      { src: riveGeneralPlan, titulo: 'Implantação geral - Torres Amado, Sereia e Maré' },
      { src: riveRooftopPlan, titulo: 'Planta do rooftop' },
      { src: riveGroundPlan, titulo: 'Implantação - térreo / G2' },
      { src: riveLeisurePlan, titulo: 'Implantação - pavimento de lazer' },
      { src: riveMareSereiaPlan, titulo: 'Pavimento tipo - Torres Maré e Sereia - 3 quartos' },
      { src: rivePlan97Standard, titulo: 'Planta padrão - 97 m² - 3 quartos' },
      { src: rivePlan97Master, titulo: 'Opção de planta - 97 m² - 2 suítes com banheiro senhor e senhora' },
      { src: rivePlan97Office, titulo: 'Opção de planta - 97 m² - 2 suítes com gabinete' },
      { src: riveGardenPlan, titulo: 'Planta garden - 130 m² - 3 quartos' },
      { src: riveAmadoPlan, titulo: 'Pavimento tipo - Torre Amado - 4 quartos' },
      { src: rivePlan143Standard, titulo: 'Planta padrão - 143 m² - 4 quartos' },
      { src: rivePlan143Master, titulo: 'Opção de planta - 143 m² - 3 suítes com lavabo e sala ampliada' },
      { src: rivePlan143Integrated, titulo: 'Opção de planta - 143 m² - 3 quartos com cozinha integrada e suíte master ampliada' },
    ],
    locationImages: [
      { src: riveAerialLocation, titulo: 'Vista aérea do Rio Vermelho' },
      { src: riveSeaLocation, titulo: 'Localização do Rivê - a 200 metros do mar' },
      { src: riveNeighborhoodMap, titulo: 'Mapa do entorno e pontos de interesse' },
    ],
  }),
  createDevelopment({
    slug: 'salvador220', name: 'Salvador 220', image: salvador220OrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Rio Vermelho', locationTitle: 'Rua Fonte do Boi, no Rio Vermelho',
    address: 'Rua Fonte do Boi, 220 - Rio Vermelho, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Fonte%20do%20Boi%20220%20Rio%20Vermelho%20Salvador%20BA',
    area: '33 a 136 m²', profile: '1 ou 2 quartos; 2 suítes', detail: '438 apartamentos / 281 vagas rotativas',
    description: 'O Salvador 220 é um empreendimento retrofit residencial frente ao mar, no Rio Vermelho. O projeto reúne uma Torre Retrofit e um Anexo Lanai, com unidades compactas, opções garden e áreas comuns voltadas à praticidade e à vista para o mar.',
    highlights: ['33 a 136 m²', '1 ou 2 quartos; 2 suítes', '438 apartamentos', 'Torre Retrofit e Anexo Lanai'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Rio Vermelho'], ['Unidades', '438 apartamentos'], ['Garagem', '281 vagas rotativas']],
    technical: [
      ['Torre Retrofit', '22 pavimentos e 418 apartamentos'],
      ['Anexo Lanai', '2 pavimentos e 20 apartamentos'],
      ['Unidades', '438 apartamentos no total'],
      ['Tipologias', '1 quarto; 1 quarto com varanda; 1 quarto com lavabo; 1 quarto garden com lavabo; 2 quartos com 1 suíte; 2 suítes com lavabo'],
      ['Área privativa', '33, 34, 37, 43, 44, 45, 47, 48, 69, 73, 74, 88, 98, 102, 106, 108, 111, 133 e 136 m²'],
      ['Garagem', '281 vagas rotativas'],
      ['Equipe', 'André Sá e Francisco Mota; Thiago Martins e Caio Bandeira; Takeda Design'],
    ],
    amenities: ['Embarque e desembarque', 'Lobby e recepção', 'Co-living com Wi-Fi', 'Jardim de contemplação externo', 'Coffee Shop com cozinha de apoio', 'Solarium', 'Deck mar', 'Piscina com borda infinita', 'Piscina infantil', 'Hidromassagem', 'Sauna', 'Salas de massagem', 'Brinquedoteca', 'Espaço gourmet', 'Academia', 'Sala funcional', 'Espaço para eventos', 'Deck Park', 'Lounge / espaço gourmet no rooftop', 'Mini market', 'Lavanderia', 'Pet care', 'Beauty room', 'Sala de reunião'],
    security: ['Guarita com vidros blindados', 'Infraestrutura para circuito interno de TV', 'Infraestrutura para portaria remota', 'Controle de acesso de veículos', 'Controle de acesso em parte dos ambientes sociais das áreas comuns', 'Fechadura eletrônica nas portas sociais dos apartamentos'],
    sustainability: [],
    projectTeam: ['André Sá e Francisco Mota | Arquitetura', 'Thiago Martins e Caio Bandeira | Arquitetura e ambientação', 'Takeda Design | Paisagismo'],
    gallery: [
      { src: salvador220OrganizedCover, titulo: 'Salvador 220 - vista geral do empreendimento frente ao mar' },
      { src: salvador220GeneralView, titulo: 'Vista geral do Salvador 220 frente ao mar' },
      { src: salvador220LobbyAccess, titulo: 'Acesso ao lobby e fachada' },
      { src: salvador220Tower, titulo: 'Torre Salvador 220' },
      { src: salvador220SeaFacade, titulo: 'Fachada do Salvador 220 frente ao mar' },
      { src: salvador220Reception, titulo: 'Recepção' },
      { src: salvador220CoLiving, titulo: 'Co-living' },
      { src: salvador220Gourmet, titulo: 'Espaço gourmet' },
      { src: salvador220Academy, titulo: 'Academia' },
      { src: salvador220AcademySeaView, titulo: 'Academia com vista para o mar' },
      { src: salvador220Spa, titulo: 'Spa com sauna e sala de massagem' },
      { src: salvador220InfinityPool, titulo: 'Piscina com borda infinita' },
      { src: salvador220PoolAerial, titulo: 'Vista aérea da piscina' },
      { src: salvador220Rooftop, titulo: 'Vista do rooftop' },
      { src: salvador220RooftopGourmet, titulo: 'Espaço gourmet rooftop' },
      { src: salvador220ApartmentOneBedroom, titulo: 'Apartamento de 1 quarto - 33 m² e 34 m²' },
      { src: salvador220ApartmentOneBedroom48, titulo: 'Apartamento de 1 quarto - 48 m²' },
      { src: salvador220ApartmentTwoSuites, titulo: 'Apartamento de 2 suítes com lavabo - 74 m²' },
      { src: salvador220SuiteTwoSuites, titulo: 'Suíte - apartamento de 2 suítes com lavabo - 74 m²' },
      { src: salvador220ApartmentTwoBedrooms, titulo: 'Apartamento de 2 quartos com 1 suíte - 73 m²' },
      { src: salvador220SuiteTwoBedrooms, titulo: 'Suíte - apartamento de 2 quartos com 1 suíte - 73 m²' },
      { src: salvador220LanaiApartment, titulo: 'Lanai - apartamento de 1 quarto - 32 m²' },
      { src: salvador220Video, type: 'video', poster: salvador220OrganizedCover, titulo: 'Vídeo do Salvador 220' },
    ],
    floorPlans: [
      { src: salvador220LobbyPlan, titulo: 'Implantação - pavimento lobby / térreo' },
      { src: salvador220LeisurePlan, titulo: 'Implantação - pavimento de lazer' },
      { src: salvador220RooftopPlan, titulo: 'Planta do rooftop - 22º pavimento' },
      { src: salvador220PlanOneBedroom, titulo: 'Planta - 1 quarto - 33 m² e 34 m²' },
      { src: salvador220PlanOneBedroom48, titulo: 'Planta - 1 quarto - 48 m²' },
      { src: salvador220PlanTwoSuites, titulo: 'Planta - 2 suítes com lavabo - 74 m²' },
      { src: salvador220PlanTwoBedrooms73, titulo: 'Planta - 2 quartos com 1 suíte - 73 m²' },
      { src: salvador220PlanTwoBedrooms69, titulo: 'Planta - 2 quartos com 1 suíte - 69 m²' },
      { src: salvador220LanaiPlan, titulo: 'Lanai - implantação com 2 pavimentos' },
      { src: salvador220FirstFloorPlan, titulo: 'Planta do 1º pavimento' },
      { src: salvador220TypicalFloor2To6, titulo: 'Pavimento tipo - 2º ao 6º andar' },
      { src: salvador220TypicalFloor7To20, titulo: 'Pavimento tipo - 7º ao 20º andar' },
      { src: salvador220TypicalFloor21, titulo: 'Pavimento tipo - 21º andar' },
      { src: salvador220RooftopCoverPlan, titulo: 'Rooftop e cobertura - 22º andar' },
    ],
    locationImages: [
      { src: salvador220Location, titulo: 'Localização do Salvador 220 no Rio Vermelho' },
    ],
  }),
  createDevelopment({
    slug: 'vivant', name: 'Vivant', image: vivantOrganizedCover,
    city: 'Salvador, BA', neighborhood: 'Caminho das Árvores', locationTitle: 'Próximo à Praça Aquarius',
    address: 'Alameda das Catabas, Caminho das Árvores, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Alameda%20das%20Catabas%20Caminho%20das%20%C3%81rvores%20Salvador%20BA',
    area: '116 m²', profile: '3 suítes', detail: '2 vagas por apartamento',
    description: 'O Vivant integra natureza e cidade no Caminho das Árvores, com proposta de morar perto do verde, da Praça Aquarius e de uma ampla estrutura de serviços e conveniências. O projeto reúne as torres Energie e Harmonie em uma rotina conectada ao minibosque e aos principais acessos de Salvador.',
    highlights: ['116 m²', '3 suítes na planta padrão', '2 unidades por andar', '2 vagas por apartamento'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Caminho das Árvores'], ['Tipologia', '3 suítes / 116 m²'], ['Garagem', '2 vagas por apartamento']],
    technical: [
      ['Torres', 'Energie e Harmonie'],
      ['Área privativa', '116 m²'],
      ['Tipologia padrão', '3 suítes'],
      ['Opções de planta', 'Home theater / office ou suíte ampliada, com 2 suítes'],
      ['Unidades por andar', '2'],
      ['Garagem', '2 vagas por apartamento'],
      ['Acessos', 'Rua Clara Nunes, Loteamento Aquarius, e Alameda das Catabas'],
      ['Registro de incorporação', 'R-4 da matrícula nº 75.110 do 6º Registro de Imóveis de Salvador-BA'],
    ],
    amenities: [
      'Lobby Energie',
      'Lobby Harmonie',
      'Salão de festas',
      'Teen Lounge',
      'Confraria',
      'Brinquedoteca',
      'Parque infantil',
      'Praça do salão de festas',
      'Estar gramado',
      'Piscina infantil',
      'Piscina com raia de 22 m',
      'Solário',
      'Hidromassagem',
      'Gourmet da piscina',
      'Espaço barbecue da quadra',
      'Quadra esportiva',
      'Platô Zen',
      'Platô Kids',
      'Platô Barbecue',
      'Platô Pet',
      'Fitness',
      'Crossfit',
      'Coworking',
      'Garden Office',
      'Pet Care',
      'Minibosque',
    ],
    security: ['Guarita blindada, clausura para pedestres e fechaduras eletrônicas nas portas sociais', 'Circuito interno de TV e infraestrutura para portaria remota', 'Acesso de veículos por TAG e controle de acesso nas áreas comuns'],
    sustainability: ['Medição individual de água e bacias sanitárias de volume reduzido', 'Aproveitamento de águas pluviais e de ar-condicionado', 'Sensores de presença e placas solares para áreas comuns', 'Elevadores com regeneração de energia e esquadrias com tratamento acústico', 'Vagas para carregamento de carro elétrico no estacionamento de visitantes', 'Selo IPTU Verde indicado no material'],
    projectTeam: ['Cardim Arquitetura Paisagística; Ricardo Cardim e Alessandra Cardim | Paisagismo', 'André Sá & Francisco Mota Arquitetos | Arquitetura', 'Estúdio RM; Rogério Menezes | Ambientação'],
    gallery: [
      { src: vivantOrganizedCover, titulo: 'Vivant - fachada e acesso pela Rua Clara Nunes' },
      { src: vivantNightTower, titulo: 'Torre Vivant - vista noturna' },
      { src: vivantClaraNunesAccess, titulo: 'Fachada e acesso pela Rua Clara Nunes' },
      { src: vivantCatabasGate, titulo: 'Portaria pela Alameda das Catabas' },
      { src: vivantMinibosque, titulo: 'Minibosque com acesso à Praça Aquarius' },
      { src: vivantPlatoZen, titulo: 'Platô Zen' },
      { src: vivantPlatoKids, titulo: 'Platô Kids' },
      { src: vivantPlatoBarbecue, titulo: 'Platô Barbecue' },
      { src: vivantPlatoPet, titulo: 'Platô Pet' },
      { src: vivantExternalLeisure, titulo: 'Área de lazer externa - vista aérea' },
      { src: vivantPoolLane, titulo: 'Piscina adulto com raia de 22 m e hidromassagem' },
      { src: vivantAdultChildrenPool, titulo: 'Piscina adulto e infantil' },
      { src: vivantPoolGourmet, titulo: 'Gourmet da piscina' },
      { src: vivantSportsCourt, titulo: 'Quadra esportiva com quiosque barbecue' },
      { src: vivantPlayground, titulo: 'Parque infantil' },
      { src: vivantLobbyEnergie, titulo: 'Lobby Energie' },
      { src: vivantPartyRoom, titulo: 'Salão de festas' },
      { src: vivantConfraria, titulo: 'Confraria' },
      { src: vivantTeenLounge, titulo: 'Teen Lounge' },
      { src: vivantPlayroom, titulo: 'Brinquedoteca' },
      { src: vivantFitness, titulo: 'Fitness' },
      { src: vivantCrossfit, titulo: 'Crossfit' },
      { src: vivantPetCare, titulo: 'Pet Care' },
      { src: vivantCoworking, titulo: 'Coworking' },
      { src: vivantBalcony, titulo: 'Varanda gourmet - vista simulada do 34º pavimento' },
      { src: vivantLiving, titulo: 'Living' },
      { src: vivantMasterSuite, titulo: 'Suíte master' },
      { src: vivantHomeTheater, titulo: 'Home theater / office - ambiente sugerido' },
      { src: vivantExpandedSuite, titulo: 'Suíte master ampliada - ambiente sugerido' },
      { src: vivantVideo, type: 'video', poster: vivantOrganizedCover, titulo: 'Vídeo do Vivant' },
    ],
    floorPlans: [
      { src: vivantCatabasPlan, titulo: 'Implantação - Pavimento Catabas' },
      { src: vivantWellnessPlan, titulo: 'Implantação - Pavimento Wellness' },
      { src: vivantClaraNunesPlan, titulo: 'Implantação - Pavimento Clara Nunes' },
      { src: vivantTypicalFloorPlan, titulo: 'Pavimento tipo implantado - Torres Energie e Harmonie' },
      { src: vivantPlanStandard, titulo: 'Planta padrão - 116 m² - 3 suítes' },
      { src: vivantPlanHome, titulo: 'Planta opção com home - 116 m² - 2 suítes' },
      { src: vivantPlanExpandedSuite, titulo: 'Planta opção com suíte ampliada - 116 m² - 2 suítes' },
    ],
    locationImages: [
      { src: vivantLocationMap, titulo: 'Mapa do entorno - Caminho das Árvores' },
      { src: vivantTancredoNeves, titulo: 'Entorno - Avenida Tancredo Neves e principais pontos' },
      { src: vivantAquariusGardens, titulo: 'Praça Aquarius - jardins' },
      { src: vivantAquariusPaths, titulo: 'Praça Aquarius - caminhos e áreas verdes' },
      { src: vivantAquariusGreenArea, titulo: 'Praça Aquarius - área verde' },
    ],
  }),
  createDevelopment({
    slug: 'jardinsdoparque', name: 'Jardins do Parque', image: jardinsDoParqueOrganizedCover,
    city: 'Maceió, AL', neighborhood: 'Cruz das Almas', locationTitle: 'Próximo ao Parque Shopping e à Praia de Cruz das Almas',
    address: 'Av. em Projeto 7216, antiga Nova Via Empreendimentos Ltda - Cruz das Almas, Maceió/AL',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parque%20Shopping%20Cruz%20das%20Almas%20Macei%C3%B3%20AL',
    area: '59,55 a 81,83 m²', profile: '2 ou 3 quartos; 1 suíte', detail: '2 torres / 240 unidades',
    description: 'O Jardins do Parque foi planejado para integrar praticidade, proximidade da praia, serviços, natureza, lazer e vida urbana em uma área de crescimento de Maceió, próxima à orla e ao Parque Shopping.',
    highlights: ['59,55 a 81,83 m²', '2 ou 3 quartos, sendo 1 suíte', '240 unidades', 'Torres Orquídeas e Hortênsias'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Cruz das Almas, Maceió'], ['Unidades', '240 apartamentos'], ['Torres', 'Orquídeas e Hortênsias'], ['Garagem', 'Não informado no material']],
    technical: [['Área do subcondomínio', '4.616,66 m²'], ['Pavimentos', 'Subsolo 02, Subsolo 01, Pilotis, 20 pavimentos tipo e Coberta / Ático'], ['Torres', 'Orquídeas e Hortênsias'], ['Unidades', '240 apartamentos'], ['Unidades por torre', '120'], ['Tipologias', '59,55 m²: 2 quartos e 1 suíte; 60,76 m²: 2 quartos e 1 suíte; 81,83 m²: 3 quartos e 1 suíte'], ['Via indicada no material', 'Av. em Projeto 7216, antiga Nova Via Empreendimentos Ltda'], ['Registro de incorporação', 'R-2 da matrícula nº 208342 do 1º Ofício de Registro de Imóveis de Maceió-AL']],
    amenities: ['Hall', 'Sports bar', 'Minimarket', 'Academia', 'Brinquedoteca', 'Salão de festas', 'Gourmet VIP com piscina', 'Gourmets 1 e 2', 'Playground', 'Espaço fitness', 'Miniquadra recreativa', 'Praça de boas-vindas', 'Piscina adulto', 'Piscina infantil', 'Prainha', 'Solarium', 'Deck', 'Spa', 'Pet place', 'Terraço do salão de festas', 'Espaço delivery', 'Acesso de pedestres / guarita', 'Acesso de veículos ao térreo', 'Acesso de veículos ao subsolo'],
    security: ['Fechadura eletrônica na porta principal dos apartamentos', 'Infraestrutura para câmeras de segurança nas áreas comuns'],
    sustainability: ['Ponto para carregamento de carro elétrico', 'Infraestrutura para Wi-Fi nas áreas comuns', 'Irrigação automatizada', 'Torneiras, chuveiros e vasos com redutores de vazão', 'Medição individualizada de água'],
    projectTeam: ['Cia de Arquitetura | Projeto arquitetônico', 'Takeda Design | Paisagismo', 'Mariano Teixeira | Projeto arquitetônico', 'Arq Multi | Ambientação'],
    gallery: [
      { src: jardinsDoParqueOrganizedCover, titulo: 'Jardins do Parque - fachada das torres' },
      { src: jardinsDoParqueFacadeTowers, titulo: 'Fachada - Torres Orquídeas e Hortênsias' },
      { src: jardinsDoParqueTowerPerspective, titulo: 'Perspectiva da torre - Jardins do Parque' },
      { src: jardinsDoParqueAerialLeisure, titulo: 'Área de lazer - vista aérea' },
      { src: jardinsDoParqueAdultPool, titulo: 'Piscina adulto com prainha e solarium' },
      { src: jardinsDoParqueChildrenPool, titulo: 'Piscina infantil' },
      { src: jardinsDoParqueVipGourmet, titulo: 'Gourmet VIP com piscina' },
      { src: jardinsDoParqueGourmets, titulo: 'Gourmets' },
      { src: jardinsDoParquePlayground, titulo: 'Playground' },
      { src: jardinsDoParqueMiniCourt, titulo: 'Miniquadra recreativa' },
      { src: jardinsDoParquePetPlace, titulo: 'Pet place' },
      { src: jardinsDoParqueHortensiasHall, titulo: 'Hall da Torre Hortênsias' },
      { src: jardinsDoParqueSportsBar, titulo: 'Sports bar' },
      { src: jardinsDoParqueAcademy, titulo: 'Academia' },
      { src: jardinsDoParquePlayroom, titulo: 'Brinquedoteca' },
      { src: jardinsDoParquePartyRoom, titulo: 'Salão de festas' },
      { src: jardinsDoParqueTerrace, titulo: 'Terraço do salão de festas' },
      { src: jardinsDoParqueMinimarket, titulo: 'Minimarket' },
      { src: jardinsDoParqueApartment81Living, titulo: 'Apartamento 81 m² - sala de estar e jantar' },
      { src: jardinsDoParqueApartment81Suite, titulo: 'Apartamento 81 m² - suíte' },
      { src: jardinsDoParqueApartment81Children, titulo: 'Apartamento 81 m² - quarto / filhos' },
      { src: jardinsDoParqueApartment81Office, titulo: 'Apartamento 81 m² - quarto / office' },
      { src: jardinsDoParqueApartment81Balcony, titulo: 'Apartamento 81 m² - varanda' },
      { src: jardinsDoParqueApartment60Living, titulo: 'Apartamento 60 m² - sala de estar e jantar' },
      { src: jardinsDoParqueApartment60Suite, titulo: 'Apartamento 60 m² - suíte' },
      { src: jardinsDoParqueApartment60Bedroom, titulo: 'Apartamento 60 m² - quarto' },
      { src: jardinsDoParqueApartment60Balcony, titulo: 'Apartamento 60 m² - varanda' },
    ],
    floorPlans: [
      { src: jardinsDoParqueGroundPlan, titulo: 'Implantação - pavimento térreo' },
      { src: jardinsDoParquePlan81, titulo: 'Planta 81 m² - 3 quartos (1 suíte) - terminação 01' },
      { src: jardinsDoParquePlan60, titulo: 'Planta 60 m² - 2 quartos (1 suíte) - terminação 04' },
      { src: jardinsDoParqueGeneralPlan, titulo: 'Implantação geral - Torres Orquídeas e Hortênsias' },
      { src: jardinsDoParqueOrchidsFloorPlan, titulo: 'Pavimento tipo - Torre Orquídeas' },
      { src: jardinsDoParqueHortensiasFloorPlan, titulo: 'Pavimento tipo - Torre Hortênsias' },
    ],
    locationImages: [
      { src: jardinsDoParqueCommerce, titulo: 'Entorno - comércio e serviços' },
      { src: jardinsDoParqueBeach, titulo: 'Praia de Cruz das Almas' },
      { src: jardinsDoParqueSeaShopping, titulo: 'Vista aérea - proximidade do mar e do Parque Shopping' },
      { src: jardinsDoParqueInterestMap, titulo: 'Mapa do entorno e pontos de interesse' },
    ],
  }),
  createDevelopment({
    slug: 'concept-jatiuca', name: 'Concept Jatiúca', image: conceptJatiucaCover,
    city: 'Maceió, AL', neighborhood: 'Jatiúca', locationTitle: 'Jatiúca - Maceió/AL',
    address: 'Jatiúca, Maceió/AL',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Concept%20Jati%C3%BAca%20Jati%C3%BAca%20Macei%C3%B3%20AL',
    area: '25 a 62 m²', profile: 'Studios e apartamentos de 2 quartos', detail: 'Lazer no rooftop',
    description: 'O Concept Jatiúca é um empreendimento residencial contemporâneo da Moura Dubeux na Jatiúca, em Maceió, Alagoas. O projeto reúne studios e apartamentos de dois quartos, com áreas de 25 m² a 62 m². O rooftop oferece piscina com hidromassagem, deck, espaços gourmet, terraço coberto e academia. No térreo, recepção, coliving, sala de reunião, lavanderia compartilhada e espaços para delivery, e-commerce e minimarket complementam a estrutura de serviços.',
    highlights: ['25 a 62 m²', 'Studios e apartamentos de 2 quartos', 'Lazer no rooftop', 'Jatiúca, Maceió'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Jatiúca, Maceió/AL'], ['Tipologias', 'Studios e apartamentos de 2 quartos'], ['Garagem', 'Estacionamento interno e vagas para visitantes']],
    technical: [
      ['Áreas das unidades', '25 m², 26 m², 28 m² e 62 m²'],
      ['Tipologias', 'Studios e apartamentos de 2 quartos'],
      ['Localização', 'Região das ruas Marechal Arthur Alvin Câmara e Coronel Alcides Barros Ferreira, na Jatiúca'],
      ['Praia', 'Aproximadamente 400 m, conforme o material publicitário'],
      ['Pavimentos apresentados', 'Térreo, intermediário, apartamentos do 1º ao 10º andar e rooftop'],
      ['Garagem', 'Estacionamento interno e vagas para visitantes; acessos de veículos ao térreo e ao subsolo'],
      ['Lazer', 'Rooftop com piscina com hidromassagem, deck, gourmet interno e externo, terraço coberto e academia'],
      ['Conectividade', 'Infraestrutura para Wi-Fi nas áreas comuns sociais'],
      ['Gestão de locações', 'Housi, apresentada no book; serviços e condições conforme contratação'],
      ['Personalização', 'MD Store, conforme condições de contratação com a incorporadora'],
      ['Material', 'Perspectivas ilustrativas; móveis e decoração não integram necessariamente as unidades negociadas'],
    ],
    amenities: ['Piscina com hidromassagem no rooftop', 'Deck', 'Gourmet externo', 'Gourmet interno', 'Terraço coberto', 'Academia', 'Recepção', 'Coliving e convivência', 'Sala de reunião', 'Administração e rouparia', 'Espaço delivery', 'Espaço e-commerce', 'Área para minimarket', 'Lavanderia compartilhada equipada', 'Bicicletário', 'Desembarque de passageiros'],
    security: ['Fechaduras eletrônicas na porta principal', 'Controle automatizado de acesso de pessoas e veículos', 'Infraestrutura para câmeras nas áreas comuns'],
    sustainability: ['Infraestrutura de automação para irrigação do jardim', 'Tomadas compartilhadas para carros elétricos'],
    projectTeam: ['Mariano Teixeira | Arquitetura', 'Poligonus Arquitetura | Ambientação', 'Studio IX | Projeto luminotécnico'],
    gallery: [
      { src: conceptJatiucaFrontFacade, titulo: 'Concept Jatiúca - perspectiva da fachada principal' },
      { src: conceptJatiucaSideFacade, titulo: 'Perspectiva lateral da fachada' },
      { src: conceptJatiucaFacadeDetail, titulo: 'Perspectiva do detalhe arquitetônico da fachada' },
      { src: conceptJatiucaEntrance, titulo: 'Perspectiva do acesso e entrada do empreendimento' },
      { src: conceptJatiucaSeaPool, titulo: 'Perspectiva da piscina do rooftop com vista para o mar' },
      { src: conceptJatiucaPoolDeck, titulo: 'Perspectiva da piscina e deck do rooftop' },
      { src: conceptJatiucaCoveredTerrace, titulo: 'Perspectiva do terraço coberto do rooftop' },
      { src: conceptJatiucaOutdoorGourmet, titulo: 'Perspectiva do espaço gourmet externo' },
      { src: conceptJatiucaIndoorGourmet, titulo: 'Perspectiva do espaço gourmet interno' },
      { src: conceptJatiucaFitness, titulo: 'Perspectiva da academia' },
      { src: conceptJatiucaApartment62, titulo: 'Perspectiva do ambiente integrado do apartamento de 62 m²' },
      { src: conceptJatiucaStudio28, titulo: 'Perspectiva do Studio de 28 m²' },
      { src: conceptJatiucaStudio26, titulo: 'Perspectiva do Studio de 26 m²' },
      { src: conceptJatiucaStudio25, titulo: 'Perspectiva da cozinha do Studio de 25 m²' },
      { src: conceptJatiucaReception1, titulo: 'Perspectiva da recepção e coliving - ambiente 1' },
      { src: conceptJatiucaReception2, titulo: 'Perspectiva da recepção e coliving - ambiente 2' },
      { src: conceptJatiucaDelivery, titulo: 'Perspectiva do espaço delivery' },
      { src: conceptJatiucaEcommerce, titulo: 'Perspectiva do espaço e-commerce' },
      { src: conceptJatiucaLaundry, titulo: 'Perspectiva da lavanderia compartilhada' },
      { src: conceptJatiucaMinimarket, titulo: 'Perspectiva da área para minimarket' },
    ],
    floorPlans: [
      { src: conceptJatiucaPlan25, titulo: 'Studio de 25 m²' },
      { src: conceptJatiucaPlan26, titulo: 'Studio de 26 m²' },
      { src: conceptJatiucaPlan28, titulo: 'Studio de 28 m²' },
      { src: conceptJatiucaPlan62, titulo: 'Apartamento de 2 quartos de 62 m²' },
      { src: conceptJatiucaGroundPlan, titulo: 'Pavimento térreo' },
      { src: conceptJatiucaIntermediatePlan, titulo: 'Pavimento intermediário' },
      { src: conceptJatiucaTypicalFloorPlan, titulo: 'Pavimentos de apartamentos do 1º ao 10º andar' },
      { src: conceptJatiucaRooftopPlan, titulo: 'Rooftop e áreas de lazer' },
    ],
    locationImages: [
      { src: conceptJatiucaNeighborhood, titulo: 'Entorno: vista aérea do bairro Jatiúca, Maceió' },
      { src: conceptJatiucaLocationMap, titulo: 'Mapa de localização e comodidades próximas ao Concept Jatiúca' },
    ],
  }),
  createDevelopment({
    slug: 'lanai-beach', name: 'Lanai Beach', image: lanaiBeachCapaLanaiBeachTorresEOrlaDeJacarecica,
    city: 'Maceió, AL', neighborhood: 'Jacarecica', locationTitle: 'Jacarecica - Maceió/AL',
    address: 'Orla da Praia de Jacarecica, Maceió/AL',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Lanai%20Beach%20Jacarecica%20Macei%C3%B3%20Alagoas',
    area: '79 a 130 m²', profile: '2 e 3 quartos, com varanda gourmet', detail: 'À beira-mar de Jacarecica',
    description: 'O Lanai Beach é um empreendimento residencial da Moura Dubeux à beira-mar de Jacarecica, em Maceió/AL, próximo ao Parque Shopping Maceió e a uma área de preservação ambiental. As torres Nalu e Makani reúnem apartamentos de 2 e 3 quartos, com metragens de 79 a 130 m² e varanda gourmet em todas as unidades. O lazer inclui três piscinas, sendo uma com borda infinita e vista para o mar, bar da praia, espaços gourmet, academia, coworking, lazer infantil e acesso à praia. As opções de vista para o mar, área verde e lazer variam conforme a unidade.',
    highlights: ['79 a 130 m²', '2 e 3 quartos', 'Varanda gourmet', 'À beira-mar de Jacarecica'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Jacarecica, Maceió/AL'], ['Torres', 'Nalu e Makani'], ['Tipologias', '2 e 3 quartos, de 79 a 130 m²']],
    technical: [
      ['Torres', 'Nalu e Makani'],
      ['Tipologias', 'Apartamentos de 2 e 3 quartos'],
      ['Metragens apresentadas', '79 m², 86 m², 99 m², 115 m² e 130 m²'],
      ['Apartamento de 130 m²', 'Planta apresentada para a torre Nalu'],
      ['Apartamento de 115 m²', 'Planta apresentada para a torre Makani'],
      ['Varandas', 'Varanda gourmet em todas as unidades'],
      ['Vistas', 'Opções para o mar, área verde e lazer, conforme a unidade'],
      ['Localização', 'Orla de Jacarecica, próximo ao Parque Shopping Maceió, à Avenida Litorânea e à Avenida General Luiz de França Albuquerque'],
      ['Áreas comuns', 'Equipadas e mobiliadas, com automação'],
      ['Estacionamento', 'Vagas para visitantes'],
      ['Registro de incorporação', 'R.4 da matrícula nº 157.941 do 1º Registro de Imóveis e Hipotecas de Maceió/AL, conforme o book'],
      ['Material', 'Perspectivas e plantas ilustrativas, sujeitas a alterações; mobiliário e decoração representados não integram necessariamente as unidades comercializadas'],
    ],
    amenities: ['Praça de boas-vindas', 'Lobbies e acessos às torres', 'Piscina à beira-mar com borda infinita', 'Piscina adulto com spa', 'Piscina infantil', 'Playground', 'Pet place', 'Pet wash', 'Churrasqueiras', 'Espaço gourmet integrado à piscina', 'Salão de festas e salão externo', 'Bar da praia', 'Sports bar', 'Espaço kids', 'Cinema kids', 'Academia', 'Coworking com sala de reunião', 'Jardins e áreas de convivência', 'Terraço coberto na torre Nalu', 'Coliving na torre Makani', 'Minimarket', 'Bicicletário', 'Estrutura para delivery e e-commerce', 'Acesso à praia'],
    security: ['Fechadura eletrônica nas portas sociais dos apartamentos', 'Controle automatizado de acesso de pedestres e veículos'],
    sustainability: ['Irrigação inteligente', 'Ponto para carregamento de carro elétrico', 'Placas solares para atender parcialmente às áreas comuns'],
    projectTeam: ['JCL - Arquitetos | Arquitetura', 'Takeda Design | Paisagismo', 'Poligonus Arquitetura | Ambientação'],
    gallery: [
      { src: lanaiBeachFachadaDuasTorresNaluEMakaniAnoitecer, titulo: 'Fachada das torres Nalu e Makani ao anoitecer' },
      { src: lanaiBeachVistaAereaAreaDeLazerEntreTorres, titulo: 'Perspectiva superior do lazer e das torres' },
      { src: lanaiBeachPiscinaBeiraMarComDeck, titulo: 'Piscina à beira-mar e solário' },
      { src: lanaiBeachJardinsECaminhosLazerExterno, titulo: 'Jardins, caminho e áreas de convivência externas' },
      { src: lanaiBeachPiscinaAdultoComSpa, titulo: 'Piscina adulto com área de hidromassagem' },
      { src: lanaiBeachPiscinaBordaInfinitaVistaMarDia, titulo: 'Piscina com borda infinita e vista para o mar, de dia' },
      { src: lanaiBeachPiscinaBordaInfinitaVistaMarNoite, titulo: 'Piscina com borda infinita à noite' },
      { src: lanaiBeachPiscinaInfantilAquatica, titulo: 'Piscina infantil com brinquedos aquáticos' },
      { src: lanaiBeachPlaygroundParquinho, titulo: 'Playground ao ar livre' },
      { src: lanaiBeachPetPlaceAreaParaAnimais, titulo: 'Espaço pet ao ar livre' },
      { src: lanaiBeachSalaoDeFestasInterno, titulo: 'Salão de festas interno' },
      { src: lanaiBeachSalaoDeFestasTerracoExterno, titulo: 'Salão externo integrado ao salão de festas' },
      { src: lanaiBeachBarDaPraia, titulo: 'Bar da praia com mesas e vista para o mar' },
      { src: lanaiBeachSportsBarJogos, titulo: 'Sports bar com jogos e bancada' },
      { src: lanaiBeachEspacoKidsBrinquedoteca, titulo: 'Espaço kids e brinquedoteca' },
      { src: lanaiBeachCinemaKids, titulo: 'Cinema infantil com assentos e TV' },
      { src: lanaiBeachAcademiaFitness, titulo: 'Academia com aparelhos e área de treino' },
      { src: lanaiBeachCoworkingSalaDeReuniao, titulo: 'Coworking com sala de reunião' },
      { src: lanaiBeachMinimarketLojaConveniencia, titulo: 'Minimarket do condomínio' },
      { src: lanaiBeachEspacoEcommerceGuardaEncomendas, titulo: 'Área de encomendas e e-commerce' },
      { src: lanaiBeachPetWashBanhoAnimais, titulo: 'Pet wash com bancadas e banheiras' },
      { src: lanaiBeachBicicletario, titulo: 'Bicicletário do empreendimento' },
      { src: lanaiBeachApartamento130m2SalaDeEstarVistaMar, titulo: 'Sala de estar decorada do apartamento de 130 m²' },
      { src: lanaiBeachApartamento130m2SuiteVistaMar, titulo: 'Suíte decorada do apartamento de 130 m²' },
      { src: lanaiBeachApartamento115m2Sala, titulo: 'Sala decorada do apartamento de 115 m²' },
      { src: lanaiBeachApartamento115m2Suite, titulo: 'Suíte decorada do apartamento de 115 m²' },
      { src: lanaiBeachApartamento99m2SalaECozinha, titulo: 'Sala e cozinha integradas do apartamento de 99 m²' },
      { src: lanaiBeachApartamento99m2Suite, titulo: 'Suíte decorada do apartamento de 99 m²' },
      { src: lanaiBeachApartamento86m2SalaECozinha, titulo: 'Sala e cozinha integradas do apartamento de 86 m²' },
      { src: lanaiBeachApartamento79m2SalaECozinha, titulo: 'Sala e cozinha integradas do apartamento de 79 m²' },
      { src: lanaiBeachApartamento79m2Quarto, titulo: 'Quarto decorado do apartamento de 79 m²' },
    ],
    floorPlans: [
      { src: lanaiBeachPlantaApartamento115m2TorreMakani, titulo: 'Apartamento 115 m² - torre Makani' },
      { src: lanaiBeachPlantaApartamento130m2TorreNalu, titulo: 'Apartamento 130 m² - torre Nalu' },
      { src: lanaiBeachPlantaApartamento79m2, titulo: 'Apartamento 79 m²' },
      { src: lanaiBeachPlantaApartamento86m2, titulo: 'Apartamento 86 m²' },
      { src: lanaiBeachPlantaApartamento99m2, titulo: 'Apartamento 99 m²' },
      { src: lanaiBeachPlantaMapaImplantacaoUnidades, titulo: 'Mapa de implantação das unidades e áreas externas' },
      { src: lanaiBeachPlantaPavimentoLazerGeral, titulo: 'Planta do pavimento de lazer geral, com piscinas e acessos' },
      { src: lanaiBeachPlantaPavimentoLazerTorreMakani, titulo: 'Planta do pavimento de lazer da torre Makani' },
      { src: lanaiBeachPlantaPavimentoLazerTorreNalu, titulo: 'Planta do pavimento de lazer da torre Nalu' },
      { src: lanaiBeachPlantaPavimentoTipoTorreMakani, titulo: 'Planta do pavimento tipo - torre Makani' },
      { src: lanaiBeachPlantaPavimentoTipoTorreNalu, titulo: 'Planta do pavimento tipo - torre Nalu' },
      { src: lanaiBeachPlantaApartamento115m2TorreMakaniComLegenda, titulo: 'Apartamento 115 m² - torre Makani - página de referência com legendas' },
      { src: lanaiBeachPlantaApartamento130m2TorreNaluComLegenda, titulo: 'Apartamento 130 m² - torre Nalu - página de referência com legendas' },
      { src: lanaiBeachPlantaApartamento79m2ComLegenda, titulo: 'Apartamento 79 m² - página de referência com legendas' },
      { src: lanaiBeachPlantaApartamento86m2ComLegenda, titulo: 'Apartamento 86 m² - página de referência com legendas' },
      { src: lanaiBeachPlantaApartamento99m2ComLegenda, titulo: 'Apartamento 99 m² - página de referência com legendas' },
      { src: lanaiBeachPlantaMapaImplantacaoUnidadesComLegenda, titulo: 'Mapa de implantação das unidades e áreas externas - página de referência com legendas' },
      { src: lanaiBeachPlantaPavimentoLazerGeralComLegenda, titulo: 'Planta do pavimento de lazer geral, com piscinas e acessos - página de referência com legendas' },
      { src: lanaiBeachPlantaPavimentoLazerTorreMakaniComLegenda, titulo: 'Planta do pavimento de lazer da torre Makani - página de referência com legendas' },
      { src: lanaiBeachPlantaPavimentoLazerTorreNaluComLegenda, titulo: 'Planta do pavimento de lazer da torre Nalu - página de referência com legendas' },
      { src: lanaiBeachPlantaPavimentoTipoTorreMakaniComLegenda, titulo: 'Planta do pavimento tipo - torre Makani - página de referência com legendas' },
      { src: lanaiBeachPlantaPavimentoTipoTorreNaluComLegenda, titulo: 'Planta do pavimento tipo - torre Nalu - página de referência com legendas' },
    ],
    locationImages: [
      { src: lanaiBeachPraiaJacarecicaVistaLitoral, titulo: 'Praia e mar de Jacarecica vistos de cima' },
      { src: lanaiBeachAreaVerdeProximaAPraia, titulo: 'Área verde de preservação junto ao litoral' },
      { src: lanaiBeachVistaMarDeJacarecica, titulo: 'Perspectiva paisagística da praia de Jacarecica' },
      { src: lanaiBeachVistaAreaVerdeEOrla, titulo: 'Vista da vegetação e da orla' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-milagres', name: 'Beach Class Milagres', image: milagresCover,
    city: 'São Miguel dos Milagres, AL', neighborhood: 'Rota Ecológica dos Milagres', locationTitle: 'São Miguel dos Milagres - Alagoas',
    address: 'São Miguel dos Milagres, Rota Ecológica dos Milagres, Alagoas',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Milagres%20S%C3%A3o%20Miguel%20dos%20Milagres%20AL',
    area: '32 a 114 m²', profile: 'Studios, 1 e 2 quartos e bangalôs, com Garden', detail: '226 unidades em estilo resort',
    description: 'O Beach Class Milagres fica em São Miguel dos Milagres, no litoral da Rota Ecológica dos Milagres, em Alagoas, com proposta de lazer, natureza, praia e bem-estar em estilo resort. O projeto reúne oito torres habitacionais e quatro bangalôs com garden e piscina privativa, somando 226 unidades entre studios e apartamentos de 1 e 2 quartos, com opções de jardim privativo. Piscina com vista para o mar, restaurante, spa, academia e espaços gourmet completam a estrutura.',
    highlights: ['32 a 114 m²', '226 unidades', 'Bangalôs com piscina privativa', 'Rota Ecológica dos Milagres'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'São Miguel dos Milagres, AL'], ['Unidades', '226 unidades privativas'], ['Garagem', '227 vagas']],
    technical: [
      ['Área do terreno', '31.068,86 m²'],
      ['Composição', '1 bloco central, blocos de apoio, 1 bloco de serviço, 8 torres habitacionais (A a H) e 4 bangalôs'],
      ['Unidades', '226 unidades privativas: 222 nas torres habitacionais e 4 bangalôs'],
      ['Studios', '32,22 a 33,09 m², nos blocos A, B, C e D'],
      ['1 e 2 quartos', 'Unidades de 42,57 m² e 61,32 m² nos blocos E, F, G e H'],
      ['Gardens', 'Unidades térreas com garden; os valores variam conforme o bloco e a unidade, e devem ser confirmados na planta'],
      ['Bangalôs', '4 bangalôs de 114,30 m², com 2 suítes + quarto, garden e piscina privativa'],
      ['Garagem', '227 vagas de estacionamento'],
      ['Distâncias', 'Aeroporto de Maceió: 95 km; aeroporto de Recife: 190 km'],
      ['Varandas', 'Infraestrutura para bancada gourmet; cuba, torneira e bancada não serão entregues'],
      ['Material', 'Perspectivas ilustrativas; características de entrega conforme o memorial descritivo e os documentos contratuais'],
    ],
    amenities: ['Piscina adulto', 'Piscina infantil', 'Piscina com vista para o mar', 'Hidromassagem', 'Spray park infantil', 'Playground', 'Lounge coberto e lounge de piscina', 'Pool bar e gourmet da piscina', 'Quadra poliesportiva com espaço gourmet', 'Restaurante e bar', 'Spa', 'Espaço de relaxamento', 'Salão de beleza', 'Academia com terraço', 'Lobby com espaço para check-in', 'Loja de conveniência', 'Pet place', 'Praça de chegada com espelhos d’água', 'Acesso à praia', 'Áreas comuns equipadas e mobiliadas'],
    security: ['Guarita com controle de acesso', 'Fechadura eletrônica nas portas de entrada dos apartamentos'],
    sustainability: [],
    projectTeam: [],
    gallery: [
      { src: milagresPhotoLazerVistaAereaPiscinasJardins, titulo: 'Beach Class Milagres - perspectiva aérea das piscinas e jardins' },
      { src: milagresPhotoLazerPiscinaVistaMar, titulo: 'Perspectiva da piscina com vista para o mar' },
      { src: milagresPhotoLazerPiscinaPrincipalEstruturaSombreada, titulo: 'Perspectiva da piscina principal com estrutura sombreada' },
      { src: milagresPhotoLazerHidromassagemIntegradaPiscina, titulo: 'Perspectiva da hidromassagem integrada à piscina' },
      { src: milagresPhotoLazerLoungeBeiraPiscina, titulo: 'Perspectiva do lounge à beira da piscina' },
      { src: milagresPhotoLazerPoolBarEGourmetPiscina, titulo: 'Perspectiva do pool bar e do gourmet da piscina' },
      { src: milagresPhotoLazerPracaChegadaEspelhoAgua, titulo: 'Perspectiva da praça de chegada com espelho d’água' },
      { src: milagresPhotoLazerGourmetQuadraPergolado, titulo: 'Perspectiva do gourmet da quadra com pergolado' },
      { src: milagresPhotoLazerGourmetQuadraMesaExterna, titulo: 'Perspectiva do gourmet da quadra com mesa externa' },
      { src: milagresPhotoLazerPlaygroundInfantil, titulo: 'Perspectiva do playground infantil' },
      { src: milagresPhotoGastronomiaRestauranteSalao, titulo: 'Perspectiva do salão do restaurante' },
      { src: milagresPhotoGastronomiaRestauranteBar, titulo: 'Perspectiva do restaurante e bar' },
      { src: milagresPhotoBemEstarSpa, titulo: 'Perspectiva do spa' },
      { src: milagresPhotoBemEstarEspacoRelaxamento, titulo: 'Perspectiva do espaço de relaxamento' },
      { src: milagresPhotoBemEstarSalaoBeleza, titulo: 'Perspectiva do salão de beleza' },
      { src: milagresPhotoBemEstarAcademia, titulo: 'Perspectiva da academia' },
      { src: milagresPhotoBemEstarAcademiaTerraco, titulo: 'Perspectiva do terraço da academia' },
      { src: milagresPhotoServicosEntradaRececaoFachada, titulo: 'Perspectiva da entrada e da fachada da recepção' },
      { src: milagresPhotoServicosLobbyCheckin, titulo: 'Perspectiva do lobby e do check-in' },
      { src: milagresPhotoServicosLojaConveniencia, titulo: 'Perspectiva da loja de conveniência' },
      { src: milagresPhotoStudioEstarIntegrado, titulo: 'Perspectiva do Studio com estar integrado' },
      { src: milagresPhotoStudioQuartoPerspectiva, titulo: 'Perspectiva do quarto do Studio' },
      { src: milagresPhotoStudioQuartoDetalhe, titulo: 'Detalhe do quarto do Studio' },
      { src: milagresPhotoStudioTerracoGardenPrivativo, titulo: 'Perspectiva do terraço Garden privativo do Studio' },
      { src: milagresPhotoApartamento1QuartoSalaJantar, titulo: 'Perspectiva da sala e jantar do apartamento de 1 quarto' },
      { src: milagresPhotoApartamento1QuartoVaranda, titulo: 'Perspectiva da varanda do apartamento de 1 quarto' },
      { src: milagresPhotoApartamento1QuartoDormitorio, titulo: 'Perspectiva do dormitório do apartamento de 1 quarto' },
      { src: milagresPhotoApartamento1QuartoGarden, titulo: 'Perspectiva do Garden do apartamento de 1 quarto' },
      { src: milagresPhotoApartamento2QuartosSalaJantar, titulo: 'Perspectiva da sala e jantar do apartamento de 2 quartos' },
      { src: milagresPhotoApartamento2QuartosVaranda, titulo: 'Perspectiva da varanda do apartamento de 2 quartos' },
      { src: milagresPhotoApartamento2QuartosSuite, titulo: 'Perspectiva da suíte do apartamento de 2 quartos' },
      { src: milagresPhotoApartamento2QuartosQuartoInfantil, titulo: 'Perspectiva do quarto infantil do apartamento de 2 quartos' },
      { src: milagresPhotoApartamento2QuartosGarden, titulo: 'Perspectiva do Garden do apartamento de 2 quartos' },
      { src: milagresPhotoBangaloFachadaComPiscina, titulo: 'Perspectiva da fachada do bangalô com piscina' },
      { src: milagresPhotoBangaloTerracoPrivativoComPiscina, titulo: 'Perspectiva do terraço privativo do bangalô com piscina' },
      { src: milagresPhotoBangaloSalaEstarJantar, titulo: 'Perspectiva da sala de estar e jantar do bangalô' },
      { src: milagresPhotoBangaloSuite01, titulo: 'Perspectiva da suíte 1 do bangalô' },
      { src: milagresPhotoBangaloSuite02QuartoDuplo, titulo: 'Perspectiva da suíte 2 do bangalô com quarto duplo' },
    ],
    floorPlans: [
      { src: milagresPlanImplantacaoGeralETerreno, titulo: 'Implantação geral e terreno' },
      { src: milagresPlanImplantacaoPavimentoLazer, titulo: 'Implantação do pavimento de lazer' },
      { src: milagresPlanPlantaBlocoCentralPavimentoTerreo, titulo: 'Bloco central - pavimento térreo' },
      { src: milagresPlanPlantaBlocoCentralPavimentoSuperior, titulo: 'Bloco central - pavimento superior' },
      { src: milagresPlanPlantaBlocosAbcdTerreoGardens, titulo: 'Blocos A, B, C e D - térreo com Gardens' },
      { src: milagresPlanPlantaBlocosAbcdPavimentos1E2, titulo: 'Blocos A, B, C e D - 1º e 2º pavimentos' },
      { src: milagresPlanPlantaBlocosEfTerreoGardens, titulo: 'Blocos E e F - térreo com Gardens' },
      { src: milagresPlanPlantaBlocosEfPavimentos1E2, titulo: 'Blocos E e F - 1º e 2º pavimentos' },
      { src: milagresPlanPlantaBlocosGhTerreoGardens, titulo: 'Blocos G e H - térreo com Gardens' },
      { src: milagresPlanPlantaBlocosGhPavimentos1E2, titulo: 'Blocos G e H - 1º e 2º pavimentos' },
      { src: milagresPlanPlantaStudio3309m2Garden1657m2, titulo: 'Studio 33,09 m² com Garden de 16,57 m²' },
      { src: milagresPlanPlanta1Quarto4257m2Garden2873m2, titulo: '1 quarto 42,57 m² com Garden de 28,73 m²' },
      { src: milagresPlanPlanta2Quartos6132m2Garden2996m2, titulo: '2 quartos 61,32 m² com Garden de 29,96 m²' },
      { src: milagresPlanPlantaBangalo11430m2TerreoPiscinaPrivativa, titulo: 'Bangalô 114,30 m² - térreo com piscina privativa' },
      { src: milagresPlanPlantaBangalo11430m2PavimentoSuperior, titulo: 'Bangalô 114,30 m² - pavimento superior' },
    ],
    locationImages: [
      { src: milagresLocLocalizacaoMapaAereoMilagres, titulo: 'Mapa aéreo de localização do Beach Class Milagres' },
    ],
  }),
  createDevelopment({
    slug: 'les-amis-lagoa-nova', name: 'Les Amis Lagoa Nova', image: lesAmisCover,
    city: 'Natal, RN', neighborhood: 'Lagoa Nova', locationTitle: 'Lagoa Nova - Natal/RN',
    address: 'Rua José Claudino, Lagoa Nova, Natal/RN',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Les%20Amis%20Lagoa%20Nova%20Natal%20RN',
    area: '61,01 a 97,94 m²', profile: '2 e 3 quartos, com opções de sala ampliada', detail: '1 ou 2 vagas cobertas por apartamento',
    description: 'O Les Amis Lagoa Nova é um empreendimento residencial da Moura Dubeux no bairro Lagoa Nova, em Natal/RN, com referência na Rua José Claudino, próximo às avenidas Amintas Barros e Jaguarari. A torre tem 25 pavimentos tipo, com 3 apartamentos por andar, e plantas Elo de 61,01 m², Encontro de 82,34 m² e Estilo de 97,94 m². Todos os apartamentos têm varanda gourmet, com opções de 2 e 3 quartos e alternativas de sala ampliada, incluindo 1 suíte com closet no tipo Elo e 2 suítes no tipo Estilo. O lazer reúne piscinas, minispa, espaços gourmet, academia, coworking, lazer infantil e espaços para pets.',
    highlights: ['61,01 a 97,94 m²', 'Varanda gourmet', '1 ou 2 vagas cobertas', 'Opções de sala ampliada'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Lagoa Nova, Natal/RN'], ['Tipologias', 'Elo, Encontro e Estilo'], ['Garagem', '1 ou 2 vagas cobertas por apartamento']],
    technical: [
      ['Torres', '1 torre'],
      ['Pavimentos', '28 no total, sendo 25 pavimentos tipo'],
      ['Apartamentos por andar', '3 unidades'],
      ['Elo - coluna 3', '61,01 m²: 2 quartos (1 suíte), com alternativa de 1 suíte com closet e sala ampliada; 1 vaga coberta'],
      ['Encontro - coluna 2', '82,34 m²: 3 quartos (1 suíte), com alternativa de 2 quartos (1 suíte) e sala ampliada; 2 vagas cobertas'],
      ['Estilo - coluna 1', '97,94 m²: 3 quartos (1 suíte), com alternativa de 2 suítes e sala ampliada; 2 vagas cobertas'],
      ['Varandas', 'Varanda gourmet em todos os apartamentos'],
      ['Garagem', '127 vagas no total, sendo 122 cobertas'],
      ['Pavimento semienterrado', 'Acesso e garagens'],
      ['Pavimento térreo', 'Acesso, lazer e garagens'],
      ['Pavimento vazado', 'Lazer'],
      ['Áreas comuns', 'Lazer entregue equipado e mobiliado, conforme o material'],
      ['Salão de festas', 'Equipado, decorado e climatizado, conforme o memorial de especificações'],
      ['Conforto acústico', 'Soluções para salão de festas, coworking e academia'],
      ['Personalização', 'Opções de personalização de planta e automação'],
      ['Localização', 'Rua José Claudino, próximo às avenidas Amintas Barros e Jaguarari, Lagoa Nova, Natal/RN'],
      ['Material', 'Perspectivas e plantas ilustrativas, sujeitas a alterações; móveis e decoração ilustrados não integram necessariamente os apartamentos'],
    ],
    amenities: ['Hall projetado para operações com concierge', 'Piscina adulto com deck molhado', 'Piscina infantil', 'Deck seco', 'Deck Lune e espaço relax', 'Minispa', 'Deck junto à piscina com churrasqueira', 'Salão de festas', 'Espaço gourmet', 'Brinquedoteca', 'Playground', 'Praça Vivant e espaços de convivência', 'Miniquadra poliesportiva', 'Deck jardim com churrasqueira', 'Academia', 'Fitness outdoor', 'Coworking com bancadas, sala de reunião e Wi-Fi', 'Pet play e pet shower', 'Guarda-e-commerce e lockers para delivery'],
    security: ['Portaria virtual com videoporteiro', 'Acesso de moradores por biometria', 'Acesso de visitantes por QR Code', 'Acesso de veículos por reconhecimento de placa', 'Fechaduras eletrônicas nas portas principais dos apartamentos', 'Infraestrutura de segurança nas áreas comuns'],
    sustainability: ['Tomadas compartilhadas para carros elétricos', 'Coleta seletiva', 'Sensores de iluminação nos estacionamentos e circulações dos pavimentos tipo', 'Irrigação automatizada', 'Automação para controle do consumo de água e energia', 'Aproveitamento da iluminação natural'],
    projectTeam: ['Pontual Arquitetos | Arquitetura', 'Alessandra e Ricardo Cardim | Paisagismo', 'Sobre Arquitetura | Ambientação das áreas comuns'],
    gallery: [
      { src: lesAmisFachadaPrincipalAoEntardecer, titulo: 'Les Amis Lagoa Nova - perspectiva da fachada ao entardecer' },
      { src: lesAmisFachadaVistaAereaDoBairro, titulo: 'Perspectiva aérea da torre e do bairro' },
      { src: lesAmisFachadaVistaFrontalDaTorre, titulo: 'Perspectiva frontal da torre' },
      { src: lesAmisEntradaPortariaPrincipal, titulo: 'Perspectiva da entrada e da portaria principal' },
      { src: lesAmisEspacoGuardaEcommerce, titulo: 'Perspectiva do espaço guarda-e-commerce' },
      { src: lesAmisHallDeEntrada, titulo: 'Perspectiva do hall de entrada' },
      { src: lesAmisPiscinasAdultoInfantilDeckMolhadoNoturna, titulo: 'Perspectiva noturna das piscinas adulto e infantil com deck molhado' },
      { src: lesAmisLazerTerreoPiscinasVistaSuperior, titulo: 'Perspectiva superior do lazer térreo e das piscinas' },
      { src: lesAmisPiscinaAdultoComDeckMolhado, titulo: 'Perspectiva da piscina adulto com deck molhado' },
      { src: lesAmisPiscinaInfantil, titulo: 'Perspectiva da piscina infantil' },
      { src: lesAmisMinispa, titulo: 'Perspectiva do minispa' },
      { src: lesAmisSalaoDeFestas, titulo: 'Perspectiva do salão de festas' },
      { src: lesAmisEspacoGourmet, titulo: 'Perspectiva do espaço gourmet' },
      { src: lesAmisBrinquedoteca, titulo: 'Perspectiva da brinquedoteca' },
      { src: lesAmisPlayground, titulo: 'Perspectiva do playground' },
      { src: lesAmisLazerPavimentoVazadoVistaAerea, titulo: 'Perspectiva aérea do lazer no pavimento vazado' },
      { src: lesAmisPracaVivantVistaSuperior, titulo: 'Perspectiva superior da Praça Vivant' },
      { src: lesAmisPracaVivantEspacoDeConvivencia, titulo: 'Perspectiva da Praça Vivant e do espaço de convivência' },
      { src: lesAmisMiniquadraPoliesportiva, titulo: 'Perspectiva da miniquadra poliesportiva' },
      { src: lesAmisDeckJardimComChurrasqueira, titulo: 'Perspectiva do deck jardim com churrasqueira' },
      { src: lesAmisAcademiaEspacoFitness01, titulo: 'Perspectiva da academia - vista 1' },
      { src: lesAmisAcademiaEspacoFitness02, titulo: 'Perspectiva da academia - vista 2' },
      { src: lesAmisFitnessOutdoor, titulo: 'Perspectiva do fitness outdoor' },
      { src: lesAmisEspacoPetPlayEPetShower, titulo: 'Perspectiva do pet play e pet shower' },
      { src: lesAmisEspacoCoworking, titulo: 'Perspectiva do espaço coworking' },
      { src: lesAmisApartamentosFachadaEVarandaGourmet, titulo: 'Perspectiva da fachada e das varandas gourmet' },
      { src: lesAmisApartamentoEstiloVarandaGourmet01, titulo: 'Perspectiva da varanda gourmet do apartamento Estilo - vista 1' },
      { src: lesAmisApartamentoEstiloVarandaGourmet02, titulo: 'Perspectiva da varanda gourmet do apartamento Estilo - vista 2' },
      { src: lesAmisApartamentoEstiloSalaCozinhaIntegradas, titulo: 'Perspectiva da sala e cozinha integradas do apartamento Estilo' },
      { src: lesAmisApartamentoEstiloCozinhaIntegrada, titulo: 'Perspectiva da cozinha integrada do apartamento Estilo' },
      { src: lesAmisApartamentoEstiloSuiteMaster, titulo: 'Perspectiva da suíte master do apartamento Estilo' },
      { src: lesAmisApartamentoEstiloQuarto01, titulo: 'Perspectiva do quarto do apartamento Estilo - vista 1' },
      { src: lesAmisApartamentoEstiloQuarto02, titulo: 'Perspectiva do quarto do apartamento Estilo - vista 2' },
      { src: lesAmisApartamentoEstiloSalaAmpliada, titulo: 'Perspectiva da sala ampliada do apartamento Estilo' },
      { src: lesAmisApartamentoEncontroVarandaGourmet, titulo: 'Perspectiva da varanda gourmet do apartamento Encontro' },
      { src: lesAmisApartamentoEncontroLiving01, titulo: 'Perspectiva do living do apartamento Encontro - vista 1' },
      { src: lesAmisApartamentoEncontroLiving02, titulo: 'Perspectiva do living do apartamento Encontro - vista 2' },
      { src: lesAmisApartamentoEncontroSalaAmpliada, titulo: 'Perspectiva da sala ampliada do apartamento Encontro' },
      { src: lesAmisApartamentoEloVarandaGourmet, titulo: 'Perspectiva da varanda gourmet do apartamento Elo' },
      { src: lesAmisApartamentoEloCozinhaESalaIntegradas, titulo: 'Perspectiva da cozinha e sala integradas do apartamento Elo' },
      { src: lesAmisApartamentoEloAmbienteIntegrado, titulo: 'Perspectiva do ambiente integrado do apartamento Elo' },
      { src: lesAmisApartamentoEloSalaAmpliada, titulo: 'Perspectiva da sala ampliada do apartamento Elo' },
    ],
    floorPlans: [
      { src: lesAmisImplantacaoGeralTerreno, titulo: 'Implantação geral do terreno' },
      { src: lesAmisPlantaPavimentoSemienterrado, titulo: 'Planta do pavimento semienterrado' },
      { src: lesAmisPlantaPavimentoTerreo, titulo: 'Planta do pavimento térreo' },
      { src: lesAmisPlantaPavimentoLazer, titulo: 'Planta do pavimento de lazer' },
      { src: lesAmisPlantaEstilo9794m23Quartos1Suite, titulo: 'Estilo - 97,94 m², 3 quartos (1 suíte)' },
      { src: lesAmisPlantaEstilo9794m22SuitesSalaAmpliada, titulo: 'Estilo - 97,94 m², 2 suítes e sala ampliada' },
      { src: lesAmisPlantaEncontro8234m23Quartos1Suite, titulo: 'Encontro - 82,34 m², 3 quartos (1 suíte)' },
      { src: lesAmisPlantaEncontro8234m22QuartosSalaAmpliada, titulo: 'Encontro - 82,34 m², 2 quartos (1 suíte) e sala ampliada' },
      { src: lesAmisPlantaElo6101m22Quartos1Suite, titulo: 'Elo - 61,01 m², 2 quartos (1 suíte)' },
      { src: lesAmisPlantaElo6101m21SuiteClosetSalaAmpliada, titulo: 'Elo - 61,01 m², 1 suíte com closet e sala ampliada' },
    ],
  }),
  createDevelopment({
    slug: 'florata-tirol', name: 'Florata Tirol', image: florataTirolCover,
    city: 'Natal, RN', neighborhood: 'Tirol', locationTitle: 'Tirol - Natal/RN',
    address: 'Rua Mipibu, Tirol, Natal/RN',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Florata%20Tirol%20Rua%20Mipibu%20Natal%20RN',
    area: '100 e 150 m²', profile: '3 quartos (2 suítes) ou 4 suítes, com varanda gourmet', detail: '2 ou 3 vagas de garagem',
    description: 'O Florata Tirol é um empreendimento residencial da Moura Dubeux no bairro Tirol, em Natal/RN, com referência de localização na Rua Mipibu. O projeto reúne as torres Acácias e Bromélias, com apartamentos de 100 m², 3 quartos (2 suítes) e 2 vagas, ou de 150 m², 4 suítes e 3 vagas. Todas as unidades têm varanda gourmet. O lazer inclui piscinas adulto e infantil, terraço gourmet integrado à piscina, jardins, academia, salão de festas, sports bar, brinquedoteca e pet place.',
    highlights: ['100 e 150 m²', '3 quartos ou 4 suítes', '2 ou 3 vagas', 'Varanda gourmet'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Tirol, Natal/RN'], ['Torres', 'Acácias e Bromélias'], ['Garagem', '2 ou 3 vagas por apartamento']],
    technical: [
      ['Torres', 'Acácias e Bromélias'],
      ['Apartamentos de 100 m²', '3 quartos, sendo 2 suítes, e 2 vagas de garagem; terminação 02 em ambas as torres'],
      ['Apartamentos de 150 m²', '4 suítes e 3 vagas de garagem; terminação 01 em ambas as torres'],
      ['Varandas', 'Varanda gourmet em todas as unidades'],
      ['Plantas apresentadas', 'Apartamentos e planta tipo referentes ao 15º pavimento'],
      ['Localização', 'Rua Mipibu, Tirol, Natal/RN, conforme o mapa do material'],
      ['Halls', 'Hall independente por torre'],
      ['Áreas comuns', 'Equipadas e mobiliadas, com automação'],
      ['Registro de incorporação', '1º CRI - Natal/RN, a cargo do 3º Ofício de Notas, Livro 2 de RG, matrícula 53.220, registro R.1, conforme o book'],
      ['Material', 'Perspectivas e plantas ilustrativas, sujeitas a alterações; mobiliário e decoração ilustrados não integram necessariamente o apartamento ofertado'],
    ],
    amenities: ['Praça de chegada e jardins', 'Hall independente por torre', 'Coworking', 'Brinquedoteca', 'Terraço gourmet integrado à piscina', 'Terraço descoberto', 'Piscina adulto', 'Piscina infantil', 'Parquinho infantil', 'Pet place', 'Pet wash', 'Academia', 'Salão de festas com copa de apoio', 'Sports bar', 'Guarda-volumes', 'Estrutura para recebimento de delivery e e-commerce', 'Áreas comuns equipadas e mobiliadas'],
    security: ['Guarita', 'Fechadura eletrônica no acesso principal dos apartamentos', 'Controle automatizado de acesso de pedestres e veículos'],
    sustainability: ['Irrigação inteligente', 'Ponto para carregamento de carro elétrico', 'Painéis solares para atender parcialmente às áreas comuns'],
    projectTeam: ['Pontual Arquitetos | Arquitetura', 'Takeda Design | Paisagismo', 'Sobre Arquitetura | Ambientação e interiores'],
    gallery: [
      { src: florataTirolFacade, titulo: 'Florata Tirol - perspectiva completa das torres' },
      { src: florataTirolLeisureAerialOne, titulo: 'Perspectiva aérea da área de lazer - vista 1' },
      { src: florataTirolLeisureAerialTwo, titulo: 'Perspectiva aérea da área de lazer - vista 2' },
      { src: florataTirolEntrance, titulo: 'Perspectiva da fachada, entrada e acesso' },
      { src: florataTirolArrivalSquare, titulo: 'Perspectiva da praça de chegada e dos jardins' },
      { src: florataTirolGardens, titulo: 'Perspectiva da praça, jardins e paisagismo' },
      { src: florataTirolAdultPoolOne, titulo: 'Perspectiva da piscina adulto - vista 1' },
      { src: florataTirolAdultPoolTwo, titulo: 'Perspectiva da piscina adulto - vista 2' },
      { src: florataTirolChildrenPool, titulo: 'Perspectiva da piscina infantil' },
      { src: florataTirolPlayground, titulo: 'Perspectiva do parquinho infantil' },
      { src: florataTirolPetPlace, titulo: 'Perspectiva do pet place' },
      { src: florataTirolOpenTerrace, titulo: 'Perspectiva do terraço descoberto' },
      { src: florataTirolGourmetTerrace, titulo: 'Perspectiva do terraço gourmet' },
      { src: florataTirolLobby, titulo: 'Perspectiva do hall social' },
      { src: florataTirolCoworking, titulo: 'Perspectiva do coworking' },
      { src: florataTirolPlayroom, titulo: 'Perspectiva da brinquedoteca' },
      { src: florataTirolGym, titulo: 'Perspectiva da academia' },
      { src: florataTirolPartyRoom, titulo: 'Perspectiva do salão de festas' },
      { src: florataTirolSportsBar, titulo: 'Perspectiva do sports bar' },
      { src: florataTirolLargeLiving, titulo: 'Perspectiva da sala de estar do apartamento de 150 m²' },
      { src: florataTirolLargeDining, titulo: 'Perspectiva da sala de jantar do apartamento de 150 m²' },
      { src: florataTirolLargeBalcony, titulo: 'Perspectiva da varanda gourmet do apartamento de 150 m²' },
      { src: florataTirolLargeSuite, titulo: 'Perspectiva da suíte master do apartamento de 150 m²' },
      { src: florataTirolLargeOfficeSuite, titulo: 'Perspectiva da suíte com escritório do apartamento de 150 m²' },
      { src: florataTirolSmallLiving, titulo: 'Perspectiva da sala de estar do apartamento de 100 m²' },
      { src: florataTirolSmallBalcony, titulo: 'Perspectiva da varanda gourmet do apartamento de 100 m²' },
      { src: florataTirolSmallSuite, titulo: 'Perspectiva da suíte master do apartamento de 100 m²' },
      { src: florataTirolSmallChildrenSuite, titulo: 'Perspectiva da suíte infantil do apartamento de 100 m²' },
    ],
    floorPlans: [
      { src: florataTirolGroundFloor, titulo: 'Implantação do pavimento térreo' },
      { src: florataTirolOpenFloor, titulo: 'Implantação do pavimento vazado' },
      { src: florataTirolTypicalFloor, titulo: 'Planta tipo do 15º andar - duas torres' },
      { src: florataTirolAcaciasLargePlan, titulo: 'Torre Acácias - 150 m², 4 suítes, terminação 01 (15º pavimento)' },
      { src: florataTirolBromeliasLargePlan, titulo: 'Torre Bromélias - 150 m², 4 suítes, terminação 01 (15º pavimento)' },
      { src: florataTirolAcaciasSmallPlan, titulo: 'Torre Acácias - 100 m², 3 quartos (2 suítes), terminação 02 (15º pavimento)' },
      { src: florataTirolBromeliasSmallPlan, titulo: 'Torre Bromélias - 100 m², 3 quartos (2 suítes), terminação 02 (15º pavimento)' },
    ],
    locationImages: [
      { src: florataTirolLocation, titulo: 'Localização aérea do Florata Tirol e referências do entorno em Natal' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-natal', name: 'Beach Class Natal', image: natalCover,
    city: 'Natal, RN', neighborhood: 'Capim Macio', locationTitle: 'Capim Macio - Natal/RN',
    address: 'Rua Doutor Hernani Hugo Gomes, 2930, Capim Macio, Natal/RN',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Doutor%20Hernani%20Hugo%20Gomes%202930%20Capim%20Macio%20Natal%20RN',
    area: '28,77 a 60,83 m²', profile: 'Studios, 1 e 2 quartos, com rooftop e vista para o mar', detail: '240 unidades em 24 pavimentos tipo',
    description: 'O Beach Class Natal fica no bairro de Capim Macio, em Natal, perto da Praia de Ponta Negra, do Morro do Careca e do Parque das Dunas. A torre reúne 240 unidades em 24 pavimentos tipo, entre studios e apartamentos de 1 e 2 quartos, para morar ou investir, com vistas privilegiadas. O rooftop concentra piscina adulto e infantil, hidromassagem, terraço coberto com vista panorâmica, espaço gourmet e salão de festas.',
    highlights: ['28,77 a 60,83 m²', '240 unidades', '24 pavimentos tipo', 'Rooftop com piscina e vista'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Capim Macio, Natal/RN'], ['Unidades', '240 apartamentos'], ['Garagem', '143 vagas']],
    technical: [
      ['Área do terreno', '2.776,90 m²'],
      ['Área construída', '17.336,73 m²'],
      ['Unidades', '240 unidades residenciais em 24 pavimentos tipo'],
      ['Studios', '120 de 28,77 m²; 24 de 29,39 m²; 24 de 29,82 m²; 24 de 29,98 m²'],
      ['1 quarto', '24 unidades de 43,09 m²'],
      ['2 quartos', '24 unidades de 60,83 m²'],
      ['Garagem', '143 vagas: 10 externas para visitantes (1 PNE), 106 rotativas, 24 vinculadas e 3 PNE; 9 vagas de moto rotativas'],
      ['Personalização', 'Serviços da MD Store para pisos, paredes, bancadas, metais e louças, sujeitos à disponibilidade'],
      ['Registro de incorporação', '3º CRI-Natal/RN, matrícula nº 71.084, registro R.5'],
      ['Material', 'Perspectivas e plantas ilustrativas, sujeitas a alterações'],
    ],
    amenities: ['Hall social com porte-cochère', 'Lobby e praça de encontros', 'Coliving e sala de reuniões', 'Espaço para call', 'Academia', 'Brinquedoteca', 'Bicicletário', 'Lavanderia coletiva', 'Minimarket', 'Piscina adulto no rooftop', 'Piscina infantil no rooftop', 'Hidromassagem', 'Terraço do rooftop', 'Terraço coberto com vista panorâmica', 'Espaço gourmet e salão de festas', 'Áreas comuns equipadas e mobiliadas'],
    security: ['Fechadura eletrônica nos apartamentos', 'Controle de acesso aos ambientes das áreas comuns', 'Controle automatizado de acesso de veículos e pedestres'],
    sustainability: ['Pontos para carregamento de carro elétrico'],
    projectTeam: ['Flávio Gois | Arquitetura', 'Takeda Design | Paisagismo', 'Poligonus | Ambientação'],
    gallery: [
      { src: natalPhotoFachadaTorreCompleta, titulo: 'Beach Class Natal - perspectiva da fachada da torre' },
      { src: natalPhotoFachadaDetalheComVistaMar, titulo: 'Perspectiva da fachada com vista para o mar' },
      { src: natalPhotoAcessoEntradaPrincipal, titulo: 'Perspectiva do acesso e da entrada principal' },
      { src: natalPhotoHallSocialRecepcao, titulo: 'Perspectiva do hall social e da recepção' },
      { src: natalPhotoLobbyEstar, titulo: 'Perspectiva do lobby e do estar' },
      { src: natalPhotoPracaDeEncontros, titulo: 'Perspectiva da praça de encontros' },
      { src: natalPhotoColivingSalaDeReunioes, titulo: 'Perspectiva do coliving e da sala de reuniões' },
      { src: natalPhotoMinimarket, titulo: 'Perspectiva do minimarket' },
      { src: natalPhotoLavanderiaColetiva, titulo: 'Perspectiva da lavanderia coletiva' },
      { src: natalPhotoBicicletario, titulo: 'Perspectiva do bicicletário' },
      { src: natalPhotoBrinquedoteca, titulo: 'Perspectiva da brinquedoteca' },
      { src: natalPhotoAcademiaVista01, titulo: 'Perspectiva da academia - vista 1' },
      { src: natalPhotoAcademiaVista02, titulo: 'Perspectiva da academia - vista 2' },
      { src: natalPhotoRooftopPiscinaVistaMar01, titulo: 'Perspectiva da piscina do rooftop com vista para o mar - vista 1' },
      { src: natalPhotoRooftopPiscinaVistaMar02, titulo: 'Perspectiva da piscina do rooftop com vista para o mar - vista 2' },
      { src: natalPhotoRooftopPiscinaVistaPanorama03, titulo: 'Perspectiva panorâmica da piscina do rooftop' },
      { src: natalPhotoTerracoRooftopExterno, titulo: 'Perspectiva do terraço externo do rooftop' },
      { src: natalPhotoTerracoCobertoVistaPanoramica, titulo: 'Perspectiva do terraço coberto com vista panorâmica' },
      { src: natalPhotoEspacoGourmetSalaoFestas, titulo: 'Perspectiva do espaço gourmet e do salão de festas' },
      { src: natalPhotoStudio2877m2AmbienteIntegrado, titulo: 'Perspectiva do Studio de 28,77 m²' },
      { src: natalPhotoStudio2982m2AmbienteIntegrado, titulo: 'Perspectiva do Studio de 29,82 m²' },
      { src: natalPhotoStudio2998m2AmbienteIntegrado, titulo: 'Perspectiva do Studio de 29,98 m²' },
      { src: natalPhotoApartamento1Quarto4309m2SalaCozinha, titulo: 'Perspectiva da sala e cozinha do apartamento de 1 quarto de 43,09 m²' },
      { src: natalPhotoApartamento1Quarto4309m2Suite, titulo: 'Perspectiva da suíte do apartamento de 1 quarto de 43,09 m²' },
      { src: natalPhotoApartamento2Quartos6083m2SalaCozinha, titulo: 'Perspectiva da sala e cozinha do apartamento de 2 quartos de 60,83 m²' },
      { src: natalPhotoApartamento2Quartos6083m2Suite, titulo: 'Perspectiva da suíte do apartamento de 2 quartos de 60,83 m²' },
      { src: natalPhotoApartamento2Quartos6083m2Quarto, titulo: 'Perspectiva do quarto do apartamento de 2 quartos de 60,83 m²' },
    ],
    floorPlans: [
      { src: natalPlanPavimentoTerreoImplantacao, titulo: 'Pavimento térreo - implantação' },
      { src: natalPlanPavimentoMezaninoImplantacao, titulo: 'Pavimento mezanino - implantação' },
      { src: natalPlanPavimentoRooftopImplantacao, titulo: 'Pavimento rooftop - implantação' },
      { src: natalPlanPavimentoTipoDistribuicaoUnidades, titulo: 'Pavimento tipo - distribuição das unidades' },
      { src: natalPlanPlantaStudio2877m2E2939m2Terminacoes04A09, titulo: 'Studios 28,77 m² e 29,39 m² - terminações 04 a 09' },
      { src: natalPlanPlantaStudio2982m2Terminacao02, titulo: 'Studio 29,82 m² - terminação 02' },
      { src: natalPlanPlantaStudio2998m2Terminacao01, titulo: 'Studio 29,98 m² - terminação 01' },
      { src: natalPlanPlantaApartamento1Quarto4309m2Terminacao10, titulo: 'Apartamento de 1 quarto 43,09 m² - terminação 10' },
      { src: natalPlanPlantaApartamento2Quartos6083m2Terminacao03, titulo: 'Apartamento de 2 quartos 60,83 m² - terminação 03' },
      { src: natalPlanReferenciaPavimentoTerreoComLegenda, titulo: 'Pavimento térreo com legenda (página de referência)' },
      { src: natalPlanReferenciaMezaninoComLegenda, titulo: 'Pavimento mezanino com legenda (página de referência)' },
      { src: natalPlanReferenciaRooftopComLegenda, titulo: 'Pavimento rooftop com legenda (página de referência)' },
      { src: natalPlanReferenciaPavimentoTipoComMetragens, titulo: 'Pavimento tipo com metragens (página de referência)' },
      { src: natalPlanReferenciaPlantaStudio2877m2E2939m2, titulo: 'Studios 28,77 m² e 29,39 m² (página de referência)' },
      { src: natalPlanReferenciaPlantaStudio2982m2, titulo: 'Studio 29,82 m² (página de referência)' },
      { src: natalPlanReferenciaPlantaStudio2998m2, titulo: 'Studio 29,98 m² (página de referência)' },
      { src: natalPlanReferenciaPlanta1Quarto4309m2, titulo: 'Apartamento de 1 quarto 43,09 m² (página de referência)' },
      { src: natalPlanReferenciaPlanta2Quartos6083m2, titulo: 'Apartamento de 2 quartos 60,83 m² (página de referência)' },
    ],
    locationImages: [
      { src: natalLocEntornoCapimMacioParqueDasDunas, titulo: 'Entorno: Capim Macio e Parque das Dunas' },
      { src: natalLocEntornoPontaNegraVistaAerea, titulo: 'Entorno: vista aérea de Ponta Negra' },
      { src: natalLocPontaNegraVistaAereaMarMorroDoCareca, titulo: 'Entorno: Ponta Negra, mar e Morro do Careca' },
      { src: natalLocPraiaPorDoSolContexto, titulo: 'Entorno: praia ao pôr do sol' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-ponta-negra', name: 'Beach Class Ponta Negra', image: pontaNegraCover,
    city: 'Natal, RN', neighborhood: 'Ponta Negra', locationTitle: 'Ponta Negra - Natal/RN',
    address: 'Ponta Negra, Natal/RN, próximo à Avenida Engenheiro Roberto Freire',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Ponta%20Negra%20Natal%20RN',
    area: '37,90 a 97,93 m²', profile: 'Studios e 2 quartos, com Garden e mezanino', detail: '140 unidades em bloco único',
    description: 'O Beach Class Ponta Negra fica no bairro de Ponta Negra, em Natal, a poucos metros do mar e perto do Morro do Careca. O projeto, de escala boutique, reúne 140 unidades em um bloco único, entre studios e apartamentos de 2 quartos, com opções Garden e mezanino. O lazer inclui piscinas, pool bar, spa, academia, sala multiuso com deck de yoga, salão de festas e minimarket.',
    highlights: ['37,90 a 97,93 m²', '140 unidades em bloco único', 'Opções Garden e mezanino', 'A poucos metros do mar'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Ponta Negra, Natal/RN'], ['Unidades', '140 unidades privativas'], ['Garagem', '67 vagas']],
    technical: [
      ['Área do terreno', '6.600,00 m²'],
      ['Composição', 'Bloco único habitacional, com quiosque da piscina e pool bar como blocos de apoio'],
      ['Unidades', '140 unidades privativas: 46 no pavimento Garden, 47 no térreo/tipo 01 e 47 no lobby/tipo 02'],
      ['Tipologias', 'Studios e apartamentos de 2 quartos, com opções Garden e mezanino'],
      ['Apartamento 244', '65,16 m², em dois pavimentos'],
      ['Studio 44', '37,90 m² + Garden de 16,50 m²'],
      ['Studio 38', '40,90 m² + Garden de 13,50 m²'],
      ['2 quartos (apto 07)', '76,07 m² + Garden de 17,23 m²'],
      ['Garagem', '67 vagas: 55 rotativas, 6 vinculadas, 4 para idosos e 2 PNE'],
      ['Material', 'Perspectivas ilustrativas; Garden informado separadamente da área interna'],
    ],
    amenities: ['Piscinas, com piscina infantil', 'Pool bar', 'Pool house', 'Spa', 'Academia', 'Sala multiuso e deck de yoga', 'Salão de festas com copa', 'Espaços gourmet e quiosques', 'Lounge coberto e hall social', 'Daybeds e espaço happy hour', 'Pet place e hortas', 'Salão de beleza', 'Lavanderia', 'Minimarket', 'Bicicletário', 'Áreas comuns equipadas e mobiliadas'],
    security: ['Fechaduras eletrônicas nas portas de entrada dos apartamentos', 'Controle automatizado de acesso de veículos'],
    sustainability: [],
    projectTeam: ['Takeda Design | Arquitetura e paisagismo', 'Felipe Bezerra | Arquitetura'],
    gallery: [
      { src: pontaNegraPhoto01AcessoPrincipalFachada, titulo: 'Beach Class Ponta Negra - perspectiva do acesso principal' },
      { src: pontaNegraPhoto02LobbyRecepcao, titulo: 'Perspectiva do lobby e da recepção' },
      { src: pontaNegraPhoto03FachadaDosApartamentos, titulo: 'Perspectiva da fachada dos apartamentos' },
      { src: pontaNegraPhoto04PiscinasVistaLongitudinal, titulo: 'Perspectiva longitudinal das piscinas' },
      { src: pontaNegraPhoto05PiscinasVistaSuperior, titulo: 'Perspectiva superior das piscinas' },
      { src: pontaNegraPhoto06FachadaEPiscina, titulo: 'Perspectiva da fachada e da piscina' },
      { src: pontaNegraPhoto07PiscinaDeckEspreguicadeiras, titulo: 'Perspectiva da piscina e do deck com espreguiçadeiras' },
      { src: pontaNegraPhoto08SpaSalaDeMassagem, titulo: 'Perspectiva da sala de massagem do spa' },
      { src: pontaNegraPhoto09SpaAreaExternaDeDescanso, titulo: 'Perspectiva da área externa de descanso do spa' },
      { src: pontaNegraPhoto10Academia, titulo: 'Perspectiva da academia' },
      { src: pontaNegraPhoto11SalaMultiusoYoga, titulo: 'Perspectiva da sala multiuso e de yoga' },
      { src: pontaNegraPhoto12PoolBar, titulo: 'Perspectiva do pool bar' },
      { src: pontaNegraPhoto13PiscinasPaisagismo, titulo: 'Perspectiva das piscinas e do paisagismo' },
      { src: pontaNegraPhoto14SalaoDeFestas, titulo: 'Perspectiva do salão de festas' },
      { src: pontaNegraPhoto15Minimarket, titulo: 'Perspectiva do minimarket' },
      { src: pontaNegraPhoto16Apartamento244QuartoPavimentoInferior, titulo: 'Perspectiva do quarto do apartamento 244 - pavimento inferior' },
      { src: pontaNegraPhoto17Apartamento244MezaninoTerraco, titulo: 'Perspectiva do mezanino e terraço do apartamento 244' },
      { src: pontaNegraPhoto18Apartamento44StudioComGardenAmbiente, titulo: 'Perspectiva do Studio 44 com Garden' },
      { src: pontaNegraPhoto19Apartamento38StudioComGardenAmbiente, titulo: 'Perspectiva do Studio 38 com Garden' },
      { src: pontaNegraPhoto20Apartamento07SalaLiving, titulo: 'Perspectiva da sala living do apartamento 07' },
      { src: pontaNegraPhoto21Apartamento07Quarto, titulo: 'Perspectiva do quarto do apartamento 07' },
      { src: pontaNegraPhoto22VistaAereaEmpreendimentoEPraia, titulo: 'Perspectiva aérea do empreendimento e da praia' },
    ],
    floorPlans: [
      { src: pontaNegraPlan01ImplantacaoPavimentoGardenLazer, titulo: 'Pavimento Garden - implantação do lazer' },
      { src: pontaNegraPlan02ImplantacaoPavimentoGardenUnidades, titulo: 'Pavimento Garden - implantação das unidades' },
      { src: pontaNegraPlan03ImplantacaoPavimentoTipo01, titulo: 'Pavimento tipo 01 - implantação' },
      { src: pontaNegraPlan04ImplantacaoPavimentoTipo02, titulo: 'Pavimento tipo 02 - implantação' },
      { src: pontaNegraPlan05ImplantacaoMezanino, titulo: 'Mezanino - implantação' },
      { src: pontaNegraPlan06PlantaApartamento2446516m2PavimentoInferior, titulo: 'Apartamento 244 - 65,16 m² - pavimento inferior' },
      { src: pontaNegraPlan07PlantaApartamento2446516m2PavimentoSuperior, titulo: 'Apartamento 244 - 65,16 m² - pavimento superior' },
      { src: pontaNegraPlan08PlantaApartamento44Studio3790m2Garden1650m2, titulo: 'Apartamento 44 - Studio 37,90 m² com Garden de 16,50 m²' },
      { src: pontaNegraPlan09PlantaApartamento38Studio4090m2Garden1350m2, titulo: 'Apartamento 38 - Studio 40,90 m² com Garden de 13,50 m²' },
      { src: pontaNegraPlan10PlantaApartamento072Quartos7607m2Garden1723m2, titulo: 'Apartamento 07 - 2 quartos 76,07 m² com Garden de 17,23 m²' },
      { src: pontaNegraPlan11ReferenciaPavimentoGardenAreasDeLazerELegenda, titulo: 'Pavimento Garden - áreas de lazer e legenda (página de referência)' },
      { src: pontaNegraPlan12ReferenciaPavimentoGardenAreasDasUnidades, titulo: 'Pavimento Garden - áreas das unidades (página de referência)' },
      { src: pontaNegraPlan13ReferenciaPavimentoTipo01AreasDasUnidades, titulo: 'Pavimento tipo 01 - áreas das unidades (página de referência)' },
      { src: pontaNegraPlan14ReferenciaPavimentoTipo02AreasDasUnidades, titulo: 'Pavimento tipo 02 - áreas das unidades (página de referência)' },
      { src: pontaNegraPlan15ReferenciaApartamento244PlantasEMetragem, titulo: 'Apartamento 244 - plantas e metragem (página de referência)' },
      { src: pontaNegraPlan16ReferenciaStudio44Metragens, titulo: 'Studio 44 - metragens (página de referência)' },
      { src: pontaNegraPlan17ReferenciaStudio38Metragens, titulo: 'Studio 38 - metragens (página de referência)' },
      { src: pontaNegraPlan18ReferenciaApartamento07Metragens, titulo: 'Apartamento 07 - metragens (página de referência)' },
    ],
    locationImages: [
      { src: pontaNegraLoc01PraiaDePontaNegraVistaPanoramica, titulo: 'Entorno: vista panorâmica da Praia de Ponta Negra' },
      { src: pontaNegraLoc02VistaAereaDaLocalizacaoDoTerreno, titulo: 'Vista aérea da localização do terreno' },
      { src: pontaNegraLoc03MapaLocalizacaoComReferencias, titulo: 'Mapa de localização com referências' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-porto-das-dunas', name: 'Beach Class Porto das Dunas', image: portoDasDunasCover,
    city: 'Porto das Dunas, CE', neighborhood: 'Porto das Dunas', locationTitle: 'Porto das Dunas - Ceará',
    address: 'Porto das Dunas, Ceará, próximo a Fortaleza',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Porto%20das%20Dunas%20CE',
    area: '29 a 117 m²', profile: 'Studios, quarto e sala, 2 e 3 quartos, com opções Garden', detail: '321 unidades em 7 blocos',
    description: 'O Beach Class Porto das Dunas é um empreendimento em região de praia, em Porto das Dunas, perto de Fortaleza, com proposta de moradia, estadia e investimento. O conjunto reúne sete blocos e 321 unidades, com studios, quarto e sala e apartamentos de 2 e 3 quartos, além de opções Garden com área externa privativa. A estrutura inclui complexo aquático com ilhas de hidromassagem, restaurante com vista para o mar, spa com sauna, academia, quadras e acesso à praia, com cerca de 2.690 m² de área de preservação ambiental.',
    highlights: ['29 a 117 m²', '321 unidades em 7 blocos', 'Complexo aquático e acesso à praia', 'Cerca de 2.690 m² de preservação ambiental'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Porto das Dunas, CE'], ['Unidades', '321 apartamentos'], ['Garagem', '393 vagas rotativas']],
    technical: [
      ['Área do terreno', '52.004,97 m²'],
      ['Área privativa total', '17.211,88 m²'],
      ['Área de preservação', '2.691,83 m²'],
      ['Blocos', '7 blocos residenciais (A a G), com térreo + 3 pavimentos superiores'],
      ['Unidades', '321 unidades residenciais: 96 nos blocos A a D e 225 nos blocos E a G'],
      ['Blocos A a D', '3 quartos de 80,47 e 89,22 m²; 2 quartos de 67,28 m²; Garden de 2 quartos (97,67 m²) e de 3 quartos (116,67 m²)'],
      ['Blocos E a G', 'Studios de 29,32 m²; quarto e sala de 41,50 m²; 2 quartos de 69,19 m²; Gardens de studio (38,73 m²), quarto e sala (58,94 m²) e 2 quartos (95,61 m²)'],
      ['Garagem', '393 vagas rotativas: direito de uso de 2 vagas para 2 e 3 quartos e 1 vaga para studios e quarto e sala, conforme vacância'],
      ['Restaurante', 'Espaço equipado, exceto equipamentos de cozinha'],
      ['Material', 'Perspectivas ilustrativas; áreas e Gardens conforme a ficha técnica e o documento contratual'],
    ],
    amenities: ['Complexo aquático e piscinas', 'Piscinas infantis com toboáguas', 'Ilhas de hidromassagem e espaço zen', 'Restaurante e lounge com vista para o mar', 'Espaço parrilla e churrasqueiras', 'Recepção social', 'Praça Mar com acesso à praia', 'Academia', 'Spa com sauna', 'Salas de massagem', 'Salão de beleza', 'Quadra de beach tênis', 'Quadra poliesportiva', 'Playground e brinquedoteca', 'Beach park infantil', 'Pet place e pet shower', 'Bicicletários', 'Guarderia de materiais de praia e pranchas de surf', 'Lavanderia compartilhada', 'Espaço para minimarket', 'Concierge para check-in e check-out', 'Wi-Fi nas áreas comuns'],
    security: ['Fechadura eletrônica nos acessos sociais dos apartamentos', 'Guarita com controle de veículos por tag', 'Eclusa de serviço com reconhecimento facial', 'Sala de monitoramento de câmeras'],
    sustainability: ['Cerca de 2.690 m² de área de preservação ambiental', 'Irrigação automática dos jardins', 'Estação de tratamento de esgoto com reúso de água na irrigação', 'Aproveitamento da água das condensadoras para irrigação', 'Iluminação LED nas áreas comuns', 'Iluminação externa automatizada e sensores de presença', '10 totens de carregamento de veículos elétricos', '15 bicicletas compartilhadas', 'Coleta seletiva', 'Bacias de acionamento duplo e metais redutores de vazão', 'Medição individualizada de água'],
    projectTeam: [],
    gallery: [
      { src: portoDasDunasPhotoPiscinasVistaSuperiorHidromassagem, titulo: 'Beach Class Porto das Dunas - perspectiva das piscinas com hidromassagem' },
      { src: portoDasDunasPhotoPiscinaComplexoAquaticoVistaInterna, titulo: 'Perspectiva do complexo aquático' },
      { src: portoDasDunasPhotoPiscinaInfantilComToboaguas, titulo: 'Perspectiva da piscina infantil com toboáguas' },
      { src: portoDasDunasPhotoEspacoZenHidromassagemERedario, titulo: 'Perspectiva do espaço zen com hidromassagem e redário' },
      { src: portoDasDunasPhotoPracaMarAcessoPraiaPaisagismo, titulo: 'Perspectiva da Praça Mar e do acesso à praia' },
      { src: portoDasDunasPhotoLoungeRestauranteVistaParaMar, titulo: 'Perspectiva do lounge e restaurante com vista para o mar' },
      { src: portoDasDunasPhotoRestauranteFachadaETerraco, titulo: 'Perspectiva da fachada e do terraço do restaurante' },
      { src: portoDasDunasPhotoEspacoParrillaChurrasqueira, titulo: 'Perspectiva do espaço parrilla e churrasqueira' },
      { src: portoDasDunasPhotoEntradaPortariaEAcessoVeiculos, titulo: 'Perspectiva da entrada, portaria e acesso de veículos' },
      { src: portoDasDunasPhotoRecepcaoSocialAmbienteInterno, titulo: 'Perspectiva da recepção social' },
      { src: portoDasDunasPhotoAcademiaEquipada, titulo: 'Perspectiva da academia equipada' },
      { src: portoDasDunasPhotoSpaComSaunaEPiscina, titulo: 'Perspectiva do spa com sauna e piscina' },
      { src: portoDasDunasPhotoSalaDeMassagem, titulo: 'Perspectiva da sala de massagem' },
      { src: portoDasDunasPhotoQuadraBeachTenisEBlocoWellness, titulo: 'Perspectiva da quadra de beach tênis e do bloco wellness' },
      { src: portoDasDunasPhotoPlaygroundAreaInfantil, titulo: 'Perspectiva do playground e da área infantil' },
      { src: portoDasDunasPhotoBrinquedotecaBlocoSocial, titulo: 'Perspectiva da brinquedoteca do bloco social' },
      { src: portoDasDunasPhotoStudio29m2AmbienteIntegradoEVaranda, titulo: 'Perspectiva do Studio de 29 m² com varanda' },
      { src: portoDasDunasPhotoApartamentoQuartoSala41m2AmbienteIntegrado, titulo: 'Perspectiva do apartamento quarto e sala de 41 m²' },
      { src: portoDasDunasPhotoApartamento2Quartos67m2SalaECozinha, titulo: 'Perspectiva da sala e cozinha do apartamento de 2 quartos de 67 m²' },
      { src: portoDasDunasPhotoApartamento2Quartos69m2VarandaGourmet, titulo: 'Perspectiva da varanda gourmet do apartamento de 2 quartos de 69 m²' },
      { src: portoDasDunasPhotoApartamento3Quartos80m2SalaEVaranda, titulo: 'Perspectiva da sala e varanda do apartamento de 3 quartos de 80 m²' },
      { src: portoDasDunasPhotoApartamento3Quartos80m2Suite, titulo: 'Perspectiva da suíte do apartamento de 3 quartos de 80 m²' },
      { src: portoDasDunasPhotoApartamentoGarden2QuartosVarandaEPiscinas, titulo: 'Perspectiva do apartamento Garden de 2 quartos com varanda e vista das piscinas' },
      { src: portoDasDunasPhotoApartamentoGarden3QuartosSala, titulo: 'Perspectiva da sala do apartamento Garden de 3 quartos' },
      { src: portoDasDunasPhotoApartamentoGardenColuna6AreaExterna, titulo: 'Perspectiva da área externa do apartamento Garden da coluna 6' },
    ],
    floorPlans: [
      { src: portoDasDunasPlanImplantacaoGeralBlocosEAcessos, titulo: 'Implantação geral - blocos e acessos' },
      { src: portoDasDunasPlanImplantacaoTrecho01FrenteMarELazer, titulo: 'Implantação - frente mar e lazer' },
      { src: portoDasDunasPlanImplantacaoTrecho02WellnessEEsportes, titulo: 'Implantação - wellness e esportes' },
      { src: portoDasDunasPlanImplantacaoTrecho03BlocosEPiscinas, titulo: 'Implantação - blocos e piscinas' },
      { src: portoDasDunasPlanPavimentoTerreoBlocosABCD2e3Quartos, titulo: 'Blocos A, B, C e D - pavimento térreo (2 e 3 quartos)' },
      { src: portoDasDunasPlanPavimentoTipo1a3BlocosABCD, titulo: 'Blocos A, B, C e D - pavimentos tipo 1º ao 3º' },
      { src: portoDasDunasPlanPavimentoTerreoBlocosEFG, titulo: 'Blocos E, F e G - pavimento térreo' },
      { src: portoDasDunasPlanPavimentoTipo1a3BlocosEFG, titulo: 'Blocos E, F e G - pavimentos tipo 1º ao 3º' },
      { src: portoDasDunasPlanPlantaStudio2932m2, titulo: 'Studio 29,32 m²' },
      { src: portoDasDunasPlanPlantaGardenStudio3873m2, titulo: 'Studio Garden 38,73 m²' },
      { src: portoDasDunasPlanPlantaQuartoSala4150m2, titulo: 'Quarto e sala 41,50 m²' },
      { src: portoDasDunasPlanPlantaGardenQuartoSala5894m2, titulo: 'Quarto e sala Garden 58,94 m²' },
      { src: portoDasDunasPlanPlanta2Quartos6728m2Colunas1235, titulo: '2 quartos 67,28 m² - colunas 1, 2, 3 e 5' },
      { src: portoDasDunasPlanPlanta2Quartos6919m2Colunas1011, titulo: '2 quartos 69,19 m² - colunas 10 e 11' },
      { src: portoDasDunasPlanPlantaGarden2Quartos9561m2, titulo: '2 quartos Garden 95,61 m²' },
      { src: portoDasDunasPlanPlantaGarden2Quartos9767m2Colunas12345, titulo: '2 quartos Garden 97,67 m² - colunas 1 a 5' },
      { src: portoDasDunasPlanPlanta3Quartos8047m2Coluna6, titulo: '3 quartos 80,47 m² - coluna 6' },
      { src: portoDasDunasPlanPlanta3Quartos8922m2Coluna4, titulo: '3 quartos 89,22 m² - coluna 4' },
      { src: portoDasDunasPlanPlantaGarden3Quartos11667m2Coluna6, titulo: '3 quartos Garden 116,67 m² - coluna 6' },
    ],
    locationImages: [
      { src: portoDasDunasLocMapaRegiaoPortoDasDunasFortaleza, titulo: 'Mapa da região de Porto das Dunas e Fortaleza' },
    ],
  }),
  createDevelopment({
    slug: 'unica-cardeal', name: 'Única Cardeal', image: unicaCardealCover,
    city: 'Salvador, BA', neighborhood: 'Federação', locationTitle: 'Avenida Cardeal da Silva - Salvador/BA',
    address: 'Avenida Cardeal da Silva, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida%20Cardeal%20da%20Silva%20Salvador%20BA',
    area: '41,1 a 63,64 m²', profile: '1 ou 2 quartos, com opções Garden', detail: '4 torres e mais de 1.000 m² de lazer',
    description: 'O Única Cardeal é um empreendimento residencial na Avenida Cardeal da Silva, em Salvador, com quatro torres, apartamentos compactos e opções Garden. O projeto reúne lazer, praticidade e localização estratégica, próximo a praias, serviços, hospitais, escolas e universidades.',
    highlights: ['41,1 a 63,64 m²', '1 ou 2 quartos', '4 torres', 'Mais de 1.000 m² de lazer'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Avenida Cardeal da Silva'], ['Torres', 'Essenza, Move, Flow e Urban'], ['Lazer', 'Mais de 1.000 m²']],
    technical: [
      ['Área do terreno', '10.259,00 m²'],
      ['Torres', '4: Essenza, Move, Flow e Urban'],
      ['Pavimentos', 'Térreo + 20 pavimentos'],
      ['Tipologias', 'Apto Living de 44,7 m²; Apto Home de 41,1 m²'],
      ['Unidades Garden', 'Living Garden de 63,64 m² e Home Garden de 58,99 m²'],
      ['Vagas', 'Vagas rotativas'],
      ['Diferenciais', 'Laje para ar-condicionado e mais de 1.000 m² de áreas de lazer'],
      ['Material', 'Preliminar para treinamento de corretores; imagens ilustrativas'],
    ],
    amenities: ['Salão de festas', 'Brinquedoteca', 'Sala de jogos', 'Academia', 'Parque infantil', 'Espaço gourmet', 'Minicampo', 'Fitness externo', 'Piscina adulto e infantil com prainha', 'Gourmet da piscina com churrasqueira', 'Praça', 'Redário', 'Pet place'],
    security: ['Guarita com controle de acesso', 'Vagas rotativas'],
    sustainability: ['Soluções sustentáveis', 'Referência ao IPTU Verde'],
    projectTeam: [],
    gallery: [
      { src: unicaCardealCover, titulo: 'Única Cardeal - vista geral do empreendimento' },
      { src: unicaCardealTowers, titulo: 'Fachada das torres do Única Cardeal' },
      { src: unicaCardealAccess, titulo: 'Acesso ao empreendimento' },
      { src: unicaCardealSeaView, titulo: 'Vista do empreendimento e do mar' },
      { src: unicaCardealLeisureAerial, titulo: 'Área de lazer - vista aérea' },
      { src: unicaCardealPool, titulo: 'Piscina adulto e infantil com prainha' },
      { src: unicaCardealGourmet, titulo: 'Espaço gourmet' },
      { src: unicaCardealMinicampo, titulo: 'Minicampo' },
      { src: unicaCardealOutdoorFitness, titulo: 'Fitness externo' },
      { src: unicaCardealPlayground, titulo: 'Parque infantil' },
      { src: unicaCardealPartyRoom, titulo: 'Salão de festas' },
      { src: unicaCardealPlayroom, titulo: 'Brinquedoteca' },
      { src: unicaCardealGamesRoom, titulo: 'Sala de jogos' },
      { src: unicaCardealAcademy, titulo: 'Academia' },
      { src: unicaCardealLiving, titulo: 'Living do apartamento Living' },
      { src: unicaCardealLivingBedroom, titulo: 'Quarto do apartamento Living' },
      { src: unicaCardealBalcony, titulo: 'Varanda do apartamento Living' },
      { src: unicaCardealHomeLiving, titulo: 'Sala do apartamento Home' },
      { src: unicaCardealHomeBedroom, titulo: 'Quarto de casal do apartamento Home' },
      { src: unicaCardealHomeSecondBedroom, titulo: 'Segundo quarto do apartamento Home' },
      { src: unicaCardealLivingSecondBedroom, titulo: 'Segundo quarto do apartamento Living' },
      { src: unicaCardealVideo, type: 'video', poster: unicaCardealCover, titulo: 'Vídeo do Única Cardeal' },
    ],
    floorPlans: [
      { src: unicaCardealGeneralPlan, titulo: 'Implantação geral do empreendimento' },
      { src: unicaCardealLeisurePlan, titulo: 'Implantação do lazer' },
      { src: unicaCardealTowersPlan, titulo: 'Implantação das torres' },
      { src: unicaCardealGroundPlan, titulo: 'Pavimento térreo' },
      { src: unicaCardealTypicalFloorPlan, titulo: 'Pavimento tipo' },
      { src: unicaCardealHomePlan, titulo: 'Planta apartamento Home - 41,1 m²' },
      { src: unicaCardealLivingPlan, titulo: 'Planta apartamento Living - 44,7 m²' },
      { src: unicaCardealHomeGardenPlan, titulo: 'Planta Home Garden - 58,99 m²' },
      { src: unicaCardealLivingGardenPlan, titulo: 'Planta Living Garden - 63,64 m²' },
    ],
  }),
  createDevelopment({
    slug: 'mood-colina', name: 'Mood Colina', image: moodColinaCover,
    city: 'Salvador, BA', neighborhood: 'Patamares / Colina A', locationTitle: 'Patamares, próximo à praia',
    address: 'Região de Patamares / Colina A, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Patamares%20Colina%20A%20Salvador%20BA',
    area: '57,65 a 153,25 m²', profile: '2 ou 3 quartos, com opções Garden', detail: '258 apartamentos em 2 torres',
    description: 'O Mood Colina é um empreendimento residencial em Patamares, Salvador, próximo à praia, com duas torres e estrutura completa de lazer. O projeto valoriza a vista para o mar, a ventilação natural, a iluminação e a integração com a paisagem.',
    highlights: ['57,65 a 153,25 m²', '2 ou 3 quartos', '258 apartamentos', '2 torres em Patamares'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Patamares / Colina A'], ['Unidades', '258 apartamentos'], ['Garagem', '1 vaga por apartamento']],
    technical: [
      ['Área do terreno', '5.305,31 m²'],
      ['Torres', '2 torres'],
      ['Pavimentos', 'Térreo + 21 pavimentos tipo'],
      ['Unidades por andar', '6 apartamentos por andar'],
      ['Unidades', '258 apartamentos'],
      ['Tipologias', '3 quartos com 1 suíte de 66,90 m²; 2 quartos com 1 suíte de 57,65 m²'],
      ['Opções Garden', '3 quartos de 136,22 m², 153,25 m², 148,54 m² e 138,31 m²; 2 quartos de 117,82 m² e 131,27 m²'],
      ['Garagem', '1 vaga de estacionamento por apartamento'],
      ['Registro de incorporação', 'R-1 da matrícula nº 71.278 do 7º Ofício de Registro de Imóveis de Salvador'],
      ['Material', 'Estudo preliminar sujeito a alteração; imagens ilustrativas e promocionais'],
    ],
    amenities: ['Guarita com clausura', 'E-commerce', 'Lobby', 'Salão de festas com terraço', 'Brinquedoteca com área externa', 'Mini Market', 'Coworking', 'Lavanderia', 'Academia', 'Sala funcional', 'Salão de jogos', 'Pet Care', 'Pet Place', 'Bicicletário', 'Piscina com deck molhado e raia de 20 m', 'Piscina infantil', 'Gourmet da piscina', 'Parque infantil', 'Lounges de convivência', 'Horta', 'Quadra recreativa', 'Apoio da quadra'],
    security: ['Guarita com clausura', '1 vaga de estacionamento por apartamento'],
    sustainability: ['Certificação IPTU Verde indicada no material', 'Ventilação natural e integração com a paisagem'],
    projectTeam: [],
    gallery: [
      { src: moodColinaCover, titulo: 'Mood Colina - vista geral do empreendimento' },
      { src: moodColinaAccess, titulo: 'Acesso ao empreendimento' },
      { src: moodColinaLeisureAerial, titulo: 'Área de lazer - vista aérea' },
      { src: moodColinaPoolAerial, titulo: 'Piscina - vista aérea' },
      { src: moodColinaPool, titulo: 'Piscina com deck molhado e raia de 20 m' },
      { src: moodColinaCourt, titulo: 'Quadra recreativa' },
      { src: moodColinaPlayground, titulo: 'Parque infantil' },
      { src: moodColinaLiving, titulo: 'Sala do apartamento de 66,90 m²' },
      { src: moodColinaSuite, titulo: 'Suíte do apartamento de 66,90 m²' },
      { src: moodColinaBedroom, titulo: 'Quarto do apartamento de 57,65 m²' },
      { src: moodColinaOrlaView, titulo: 'Vista da orla de Patamares' },
    ],
    floorPlans: [
      { src: moodColinaGeneralPlan, titulo: 'Implantação geral do empreendimento' },
      { src: moodColinaLeisurePlan, titulo: 'Pavimento de lazer' },
      { src: moodColinaTypicalFloorPlan, titulo: 'Pavimento tipo' },
      { src: moodColinaComfortExpandedPlan, titulo: 'Planta Comfort - 66,90 m² - 2 quartos com sala ampliada' },
      { src: moodColinaComfortPlan, titulo: 'Planta Comfort - 66,90 m² - 3 quartos' },
      { src: moodColinaSmartPlan, titulo: 'Planta Smart - 57,65 m² - 2 quartos' },
    ],
  }),
  createDevelopment({
    slug: 'mood-club', name: 'Mood Club', image: moodClubCover,
    city: 'Salvador, BA', neighborhood: 'Costa Azul', locationTitle: 'Costa Azul, próximo à Av. Professor Magalhães Neto',
    address: 'Rua Arthur de Azevedo Machado, Costa Azul, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Arthur%20de%20Azevedo%20Machado%20Costa%20Azul%20Salvador%20BA',
    area: '53,30 a 90,17 m²', profile: 'Apartamentos de 2 ou 3 quartos, com opções Garden', detail: '522 apartamentos em 3 torres',
    description: 'O Mood Club é um empreendimento residencial em Costa Azul, Salvador, com proposta de encontro, lazer e bem-estar. O material disponível o identifica como estudo preliminar sujeito a alterações.',
    highlights: ['53,30 e 65,59 m²', '2 ou 3 quartos', 'Opções Garden', '3 torres em Costa Azul'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Costa Azul'], ['Unidades', '522 apartamentos (estudo preliminar)'], ['Garagem', '535 vagas indicadas no Deck Park']],
    technical: [
      ['Torres', '3 torres residenciais: A, B e C'],
      ['Pavimentos', 'Térreo + 21 pavimentos tipo'],
      ['Unidades', '522 apartamentos, 174 por torre'],
      ['Tipologias', '53,30 m² com 2 quartos; 65,59 m² com 3 quartos'],
      ['Opções Garden', '79,63 m², 90,00 m² e 90,17 m²'],
      ['Garagem', '535 vagas indicadas no Deck Park'],
      ['Material', 'Estudo preliminar sujeito a alterações'],
    ],
    amenities: ['Piscina com raia de 20 m e piscina infantil', 'Área gourmet', 'Playground', 'Salão de festas com terraço', 'Pet place e Pet Care', 'Academia', 'Lavanderia', 'Coworking', 'Minimarket', 'Salão de jogos', 'Brinquedoteca', 'Bicicletário', 'Quadra recreativa'],
    security: [], sustainability: [], projectTeam: [],
    gallery: [
      { src: moodClubCover, titulo: 'Mood Club - acesso principal' },
      { src: moodClubAccess, titulo: 'Acesso principal do empreendimento' },
      { src: moodClubGarden, titulo: 'Unidade Garden - área externa' },
      { src: moodClubComfortLiving, titulo: 'Living do apartamento Comfort - 65,59 m²' },
      { src: moodClubSmartLiving, titulo: 'Living do apartamento Smart - 53,30 m²' },
    ],
    floorPlans: [
      { src: moodClubSitePlan, titulo: 'Implantação no terreno' },
      { src: moodClubGroundPlan, titulo: 'Implantação do térreo' },
      { src: moodClubLeisurePlan, titulo: 'Pavimento térreo - lazer e serviços' },
      { src: moodClubGardenPlan, titulo: 'Pavimento Garden - Torre A' },
      { src: moodClubTypicalPlan, titulo: 'Pavimento tipo - Torre A' },
      { src: moodClubComfortPlan, titulo: 'Planta Comfort - 65,59 m² - 3 quartos' },
      { src: moodClubSmartPlan, titulo: 'Planta Smart - 53,30 m² - 2 quartos' },
    ],
    locationImages: [
      { src: moodClubAerialLocation, titulo: 'Vista aérea da localização do terreno' },
      { src: moodClubLocationMap, titulo: 'Mapa de localização e pontos próximos' },
    ],
  }),
  createDevelopment({
    slug: 'mood-costa-azul', name: 'Mood Costa Azul', image: moodCostaAzulCover,
    city: 'Salvador, BA', neighborhood: 'Costa Azul', locationTitle: 'Aproximadamente 170 m da praia',
    address: 'Rua Professor Isaías Alves de Almeida, 201 - Costa Azul, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Professor%20Isaias%20Alves%20de%20Almeida%20201%20Costa%20Azul%20Salvador%20BA',
    area: '73 a 100 m², com opções Garden', profile: 'Apartamentos de 3 quartos e opções de sala ampliada', detail: '239 unidades em 2 torres',
    description: 'O Mood Costa Azul reúne duas torres residenciais no bairro Costa Azul, a aproximadamente 170 metros da praia. O projeto combina áreas de lazer, vista para o mar e plantas de 73, 80 e 100 m².',
    highlights: ['73, 80 e 100 m²', '2 torres residenciais', '239 unidades', 'Aproximadamente 170 m da praia'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Costa Azul'], ['Unidades', '239 apartamentos'], ['Garagem', '407 vagas para automóveis']],
    technical: [
      ['Área do terreno', '5.438,84 m²'],
      ['Torres', 'Torre Coral (A), com 19 pavimentos tipo, e Torre Brisa (B), com 20 pavimentos tipo'],
      ['Unidades', '239 apartamentos, com 6 unidades por andar'],
      ['Tipologias', '73 m² com 3 quartos; 80 m² com 3 quartos; 100 m² com 3 quartos e home office'],
      ['Opções de planta', 'Opções de sala ampliada para as tipologias de 73, 80 e 100 m²'],
      ['Apartamentos Garden', '5 unidades Garden indicadas no material'],
      ['Vagas', '407 vagas para automóveis e 11 vagas para motos'],
      ['Sustentabilidade', 'Certificação IPTU Verde indicada no material'],
    ],
    amenities: ['Piscina com borda infinita e vista para o mar', 'Piscina infantil', 'Prainha e solário', 'Academia com vista para o mar', 'Coworking', 'Salão de festas', 'Salão de festas infantil', 'Espaço gourmet', 'Quadra recreativa', 'Quiosque da piscina', 'Playground', 'Brinquedoteca', 'Salão de jogos', 'Pet Care e Pet Place', 'Horta', 'Lavanderia', 'Minimarket', 'Bicicletário', 'Sala de delivery e e-commerce'],
    security: [], sustainability: ['Certificação IPTU Verde indicada no material.'],
    projectTeam: ['Carlos Campelo | Arquitetura', 'Takeda Design | Paisagismo', 'Todos Arquitetura | Ambientação e fachada'],
    gallery: [
      { src: moodCostaAzulCover, titulo: 'Mood Costa Azul - torres e vista para o mar' },
      { src: moodCostaAzulFacade, titulo: 'Fachada das torres Coral e Brisa' },
      { src: moodCostaAzulAccess, titulo: 'Acesso e fachada principal' },
      { src: moodCostaAzulPool, titulo: 'Piscina com borda infinita e vista para o mar' },
      { src: moodCostaAzulPoolBetween, titulo: 'Piscina entre as torres' },
      { src: moodCostaAzulVideo, type: 'video', poster: moodCostaAzulCover, titulo: 'Vídeo do Mood Costa Azul' },
      { src: moodCostaAzulGym, titulo: 'Academia' },
      { src: moodCostaAzulPartyRoom, titulo: 'Salão de festas' },
      { src: moodCostaAzulLiving100, titulo: 'Sala ampliada - apartamento de 100 m²' },
      { src: moodCostaAzulLiving80, titulo: 'Sala ampliada - apartamento de 80 m²' },
      { src: moodCostaAzulLiving73, titulo: 'Apartamento de 73 m²' },
    ],
    floorPlans: [
      { src: moodCostaAzulSitePlan, titulo: 'Implantação geral das torres Coral e Brisa' },
      { src: moodCostaAzulLeisurePlan, titulo: 'Implantação do pavimento de lazer' },
      { src: moodCostaAzulGardenPlan, titulo: 'Pavimento de lazer e apartamentos Garden' },
      { src: moodCostaAzulPlan100, titulo: 'Planta Comfort Plus - 100 m² - 3 quartos e home office' },
      { src: moodCostaAzulPlan100Expanded, titulo: 'Planta Comfort Plus - 100 m² - sala ampliada' },
      { src: moodCostaAzulPlan80, titulo: 'Planta Comfort - 80 m² - 3 quartos' },
      { src: moodCostaAzulPlan80Expanded, titulo: 'Planta Comfort - 80 m² - sala ampliada' },
      { src: moodCostaAzulPlan73, titulo: 'Planta Smart - 73 m² - 3 quartos' },
      { src: moodCostaAzulPlan73Expanded, titulo: 'Planta Smart - 73 m² - sala ampliada' },
    ],
    locationImages: [
      { src: moodCostaAzulLocationBeach, titulo: 'Localização a aproximadamente 170 m da praia' },
      { src: moodCostaAzulLocationMap, titulo: 'Mapa da localização no Costa Azul' },
    ],
  }),
  createDevelopment({
    slug: 'mood-sol-bahia', name: 'Mood Sol Bahia', image: moodSolBahiaCover,
    city: 'Salvador, BA', neighborhood: 'Pituaçu', locationTitle: 'Entre Patamares e Pituaçu, próximo à orla',
    address: 'Rua Manoel Antônio Galvão, 1075 - Pituaçu, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Manoel%20Antonio%20Galvao%201075%20Pitua%C3%A7u%20Salvador%20BA',
    area: '53,30 a 90,10 m²', profile: 'Apartamentos de 2 ou 3 quartos, com opções Garden', detail: '522 apartamentos em 3 torres',
    description: 'O Mood Sol Bahia fica entre Patamares e Pituaçu, próximo à orla e ao Parque de Pituaçu. O projeto reúne três torres residenciais, áreas verdes, lazer e apartamentos Smart, Comfort e Garden.',
    highlights: ['53,30 e 65,59 m²', '2 ou 3 quartos', '3 torres residenciais', 'Próximo ao Parque de Pituaçu'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Pituaçu'], ['Unidades', '522 apartamentos'], ['Garagem', '1 vaga por apartamento']],
    technical: [
      ['Área do terreno', '15.391,67 m²'],
      ['Torres', '3 torres residenciais: Mar, Sol e Brisa'],
      ['Pavimentos', 'Térreo + 21 pavimentos tipo'],
      ['Unidades', '522 apartamentos, com 8 unidades por andar'],
      ['Apartamento Smart', '53,30 m², 2 quartos, 1 suíte e 1 vaga'],
      ['Apartamento Comfort', '65,59 m², 3 quartos, 1 suíte e 1 vaga'],
      ['Apartamentos Garden', '81,05 m² com 2 quartos; 90,10 m² com 3 quartos'],
      ['Garagem', '553 vagas no total, incluindo 4 vagas externas'],
    ],
    amenities: ['Mais de 2.800 m² de lazer a céu aberto', 'Piscina com raia de 20 m', 'Piscinas adulto e infantil', 'Salão de festas e Festas Kids', 'Brinquedoteca', 'Gourmet piscina e gourmet interno', 'Mirante, redário e área para piquenique', 'Horta coletiva', 'Pet place e Pet Care', 'Salão de jogos', 'Quadra recreativa', 'Academia', 'Coworking', 'Minimarket', 'Lavanderia', 'Bicicletário'],
    security: [], sustainability: ['O material apresenta diretrizes de sustentabilidade, relação com a cidade e bem-estar.'],
    projectTeam: ['Ricardo Farias | Arquitetura', 'Takeda Design | Paisagismo', 'Tenari Arquitetura | Ambientação'],
    gallery: [
      { src: moodSolBahiaCover, titulo: 'Mood Sol Bahia - torres com vista para o mar' },
      { src: moodSolBahiaAerial, titulo: 'Vista aérea do empreendimento e da orla' },
      { src: moodSolBahiaFacade, titulo: 'Fachada com vista para o mar' },
      { src: moodSolBahiaNight, titulo: 'Torres do Mood Sol Bahia à noite' },
      { src: moodSolBahiaAccess, titulo: 'Acesso e portaria' },
      { src: moodSolBahiaHall, titulo: 'Hall de entrada' },
      { src: moodSolBahiaLeisure, titulo: 'Área de lazer - vista aérea' },
      { src: moodSolBahiaPool, titulo: 'Piscina - vista aérea' },
      { src: moodSolBahiaTerrace, titulo: 'Terraço com vista para o mar' },
      { src: moodSolBahiaVideo1, type: 'video', poster: moodSolBahiaCover, titulo: 'Vídeo do Mood Sol Bahia' },
      { src: moodSolBahiaVideo2, type: 'video', poster: moodSolBahiaCover, titulo: 'Mood Sol Bahia - vídeo 2' },
      { src: moodSolBahiaComfortLiving, titulo: 'Living do apartamento Comfort - 65,59 m²' },
      { src: moodSolBahiaSmartLiving, titulo: 'Living do apartamento Smart - 53,30 m²' },
      { src: moodSolBahiaGarden, titulo: 'Área externa de apartamento Garden' },
    ],
    floorPlans: [
      { src: moodSolBahiaSitePlan, titulo: 'Implantação geral das três torres' },
      { src: moodSolBahiaGroundPlan, titulo: 'Pavimento térreo - apartamentos Garden' },
      { src: moodSolBahiaTypicalPlan, titulo: 'Pavimento tipo - torres Mar, Sol e Brisa' },
      { src: moodSolBahiaLeisurePlan, titulo: 'Área de lazer - Torre Sol' },
      { src: moodSolBahiaGymPlan, titulo: 'Layout e equipamentos da academia' },
      { src: moodSolBahiaComfortPlan, titulo: 'Planta Comfort - 65,59 m² - 3 quartos' },
      { src: moodSolBahiaSmartPlan, titulo: 'Planta Smart - 53,30 m² - 2 quartos' },
    ],
    locationImages: [
      { src: moodSolBahiaAerialLocation, titulo: 'Vista aérea da orla de Patamares e Pituaçu' },
      { src: moodSolBahiaLocationMap, titulo: 'Mapa de localização e entorno' },
    ],
  }),
  createDevelopment({
    slug: 'arthur-bruno-schwambach', name: 'Arthur Bruno Schwambach', image: arthurBrunoCover,
    city: 'Recife, PE', neighborhood: 'Casa Forte', locationTitle: 'Casa Forte - Recife/PE',
    address: 'Casa Forte, Recife/PE. Referências de localização: Avenida 17 de Agosto e Rua Tapacurá.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arthur%20Bruno%20Schwambach%20Casa%20Forte%20Recife%20PE',
    area: '122,76 m²', profile: '3 suítes e terraço gourmet', detail: '6 torres com 7 pavimentos cada',
    description: 'O Arthur Bruno Schwambach reúne seis torres em Casa Forte, no Recife, em um projeto com mais de 4.000 m² de área verde e paisagismo com árvores frutíferas. Os apartamentos têm 122,76 m², três suítes, terraço gourmet e duas vagas de garagem. O conjunto integra um casarão histórico preservado e restaurado a áreas de lazer e convivência.',
    highlights: ['122,76 m²', '3 suítes', '2 vagas de garagem', 'Mais de 4.000 m² de área verde'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Casa Forte, Recife/PE'], ['Torres', '6 torres'], ['Garagem', '2 vagas por apartamento']],
    technical: [
      ['Torres', '6 edifícios: torres A, B, C, D, E e F'],
      ['Pavimentos', '7 pavimentos por edifício'],
      ['Apartamentos', '122,76 m² com 3 suítes e terraço gourmet'],
      ['Garagem', '2 vagas por apartamento'],
      ['Área verde', 'Mais de 4.000 m², com árvores frutíferas'],
      ['Patrimônio', 'Casarão histórico preservado e restaurado, com espaço comercial ilustrado'],
      ['Mobilidade elétrica', '4 pontos de tomadas para carro elétrico'],
      ['Registro de incorporação', 'R-11 da matrícula nº 12.789, 6º Ofício de Registro de Imóveis de Recife'],
      ['Material', 'Imagens e características ilustrativas, sujeitas a alterações'],
    ],
    amenities: ['Piscina adulto e infantil', 'Deck molhado', 'Apoio da piscina', 'Piscina aquecida', 'Sauna', 'Minicampo', 'Espaço gourmet', 'Salão de festas com bar e copa', 'Salão de festas infantil com copa', 'Brinquedoteca', 'Espaço infantil externo', 'Bicicletário', 'Pet place', 'Pet wash', 'Fitness equipado', 'Espaço para ginástica funcional', 'Guarda-volumes para encomendas', 'Espera para transporte por aplicativo', 'Túnel verde e redário', 'Áreas de lazer equipadas e mobiliadas', 'Tomadas USB nas áreas comuns'],
    security: ['Fechadura eletrônica nos apartamentos'],
    sustainability: ['Placas solares', 'Reúso de água', 'Paisagismo com árvores frutíferas e mais de 4.000 m² de área verde'],
    projectTeam: ['Pontual Arquitetos | Arquitetura', 'Romero Duarte | Ambientação'],
    gallery: [
      { src: arthurBrunoAerial, titulo: 'Arthur Bruno Schwambach - vista aérea e área verde' },
      { src: arthurBrunoHistoricHouse, titulo: 'Casarão histórico preservado e restaurado' },
      { src: arthurBrunoGreenTunnel, titulo: 'Túnel verde e redário' },
      { src: arthurBrunoPool1, titulo: 'Piscinas adulto e infantil com deck molhado - vista 1' },
      { src: arthurBrunoPool2, titulo: 'Piscinas e deck molhado - vista 2' },
      { src: arthurBrunoPoolSupport, titulo: 'Ambiente de apoio da piscina' },
      { src: arthurBrunoMinicampo, titulo: 'Minicampo' },
      { src: arthurBrunoGourmet, titulo: 'Espaço gourmet' },
      { src: arthurBrunoKidsPartyRoom, titulo: 'Salão de festas infantil' },
      { src: arthurBrunoPlayroom, titulo: 'Brinquedoteca' },
      { src: arthurBrunoOutdoorPlay1, titulo: 'Espaço infantil externo - vista 1' },
      { src: arthurBrunoOutdoorPlay2, titulo: 'Espaço infantil externo com brinquedo de madeira' },
      { src: arthurBrunoPetPlace, titulo: 'Pet place' },
      { src: arthurBrunoPetWash, titulo: 'Pet wash' },
      { src: arthurBrunoFitness, titulo: 'Fitness equipado' },
      { src: arthurBrunoFunctionalFitness, titulo: 'Espaço para ginástica funcional' },
      { src: arthurBrunoParcelStorage, titulo: 'Guarda-volumes para encomendas' },
      { src: arthurBrunoBikeRack, titulo: 'Bicicletário' },
      { src: arthurBrunoAppPickup, titulo: 'Espera para transporte por aplicativo' },
      { src: arthurBrunoGourmetTerrace, titulo: 'Perspectiva do terraço gourmet do apartamento' },
      { src: arthurBrunoLivingDining, titulo: 'Perspectiva da sala de estar e jantar' },
      { src: arthurBrunoMasterSuite, titulo: 'Perspectiva da suíte master' },
      { src: arthurBrunoFurnishedLeisure, titulo: 'Área de lazer equipada e mobiliada' },
      { src: arthurBrunoHeatedPool, titulo: 'Piscina aquecida e entorno' },
    ],
    floorPlans: [
      { src: arthurBrunoGroundPlan, titulo: 'Pavimento térreo - áreas comuns e legenda' },
      { src: arthurBrunoSitePlan, titulo: 'Implantação das torres A, B, C, D, E e F' },
      { src: arthurBrunoTypicalFloorPlan, titulo: 'Pavimento tipo - apartamentos de 122,76 m²' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-manguinhos', name: 'Beach Class Manguinhos', image: manguinhosCover,
    city: 'Tamandaré, PE', neighborhood: 'Praia dos Carneiros', locationTitle: 'Praia dos Carneiros - Tamandaré/PE',
    address: 'Região da Praia dos Carneiros, próximo ao Pontal dos Carneiros, Tamandaré/PE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Manguinhos%20Praia%20dos%20Carneiros%20Tamandare%20PE',
    area: '44 a 230 m²', profile: 'Casas e apartamentos de 1, 2 e 3 quartos, com Garden e piscina privativa', detail: '12 casas e 512 apartamentos',
    description: 'O Beach Class Manguinhos fica na região da Praia dos Carneiros, perto do Pontal dos Carneiros, em Tamandaré, Pernambuco, em um conceito pé na areia entre vegetação tropical e piscinas. O projeto reúne 12 casas de 230,03 m² com piscina privativa e 512 apartamentos de 1, 2 e 3 quartos em 10 blocos, com varanda gourmet e opções Garden com piscina privativa no térreo. O lazer inclui Beach Club à beira-mar, spa com piscina aquecida, academia, quadras e espaços para toda a família.',
    highlights: ['44 a 230 m²', '12 casas e 512 apartamentos', 'Garden com piscina privativa', 'Beach Club pé na areia'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Praia dos Carneiros, Tamandaré/PE'], ['Unidades', '524 residências (12 casas e 512 apartamentos)'], ['Garagem', '652 vagas']],
    technical: [
      ['Área do terreno', '93.025,66 m²'],
      ['Casas', '12 casas de 230,03 m², com térreo + 1º pavimento, 5 suítes, garden e piscina privativa'],
      ['Apartamentos', '512 apartamentos em 10 blocos (A a J), com térreo + 3 pavimentos tipo'],
      ['1 quarto', '192 unidades de 44 a 45 m², sendo 48 no térreo com garden de cerca de 34 m² e piscina privativa'],
      ['2 quartos', '272 unidades de 62 a 67 m², sendo 68 no térreo com garden de cerca de 55 m² (62-63 m²) ou 80 m² (67 m²) e piscina privativa'],
      ['3 quartos', '48 unidades de 109 a 110 m², sendo 12 no térreo com garden de cerca de 118 m² e piscina privativa'],
      ['Varanda', 'Varanda gourmet em todos os apartamentos'],
      ['Garagem', '652 vagas: 4 vagas exclusivas por casa; 1 vaga rotativa para apartamentos de 1 ou 2 quartos e 2 para os de 3 quartos; vagas de 2,40 m de largura e previsão de vagas para visitantes e carga e descarga'],
      ['Material', 'Perspectivas ilustrativas; plantas incluem variantes espelhadas e terminações diferentes entre os blocos'],
    ],
    amenities: ['Beach Club com deck, terraço, salão, bar e cozinha', 'Piscina à beira-mar', 'Piscinas do conjunto residencial', 'Piscina infantil', 'Bar da piscina e áreas de estar', 'Terraço de jogos', 'Quadra poliesportiva e minicampo', 'Quadras de areia', 'Playground', 'Espaços gourmet externos', 'Academia', 'Spa com piscina aquecida', 'Sauna', 'Salão de beleza', 'Salas de massagem', 'Pet place com pet shower', 'Recepção', 'Lavanderia coletiva', 'Espaço para minimarket', 'Caminhos e jardins paisagísticos'],
    security: ['Fechadura eletrônica nas portas sociais das unidades'],
    sustainability: ['Pontos de recarga para carro elétrico'],
    projectTeam: ['JCL Arquitetos | Arquitetura', 'Benedito Abbud | Paisagismo', 'Zirpoli Arquitetura | Ambientação'],
    gallery: [
      { src: manguinhosPhotoVisaoAereaGeralCasasEBeachClub, titulo: 'Beach Class Manguinhos - perspectiva aérea das casas e do Beach Club' },
      { src: manguinhosPhotoCondominioVistaGeralBlocosEPiscinas, titulo: 'Perspectiva geral dos blocos e das piscinas' },
      { src: manguinhosPhotoBeachClubPiscinaBeiraMar, titulo: 'Perspectiva da piscina do Beach Club à beira-mar' },
      { src: manguinhosPhotoBeachClubSalao, titulo: 'Perspectiva do salão do Beach Club' },
      { src: manguinhosPhotoBeachClubTerraco, titulo: 'Perspectiva do terraço do Beach Club' },
      { src: manguinhosPhotoAreaLazerPiscinasPanoramica, titulo: 'Perspectiva panorâmica das piscinas' },
      { src: manguinhosPhotoAreaLazerPiscinaKids, titulo: 'Perspectiva da piscina infantil' },
      { src: manguinhosPhotoAreaLazerBarDaPiscina, titulo: 'Perspectiva do bar da piscina' },
      { src: manguinhosPhotoAreaLazerEstarPiscina, titulo: 'Perspectiva da área de estar da piscina' },
      { src: manguinhosPhotoAreaLazerTerracoDeJogos, titulo: 'Perspectiva do terraço de jogos' },
      { src: manguinhosPhotoAreaLazerQuadraPoliesportivaEMinicampo, titulo: 'Perspectiva da quadra poliesportiva e do minicampo' },
      { src: manguinhosPhotoAreaLazerPlaygroundEQuadrasDeAreia, titulo: 'Perspectiva do playground e das quadras de areia' },
      { src: manguinhosPhotoAreaLazerEspacoGourmetExterno, titulo: 'Perspectiva do espaço gourmet externo' },
      { src: manguinhosPhotoAreaLazerAcademia, titulo: 'Perspectiva da academia' },
      { src: manguinhosPhotoAreaLazerSpaPiscinaAquecida, titulo: 'Perspectiva do spa com piscina aquecida' },
      { src: manguinhosPhotoCasasCaminhoParaPraia, titulo: 'Perspectiva do caminho das casas para a praia' },
      { src: manguinhosPhotoCasasFachadaJardimEPiscinaPrivativa, titulo: 'Perspectiva da fachada das casas com jardim e piscina privativa' },
      { src: manguinhosPhotoCasasTerracoComPiscinaPrivativa, titulo: 'Perspectiva do terraço da casa com piscina privativa' },
      { src: manguinhosPhotoCasasSalaDeEstar, titulo: 'Perspectiva da sala de estar da casa' },
      { src: manguinhosPhotoCasasSuiteMaster, titulo: 'Perspectiva da suíte master da casa' },
      { src: manguinhosPhotoCasasQuartoSuite, titulo: 'Perspectiva de uma suíte da casa' },
      { src: manguinhosPhotoApartamento1QuartoSalaCozinhaIntegrada, titulo: 'Perspectiva da sala e cozinha integradas do apartamento de 1 quarto' },
      { src: manguinhosPhotoApartamento1QuartoSalaEVaranda, titulo: 'Perspectiva da sala e varanda do apartamento de 1 quarto' },
      { src: manguinhosPhotoApartamento1QuartoSuite, titulo: 'Perspectiva da suíte do apartamento de 1 quarto' },
      { src: manguinhosPhotoApartamento2QuartosGardenPiscinaPrivativa, titulo: 'Perspectiva do apartamento de 2 quartos com Garden e piscina privativa' },
      { src: manguinhosPhotoApartamento2QuartosVaranda, titulo: 'Perspectiva da varanda do apartamento de 2 quartos' },
      { src: manguinhosPhotoApartamento2QuartosSalaCozinhaIntegrada, titulo: 'Perspectiva da sala e cozinha integradas do apartamento de 2 quartos' },
      { src: manguinhosPhotoApartamento2QuartosSuite, titulo: 'Perspectiva da suíte do apartamento de 2 quartos' },
      { src: manguinhosPhotoApartamento2Quartos67m2SalaEVaranda, titulo: 'Perspectiva da sala e varanda do apartamento de 2 quartos de 67 m²' },
      { src: manguinhosPhotoApartamento2Quartos67m2SalaCozinha, titulo: 'Perspectiva da sala e cozinha do apartamento de 2 quartos de 67 m²' },
      { src: manguinhosPhotoApartamento2Quartos67m2Suite, titulo: 'Perspectiva da suíte do apartamento de 2 quartos de 67 m²' },
      { src: manguinhosPhotoApartamento3QuartosGardenPiscinaPrivativa, titulo: 'Perspectiva do apartamento de 3 quartos com Garden e piscina privativa' },
      { src: manguinhosPhotoApartamento3QuartosSalaCozinhaIntegrada, titulo: 'Perspectiva da sala e cozinha integradas do apartamento de 3 quartos' },
      { src: manguinhosPhotoApartamento3QuartosVarandaGourmet, titulo: 'Perspectiva da varanda gourmet do apartamento de 3 quartos' },
      { src: manguinhosPhotoApartamento3QuartosSuiteMaster, titulo: 'Perspectiva da suíte master do apartamento de 3 quartos' },
      { src: manguinhosPhotoApartamento3QuartosSuite, titulo: 'Perspectiva da suíte do apartamento de 3 quartos' },
    ],
    floorPlans: [
      { src: manguinhosPlanImplantacaoGeralBlocosCasasBeachClub, titulo: 'Implantação geral - blocos, casas e Beach Club' },
      { src: manguinhosPlanImplantacao12Casas, titulo: 'Implantação das 12 casas' },
      { src: manguinhosPlanPlantaBeachClub, titulo: 'Planta do Beach Club' },
      { src: manguinhosPlanPlantaBlocoSocialBarPiscinaJogos, titulo: 'Bloco social - bar, piscina e jogos' },
      { src: manguinhosPlanPlantaBlocoSocialAcademiaSpa, titulo: 'Bloco social - academia e spa' },
      { src: manguinhosPlanPlantaBlocoServicos, titulo: 'Bloco de serviços' },
      { src: manguinhosPlanPlantaBlocosACEGITerreo, titulo: 'Blocos A, C, E, G e I - pavimento térreo' },
      { src: manguinhosPlanPlantaBlocosACEGITipo, titulo: 'Blocos A, C, E, G e I - pavimento tipo' },
      { src: manguinhosPlanPlantaBlocoBTerreo, titulo: 'Bloco B - pavimento térreo' },
      { src: manguinhosPlanPlantaBlocoBTipo, titulo: 'Bloco B - pavimento tipo' },
      { src: manguinhosPlanPlantaBlocosDFHJTerreo, titulo: 'Blocos D, F, H e J - pavimento térreo' },
      { src: manguinhosPlanPlantaBlocosDFHJTipo, titulo: 'Blocos D, F, H e J - pavimento tipo' },
      { src: manguinhosPlanPlantaCasa5SuitesTerreoAmbientada, titulo: 'Casa de 5 suítes - térreo (ambientada)' },
      { src: manguinhosPlanPlantaCasa5SuitesTerreoTecnica, titulo: 'Casa de 5 suítes - térreo (sem layout)' },
      { src: manguinhosPlanPlantaCasa5SuitesPrimeiroPavimentoAmbientada, titulo: 'Casa de 5 suítes - 1º pavimento (ambientada)' },
      { src: manguinhosPlanPlantaCasa5SuitesPrimeiroPavimentoTecnica, titulo: 'Casa de 5 suítes - 1º pavimento (sem layout)' },
      { src: manguinhosPlanPlantaApartamento1QuartoComparativoMetragens, titulo: 'Apartamentos de 1 quarto - comparativo de metragens' },
      { src: manguinhosPlanPlantaApartamento1QuartoTipo4445m2, titulo: 'Apartamento de 1 quarto - pavimento tipo (44 a 45 m²)' },
      { src: manguinhosPlanPlantaApartamento1QuartoGarden4445m2, titulo: 'Apartamento de 1 quarto - térreo com Garden e piscina (44 a 45 m²)' },
      { src: manguinhosPlanPlantaApartamento2Quartos6263m2Comparativo, titulo: 'Apartamentos de 2 quartos - comparativo de 62 a 63 m²' },
      { src: manguinhosPlanPlantaApartamento2QuartosTipo6263m2, titulo: 'Apartamento de 2 quartos - pavimento tipo (62 a 63 m²)' },
      { src: manguinhosPlanPlantaApartamento2QuartosGarden6263m2, titulo: 'Apartamento de 2 quartos - térreo com Garden e piscina (62 a 63 m²)' },
      { src: manguinhosPlanPlantaApartamento2Quartos67m2Comparativo, titulo: 'Apartamentos de 2 quartos - comparativo de 67 m²' },
      { src: manguinhosPlanPlantaApartamento2QuartosTipo67m2, titulo: 'Apartamento de 2 quartos - pavimento tipo (67 m²)' },
      { src: manguinhosPlanPlantaApartamento2QuartosGarden67m2, titulo: 'Apartamento de 2 quartos - térreo com Garden e piscina (67 m²)' },
      { src: manguinhosPlanPlantaApartamento3Quartos109110m2Comparativo, titulo: 'Apartamentos de 3 quartos - comparativo de 109 a 110 m²' },
      { src: manguinhosPlanPlantaApartamento3QuartosTipo109110m2, titulo: 'Apartamento de 3 quartos - pavimento tipo (109 a 110 m²)' },
      { src: manguinhosPlanPlantaApartamento3QuartosGarden109110m2, titulo: 'Apartamento de 3 quartos - térreo com Garden e piscina (109 a 110 m²)' },
    ],
    locationImages: [
      { src: manguinhosLocMapaLocalizacaoBeachClassManguinhos, titulo: 'Mapa de localização do Beach Class Manguinhos' },
      { src: manguinhosLocPraiaDosCarneirosVistaAerea, titulo: 'Entorno: vista aérea da Praia dos Carneiros' },
      { src: manguinhosLocPaisagemMarPraiaDosCarneiros, titulo: 'Entorno: mar e paisagem da Praia dos Carneiros' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-marine', name: 'Beach Class Marine', image: marineCover,
    city: 'Tamandaré, PE', neighborhood: 'Praia dos Carneiros', locationTitle: 'Praia dos Carneiros - Tamandaré/PE',
    address: 'Praia dos Carneiros, Tamandaré/PE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Marine%20Praia%20dos%20Carneiros%20Tamandare%20PE',
    area: '32 a 129 m²', profile: 'Studios e apartamentos de 1, 2 e 3 quartos, com Garden e piscina privativa', detail: '412 unidades em 9 blocos',
    description: 'O Beach Class Marine é um empreendimento à beira-mar na Praia dos Carneiros, em Tamandaré, Pernambuco, no conceito pé na areia. O projeto reúne 412 apartamentos em 9 blocos, com studios e unidades de 1, 2 e 3 quartos, todos com varanda gourmet, e Gardens com piscina nas unidades térreas de 1, 2 e 3 quartos. O lazer inclui piscina com borda infinita frente ao mar, bar da praia, pool house, parque aquático, restaurante, spa com sauna e academia, em meio a áreas verdes.',
    highlights: ['32 a 129 m²', '412 unidades em 9 blocos', 'Garden com piscina nas unidades térreas', 'Pé na areia na Praia dos Carneiros'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Praia dos Carneiros, Tamandaré/PE'], ['Unidades', '412 apartamentos'], ['Garagem', '580 vagas rotativas']],
    technical: [
      ['Área do terreno', '86.000 m²'],
      ['Área privativa', '25.405,77 m²'],
      ['Blocos', '9 blocos residenciais, com térreo + 3 pavimentos tipo'],
      ['Unidades', '412 unidades residenciais'],
      ['Studios', '76 unidades de 32,51 a 40,66 m²'],
      ['1 quarto', '156 unidades de 44 a 57 m²'],
      ['2 quartos', '136 unidades de 62 a 85 m²'],
      ['3 quartos', '44 unidades de 118 a 129 m²'],
      ['Garden', 'Unidades térreas com garden de cerca de 10 a 100 m², conforme a tipologia; piscina nos gardens de 1, 2 e 3 quartos'],
      ['Varanda', 'Varanda gourmet em todos os apartamentos'],
      ['Garagem', '580 vagas em sistema rotativo, com 2 vagas para apartamentos de 2 e 3 quartos; vagas largas'],
      ['Material', 'Perspectivas ilustrativas; móveis, utensílios, equipamentos e decoração dos apartamentos não estão contemplados no orçamento da obra'],
    ],
    amenities: ['Hall social', 'Piscina com borda infinita frente ao mar', 'Gazebo frente ao mar', 'Bar da praia integrado à piscina', 'Pool house', 'Parque aquático e piscinas', 'Piscina infantil', 'Restaurante com deck', 'Espaços gourmet externos', 'Playground', 'Academia', 'Lounge', 'Spa com sauna', 'Salas de massagem', 'Salão de beleza', 'Pet place com pet wash', 'Lavanderia coletiva', 'Minimarket', 'Espaço delivery'],
    security: ['Fechadura eletrônica nos apartamentos'],
    sustainability: ['Irrigação inteligente', 'Parte do consumo do condomínio abastecida por energia solar', 'Pontos para recarga de carro elétrico'],
    projectTeam: ['Jerônimo da Cunha Lima | Arquitetura', 'Benedito Abbud | Paisagismo', 'Humberto e Analice Zirpoli | Ambientação'],
    gallery: [
      { src: marinePhotoVistaAereaGeralCondominio, titulo: 'Beach Class Marine - perspectiva aérea do condomínio e da orla' },
      { src: marinePhotoFachadaBlocoResidencialComPiscinaAnoitecer, titulo: 'Perspectiva da fachada do bloco residencial com piscina ao entardecer' },
      { src: marinePhotoFachadaBlocoVistaDaPiscina, titulo: 'Perspectiva da fachada do bloco vista da piscina' },
      { src: marinePhotoHallSocialRecepcao, titulo: 'Perspectiva do hall social e da recepção' },
      { src: marinePhotoPiscinaBordaInfinitaFrenteMar, titulo: 'Perspectiva da piscina com borda infinita frente ao mar' },
      { src: marinePhotoGazeboFrenteMar, titulo: 'Perspectiva do gazebo frente ao mar' },
      { src: marinePhotoBarDaPraiaIntegradoPiscina, titulo: 'Perspectiva do bar da praia integrado à piscina' },
      { src: marinePhotoPoolHouse, titulo: 'Perspectiva da pool house' },
      { src: marinePhotoParqueAquaticoPiscinaInfantil, titulo: 'Perspectiva do parque aquático e da piscina infantil' },
      { src: marinePhotoRestauranteInterno, titulo: 'Perspectiva do restaurante' },
      { src: marinePhotoDeckExternoRestaurante, titulo: 'Perspectiva do deck externo do restaurante' },
      { src: marinePhotoEspacoGourmetExterno, titulo: 'Perspectiva do espaço gourmet externo' },
      { src: marinePhotoPlaygroundAreaInfantil, titulo: 'Perspectiva do playground e da área infantil' },
      { src: marinePhotoAcademiaFitness, titulo: 'Perspectiva da academia' },
      { src: marinePhotoSpaComSauna, titulo: 'Perspectiva do spa com sauna' },
      { src: marinePhotoSalasDeMassagem, titulo: 'Perspectiva das salas de massagem' },
      { src: marinePhotoSalaoDeBeleza, titulo: 'Perspectiva do salão de beleza' },
      { src: marinePhotoStudio3251m2AmbienteInterno, titulo: 'Perspectiva do Studio de 32,51 m²' },
      { src: marinePhotoApartamento1Quarto44m2SalaEVaranda, titulo: 'Perspectiva da sala e varanda do apartamento de 1 quarto de 44 m²' },
      { src: marinePhotoApartamento1Quarto52m2SalaECozinha, titulo: 'Perspectiva da sala e cozinha do apartamento de 1 quarto de 52 m²' },
      { src: marinePhotoApartamento2Quartos62m2SalaECozinha, titulo: 'Perspectiva da sala e cozinha do apartamento de 2 quartos de 62 m²' },
      { src: marinePhotoApartamento2Quartos62m2Varanda, titulo: 'Perspectiva da varanda do apartamento de 2 quartos de 62 m²' },
      { src: marinePhotoApartamento2Quartos7135m2Quarto, titulo: 'Perspectiva do quarto do apartamento de 2 quartos de 71,35 m²' },
      { src: marinePhotoApartamento2Quartos78m2GardenEPiscinaPrivativa, titulo: 'Perspectiva do apartamento de 2 quartos de 78 m² com Garden e piscina privativa' },
      { src: marinePhotoApartamento3Quartos118m2GardenPiscinaPatio, titulo: 'Perspectiva do Garden com piscina e pátio do apartamento de 3 quartos de 118 m²' },
      { src: marinePhotoApartamento3Quartos118m2GardenAreaDeDescanso, titulo: 'Perspectiva da área de descanso do Garden do apartamento de 3 quartos de 118 m²' },
      { src: marinePhotoApartamento3Quartos118m2SalaEVaranda, titulo: 'Perspectiva da sala e varanda do apartamento de 3 quartos de 118 m²' },
      { src: marinePhotoApartamento3Quartos118m2Suite, titulo: 'Perspectiva da suíte do apartamento de 3 quartos de 118 m²' },
      { src: marinePhotoApartamento3Quartos126m2SalaDeEstar, titulo: 'Perspectiva da sala de estar do apartamento de 3 quartos de 126 m²' },
    ],
    floorPlans: [
      { src: marinePlanImplantacaoGeralBlocosAreasLazer, titulo: 'Implantação geral - blocos e áreas de lazer' },
      { src: marinePlanPlantaBlocoSocialPavimentoTerreo, titulo: 'Bloco social - pavimento térreo' },
      { src: marinePlanPlantaBlocoSocialPrimeiroPavimento, titulo: 'Bloco social - 1º pavimento' },
      { src: marinePlanPlantaBlocosACEPavimentoTerreo, titulo: 'Blocos A, C e E - pavimento térreo' },
      { src: marinePlanPlantaBlocosACEPavimentoTipo, titulo: 'Blocos A, C e E - pavimento tipo' },
      { src: marinePlanPlantaBlocosBDPavimentoTerreo, titulo: 'Blocos B e D - pavimento térreo' },
      { src: marinePlanPlantaBlocosBDPavimentoTipo, titulo: 'Blocos B e D - pavimento tipo' },
      { src: marinePlanPlantaBlocoFPavimentoTerreo, titulo: 'Bloco F - pavimento térreo' },
      { src: marinePlanPlantaBlocoFPavimentoTipo, titulo: 'Bloco F - pavimento tipo' },
      { src: marinePlanPlantaBlocosGIPavimentoTerreo, titulo: 'Blocos G e I - pavimento térreo' },
      { src: marinePlanPlantaBlocosGIPavimentoTipo, titulo: 'Blocos G e I - pavimento tipo' },
      { src: marinePlanPlantaBlocoHPavimentoTerreo, titulo: 'Bloco H - pavimento térreo' },
      { src: marinePlanPlantaBlocoHPavimentoTipo, titulo: 'Bloco H - pavimento tipo' },
      { src: marinePlanPlantaStudio3251m2ComGardenTerreo, titulo: 'Studio 32,51 m² - térreo com Garden' },
      { src: marinePlanPlantaStudio3251m2PavimentoTipo, titulo: 'Studio 32,51 m² - pavimento tipo' },
      { src: marinePlanPlantaStudio4066m2ComGardenTerreo, titulo: 'Studio 40,66 m² - térreo com Garden' },
      { src: marinePlanPlantaStudio4066m2PavimentoTipo, titulo: 'Studio 40,66 m² - pavimento tipo' },
      { src: marinePlanPlanta1Quarto44m2ComGardenTerreo, titulo: '1 quarto 44 m² - térreo com Garden' },
      { src: marinePlanPlanta1Quarto44m2PavimentoTipo, titulo: '1 quarto 44 m² - pavimento tipo' },
      { src: marinePlanPlanta1Quarto52A54m2ComGardenTerreo, titulo: '1 quarto 52 a 54 m² - térreo com Garden' },
      { src: marinePlanPlanta1Quarto52m2PavimentoTipo, titulo: '1 quarto 52 m² - pavimento tipo' },
      { src: marinePlanPlanta1Quarto57m2PavimentoTipo, titulo: '1 quarto 57 m² - pavimento tipo' },
      { src: marinePlanPlanta2Quartos62m2ComGardenTerreo, titulo: '2 quartos 62 m² - térreo com Garden' },
      { src: marinePlanPlanta2Quartos62m2PavimentoTipo, titulo: '2 quartos 62 m² - pavimento tipo' },
      { src: marinePlanPlanta2Quartos7135m2ComGardenTerreo, titulo: '2 quartos 71,35 m² - térreo com Garden' },
      { src: marinePlanPlanta2Quartos7135m2PavimentoTipo, titulo: '2 quartos 71,35 m² - pavimento tipo' },
      { src: marinePlanPlanta2Quartos78m2ComGardenTerreo, titulo: '2 quartos 78 m² - térreo com Garden' },
      { src: marinePlanPlanta2Quartos78m2PavimentoTipo, titulo: '2 quartos 78 m² - pavimento tipo' },
      { src: marinePlanPlanta2Quartos79m2ComGardenTerreo, titulo: '2 quartos 79 m² - térreo com Garden' },
      { src: marinePlanPlanta2Quartos81m2ComGardenTerreo, titulo: '2 quartos 81 m² - térreo com Garden' },
      { src: marinePlanPlanta2Quartos81m2PavimentoTipo, titulo: '2 quartos 81 m² - pavimento tipo' },
      { src: marinePlanPlanta2Quartos85m2PavimentoTipo, titulo: '2 quartos 85 m² - pavimento tipo' },
      { src: marinePlanPlanta3Quartos118m2ComGardenTerreo, titulo: '3 quartos 118 m² - térreo com Garden' },
      { src: marinePlanPlanta3Quartos118m2PavimentoTipo, titulo: '3 quartos 118 m² - pavimento tipo' },
      { src: marinePlanPlanta3Quartos126m2ComGardenTerreo, titulo: '3 quartos 126 m² - térreo com Garden' },
      { src: marinePlanPlanta3Quartos129m2PavimentoTipo, titulo: '3 quartos 129 m² - pavimento tipo' },
      { src: marinePlanImplantacaoGeralELegendas, titulo: 'Implantação geral e legendas (página de referência)' },
      { src: marinePlanStudio3251m2PlantasELegendas, titulo: 'Studio 32,51 m² - plantas e legendas (página de referência)' },
      { src: marinePlanStudio4066m2PlantasELegendas, titulo: 'Studio 40,66 m² - plantas e legendas (página de referência)' },
      { src: marinePlanApartamento1Quarto44m2TerreoLegendas, titulo: '1 quarto 44 m² - térreo e legendas (página de referência)' },
      { src: marinePlanApartamento1Quarto5254m2GardenLegendas, titulo: '1 quarto 52 a 54 m² - Garden e legendas (página de referência)' },
      { src: marinePlanApartamento2Quartos62m2GardenLegendas, titulo: '2 quartos 62 m² - Garden e legendas (página de referência)' },
      { src: marinePlanApartamento2Quartos7135m2Legendas, titulo: '2 quartos 71,35 m² - legendas (página de referência)' },
      { src: marinePlanApartamento2Quartos78m2Legendas, titulo: '2 quartos 78 m² - legendas (página de referência)' },
      { src: marinePlanApartamento2Quartos81m2GardenLegendas, titulo: '2 quartos 81 m² - Garden e legendas (página de referência)' },
      { src: marinePlanApartamento3Quartos118m2GardenLegendas, titulo: '3 quartos 118 m² - Garden e legendas (página de referência)' },
      { src: marinePlanApartamento3Quartos126m2GardenLegendas, titulo: '3 quartos 126 m² - Garden e legendas (página de referência)' },
    ],
    locationImages: [
      { src: marineLocLocalizacaoAereaEmpreendimentosBeachClassMarineCarneiros, titulo: 'Localização do Beach Class Marine sobre vista aérea' },
      { src: marineLocLocalizacaoPraiaCarneirosMapaEReferencias, titulo: 'Mapa e referências da Praia dos Carneiros' },
      { src: marineLocPaisagemAereaMarPraiaDosCarneiros, titulo: 'Entorno: vista aérea do mar da Praia dos Carneiros' },
      { src: marineLocPraiaDosCarneirosIgrejaEMar, titulo: 'Entorno: igreja e mar da Praia dos Carneiros' },
    ],
  }),
  createDevelopment({
    slug: 'concept-joao-farinha', name: 'Concept João Farinha', image: conceptJoaoFarinhaCover,
    city: 'Recife, PE', neighborhood: 'Próximo a Boa Viagem', locationTitle: 'Recife - próximo a Boa Viagem/PE',
    address: 'Recife, Pernambuco, próximo a Boa Viagem, Shopping Recife e Via Mangue',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Concept%20Jo%C3%A3o%20Farinha%20Recife%20Pernambuco',
    area: '26 a 56 m²', profile: 'Studios, 1 e 2 quartos e lofts com mezanino', detail: '264 unidades em torre única',
    description: 'O Concept João Farinha é um empreendimento da Moura Dubeux em Recife, próximo a Boa Viagem, ao Shopping Recife e à Via Mangue. A torre reúne 264 unidades, com studios de aproximadamente 26 a 28 m², apartamentos de 1 quarto de cerca de 39 m², de 2 quartos de cerca de 56 m² e lofts com mezanino de aproximadamente 44 a 46 m². As áreas comuns incluem piscina com hidromassagem, espaços gourmet, academia, coliving, coworking e lavanderia compartilhada.',
    highlights: ['Studios, apartamentos e lofts', '264 unidades', 'Piscina com hidromassagem', 'Próximo ao Shopping Recife'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Recife, Pernambuco'], ['Tipologias', 'Studios, 1 e 2 quartos e lofts'], ['Garagem', '155 vagas rotativas']],
    technical: [
      ['Área do terreno', '4.738,00 m²'],
      ['Área privativa total', '9.475,98 m²'],
      ['Torres', '1 torre'],
      ['Unidades', '264 unidades'],
      ['Pavimentos', 'Térreo + vazado 1 + lazer + 27 pavimentos tipo'],
      ['Studios', '26,91 m², 28,08 m² e 28,63 m², conforme a unidade'],
      ['1 quarto', '39,30 m², 39,33 m² e 39,70 m², conforme a unidade'],
      ['2 quartos', '56,37 m² e 56,40 m², conforme a unidade'],
      ['Lofts com mezanino', 'Aproximadamente 44 m² e 46 m²'],
      ['Garagem', '155 vagas rotativas'],
      ['Referências de localização', 'Rua Antônio Falcão e Rua Professor Arnaldo Carneiro Leão, conforme a implantação'],
      ['Conectividade', 'Infraestrutura para Wi-Fi nas áreas comuns sociais'],
      ['Personalização', 'MD Store: serviço opcional, conforme disponibilidade e condições de contratação'],
      ['Material', 'Perspectivas ilustrativas sujeitas a alterações; móveis, utensílios, equipamentos e decoração ilustrados não estão incluídos no orçamento da obra'],
    ],
    amenities: ['Hall social', 'Espaço delivery', 'Piscina com hidromassagem e deck', 'Terraço gourmet', 'Terraço coberto', 'Salão gourmet', 'Academia', 'Fitness externo', 'Sala de massagem', 'Lavanderia compartilhada', 'Coliving', 'Coworking', 'Café', 'Área destinada a minimarket', 'Lounge gramado', 'Espaço de balanços', 'Deck jardim', 'Redário', 'Pet place com pet wash', 'Bicicletário', 'Local para car wash e bike station'],
    security: ['Portaria e antecâmara', 'Fechadura eletrônica na porta principal dos apartamentos', 'Controle automatizado de acesso de pessoas e veículos', 'Infraestrutura para câmeras nas áreas comuns'],
    sustainability: ['Irrigação automatizada dos jardins', 'Tomadas compartilhadas para veículos elétricos'],
    projectTeam: ['Juliano Dubeux e Metro Arquitetura | Arquitetura', 'Takeda Design | Paisagismo', 'Poligonus | Ambientação'],
    gallery: [
      { src: conceptJoaoFarinhaFacade, titulo: 'Concept João Farinha - perspectiva geral da torre' },
      { src: conceptJoaoFarinhaEntrance, titulo: 'Perspectiva da fachada e do acesso principal' },
      { src: conceptJoaoFarinhaFacadeBelow, titulo: 'Perspectiva da torre vista de baixo' },
      { src: conceptJoaoFarinhaFacadeVertical, titulo: 'Perspectiva vertical da torre' },
      { src: conceptJoaoFarinhaLobby, titulo: 'Perspectiva do hall social e da recepção' },
      { src: conceptJoaoFarinhaLawnLounge, titulo: 'Perspectiva do lounge gramado e do paisagismo' },
      { src: conceptJoaoFarinhaPetPlace, titulo: 'Perspectiva do pet place com pet wash' },
      { src: conceptJoaoFarinhaHammocks, titulo: 'Perspectiva do redário no jardim' },
      { src: conceptJoaoFarinhaColivingCafe, titulo: 'Perspectiva do coliving, coworking e café' },
      { src: conceptJoaoFarinhaCoworkingRooms, titulo: 'Perspectiva das salas de coliving e coworking' },
      { src: conceptJoaoFarinhaGym, titulo: 'Perspectiva da academia' },
      { src: conceptJoaoFarinhaOutdoorFitness, titulo: 'Perspectiva do fitness externo' },
      { src: conceptJoaoFarinhaGourmetRoom, titulo: 'Perspectiva do salão gourmet' },
      { src: conceptJoaoFarinhaMassageRoom, titulo: 'Perspectiva da sala de massagem' },
      { src: conceptJoaoFarinhaLaundry, titulo: 'Perspectiva da lavanderia compartilhada' },
      { src: conceptJoaoFarinhaPool, titulo: 'Perspectiva da piscina ao ar livre' },
      { src: conceptJoaoFarinhaGardenDeck, titulo: 'Perspectiva do deck jardim com daybeds' },
      { src: conceptJoaoFarinhaSwings, titulo: 'Perspectiva do espaço de balanços no jardim' },
      { src: conceptJoaoFarinhaLawnSunset, titulo: 'Perspectiva do lounge gramado ao entardecer' },
      { src: conceptJoaoFarinhaGourmetTerrace, titulo: 'Perspectiva do terraço gourmet' },
      { src: conceptJoaoFarinhaStudio, titulo: 'Perspectiva do studio de aproximadamente 26 a 28 m²' },
      { src: conceptJoaoFarinhaOneBedroom, titulo: 'Perspectiva da sala do apartamento de 1 quarto de aproximadamente 39 m²' },
      { src: conceptJoaoFarinhaLoftLiving, titulo: 'Perspectiva da sala do loft de aproximadamente 44 a 46 m²' },
      { src: conceptJoaoFarinhaLoftMezzanine, titulo: 'Perspectiva do mezanino do loft de aproximadamente 44 a 46 m²' },
      { src: conceptJoaoFarinhaTwoBedroomLiving, titulo: 'Perspectiva da sala do apartamento de 2 quartos de aproximadamente 56 m²' },
      { src: conceptJoaoFarinhaTwoBedroomSuite, titulo: 'Perspectiva da suíte do apartamento de 2 quartos de aproximadamente 56 m²' },
    ],
    floorPlans: [
      { src: conceptJoaoFarinhaSitePlan, titulo: 'Implantação geral do condomínio' },
      { src: conceptJoaoFarinhaGroundFloor, titulo: 'Pavimento térreo - acessos e estacionamento' },
      { src: conceptJoaoFarinhaParkingFloor, titulo: 'Pavimento vazado 1 - estacionamento' },
      { src: conceptJoaoFarinhaLeisureFloor, titulo: 'Pavimento de lazer - piscina, gourmet e academia' },
      { src: conceptJoaoFarinhaFloorsOneToThree, titulo: 'Planta dos pavimentos tipo 1º ao 3º' },
      { src: conceptJoaoFarinhaFloorsFourToTwentyThree, titulo: 'Planta dos pavimentos tipo 4º ao 23º' },
      { src: conceptJoaoFarinhaFloorsTwentyFourAndTwentySix, titulo: 'Planta dos pavimentos tipo 24º e 26º' },
      { src: conceptJoaoFarinhaLoftFloors, titulo: 'Planta dos pavimentos tipo 25º e 27º - lofts' },
      { src: conceptJoaoFarinhaSitePlanReference, titulo: 'Implantação geral e legendas (página de referência)' },
      { src: conceptJoaoFarinhaGroundFloorReference, titulo: 'Pavimento térreo e legendas (página de referência)' },
      { src: conceptJoaoFarinhaParkingFloorReference, titulo: 'Pavimento vazado 1 e legendas (página de referência)' },
      { src: conceptJoaoFarinhaLeisureFloorReference, titulo: 'Pavimento de lazer e legendas (página de referência)' },
      { src: conceptJoaoFarinhaFloorsOneToThreeReference, titulo: 'Pavimentos tipo 1º ao 3º - metragens e legendas' },
      { src: conceptJoaoFarinhaFloorsFourToTwentyThreeReference, titulo: 'Pavimentos tipo 4º ao 23º - metragens e legendas' },
      { src: conceptJoaoFarinhaFloorsTwentyFourAndTwentySixReference, titulo: 'Pavimentos tipo 24º e 26º - metragens e legendas' },
      { src: conceptJoaoFarinhaLoftFloorsReference, titulo: 'Pavimentos tipo 25º e 27º - metragens e legendas dos lofts' },
    ],
    locationImages: [
      { src: conceptJoaoFarinhaLocation, titulo: 'Localização e referências: Via Mangue, Praia de Boa Viagem e Shopping Recife' },
      { src: conceptJoaoFarinhaShopping, titulo: 'Entorno: Shopping Recife' },
    ],
  }),
  createDevelopment({
    slug: 'infinity-recife', name: 'Infinity Recife', image: infinityRecifeCover,
    city: 'Recife, PE', neighborhood: 'Boa Viagem', locationTitle: 'Boa Viagem - Recife/PE',
    address: 'Avenida Boa Viagem, Boa Viagem, Recife/PE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Infinity%20Recife%20Avenida%20Boa%20Viagem%20Recife%20PE',
    area: '26,90 a 97,10 m²', profile: 'Studios e apartamentos de 1 e 2 quartos', detail: '329 unidades residenciais em torre única',
    description: 'O Infinity Recife é um projeto de retrofit da Moura Dubeux, da linha MD Collection, associado ao antigo Recife Palace Hotel, em Boa Viagem, Recife/PE. A torre reúne 329 unidades residenciais, entre studios Infinity Solo e apartamentos Infinity One e Infinity Two, com plantas de 26,90 a 97,10 m². O projeto apresenta piscina com borda infinita, academia, restaurante, espaço gourmet e spa com sauna, salas de massagem e hidromassagem aquecida, além de lavanderia, minimarket e pet wash. As imagens de fachada e ambientes são perspectivas ilustrativas do projeto.',
    highlights: ['26,90 a 97,10 m²', 'Studios, 1 e 2 quartos', 'Projeto de retrofit', 'Boa Viagem'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Boa Viagem, Recife/PE'], ['Unidades', '329 residenciais e 1 loja'], ['Garagem', '117 vagas rotativas']],
    technical: [
      ['Linha', 'MD Collection'],
      ['Conceito', 'Retrofit de edifício preexistente, associado ao antigo Recife Palace Hotel'],
      ['Torres', '1 torre'],
      ['Unidades residenciais', '329 unidades'],
      ['Loja comercial', '1 loja de 475,56 m²'],
      ['Área do terreno', '2.528,75 m²'],
      ['Área privativa informada', '14.934,96 m²'],
      ['2º pavimento', '12 apartamentos; plantas Infinity Solo de 32,20 m², 38,35 m² e 49,80 m² e Infinity Two de 78,90 m²'],
      ['4º ao 18º pavimentos', '20 apartamentos por pavimento; plantas Infinity Solo de 26,90 m², 35,70 m², 39,30 m² e 39,75 m²; Infinity One de 61,90 m²; Infinity Two de 76,15 m²'],
      ['19º pavimento', '17 apartamentos; plantas Infinity Solo de 35,05 m²; Infinity One de 43,95 m², 48,00 m², 48,60 m² e 62,70 m²; Infinity Two de 94,45 m² e 97,10 m²'],
      ['Garagem', '117 vagas rotativas, incluindo 2 PNE e 12 no sistema de vagões, com 9 m de comprimento'],
      ['Carregamento elétrico', '8 vagas com carregamento em sistema rotativo'],
      ['Lazer', 'Pavimento indicado como 3º na ficha técnica'],
      ['Áreas comuns', 'Mobiliadas, equipadas e automatizadas, conforme o material'],
      ['Referências viárias', 'Avenida Boa Viagem, Rua Ernesto de Paula Santos e Rua dos Navegantes'],
      ['Material', 'Perspectivas e plantas ilustrativas, sujeitas a alterações; mobiliário ilustrativo'],
    ],
    amenities: ['Acesso porte-cochère', 'Hall e recepção', 'Espaço delivery', 'Bicicletário', 'Lavanderia compartilhada', 'Minimarket', 'Pet wash', 'Academia e salas fitness', 'Piscina com borda infinita', 'Duas piscinas de hidromassagem no lazer e no spa', 'Bar e deck', 'Restaurante', 'Espaço gourmet', 'Spa com sauna', 'Salas de massagem', 'Hidromassagem aquecida', 'Terraço descoberto', 'Terraço coberto', 'Jardins'],
    security: ['Fechadura eletrônica nas portas sociais dos apartamentos'],
    sustainability: ['Irrigação automatizada dos jardins comuns', 'Equipamentos de redução de vazão em torneiras e vasos sanitários', 'Iluminação automatizada e sensores em parte das áreas comuns', '8 vagas com carregamento elétrico em sistema rotativo', 'Gestão de resíduos da obra com descarte responsável'],
    projectTeam: ['Zirpol Arquitetura | Arquitetura'],
    gallery: [
      { src: infinityRecifeFachadaEmbasamentoEntrada, titulo: 'Perspectiva: acesso e fachada ao nível da rua' },
      { src: infinityRecifeFachadaPrincipalVistaAvenida, titulo: 'Perspectiva: torre completa na avenida Boa Viagem' },
      { src: infinityRecifeWellnessAreaRelaxamentoPiscina, titulo: 'Perspectiva: área wellness com espreguiçadeiras e piscina' },
      { src: infinityRecifeRestauranteSalaoInterno, titulo: 'Perspectiva: salão do restaurante' },
      { src: infinityRecifePiscinaPanoramaBordaInfinita, titulo: 'Perspectiva: piscina com borda infinita junto à área social' },
      { src: infinityRecifeEspacoGourmetMesaJantar, titulo: 'Perspectiva: espaço gourmet com mesa de jantar' },
      { src: infinityRecifeGaragemEElevadores, titulo: 'Perspectiva: acesso às garagens com elevadores' },
      { src: infinityRecifePiscinaBordaInfinitaVistaAerea, titulo: 'Perspectiva: piscina com borda infinita em vista elevada' },
      { src: infinityRecifeAcademiaMusculacao, titulo: 'Perspectiva: academia com equipamentos de musculação' },
      { src: infinityRecifeAcademiaEsteirasVistaMar, titulo: 'Perspectiva: área cardio da academia com vista do mar' },
      { src: infinityRecifeLavanderiaCompartilhada, titulo: 'Perspectiva: lavanderia coletiva equipada' },
      { src: infinityRecifeStudioInfinitySolo26m2Ambiente, titulo: 'Perspectiva: perspectiva de studio compacto de cerca de 26 m²' },
      { src: infinityRecifeApartamentoStudioSalaEVaranda, titulo: 'Perspectiva: sala de unidade Infinity Solo' },
      { src: infinityRecifeApartamentoInfinityOneSalaDeJantar, titulo: 'Perspectiva: sala e jantar do apartamento Infinity One' },
      { src: infinityRecifeApartamentoInfinityTwoSalaSocial, titulo: 'Perspectiva: sala de apartamento com obra de arte' },
      { src: infinityRecifeApartamentoVistaMarLounge, titulo: 'Perspectiva: estar com vista para o mar' },
      { src: infinityRecifeApartamentoAmbienteSalaPequena, titulo: 'Perspectiva: sala compacta em perspectiva' },
      { src: infinityRecifeApartamentoDetalhePoltronaVista, titulo: 'Perspectiva: poltrona e vista em ambiente do apartamento' },
    ],
    floorPlans: [
      { src: infinityRecifePavimentoSemienterradoGaragemEBicicletario, titulo: 'Pavimento semienterrado - garagem e bicicletário' },
      { src: infinityRecifePavimentoTerreoHallAcessosEntrada, titulo: 'Pavimento térreo - hall, acessos e entrada' },
      { src: infinityRecifePrimeiroPavimentoEstacionamento, titulo: '1º pavimento - estacionamento' },
      { src: infinityRecifePavimentoLazerPiscinasAcademiaGourmet, titulo: 'Pavimento de lazer - piscinas, academia e gourmet' },
      { src: infinityRecifeSegundoPavimentoDistribuicaoUnidades, titulo: '2º pavimento - distribuição das unidades' },
      { src: infinityRecifePavimentos04A18DistribuicaoUnidades, titulo: '4º ao 18º pavimentos - distribuição das unidades' },
      { src: infinityRecifeDecimoNonoPavimentoDistribuicaoUnidades, titulo: '19º pavimento - distribuição das unidades' },
      { src: infinityRecifePlanta2pInfinitySolo3220m2, titulo: 'Infinity Solo - 32,20 m² (2º pavimento)' },
      { src: infinityRecifePlanta2pInfinitySolo3835m2, titulo: 'Infinity Solo - 38,35 m² (2º pavimento)' },
      { src: infinityRecifePlanta2pInfinitySolo4980m2, titulo: 'Infinity Solo - 49,80 m² (2º pavimento)' },
      { src: infinityRecifePlanta2pInfinityTwo7890m2, titulo: 'Infinity Two - 78,90 m² (2º pavimento)' },
      { src: infinityRecifePlanta4a18InfinitySolo2690m2, titulo: 'Infinity Solo - 26,90 m² (4º ao 18º pavimentos)' },
      { src: infinityRecifePlanta4a18InfinitySolo3570m2, titulo: 'Infinity Solo - 35,70 m² (4º ao 18º pavimentos)' },
      { src: infinityRecifePlanta4a18InfinitySolo3975m2, titulo: 'Infinity Solo - 39,75 m² (4º ao 18º pavimentos)' },
      { src: infinityRecifePlanta4a18InfinitySolo3930m2, titulo: 'Infinity Solo - 39,30 m² (4º ao 18º pavimentos)' },
      { src: infinityRecifePlanta4a18InfinityOne6190m2, titulo: 'Infinity One - 61,90 m² (4º ao 18º pavimentos)' },
      { src: infinityRecifePlanta4a18InfinityTwo7615m2, titulo: 'Infinity Two - 76,15 m² (4º ao 18º pavimentos)' },
      { src: infinityRecifePlanta19pInfinitySolo3505m2, titulo: 'Infinity Solo - 35,05 m² (19º pavimento)' },
      { src: infinityRecifePlanta19pInfinityOne4395m2, titulo: 'Infinity One - 43,95 m² (19º pavimento)' },
      { src: infinityRecifePlanta19pInfinityOne4860m2, titulo: 'Infinity One - 48,60 m² (19º pavimento)' },
      { src: infinityRecifePlanta19pInfinityOne4800m2, titulo: 'Infinity One - 48,00 m² (19º pavimento)' },
      { src: infinityRecifePlanta19pInfinityOne6270m2, titulo: 'Infinity One - 62,70 m² (19º pavimento)' },
      { src: infinityRecifePlanta19pInfinityTwo9445m2, titulo: 'Infinity Two - 94,45 m² (19º pavimento)' },
      { src: infinityRecifePlanta19pInfinityTwo9710m2, titulo: 'Infinity Two - 97,10 m² (19º pavimento)' },
      { src: infinityRecifePaginaOriginalPavimentoSemienterradoGaragemEBicicletario, titulo: 'Pavimento semienterrado - garagem e bicicletário - página de referência com legendas' },
      { src: infinityRecifePaginaOriginalPavimentoTerreoHallAcessosEntrada, titulo: 'Pavimento térreo - hall, acessos e entrada - página de referência com legendas' },
      { src: infinityRecifePaginaOriginalPrimeiroPavimentoEstacionamento, titulo: '1º pavimento - estacionamento - página de referência com legendas' },
      { src: infinityRecifePaginaOriginalPavimentoLazerPiscinasAcademiaGourmet, titulo: 'Pavimento de lazer - piscinas, academia e gourmet - página de referência com legendas' },
      { src: infinityRecifePaginaOriginalSegundoPavimentoDistribuicaoUnidades, titulo: '2º pavimento - distribuição das unidades - página de referência com legendas' },
      { src: infinityRecifePaginaOriginalPavimentos04A18DistribuicaoUnidades, titulo: '4º ao 18º pavimentos - distribuição das unidades - página de referência com legendas' },
      { src: infinityRecifePaginaOriginalDecimoNonoPavimentoDistribuicaoUnidades, titulo: '19º pavimento - distribuição das unidades - página de referência com legendas' },
    ],
    locationImages: [
      { src: infinityRecifeMapaLocalizacaoInfinityRecife, titulo: 'Mapa de localização do Infinity Recife em Boa Viagem' },
      { src: infinityRecifeEntornoPraiaPorDoSol, titulo: 'Fotografia ilustrativa de mar e pôr do sol' },
      { src: infinityRecifeFachadaEdificioOriginalRetrofit, titulo: 'Fotografia histórica do edifício original antes do retrofit' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-solare', name: 'Beach Class Solare', image: solareCover,
    city: 'Praia do Cupe, PE', neighborhood: 'Praia do Cupe', locationTitle: 'Praia do Cupe - próximo a Porto de Galinhas/PE',
    address: 'Praia do Cupe, próximo a Porto de Galinhas, Pernambuco',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Solare%20Praia%20do%20Cupe%20Pernambuco',
    area: '32 e 63 m²', profile: 'Studios e apartamentos, com opções Garden', detail: '1 vaga por apartamento',
    description: 'O Beach Class Solare Residence é um empreendimento da Moura Dubeux na região da Praia do Cupe, próximo a Porto de Galinhas, em Pernambuco. O projeto apresenta apartamentos de aproximadamente 32 m² e 63 m², com varanda gourmet e opções Garden. O lazer reúne piscinas com ilhas e hidromassagem, restaurante com bar e terraço, academia, brinquedoteca e espaços ao ar livre. O material comercial também apresenta possibilidades de integração de unidades de 32+32 m² e 63+32 m², sujeitas à confirmação comercial.',
    highlights: ['32 e 63 m²', 'Opções Garden', '1 vaga por apartamento', 'Praia do Cupe'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Praia do Cupe, Pernambuco'], ['Tipologias', 'Studios e apartamentos com opções Garden'], ['Garagem', '1 vaga por apartamento']],
    technical: [
      ['Nome comercial', 'Beach Class Solare Residence'],
      ['Localização', 'Praia do Cupe, próximo a Porto de Galinhas, Pernambuco'],
      ['Áreas dos apartamentos', 'Aproximadamente 32 m² e 63 m²'],
      ['Integração de unidades', 'Possibilidades de 32+32 m² e 63+32 m² apresentadas no book, sujeitas à confirmação comercial'],
      ['Garden', 'Opções com jardim privativo; metragem dos jardins não informada no material'],
      ['Pavimentos apresentados', 'Térreo e 1º ao 3º andar'],
      ['Garagem', '1 vaga por apartamento e estacionamento para visitantes'],
      ['Varanda', 'Varanda gourmet'],
      ['Água quente', 'Chuveiros com aquecimento de água central'],
      ['Áreas comuns', 'Mobiliadas e equipadas'],
      ['Material', 'Perspectivas ilustrativas do projeto'],
    ],
    amenities: ['Piscinas adulto e infantil', 'Piscinas com ilhas e hidromassagem', 'Lobby e recepção', 'Restaurante com bar', 'Terraço do restaurante', 'Academia', 'Brinquedoteca', 'Playground', 'Quadra poliesportiva', 'Apoio churrasqueira', 'Loja de conveniência', 'Bicicletário', 'Pet place e pet wash', 'Desembarque e acesso à praia'],
    security: ['Fechadura eletrônica nas portas de entrada dos apartamentos'],
    sustainability: ['Placas solares', 'Irrigação inteligente', '3 pontos para carro elétrico'],
    projectTeam: ['Projetistas não informados no material disponível'],
    gallery: [
      { src: solarePoolsAerial, titulo: 'Beach Class Solare - perspectiva aérea das piscinas com ilhas' },
      { src: solareFacade, titulo: 'Perspectiva da fachada dos blocos junto à piscina' },
      { src: solarePoolsSunset, titulo: 'Perspectiva das piscinas e fachadas ao entardecer' },
      { src: solarePoolsHydromassage, titulo: 'Perspectiva das piscinas com ilhas e hidromassagem' },
      { src: solareLobby, titulo: 'Perspectiva do lobby e da recepção social' },
      { src: solareSportsCourt, titulo: 'Perspectiva da quadra poliesportiva' },
      { src: solareFitness, titulo: 'Perspectiva da academia' },
      { src: solarePlayroom, titulo: 'Perspectiva da brinquedoteca' },
      { src: solarePlayground, titulo: 'Perspectiva do playground ao ar livre' },
      { src: solareRestaurant, titulo: 'Perspectiva do restaurante com bar' },
      { src: solareRestaurantTerrace, titulo: 'Perspectiva do terraço do restaurante' },
      { src: solareStudioLiving, titulo: 'Perspectiva do estar e cozinha do apartamento de 32 m²' },
      { src: solareStudioBedroom, titulo: 'Perspectiva do quarto e estar do apartamento de 32 m²' },
      { src: solareStudioBalcony, titulo: 'Perspectiva da varanda do apartamento de 32 m²' },
      { src: solareApartmentLiving, titulo: 'Perspectiva da sala de estar do apartamento de 63 m²' },
      { src: solareApartmentBalcony, titulo: 'Perspectiva da varanda do apartamento de 63 m²' },
      { src: solareIntegratedStudiosLiving, titulo: 'Perspectiva da sala da configuração integrada de 32+32 m²' },
      { src: solareIntegratedStudiosLivingAlt, titulo: 'Segunda perspectiva da sala da configuração integrada de 32+32 m²' },
      { src: solareIntegratedStudiosSuite, titulo: 'Perspectiva da suíte da configuração integrada de 32+32 m²' },
      { src: solareIntegratedStudiosBalcony, titulo: 'Perspectiva da varanda da configuração integrada de 32+32 m²' },
      { src: solareIntegratedApartmentLiving, titulo: 'Perspectiva da sala da configuração integrada de 63+32 m²' },
      { src: solareIntegratedApartmentBalcony, titulo: 'Perspectiva da varanda da configuração integrada de 63+32 m²' },
      { src: solareStudioGarden, titulo: 'Perspectiva do Garden do apartamento de 32 m²' },
      { src: solareApartmentGarden, titulo: 'Perspectiva do Garden do apartamento de 63 m²' },
      { src: solareBicycleRack, titulo: 'Perspectiva do bicicletário' },
      { src: solarePetPlace, titulo: 'Perspectiva do pet place e pet wash' },
    ],
    floorPlans: [
      { src: solareStudioPlan, titulo: 'Apartamento de 32 m²' },
      { src: solareApartmentPlan, titulo: 'Apartamento de 63 m²' },
      { src: solareIntegratedStudiosPlan, titulo: 'Possibilidade de integração 32+32 m² - sujeita à confirmação comercial' },
      { src: solareIntegratedStudiosTwoSuitesPlan, titulo: 'Possibilidade de integração 32+32 m² com duas suítes - sujeita à confirmação comercial' },
      { src: solareIntegratedApartmentPlan, titulo: 'Possibilidade de integração 63+32 m² - sujeita à confirmação comercial' },
      { src: solareGroundPlan, titulo: 'Pavimento térreo' },
      { src: solareGroundPlanLegends, titulo: 'Pavimento térreo com numeração e legendas' },
      { src: solareTypicalFloorPlan, titulo: 'Pavimentos do 1º ao 3º andar' },
      { src: solareTypicalFloorPlanLegends, titulo: 'Pavimentos do 1º ao 3º andar com numeração e legendas' },
      { src: solareSitePlan, titulo: 'Implantação geral do condomínio' },
      { src: solareSitePlanLegends, titulo: 'Implantação geral com legendas de lazer e serviços' },
    ],
    locationImages: [
      { src: solareLocationMap, titulo: 'Mapa de localização do Beach Class Solare e pontos de referência' },
      { src: solareCupeAerial, titulo: 'Entorno: vista aérea da Praia do Cupe' },
      { src: solareBeachLandscape, titulo: 'Entorno: paisagem litorânea apresentada no book' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-wave', name: 'Beach Class Wave', image: waveCover,
    city: 'Tamandaré, PE', neighborhood: 'Praia dos Carneiros', locationTitle: 'Praia dos Carneiros - Tamandaré/PE',
    address: 'Praia dos Carneiros, Tamandaré/PE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Wave%20Praia%20dos%20Carneiros%20Tamandare%20PE',
    area: '32 e 63 m²', profile: 'Studios e apartamentos de 2 quartos, com opções Garden', detail: '536 unidades em 8 blocos',
    description: 'O Beach Class Wave é um empreendimento da Moura Dubeux na Praia dos Carneiros, em Tamandaré, Pernambuco, com estrutura de resort e paisagismo tropical. O projeto reúne 536 unidades em oito blocos, com studios de 32 m² e apartamentos de dois quartos de 63 m², todos com varanda gourmet e opções Garden. O lazer inclui piscinas com prainhas e spas, bar da piscina, espaços luau e barbecue, redário, quadras esportivas, academia e restaurante com terraço. Uma alameda conecta o condomínio ao acesso direto à praia.',
    highlights: ['32 e 63 m²', '536 unidades em 8 blocos', 'Varanda gourmet e opções Garden', 'Praia dos Carneiros'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Praia dos Carneiros, Tamandaré/PE'], ['Unidades', '536 unidades residenciais'], ['Garagem', '512 vagas rotativas']],
    technical: [
      ['Área do terreno', '45.223,96 m²'],
      ['Área privativa', '20.874,64 m²'],
      ['Unidades', '536 unidades residenciais'],
      ['Blocos', '8 blocos residenciais, com térreo e 3 pavimentos tipo'],
      ['Studios', '472 unidades de 32 m²'],
      ['2 quartos', '64 apartamentos de 63 m²'],
      ['Garden', 'Opções com garden privativo no térreo'],
      ['Varanda', 'Varanda gourmet em todos os apartamentos'],
      ['Garagem', '512 vagas em sistema rotativo, com vagas mais largas conforme o material'],
      ['Energia de emergência', 'Gerador para as áreas comuns; uma tomada e um ponto de luz de emergência por unidade'],
      ['Material', 'Perspectivas ilustrativas; móveis, utensílios, equipamentos e decoração não integram necessariamente os apartamentos negociados'],
    ],
    amenities: ['Piscinas adulto e infantil', 'Prainhas e spas', 'Bar da piscina', 'Espaço luau', 'Espaço barbecue', 'Redário', 'Playground', 'Playground de areia', 'Brinquedoteca', 'Academia', '2 quadras de beach tennis', 'Quadra de tênis', 'Quadra poliesportiva', 'Pet place e pet wash', 'Pista de cooper', 'Espaço zen', 'Lounges externos e jardins', 'Restaurante com terraço', 'Hall social e lobby', 'Espaço gourmet', 'Teen lounge', 'Alameda de acesso direto à praia', 'Guarda de equipamentos para caiaques e stand up paddle', 'Espaço destinado a minimarket', 'Espaço delivery e e-commerce', 'Bicicletas e patinetes compartilhados'],
    security: ['Fechaduras eletrônicas nos apartamentos'],
    sustainability: ['Iluminação LED nas áreas comuns', 'Torneiras temporizadas nos banheiros das áreas comuns', '3 tomadas compartilhadas para carros elétricos', 'Lixeira com predisposição para coleta seletiva', 'Irrigação inteligente', 'Paisagismo com preferência por espécies nativas', 'Placas solares para atender parte das áreas comuns'],
    projectTeam: ['Pontual Arquitetos | Arquitetura', 'Takeda Design | Paisagismo', 'Zirpoli Arquitetura | Ambientação'],
    gallery: [
      { src: wavePoolsAndBlocks, titulo: 'Beach Class Wave - perspectiva geral das piscinas e blocos' },
      { src: wavePoolSpa, titulo: 'Perspectiva da piscina com prainha e spa' },
      { src: wavePoolBar, titulo: 'Perspectiva do bar da piscina' },
      { src: waveLuau, titulo: 'Perspectiva do espaço luau e convivência' },
      { src: waveBarbecue, titulo: 'Perspectiva do espaço barbecue e redário' },
      { src: waveSportsCourts, titulo: 'Perspectiva aérea do complexo de quadras esportivas' },
      { src: waveFitness, titulo: 'Perspectiva da academia' },
      { src: waveBeachAccess, titulo: 'Perspectiva da alameda de acesso à praia e guarda de equipamentos' },
      { src: wavePlayground, titulo: 'Perspectiva do playground ao ar livre' },
      { src: wavePlayroom, titulo: 'Perspectiva da brinquedoteca infantil' },
      { src: waveHall, titulo: 'Perspectiva do hall social e lounge' },
      { src: waveRestaurant, titulo: 'Perspectiva do restaurante' },
      { src: waveRestaurantTerrace, titulo: 'Perspectiva do terraço do restaurante' },
      { src: waveFacade, titulo: 'Perspectiva da fachada do bloco residencial com piscina' },
      { src: waveStudioLiving, titulo: 'Perspectiva do estar e cozinha do Studio de 32 m²' },
      { src: waveStudioBedroom, titulo: 'Perspectiva do quarto do Studio de 32 m²' },
      { src: waveStudioBalcony, titulo: 'Perspectiva da varanda gourmet do Studio de 32 m²' },
      { src: waveStudioGarden, titulo: 'Perspectiva do Garden privativo do Studio de 32 m²' },
      { src: waveApartmentLiving, titulo: 'Perspectiva da sala e cozinha do apartamento de 2 quartos de 63 m²' },
      { src: waveApartmentBalcony, titulo: 'Perspectiva da varanda gourmet do apartamento de 63 m²' },
      { src: waveApartmentGarden, titulo: 'Perspectiva do Garden privativo do apartamento de 63 m²' },
    ],
    floorPlans: [
      { src: waveSitePlan, titulo: 'Implantação geral do condomínio' },
      { src: waveSocialBlockPlan, titulo: 'Implantação do bloco social' },
      { src: waveGroundPlan, titulo: 'Pavimento térreo com Gardens' },
      { src: waveTypicalFloorPlan, titulo: 'Pavimentos tipo do 1º ao 3º andar' },
      { src: waveStudioPlan, titulo: 'Studio de 32 m²' },
      { src: waveApartmentPlan, titulo: 'Apartamento de 2 quartos de 63 m²' },
      { src: waveSitePlanLegends, titulo: 'Implantação geral com ambientes numerados e legendas' },
      { src: waveSocialBlockPlanLegends, titulo: 'Bloco social com legendas' },
      { src: waveGroundPlanLegends, titulo: 'Pavimento térreo (página de referência)' },
      { src: waveTypicalFloorPlanLegends, titulo: 'Pavimentos do 1º ao 3º andar (página de referência)' },
      { src: waveStudioPlanLegends, titulo: 'Studio de 32 m² (página de referência)' },
      { src: waveApartmentPlanLegends, titulo: 'Apartamento de 2 quartos de 63 m² (página de referência)' },
    ],
    locationImages: [
      { src: waveLocationAerial, titulo: 'Localização do Beach Class Wave sobre vista aérea' },
      { src: waveLocationMap, titulo: 'Mapa de localização do Beach Class Wave e pontos de interesse' },
      { src: waveCarneirosAerial, titulo: 'Entorno: vista aérea da Praia dos Carneiros' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-cumbuco', name: 'Beach Class Cumbuco', image: cumbucoCover,
    city: 'Caucaia, CE', neighborhood: 'Cumbuco', locationTitle: 'Cumbuco - Caucaia/CE',
    address: 'Rua Lagoa das Rosas, S/N, Gleba CP7, Cumbuco, Caucaia/CE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Cumbuco%20Rua%20Lagoa%20das%20Rosas%20Caucaia%20CE',
    area: '30 a 83 m²', profile: 'Studios, quarto e sala e 2 quartos, com opções Garden', detail: '640 unidades em 10 blocos',
    description: 'O Beach Class Cumbuco é um empreendimento residencial à beira-mar em Cumbuco, Caucaia, no litoral do Ceará. O projeto reúne dez blocos e 640 unidades, com studios, quarto e sala e apartamentos de dois quartos, além de opções Garden com área externa privativa. A implantação conecta as áreas de lazer ao acesso à praia, com espaços de convivência e apoio aos esportes náuticos.',
    highlights: ['30 a 83 m²', 'Studios, quarto e sala e 2 quartos', '640 unidades', 'À beira-mar no Cumbuco'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Cumbuco, Caucaia/CE'], ['Unidades', '640 apartamentos'], ['Garagem', '646 vagas rotativas, com uso conforme tipologia e disponibilidade']],
    technical: [
      ['Área do terreno', '58.723,91 m²'],
      ['Área privativa total', '27.046,60 m²'],
      ['Blocos', '10 blocos residenciais: A, B, C, D, E, F, G, H, I e J'],
      ['Pavimentos', 'Térreo + 3 pavimentos por bloco'],
      ['Unidades', '640 unidades residenciais, com 64 por bloco'],
      ['Apartamentos tipo', 'Studio de 30 m²; quarto e sala de 40 m²; 2 quartos de 61 m²'],
      ['Unidades Garden', 'Studio de 42 m² (30 + 12 m² de jardim); quarto e sala de 61 m² (40 + 21 m²); 2 quartos de 83 m² (61 + 22 m²)'],
      ['Garagem', '646 vagas rotativas: direito de uso de 2 vagas para 2 quartos e 1 vaga para studios e quarto/sala, condicionado à disponibilidade e vacância'],
      ['Elevadores', 'Elevador social nos blocos residenciais'],
      ['Espaço para restaurante', 'Equipamentos de cozinha de responsabilidade dos compradores; gestão conforme a convenção do condomínio'],
      ['Material', 'Perspectivas ilustrativas; especificações e acabamentos conforme o memorial descritivo'],
    ],
    amenities: ['Piscina adulto com área de natação', 'Piscina infantil', 'Prainha', 'Deck e áreas de estar', 'Espaço para restaurante', 'Academia', 'Spa', 'Sauna integrada à piscina', 'Terraço de jogos', 'Brinquedoteca', 'Playground', 'Salão de beleza', 'Espaço para massagem', 'Praça central', 'Quadras de beach tennis', 'Guarderia para equipamentos de esportes náuticos', 'Lobby com espaço para check-in e check-out', 'Maleiro', 'Administração', 'Lavanderia compartilhada', 'Minimarket', 'Pet place', 'Embarque e desembarque'],
    security: ['Fechadura eletrônica nos apartamentos'],
    sustainability: ['Irrigação automatizada dos jardins', 'Aproveitamento de água das condensadoras de ar-condicionado para irrigação', 'Infraestrutura seca para carregamento de carros elétricos em 10 vagas rotativas', 'Soluções para redução do consumo de água em louças e metais, conforme especificações', 'Iluminação LED nas áreas comuns', 'Medição individualizada de água', 'Ambientes projetados para iluminação e ventilação naturais'],
    projectTeam: ['Daniel Arruda Arquitetos | Arquitetura', 'Takeda Design | Paisagismo', 'Zirpoli Arquitetos | Ambientação', 'Singular Projetos | Instalações', 'Pedreira Ônix Engenharia | Estrutura'],
    gallery: [
      { src: cumbucoSeaAerial, titulo: 'Beach Class Cumbuco - perspectiva aérea frente ao mar' },
      { src: cumbucoAerialContext, titulo: 'Perspectiva aérea da implantação e da praia' },
      { src: cumbucoPool, titulo: 'Perspectiva da piscina externa e das palmeiras' },
      { src: cumbucoEntrance, titulo: 'Perspectiva da portaria principal' },
      { src: cumbucoFacade, titulo: 'Perspectiva da fachada dos blocos residenciais' },
      { src: cumbucoReceptionExterior, titulo: 'Perspectiva da entrada da recepção' },
      { src: cumbucoReceptionInterior, titulo: 'Perspectiva do interior do lobby de recepção' },
      { src: cumbucoPoolsAerial, titulo: 'Perspectiva das piscinas com o mar ao fundo' },
      { src: cumbucoRestaurantExterior, titulo: 'Perspectiva do espaço para restaurante junto à piscina' },
      { src: cumbucoRestaurantTables, titulo: 'Perspectiva das mesas e varanda do espaço para restaurante' },
      { src: cumbucoSportsCourts, titulo: 'Perspectiva das quadras esportivas' },
      { src: cumbucoGym, titulo: 'Perspectiva da academia' },
      { src: cumbucoSpa, titulo: 'Perspectiva dos ambientes do spa' },
      { src: cumbucoPlayroom, titulo: 'Perspectiva da brinquedoteca' },
      { src: cumbucoPlayground, titulo: 'Perspectiva do playground externo' },
      { src: cumbucoGames, titulo: 'Perspectiva do terraço de jogos' },
      { src: cumbucoCentralSquare, titulo: 'Perspectiva da praça central e do paisagismo' },
      { src: cumbucoTwoBedroomGarden, titulo: 'Perspectiva do apartamento de 2 quartos com Garden' },
      { src: cumbucoTwoBedroomLiving, titulo: 'Perspectiva da sala e cozinha do apartamento de 2 quartos' },
      { src: cumbucoOneBedroomGarden, titulo: 'Perspectiva do apartamento quarto e sala com Garden' },
      { src: cumbucoStudioGarden, titulo: 'Perspectiva do Studio com Garden' },
      { src: cumbucoStudioInterior, titulo: 'Perspectiva do interior do Studio' },
      { src: cumbucoNauticalStorage, titulo: 'Perspectiva da guarderia para equipamentos náuticos' },
    ],
    floorPlans: [
      { src: cumbucoSitePlan, titulo: 'Implantação geral dos 10 blocos' },
      { src: cumbucoReceptionPlan, titulo: 'Bloco de recepção' },
      { src: cumbucoRestaurantPlan, titulo: 'Bloco restaurante' },
      { src: cumbucoLeisurePlan, titulo: 'Bloco de lazer - academia, spa e brinquedoteca' },
      { src: cumbucoGroundPlan, titulo: 'Pavimento térreo - unidades Garden' },
      { src: cumbucoTypicalFloorPlan, titulo: 'Pavimento tipo - 1º, 2º e 3º andares' },
      { src: cumbucoTwoBedroomGardenPlan, titulo: 'Apartamento 2 quartos Garden - 83 m² (61 m² + 22 m² de jardim)' },
      { src: cumbucoTwoBedroomPlan, titulo: 'Apartamento 2 quartos - 61 m²' },
      { src: cumbucoOneBedroomGardenPlan, titulo: 'Quarto e sala Garden - 61 m² (40 m² + 21 m² de jardim)' },
      { src: cumbucoOneBedroomPlan, titulo: 'Quarto e sala - 40 m²' },
      { src: cumbucoStudioGardenPlan, titulo: 'Studio Garden - 42 m² (30 m² + 12 m² de jardim)' },
      { src: cumbucoStudioPlan, titulo: 'Studio - 30 m²' },
      { src: cumbucoNauticalStoragePlan, titulo: 'Bloco guarderia para equipamentos náuticos' },
    ],
    locationImages: [
      { src: cumbucoLocationMap, titulo: 'Mapa de localização do Beach Class Cumbuco' },
      { src: cumbucoBeachSunset, titulo: 'Entorno: praia do Cumbuco ao entardecer' },
      { src: cumbucoKitesurfSea, titulo: 'Entorno: kitesurf no mar do Cumbuco' },
      { src: cumbucoKitesurfGroup, titulo: 'Entorno: praticantes de kitesurf no Cumbuco' },
      { src: cumbucoKitesurfSailing, titulo: 'Entorno: velejo de kitesurf no Cumbuco' },
      { src: cumbucoBeachPalms, titulo: 'Entorno: coqueiros e praia do Cumbuco' },
    ],
  }),
  createDevelopment({
    slug: 'concept-joao-pessoa', name: 'Concept João Pessoa', image: conceptJoaoPessoaCover,
    city: 'João Pessoa, PB', neighborhood: 'Miramar', locationTitle: 'Miramar - João Pessoa/PB',
    address: 'Avenida Senador Ruy Carneiro, Miramar, João Pessoa/PB',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Concept%20Jo%C3%A3o%20Pessoa%20Avenida%20Senador%20Ruy%20Carneiro%20Miramar%20Jo%C3%A3o%20Pessoa%20PB',
    area: '21 a 49 m²', profile: 'Studios e suítes com living ou home office', detail: '270 unidades e lazer no rooftop',
    description: 'O Concept João Pessoa é um empreendimento da Moura Dubeux no bairro Miramar, na Avenida Senador Ruy Carneiro, em João Pessoa, Paraíba. O projeto reúne 270 unidades, com studios, suíte com living e suíte com home office, de 21 m² a 49 m². O rooftop oferece piscina aquecida com vista panorâmica, deck, terraços e lounges gourmet. No mezanino, coworking, academia, lavanderia e lounge de conveniência complementam a proposta de praticidade e convivência.',
    highlights: ['21 a 49 m²', '270 unidades', 'Piscina aquecida no rooftop', 'Miramar, João Pessoa'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Miramar, João Pessoa/PB'], ['Tipologias', 'Studios e suítes com living ou home office'], ['Garagem', '114 vagas, entre rotativas, vinculadas e comerciais']],
    technical: [
      ['Área do terreno', '1.917,39 m²'],
      ['Unidades', '270 unidades'],
      ['Composição', 'Subsolo, térreo, mezanino, 27 pavimentos tipo e cobertura com rooftop'],
      ['Pavimento tipo', '10 unidades por pavimento'],
      ['Studios', '21 m², 22 m², 24 m² ou 27 m², conforme terminação'],
      ['Suíte e living', '35 m², 36 m² ou 39 m², conforme terminação e pavimento'],
      ['Suíte e home office', '49 m², terminação 07'],
      ['Garagem', '114 vagas: 75 rotativas, 27 vinculadas às unidades de terminação 07 e 12 comerciais'],
      ['Lazer', 'Piscina aquecida, deck, terraços e lounges gourmet no rooftop'],
      ['Mezanino', 'Coworking, academia, lounge de conveniência e lavanderia'],
      ['Térreo', 'Hall social, loja, estacionamento residencial e comercial'],
      ['Áreas comuns', 'Equipadas, mobiliadas e climatizadas conforme memorial descritivo'],
      ['Conectividade', 'Infraestrutura para Wi-Fi nas áreas comuns, conforme memorial descritivo'],
      ['Personalização', 'MD Store, conforme disponibilidade e condições de cada unidade'],
      ['Material', 'Perspectivas ilustrativas; entrega de acabamentos, composição e mobiliário conforme memorial descritivo e contrato'],
    ],
    amenities: ['Piscina aquecida no rooftop', 'Deck', 'Terraço da piscina', 'Terraço gourmet', 'Lounge gourmet com vista panorâmica', 'Lounge gourmet', 'Terraço rooftop', 'Coworking', 'Academia', 'Lounge de conveniência', 'Lavanderia', 'Hall social', 'Hall de elevadores', 'Loja no edifício', 'Guarda-volumes e infraestrutura para e-commerce'],
    security: ['Fechadura eletrônica no acesso residencial', 'Infraestrutura para câmeras de segurança nas áreas comuns', 'Controle de acesso de veículos e pedestres'],
    sustainability: ['2 tomadas para carros elétricos', 'Irrigação automatizada', 'Torneiras, chuveiros e vasos com redutores de vazão', 'Medição individualizada de água', 'Paisagismo com predominância de plantas nativas', 'Placas solares para atender parte da demanda do condomínio'],
    projectTeam: ['Ricardo Nogueira - Nogueira Arquitetos | Arquitetura', 'Humberto e Analice - Zirpoli Arquitetura | Ambientação', 'Bia Campelo | Paisagismo'],
    gallery: [
      { src: conceptJoaoPessoaStreetFacade, titulo: 'Concept João Pessoa - perspectiva da torre completa vista da rua' },
      { src: conceptJoaoPessoaBalconies, titulo: 'Perspectiva do detalhe das varandas e vista da cidade' },
      { src: conceptJoaoPessoaEntrance, titulo: 'Perspectiva do acesso principal e loja no térreo' },
      { src: conceptJoaoPessoaUpperFloors, titulo: 'Perspectiva dos pavimentos altos e terraços' },
      { src: conceptJoaoPessoaTowerCutout, titulo: 'Perspectiva isolada da torre' },
      { src: conceptJoaoPessoaPoolPanorama, titulo: 'Perspectiva da piscina no rooftop com vista panorâmica' },
      { src: conceptJoaoPessoaPoolGourmet, titulo: 'Perspectiva da piscina e área gourmet no rooftop' },
      { src: conceptJoaoPessoaSeaTerrace, titulo: 'Perspectiva do terraço gourmet com vista para o mar' },
      { src: conceptJoaoPessoaGourmetPanorama, titulo: 'Perspectiva do lounge gourmet com vista panorâmica' },
      { src: conceptJoaoPessoaGourmetIndoor, titulo: 'Perspectiva do lounge gourmet interno' },
      { src: conceptJoaoPessoaFitness, titulo: 'Perspectiva da academia equipada' },
      { src: conceptJoaoPessoaConvenienceLaundry, titulo: 'Perspectiva do lounge de conveniência e lavanderia' },
      { src: conceptJoaoPessoaReception, titulo: 'Perspectiva do hall social e recepção' },
      { src: conceptJoaoPessoaElevatorHall, titulo: 'Perspectiva do hall de elevadores do pavimento' },
      { src: conceptJoaoPessoaLiving39, titulo: 'Perspectiva da suíte e living do apartamento de 39 m²' },
      { src: conceptJoaoPessoaLiving35, titulo: 'Perspectiva da suíte e living do apartamento de 35 m²' },
      { src: conceptJoaoPessoaStudio24, titulo: 'Perspectiva do Studio de 24 m²' },
      { src: conceptJoaoPessoaStudio21, titulo: 'Perspectiva do Studio de 21 m²' },
      { src: conceptJoaoPessoaHomeOfficeLiving, titulo: 'Perspectiva da sala do apartamento com home office de 49 m²' },
      { src: conceptJoaoPessoaHomeOfficeBedroom, titulo: 'Perspectiva do quarto do apartamento com home office de 49 m²' },
    ],
    floorPlans: [
      { src: conceptJoaoPessoaRooftopPlan, titulo: 'Rooftop - piscina, terraços e lounges' },
      { src: conceptJoaoPessoaMezzaninePlan, titulo: 'Mezanino - academia, coworking e lavanderia' },
      { src: conceptJoaoPessoaGroundPlan, titulo: 'Térreo - hall, loja e estacionamentos' },
      { src: conceptJoaoPessoaTypicalFloorPlan, titulo: 'Pavimento tipo - 10 unidades' },
      { src: conceptJoaoPessoaLiving39Plan, titulo: 'Suíte e living de 39 m² - terminação 04' },
      { src: conceptJoaoPessoaLiving35Plan, titulo: 'Suíte e living de 35 m² - terminação 01' },
      { src: conceptJoaoPessoaStudio24Plan, titulo: 'Studio de 24 m² - terminações 02, 03 e 06' },
      { src: conceptJoaoPessoaStudio21Plan, titulo: 'Studio de 21 m² - terminações 08 e 09' },
      { src: conceptJoaoPessoaHomeOfficePlan, titulo: 'Suíte e home office de 49 m² - terminação 07' },
    ],
    locationImages: [
      { src: conceptJoaoPessoaLocation, titulo: 'Localização do Concept João Pessoa no bairro Miramar' },
    ],
  }),
  createDevelopment({
    slug: 'concept-jardins', name: 'Concept Jardins', image: conceptJardinsCover,
    city: 'Aracaju, SE', neighborhood: 'Jardins', locationTitle: 'Bairro Jardins - Aracaju/SE',
    address: 'Avenida Dr. José Machado de Souza, 440, Jardins, Aracaju/SE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Concept%20Jardins%20Avenida%20Dr.%20Jos%C3%A9%20Machado%20de%20Souza%20440%20Aracaju%20SE',
    area: '31 a 68 m²', profile: 'Studios e apartamentos de 1 e 2 quartos', detail: '263 unidades residenciais e 7 lojas',
    description: 'O Concept Jardins é um empreendimento de uso misto da Moura Dubeux no bairro Jardins, em Aracaju, com 263 unidades residenciais e sete lojas no térreo, com acesso independente. O projeto reúne studios de aproximadamente 31 m² e apartamentos de um quarto de 39 m² e dois quartos de 68 m². As áreas comuns oferecem piscinas, spa, sports bar, academia e espaços de convivência, além de lavanderia compartilhada, delivery com lockers e apoio para bicicletas, em uma região com comércio e serviços.',
    highlights: ['31, 39 e 68 m²', 'Studios, 1 e 2 quartos', '263 unidades residenciais', '7 lojas no térreo'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Jardins, Aracaju/SE'], ['Tipologias', 'Studios e apartamentos de 1 e 2 quartos'], ['Garagem', '172 vagas, incluindo 14 comerciais rotativas']],
    technical: [
      ['Área do terreno', '2.900,08 m²'],
      ['Unidades residenciais', '263 unidades privativas'],
      ['Studios', '75 unidades de aproximadamente 31 m²'],
      ['1 quarto', '157 apartamentos de aproximadamente 39 m²'],
      ['2 quartos', '31 apartamentos de aproximadamente 68 m²'],
      ['Lojas comerciais', '7 lojas no térreo, com acesso independente da área residencial'],
      ['Pavimentos tipo', '15 pavimentos com 17 unidades por pavimento, totalizando 255 unidades'],
      ['Pavimento vazado 1', 'Garagem, bicicletários e armários privativos'],
      ['Pavimento vazado 2', 'Áreas comuns e 8 unidades privativas'],
      ['Garagem', '172 vagas, incluindo 14 vagas comerciais rotativas'],
      ['Varandas', 'Infraestrutura para bancada gourmet; bancadas e metais não inclusos na entrega padrão'],
      ['Conectividade', 'Infraestrutura para Wi-Fi nas áreas comuns sociais'],
      ['Material', 'Perspectivas ilustrativas; metragens comerciais arredondadas e condições de entrega conforme book e memorial descritivo'],
    ],
    amenities: ['Piscina', 'Piscina infantil', 'Prainha', 'Lounge com hidromassagem', 'Deck e área gourmet', 'Salão de festas com copa de apoio', 'Espaço gourmet', 'Sports bar', 'Academia', 'Espaço kids', 'Spa', 'Espaço para minimarket', 'Hall residencial', 'Lavanderia compartilhada equipada', 'Espaço delivery com lockers', 'Bicicletário', 'Pet place', 'Espaço para car wash e bike station', 'Administração'],
    security: ['Fechaduras eletrônicas nas portas principais dos apartamentos', 'Controle automatizado de acesso de pessoas e veículos', 'Infraestrutura para câmeras de monitoramento das áreas comuns'],
    sustainability: ['Sistema automatizado de irrigação do jardim', 'Tomadas compartilhadas para carros elétricos'],
    projectTeam: ['Attic Arquitetura | Arquitetura e tecnologia BIM', 'Zirpoli Arquitetura | Ambientação', 'Takeda Design | Paisagismo'],
    gallery: [
      { src: conceptJardinsPoolFacade, titulo: 'Concept Jardins - perspectiva da fachada com piscina e áreas verdes' },
      { src: conceptJardinsVerticalFacade, titulo: 'Perspectiva vertical da torre' },
      { src: conceptJardinsFrontFacade, titulo: 'Perspectiva frontal da torre' },
      { src: conceptJardinsShops, titulo: 'Perspectiva das lojas comerciais no térreo' },
      { src: conceptJardinsKidsPool, titulo: 'Perspectiva da piscina infantil' },
      { src: conceptJardinsPartyRoom, titulo: 'Perspectiva do salão de festas' },
      { src: conceptJardinsGourmet, titulo: 'Perspectiva do espaço gourmet' },
      { src: conceptJardinsSpa, titulo: 'Perspectiva do spa' },
      { src: conceptJardinsSportsBar, titulo: 'Perspectiva do sports bar' },
      { src: conceptJardinsKidsSpace, titulo: 'Perspectiva do espaço kids' },
      { src: conceptJardinsFitnessArea, titulo: 'Perspectiva da área de treino da academia' },
      { src: conceptJardinsFitnessEquipment, titulo: 'Perspectiva dos equipamentos da academia' },
      { src: conceptJardinsMinimarket, titulo: 'Perspectiva do espaço para minimarket' },
      { src: conceptJardinsTwoBedroomLiving, titulo: 'Perspectiva da sala do apartamento de 68 m²' },
      { src: conceptJardinsTwoBedroomRoom, titulo: 'Perspectiva do quarto do apartamento de 68 m²' },
      { src: conceptJardinsTwoBedroomSuite, titulo: 'Perspectiva da suíte do apartamento de 68 m²' },
      { src: conceptJardinsOneBedroomLiving, titulo: 'Perspectiva da sala do apartamento de 39 m²' },
      { src: conceptJardinsOneBedroomBalcony, titulo: 'Perspectiva da varanda do apartamento de 39 m²' },
      { src: conceptJardinsOneBedroomSuite, titulo: 'Perspectiva da suíte do apartamento de 39 m²' },
      { src: conceptJardinsStudio, titulo: 'Perspectiva do ambiente do Studio de 31 m²' },
      { src: conceptJardinsStudioBalcony, titulo: 'Perspectiva da varanda do Studio de 31 m²' },
      { src: conceptJardinsHall, titulo: 'Perspectiva do hall de entrada' },
      { src: conceptJardinsBicycleRack, titulo: 'Perspectiva do bicicletário' },
      { src: conceptJardinsPetPlace, titulo: 'Perspectiva do pet place' },
      { src: conceptJardinsLaundry, titulo: 'Perspectiva da lavanderia compartilhada' },
      { src: conceptJardinsDelivery, titulo: 'Perspectiva do espaço delivery e armários' },
      { src: conceptJardinsCarWash, titulo: 'Perspectiva do car wash e bike station' },
    ],
    floorPlans: [
      { src: conceptJardinsTwoBedroomPlan, titulo: 'Apartamento de 2 quartos de 68 m²' },
      { src: conceptJardinsOneBedroomPlan, titulo: 'Apartamento de 1 quarto de 39 m²' },
      { src: conceptJardinsStudioPlan, titulo: 'Studio de 31 m²' },
      { src: conceptJardinsSitePlan, titulo: 'Implantação geral do condomínio' },
      { src: conceptJardinsLeisurePlan, titulo: 'Pavimento de lazer e legenda' },
      { src: conceptJardinsTypicalFloorPlan, titulo: 'Pavimento tipo' },
      { src: conceptJardinsGroundPlan, titulo: 'Pavimento térreo' },
      { src: conceptJardinsSitePlanLegends, titulo: 'Implantação geral (página de referência)' },
      { src: conceptJardinsLeisurePlanLegends, titulo: 'Pavimento de lazer (página de referência)' },
      { src: conceptJardinsTypicalFloorPlanLegends, titulo: 'Pavimento tipo (página de referência)' },
      { src: conceptJardinsTwoBedroomPlanLegends, titulo: 'Apartamento de 68 m² (página de referência)' },
      { src: conceptJardinsOneBedroomPlanLegends, titulo: 'Apartamento de 39 m² (página de referência)' },
      { src: conceptJardinsStudioPlanLegends, titulo: 'Studio de 31 m² (página de referência)' },
      { src: conceptJardinsGroundPlanLegends, titulo: 'Pavimento térreo (página de referência)' },
    ],
    locationImages: [
      { src: conceptJardinsBuildingLocation, titulo: 'Localização do Concept Jardins sobre vista aérea' },
      { src: conceptJardinsNeighborhoodLocation, titulo: 'Entorno: bairro Jardins e áreas verdes' },
      { src: conceptJardinsLocationMap, titulo: 'Mapa e serviços próximos ao Concept Jardins' },
    ],
  }),
  createDevelopment({
    slug: 'casa-jardins', name: 'Casa Jardins', image: casaJardinsCover,
    city: 'Aracaju, SE', neighborhood: 'Jardins', locationTitle: 'Bairro Jardins - Aracaju/SE',
    address: 'Bairro Jardins, Aracaju/SE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Casa%20Jardins%20Bairro%20Jardins%20Aracaju%20SE',
    area: '101 a 125 m², com opções Garden', profile: 'Apartamentos e Gardens em duas torres', detail: 'Casa Norte e Casa Sul',
    description: 'O Casa Jardins é um empreendimento residencial da Moura Dubeux no bairro Jardins, em Aracaju, Sergipe, com duas torres e espaços de convivência integrados à natureza. A Casa Norte oferece apartamentos de 101 m² e 124 m² e Gardens de 125 m²; a Casa Sul reúne apartamentos de 111 m² e Gardens de 114 m². As opções Garden contam com terraços descobertos. O lazer inclui piscinas, family club com hidromassagem aquecida, terraço grill, academia, crossfit e espaços infantis, próximo ao Parque da Sementeira e aos shoppings Jardins e Riomar.',
    highlights: ['101, 111 e 124 m²', 'Gardens de 114 e 125 m²', 'Casa Norte e Casa Sul', 'Jardins, Aracaju'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Jardins, Aracaju/SE'], ['Tipologias', 'Apartamentos e Gardens'], ['Garagem', 'Estacionamento privativo e vagas para visitantes']],
    technical: [
      ['Área do terreno', '3.721,58 m²'],
      ['Torres', '2 torres: Casa Norte (Torre A) e Casa Sul (Torre B)'],
      ['Pavimentos', 'Térreo, pavimento vazado, pavimento lazer com Gardens e 13 pavimentos tipo'],
      ['Casa Norte', 'Apartamentos de 101 m² e 124 m²'],
      ['Casa Sul', 'Apartamentos de 111 m²'],
      ['Gardens Casa Norte', '125 m² de apartamento e terraços descobertos de 40 m² ou 129 m²'],
      ['Gardens Casa Sul', '114 m² de apartamento e terraços descobertos de 79 m² ou 102 m²'],
      ['Garagem', 'Estacionamento privativo, vagas para visitantes e vagas para motos'],
      ['Áreas comuns', 'Equipadas e mobiliadas; academia, salão de festas e ateliê kids climatizados'],
      ['Varanda', 'Infraestrutura de água, gás, esgoto e elétrica'],
      ['Água quente', 'Infraestrutura para aquecimento a gás da água dos chuveiros das áreas sociais e suítes'],
      ['Conectividade', 'Infraestrutura para Wi-Fi nas áreas comuns'],
      ['Personalização', 'MD Store, conforme condições de contratação e execução'],
      ['Material', 'Perspectivas ilustrativas do projeto'],
    ],
    amenities: ['Piscina adulta com hidromassagem', 'Piscina infantil', 'Deck de piscina', 'Salão de festas', 'Terraço grill', 'Family club com hidromassagem aquecida', 'Academia', 'Crossfit ao ar livre', 'Playground', 'Ateliê kids', 'Lounge kids', 'Lounge festas', 'Terraço de encontros', 'Espaço relax', 'Terraços e lounges', 'Praça de boas-vindas', 'Halls das torres', 'Espaço delivery e e-commerce', 'Pet wash', 'Pet place', 'Paraciclo e bicicletários', 'Bike wash', 'Bike station', 'Garagem kids'],
    security: ['Infraestrutura para monitoramento de segurança nas áreas comuns', 'Guarita blindada', 'Controle automatizado de acesso de pedestres e veículos', 'Fechadura eletrônica nas portas sociais dos apartamentos'],
    sustainability: ['Um ponto para carregamento de carros elétricos por pavimento garagem', 'Irrigação automatizada', 'Iluminação LED em todas as áreas comuns', 'Placas solares para atender parte das áreas comuns', 'Calçada arborizada e muro verde'],
    projectTeam: ['Pontual Arquitetos | Arquitetura', 'Takeda Design | Paisagismo', 'Poligonus Arquitetura | Ambientação'],
    gallery: [
      { src: casaJardinsNightFacade, titulo: 'Casa Jardins - perspectiva noturna das torres Casa Norte e Casa Sul' },
      { src: casaJardinsDayFacade, titulo: 'Perspectiva diurna das duas torres' },
      { src: casaJardinsParkFacade, titulo: 'Perspectiva da fachada com vista para o parque' },
      { src: casaJardinsEntrance, titulo: 'Perspectiva do acesso de pedestres e portaria' },
      { src: casaJardinsHall, titulo: 'Perspectiva do hall social da Torre Casa Norte' },
      { src: casaJardinsPools, titulo: 'Perspectiva das piscinas, deck e área de lazer' },
      { src: casaJardinsGrill, titulo: 'Perspectiva do terraço grill e espaço gourmet' },
      { src: casaJardinsFamilyClub, titulo: 'Perspectiva do family club com hidromassagem e gourmet' },
      { src: casaJardinsPartyRoom, titulo: 'Perspectiva do salão de festas' },
      { src: casaJardinsFitness, titulo: 'Perspectiva da academia' },
      { src: casaJardinsCrossfit, titulo: 'Perspectiva da área de crossfit ao ar livre' },
      { src: casaJardinsPlayroom, titulo: 'Perspectiva do ateliê kids e brinquedoteca' },
      { src: casaJardinsPlayground, titulo: 'Perspectiva do playground' },
      { src: casaJardinsPetPlace, titulo: 'Perspectiva do pet place' },
      { src: casaJardinsNorthGarden, titulo: 'Perspectiva do terraço com hidro do Garden Casa Norte' },
      { src: casaJardinsSouthGarden, titulo: 'Perspectiva do terraço com hidro do Garden Casa Sul' },
      { src: casaJardinsNorth124Balcony, titulo: 'Perspectiva da varanda gourmet de 124 m² - Casa Norte' },
      { src: casaJardinsNorth124Living, titulo: 'Perspectiva da sala e jantar de 124 m² - Casa Norte' },
      { src: casaJardinsNorth124OptionalLiving, titulo: 'Perspectiva da sala opcional de 124 m² - Casa Norte' },
      { src: casaJardinsNorth101Living, titulo: 'Perspectiva da sala e jantar de 101 m² - Casa Norte' },
      { src: casaJardinsNorth101OptionalLiving, titulo: 'Perspectiva da sala opcional de 101 m² - Casa Norte' },
      { src: casaJardinsSouth111Living, titulo: 'Perspectiva da sala e jantar de 111 m² - Casa Sul' },
      { src: casaJardinsSouth111Balcony, titulo: 'Perspectiva da varanda gourmet de 111 m² - Casa Sul' },
      { src: casaJardinsSouth111KidsSuite, titulo: 'Perspectiva da suíte infantil de 111 m² - Casa Sul' },
      { src: casaJardinsSouth111CoupleSuite, titulo: 'Perspectiva da suíte de casal de 111 m² - Casa Sul' },
      { src: casaJardinsSouth111ThirdSuite, titulo: 'Perspectiva da terceira suíte de 111 m² - Casa Sul' },
      { src: casaJardinsSouth111OptionalLiving1, titulo: 'Perspectiva da sala opcional 1 de 111 m² - Casa Sul' },
      { src: casaJardinsSouth111OptionalLiving2, titulo: 'Perspectiva da sala opcional 2 de 111 m² - Casa Sul' },
      { src: casaJardinsPetWash, titulo: 'Perspectiva do pet wash' },
      { src: casaJardinsBikeWash, titulo: 'Perspectiva do bike wash' },
      { src: casaJardinsBikeStation, titulo: 'Perspectiva da bike station' },
      { src: casaJardinsKidsGarage, titulo: 'Perspectiva da garagem kids' },
    ],
    floorPlans: [
      { src: casaJardinsGroundPlan, titulo: 'Implantação do pavimento térreo e acessos' },
      { src: casaJardinsLeisurePlan, titulo: 'Implantação do pavimento lazer e legenda' },
      { src: casaJardinsSitePlan, titulo: 'Implantação das torres Casa Norte e Casa Sul' },
      { src: casaJardinsNorthTypicalPlan, titulo: 'Casa Norte - Torre A, pavimento tipo' },
      { src: casaJardinsNorthGardenPlan, titulo: 'Casa Norte Garden - 125 m² e terraço de 129 m²' },
      { src: casaJardinsNorth124StandardPlan, titulo: 'Casa Norte - 124 m², planta padrão' },
      { src: casaJardinsNorth124OptionalPlan, titulo: 'Casa Norte - 124 m², planta opcional' },
      { src: casaJardinsNorth101StandardPlan, titulo: 'Casa Norte - 101 m², planta padrão' },
      { src: casaJardinsNorth101OptionalPlan, titulo: 'Casa Norte - 101 m², planta opcional' },
      { src: casaJardinsSouthTypicalPlan, titulo: 'Casa Sul - Torre B, pavimento tipo' },
      { src: casaJardinsSouthGardenPlan, titulo: 'Casa Sul Garden - 114 m² e terraço de 102 m²' },
      { src: casaJardinsSouth111StandardPlan, titulo: 'Casa Sul - 111 m², planta padrão' },
      { src: casaJardinsSouth111OptionalPlan1, titulo: 'Casa Sul - 111 m², planta opcional 1' },
      { src: casaJardinsSouth111OptionalPlan2, titulo: 'Casa Sul - 111 m², planta opcional 2' },
    ],
    locationImages: [
      { src: casaJardinsParkLocation, titulo: 'Localização do Casa Jardins e Parque da Sementeira' },
      { src: casaJardinsNeighborhoodLocation, titulo: 'Entorno: vista aérea do bairro Jardins, Aracaju' },
    ],
  }),
  createDevelopment({
    slug: 'casa-boris', name: 'Casa Boris', image: casaBorisCover,
    city: 'Fortaleza, CE', neighborhood: 'Meireles', locationTitle: 'Meireles - Fortaleza/CE',
    address: 'Meireles, Fortaleza/CE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Casa%20Boris%20Meireles%20Fortaleza%20CE',
    area: '163,93 e 203,75 m²', profile: '4 suítes, com opção de 3 suítes', detail: '3 ou 4 vagas de garagem',
    description: 'O Casa Boris é um empreendimento residencial de alto padrão da Moura Dubeux no Meireles, em Fortaleza. As torres Bertrand e Arisa apresentam fachadas com curvas orgânicas, varandas generosas e paisagismo integrado. Os apartamentos têm 203,75 m² na Torre Bertrand e 163,93 m² na Torre Arisa, com quatro suítes na planta padrão e opções de três suítes com sala ampliada e cozinha integrada. O projeto oferece hall privativo, varanda gourmet e áreas de lazer com piscinas, spa, academia e espaços de convivência.',
    highlights: ['163,93 e 203,75 m²', '4 suítes, com opção de 3 suítes', '3 ou 4 vagas', 'Meireles, Fortaleza'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Meireles, Fortaleza/CE'], ['Tipologias', '4 suítes, com opção de 3 suítes'], ['Garagem', '3 ou 4 vagas por apartamento']],
    technical: [
      ['Torres', 'Bertrand e Arisa'],
      ['Torre Bertrand', 'Apartamentos de 203,75 m², com 4 suítes e 4 vagas de garagem'],
      ['Torre Arisa', 'Apartamentos de 163,93 m², com 4 suítes e 3 vagas de garagem'],
      ['Opções de planta', '3 suítes com sala ampliada e cozinha integrada nas duas torres'],
      ['Hall', 'Hall privativo'],
      ['Varanda', 'Varanda gourmet'],
      ['Água quente', 'Aquecimento a gás nos banheiros'],
      ['Conectividade', 'Wi-Fi nas áreas comuns'],
      ['Personalização', 'MD Store, conforme as possibilidades e restrições da incorporação'],
      ['Entorno', 'Referências às ruas Dr. José Lourenço e Pereira Filgueiras e à Avenida Rui Barbosa'],
      ['Material', 'Perspectivas artísticas; decoração, móveis e equipamentos conforme memorial descritivo e documentação oficial'],
    ],
    amenities: ['Piscina adulto', 'Piscina infantil', 'Prainha', 'Hidro relax', 'Spa com piscina, sauna e relax', 'Deck lounge', 'Solário', 'Deck com churrasqueira', 'Festas outdoor', 'Salão de festas', 'Espaço teens', 'Brinquedoteca', 'Playground', 'Salão gourmet', 'Academia', 'Fitness outdoor', 'Quadra recreativa', 'Deck terrasse', 'Recepção', 'Espaço delivery e guarda de e-commerce', 'Bicicletário com 5 bicicletas MD compartilhadas', 'Pet wash e pet place', 'Vagas para visitantes'],
    security: ['Controle de acesso dos moradores por biometria', 'Sala de segurança', 'Projeto de segurança condominial', 'Guarita blindada'],
    sustainability: ['Infraestrutura seca para carregamento de carro elétrico em uma vaga por apartamento', 'Irrigação automatizada', 'Louças e metais com redução do consumo de água', 'Espaço para coleta seletiva', 'Paisagismo com 90% de plantas nativas, conforme o book', 'Aproveitamento de água do gotejamento de ar-condicionado para irrigação', 'Iluminação LED em todas as áreas comuns', 'Medição individualizada de água e gás', 'Calçada arborizada e muro verde'],
    projectTeam: ['Daniel Arruda | Arquitetura', 'MN Arquitetura | Ambientação', 'Escritório Carim Paisagismo | Paisagismo'],
    gallery: [
      { src: casaBorisTowersFront, titulo: 'Casa Boris - perspectiva frontal das torres Bertrand e Arisa' },
      { src: casaBorisTowersBase, titulo: 'Perspectiva das torres e do embasamento' },
      { src: casaBorisCurvedBalconies, titulo: 'Perspectiva das varandas curvas com vista da cidade' },
      { src: casaBorisEntrance, titulo: 'Perspectiva da entrada principal e porte-cochère' },
      { src: casaBorisReception, titulo: 'Perspectiva da recepção e hall envidraçado' },
      { src: casaBorisPoolAerial, titulo: 'Perspectiva aérea da piscina adulto e deck com paisagismo' },
      { src: casaBorisPoolGardens, titulo: 'Perspectiva da piscina adulto e hidromassagem entre jardins' },
      { src: casaBorisKidsPool, titulo: 'Perspectiva da piscina infantil e fachadas' },
      { src: casaBorisPlayground, titulo: 'Perspectiva do playground ao ar livre' },
      { src: casaBorisPlayroom, titulo: 'Perspectiva da brinquedoteca' },
      { src: casaBorisPartyRoom, titulo: 'Perspectiva do salão de festas' },
      { src: casaBorisSpa, titulo: 'Perspectiva do spa e hidro relax' },
      { src: casaBorisGourmet, titulo: 'Perspectiva do espaço gourmet e área de jogos' },
      { src: casaBorisFitness, titulo: 'Perspectiva da academia' },
      { src: casaBorisBertrandBalcony, titulo: 'Perspectiva da varanda gourmet de 203,75 m² - Torre Bertrand' },
      { src: casaBorisBertrandLiving, titulo: 'Perspectiva da sala padrão de 203,75 m² - Torre Bertrand' },
      { src: casaBorisBertrandExpandedLiving, titulo: 'Perspectiva da sala ampliada de 203,75 m² - Torre Bertrand' },
      { src: casaBorisBertrandSuite, titulo: 'Perspectiva da suíte master - Torre Bertrand' },
      { src: casaBorisArisaExpandedLiving, titulo: 'Perspectiva da sala ampliada de 163,93 m² - Torre Arisa' },
      { src: casaBorisArisaSuite, titulo: 'Perspectiva da suíte master - Torre Arisa' },
    ],
    floorPlans: [
      { src: casaBorisBertrandTypicalPlan, titulo: 'Torre Bertrand - pavimento tipo com unidades de 203,75 m²' },
      { src: casaBorisBertrandStandardPlan, titulo: 'Torre Bertrand - 203,75 m², 4 suítes e 4 vagas' },
      { src: casaBorisBertrandExpandedPlan, titulo: 'Torre Bertrand - 203,75 m², 3 suítes e sala ampliada' },
      { src: casaBorisArisaTypicalPlan, titulo: 'Torre Arisa - pavimento tipo com unidades de 163,93 m²' },
      { src: casaBorisArisaStandardPlan, titulo: 'Torre Arisa - 163,93 m², 4 suítes e 3 vagas' },
      { src: casaBorisArisaExpandedPlan, titulo: 'Torre Arisa - 163,93 m², 3 suítes e sala ampliada' },
      { src: casaBorisLeisurePlan, titulo: 'Implantação do pavimento lazer' },
      { src: casaBorisGroundPlan, titulo: 'Implantação do pavimento térreo e garagem' },
      { src: casaBorisSitePlan, titulo: 'Implantação das torres Bertrand e Arisa' },
      { src: casaBorisLeisurePlanLegends, titulo: 'Pavimento lazer com legendas (página de referência)' },
      { src: casaBorisGroundPlanLegends, titulo: 'Pavimento térreo com legendas (página de referência)' },
      { src: casaBorisSitePlanLegends, titulo: 'Implantação das torres (página de referência)' },
      { src: casaBorisBertrandTypicalPlanLegends, titulo: 'Torre Bertrand - pavimento tipo de 203,75 m² (página de referência)' },
      { src: casaBorisBertrandStandardPlanLegends, titulo: 'Torre Bertrand - 4 suítes (página de referência)' },
      { src: casaBorisBertrandExpandedPlanLegends, titulo: 'Torre Bertrand - 3 suítes e sala ampliada (página de referência)' },
      { src: casaBorisArisaTypicalPlanLegends, titulo: 'Torre Arisa - pavimento tipo de 163,93 m² (página de referência)' },
      { src: casaBorisArisaStandardPlanLegends, titulo: 'Torre Arisa - 4 suítes (página de referência)' },
      { src: casaBorisArisaExpandedPlanLegends, titulo: 'Torre Arisa - 3 suítes e sala ampliada (página de referência)' },
    ],
    locationImages: [
      { src: casaBorisLocation, titulo: 'Localização do Casa Boris no Meireles, Fortaleza' },
    ],
  }),
  createDevelopment({
    slug: 'beach-class-iracema', name: 'Beach Class Iracema', image: iracemaCover,
    city: 'Fortaleza, CE', neighborhood: 'Praia de Iracema', locationTitle: 'Praia de Iracema - Fortaleza/CE',
    address: 'Rua Dr. Atualpa Barbosa Lima, Praia de Iracema, Fortaleza/CE',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beach%20Class%20Iracema%20Rua%20Dr.%20Atualpa%20Barbosa%20Lima%20Fortaleza%20CE',
    area: '27,50 a 93 m²', profile: 'Studios, 1 e 2 quartos, com opções Garden', detail: 'Lazer completo próximo ao mar',
    description: 'O Beach Class Iracema fica na Praia de Iracema, em Fortaleza, perto do mar e do Aterro da Praia de Iracema. O projeto reúne studios compactos, apartamentos de 1 e 2 quartos e unidades Garden com área externa privativa, para morar ou investir. O pavimento de lazer tem piscina com prainha, bar da piscina, fitness, espaço gourmet, salão de eventos, brinquedoteca e terraço com estar, além de serviços como concierge e lavanderia compartilhada.',
    highlights: ['27,50 a 93 m²', 'Studios, 1 e 2 quartos', 'Unidades Garden', 'Próximo à Praia de Iracema'],
    stats: [['Construtora', 'Moura Dubeux'], ['Localização', 'Praia de Iracema, Fortaleza/CE'], ['Tipologias', 'Studios, 1 e 2 quartos'], ['Garagem', 'Vagas rotativas, sujeitas à vacância']],
    technical: [
      ['Studios', '27,50 a 35,64 m², do 3º ao 24º andar'],
      ['Unidades Garden', '43 a 93 m² (valores arredondados)'],
      ['2 quartos Garden', '93,41 m² (61,46 m² de apartamento + 31,95 m² de Garden), com 1 suíte'],
      ['1 quarto Garden', '86,39 m² (42,18 m² de apartamento + 44,21 m² de Garden)'],
      ['Studio Garden', '43,91 m² (31,40 m² de apartamento + 12,51 m² de Garden)'],
      ['Garagem', 'Estacionamento no subsolo e no térreo, com vagas rotativas sujeitas à vacância'],
      ['Serviços', 'Concierge, e-commerce, espaço para minimarket e lavanderia compartilhada'],
      ['Restaurante', 'Equipamentos e mobiliário do restaurante e da cozinha não serão entregues; gestão conforme o condomínio'],
      ['Material', 'Perspectivas ilustrativas; metragens e acabamentos conforme tabela de vendas e memorial descritivo'],
    ],
    amenities: ['Piscina adulto com prainha', 'Piscina infantil', 'Hidromassagem', 'Solário e deck de piscina', 'Bar da piscina', 'Co-living', 'Espaço para restaurante', 'Fitness', 'Fitness outdoor', 'Espaço de jogos', 'Brinquedoteca', 'Gourmet', 'Salão de eventos', 'Terraço com estar', 'Lobby e recepção social', 'Administração', 'Espaço e-commerce para guarda de encomendas', 'Espaço para minimarket', 'Concierge para check-in e check-out', 'Lavanderia compartilhada', 'Embarque e desembarque de visitantes'],
    security: ['Fechaduras eletrônicas nos apartamentos', 'Controle de acesso de pedestres e veículos', 'Infraestrutura para CFTV'],
    sustainability: ['Infraestrutura para carregamento de carros elétricos em 2 vagas compartilhadas', 'Irrigação automatizada', 'Espaço para coleta seletiva', 'Iluminação LED nas áreas comuns', '5 bicicletas compartilhadas', 'Bacias sanitárias de consumo reduzido e acionamento duplo', 'Metais com redução de vazão de água', 'Iluminação natural e ventilação cruzada'],
    projectTeam: ['Nasser Hissa Arquitetos Associados | Arquitetura', 'Takeda Design Arquitetos Associados | Paisagismo', 'Sobre Arquitetura | Ambientação'],
    gallery: [
      { src: iracemaTowerFacade, titulo: 'Beach Class Iracema - perspectiva da fachada da torre' },
      { src: iracemaBaseAccess, titulo: 'Perspectiva do embasamento e do acesso' },
      { src: iracemaLobby, titulo: 'Perspectiva do lobby e da recepção social' },
      { src: iracemaPool, titulo: 'Perspectiva da piscina com paisagismo' },
      { src: iracemaPoolDeck, titulo: 'Perspectiva do deck e das espreguiçadeiras da piscina' },
      { src: iracemaPoolBar, titulo: 'Perspectiva do bar e apoio da piscina' },
      { src: iracemaGym, titulo: 'Perspectiva do fitness' },
      { src: iracemaGames, titulo: 'Perspectiva do espaço de jogos' },
      { src: iracemaPlayroom, titulo: 'Perspectiva da brinquedoteca' },
      { src: iracemaTerrace, titulo: 'Perspectiva do terraço com estar' },
      { src: iracemaGourmet, titulo: 'Perspectiva do salão gourmet' },
      { src: iracemaNightFacade, titulo: 'Perspectiva da fachada dos apartamentos ao anoitecer' },
      { src: iracemaGardenTerrace, titulo: 'Perspectiva do terraço Garden mobiliado' },
      { src: iracemaGardenLiving, titulo: 'Perspectiva da sala de estar do apartamento Garden' },
      { src: iracemaGardenBedroom, titulo: 'Perspectiva do quarto do apartamento Garden' },
      { src: iracemaStudio, titulo: 'Perspectiva do Studio com ambiente integrado' },
    ],
    floorPlans: [
      { src: iracemaBasementPlan, titulo: 'Pavimento subsolo e estacionamento' },
      { src: iracemaGroundPlan, titulo: 'Pavimento térreo, acessos e recepção' },
      { src: iracemaLeisurePlan, titulo: 'Pavimento de lazer - implantação e legenda' },
      { src: iracemaGardenFloorPlan, titulo: 'Pavimento Garden' },
      { src: iracemaTypicalFloorPlan, titulo: 'Pavimento tipo - 3º ao 24º andar (studios)' },
      { src: iracemaTwoBedroomGardenPlan, titulo: 'Apartamento 2 quartos Garden - 93,41 m²' },
      { src: iracemaOneBedroomGardenPlan, titulo: 'Apartamento 1 quarto Garden - 86,39 m²' },
      { src: iracemaStudioGardenPlan, titulo: 'Studio Garden - 43,91 m²' },
      { src: iracemaStudioPlan, titulo: 'Studio - 29,16 m²' },
    ],
    locationImages: [
      { src: iracemaLocationMap, titulo: 'Localização do Beach Class Iracema sobre vista aérea' },
      { src: iracemaSeafront, titulo: 'Entorno: orla da Praia de Iracema' },
      { src: iracemaSeafrontLocation, titulo: 'Entorno: orla e contexto da localização' },
    ],
  }),
];

const developments = [
  {
    slug: 'elleve-horto',
    name: 'Elleve Horto',
    status: null,
    developer: 'Moura Dubeux',
    city: 'Salvador, BA',
    neighborhood: 'Horto Florestal',
    locationTitle: 'Rua Piratancará - Horto Florestal',
    address: 'Rua Piratancará - Horto Florestal, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua%20Piratancar%C3%A1%20Horto%20Florestal%20Salvador%20BA',
    area: '119,06 a 168,92 m²',
    profile: '3 ou 4 suítes, com opções de 2 ou 3 suítes',
    detail: '2 ou 3 vagas de garagem',
    delivery: null,
    image: elleveOrganizedCover,
    description: 'O Elleve Horto é um empreendimento de alto padrão no Horto Florestal, com proposta de equilíbrio entre sofisticação, leveza, exclusividade, natureza, conforto e convivência. O projeto tem torre única, plantas amplas e áreas comuns completas.',
    highlights: ['119,06 a 168,92 m²', '3 ou 4 suítes', '2 ou 3 vagas', 'Horto Florestal'],
    stats: [
      ['Construtora', 'Moura Dubeux'],
      ['Localização', 'Horto Florestal'],
      ['Tipologias', '3 ou 4 suítes'],
      ['Garagem', '2 ou 3 vagas'],
    ],
    technical: [
      ['Área total do terreno', '2.508,64 m²'],
      ['Torre', '1 torre única | 38 pavimentos'],
      ['Unidades', '76 apartamentos'],
      ['Unidades por andar', '2 apartamentos por andar'],
      ['Pavimentos', 'G2, G1, lazer, 1º pavimento com varanda ampliada, 37 pavimentos tipo e cobertura com áreas técnicas'],
      ['Tipologia - Coluna 01', '119,06 m², 3 suítes e 2 vagas; primeiro pavimento com varanda ampliada de 141,04 m²'],
      ['Tipologia - Coluna 02', '150,54 m², 4 suítes e 3 vagas; primeiro pavimento com varanda ampliada de 168,92 m²'],
      ['Vagas', '191 vagas internas: 2 para apartamentos de 3 suítes, 3 para apartamentos de 4 suítes e 1 vaga condominial, além de vagas externas para visitantes'],
      ['Personalização', 'Revestimentos, bancadas, metais, louças, acabamentos elétricos, acessórios para banheiro e flexibilização de plantas pela MD Store'],
      ['Registro', 'R-2 da matrícula nº 128.579 do 3º Ofício de Registro de Imóveis de Salvador'],
    ],
    amenities: ['Piscina adulto com raia de 25 m', 'Piscina infantil', 'Solário e deck', 'Lounge externo com cascata', 'Gourmet da piscina', 'Academia', 'Salão de festas com copa', 'Brinquedoteca', 'Sala de jogos', 'Parque infantil', 'Quadra recreativa', 'Apoio da quadra', 'Lobby de elevadores', 'Praças e lounges', 'Pet Care', 'Bicicletário', 'Espaço delivery e e-commerce'],
    security: ['Guarita com vidros blindados', 'Fechadura eletrônica na porta social dos apartamentos', 'Rua com controle de acesso', 'Vagas externas para visitantes', 'Infraestrutura seca para instalação de segurança condominial', 'Infraestrutura seca para Wi-Fi nas áreas comuns', 'Portaria com sanitário', 'Clausura', 'Elevadores sociais e elevador de serviço'],
    sustainability: ['Gradis que favorecem a permeabilidade visual', 'Embasamento com pedras naturais e jardins voltados para a Rua Piratancará', 'Pavimentação 100% drenante na calçada', 'Dispositivos para redução de vazão de água', 'Reutilização de água de condensação dos aparelhos de ar-condicionado das áreas comuns', 'Geração de energia por fontes renováveis para parte das áreas comuns', 'Iluminação automatizada e/ou com sensores nas áreas comuns', 'Gestão eficiente de resíduos durante a obra', 'Espaços ao ar livre com jardins'],
    projectTeam: ['GAM Arquitetos | Arquitetura', 'Benedito Abbud | Paisagismo', 'Taís Abreu e Luiza Buratto | Ambientação'],
    gallery: [
      { src: elleveOrganizedCover, titulo: 'Elleve Horto - fachada e acesso principal' },
      { src: elleveFacade, titulo: 'Fachada da torre Elleve Horto' },
      { src: elleveAccess, titulo: 'Acesso principal pela Rua Piratancará' },
      { src: elleveFacadeDetail, titulo: 'Detalhe da fachada e varandas' },
      { src: ellevePool, titulo: 'Piscina adulto com raia de 25 m' },
      { src: elleveLeisureAerial, titulo: 'Pavimento de lazer - vista aérea' },
      { src: elleveLoungeCascade, titulo: 'Lounge externo com cascata' },
      { src: ellevePlayground, titulo: 'Parque infantil' },
      { src: elleveCourt, titulo: 'Quadra recreativa' },
      { src: elleveLobby, titulo: 'Lobby social dos elevadores' },
      { src: ellevePartyRoom, titulo: 'Salão de festas' },
      { src: ellevePlayroom, titulo: 'Brinquedoteca' },
      { src: elleveGamesRoom, titulo: 'Sala de jogos' },
      { src: elleveGym, titulo: 'Academia' },
      { src: ellevePoolGourmet, titulo: 'Gourmet da piscina' },
      { src: elleveCourtSupport, titulo: 'Apoio da quadra' },
      { src: elleveMasterSuite119, titulo: 'Suíte master - apartamento de 119 m²' },
      { src: elleveLiving119, titulo: 'Living - apartamento de 119 m²' },
      { src: elleveLiving150, titulo: 'Living - apartamento de 150 m²' },
      { src: elleveLiving150Option, titulo: 'Living - opção de planta do apartamento de 150 m²' },
      { src: elleveMasterSuite150, titulo: 'Suíte master - apartamento de 150 m²' },
      { src: elleveVideo, type: 'video', poster: elleveOrganizedCover, titulo: 'Vídeo do Elleve Horto' },
    ],
    floorPlans: [
      { src: elleveGeneralPlan, titulo: 'Implantação geral do empreendimento' },
      { src: elleveGarageG1Plan, titulo: 'Pavimento G1 - garagem' },
      { src: elleveGarageG2Plan, titulo: 'Pavimento G2 - garagem' },
      { src: elleveLeisurePlan, titulo: 'Pavimento de lazer' },
      { src: elleveTypicalFloorPlan, titulo: 'Pavimento tipo - Colunas 1 e 2' },
      { src: ellevePlan119Standard, titulo: 'Planta padrão - 119,06 m² - 3 suítes' },
      { src: ellevePlan119OptionTv, titulo: 'Opção de planta - 119 m² - 2 suítes com sala de TV / gabinete' },
      { src: ellevePlan119OptionKitchen, titulo: 'Opção de planta - 119 m² - 2 suítes com cozinha integrada e suíte master ampliada' },
      { src: ellevePlan150Standard, titulo: 'Planta padrão - 150,54 m² - 4 suítes' },
      { src: ellevePlan150OptionTv, titulo: 'Opção de planta - 150 m² - 3 suítes com sala de TV / gabinete' },
      { src: ellevePlan150OptionKitchen, titulo: 'Opção de planta - 150 m² - 3 suítes com cozinha ampliada e suíte master ampliada' },
    ],
    locationImages: [
      { src: elleveLocationMap, titulo: 'Mapa do Horto Florestal e pontos de interesse' },
      { src: elleveLocationAerial, titulo: 'Vista aérea do Elleve Horto no Horto Florestal' },
    ],
  },
  {
    slug: 'casa-sombreiros',
    name: 'Casa Sombreiros',
    status: null,
    developer: 'Moura Dubeux',
    city: 'Salvador, BA',
    neighborhood: 'Caminho das Árvores',
    locationTitle: 'Alameda dos Sombreiros',
    address: 'Alameda dos Sombreiros, Caminho das Árvores, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Alameda%20dos%20Sombreiros%20Caminho%20das%20%C3%81rvores%20Salvador%20BA',
    area: '168 m²',
    profile: '4 suítes',
    detail: '3 vagas por apartamento',
    delivery: null,
    image: sombreirosOrganizedCover,
    description: 'O Casa Sombreiros nasce da harmonia entre o essencial e o sofisticado, com a sensação de viver em uma casa cercada por verde, tranquilidade e conveniência no Caminho das Árvores. O projeto reúne apartamentos de 168 m², quatro suítes, áreas comuns completas e quatro opções de planta.',
    highlights: ['168 m²', '4 suítes', '3 vagas', 'Caminho das Árvores'],
    stats: [
      ['Construtora', 'Moura Dubeux'],
      ['Localização', 'Caminho das Árvores'],
      ['Tipologias', '4 suítes, com opções de 3 suítes'],
      ['Garagem', '3 vagas por apartamento'],
    ],
    technical: [
      ['Área total do terreno', '2.526,06 m²'],
      ['Torre', '2 apartamentos por andar, 60 apartamentos, 4 suítes e 168 m²'],
      ['Pavimentos', 'Garagens G1, G2 e G3, pavimento de lazer, 30 pavimentos tipo e cobertura com áreas técnicas'],
      ['Vagas', '188 vagas: 3 por apartamento, 1 condominial interna, 2 de serviço internas e 5 externas para visitantes / aplicativo'],
      ['Plantas', '4 opções: padrão com 4 suítes e opções com 3 suítes'],
      ['Personalização', 'Revestimentos, bancadas, metais, louças, acabamentos elétricos, acessórios para banheiro e plantas flexíveis pela MD Store'],
      ['Observação do material', 'Book de uso exclusivo interno e treinamento de corretores; confirme a existência de material comercial autorizado e atualizado antes da divulgação pública'],
    ],
    amenities: ['Salão de festas', 'Terraço de festas', 'Brinquedoteca', 'Sala de jogos', 'Lobby', 'Piscina adulto com raia de 25 m', 'Hidromassagem aquecida', 'Piscina infantil', 'Deck e solário da piscina', 'Parque infantil', '2 áreas gourmet externas', 'Gourmet de apoio à quadra', 'Quadra recreativa', 'Pet Care', 'Espaço Delivery', 'Espaço E-commerce', 'Bicicletários', 'Academia', 'Circulação externa do pavimento de lazer'],
    security: ['E-commerce e espaço delivery', 'Guarita com vidro blindado', 'Fechadura eletrônica na porta social dos apartamentos', 'Controle de acesso', 'Infraestrutura seca para instalação de segurança condominial'],
    sustainability: ['Gentileza urbana com alargamento e arborização da calçada', 'Infraestrutura seca para Wi-Fi nas áreas comuns'],
    projectTeam: ['Arc+CO / Architects +CO, Tiago Martins e Caio Bandeira | Arquitetura', 'Laís Galvão | Ambientação', 'Benedito Abbud | Paisagismo'],
    gallery: [
      { src: sombreirosOrganizedCover, titulo: 'Casa Sombreiros - fachada e acesso pela Alameda dos Sombreiros' },
      { src: sombreirosTower, titulo: 'Torre Casa Sombreiros' },
      { src: sombreirosEmbasement, titulo: 'Fachada e embasamento - Alameda dos Sombreiros' },
      { src: sombreirosFacadeDetail, titulo: 'Detalhe da fachada e varandas' },
      { src: sombreirosAdultPool, titulo: 'Piscina adulto com raia de 25 m' },
      { src: sombreirosPoolAerial, titulo: 'Piscina - vista aérea' },
      { src: sombreirosCourt, titulo: 'Quadra recreativa' },
      { src: sombreirosCourtGourmet, titulo: 'Gourmet de apoio à quadra' },
      { src: sombreirosPlayground, titulo: 'Parque infantil' },
      { src: sombreirosLobby, titulo: 'Lobby' },
      { src: sombreirosGym, titulo: 'Academia' },
      { src: sombreirosGamesRoom, titulo: 'Sala de jogos' },
      { src: sombreirosPlayroom, titulo: 'Brinquedoteca' },
      { src: sombreirosPartyRoom, titulo: 'Salão de festas' },
      { src: sombreirosLeisureCirculation, titulo: 'Circulação externa do pavimento de lazer' },
      { src: sombreirosLiving, titulo: 'Living' },
      { src: sombreirosMasterSuite, titulo: 'Suíte master ampliada com closet' },
      { src: sombreirosLivingIntegrated, titulo: 'Living ampliado com cozinha integrada' },
      { src: sombreirosLivingExpanded, titulo: 'Living ampliado' },
      { src: sombreirosVideo, type: 'video', poster: sombreirosOrganizedCover, titulo: 'Vídeo do Casa Sombreiros' },
    ],
    floorPlans: [
      { src: sombreirosLeisurePlan, titulo: 'Implantação do pavimento de lazer' },
      { src: sombreirosGaragePlan, titulo: 'Pavimento G1 - acessos e garagem' },
      { src: sombreirosTypicalFloorPlan, titulo: 'Pavimento tipo - terminações 01 e 02' },
      { src: sombreirosStandardPlan, titulo: 'Planta padrão - 168 m² - 4 suítes' },
      { src: sombreirosOptionOnePlan, titulo: 'Opção 1 - 168 m² - 3 suítes com sala e cozinha ampliadas' },
      { src: sombreirosOptionTwoPlan, titulo: 'Opção 2 - 168 m² - 3 suítes com suíte master ampliada, banheiro Sr. e Sra. e closet' },
      { src: sombreirosOptionThreePlan, titulo: 'Opção 3 - 168 m² - 3 suítes com sala ampliada, cozinha integrada e área de serviço ampliada' },
    ],
    locationImages: [
      { src: sombreirosLocation, titulo: 'Vista aérea do Caminho das Árvores e entorno' },
    ],
  },
  {
    slug: 'infinity-salvador-business',
    name: 'Infinity Salvador Business',
    status: null,
    developer: 'Moura Dubeux',
    city: 'Salvador, BA',
    neighborhood: 'Ondina',
    locationTitle: 'Avenida Oceânica - Ondina',
    address: 'Avenida Oceânica - Ondina, Salvador/BA',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida%20Oce%C3%A2nica%20Ondina%20Salvador%20BA',
    area: '32 a 83 m²',
    profile: 'Salas comerciais e consultórios',
    detail: 'Torre Business em complexo mixed-use',
    delivery: null,
    image: infinityOrganizedCover,
    description: 'O Infinity Salvador é apresentado como um empreendimento mixed-use em Ondina, reunindo Apartments, Residences e Business. A torre empresarial oferece salas comerciais e consultórios com metragens versáteis, ambientes integrados e localização junto à orla da Avenida Oceânica.',
    highlights: ['32 a 83 m²', 'Salas e consultórios', 'Garden Business', 'Ondina'],
    stats: [
      ['Construtora', 'Moura Dubeux'],
      ['Localização', 'Ondina'],
      ['Tipologias', 'Salas comerciais e consultórios de 32 a 83 m²'],
      ['Garagem', 'Não informado no material'],
    ],
    technical: [
      ['Composição', 'Complexo mixed-use com Apartments, Residences e Business; três torres, sendo uma exclusiva para uso empresarial'],
      ['Pavimentos Business', 'G1 acesso térreo, G2, G3 Garden com salas, G4, pavimento de lazer, 3º ao 15º pavimento e cobertura no 16º pavimento'],
      ['Pavimento tipo', '10 colunas: 83 m²; 32 m² nas colunas 2 a 6; 41 m² nas colunas 7 e 8; 33 m² na coluna 9; 37 m² na coluna 10'],
      ['Garden Business', 'Unidades de 32 a 83 m² cobertos, com áreas descobertas de 5 a 54 m² conforme a coluna'],
      ['Ambientes comerciais', 'Consultório odontológico de 1 coluna; escritório de 2 colunas integradas; escritório de 4 colunas integradas'],
      ['Acesso e serviços', 'Acesso e saída de veículos, carga e descarga, garagem de visitantes e condôminos, boulevard, desembarque coberto, recepções, elevadores, lojas e vagas'],
      ['Registro', 'R-19 da matrícula nº 15.248 do 1º Ofício de Registro de Imóveis de Salvador'],
    ],
    amenities: ['Lobby Oceânica', 'Recepção social', 'Recepção de serviço', 'Desembarque coberto', 'Boulevard', 'Lojas no pavimento de acesso', 'Pavimento Business', 'Garden Business', 'Consultório odontológico', 'Escritórios com colunas integradas', 'Vagas para carga e descarga', 'Acesso empresarial integrado ao complexo'],
    sustainability: ['Qualidade urbana', 'Economia de água e energia', 'Responsabilidade com materiais e resíduos', 'Promoção de saúde e bem-estar'],
    projectTeam: ['Sidney Quintela | Arquitetura', 'Hanazaki | Paisagismo', 'Zirpolli Arquitetura | Interiores'],
    gallery: [
      { src: infinityOrganizedCover, titulo: 'Infinity Salvador - torre Business e conjunto mixed-use' },
      { src: infinityBusinessBase, titulo: 'Embasamento e acesso da torre Business' },
      { src: infinityBusinessTower, titulo: 'Torre Business e distribuição dos pavimentos' },
      { src: infinityLobby, titulo: 'Lobby Oceânica' },
      { src: infinityDentalOffice, titulo: 'Consultório odontológico - 1 coluna' },
      { src: infinityOfficeTwoColumns, titulo: 'Escritório - 2 colunas integradas' },
      { src: infinityOfficeFourColumns, titulo: 'Escritório - 4 colunas integradas' },
      { src: infinityVideo, type: 'video', poster: infinityOrganizedCover, titulo: 'Vídeo do Infinity Salvador' },
    ],
    floorPlans: [
      { src: infinityGeneralPlan, titulo: 'Implantação geral do complexo Infinity Salvador' },
      { src: infinityGroundPlan, titulo: 'Pavimento de acesso térreo - Business' },
      { src: infinityDentalPlan, titulo: 'Planta - consultório odontológico' },
      { src: infinityIntegratedOfficePlan, titulo: 'Planta - escritório integrado' },
      { src: infinityTypicalPlan, titulo: 'Pavimento tipo Business' },
      { src: infinityGardenPlan, titulo: 'Pavimento Garden Business' },
    ],
    locationImages: [
      { src: infinityAerialLocation, titulo: 'Vista aérea da orla de Ondina e do empreendimento' },
      { src: infinityUrbanContext, titulo: 'Contexto dos empreendimentos na orla de Ondina' },
    ],
  },
  ...additionalDevelopments,
];

const getDevelopmentsByState = (uf) => {
  if (uf === ALL_STATES_OPTION.uf) return developments;
  return developments.filter((development) => getUfFromLocation(development.city) === uf);
};
const normalizeSearchText = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR')
  .trim();
const getDevelopmentGroupsByState = (items) => {
  const groups = new Map();

  items.forEach((development) => {
    const uf = getUfFromLocation(development.city) || 'OTHER';
    if (!groups.has(uf)) {
      groups.set(uf, {
        uf,
        name: getStateNameFromUf(uf) || 'Outros estados',
        developments: [],
      });
    }
    groups.get(uf).developments.push(development);
  });

  return Array.from(groups.values());
};

function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.4" /></>,
    ruler: <><path d="m3 17 14-14 4 4L7 21H3v-4Z" /><path d="m14 6 4 4M11 9l2 2M8 12l2 2M5 15l2 2" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    document: <><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v5h5M9 12h6M9 16h6" /></>,
    building: <><path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h18M9 7h2M9 11h2M9 15h2M12 21v-4h4v4" /></>,
    car: <><path d="m5 16 1.5-5h11L19 16" /><path d="M4 16h16v4H4zM7 20v1M17 20v1M7 16h.01M17 16h.01" /></>,
    handshake: <><path d="m8 12 3 3a2 2 0 0 0 3 0l4-4" /><path d="m2 12 5-5 4 2 2-2 4 2 5 5M5 15l2 2M9 16l2 2M13 16l1 1" /></>,
    whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.5A9 9 0 1 1 21 11.5Z" /><path d="M8.2 7.8c.3 3.8 2.2 5.7 6 6.4.5.1 1-.8 1.3-1.2-.9-.4-1.7-.8-2.5-1.3-.3.4-.6.8-.9.8-1.1-.5-2.1-1.5-2.6-2.6 0-.3.4-.7.8-1-.5-.8-.9-1.6-1.3-2.4-.4.2-.9.8-.8 1.3Z" /></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.2" /><path d="M16.8 7.2h.01" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></>,
    youtube: <><rect x="3" y="5" width="18" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>,
    mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4Z" /></>,
  };

  return (
    <svg className={`icon ${className}`.trim()} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Brand({ variant = 'auto' }) {
  return (
    <span className={`brand brand--${variant}`} aria-label="Dione Menezes">
      <span className="brand__mark" aria-hidden="true">
        <img className="brand__logo brand__logo--light" src={logoLight} alt="" />
        <span className="brand__logo brand__logo--red" style={{ maskImage: `url(${logoRed})` }} />
      </span>
      <span className="brand__divider" aria-hidden="true" />
      <span className="brand__complement" aria-hidden="true">
        <img className="brand__complement-logo brand__complement-logo--light" src={logoComplementLight} alt="" />
        <span className="brand__complement-logo brand__complement-logo--red" style={{ maskImage: `url(${logoComplementRed})` }} />
      </span>
    </span>
  );
}

function StateFlag({ state, className = '' }) {
  if (!state?.flag) return null;

  return <img className={`state-flag ${className}`.trim()} src={state.flag} alt="" aria-hidden="true" />;
}

function StateSelector({ selectedState, onSelectState }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);
  const selectedStateOption = getStateOption(selectedState);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnOutsideClick = (event) => {
      if (!selectorRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  if (!selectedStateOption) return null;

  return (
    <div className={`state-selector ${isOpen ? 'is-open' : ''}`} ref={selectorRef}>
      <button
        className="state-selector__trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <StateFlag state={selectedStateOption} />
        <span>{selectedStateOption.name}</span>
        <span className="state-selector__chevron" aria-hidden="true">⌄</span>
      </button>
      {isOpen && (
        <div className="state-selector__menu" role="menu" aria-label="Selecionar estado">
          {STATE_FILTER_OPTIONS.map((state) => (
            <button
              key={state.uf}
              type="button"
              role="menuitem"
              className={state.uf === selectedState ? 'is-selected' : ''}
              onClick={() => {
                onSelectState(state.uf);
                setIsOpen(false);
              }}
            >
              <span className="state-option__label"><StateFlag state={state} />{state.name}</span>
              {state.uf === selectedState && <span aria-label="Selecionado">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header({ scrolled, activeSection, menuOpen, setMenuOpen, headerProgress = 0, selectedState, onSelectState, onNavigateToDevelopments }) {
  const headerStyle = {
    '--header-surface-alpha': headerProgress,
    '--header-shadow-alpha': (headerProgress * 0.09).toFixed(3),
    '--header-shadow-deep-alpha': (headerProgress * 0.08).toFixed(3),
    '--header-blur': `${Math.round(headerProgress * 24)}px`,
  };
  const navItems = [['inicio', 'Início'], ['empreendimentos', 'Empreendimentos', '#todos-empreendimentos'], ['sobre', 'Sobre'], ['contato', 'Contato']];
  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`} style={headerStyle}>
      <div className="container site-header__inner">
        <a href="#inicio" className="site-header__brand" onClick={() => setMenuOpen(false)}><Brand /></a>
        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Navegação principal">
          {navItems.map(([id, label, href]) => (
            <a
              key={id}
              href={href || `#${id}`}
              className={activeSection === id ? 'is-active' : ''}
              onClick={(event) => {
                setMenuOpen(false);
                if (id === 'empreendimentos') {
                  event.preventDefault();
                  onNavigateToDevelopments();
                }
              }}
            >{label}</a>
          ))}
          <a className="button button--header button--mobile-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <FaWhatsapp size={22} aria-hidden="true" /> Falar no WhatsApp
          </a>
        </nav>
        <StateSelector selectedState={selectedState} onSelectState={onSelectState} />
        <a className="button button--header site-header__contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <FaWhatsapp size={22} aria-hidden="true" /> Falar no WhatsApp
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  );
}

function Hero({ currentSlide, setCurrentSlide, onNavigateToDevelopments }) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img key={slide.src} src={slide.src} alt="" className={currentSlide === index ? 'is-active' : ''}
            style={{ objectPosition: slide.position }} fetchPriority={currentSlide === index ? 'high' : 'auto'} />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__copy">
          <h1 id="hero-title"><span className="hero__title-main">Seu próximo endereço começa com a</span><em>escolha certa.</em></h1>
          <p className="hero__description">Atendimento especializado para você encontrar o imóvel Moura Dubeux ideal, com orientação personalizada, segurança, transparência e acompanhamento em cada etapa da sua compra.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#todos-empreendimentos" onClick={(event) => {
              event.preventDefault();
              onNavigateToDevelopments();
            }}>Ver empreendimentos <Icon name="arrow" /></a>
            <a className="button button--outline-light" href="#sobre">Conhecer a Dione</a>
          </div>
          <a className="hero__instagram-link" href="https://www.instagram.com/mdione.imoveis/" target="_blank" rel="noreferrer">
            <Icon name="instagram" size={17} /> Siga @mdione.imoveis
          </a>
        </div>
        <div className={`hero__side-note hero__side-note--${heroSlides[currentSlide].sideNote}`} aria-hidden="true"><span /><p>Mais que imóveis,<br />novos capítulos<br />começam aqui.</p></div>
      </div>
      <div className="container hero__footer">
        <div className="hero__controls" aria-label="Selecionar banner da página inicial">
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
  const stateName = getStateNameFromLocation(development.city);

  return (
    <a className="development-card" href={`#empreendimento/${development.slug}`} style={{ '--card-delay': `${index * 90}ms` }}>
      <div className="development-card__media">
        {development.image ? <img src={development.image} alt={`Fachada do empreendimento ${development.name}`} loading="lazy" /> : (
          <div className="development-card__fallback" aria-label={`Imagem em atualização do empreendimento ${development.name}`}>
            <Icon name="document" size={38} />
            <strong>{development.name}</strong>
            <span>Imagem em atualização</span>
          </div>
        )}
        <span className="development-card__tag">{development.status || 'Empreendimento'}</span>
        <span className="development-card__number">0{index + 1}</span>
      </div>
      <div className="development-card__body">
        <div className="development-card__heading">
          <div><p><Icon name="pin" size={16} /> {development.city}{stateName && <span className="development-card__state"> · {stateName}</span>}</p><h3>{development.name}</h3></div>
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

function Developments({ onNavigateToDevelopments }) {
  const featuredDevelopments = developments.slice(0, 3);

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
          <a className="developments__cta" href="#todos-empreendimentos" onClick={(event) => {
            event.preventDefault();
            onNavigateToDevelopments();
          }}>Ver todos os empreendimentos <Icon name="arrow" size={19} /></a>
        </div>
      </div>
    </section>
  );
}

function StateSelectionPage({ onSelectState }) {
  return (
    <main className="state-selection-page" id="conteudo">
      <section className="state-selection section" aria-labelledby="state-selection-title">
        <div className="container state-selection__layout">
          <div className="state-selection__map-column">
            <p className="eyebrow"><span /> Encontre seu próximo endereço</p>
            <div className="state-selection__map-wrap">
              <img className="state-selection__map" src={brazilMap} alt={`Mapa do Brasil com estados disponíveis: ${AVAILABLE_STATES.map((state) => state.name).join(', ')}`} />
              {AVAILABLE_STATES.map((state) => (
                <button className={`state-map-hotspot state-map-hotspot--${state.uf.toLowerCase()}`} key={state.uf} type="button" aria-label={`Selecionar ${state.name}`} onClick={() => onSelectState(state.uf)}><span>{state.name}</span></button>
              ))}
            </div>
          </div>
          <div className="state-selection__copy">
            <p className="eyebrow eyebrow--warm"><span /> Escolha seu estado</p>
            <h1 id="state-selection-title">Qual será o seu próximo endereço?</h1>
            <p>Selecione o estado para conhecer os empreendimentos disponíveis e encontrar a oportunidade que combina com o seu momento.</p>
            <div className="state-selection__options" aria-label="Estados disponíveis">
              {AVAILABLE_STATES.map((state) => (
                <button key={state.uf} type="button" onClick={() => onSelectState(state.uf)}>
                  <span className="state-option__label"><StateFlag state={state} />{state.name}</span>
                  <Icon name="arrow" size={18} />
                </button>
              ))}
            </div>
            <button className="state-selection__all-option" type="button" onClick={() => onSelectState(ALL_STATES_OPTION.uf)}>
              <span>Ver todos os empreendimentos</span>
              <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function AllDevelopmentsPage({ selectedState, onSelectState }) {
  const [searchTerm, setSearchTerm] = useState('');
  const stateOption = getStateOption(selectedState);
  const stateDevelopments = getDevelopmentsByState(selectedState);
  const isAllStates = selectedState === ALL_STATES_OPTION.uf;
  const normalizedSearchTerm = normalizeSearchText(searchTerm);
  const filteredDevelopments = useMemo(() => (
    normalizedSearchTerm
      ? stateDevelopments.filter((development) => normalizeSearchText(development.name).includes(normalizedSearchTerm))
      : stateDevelopments
  ), [normalizedSearchTerm, stateDevelopments]);
  const stateGroups = isAllStates ? getDevelopmentGroupsByState(filteredDevelopments) : [];

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
            <div><p className="eyebrow"><span /> {stateOption?.name || 'Estados disponíveis'}</p><h2 id="all-developments-title">Escolha seu próximo endereço</h2></div>
            <p className="section-heading__intro">Abra cada empreendimento para ver imagens, plantas, localização e informações completas.</p>
          </div>
          <div className="state-filter" role="group" aria-label="Filtrar empreendimentos por estado">
            <span className="state-filter__label">Filtrar por estado</span>
            <div className="state-filter__options">
              {STATE_FILTER_OPTIONS.map((state) => (
                <button
                  key={state.uf}
                  type="button"
                  className={state.uf === selectedState ? 'is-selected' : ''}
                  aria-pressed={state.uf === selectedState}
                  onClick={() => onSelectState(state.uf)}
                >
                  <StateFlag state={state} />
                  <span>{state.filterName || state.name}</span>
                </button>
              ))}
            </div>
          </div>
          <label className="developments-search">
            <span>Buscar por nome do empreendimento</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Ex.: Mood Costa Azul"
              aria-label="Buscar empreendimentos pelo nome"
            />
          </label>
          {isAllStates && filteredDevelopments.length > 0 ? (
            <div className="all-developments-groups">
              {stateGroups.map((group) => (
                <section className="all-developments-group" key={group.uf} aria-labelledby={`state-group-${group.uf}`}>
                  <div className="all-developments-group__heading">
                    <p className="eyebrow"><span /> Estado</p>
                    <h3 id={`state-group-${group.uf}`}><StateFlag state={getStateOption(group.uf)} />{group.name}</h3>
                    <span>{group.developments.length} {group.developments.length === 1 ? 'empreendimento' : 'empreendimentos'}</span>
                  </div>
                  <div className="developments__grid">
                    {group.developments.map((development, index) => <DevelopmentCard key={development.slug} development={development} index={index} />)}
                  </div>
                </section>
              ))}
            </div>
          ) : !isAllStates && filteredDevelopments.length > 0 ? (
            <div className="developments__grid">
              {filteredDevelopments.map((development, index) => <DevelopmentCard key={development.slug} development={development} index={index} />)}
            </div>
          ) : (
            <div className="state-empty-state">
              <span className="state-empty-state__mark" aria-hidden="true"><Icon name="building" size={28} /></span>
              <h3>{normalizedSearchTerm ? 'Nenhum empreendimento encontrado.' : stateOption ? 'Ainda não há empreendimentos disponíveis neste estado.' : 'Escolha um estado para ver os empreendimentos.'}</h3>
              <p>{normalizedSearchTerm ? 'Tente buscar por outro nome.' : stateOption ? `Em breve, novas oportunidades chegarão para ${stateOption.name}.` : 'Clique em Empreendimentos no menu para selecionar um estado.'}</p>
            </div>
          )}
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
      gallery: development.gallery.filter((item) => item.type !== 'video'),
      floorPlans: development.floorPlans,
      locationImages: development.locationImages || [],
    } : { gallery: [], floorPlans: [], locationImages: [] }
  ), [development]);
  const videoGalleryItems = development?.gallery.filter((item) => item.type === 'video') || [];
  const [activeLightbox, setActiveLightbox] = useState(null);
  const touchStartX = useRef(null);
  const activeImages = activeLightbox ? lightboxGroups[activeLightbox.group] : [];
  const activeImage = activeLightbox ? activeImages[activeLightbox.index] : null;
  const showAllOrganizedImages = ['elleve-horto', 'miratmartins', 'beachclassriovermelho', 'casa-sombreiros', 'hortoessence', 'infinity-salvador-business', 'poeme-horto', 'jardinsdoparque', 'concept-jatiuca', 'lanai-beach', 'beach-class-milagres', 'beach-class-natal', 'florata-tirol', 'les-amis-lagoa-nova', 'beach-class-ponta-negra', 'beach-class-porto-das-dunas', 'cyano', 'salvador220', 'vivant', 'beachclassjaguaribe', 'beachclassbahia', 'rive', 'mansaoothon', 'unica-cardeal', 'mood-colina', 'mood-club', 'mood-costa-azul', 'mood-sol-bahia', 'arthur-bruno-schwambach', 'concept-joao-farinha', 'infinity-recife', 'beach-class-manguinhos', 'beach-class-marine', 'beach-class-solare', 'beach-class-wave', 'beach-class-cumbuco', 'concept-joao-pessoa', 'concept-jardins', 'casa-jardins', 'casa-boris', 'beach-class-iracema'].includes(development?.slug);
  const visibleGalleryImages = lightboxGroups.gallery.slice(0, 5);
  const remainingGalleryCount = Math.max(0, lightboxGroups.gallery.length - visibleGalleryImages.length);
  const visibleFloorPlans = showAllOrganizedImages
    ? development.floorPlans
    : development.floorPlans.slice(0, 5);
  const findStat = (terms) => (development.stats || []).find(([label, value]) => value && terms.some((term) => label.toLowerCase().includes(term)))?.[1];
  const summaryItems = [
    ['Construtora', development.developer || findStat(['construtora']) || 'Não informado no material', 'building'],
    ['Localização', development.neighborhood || development.city || findStat(['localização']) || 'Não informado no material', 'pin'],
    ['Tipologias', development.profile || findStat(['tipologia', 'tipo']) || 'Não informado no material', 'home'],
    ['Garagem', findStat(['garagem', 'vaga']) || (/garagem|vaga/i.test(development.detail || '') ? development.detail : null) || 'Não informado no material', 'car'],
  ];

  const openImage = (group, index) => setActiveLightbox({ group, index });
  const scrollToDetailSection = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
  };
  const closeImage = useCallback(() => setActiveLightbox(null), []);
  const handleBack = (event) => {
    event.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.hash = '#todos-empreendimentos';
  };
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
  const handleLightboxTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };
  const handleLightboxTouchEnd = (event) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (startX === null || endX === undefined || Math.abs(endX - startX) < 48) return;
    showImage(endX < startX ? 1 : -1);
  };

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
          {development.image ? <img src={development.image} alt="" /> : (
            <div className="detail-hero__fallback"><Icon name="document" size={54} /><span>Imagem em atualização</span></div>
          )}
        </div>
        <div className="detail-hero__overlay" />
        <div className="container detail-hero__content">
          <a className="detail-back" href="#todos-empreendimentos" onClick={handleBack}><Icon name="arrow" size={18} /> Voltar para empreendimentos</a>
          <p className="eyebrow eyebrow--light"><span /> {development.status || 'Empreendimento'}</p>
          <h1>{development.name}</h1>
          <p className="detail-hero__location"><Icon name="pin" size={18} /> {development.address}</p>
        </div>
      </section>

      <section className="detail-info-bar" aria-label={`Resumo do ${development.name}`}>
        <div className="container detail-info-bar__grid">
          {summaryItems.map(([label, value, icon]) => (
            <article key={label}>
              <Icon name={icon} size={34} strokeWidth={1.55} />
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <nav className="detail-toc" aria-label="Sumário do empreendimento">
        <div className="container detail-toc__inner">
          <a className="detail-toc__back" href="#todos-empreendimentos" onClick={handleBack}><Icon name="arrow" size={16} /> Voltar</a>
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
          {development.amenities.length > 0 && (
            <div className="detail-amenities__group">
              <h3>Áreas comuns e lazer</h3>
              <div className="detail-amenities__chips">
                {development.amenities.map((item) => <span key={item}><Icon name="play" size={17} /> {item}</span>)}
              </div>
            </div>
          )}
          {(development.security || []).length > 0 && (
            <div className="detail-amenities__group">
              <h3>Segurança</h3>
              <div className="detail-amenities__chips">
                {development.security.map((item) => <span key={item}><Icon name="document" size={17} /> {item}</span>)}
              </div>
            </div>
          )}
          {(development.sustainability || []).length > 0 && (
            <div className="detail-amenities__group">
              <h3>Sustentabilidade</h3>
              <div className="detail-amenities__chips">
                {development.sustainability.map((item) => <span key={item}><Icon name="document" size={17} /> {item}</span>)}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="detail-gallery section" id="detalhes-imagens" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span /> Galeria</p><h2 id="gallery-title">Imagens do empreendimento</h2></div>
            <p className="section-heading__intro">Clique em qualquer imagem para visualizar em tela cheia.</p>
          </div>
          <div className="detail-gallery__grid">
            {visibleGalleryImages.length ? visibleGalleryImages.map((item, index) => (
              <figure key={`${item.src}-${getImageTitle(item)}`} className={index === 0 ? 'is-large' : ''}>
                <button type="button" onClick={() => openImage('gallery', index)} aria-label={`Ampliar ${getImageTitle(item)}`}>
                  <img src={item.src} alt={`${getImageTitle(item)} do ${development.name}`} loading="lazy" />
                  {index === visibleGalleryImages.length - 1 && remainingGalleryCount > 0 && (
                    <span className="detail-gallery__more" aria-hidden="true">+{remainingGalleryCount} fotos</span>
                  )}
                </button>
                <figcaption>{getImageTitle(item)}</figcaption>
              </figure>
            )) : (
              <div className="detail-empty-state">
                <Icon name="document" size={30} />
                <strong>Imagens em atualização</strong>
              </div>
            )}
          </div>
          {videoGalleryItems.length > 0 && (
            <div className="detail-gallery__videos">
              <h3>Conheça o empreendimento em vídeo</h3>
              <div className="detail-gallery__video-grid">
                {videoGalleryItems.map((item) => (
                  <article className="detail-gallery__video-card" key={item.src}>
                    <video controls playsInline preload="metadata" poster={item.poster} aria-label={getImageTitle(item)}>
                      <source src={item.src} type="video/mp4" />
                      Seu navegador não oferece suporte à reprodução de vídeos.
                    </video>
                    <p>{getImageTitle(item)}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="detail-floor-plans section" id="detalhes-plantas" aria-labelledby="floor-plans-title">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span /> Plantas</p><h2 id="floor-plans-title">Plantas dos imóveis</h2></div>
            <p className="section-heading__intro">Conheça as diferentes configurações de planta disponíveis e encontre a opção que melhor combina com o seu estilo de vida.</p>
          </div>
          <div className="detail-floor-plans__grid">
            {development.floorPlans.length ? visibleFloorPlans.map((item, index) => (
              <button key={item.src} type="button" onClick={() => openImage('floorPlans', index)} aria-label={`Ampliar planta ${getImageTitle(item)}`}>
                <img src={item.src} alt={`Planta interna ${getImageTitle(item)} do ${development.name}`} loading="lazy" />
                <span>{getImageTitle(item)}</span>
              </button>
            )) : (
              <div className="detail-empty-state">
                <Icon name="document" size={30} />
                <strong>Plantas em atualização</strong>
              </div>
            )}
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
        {development.locationImages?.length > 0 && (
          <div className="container detail-location__images">
            {development.locationImages.map((item, index) => (
              <figure key={item.src}>
                <button type="button" onClick={() => openImage('locationImages', index)} aria-label={`Ampliar ${getImageTitle(item)}`}>
                  <img src={item.src} alt={getImageTitle(item)} loading="lazy" />
                </button>
                <figcaption>{getImageTitle(item)}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {activeImage && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={getImageTitle(activeImage)} onClick={closeImage} onTouchStart={handleLightboxTouchStart} onTouchEnd={handleLightboxTouchEnd}>
          <button type="button" className="image-lightbox__close" onClick={closeImage} aria-label="Fechar imagem"><Icon name="close" size={26} /></button>
          <button type="button" className="image-lightbox__nav image-lightbox__nav--prev" onClick={(event) => { event.stopPropagation(); showImage(-1); }} aria-label="Imagem anterior"><Icon name="arrow" size={30} /></button>
          <button type="button" className="image-lightbox__nav image-lightbox__nav--next" onClick={(event) => { event.stopPropagation(); showImage(1); }} aria-label="Próxima imagem"><Icon name="arrow" size={30} /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={getImageTitle(activeImage)} />
            <figcaption>
              <span>{getImageTitle(activeImage)}</span>
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
          <a className="contact-form__instagram" href="https://www.instagram.com/mdione.imoveis/" target="_blank" rel="noreferrer">
            <span className="contact-form__instagram-icon"><Icon name="instagram" size={24} /></span>
            <span className="contact-form__instagram-copy">
              <strong>Acompanhe a Dione no Instagram</strong>
              <small>Lançamentos, imóveis e novidades em primeira mão</small>
              <b>@mdione.imoveis <Icon name="arrow" size={18} /></b>
            </span>
          </a>
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
          <a className="contact-form__alternate" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FaWhatsapp size={22} aria-hidden="true" /> Ou, se preferir, converse pelo <strong>WhatsApp.</strong></a>
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
          <a className="contact-form__instagram" href="https://www.instagram.com/mdione.imoveis/" target="_blank" rel="noreferrer">
            <span className="contact-form__instagram-icon"><Icon name="instagram" size={24} /></span>
            <span className="contact-form__instagram-copy">
              <strong>Acompanhe a Dione no Instagram</strong>
              <small>Lançamentos, imóveis e novidades em primeira mão</small>
              <b>@mdione.imoveis <Icon name="arrow" size={18} /></b>
            </span>
          </a>
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
          <a className="contact-form__alternate" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FaWhatsapp size={22} aria-hidden="true" /> Ou, se preferir, converse pelo <strong>WhatsApp.</strong></a>
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
        <video className="home-video__player" controls preload="metadata" playsInline poster={homeVideoThumbnail} aria-label="Vídeo de apresentação Dione Menezes">
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
            <Brand variant="light" />
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
          <Brand variant="light" />
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

function LinkBioPage() {
  const bookingUrl = `https://wa.me/5571987803690?text=${encodeURIComponent('Olá, Dione! Gostaria de agendar um atendimento sobre os empreendimentos Moura Dubeux.')}`;
  const linkItems = [
    { title: 'Falar no WhatsApp', subtitle: 'Atendimento rápido e personalizado', icon: 'whatsapp', href: WHATSAPP_URL, external: true, primary: true },
    { title: 'Ver empreendimentos', subtitle: 'Conheça os lançamentos da Moura Dubeux', icon: 'building', href: '/#todos-empreendimentos', onClick: () => saveSelectedStateToSession(ALL_STATES_OPTION.uf) },
    { title: 'Acompanhar no Instagram', subtitle: 'Dicas, novidades e bastidores', icon: 'instagram', href: 'https://www.instagram.com/mdione.imoveis/', external: true },
    { title: 'Agendar atendimento', subtitle: 'Escolha o melhor dia e horário', icon: 'calendar', href: bookingUrl, external: true },
    { title: 'Conheça a Dione', subtitle: 'Minha trajetória e como posso te ajudar', icon: 'user', href: '/#sobre' },
    { title: 'Fale comigo', subtitle: 'E-mail, telefone e localização', icon: 'mail', href: '/#contato' },
  ];
  const stateLinks = AVAILABLE_STATES.map((state) => ({ uf: state.uf, title: `Imóveis ${state.name}` }));

  return (
    <main className="link-bio-page" id="conteudo">
      <div className="link-bio__container">
        <a className="link-bio__brand" href="/" aria-label="Dione Menezes — ir para o site oficial">
          <Brand variant="red" />
        </a>

        <header className="link-bio__profile">
          <div className="link-bio__portrait-wrap">
            <img className="link-bio__portrait" src={dionePhoto} alt="Dione Menezes" />
          </div>
          <h1>Dione Menezes</h1>
          <p className="link-bio__role">Especialista de Vendas<br />Moura Dubeux</p>
          <span className="link-bio__divider" aria-hidden="true" />
          <p className="link-bio__description">Te ajudo a encontrar o imóvel ideal da Moura Dubeux, com atendimento personalizado e em todas as etapas da sua compra.</p>
        </header>

        <nav className="link-bio__links" aria-label="Links de Dione Menezes">
          {linkItems.map((item) => (
            <a
              className={`link-bio__button${item.primary ? ' link-bio__button--primary' : ''}`}
              href={item.href}
              key={item.title}
              onClick={item.onClick}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              <Icon name={item.icon} size={28} />
              <span><strong>{item.title}</strong><small>{item.subtitle}</small></span>
              <Icon className="link-bio__arrow" name="arrow" size={21} />
            </a>
          ))}
        </nav>

        <nav className="link-bio__regions" aria-label="Empreendimentos por estado">
          {stateLinks.map((state) => (
            <a
              className="link-bio__region"
              href="/#todos-empreendimentos"
              key={state.uf}
              onClick={() => saveSelectedStateToSession(state.uf)}
            >
              {state.title}<Icon name="arrow" size={17} />
            </a>
          ))}
        </nav>

        <a className="link-bio__email" href={`mailto:${CONTACT_EMAIL}`}>
          <Icon name="mail" size={17} /> {CONTACT_EMAIL}
        </a>

        <div className="link-bio__socials" aria-label="Redes e contato">
          <a href="https://www.instagram.com/mdione.imoveis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={20} /></a>
          <a href={`mailto:${CONTACT_EMAIL}`} aria-label="E-mail"><Icon name="mail" size={20} /></a>
        </div>

        <a className="link-bio__site" href="/">dionemenezes.com.br</a>
        <p className="link-bio__location"><Icon name="pin" size={15} /> Salvador · Feira de Santana e região</p>
      </div>
    </main>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedState, setSelectedState] = useState(readSelectedStateFromSession);
  const [stateSelectionOpen, setStateSelectionOpen] = useState(false);
  const [route, setRoute] = useState(() => decodeURIComponent(window.location.hash.replace(/^#/, '')));
  const isLinkBioPage = window.location.pathname.replace(/\/+$/, '') === '/links';
  const sectionIds = useMemo(() => ['inicio', 'empreendimentos', 'sobre', 'contato'], []);
  const selectedDevelopment = route.startsWith('empreendimento/')
    ? developments.find((development) => development.slug === route.split('/')[1])
    : null;
  const isDetailPage = route.startsWith('empreendimento/');
  const isAllDevelopmentsPage = route === 'todos-empreendimentos';
  const isPrivacyPage = route === 'politica-de-privacidade';
  const handleSelectState = useCallback((nextState) => {
    const stateOption = getStateOption(nextState);
    if (!stateOption) return;

    setSelectedState(stateOption.uf);
    saveSelectedStateToSession(stateOption.uf);
    setStateSelectionOpen(false);
  }, []);
  const handleNavigateToDevelopments = useCallback(() => {
    const savedState = readSelectedStateFromSession();
    setSelectedState(savedState);
    setStateSelectionOpen(!savedState);
    if (window.location.hash !== '#todos-empreendimentos') {
      window.location.hash = '#todos-empreendimentos';
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.max(window.scrollY, 0);
      setScrolled(scrollY > 40);
      setScrollProgress(Math.min(scrollY / 180, 1));
    };
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
    if (isDetailPage || isAllDevelopmentsPage || isPrivacyPage) return undefined;

    const targets = Array.from(document.querySelectorAll('.app-shell main > section:not(.hero)'));

    targets.forEach((target, index) => {
      target.classList.add('reveal-on-scroll');
      target.style.setProperty('--reveal-delay', `${Math.min(index * 55, 220)}ms`);
    });

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [route, isDetailPage, isAllDevelopmentsPage, isPrivacyPage]);

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
      {!isLinkBioPage && <Header
        scrolled={scrolled || isDetailPage || isAllDevelopmentsPage || isPrivacyPage}
        headerProgress={isDetailPage || isAllDevelopmentsPage || isPrivacyPage ? 1 : scrollProgress}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        selectedState={selectedState}
        onSelectState={handleSelectState}
        onNavigateToDevelopments={handleNavigateToDevelopments}
      />}
      {isLinkBioPage
        ? <LinkBioPage />
        : isDetailPage
        ? <DevelopmentDetail development={selectedDevelopment} />
        : isAllDevelopmentsPage
              ? stateSelectionOpen
              ? <StateSelectionPage onSelectState={handleSelectState} />
              : <AllDevelopmentsPage selectedState={selectedState} onSelectState={handleSelectState} />
            : isPrivacyPage
              ? <PrivacyPolicyPage />
            : <main id="conteudo"><Hero currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} onNavigateToDevelopments={handleNavigateToDevelopments} /><Developments onNavigateToDevelopments={handleNavigateToDevelopments} /><About /><ContactFormApi /><HomeVideo /></main>}
      {!isLinkBioPage && <SiteFooter />}
      {!isLinkBioPage && <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com Dione no WhatsApp"><Icon name="whatsapp" size={27} /><span>Fale comigo</span></a>}
    </div>
  );
}

export default App;
