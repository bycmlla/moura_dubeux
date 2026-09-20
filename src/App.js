import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

import dionePhoto from './assets/dione-foto1.jpg';
import homeVideo from './assets/video.mp4';
import homeVideoThumbnail from './assets/thumb.png';
import logoLight from './assets/logo1.png';
import logoRed from './assets/logo2vermelho.png';
import logoComplementLight from './assets/logocomplementar1.png';
import logoComplementRed from './assets/logocomplementar2.png';
import heroSunset from './assets/novobanner1.webp';
import heroCoast from './assets/novobanner2.jpg';
import elleveBook from './assets/Empreendimentos/elleve-horto/book.pdf';
import elleveOrganizedCover from './assets/Empreendimentos/Elleve_Horto_Organizado/capa/capa_elleve_horto.png';
import elleveFacade from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/fachadas/fachada_torre_elleve_horto.png';
import elleveAccess from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/fachadas/acesso_principal_rua_piratancara.png';
import elleveFacadeDetail from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/fachadas/detalhe_fachada_varandas.png';
import ellevePool from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_raia_25m.png';
import elleveLeisureAerial from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/pavimento_lazer_vista_aerea.png';
import elleveLoungeCascade from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/lounge_externo_com_cascata.png';
import ellevePlayground from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import elleveCourt from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/quadra_recreativa.png';
import elleveLobby from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/lobby_social_elevadores.png';
import ellevePartyRoom from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import ellevePlayroom from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import elleveGamesRoom from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/sala_de_jogos.png';
import elleveGym from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import ellevePoolGourmet from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/gourmet_piscina.png';
import elleveCourtSupport from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/areas_comuns/apoio_quadra.png';
import elleveLiving119 from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/living_apartamento_119m2.png';
import elleveLiving150 from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/living_apartamento_150m2.png';
import elleveLiving150Option from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/living_opcao_apartamento_150m2.png';
import elleveMasterSuite119 from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_119m2.png';
import elleveMasterSuite150 from './assets/Empreendimentos/Elleve_Horto_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_150m2.png';
import elleveLocationMap from './assets/Empreendimentos/Elleve_Horto_Organizado/localizacao/mapa_horto_florestal_entorno.png';
import elleveLocationAerial from './assets/Empreendimentos/Elleve_Horto_Organizado/localizacao/vista_aerea_horto_florestal.png';
import elleveGeneralPlan from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/implantacao_geral.png';
import elleveGarageG1Plan from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/pavimento_g1_garagem.png';
import elleveGarageG2Plan from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/pavimento_g2_garagem.png';
import elleveLeisurePlan from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/pavimento_lazer.png';
import elleveTypicalFloorPlan from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/pavimento_tipo_colunas_1_e_2.png';
import ellevePlan119Standard from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/planta_119m2_3_suites_padrao.png';
import ellevePlan119OptionTv from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/planta_119m2_2_suites_sala_tv_gabinete.png';
import ellevePlan119OptionKitchen from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/planta_119m2_2_suites_cozinha_integrada.png';
import ellevePlan150Standard from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/planta_150m2_4_suites_padrao.png';
import ellevePlan150OptionTv from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/planta_150m2_3_suites_sala_tv_gabinete.png';
import ellevePlan150OptionKitchen from './assets/Empreendimentos/Elleve_Horto_Organizado/plantas/planta_150m2_3_suites_cozinha_ampliada.png';
import sombreirosBook from './assets/Empreendimentos/casa-sombreiros/book.pdf';
import sombreirosOrganizedCover from './assets/Empreendimentos/Casa_Sombreiros_Organizado/capa/capa_casa_sombreiros.png';
import sombreirosTower from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/fachadas/torre_casa_sombreiros.png';
import sombreirosEmbasement from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/fachadas/fachada_embasamento_alameda_dos_sombreiros.png';
import sombreirosFacadeDetail from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/fachadas/detalhe_fachada_varandas.png';
import sombreirosGym from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import sombreirosPlayroom from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import sombreirosLeisureCirculation from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/circulacao_externa_pavimento_lazer.png';
import sombreirosCourtGourmet from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/gourmet_apoio_quadra.png';
import sombreirosLobby from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import sombreirosPlayground from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import sombreirosAdultPool from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_raia_25m.png';
import sombreirosPoolAerial from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/piscina_vista_aerea.png';
import sombreirosCourt from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/quadra_recreativa.png';
import sombreirosPartyRoom from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import sombreirosGamesRoom from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/areas_comuns/sala_de_jogos.png';
import sombreirosLiving from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/living.png';
import sombreirosLivingExpanded from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/living_ampliado.png';
import sombreirosLivingIntegrated from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/living_ampliado_cozinha_integrada.png';
import sombreirosMasterSuite from './assets/Empreendimentos/Casa_Sombreiros_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada_com_closet.png';
import sombreirosLeisurePlan from './assets/Empreendimentos/Casa_Sombreiros_Organizado/plantas/implantacao_pavimento_lazer.png';
import sombreirosGaragePlan from './assets/Empreendimentos/Casa_Sombreiros_Organizado/plantas/pavimento_g1_acessos_garagem.png';
import sombreirosTypicalFloorPlan from './assets/Empreendimentos/Casa_Sombreiros_Organizado/plantas/pavimento_tipo_terminacoes_01_02.png';
import sombreirosStandardPlan from './assets/Empreendimentos/Casa_Sombreiros_Organizado/plantas/planta_padrao_168m2_4_suites.png';
import sombreirosOptionOnePlan from './assets/Empreendimentos/Casa_Sombreiros_Organizado/plantas/planta_opcao_1_168m2_3_suites_sala_cozinha_ampliadas.png';
import sombreirosOptionTwoPlan from './assets/Empreendimentos/Casa_Sombreiros_Organizado/plantas/planta_opcao_2_168m2_3_suites_master_ampliada.png';
import sombreirosOptionThreePlan from './assets/Empreendimentos/Casa_Sombreiros_Organizado/plantas/planta_opcao_3_168m2_3_suites_sala_cozinha_integrada.png';
import sombreirosLocation from './assets/Empreendimentos/Casa_Sombreiros_Organizado/localizacao/vista_aerea_caminho_das_arvores.png';
import infinityBook from './assets/Empreendimentos/infinity-business/book.pdf';
import infinityOrganizedCover from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/capa/capa_infinity_salvador_business.png';
import infinityComplex from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/imagens_empreendimento/fachadas/conjunto_infinity_salvador.png';
import infinityBusinessBase from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/imagens_empreendimento/fachadas/embasamento_e_acesso_torre_business.png';
import infinityBusinessTower from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/imagens_empreendimento/fachadas/torre_business_e_distribuicao_pavimentos.png';
import infinityLobby from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/imagens_empreendimento/areas_comuns/lobby_oceanica.png';
import infinityDentalOffice from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/imagens_empreendimento/ambientes_comerciais/consultorio_odontologico_1_coluna.png';
import infinityOfficeTwoColumns from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/imagens_empreendimento/ambientes_comerciais/escritorio_2_colunas_integradas.png';
import infinityOfficeFourColumns from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/imagens_empreendimento/ambientes_comerciais/escritorio_4_colunas_integradas.png';
import infinityGeneralPlan from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/plantas/implantacao_geral_complexo.png';
import infinityGroundPlan from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/plantas/pavimento_acesso_terreo_business.png';
import infinityDentalPlan from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/plantas/planta_consultorio_odontologico.png';
import infinityIntegratedOfficePlan from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/plantas/planta_escritorio_integrado.png';
import infinityTypicalPlan from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/plantas/pavimento_tipo_business.png';
import infinityGardenPlan from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/plantas/pavimento_garden_business.png';
import infinityAerialLocation from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/localizacao/vista_aerea_orla_ondina.png';
import infinityUrbanContext from './assets/Empreendimentos/Infinity_Salvador_Business_Organizado/localizacao/contexto_empreendimentos_orla_ondina.png';
import beachClassBahiaBook from './assets/Empreendimentos/beachclassbahia/MD_Beach_Class_Bahia_Book_v47_.pdf';
import beachClassJaguaribeBook from './assets/Empreendimentos/beachclassjaguaribe/MD0024_22_Book_1920x1080_19.pdf';
import beachClassRioVermelhoBook from './assets/Empreendimentos/beachclassriovermelho/BOOK-DIGITAL-1920x1080-RV-MD-2.pdf';
import cyanoBook from './assets/Empreendimentos/Cyano/BOOK_CYANO.pdf';
import hortoEssenceBook from './assets/Empreendimentos/hortoessence/MD0037_21_BOOK_DIGITAL_14_-_FINALIZADO_2.pdf';
import mansaoOthonBook from './assets/Empreendimentos/mansaoothon/MD-MansaoOthon-Book.2.pdf';
import miratMartinsBook from './assets/Empreendimentos/miratmartins/Book_Mirat_Digital_Final2.pdf';
import poemeHortoBook from './assets/Empreendimentos/poeme-horto/Book_Digital_Poeme-11b.pdf';
import poemeHortoOrganizedCover from './assets/Empreendimentos/Poeme_Horto_Organizado/capa/capa_poeme_horto.png';
import poemeHortoAccess from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/acesso_principal.png';
import poemeHortoPlayroom from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/brinquedoteca.png';
import poemeHortoFacadeAccess from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/fachada_torre_acesso.png';
import poemeHortoFacade from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/fachada_torre_completa.png';
import poemeHortoFitness from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/fitness_espaco_funcional.png';
import poemeHortoGamesGourmet from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/jogos_gourmet.png';
import poemeHortoAerialLeisure from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/lazer_vista_aerea.png';
import poemeHortoLobby from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/lobby_acesso.png';
import poemeHortoPool from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/piscina_raia_25m.png';
import poemeHortoCourt from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/quadra_tenis_poliesportiva.png';
import poemeHortoPartyRoom from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/salao_de_festas.png';
import poemeHortoApartment173Expanded from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_173_ampliada.png';
import poemeHortoApartment173Kitchen from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_173_cozinha_aberta.png';
import poemeHortoApartment173Standard from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_173_padrao.png';
import poemeHortoApartment203Expanded from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/sala_apto_203_sala_ampliada.png';
import poemeHortoSuite173 from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/suite_master_apto_173.png';
import poemeHortoSuite203 from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/suite_master_apto_203.png';
import poemeHortoBalcony203 from './assets/Empreendimentos/Poeme_Horto_Organizado/imagens_empreendimento/varanda_gourmet_apto_203.png';
import poemeHortoGroundPlan from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/implantacao_terreo.png';
import poemeHortoMezzaninePlan from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/implantacao_mezanino.png';
import poemeHortoTypicalFloorPlan from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/implantacao_pavimento_tipo.png';
import poemeHortoFloor173203 from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/pavimento_tipo_173_203.png';
import poemeHortoPlan203Standard from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/planta_203_padrao_4_suites.png';
import poemeHortoPlan203Option from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/planta_203_opcao_3_suites.png';
import poemeHortoPlan173Standard from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/planta_173_padrao_4_suites.png';
import poemeHortoPlan173Option from './assets/Empreendimentos/Poeme_Horto_Organizado/plantas/planta_173_opcao_3_suites.png';
import poemeHortoLocationMap from './assets/Empreendimentos/Poeme_Horto_Organizado/localizacao/mapa_aereo_entorno.png';
import poemeHortoLocationAerial from './assets/Empreendimentos/Poeme_Horto_Organizado/localizacao/vista_aerea_localizacao.png';
import poemeHortoAerial from './assets/Empreendimentos/Poeme_Horto_Organizado/localizacao/vista_aerea_poeme_horto.png';
import riveBook from './assets/Empreendimentos/rive/Book_Digital_Rive-21.pdf';
import salvador220Book from './assets/Empreendimentos/salvador220/BOOK_SALVADOR_220_1.pdf';
import vivantBook from './assets/Empreendimentos/vivant/Book_Digital_Vivant-Final_1.pdf';
import jardinsDoParqueBook from './assets/Empreendimentos/jardinsdoparque/Book-_Jardins_do_Parque_1_TEjna4X.pdf';
import beachClassBahiaOrganizedCover from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/capa/capa_beach_class_bahia.png';
import beachClassBahiaPerspective from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/fachada_perspectiva_empreendimento.png';
import beachClassBahiaFacade from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/fachada_principal.png';
import beachClassBahiaClarivalAccess from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/acesso_rua_clarival_prado_valadares.png';
import beachClassBahiaAlfazemaAccess from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/fachadas/acesso_rua_da_alfazema.png';
import beachClassBahiaPoolArea from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/area_da_piscina.png';
import beachClassBahiaPool from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/piscina.png';
import beachClassBahiaBeachTennis from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/quadra_beach_tennis.png';
import beachClassBahiaAlamedaAerial from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/alameda_de_acesso_vista_superior.png';
import beachClassBahiaAlameda from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/alameda_de_acesso.png';
import beachClassBahiaLobbyReception from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/lobby_e_recepcao.png';
import beachClassBahiaReception from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/recepcao.png';
import beachClassBahiaLobby from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import beachClassBahiaSpa from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/spa_rooftop.png';
import beachClassBahiaRooftopPool from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/piscina_aquecida_rooftop.png';
import beachClassBahiaGym from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/areas_comuns/academia_rooftop_200m2.png';
import beachClassBahiaStudio from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/apartamentos/studio_25_86m2.png';
import beachClassBahiaOneBedroom from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/apartamentos/quarto_e_sala_35m2.png';
import beachClassBahiaResidence from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/imagens_empreendimento/apartamentos/residence_2_quartos_61m2.png';
import beachClassBahiaLeisurePlan from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/implantacao_pavimento_lazer.png';
import beachClassBahiaMezzaninePlan from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_mezanino_7_pavimento.png';
import beachClassBahiaRooftopPlan from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_rooftop_wellness_42_andar.png';
import beachClassBahiaApartmentsPlan from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/pavimento_apartments_1_ao_27_andar.png';
import beachClassBahiaStudioPlan from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_studio_25_86m2.png';
import beachClassBahiaOneBedroomPlan from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_quarto_e_sala_35m2.png';
import beachClassBahiaResidencesPlan from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/pavimento_residences_28_ao_40_andar.png';
import beachClassBahiaTwoBedroomPlanColumns from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_2_quartos_61m2_colunas_02_04_05_06_07_08_09.png';
import beachClassBahiaTwoBedroomPlanColumnsAlt from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_2_quartos_61m2_colunas_01_03.png';
import beachClassBahiaGaragePlan1 from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_garagem_1_pavimento.png';
import beachClassBahiaGaragePlan2 from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/plantas/planta_garagem_2_pavimento.png';
import beachClassBahiaLocation from './assets/Empreendimentos/Beach_Class_Bahia_Organizado/localizacao/localizacao_caminho_das_arvores_shopping_da_bahia.png';
import beachClassRioVermelhoOrganizedCover from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/capa/capa_beach_class_rio_vermelho.png';
import beachClassRioVermelhoFacade from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/fachadas/fachada_torre_e_orla.png';
import beachClassRioVermelhoAccess from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/fachadas/acesso_integrado_a_cidade.png';
import beachClassRioVermelhoRooftopLounge from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/rooftop_lounge.png';
import beachClassRioVermelhoPoolSpa from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/piscina_aquecida_spa_vista_mar.png';
import beachClassRioVermelhoSkyLounge from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/sky_lounge.png';
import beachClassRioVermelhoConfraria from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/espaco_confraria_rooftop.png';
import beachClassRioVermelhoFitnessTreadmills from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/sky_fitness_esteiras.png';
import beachClassRioVermelhoFitness from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/sky_fitness.png';
import beachClassRioVermelhoConcierge from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/hall_concierge.png';
import beachClassRioVermelhoCoffeeLoungeCoworking from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/coffee_shop_lounge_coworking.png';
import beachClassRioVermelhoCoffeeCoworking from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/coffee_shop_coworking.png';
import beachClassRioVermelhoGardenLounge from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/lounge_garden.png';
import beachClassRioVermelhoCarPoint from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/app_car_point.png';
import beachClassRioVermelhoMiniMarket from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/mini_market.png';
import beachClassRioVermelhoBikeScooter from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/espaco_bike_scooter.png';
import beachClassRioVermelhoLaundry from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/laundry_omo.png';
import beachClassRioVermelhoPetCare from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import beachClassRioVermelhoStudio from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_studio.png';
import beachClassRioVermelhoOneBedroomLiving from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_quarto_e_sala_living.png';
import beachClassRioVermelhoOneBedroom from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_quarto_e_sala_quarto.png';
import beachClassRioVermelhoTwoBedroomLiving from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_2_quartos_sala_varanda.png';
import beachClassRioVermelhoTwoBedroom from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/imagens_empreendimento/apartamentos/apartamento_2_quartos_quarto.png';
import beachClassRioVermelhoGroundAccessPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_terreo_acessos_estacionamento.png';
import beachClassRioVermelhoGroundAmenitiesPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_terreo_areas_comuns.png';
import beachClassRioVermelhoRooftopPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_rooftop.png';
import beachClassRioVermelhoStudioPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/planta_studio_26m2.png';
import beachClassRioVermelhoOneBedroomPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/planta_quarto_e_sala_37m2.png';
import beachClassRioVermelhoTwoBedroomPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/planta_2_quartos_67m2.png';
import beachClassRioVermelhoTypicalFloorPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/pavimento_tipo.png';
import beachClassRioVermelhoTypicalImplementationPlan from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/plantas/implantacao_pavimento_tipo.png';
import beachClassRioVermelhoLocation from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/localizacao/rio_vermelho_orla_e_bairro.png';
import beachClassRioVermelhoLocationMap from './assets/Empreendimentos/Beach_Class_Rio_Vermelho_Organizado/localizacao/mapa_localizacao_rio_vermelho.png';
import hortoEssenceOrganizedCover from './assets/Empreendimentos/Horto_Essence_Organizado/capa/capa_horto_essence.png';
import hortoEssenceBambooBoulevard from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/fachadas/boulevard_de_acesso_bambus.png';
import hortoEssenceTower from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/fachadas/torre_horto_essence.png';
import hortoEssenceParkAccess from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/fachadas/acesso_empreendimento_parque_lucaia.png';
import hortoEssenceGatehouse from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/fachadas/guarita_acesso_rua_sapucaia.png';
import hortoEssencePoolFacade from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/fachadas/fachada_area_piscina.png';
import hortoEssenceLobby from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import hortoEssencePocketPark from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/pocket_parque.png';
import hortoEssenceLoungeBar from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/lounge_bar.png';
import hortoEssenceCourt from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/quadra_poliesportiva_tenis.png';
import hortoEssencePoolGourmet from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/gourmet_da_piscina.png';
import hortoEssencePartyRoom from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import hortoEssencePlayroom from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import hortoEssencePlayground from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import hortoEssenceGym from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/espaco_musculacao.png';
import hortoEssenceCrossfit from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/espaco_crossfit.png';
import hortoEssenceMassage from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/sala_de_massagem.png';
import hortoEssenceBeauty from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/espaco_beauty.png';
import hortoEssenceGarden from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/horta.png';
import hortoEssencePetPark from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/pet_parque.png';
import hortoEssencePetCare from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import hortoEssenceBalcony133 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/varanda_133m2_3_suites.png';
import hortoEssenceLiving133 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/living_133m2_3_suites.png';
import hortoEssenceSuite133 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/suite_master_133m2_3_suites.png';
import hortoEssenceKitchen133 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/cozinha_133m2_3_suites.png';
import hortoEssenceOffice133 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/home_office_133m2_3_suites.png';
import hortoEssenceBalcony167 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/varanda_167m2_4_suites.png';
import hortoEssenceLiving167 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/living_167m2_4_suites.png';
import hortoEssenceSuite167 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/suite_master_167m2_4_suites.png';
import hortoEssenceKitchen167 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/cozinha_167m2_4_suites.png';
import hortoEssenceOffice167 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/home_office_167m2_4_suites.png';
import hortoEssenceLivingExpanded167 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/living_ampliado_167m2.png';
import hortoEssenceSuiteExpanded167 from './assets/Empreendimentos/Horto_Essence_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada_167m2.png';
import hortoEssencePlaygroundPlan from './assets/Empreendimentos/Horto_Essence_Organizado/plantas/implantacao_pavimento_playground.png';
import hortoEssenceWellnessPlan from './assets/Empreendimentos/Horto_Essence_Organizado/plantas/implantacao_pavimento_wellness_ss3.png';
import hortoEssenceParkPlan from './assets/Empreendimentos/Horto_Essence_Organizado/plantas/implantacao_acesso_parque_lucaia_ss4.png';
import hortoEssencePlan133 from './assets/Empreendimentos/Horto_Essence_Organizado/plantas/planta_133m2_3_suites.png';
import hortoEssencePlan133OpenKitchen from './assets/Empreendimentos/Horto_Essence_Organizado/plantas/planta_133m2_3_suites_cozinha_aberta_home_office.png';
import hortoEssencePlan167 from './assets/Empreendimentos/Horto_Essence_Organizado/plantas/planta_167m2_4_suites.png';
import hortoEssencePlan167OpenKitchen from './assets/Empreendimentos/Horto_Essence_Organizado/plantas/planta_167m2_4_suites_cozinha_aberta_sala_suites_ampliadas.png';
import hortoEssenceLocationMap from './assets/Empreendimentos/Horto_Essence_Organizado/localizacao/mapa_entorno_horto_florestal.png';
import hortoEssenceLocationAerial from './assets/Empreendimentos/Horto_Essence_Organizado/localizacao/vista_aerea_horto_florestal.png';
import hortoEssenceLucaiaPark from './assets/Empreendimentos/Horto_Essence_Organizado/localizacao/parque_lucaia.png';
import mansaoOthonOrganizedCover from './assets/Empreendimentos/Mansao_Othon_Organizado/capa/capa_mansao_othon.png';
import mansaoOthonNightFacade from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/fachadas/fachada_noturna_frente_mar.png';
import mansaoOthonFacade from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/fachadas/fachada_avenida_oceanica.png';
import mansaoOthonMainAccess from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/fachadas/acesso_principal_avenida_oceanica.png';
import mansaoOthonLeisureAerial from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/area_lazer_piscina_vista_aerea.png';
import mansaoOthonAdultPool from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_vista_mar.png';
import mansaoOthonCourts from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/quadras_tenis_e_beach_tennis.png';
import mansaoOthonLobby from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/entrada_lobby.png';
import mansaoOthonSpa from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/spa_piscina_aquecida_coberta.png';
import mansaoOthonGym from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import mansaoOthonPlayroom from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import mansaoOthonKidsPlay from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/kids_play_externo.png';
import mansaoOthonPartyRoom from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import mansaoOthonLiving from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/living_estar_vista_mar.png';
import mansaoOthonDining from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/living_jantar_vista_mar.png';
import mansaoOthonIntimateRoom from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/sala_intima.png';
import mansaoOthonMasterSuite from './assets/Empreendimentos/Mansao_Othon_Organizado/imagens_empreendimento/apartamentos/suite_master_vista_mar.png';
import mansaoOthonLeisurePlan from './assets/Empreendimentos/Mansao_Othon_Organizado/plantas/implantacao_area_lazer.png';
import mansaoOthonGaragePlan from './assets/Empreendimentos/Mansao_Othon_Organizado/plantas/garagem_g1.png';
import mansaoOthonWellnessPlan from './assets/Empreendimentos/Mansao_Othon_Organizado/plantas/pavimento_lazer_wellness.png';
import mansaoOthonTypicalPlan from './assets/Empreendimentos/Mansao_Othon_Organizado/plantas/pavimento_tipo_2_unidades.png';
import mansaoOthonStandardPlan from './assets/Empreendimentos/Mansao_Othon_Organizado/plantas/planta_padrao_572m2_5_suites.png';
import mansaoOthonOptionPlan from './assets/Empreendimentos/Mansao_Othon_Organizado/plantas/planta_opcao_4_suites_ampliada.png';
import mansaoOthonLocation from './assets/Empreendimentos/Mansao_Othon_Organizado/localizacao/orla_de_ondina_salvador.png';
import miratMartinsOrganizedCover from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/capa/capa_mirat_martins_de_sa.png';
import miratFacade from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/fachadas/fachada_torre_mirat.png';
import miratMainAccess from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/fachadas/acesso_principal_paisagismo.png';
import miratBicycle from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/bicicletario.png';
import miratPlayroom from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import miratConfraria from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/confraria_salao_de_jogos.png';
import miratFitness from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/fitness_130m2.png';
import miratSocialHall from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/hall_social.png';
import miratMinicampo from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/minicampo.png';
import miratPetCare from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import miratPetPlay from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/pet_play.png';
import miratPools from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/piscinas_adulto_e_infantil.png';
import miratPoolLane from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/piscina_raia_20m_e_hidros.png';
import miratPlayground from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/playground.png';
import miratPartyRoom from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import miratSpa from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/areas_comuns/spa_ofuro_hidromassagem.png';
import miratBalcony from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/varanda_gourmet.png';
import miratLiving from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/living.png';
import miratMasterSuite from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/suite_master.png';
import miratExpandedSuite from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada.png';
import miratCloset from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/imagens_empreendimento/apartamentos/closet.png';
import miratLeisurePlan from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/plantas/implantacao_lazer.png';
import miratWellnessConfrariaPlan from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/plantas/planta_espaco_wellness_confraria_spa.png';
import miratWellnessFitnessPlan from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/plantas/planta_espaco_wellness_fitness.png';
import miratStandardPlan from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/plantas/planta_padrao_253m2_4_suites.png';
import miratSuggestionTwoPlan from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/plantas/planta_sugestao_2_253m2_3_suites.png';
import miratSuggestionThreePlan from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/plantas/planta_sugestao_3_253m2_3_suites.png';
import miratAerialLocation from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/localizacao/vista_aerea_horto_florestal.png';
import miratSalvadorSeaView from './assets/Empreendimentos/Mirat_Martins_de_Sa_Organizado/localizacao/vista_planejada_salvador_mar.png';
import riveOrganizedCover from './assets/Empreendimentos/Rive_Organizado/capa/capa_rive.png';
import riveContextFacade from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/fachadas/fachada_rive_contexto_rio_vermelho.png';
import riveNightTower from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/fachadas/torre_rive_perspectiva_noturna.png';
import riveStreetTower from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/fachadas/torre_rive_perspectiva_rua.png';
import riveMainAccess from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/fachadas/acesso_principal_rive.png';
import riveSeaFacade from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/fachadas/fachada_varandas_vista_mar.png';
import riveRooftopSea from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/rooftop_vista_mar.png';
import riveRooftopPanoramic from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/rooftop_panoramico.png';
import riveInfinityPool from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita.png';
import riveRooftopGourmet from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_rooftop.png';
import riveRooftopGym from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/academia_rooftop.png';
import riveSeaGym from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/academia_vista_mar.png';
import riveLobby from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/lobby.png';
import riveViewpointPlayground from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/playground_mirante.png';
import rivePartyPlayground from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/playground_salao_festas.png';
import rivePartyRoom from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import riveGamesRoom from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/sala_de_jogos.png';
import rivePlayroom from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import riveSportsCourt from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/areas_comuns/quadra_esportiva.png';
import riveApartment3Balcony from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/apartamentos/varanda_apartamento_3_quartos.png';
import riveApartment3Suite from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_3_quartos.png';
import riveApartment3Living from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/apartamentos/living_apartamento_3_quartos.png';
import riveGardenBalcony from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/apartamentos/varanda_garden_3_quartos.png';
import riveApartment4Balcony from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/apartamentos/varanda_apartamento_4_quartos.png';
import riveApartment4Suite from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/apartamentos/suite_master_apartamento_4_quartos.png';
import riveApartment4Living from './assets/Empreendimentos/Rive_Organizado/imagens_empreendimento/apartamentos/living_apartamento_4_quartos.png';
import riveGeneralPlan from './assets/Empreendimentos/Rive_Organizado/plantas/implantacao_geral_torres.png';
import riveRooftopPlan from './assets/Empreendimentos/Rive_Organizado/plantas/planta_rooftop.png';
import riveGroundPlan from './assets/Empreendimentos/Rive_Organizado/plantas/implantacao_terreo_g2.png';
import riveLeisurePlan from './assets/Empreendimentos/Rive_Organizado/plantas/implantacao_pavimento_lazer.png';
import riveMareSereiaPlan from './assets/Empreendimentos/Rive_Organizado/plantas/pavimento_tipo_torres_mare_sereia_3_quartos.png';
import rivePlan97Standard from './assets/Empreendimentos/Rive_Organizado/plantas/planta_97m2_3_quartos_padrao.png';
import rivePlan97Master from './assets/Empreendimentos/Rive_Organizado/plantas/planta_97m2_2_suites_banheiro_senhor_senhora.png';
import rivePlan97Office from './assets/Empreendimentos/Rive_Organizado/plantas/planta_97m2_2_suites_gabinete.png';
import riveGardenPlan from './assets/Empreendimentos/Rive_Organizado/plantas/planta_garden_130m2_3_quartos.png';
import riveAmadoPlan from './assets/Empreendimentos/Rive_Organizado/plantas/pavimento_tipo_torre_amado_4_quartos.png';
import rivePlan143Standard from './assets/Empreendimentos/Rive_Organizado/plantas/planta_143m2_4_quartos_padrao.png';
import rivePlan143Master from './assets/Empreendimentos/Rive_Organizado/plantas/planta_143m2_3_suites_lavabo_sala_ampliada.png';
import rivePlan143Integrated from './assets/Empreendimentos/Rive_Organizado/plantas/planta_143m2_3_quartos_cozinha_integrada_suite_master_ampliada.png';
import riveAerialLocation from './assets/Empreendimentos/Rive_Organizado/localizacao/vista_aerea_rio_vermelho.png';
import riveSeaLocation from './assets/Empreendimentos/Rive_Organizado/localizacao/localizacao_200m_do_mar.png';
import riveNeighborhoodMap from './assets/Empreendimentos/Rive_Organizado/localizacao/mapa_entorno_rio_vermelho.png';
import jardinsDoParqueOrganizedCover from './assets/Empreendimentos/Jardins_do_Parque_Organizado/capa/capa_jardins_do_parque.png';
import jardinsDoParqueFacadeTowers from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/fachada/fachada_torres_orquideas_e_hortensias.png';
import jardinsDoParqueTowerPerspective from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/fachada/perspectiva_torre_jardins_do_parque.png';
import jardinsDoParqueApartment60Bedroom from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_quarto.png';
import jardinsDoParqueApartment60Living from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_sala_estar_jantar.png';
import jardinsDoParqueApartment60Suite from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_suite.png';
import jardinsDoParqueApartment60Balcony from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_60m_varanda.png';
import jardinsDoParqueApartment81Children from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_quarto_filhos.png';
import jardinsDoParqueApartment81Office from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_quarto_office.png';
import jardinsDoParqueApartment81Living from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_sala_estar_jantar.png';
import jardinsDoParqueApartment81Suite from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_suite.png';
import jardinsDoParqueApartment81Balcony from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/apartamentos/apartamento_81m_varanda.png';
import jardinsDoParqueAcademy from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import jardinsDoParqueAerialLeisure from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/area_lazer_vista_aerea.png';
import jardinsDoParquePlayroom from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import jardinsDoParqueGourmets from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/gourmets.png';
import jardinsDoParqueVipGourmet from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/gourmet_vip_com_piscina.png';
import jardinsDoParqueHortensiasHall from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/hall_torre_hortensias.png';
import jardinsDoParqueMinimarket from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/minimarket.png';
import jardinsDoParqueMiniCourt from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/miniquadra_recreativa.png';
import jardinsDoParquePetPlace from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/pet_place.png';
import jardinsDoParqueAdultPool from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_prainha_solarium.png';
import jardinsDoParqueChildrenPool from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/piscina_infantil.png';
import jardinsDoParquePlayground from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/playground.png';
import jardinsDoParquePartyRoom from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import jardinsDoParqueSportsBar from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/sports_bar.png';
import jardinsDoParqueTerrace from './assets/Empreendimentos/Jardins_do_Parque_Organizado/imagens_empreendimento/areas_comuns/terraco_salao_de_festas.png';
import jardinsDoParqueGroundPlan from './assets/Empreendimentos/Jardins_do_Parque_Organizado/plantas/implantacao_pavimento_terreo.png';
import jardinsDoParqueGeneralPlan from './assets/Empreendimentos/Jardins_do_Parque_Organizado/plantas/implantacao_geral_torres.png';
import jardinsDoParqueHortensiasFloorPlan from './assets/Empreendimentos/Jardins_do_Parque_Organizado/plantas/pavimento_tipo_torre_hortensias.png';
import jardinsDoParqueOrchidsFloorPlan from './assets/Empreendimentos/Jardins_do_Parque_Organizado/plantas/pavimento_tipo_torre_orquideas.png';
import jardinsDoParquePlan60 from './assets/Empreendimentos/Jardins_do_Parque_Organizado/plantas/planta_60m_2_quartos_1_suite_terminacao_04.png';
import jardinsDoParquePlan81 from './assets/Empreendimentos/Jardins_do_Parque_Organizado/plantas/planta_81m_3_quartos_1_suite_terminacao_01.png';
import jardinsDoParqueCommerce from './assets/Empreendimentos/Jardins_do_Parque_Organizado/localizacao/entorno_comercio_e_servicos.png';
import jardinsDoParqueInterestMap from './assets/Empreendimentos/Jardins_do_Parque_Organizado/localizacao/mapa_entorno_pontos_de_interesse.png';
import jardinsDoParqueBeach from './assets/Empreendimentos/Jardins_do_Parque_Organizado/localizacao/praia_cruz_das_almas.png';
import jardinsDoParqueSeaShopping from './assets/Empreendimentos/Jardins_do_Parque_Organizado/localizacao/vista_aerea_proximidade_mar_e_shopping.png';
import cyanoOrganizedCover from './assets/Empreendimentos/Cyano_Organizado/capa/capa_cyano.png';
import cyanoApartment3Living from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_3_suites_living.png';
import cyanoApartment3Kitchen from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_3_suites_living_cozinha_integrada.png';
import cyanoApartment3Suite from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_3_suites_suite_master.png';
import cyanoApartment4Living from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_4_suites_living_integrado_varanda.png';
import cyanoApartment4Suite from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/apartamentos/apartamento_4_suites_suite_master.png';
import cyanoAcademy from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/academia_185m2.png';
import cyanoCourt from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/area_de_lazer_quadra.png';
import cyanoPlayroom from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca_com_terraco.png';
import cyanoOutdoorGourmet from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_externo.png';
import cyanoSeaGourmet from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_vista_mar.png';
import cyanoInfinityPool from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita_vista_mar.png';
import cyanoRooftop from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/rooftop_vista_mar.png';
import cyanoPartyRoom from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas_175m2.png';
import cyanoAccess from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/fachadas/acesso_rua_da_fonte_do_boi.png';
import cyanoTowerSet from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/fachadas/conjunto_torres_frente_mar.png';
import cyanoCurvedFacade from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/fachadas/fachada_residencial_curvas_varandas.png';
import cyanoGeneralView from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/fachadas/vista_geral_empreendimento_frente_mar.png';
import cyanoNightView from './assets/Empreendimentos/Cyano_Organizado/imagens_empreendimento/fachadas/vista_noturna_conjunto_cyano.png';
import cyanoGeneralPlan from './assets/Empreendimentos/Cyano_Organizado/plantas/implantacao_geral_torres.png';
import cyanoMarRooftopPlan from './assets/Empreendimentos/Cyano_Organizado/plantas/rooftop_torre_mar.png';
import cyanoOceanLeisurePlan from './assets/Empreendimentos/Cyano_Organizado/plantas/pavimento_lazer_torre_oceano.png';
import cyanoGroundPlan from './assets/Empreendimentos/Cyano_Organizado/plantas/pavimento_terreo.png';
import cyanoAtlanticFloorPlan from './assets/Empreendimentos/Cyano_Organizado/plantas/pavimento_tipo_torre_atlantico.png';
import cyanoMarFloorPlan from './assets/Empreendimentos/Cyano_Organizado/plantas/pavimento_tipo_torre_mar.png';
import cyanoOceanFloorPlan from './assets/Empreendimentos/Cyano_Organizado/plantas/pavimento_tipo_torre_oceano.png';
import cyanoPlan3Suites133 from './assets/Empreendimentos/Cyano_Organizado/plantas/planta_3_suites_133m2.png';
import cyanoPlan3SuitesGarden155 from './assets/Empreendimentos/Cyano_Organizado/plantas/planta_3_suites_garden_155m2.png';
import cyanoPlan4Suites182 from './assets/Empreendimentos/Cyano_Organizado/plantas/planta_4_suites_182m2.png';
import cyanoPlan4SuitesGarden204 from './assets/Empreendimentos/Cyano_Organizado/plantas/planta_4_suites_garden_204m2.png';
import cyanoPlan3SuitesIntegratedKitchen from './assets/Empreendimentos/Cyano_Organizado/plantas/planta_opcao_3_suites_cozinha_integrada_133m2.png';
import cyanoLocation from './assets/Empreendimentos/Cyano_Organizado/localizacao/localizacao_rio_vermelho_salvador.png';
import salvador220OrganizedCover from './assets/Empreendimentos/Salvador_220_Organizado/capa/capa_salvador_220.png';
import salvador220GeneralView from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/fachadas/vista_geral_salvador_220.png';
import salvador220LobbyAccess from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/fachadas/acesso_lobby_fachada.png';
import salvador220Tower from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/fachadas/torre_salvador_220.png';
import salvador220SeaFacade from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/fachadas/fachada_salvador_220_frente_mar.png';
import salvador220Reception from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/recepcao.png';
import salvador220CoLiving from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/co_living.png';
import salvador220Gourmet from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/gourmet.png';
import salvador220Academy from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/academia.png';
import salvador220AcademySeaView from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/academia_com_vista_mar.png';
import salvador220Spa from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/spa_com_sauna_e_sala_massagem.png';
import salvador220InfinityPool from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita.png';
import salvador220PoolAerial from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/vista_aerea_piscina.png';
import salvador220Rooftop from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/vista_rooftop.png';
import salvador220RooftopGourmet from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/areas_comuns/espaco_gourmet_rooftop.png';
import salvador220ApartmentOneBedroom from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_1_quarto_33_34m2.png';
import salvador220ApartmentOneBedroom48 from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_1_quarto_48m2.png';
import salvador220ApartmentTwoSuites from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_2_suites_com_lavabo_74m2.png';
import salvador220SuiteTwoSuites from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_2_suites_74m2.png';
import salvador220ApartmentTwoBedrooms from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/apartamentos/apartamento_2_quartos_1_suite_73m2.png';
import salvador220SuiteTwoBedrooms from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_2_quartos_1_suite_73m2.png';
import salvador220LanaiApartment from './assets/Empreendimentos/Salvador_220_Organizado/imagens_empreendimento/apartamentos/lanai_apartamento_1_quarto_32m2.png';
import salvador220LobbyPlan from './assets/Empreendimentos/Salvador_220_Organizado/plantas/implantacao_pavimento_lobby_terreo.png';
import salvador220LeisurePlan from './assets/Empreendimentos/Salvador_220_Organizado/plantas/implantacao_pavimento_lazer.png';
import salvador220RooftopPlan from './assets/Empreendimentos/Salvador_220_Organizado/plantas/planta_rooftop_22_pavimento.png';
import salvador220PlanOneBedroom from './assets/Empreendimentos/Salvador_220_Organizado/plantas/planta_1_quarto_33_34m2.png';
import salvador220PlanOneBedroom48 from './assets/Empreendimentos/Salvador_220_Organizado/plantas/planta_1_quarto_48m2.png';
import salvador220PlanTwoSuites from './assets/Empreendimentos/Salvador_220_Organizado/plantas/planta_2_suites_com_lavabo_74m2.png';
import salvador220PlanTwoBedrooms73 from './assets/Empreendimentos/Salvador_220_Organizado/plantas/planta_2_quartos_1_suite_73m2.png';
import salvador220PlanTwoBedrooms69 from './assets/Empreendimentos/Salvador_220_Organizado/plantas/planta_2_quartos_1_suite_69m2.png';
import salvador220LanaiPlan from './assets/Empreendimentos/Salvador_220_Organizado/plantas/implantacao_lanai_2_pavimentos.png';
import salvador220FirstFloorPlan from './assets/Empreendimentos/Salvador_220_Organizado/plantas/pavimento_primeiro.png';
import salvador220TypicalFloor2To6 from './assets/Empreendimentos/Salvador_220_Organizado/plantas/pavimento_tipo_2_ao_6_andar.png';
import salvador220TypicalFloor7To20 from './assets/Empreendimentos/Salvador_220_Organizado/plantas/pavimento_tipo_7_ao_20_andar.png';
import salvador220TypicalFloor21 from './assets/Empreendimentos/Salvador_220_Organizado/plantas/pavimento_tipo_21_andar.png';
import salvador220RooftopCoverPlan from './assets/Empreendimentos/Salvador_220_Organizado/plantas/rooftop_cobertura_22_andar.png';
import salvador220Location from './assets/Empreendimentos/Salvador_220_Organizado/localizacao/localizacao_salvador_220_rio_vermelho.png';
import vivantOrganizedCover from './assets/Empreendimentos/Vivant_Organizado/capa/capa_vivant.png';
import vivantNightTower from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/fachadas/torre_vivant_vista_noturna.png';
import vivantClaraNunesAccess from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/fachadas/fachada_acesso_rua_clara_nunes.png';
import vivantCatabasGate from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/fachadas/portaria_alameda_das_catabas.png';
import vivantMinibosque from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/fachadas/minibosque_acesso_praca_aquarius.png';
import vivantPlatoZen from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_zen.png';
import vivantPlatoKids from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_kids.png';
import vivantPlatoBarbecue from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_barbecue.png';
import vivantPlatoPet from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/plato_pet.png';
import vivantExternalLeisure from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/lazer_externo_vista_aerea.png';
import vivantPoolLane from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/piscina_raia_22m_hidromassagem.png';
import vivantAdultChildrenPool from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/piscina_adulto_infantil.png';
import vivantPoolGourmet from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/gourmet_da_piscina.png';
import vivantSportsCourt from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/quadra_esportiva_quiosque_barbecue.png';
import vivantPlayground from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/parque_infantil.png';
import vivantLobbyEnergie from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/lobby_energie.png';
import vivantPartyRoom from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas.png';
import vivantConfraria from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/confraria.png';
import vivantTeenLounge from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/teen_lounge.png';
import vivantPlayroom from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/brinquedoteca.png';
import vivantFitness from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/fitness.png';
import vivantCrossfit from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/crossfit.png';
import vivantPetCare from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/pet_care.png';
import vivantCoworking from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/areas_comuns/coworking.png';
import vivantBalcony from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/apartamentos/varanda_gourmet_vista_34_andar.png';
import vivantLiving from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/apartamentos/living.png';
import vivantMasterSuite from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/apartamentos/suite_master.png';
import vivantHomeTheater from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/apartamentos/home_theater_office.png';
import vivantExpandedSuite from './assets/Empreendimentos/Vivant_Organizado/imagens_empreendimento/apartamentos/suite_master_ampliada.png';
import vivantCatabasPlan from './assets/Empreendimentos/Vivant_Organizado/plantas/implantacao_pavimento_catabas.png';
import vivantWellnessPlan from './assets/Empreendimentos/Vivant_Organizado/plantas/implantacao_pavimento_wellness.png';
import vivantClaraNunesPlan from './assets/Empreendimentos/Vivant_Organizado/plantas/implantacao_pavimento_clara_nunes.png';
import vivantTypicalFloorPlan from './assets/Empreendimentos/Vivant_Organizado/plantas/pavimento_tipo_implantado.png';
import vivantPlanStandard from './assets/Empreendimentos/Vivant_Organizado/plantas/planta_padrao_116m2_3_suites.png';
import vivantPlanHome from './assets/Empreendimentos/Vivant_Organizado/plantas/planta_opcao_home_116m2_2_suites.png';
import vivantPlanExpandedSuite from './assets/Empreendimentos/Vivant_Organizado/plantas/planta_opcao_suite_ampliada_116m2_2_suites.png';
import vivantLocationMap from './assets/Empreendimentos/Vivant_Organizado/localizacao/mapa_entorno_caminho_das_arvores.png';
import vivantTancredoNeves from './assets/Empreendimentos/Vivant_Organizado/localizacao/entorno_av_tancredo_neves.png';
import vivantAquariusGardens from './assets/Empreendimentos/Vivant_Organizado/localizacao/praca_aquarius_jardins.png';
import vivantAquariusPaths from './assets/Empreendimentos/Vivant_Organizado/localizacao/praca_aquarius_caminhos.png';
import vivantAquariusGreenArea from './assets/Empreendimentos/Vivant_Organizado/localizacao/praca_aquarius_area_verde.png';
import beachClassJaguaribeOrganizedCover from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/capa/capa_beach_class_jaguaribe.png';
import beachClassJaguaribeFacade from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/fachadas/fachada_principal_torre.png';
import beachClassJaguaribeSeaTower from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/fachadas/torre_frente_mar.png';
import beachClassJaguaribeAccess from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/fachadas/acesso_rua_desembargador_lafayette_velloso.png';
import beachClassJaguaribeNightLeisure from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/lazer_vista_aerea_noturna.png';
import beachClassJaguaribePoolAerial from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita_vista_aerea.png';
import beachClassJaguaribeSeaPool from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/piscina_borda_infinita_frente_mar.png';
import beachClassJaguaribePoolView from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/piscina_vista_mar.png';
import beachClassJaguaribeLounge from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/lounge_externo.png';
import beachClassJaguaribeExternalGourmet from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/gourmet_externo.png';
import beachClassJaguaribePartyTerrace from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/terraco_salao_de_festas.png';
import beachClassJaguaribePartyRoom from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/salao_de_festas_gourmet.png';
import beachClassJaguaribePlayground from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/playground.png';
import beachClassJaguaribeHall from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/hall_social.png';
import beachClassJaguaribeColiving from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/coliving_coworking.png';
import beachClassJaguaribeGrabAndGo from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/grab_and_go.png';
import beachClassJaguaribeFitness from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/fitness.png';
import beachClassJaguaribeBoardGuard from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/areas_comuns/guarderia_pranchas.png';
import beachClassJaguaribeTwoBedroomLiving from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/living_apartamento_2_quartos_frente_mar.png';
import beachClassJaguaribeTwoBedroomSuite from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_2_quartos_frente_mar.png';
import beachClassJaguaribeTwoSuitesLiving from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/living_apartamento_2_suites.png';
import beachClassJaguaribeOneSuiteLiving from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/living_apartamento_1_suite.png';
import beachClassJaguaribeOneSuite from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/imagens_empreendimento/apartamentos/suite_apartamento_1_suite.png';
import beachClassJaguaribeGroundPlan from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/implantacao_pavimento_terreo.png';
import beachClassJaguaribeLeisurePlan from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/implantacao_pavimento_lazer.png';
import beachClassJaguaribeColumnsPlan from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/planta_indicativa_colunas_tipologias_1_ao_16.png';
import beachClassJaguaribeTypicalFloor1 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_1_1_ao_16_andar.png';
import beachClassJaguaribePlan74 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/planta_74m2_2_quartos_1_suite_terminacao_1.png';
import beachClassJaguaribePlan64 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/planta_64m2_2_suites_terminacao_3.png';
import beachClassJaguaribePlan40 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/planta_40m2_1_suite_terminacao_7.png';
import beachClassJaguaribePlan65 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/planta_65m2_2_quartos_1_suite_terminacao_10.png';
import beachClassJaguaribeTypicalFloor2 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_2_17_andar.png';
import beachClassJaguaribeTypicalFloor3 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_3_18_andar.png';
import beachClassJaguaribeTypicalFloor4 from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/plantas/pavimento_tipo_4_19_ao_21_andar.png';
import beachClassJaguaribeLocation from './assets/Empreendimentos/Beach_Class_Jaguaribe_Organizado/localizacao/frente_mar_praia_jaguaribe.png';

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
const PUBLIC_ASSET_BASE = process.env.PUBLIC_URL || '';
const createPublicAssetPath = (path) => `${PUBLIC_ASSET_BASE}${path.startsWith('/') ? path : `/${path}`}`;

