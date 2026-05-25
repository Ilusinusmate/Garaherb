# GaraHerb — Desafio Técnico

Landing page desenvolvida como parte do desafio técnico para a vaga de Desenvolvedor(a) Web.

🔗 **Deploy:** [garaherb.vercel.app](https://garaherb.vercel.app)   
🎥 **Vídeo explicativo:**

---

## Stack

- **Next.js 15** (App Router, exportação estática)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**

Sem bibliotecas de componentes externas — tudo construído do zero com Tailwind.

---

## Estrutura do projeto

```
src/
├── app/
│   ├── page.tsx                  # Entry point
│   ├── GaraHerbLandingPage.tsx   # Composição das seções
│   ├── HeroSection.tsx
│   ├── TrustBadges.tsx
│   ├── ProductPackages.tsx       # Carrossel mobile + grid desktop
│   ├── FormulaSection.tsx
│   ├── IngredientsSection.tsx
│   ├── PerformanceSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ShippingBanner.tsx
│   ├── FAQSection.tsx            # FAQ
│   └── ...
├── components/
│   ├── ui/Button.tsx             # Componente de botão reutilizável
│   └── common/Footer.tsx
├── styles/
│   ├── index.css
│   └── tailwind.css
public/
└── images/                       # Todos os assets estáticos
```

---

## Decisões técnicas

**Next.js com export estático**  
O projeto usa `output: 'export'` no `next.config.mjs`, o que gera uma pasta `out/` com HTML/CSS/JS estático puro — compatível com Vercel, Netlify ou qualquer CDN, sem necessidade de servidor Node.

**Responsividade sem layout mobile definido**  
O Figma entregava apenas o desktop. A adaptação mobile foi feita com base na hierarquia visual da página: em telas pequenas, grids colapsam para coluna única, o carrossel de produtos usa scroll snapping nativo (`scroll-snap-type`) para navegação fluida, e cards com avatares empilham verticalmente com o avatar sobreposto ao topo.

**Carrossel sem biblioteca**  
O carrossel de kits de produto foi implementado com `overflow-x: scroll`, `scroll-snap-type: x mandatory` e `scrollTo()` via `useRef`. Sem dependências externas, comportamento nativo e performático.

**Botão reutilizável com `cva`**  
O componente `Button` usa `class-variance-authority` para variantes e `tailwind-merge` para resolver conflitos de classes. O estilo primário (gradiente amarelo, sombra, borda inferior dourada) é aplicado via inline styles onde Tailwind não alcança valores arbitrários aninhados.

**Images `unoptimized`**  
Como o output é estático, o servidor de otimização de imagens do Next.js não está disponível. A flag `images: { unoptimized: true }` mantém as imagens funcionando sem quebrar o build.

---

## Como rodar localmente

```bash
npm install
npm run dev
# http://localhost:4028
```

## Build estático

```bash
npm run build
# Gera a pasta out/
```
