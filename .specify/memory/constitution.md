# Constituição do Projeto — Portfólio Roberta Menezes (Spec Kit)

Este documento define os princípios e diretrizes inegociáveis que guiam todas as especificações (`docs/PRD_PORTFOLIO.md`, `docs/TRD_PORTFOLIO.md`) e implementações deste projeto.

---

## Princípio 1 — Ética Profissional (CFP/CRP) e LGPD
- O portfólio pertence a uma **estudante do 10º período de Psicologia**, não a uma psicóloga já inscrita no CRP.
- **Proibido:** Prometer cura, resultados garantidos, soluções imediatas ou divulgar serviços para os quais não possua habilitação atual.
- **Obrigatório:** Manter clareza sobre o vínculo acadêmico (CESMAC), estágios supervisionados e proposta futura de atuação.
- **Privacidade:** Não expor o número de telefone em texto aberto (usar apenas link direto do WhatsApp com ícone) e não coletar dados sensíveis sem necessidade.

## Princípio 2 — Identidade Visual ("Refúgio com Presença")
- Toda interface deve respeitar rigorosamente os tokens de cor definidos:
  - Fundo Principal: `#F5F1EA` (Areia Clara)
  - Fundo Secundário: `#E6DFD3` (Bege Pedra)
  - Cor Principal: `#3D5A50` (Verde-Floresta Suave)
  - Acento Acolhedor: `#B86B58` (Terracota Queimada)
  - Textos e Contraste: `#1D2623` (Grafite Esverdeado)
- Tipografia: **Lora** para títulos (`h1`–`h4`) e **Plus Jakarta Sans** para corpo de texto.

## Princípio 3 — Stack Técnica e Tipagem
- Framework: **Vue 3** (Composition API com `<script setup lang="ts">`) + **Vite**.
- Linguagem: **TypeScript** em modo estrito (`strict: true`), com dados centralizados e tipados em `src/data/portfolio.ts`.
- Estilização: **Tailwind CSS v4** utilizando `@theme` em `src/style.css`.

## Princípio 4 — Responsividade e Modo Impressão (PDF)
- O site deve ser totalmente responsivo (mobile, tablet e desktop).
- Deve manter suporte a `@media print` (ocultando elementos de navegação `.no-print` e evitando quebras de seção) para permitir exportação limpa em PDF (6 a 10 páginas, conforme requisito acadêmico).

## Princípio 5 — Organização de Documentos
- Especificações e requisitos permanecem organizados fora da raiz do código-fonte, na pasta `docs/`.
