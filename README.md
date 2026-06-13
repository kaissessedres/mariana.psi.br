# Mariana Gouvêa · Psicóloga Infantojuvenil

Site institucional e blog da psicóloga **Mariana Gouvêa** (CRP 07/41781), com foco no atendimento online de crianças e adolescentes.

🔗 **[gouveamariana.com.br](https://gouveamariana.com.br)**

---

## Sobre

Site _one-page_ com blog, construído para apresentar os atendimentos — psicoterapia para adolescentes, grupos terapêuticos e orientação parental — e converter visitantes em contato via **WhatsApp**. Sem formulários e sem backend: foco em performance, acessibilidade e simplicidade.

## Stack

- **[Astro](https://astro.build)** — site estático, zero JavaScript por padrão
- **Content Collections** — blog em Markdown versionado no repositório
- **Vercel** — hospedagem com deploy contínuo
- **Poppins** (Google Fonts) — tipografia da marca

## Desenvolvimento

```bash
npm install      # instala as dependências
npm run dev      # servidor local em http://localhost:4321
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build localmente
```

## Estrutura

```
src/
├── components/      # Header · Hero · Sobre · Atendimentos · ComoFunciona
│                    # Faq · BlogPreview · CtaFinal · Footer · Blob · BotaoWhatsApp
├── content/blog/    # posts do blog (.md)
├── layouts/         # Base.astro — SEO, Open Graph e JSON-LD
├── pages/           # index · blog/ · 404
└── styles/          # tokens.css — cores, tipografia e animações
public/
├── fotos-web/       # fotos otimizadas (WebP)
└── ...              # logo, símbolo, favicon, og-image
```

## Publicando um post no blog

Crie um arquivo `.md` em `src/content/blog/`:

```markdown
---
title: 'Título do post'
description: 'Resumo curto, usado na listagem e no SEO.'
pubDate: 2026-01-15
tags: ['Adolescentes', 'Terapia Online']
heroImage: '/fotos-web/nome-da-imagem' # opcional (sem o sufixo -capa/-card)
heroImageAlt: 'Descrição da imagem para acessibilidade'
---

Conteúdo do post em Markdown...
```

O post aparece automaticamente na home (3 mais recentes) e na página `/blog`.

## Identidade visual

Tokens centralizados em [`src/styles/tokens.css`](src/styles/tokens.css):

| Cor          | Hex       | Uso                                   |
| ------------ | --------- | ------------------------------------- |
| Verde escuro | `#4e6f4c` | títulos, links, elementos estruturais |
| Verde claro  | `#c1d18a` | fundos de seção, formas decorativas   |
| Rosa         | `#c76679` | CTA do WhatsApp, destaques            |
| Laranja      | `#ce8236` | acentos pontuais                      |

## Deploy

Cada `push` na branch `main` dispara um deploy automático na Vercel. O domínio `gouveamariana.com.br` é servido com HTTPS (certificado renovado automaticamente).

---

<sub>Atendimento psicológico online regulamentado pelo Conselho Federal de Psicologia. Em caso de crise, ligue para o **CVV — 188** (24h, gratuito).</sub>
