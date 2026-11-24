# TRD — Technical Requirements Document: Portfólio Roberta Menezes

**Referência:** [PRD_PORTFOLIO.md](PRD_PORTFOLIO.md)  
**Status:** Pronto para Implementação (Spec Kit)  

---

## 1. Arquitetura e Stack Tecnológica

Por ser um portfólio moderno de apresentação acadêmica e profissional, com requisito de **impressão/exportação em PDF (6 a 10 páginas)**, a arquitetura escolhida utiliza:

- **Framework:** Vue 3 (Composition API com `<script setup lang="ts">`) via **Vite**.
- **Linguagem:** TypeScript (`tsconfig.json` estrito).
- **Estilização:** Tailwind CSS com tema customizado para a paleta **Refúgio com Presença**.
- **Tipografia:** Google Fonts (`Lora` para títulos e `Plus Jakarta Sans` para corpo de texto).
- **Ícones:** SVG inline (WhatsApp e marcadores).
- **Hospedagem sugerida:** Vercel, Netlify ou GitHub Pages (build estático via `npm run build`).

---

## 2. Estrutura de Arquivos

```text
Portifolio_Roberta/
├── index.html                  # HTML base + Google Fonts
├── package.json                # Dependências (vue, typescript, tailwindcss, vite)
├── tsconfig.json               # Configuração TypeScript
├── public/
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
| `--bg-linho` | Areia Clara | `#F5F1EA` | Fundo principal (`body`, `header`) |
| `--bg-secundario` | Bege Pedra | `#E6DFD3` | Blocos de destaque e explicação do atendimento |
| `--primary-salvia` | Verde-Floresta Suave | `#3D5A50` | Botões primários, links ativos, bordas de destaque |
| `--primary-salvia-hover` | Verde-Floresta Escuro | `#2E463E` | Estado `:hover` dos botões |
| `--accent-argila` | Terracota Queimada | `#B86B58` | Detalhes finos, linhas, marcadores de lista |
| `--text-musgo` | Grafite Esverdeado | `#1D2623` | Títulos e textos principais |
| `--text-musgo-soft` | Grafite Suave | `#3D4A45` | Subtítulos e textos secundários |

---

## 4. Requisitos Técnicos, Segurança e Acessibilidade

- **A11Y-01 (Imagens):** A tag `<img src="foto_perfil.jpeg">` deve conter `alt` descritivo e `object-fit: cover` para manter proporção `4/5` sem distorção.
- **A11Y-02 (Links Externos):** O botão do WhatsApp (`https://wa.me/5582988883039`) deve usar `target="_blank"`, `rel="noopener noreferrer"` e `aria-label="Contato via WhatsApp"`, **sem exibir o número em texto**.
- **A11Y-03 (Contraste):** Todas as combinações de texto sobre fundo claro (`#1D2623` sobre `#F5F1EA` e `#E6DFD3`) e texto branco sobre `#3D5A50` atendem ao nível WCAG AA.
- **PRINT-01 (Modo Impressão / PDF):** O bloco `@media print` em `styles.css` deve:
  - Ocultar elementos de navegação web (`.header`, `.hero-actions`).
  - Usar `break-inside: avoid` nos cards e seções para evitar cortes no meio do texto.
  - Garantir margens adequadas para impressão A4 (6 a 10 páginas).

---

## 5. Plano de Implementação (Spec Kit Tasks)

- [ ] **Task 01 — Setup do Projeto:** Inicializar projeto Vue 3 + Vite + TypeScript + Tailwind CSS e mover `foto_perfil.jpeg` para `public/`.
- [ ] **Task 02 — Dados Tipados (`src/data/portfolio.ts`):** Estruturar todo o conteúdo do `PRD_PORTFOLIO.md` em interfaces TypeScript.
- [ ] **Task 03 — Componentes e Design System:** Configurar paleta *Refúgio com Presença* no Tailwind e montar as 7 seções em `App.vue` (incluindo `foto_perfil.jpeg` e botão WhatsApp sem exibir o número).
- [ ] **Task 04 — Refino de Impressão (`@media print`) e Build:** Ajustar quebras de página para PDF (6 a 10 páginas) e validar com `npm run build`.
