# Estratégia de SEO orgânico — FixFlowOS

## Objetivo

Conquistar visibilidade orgânica para pesquisas de pessoas que possuem ou trabalham em assistências técnicas de celulares, especialmente buscas por **sistema de ordem de serviço para assistência técnica de celular**. A expressão "melhor sistema de ordem de serviço para assistência técnica" é uma intenção de comparação, não uma comprovação de que FixFlowOS lidera o mercado.

Não há garantia de posição, prazo de indexação, volume de tráfego ou conversões. **Nenhuma ferramenta paga é necessária para começar.**

## Mapa de intenções e URLs

| Intenção | Página | O que diferencia |
|---|---|---|
| Encontrar software de gestão | `/` | Resumo comercial e capturas reais |
| Contratar sistema de OS | `/sistema-de-ordem-de-servico/` | Conteúdo aprofundado, Kanban real, dúvidas |
| Conhecer ferramentas | `/funcionalidades/` | Catálogo de módulos |
| Controlar estoque | `/funcionalidades/estoque/` | Custos, quantidades e movimentações |
| Financeiro de assistência | `/funcionalidades/financeiro/` | Despesas, movimentações e indicadores |
| Celulares para revenda | `/funcionalidades/aparelhos-para-revenda/` | Capital e margem estimada |
| Comparar preços | `/planos/` | Periodicidade, usuários e checkout Stripe |
| Buscar critérios para escolher OS | `/blog/como-escolher-melhor-sistema-ordem-servico/` | Guia de comparação sem ranking inventado |
| Organizar reparos | `/blog/como-organizar-ordens-de-servico/` | Procedimento de atendimento |
| Controlar peças | `/blog/controle-estoque-pecas-celular/` | Boas práticas de estoque |

A página comercial de OS concentra a principal intenção de compra. Não criamos outra página quase igual para `/funcionalidades/ordens-de-servico/`, para reduzir canibalização de busca.

## Pesquisa orgânica inicial

As expressões abaixo são hipóteses para observar, **não volume verificado**:

- sistema de ordem de serviço para assistência técnica de celular
- melhor sistema de ordem de serviço para assistência técnica
- sistema para conserto de celulares
- programa de OS para assistência técnica
- controle de estoque de peças de celular
- software para assistência técnica de celular
- sistema de gestão de assistência técnica

Antes de expandir conteúdo, observe os resultados reais do Google e depois as consultas do Search Console. Avalie se o usuário quer comprar software, obter modelo gratuito de OS ou aprender um procedimento — são intenções diferentes.

## SEO técnico implementado

- HTML estático indexável em todas as rotas públicas.
- `title`, `meta description`, `h1` e URLs descritivas.
- Canonical e URLs absolutas após configurar o domínio.
- Sitemap XML e robots.txt gerados no build.
- Bloqueio seguro de indexação antes de configurar domínio real.
- Open Graph e imagem de compartilhamento.
- Dados estruturados `Organization`, `SoftwareApplication`, `BreadcrumbList` e `Article` conforme o tipo de página, após configurar domínio.
- Links internos entre home, páginas de funcionalidades e blog.
- Imagens reais comprimidas com nomes e textos alternativos.
- Conteúdo em português brasileiro e mobile responsivo.

Os dados estruturados não incluem notas ou avaliações inventadas, nem garantem resultados especiais no Google.

## Configuração do Google Search Console (gratuito)

1. Publique o site em domínio HTTPS definitivo e confirme que `config/site.json` contém esse domínio.
2. Refaça build e deploy; acesse `https://DOMINIO/robots.txt`. Ele deve permitir indexação.
3. Acesse `https://search.google.com/search-console/`.
4. Adicione a propriedade de **Domínio** e realize verificação DNS, quando disponível; alternativamente, use verificação de prefixo de URL pelos métodos disponibilizados.
5. Envie `https://DOMINIO/sitemap.xml` na seção Sitemaps.
6. Utilize a inspeção de URL para verificar a página inicial e `/sistema-de-ordem-de-servico/`.
7. Aguarde processamento. Não trate o envio do sitemap como garantia de indexação.

## Plano de 90 dias

### Dias 1–30 — Fundação

- Revisar todos os conteúdos com base no produto real.
- Configurar domínio, políticas e checkout.
- Validar sitemap, canonical, indexabilidade e desempenho mobile.
- Enviar sitemap ao Search Console.
- Publicar uma demonstração real e acrescentar vídeos curtos explicando OS e Kanban quando disponíveis.
- Compartilhar a página em canais próprios com conteúdo útil, sem spam.

### Dias 31–60 — Aprendizado

- Conferir no Search Console consultas, páginas indexadas, cliques, impressões e CTR.
- Melhorar títulos e descrições de páginas com impressões e poucos cliques.
- Identificar perguntas de leitores e clientes para enriquecer páginas já publicadas.
- Criar um artigo novo realmente útil, se houver demanda comprovada.
- Buscar parcerias editoriais legítimas com profissionais do setor.

### Dias 61–90 — Otimização

- Avaliar quais termos trazem visitantes qualificados.
- Revisar conteúdo com base em dúvidas comerciais reais.
- Melhorar links internos para páginas com intenção de contratar.
- Verificar velocidade mobile e corrigir imagens ou scripts pesados.
- Medir cliques em checkout apenas se forem implantadas métricas compatíveis com privacidade, sem fingir contar vendas.

## Métricas de acompanhamento

- **Impressões:** quantas vezes a página apareceu nas buscas.
- **Cliques:** visitas originadas de resultados orgânicos.
- **CTR:** parcela das impressões que gerou cliques.
- **Posição média:** indicador agregado com variação por consulta, dispositivo e contexto.
- **Cobertura/indexação:** páginas incluídas ou excluídas pelo buscador.
- **Conversões reais:** pagamentos confirmados na Stripe, não apenas cliques.

## Conteúdo e autoridade

- Não usar logotipos de grandes marcas afirmando parceria sem permissão.
- Não inventar avaliações, ranking de “melhor software” ou milhares de clientes.
- Não comprar backlinks ou criar páginas repetitivas para diferentes palavras-chave.
- Não publicar artigos genéricos em massa.
- Priorizar guias originais, demonstrações reais, capturas claras e exemplos da rotina de assistência.

O Google pode levar tempo para descobrir e indexar páginas. O principal trabalho contínuo é melhorar a utilidade das páginas para os potenciais clientes.