const heroSlides = [
  { src: heroSunset, position: 'center center', alt: 'Empreendimento com vista para o mar ao pôr do sol' },
  { src: heroCoast, position: 'center center', alt: 'Empreendimento à beira-mar com vista para a costa de Salvador' },
];

const createBookPages = (slug, total) => Array.from({ length: total }, (_, index) => ({
  src: createPublicAssetPath(`/book-pages/${slug}/page-${String(index + 1).padStart(2, '0')}.jpg`),
  label: `Página ${String(index + 1).padStart(2, '0')}`,
}));

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
  book: null,
  description: '',
  highlights: [],
  stats: [],
  technical: [],
  amenities: [],
  security: [],
  sustainability: [],
  projectTeam: [],
  gallery: [],
  bookImages: [],
  floorPlans: [],
  locationImages: [],
  bookPages: [],
  ...development,
});

const additionalDevelopments = [
  createDevelopment({
    slug: 'beachclassbahia', name: 'Beach Class Bahia', image: beachClassBahiaOrganizedCover, book: beachClassBahiaBook,
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
    ],
    locationImages: [
      { src: beachClassBahiaLocation, titulo: 'Localização - Caminho das Árvores e Shopping da Bahia' },
    ],
  }),
  createDevelopment({
    slug: 'beachclassjaguaribe', name: 'Beach Class Jaguaribe', image: beachClassJaguaribeOrganizedCover, book: beachClassJaguaribeBook,
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
    slug: 'beachclassriovermelho', name: 'Beach Class Rio Vermelho', image: beachClassRioVermelhoOrganizedCover, book: beachClassRioVermelhoBook,
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
    slug: 'cyano', name: 'Cyano', image: cyanoOrganizedCover, book: cyanoBook,
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
    slug: 'hortoessence', name: 'Horto Essence', image: hortoEssenceOrganizedCover, book: hortoEssenceBook,
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
    slug: 'mansaoothon', name: 'Mansão Othon', image: mansaoOthonOrganizedCover, book: mansaoOthonBook,
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
    slug: 'miratmartins', name: 'Mirat Martins de Sá', image: miratMartinsOrganizedCover, book: miratMartinsBook,
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
    slug: 'poeme-horto', name: 'Poème Horto', image: poemeHortoOrganizedCover, book: poemeHortoBook,
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
    slug: 'rive', name: 'Rivê', image: riveOrganizedCover, book: riveBook,
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
    slug: 'salvador220', name: 'Salvador 220', image: salvador220OrganizedCover, book: salvador220Book,
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
    slug: 'vivant', name: 'Vivant', image: vivantOrganizedCover, book: vivantBook,
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
    slug: 'jardinsdoparque', name: 'Jardins do Parque', image: jardinsDoParqueOrganizedCover, book: jardinsDoParqueBook,
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
    book: elleveBook,
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
    bookPages: createBookPages('elleve-horto', 54),
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
    book: sombreirosBook,
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
    bookPages: createBookPages('casa-sombreiros', 41),
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
    book: infinityBook,
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
      { src: infinityComplex, titulo: 'Conjunto Infinity Salvador' },
      { src: infinityBusinessBase, titulo: 'Embasamento e acesso da torre Business' },
      { src: infinityBusinessTower, titulo: 'Torre Business e distribuição dos pavimentos' },
      { src: infinityLobby, titulo: 'Lobby Oceânica' },
      { src: infinityDentalOffice, titulo: 'Consultório odontológico - 1 coluna' },
      { src: infinityOfficeTwoColumns, titulo: 'Escritório - 2 colunas integradas' },
      { src: infinityOfficeFourColumns, titulo: 'Escritório - 4 colunas integradas' },
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
    bookPages: createBookPages('infinity-business', 32),
  },
  ...additionalDevelopments,
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
    building: <><path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h18M9 7h2M9 11h2M9 15h2M12 21v-4h4v4" /></>,
    car: <><path d="m5 16 1.5-5h11L19 16" /><path d="M4 16h16v4H4zM7 20v1M17 20v1M7 16h.01M17 16h.01" /></>,
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
        <img className="brand__logo brand__logo--light" src={logoLight} alt="" />
        <img className="brand__logo brand__logo--red" src={logoRed} alt="" />
      </span>
      <span className="brand__divider" aria-hidden="true" />
      <span className="brand__complement" aria-hidden="true">
        <img className="brand__complement-logo brand__complement-logo--light" src={logoComplementLight} alt="" />
        <img className="brand__complement-logo brand__complement-logo--red" src={logoComplementRed} alt="" />
      </span>
    </span>
  );
}

