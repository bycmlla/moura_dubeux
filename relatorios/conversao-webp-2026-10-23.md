# Conversão das imagens para WebP

Concluída em 23/10/2026. 2113 imagens PNG/JPG convertidas e referências atualizadas no site. 4 PNGs originais incompletos foram preservados.

| Conteúdo | Antes | Depois | Redução |
| --- | ---: | ---: | ---: |
| Imagens analisadas (inclui os PNGs preservados) | 4,85 GB | 1,23 GB | 74,7% |
| Pasta build completa | 5,16 GB | 1,53 GB | 70,3% |

## Qualidade e compatibilidade

- Mantidas as dimensões das imagens e a transparência; aplicada a orientação EXIF, quando presente.
- 797 plantas, mapas, logotipos e outras imagens técnicas com compressão sem perdas.
- 1316 fotos/renderizações com qualidade 85 e canal de transparência com qualidade 100.
- As imagens que já eram WebP e os SVGs foram mantidos. Ícones do navegador, manifesto e imagem de compartilhamento em public mantêm seus formatos de compatibilidade.
- [Documentação das opções WebP utilizadas no Sharp](https://sharp.pixelplumbing.com/api-output/#webp).

## Backup dos originais

Pasta fora do projeto: `C:\Users\camila.aguiar\Documents\Dione\dione-md-originais-webp-2026-10-23`.

Os PNGs/JPGs estão na subpasta originais, preservando o caminho src/assets. A subpasta codigo guarda os arquivos de código anteriores à troca das referências. Os originais não entram no build. O manifesto JSON desta mesma data registra caminhos, tamanhos e hashes SHA-256 para conferência.

## Validação

- Metadados, dimensões e hashes de todos os WebPs conferidos.
- Auditoria dos imports e referências sem caminhos de imagens ausentes.
- 76 testes passaram (npm test -- --watchAll=false --runInBand).
- npm run build concluído; arquivos gerados conferidos pelo manifesto da compilação.
- O novo build está pronto localmente; nenhuma publicação foi executada.

## Próxima publicação

O comando deploy de package.json passou de gh-pages -d build --add para gh-pages -d build. Assim, a próxima publicação substitui os arquivos antigos pelo conteúdo do novo build; a opção --add manteria os PNGs antigos acumulados. O CNAME existente está incluído em public e no build. [Comportamento documentado da opção add](https://github.com/tschaub/gh-pages#optionsadd). Nenhuma publicação foi executada durante esta conversão.

## Maiores economias

| Arquivo original | Antes (MB) | WebP (MB) | Economia (MB) |
| --- | ---: | ---: | ---: | ---: |
| `src/assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/01_Capa/capa_fachada_principal.png` | 14,48 | 1,72 | 12,76 |
| `src/assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/fachada_vista_aerea_principal.png` | 14,48 | 1,72 | 12,76 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/playground_ao_ar_livre.png` | 10,09 | 1,1 | 8,99 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/apartamento_garden_65m2_area_externa.png` | 9,93 | 1,03 | 8,9 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/pet_place.png` | 10,07 | 1,2 | 8,87 |
| `src/assets/Empreendimentos/Pernambuco/VENANCIO_BARBOSA_Organizado/01_Imagens_do_Empreendimento/salao_de_festas.png` | 9,34 | 0,71 | 8,63 |
| `src/assets/Empreendimentos/Bahia/Mood_Colina_Organizado_Colorido/imagens_empreendimento/01_vista_orla_patamares.png` | 9,59 | 1,14 | 8,45 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/piscina_infantil.png` | 9,32 | 1,01 | 8,32 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/apartamento_garden_53m2_area_externa.png` | 8,74 | 0,72 | 8,02 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/piscina_adulto_com_prainha.png` | 8,95 | 0,98 | 7,96 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/churrasqueiras_proximas_piscina.png` | 8,82 | 0,9 | 7,92 |
| `src/assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/quadras_esportivas_vista_aerea.png` | 8,76 | 1,28 | 7,47 |
| `src/assets/Empreendimentos/Pernambuco/VENANCIO_BARBOSA_Organizado/01_Imagens_do_Empreendimento/piscina.png` | 7,94 | 0,5 | 7,44 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/caminho_acesso_salao_festas.png` | 8,02 | 0,8 | 7,22 |
| `src/assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/espaco_infantil_externo_02.png` | 8,19 | 1,16 | 7,03 |
| `src/assets/Empreendimentos/Alagoas/Mood_Murilopolis_Organizado/02_Imagens_Empreendimento/pet_place.png` | 8,28 | 1,26 | 7,02 |
| `src/assets/Empreendimentos/Ceará/Miraflor_Passeio_Kennedy_organizado/02_Imagens_Empreendimento/quadra_poliesportiva.png` | 7,84 | 0,9 | 6,95 |
| `src/assets/Empreendimentos/Pernambuco/Beach_Class_Wave_Organizado/02_Imagens_Empreendimento/piscina_prainha_e_spa_vista_aerea.png` | 7,91 | 1,15 | 6,76 |
| `src/assets/Empreendimentos/Pernambuco/Arthur_Bruno_Schwambach_Organizado/02_Imagens_Empreendimento/minicampo.png` | 7,97 | 1,26 | 6,71 |
| `src/assets/Empreendimentos/Pernambuco/VENANCIO_BARBOSA_Organizado/01_Imagens_do_Empreendimento/salas_de_estar_e_jantar.png` | 7,37 | 0,67 | 6,7 |

## Originais incompletos preservados

- `src/assets/Empreendimentos/Alagoas/Lanai_Beach_Organizado/02_Imagens_Empreendimento/apartamento_130m2_suite_vista_mar.png`: PNG original incompleto: bloco final IEND ausente. Preservado para evitar conversão com regiões danificadas.
- `src/assets/Empreendimentos/Alagoas/Mood_Murilopolis_Organizado/04_Localizacao/mapa_aereo_acessos_vias.png`: PNG original incompleto: bloco final IEND ausente. Preservado para evitar conversão com regiões danificadas.
- `src/assets/Empreendimentos/Bahia/Unica_Cardeal_Organizado/Unica_Cardeal_Organizado/plantas/implantacao_torres.png`: PNG original incompleto: bloco final IEND ausente. Preservado para evitar conversão com regiões danificadas.
- `src/assets/Empreendimentos/Rio Grande do Norte/TRAIRI_517_Organizado/Imagens_do_Empreendimento/apartamento_140m2_suite_master.png`: PNG original incompleto: bloco final IEND ausente. Preservado para evitar conversão com regiões danificadas.

A planilha CSV contém a relação completa de arquivos convertidos. Para repetir a ferramenta em outro projeto, instale sharp e adapte o diretório de backup e a data antes de iniciar. Não execute uma segunda conversão sobre os WebPs gerados.
