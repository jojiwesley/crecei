# 🚀 GUIDELINES — LANDING PAGES EM NEXT.JS

## 🎯 Objetivo

Definir padrões técnicos e boas práticas para desenvolvimento de **Landing Pages em Next.js**, com foco em **alta performance, SEO, escalabilidade, UI/UX e código limpo**.

---

## ⚙️ Stack e Ferramentas

- Framework: **Next.js (App Router)**
- Linguagem: **TypeScript**
- Estilização: **Styled-components ou TailwindCSS**
- Formulários: **React Hook Form + Zod**
- Animações: **Framer Motion**
- SEO: **Next Metadata API**
- Padronização: **ESLint + Prettier**
- Versionamento: **Git + Commit Semântico**
- Deploy:

---

## 🧩 Estrutura de Pastas

src/
├─ app/ # Estrutura principal da LP
│ ├─ layout.tsx # Layout base
│ ├─ page.tsx # Página inicial
│ └─ (rotas) # Outras LPs, se houver
├─ components/ # Componentes reutilizáveis (Hero, CTA, Footer, etc)
├─ sections/ # Blocos da LP organizados por seção
├─ hooks/ # Custom Hooks
├─ lib/ # Funções auxiliares
├─ services/ # Requisições (forms, leads, APIs)
├─ styles/ # Estilos globais / tema
├─ types/ # Tipagens globais
├─ utils/ # Funções genéricas
└─ public/ # Imagens e assets estáticos

---

## ⚡ Renderização (Server / Client Components)
- Por padrão, **todos os componentes devem ser Server Components**.
- Utilize `"use client"` **somente quando necessário**, nos casos abaixo:
  - Hooks de estado ou ciclo de vida (`useState`, `useEffect`);
  - Interatividade direta do usuário (formulários, inputs, animações);
  - Integrações com bibliotecas client-side (React Hook Form, Framer Motion).

### Regras
- Evite marcar páginas inteiras como `"use client"`.
- Prefira dividir: **componente pai (server)** + **componente interativo (client)**.
- Componentes em `/sections` devem ser **Server Components** por padrão.

---

## 🧠 Boas Práticas de Código

### Componentização

- Componentes **puros, reutilizáveis e desacoplados**.
- Cada seção da LP deve ser um componente dentro de `/sections`.
- Componentes nomeados em **PascalCase** e arquivos em **kebab-case**.
- **Nada de lógica inline** em JSX.

### Tipagem e Estrutura de Props
- Sempre definir interfaces claras para props.
- Preferir interfaces exportadas para reuso em múltiplos componentes.
- Nunca usar `any`.

```ts
export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  image?: string;
}

---

📦 Padrões de Imports e Modularização

- Utilizar imports absolutos via tsconfig.json (@/components, @/sections, etc).
- Componentes genéricos → /components
- Blocos específicos da página → /sections
- Evitar duplicação de componentes entre LPs.
- Centralizar tipagens em /types.
- Funções genéricas → /utils
- SEO, metadados e configs → /lib

---

🖼️ Imagens e Otimização

- Sempre utilizar o componente next/image.
- Definir width, height e alt obrigatoriamente.
- Utilizar priority apenas para imagens acima da dobra (ex: hero).
- Aplicar loading="lazy" em imagens fora do viewport.
- Evitar imagens pesadas — otimizar antes de subir.

---

## 🧠 Commit Semântico

✨ feat: nova seção de benefícios
🎨 style: ajustes visuais no hero
🐛 fix: correção no formulário de contato
⚙️ refactor: reorganização de componentes
📚 docs: atualização de README
🚀 perf: otimização de imagens e lazy loading
---

⚡ Regras para o Copilot

Sempre gerar código modular, performático e semântico.
Seguir o padrão de componentização por seções.
Usar tipagem explícita, sem any.
Evitar duplicação, inline styles e lógica acoplada ao JSX.
Priorizar UX e performance.
Respeitar a estrutura e a convenção de pastas.
Nunca gerar código fora dos padrões definidos acima.

```
💠 Layout e Responsividade

- Utilizar Tailwind para grid responsivo ou styled-components com media queries.
- Seguir abordagem mobile-first.
- Breakpoints recomendados:
sm: 640px
md: 768px
lg: 1024px
xl: 1280px

- Garantir espaçamento consistente e legibilidade em todos os tamanhos.
- CTAs e formulários devem manter destaque visual e acessibilidade.
```

🧭 SEO e Performance

- Utilizar Next Metadata API para metatags, title e descrição.
- Incluir Open Graph e Twitter Cards.
- Minimizar renderizações desnecessárias.
- Utilizar estrutura HTML semântica (<section>, <header>, <footer>, <main>).
- Evitar bibliotecas pesadas ou não utilizadas.


// ✅ Exemplo SEO
export async function generateMetadata({ params }) {
  const data = await getLandingPage(params.slug);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      images: [data.ogImage],
    },
  };
}

---

## Formulários e Leads
- Use React Hook Form + Zod para validação.
- Campos obrigatórios devem ter feedback visual.
- Nunca enviar dados sem validação local.
- Centralizar envio de dados em /services/lead.ts.
- Validar todos os campos antes do submit.

---

🚀 Performance

- Priorizar lazy loading em imagens e componentes fora da dobra.
- Ativar static generation (SSG) para páginas estáticas sempre que possível.
- Usar SSR apenas quando necessário (ex: dados dinâmicos via API).
- Analisar métricas de performance no Lighthouse antes do deploy.
- Evitar renderização client-side de dados que podem ser carregados no servidor.