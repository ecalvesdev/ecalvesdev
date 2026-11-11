# Elias Castro — Landing

Site de apresentação e portfólio de **Elias de Castro Alves** (marca **ELIAS CASTRO**).

Landing visual-first em preto, azul elétrico (`#005BFF`) e branco, com tipografia Geist, fotos profissionais, carrossel de tecnologias e reel cinematográfico contínuo.

Repositório: [github.com/ecalvesdev/ecalvesdev](https://github.com/ecalvesdev/ecalvesdev)

## O que tem no site

| Rota | Conteúdo |
|------|----------|
| `/` | Hero, tecnologias, experiência, sobre, abordagem, reel 1→2→3, CTA |
| `/servicos` | Lista de serviços de engenharia |
| `/contato` | Contatos + formulário que abre o WhatsApp (`wa.me`) |

O formulário **não grava dados** no servidor: valida nome e mensagem no cliente e redireciona para o WhatsApp com o texto pronto.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Geist Sans / Geist Mono**
- **Framer Motion** (reveal, parallax, reduced-motion)
- **Lucide** + **Simple Icons** (badges)
- Sem backend nesta fase

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # produção
npm run start   # servir build
npm run lint
```

## Estrutura relevante

```
src/
  app/                 # rotas App Router (/, /servicos, /contato)
  components/          # UI + seções da home
  content/             # textos e dados tipados (site, storyboard, cinematic)
  lib/                 # helpers (WhatsApp, ícones, cn)
public/
  brand/               # logo, retrato, foto full body
  kit/                 # ícones, fundos e decorações
  media/               # vídeos e posters do reel
scripts/               # preparação de assets (logo, kit)
```

Conteúdo editável principalmente em `src/content/site.ts`.

## Marca e mídia

- Logo: `public/brand/logo-elias-castro.png` (fundo transparente)
- Retrato / corpo inteiro: `public/brand/elias-castro.png`, `elias-castro-full.png`
- Reel: `public/media/cinematic-{1,2,3}.mp4` (reprodução contínua, sem scroll-pin)

Scripts opcionais:

```bash
python scripts/prepare-brand-assets.py
python scripts/prepare-kit-assets.py
```

## Contato

- E-mail: [ecalves.dev@gmail.com](mailto:ecalves.dev@gmail.com)
- WhatsApp: +55 62 99206-6804
- [GitHub](https://github.com/ecalvesdev) · [LinkedIn](https://linkedin.com/in/ecalvesdev) · [Instagram](https://instagram.com/ecalves.dev)
