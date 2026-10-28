# FixFlowOS — Site comercial + SEO orgânico

Site comercial **independente da V7.5**, com layout inspirado nas referências visuais fornecidas (Nebula para a landing page e Clax para os planos) e demonstrações reais do FixFlowOS.

> **IMPORTANTE: projeto de PRÉ-LANÇAMENTO.** Os **quatro links Stripe fornecidos são de TESTE** (`buy.stripe.com/test_...`), portanto **não recebem pagamentos reais**. O número WhatsApp e a URL de acesso à plataforma já estão configurados. O domínio da landing, o e-mail e as informações jurídicas continuam pendentes. Enquanto `siteUrl` estiver vazio, todas as páginas têm `noindex` e o `robots.txt` bloqueia a indexação. Não publique para venda sem concluir as configurações e revisar os textos legais.

## Arquitetura

Esta implementação utiliza **gerador estático em Node.js, HTML, CSS e JavaScript**, em vez de Next.js. A preferência por Next.js indicada no briefing não era obrigatória; para este escopo específico, o gerador estático permite testar e publicar o site completo **sem banco, autenticação, build complexo ou dependências npm externas**. O Google recebe HTML prerenderizado em todas as páginas; as edições são feitas em JSON. Não são utilizados serviços pagos de SEO.

**Pré-requisitos:** Node.js 20 ou superior. O projeto não depende de bibliotecas externas. `npm install` pode ser executado, mas não é necessário para rodar.

## Instalação e execução

No Windows (PowerShell) ou terminal:

```bash
npm install
npm run build
npm run dev
```

Abra `http://localhost:3000`. O comando `npm run dev` gera os arquivos de `dist/` e inicia um servidor local. **Não há hot reload:** depois de alterar qualquer JSON ou artigo, pare com Ctrl+C e execute `npm run dev` novamente.

Outros comandos:

```bash
npm run build   # gera a pasta dist/
npm run check   # valida arquivos HTML gerados e ativos obrigatórios
npm run start   # serve dist/ previamente gerado
```

## Antes de publicar — sequência obrigatória

1. Abra `config/site.json`. Preencha `siteUrl` com o endereço HTTPS **real** do domínio final, por exemplo `https://seu-dominio.com.br` (substitua por seu domínio, NÃO use o exemplo literalmente). Preencha WhatsApp, e-mail e identificação empresarial verdadeira.
2. Antes de vender, SUBSTITUA os quatro links Stripe em `config/links.json`: os atuais começam com `test_` e só servem para testes. Configure os links de PRODUÇÃO recebidos da Stripe, sem adicionar chaves de API. Aceitamos somente domínios Stripe autorizados. **Confira pessoalmente cada preço, periodicidade, meios de pagamento e cupom no checkout.**
3. Confira `config/pricing.json`. A primeira contratação mensal de R$ 19,90 é comunicada usando o cupom `BEMVINDO10`, se elegível; o checkout é a fonte da cobrança real. Não acumule descontos indevidamente. Para suspender a divulgação do cupom, altere `promotion.enabled` para `false`.
4. Decida se o teste gratuito de 24 horas realmente estará disponível. Só habilite `trial.enabled` e configure `trial.url` quando houver um fluxo funcional e testado.
5. Revise `termos`, `privacidade` e `cancelamento` nos textos de `scripts/build.mjs` (objeto `legalData`) com orientação adequada. As páginas fornecidas são **modelos preliminares**, não políticas definitivas.
6. A seção de vídeo demonstrativo foi removida a pedido. Mantenha as capturas reais do Dashboard, Kanban e aparelhos próprios na landing.
7. Execute `npm run build` e `npm run check`. Confira site e checkouts; publique a pasta `dist` com o comando de build apropriado.
8. Depois de publicado, confira `https://SEU_DOMINIO/robots.txt` e `/sitemap.xml`, valide o HTML e cadastre o domínio no Google Search Console.

**Nunca copie dados pessoais reais de clientes para imagens de divulgação.** As três capturas fornecidas foram descritas como exemplos de demonstração.

