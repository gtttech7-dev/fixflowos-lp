# Como editar o site FixFlowOS sem programar

Use um editor simples como Visual Studio Code. Cada item abaixo pode ser alterado em um arquivo JSON, sem login nem banco de dados.

## Preços e planos

Abra `config/pricing.json`.

- `plans[].price`: valor em reais, com **ponto decimal** (ex.: `29.90`).
- `plans[].billingLabel`: texto exibido ao lado do preço (ex.: `/mês`).
- `plans[].benefits`: benefícios do plano.
- `recommendedPlan`: ID do plano em destaque (`mensal`, `trimestral`, `anual` ou `vitalicio`).
- `includedUsers`: número base de usuários incluídos (atualize também textos escritos especificamente para os planos se essa regra mudar).
- `promotion.enabled`: `true` mostra cupom; `false` oculta. `promotion.firstMonthPriceBRL` controla o valor promocional **exibido**, não a cobrança da Stripe.
- `addons`: preços e pacotes de funcionários extras.
- `founderInstallments.enabled`: mostra oferta parcelada apenas com **link Stripe real correspondente** preenchido.

**ATENÇÃO:** Alterar o preço aqui **não altera** o valor que a Stripe cobra. Revise o produto/preço/link na Stripe e teste antes de publicar. Repetir o valor errado no site gera risco de reclamações.

## Links de pagamento

Abra `config/links.json` e coloque os URLs reais nos campos:

```json
{
  "stripe": {
    "mensal": "https://buy.stripe.com/SEU_LINK_DE_PRODUCAO",
    "trimestral": "",
    "anual": "",
    "vitalicio": "",
    "vitalicioParcelado": ""
  },
  "pixManual": {"mensal":"", "trimestral":"", "anual":"", "vitalicio":""}
}
```

O exemplo acima é **ilustrativo** e não funciona como cobrança. Copie o link real do seu painel Stripe. Se não configurar um link de cartão, o botão mostrará que a contratação está em preparação, em vez de redirecionar para um site inventado.

Os links atuais estão em **modo de teste** e não recebem valores reais. Troque os quatro URLs `test_...` por links de produção antes de começar a vender. Pix trimestral/anual e parcelamento vitalício por Pix são direcionados ao WhatsApp; o site não cria uma cobrança Pix automática.

## WhatsApp e e-mail

Abra `config/site.json`:

```json
{
  "siteUrl":"",
  "contactEmail":"",
  "whatsappNumber":"5564992941121"
}
```

Edite apenas os campos dentro do arquivo completo, não apague os outros. Número do WhatsApp: código do país 55 + DDD + número, somente dígitos. O número foi informado para o FixFlowOS. O link enviado na conversa tinha um dígito 9 a menos; o projeto usa o número informado, com prefixo 55. Confira antes de publicar. `whatsappUrl` contém a mensagem pré-definida do botão de contato.

## Domínio e indexação do Google

Em `config/site.json`, preencha `siteUrl` com `https://SEU_DOMINIO_REAL` (sem barra final, caminho ou query). Antes disso, o site ficará **propositalmente bloqueado para indexação** e o sitemap ficará vazio.

Depois de definir, execute `npm run build` e publique de novo. Verifique `robots.txt`, `sitemap.xml` e canonical do HTML.

## Teste gratuito

Em `config/site.json` configure:

```json
"trial": {"enabled": false, "label": "Teste grátis por 24 horas", "url": ""}
```

Somente altere para `true` e informe uma URL válida após confirmar que o teste realmente funciona. Caso contrário o botão principal leva aos planos.

## Textos, imagens e recursos

- `config/content.json`: títulos da home, descrições e chamadas comerciais.
- `config/features.json`: os 10 módulos específicos, com resumos e explicações.
- `config/seo.json`: título SEO e meta description das páginas principais.
- `public/images/dashboard.webp`, `aparelhos.webp`, `kanban.webp`: capturas reais. Substitua preservando os nomes ou atualize o gerador.
- `content/blog/*.md`: os seis artigos. Edite Markdown simples: `#`, `##`, `###`, parágrafos, listas `-`, negrito `**texto**` e links relativos `[texto](/pagina/)`.
- `scripts/build.mjs`: modelos das páginas legais e perguntas frequentes. Para alterar esses itens ainda é necessário editar o gerador, mas sem banco de dados ou serviços externos.

## Comparativo ilustrativo e imagens

- `config/comparison.json`: título, frases e critérios do quadro ilustrativo. Não apresenta pesquisa de satisfação, notas ou rankings de mercado. Qualquer avaliação comparativa real exige evidências verificáveis.
- A seção de vídeo foi removida. As três capturas reais continuam na landing.
- O link para entrar no sistema é `accessUrl` em `config/site.json`, diferente de `siteUrl`, que é o domínio da **landing page**. Não confunda os dois.

## Atualização no ar

1. Edite JSON ou Markdown.
2. Rode `npm run build` e `npm run check`.
3. Publique a atualização do repositório / realize novo deploy na hospedagem.
4. Abra o site em aba anônima e confira o preço e o link de pagamento.

Sem painel administrativo e sem banco de dados, mudanças de texto ou plano **exigem redeploy**. Isso reduz custos e complexidade, mas não permite alterações instantâneas sem publicação.
