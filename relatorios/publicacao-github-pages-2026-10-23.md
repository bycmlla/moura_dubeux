# Preparação da publicação no GitHub Pages

Versão validada em 23/10/2026, após a conversão para WebP.

- Commit das imagens: `4866ac2eb4120033bd95477599dd07c15c8e3fe2`, enviado a `origin/main`.
- Build com todas as mídias locais: 1,53 GB.
- Build preparado para o Pages: **310.228.400 bytes (310,23 MB)**, em 59 arquivos.
- 2.100 imagens de empreendimentos carregadas diretamente do mesmo repositório público, com URLs fixadas no commit das mídias.
- Nenhuma imagem foi recomprimida ou redimensionada nesta etapa. A mudança separa o local de hospedagem; o tamanho e a qualidade dos WebPs permanecem iguais.
- Banners, fotos institucionais, vídeos, ícones e imagem de compartilhamento continuam locais no Pages.
- Desenvolvimento e testes continuam usando os arquivos locais dos empreendimentos.
- Domínio preservado: `mdioneimoveis.com.br`.

O GitHub Pages limita sites publicados a 1 GB. [Documentação oficial](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Validação realizada

- 76 testes passaram após a alteração dos caminhos das imagens.
- Compilação de produção concluída com sucesso.
- Os 2.100 caminhos de imagens existem no commit publicado.
- Downloads de amostras de Pernambuco, Ceará e Rio Grande do Norte retornaram HTTP 200 com Content-Type image/webp e bytes idênticos aos arquivos locais.
- A geração do build exige que as imagens dos empreendimentos estejam commitadas.
- A configuração de deploy substitui os arquivos antigos pelo conteúdo do build validado.

Este relatório registra a preparação validada. O resultado da publicação e o endereço final são conferidos após o envio da branch gh-pages.