function Header({ scrolled, activeSection, menuOpen, setMenuOpen, headerProgress = 0 }) {
  const headerStyle = {
    '--header-surface-alpha': headerProgress,
    '--header-shadow-alpha': (headerProgress * 0.09).toFixed(3),
    '--header-shadow-deep-alpha': (headerProgress * 0.08).toFixed(3),
    '--header-blur': `${Math.round(headerProgress * 24)}px`,
  };
  const navItems = [['inicio', 'Início'], ['empreendimentos', 'Empreendimentos'], ['sobre', 'Sobre'], ['contato', 'Contato']];
  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`} style={headerStyle}>
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
          <h1 id="hero-title"><span className="hero__title-main">Seu próximo endereço começa com a</span><em>escolha certa.</em></h1>
          <p className="hero__description">Atendimento especializado para você encontrar o imóvel Moura Dubeux ideal, com orientação personalizada, segurança, transparência e acompanhamento em cada etapa da sua compra.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#empreendimentos">Ver empreendimentos <Icon name="arrow" /></a>
            <a className="button button--outline-light" href="#sobre">Conhecer a Dione</a>
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
        {development.image ? <img src={development.image} alt={`Fachada do empreendimento ${development.name}`} loading="lazy" /> : (
          <div className="development-card__fallback" aria-label={`Book digital do empreendimento ${development.name}`}>
            <Icon name="document" size={38} />
            <strong>{development.name}</strong>
            <span>Book digital</span>
          </div>
        )}
        <span className="development-card__tag">{development.status || 'Empreendimento'}</span>
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
      locationImages: development.locationImages || [],
    } : { gallery: [], floorPlans: [], locationImages: [] }
  ), [development]);
  const [activeLightbox, setActiveLightbox] = useState(null);
  const touchStartX = useRef(null);
  const activeImages = activeLightbox ? lightboxGroups[activeLightbox.group] : [];
  const activeImage = activeLightbox ? activeImages[activeLightbox.index] : null;
  const showAllOrganizedImages = ['elleve-horto', 'miratmartins', 'beachclassriovermelho', 'casa-sombreiros', 'hortoessence', 'infinity-salvador-business', 'poeme-horto', 'jardinsdoparque', 'cyano', 'salvador220', 'vivant', 'beachclassjaguaribe', 'beachclassbahia', 'rive', 'mansaoothon'].includes(development?.slug);
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
            <div className="detail-hero__fallback"><Icon name="document" size={54} /><span>Book digital</span></div>
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

      {development.book && (
        <section className="detail-book section" aria-labelledby="detail-book-title">
          <div className="container detail-book__inner">
            <div>
              <p className="eyebrow"><span /> Material oficial</p>
              <h2 id="detail-book-title">Acesse o material oficial do empreendimento.</h2>
              <p>Confira imagens, plantas, localização, diferenciais e demais informações diretamente no material oficial.</p>
            </div>
            <a className="button button--primary" href={development.book} target="_blank" rel="noreferrer">Abrir material completo <Icon name="arrow" size={19} /></a>
          </div>
        </section>
      )}

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
                <strong>Imagens disponíveis no book digital</strong>
                {development.book && <a href={development.book} target="_blank" rel="noreferrer">Abrir book digital <Icon name="arrow" size={17} /></a>}
              </div>
            )}
          </div>
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
                <strong>Plantas disponíveis no book digital</strong>
                {development.book && <a href={development.book} target="_blank" rel="noreferrer">Consultar plantas <Icon name="arrow" size={17} /></a>}
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

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      <Header
        scrolled={scrolled || isDetailPage || isAllDevelopmentsPage || isPrivacyPage}
        headerProgress={isDetailPage || isAllDevelopmentsPage || isPrivacyPage ? 1 : scrollProgress}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
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
