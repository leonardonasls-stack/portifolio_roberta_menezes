<div align="center">
  <img src="public/favicon.svg" alt="Monograma RM" width="56" height="56" />
  <h1>Portfólio Profissional — Roberta Menezes</h1>
  <p>Portfólio acadêmico e profissional em Psicologia Clínica (Gestalt-terapia), desenvolvido com Vue 3, TypeScript, Vite e Tailwind CSS v4.</p>
</div>

---

## Visão Geral

Aplicação web responsiva e preparada para impressão/exportação em PDF (`@media print`) apresentando a trajetória acadêmica, estágios supervisionados, competências, proposta de atuação clínica e canais de contato de **Roberta Menezes**.

> [!NOTE]
> Os requisitos de produto e especificações técnicas estão documentados em [`docs/PRD_PORTFOLIO.md`](docs/PRD_PORTFOLIO.md) e [`docs/TRD_PORTFOLIO.md`](docs/TRD_PORTFOLIO.md).

## Stack Tecnológica

- **Framework:** Vue 3 (Composition API com `<script setup lang="ts">`)
- **Linguagem:** TypeScript
- **Build Tool:** Vite 6
- **Estilização:** Tailwind CSS v4 (`@tailwindcss/vite`) com tema customizado (*Paleta Refúgio com Presença*)
- **Tipografia:** Google Fonts (`Lora` e `Plus Jakarta Sans`)

## Como Executar

### Pré-requisitos

- Node.js 18+ e npm

### Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Build de Produção

```bash
# Validar tipos e gerar build estático em dist/
npm run build

# Pré-visualizar o build localmente
npm run preview
```

## Estrutura do Projeto

```text
Portifolio_Roberta/
├── public/
│   ├── favicon.svg             # Favicon monograma RM
│   └── foto_perfil.jpeg        # Foto profissional
├── src/
│   ├── data/
│   │   └── portfolio.ts        # Dados tipados do portfólio
│   ├── App.vue                 # Layout principal e seções
│   ├── main.ts                 # Entrypoint Vue
│   └── style.css               # Tokens @theme, :focus-visible e @media print
├── docs/
│   ├── PRD_PORTFOLIO.md        # Requisitos de produto e conteúdo
│   └── TRD_PORTFOLIO.md        # Especificação técnica e arquitetura
├── index.html
└── package.json
```

## Destaques Técnicos

- **Acessibilidade (WCAG 2.1 AA):** Skip link (`#conteudo-principal`), landmark `<nav aria-label="Navegação principal">`, indicador global `:focus-visible` e contraste validado.
- **Performance:** Priorização da imagem principal (LCP) com `fetchpriority="high"`.
- **Movimento Consciente:** Microinterações nos cards condicionadas a `motion-safe:hover:scale-[1.02]` (`prefers-reduced-motion: no-preference`).
- **Impressão / PDF:** Regras `@media print` ocultando navegação (`.no-print`) e evitando quebras internas em seções (`break-inside: avoid`).
