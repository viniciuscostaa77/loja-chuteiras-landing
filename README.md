# STRIDE — Landing Page (Sneakers & Chuteiras)

Landing page em **React + Vite + Tailwind CSS**, no estilo "bridge page": rápida, direta, focada em levar o visitante pro WhatsApp ou pro site de vendas.

⚠️ **Marca fictícia**: este projeto usa o nome "STRIDE" e fotos genéricas de banco de imagens como placeholder. Antes de publicar de verdade, troque pela identidade real da loja (nome, fotos, links) — ver seção 3 abaixo.

## 1. Como instalar e rodar

```bash
npm install
npm run dev
```

Abra o link que aparecer no terminal (geralmente `http://localhost:5173`).

## 2. Estrutura do projeto

```
src/
├── components/
│   ├── Header.jsx            # logo + link do Instagram
│   ├── Hero.jsx               # título + foto de produto
│   ├── ActionLinks.jsx        # botões (WhatsApp/loja/Instagram) + mosaico de fotos
│   ├── TrustBadges.jsx        # faixa de selos de confiança
│   ├── VideoTestimonials.jsx  # 2 vídeos verticais de depoimento
│   ├── InstagramPreview.jsx   # grid de prévia do Instagram
│   └── Footer.jsx
├── config/
│   └── loja.js                 # ⭐ dados centrais (nome, WhatsApp, site, Instagram)
├── utils/
│   └── links.js                # ⭐ gera os links de WhatsApp e do site
├── App.jsx
└── main.jsx
```

## 3. Onde trocar cada coisa

### Nome, WhatsApp, site e Instagram (tudo num só lugar)

Arquivo: `src/config/loja.js`

```js
const loja = {
  nome: 'STRIDE',
  tagline: 'Sneakers & Chuteiras',
  whatsapp: '5581999999999',   // troque pelo WhatsApp real
  siteUrl: 'https://exemplo.com', // troque pelo link do site/loja online real
  instagram: '@stride.sneakers',
  instagramUrl: 'https://instagram.com/stride.sneakers',
}
```

Todos os botões de WhatsApp e de "Acessar loja online" usam esses valores automaticamente (via `src/utils/links.js`) — muda aqui, muda no site inteiro.

### Fotos do produto e do mosaico

Arquivo: `src/components/Hero.jsx` (foto grande) e `src/components/ActionLinks.jsx` (mosaico de 3 fotos).

Para usar fotos reais: coloque os arquivos dentro da pasta `public/` (ex: `public/produto-1.jpg`) e troque o `src` de cada `<img>` para `/produto-1.jpg`.

### Vídeos de depoimento

Arquivo: `src/components/VideoTestimonials.jsx`.

1. Coloque os arquivos `.mp4` dentro de `public/` (ex: `public/depoimento-1.mp4`).
2. No array `videos` no topo do arquivo, ajuste o campo `src` de cada vídeo para `/depoimento-1.mp4`, `/depoimento-2.mp4`, etc.
3. Opcional: defina `poster` com uma imagem de capa (mesmo esquema de caminho local).

### Prévia do Instagram

Arquivo: `src/components/InstagramPreview.jsx` — troque as URLs do array `posts` pelas fotos reais dos últimos posts.

### Selos de confiança

Arquivo: `src/components/TrustBadges.jsx` — troque os textos do array `badges` pelos números/frases reais da loja.

## 4. Build para produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para publicar. Para conferir antes de publicar:

```bash
npm run preview
```

## 5. Publicar gratuitamente (Vercel ou Netlify)

**Vercel**: crie conta em vercel.com → suba o projeto pro GitHub → "Add New Project" → selecione o repositório → mantenha as configurações padrão (Build Command: `npm run build`, Output Directory: `dist`) → Deploy.

**Netlify**: crie conta em netlify.com → rode `npm run build` → arraste a pasta `dist/` pra área de "Deploy manually", ou conecte o GitHub para deploys automáticos.
