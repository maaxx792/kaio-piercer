# Kaio Piercer — Template Premium (Body Piercing)

Template reutilizável em **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**,
construído para estúdios de body piercing / tatuagem / estética, com identidade 100% dirigida por dados.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
/app                 rotas (App Router), layout, SEO, globals.css
/components          um componente por seção (Navbar, Hero, About, Benefits,
                      Services, Portfolio, Testimonials, FAQ, CTA, Footer)
/components/ui        peças reutilizáveis (Button "shiny", mapa de ícones)
/data/site.ts          ⭐ ÚNICA fonte de conteúdo do site
/lib                  tipos TypeScript e helpers (cn, WhatsApp link builder)
/public/images         imagens locais (opcional — hoje o hero/galeria usam URLs)
```

## Reaproveitando para outro cliente

Você **nunca precisa tocar nos componentes**. Edite apenas `data/site.ts`:

- `companyName`, `titlePrimary/Secondary`, `tagline`
- `heroTitle`, `heroSubtitle`, `heroBackground` (URL ou `/images/...`)
- `about`, `benefits`, `services`, `portfolio`, `testimonials`, `faq`
- `schedule`, `locations` (Google/Apple Maps)
- `contact` (WhatsApp) e `socials` (Instagram)
- `colors` — usados como referência; a paleta real fica em `tailwind.config.ts`
  (tokens `ink.*` para fundo/neutros e `volt.*`/`cyan.*` para o acento). Para
  trocar a cor de destaque do projeto, ajuste esses tokens.

Todas as imagens (hero, galeria) podem ser URLs externas ou arquivos dentro de
`/public/images`, referenciados como `/images/arquivo.jpg`.

## Seções (na ordem em que aparecem)

1. Navbar (fixa, com menu mobile)
2. Hero (tela cheia, com elemento de assinatura — retícula de precisão)
3. Benefits (4 cartões de proposta de valor)
4. About (posicionamento editorial em duas colunas)
5. Services (grade de serviços com preço/label)
6. Portfolio (galeria com lightbox)
7. Testimonials (depoimentos)
8. FAQ (acordeão)
9. CTA / Agendamento (formulário que monta uma mensagem e abre o WhatsApp)
10. Footer

## Notas sobre as imagens de serviço

Como não recebi arquivos de imagem específicos do estúdio para os cards de
"Serviços" e "Galeria", usei fotografias de stock (Unsplash) como placeholder
em `data/site.ts`. Basta trocar os campos `imageUrl` / `heroBackground` pelas
fotos reais do Kaio (upload em `/public/images` e referenciar como
`/images/nome-do-arquivo.jpg`).
