# TRD — Technical Requirements Document: Portfólio Roberta Menezes

**Referência:** [PRD_PORTFOLIO.md](PRD_PORTFOLIO.md)  
**Status:** Implementado e Validado  

---

## 1. Arquitetura e Stack Tecnológica

Por ser um portfólio moderno de apresentação acadêmica e profissional, com requisito de **impressão/exportação em PDF (6 a 10 páginas)**, a arquitetura escolhida utiliza:

- **Framework:** Vue 3 (Composition API com `<script setup lang="ts">`) via **Vite**.
- **Linguagem:** TypeScript (`tsconfig.json` estrito).
- **Estilização:** Tailwind CSS v4 (`@tailwindcss/vite`) com `@theme` customizado para a paleta **Refúgio com Presença**.
- **Tipografia:** Google Fonts (`Lora` para títulos e `Plus Jakarta Sans` para corpo de texto).
- **Ícones:** SVG inline (WhatsApp e marcadores).
- **Hospedagem sugerida:** Vercel, Netlify ou GitHub Pages (build estático via `npm run build`).

---

## 2. Estrutura de Arquivos

```text
Portifolio_Roberta/
├── .gitignore                  # Ignora node_modules, dist e caches
├── index.html                  # HTML base + Google Fonts + favicon
├── package.json                # Dependências (vue, typescript, tailwindcss, vite)
├── tsconfig.json               # Configuração TypeScript
├── public/
│   ├── favicon.svg             # Favicon monograma RM na paleta do site
│   └── foto_perfil.jpeg        # Foto profissional da Roberta
├── src/
│   ├── main.ts                 # Entrypoint Vue
│   ├── style.css               # Diretivas Tailwind + @media print
│   ├── App.vue                 # Layout principal e seções
│   └── data/
│       └── portfolio.ts        # Dados tipados do portfólio (TS)
├── docs/
│   ├── PRD_PORTFOLIO.md        # Requisitos de produto e conteúdo
│   └── TRD_PORTFOLIO.md        # Especificação técnica (este documento)
```

---

## 3. Design System (Tokens CSS)

Implementação direta da paleta **Refúgio com Presença**:

| Token CSS | Cor | Código HEX | Uso Técnico |
| :--- | :--- | :--- | :--- |
| `--color-areia` | Areia Clara | `#F5F1EA` | Fundo principal (`body`, `header`) |
| `--color-pedra` | Bege Pedra | `#E6DFD3` | Blocos de destaque e explicação do atendimento |
| `--color-floresta` | Verde-Floresta Suave | `#3D5A50` | Botões primários, links ativos, bordas de destaque e foco |
| `--color-floresta-dark` | Verde-Floresta Escuro | `#2E463E` | Estado `:hover` dos botões |
| `--color-terracota` | Terracota Queimada | `#B86B58` | Detalhes finos, bordas de destaque e marcadores de lista |
| `--color-grafite` | Grafite Esverdeado | `#1D2623` | Títulos e textos principais |
| `--color-grafite-soft` | Grafite Suave | `#3D4A45` | Subtítulos e textos secundários |

---

## 4. Requisitos Técnicos, Segurança e Acessibilidade

- **A11Y-01 (Imagens e LCP):** A tag `<img src="foto_perfil.jpeg">` contém `alt` descritivo, `fetchpriority="high"` para priorização de LCP e `object-cover` para manter proporção `4/5` sem distorção.
- **A11Y-02 (Links Externos):** O botão do WhatsApp (`https://wa.me/5582988883039`) usa `target="_blank"`, `rel="noopener noreferrer"` e `aria-label="Contato via WhatsApp"`, **sem exibir o número em texto**.
- **A11Y-03 (WCAG 2.1 AA — Navegação, Foco e Contraste):**
  - Skip link (`"Pular para o conteúdo principal"`) apontando para `#conteudo-principal` no `<main>`.
  - Landmark `<nav aria-label="Navegação principal">` no cabeçalho.
  - Indicador `:focus-visible` global em `src/style.css` (`outline: 2px solid var(--color-floresta); outline-offset: 3px`).
  - Todas as combinações de texto atendem ao contraste mínimo WCAG AA (incluindo `text-floresta` para textos pequenos).
- **MOTION-01 (Microinterações e Preferência de Movimento):** Cards possuem transição suave (`transition-all duration-300`), bordas e sombras no padrão da paleta no `:hover`, com ampliação condicionada a `motion-safe:hover:scale-[1.02]` (`prefers-reduced-motion: no-preference`).
- **PRINT-01 (Modo Impressão / PDF):** O bloco `@media print` em `src/style.css` oculta elementos `.no-print` e aplica `break-inside: avoid` nas seções.

---

## 5. Plano de Implementação (Spec Kit Tasks)

- [x] **Task 01 — Setup do Projeto:** Inicializar projeto Vue 3 + Vite + TypeScript + Tailwind CSS v4 e configurar `public/foto_perfil.jpeg` e `public/favicon.svg`.
- [x] **Task 02 — Dados Tipados (`src/data/portfolio.ts`):** Estruturar todo o conteúdo do `PRD_PORTFOLIO.md` em interfaces TypeScript.
- [x] **Task 03 — Componentes e Design System:** Configurar paleta *Refúgio com Presença* no Tailwind e montar as seções em `App.vue` (incluindo `foto_perfil.jpeg`, subtítulo *Psicóloga Clínica*, cards interativos e botão WhatsApp sem exibir o número).
- [x] **Task 04 — Refino de Impressão (`@media print`), WCAG 2.1 AA e Build:** Ajustar acessibilidade, priorização LCP, `@media print` e validar com `npm run build`.