## Publicação na Vercel

1. Suba o projeto a um repositório GitHub privado ou importe o ZIP conforme o fluxo da sua hospedagem.
2. Na Vercel, escolha **Other / Outro** como framework se não for detectado automaticamente.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Instale o domínio e configure DNS e HTTPS.
6. Configure `siteUrl` com o domínio exato e publique de novo. Sem isso, o site permanecerá `noindex`.
7. Abra em desktop e celular e revise os links Stripe.

**Hospedagem comercial:** a Vercel Hobby tem restrições de uso comercial. Utilize um plano que autorize a atividade ou outra hospedagem estática com termos compatíveis. Não foi realizado deploy em sua conta.

## Páginas incluídas

- `/`: apresentação principal, capturas reais, funcionalidades, planos, FAQ e comparativo **ilustrativo** de mercado.
- `/sistema-de-ordem-de-servico/`: página comercial aprofundada com Kanban e informações de OS.
- `/funcionalidades/`: catálogo de módulos.
- 10 páginas específicas de funcionalidades.
- `/planos/`: contratação e adicionais.
- `/blog/`: índice editorial e 6 artigos completos originais.
- `/contato/`: WhatsApp e e-mail configuráveis.
- `/termos/`, `/privacidade/`, `/cancelamento/`: **modelos para revisão obrigatória**.
- `/robots.txt`, `/sitemap.xml`, `/favicon.svg`, imagem Open Graph.

## SEO e acompanhamento

Leia [`docs/SEO-ESTRATEGIA.md`](docs/SEO-ESTRATEGIA.md). O site foi preparado para buscas sobre ordens de serviço e gestão de assistências técnicas; **nenhuma posição no Google é garantida**. O Google Search Console gratuito é recomendado para monitorar impressões, consultas e cliques.

## Alterar preços, links, imagens e textos

Veja [`docs/COMO-EDITAR.md`](docs/COMO-EDITAR.md). Preços e destinos de pagamento ficam em arquivos centralizados, não espalhados pelo HTML.

## Segurança

Sem login, banco de dados, API de pagamentos ou armazenamento de cartão. Apenas links públicos de checkout. Domínios dos links Stripe são validados pelo gerador. Cabeçalhos de segurança estão no arquivo `vercel.json`. Nenhuma chave secreta é necessária. Conteúdo e metadados são escapados para evitar injeções HTML.

## Alterações V2 — pagamentos e apresentação

- Checkout mensal: link Stripe TESTE informado (Pix e cartão conforme disponibilidade no checkout).
- Checkout trimestral e anual: links Stripe TESTE informados (cartão). Pix desses planos: solicitar cobrança manual pelo WhatsApp.
- Plano fundador vitalício: link Stripe TESTE informado (Pix e cartão). Parcelamento no Pix: negociar condições individualmente por WhatsApp.
- Acesso ao sistema: `https://fixflowos.vercel.app/login`.
- WhatsApp: número informado **(64) 99294-1121**; o link fornecido tinha um dígito 9 a menos, portanto o projeto gera `https://wa.me/5564992941121`. Confira o número antes da publicação.
- Página inicial sem vídeo; capturas originais preservadas.
- `config/comparison.json` controla a tabela de posicionamento ilustrativo: NÃO é pesquisa de satisfação, levantamento independente ou ranking de mercado. Evite apresentar números e notas sem dados verificáveis.

## Testes realizados nesta entrega

- `node --check` do gerador e do JavaScript de interface.
- `npm run build` e `npm run check` em Node 22.
- Geração de 25 páginas públicas e 404.
- Verificação de imagens, H1, metadados, menu mobile, layout sem scroll horizontal (390px e 1440px) e cartões de planos com navegador Chromium via pré-visualização renderizada em memória.
- Teste HTTP local com status 200 para a página inicial e `/planos/`.

**Não realizados:** análise Lighthouse real em domínio público, indexação no Google, testes reais de checkout com cartões/Stripe, deploy na Vercel e verificação jurídica definitiva.
