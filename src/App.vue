<script setup lang="ts">
import { portfolioData } from './data/portfolio'

const { identity, about, trajectory, skills, service, finalConsiderations } = portfolioData
</script>

<template>
  <div class="min-h-screen bg-areia text-grafite">
    <a
      href="#conteudo-principal"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-floresta focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
    >
      Pular para o conteúdo principal
    </a>

    <!-- Header -->
    <header class="no-print sticky top-0 z-50 border-b border-grafite/15 bg-areia/95 backdrop-blur-md">
      <div class="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <a href="#inicio" class="font-serif text-xl font-semibold text-grafite">
          {{ identity.shortName }}
          <span class="block font-sans text-xs font-medium tracking-wider text-floresta uppercase">
            Psicóloga Clínica
          </span>
        </a>

        <nav aria-label="Navegação principal" class="hidden items-center gap-6 md:flex">
          <a href="#sobre" class="text-sm font-medium text-grafite transition hover:text-floresta">Sobre</a>
          <a href="#trajetoria" class="text-sm font-medium text-grafite transition hover:text-floresta">Trajetória</a>
          <a href="#competencias" class="text-sm font-medium text-grafite transition hover:text-floresta">Competências</a>
          <a href="#servico" class="text-sm font-medium text-grafite transition hover:text-floresta">Atuação</a>
          <a
            href="#contato"
            class="rounded-lg bg-floresta px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-floresta-dark"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>

    <main id="conteudo-principal">
      <!-- 01. Hero / Apresentação -->
      <section id="inicio" class="py-16 md:py-20">
        <div class="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <span class="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-floresta uppercase">
              <span class="h-0.5 w-6 bg-terracota"></span>
              {{ identity.period }} • {{ identity.location }}
            </span>

            <h1 class="mb-5 text-3xl leading-tight font-semibold md:text-4xl lg:text-[2.6rem]">
              {{ identity.headline }}
            </h1>

            <p class="mb-8 max-w-xl text-base leading-relaxed text-grafite-soft md:text-lg">
              Sou <strong class="text-grafite">{{ identity.name }}</strong>, graduanda em {{ identity.course }} pelo
              {{ identity.institution }}, com interesse em Psicologia Clínica voltada ao público adulto e identificação com a abordagem
              <strong class="text-grafite">{{ identity.approach }}</strong>.
            </p>

            <div class="no-print flex flex-wrap gap-4">
              <a
                href="#servico"
                class="rounded-lg bg-floresta px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-floresta-dark"
              >
                Conhecer Proposta de Atuação
              </a>
              <a
                href="#trajetoria"
                class="rounded-lg border border-floresta px-6 py-3 text-sm font-semibold text-grafite transition hover:bg-floresta/10"
              >
                Ver Trajetória Acadêmica
              </a>
            </div>
          </div>

          <div class="mx-auto w-full max-w-xs md:max-w-none">
            <div class="overflow-hidden rounded-2xl border-2 border-terracota/40 bg-white shadow-lg">
              <img
                :src="identity.photo"
                :alt="`Foto profissional de ${identity.name}`"
                fetchpriority="high"
                class="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Sobre & Posicionamento -->
      <section id="sobre" class="border-t border-grafite/15 py-16">
        <div class="mx-auto max-w-5xl px-6">
          <div class="mb-10 max-w-2xl">
            <h2 class="mb-2 text-3xl font-semibold">Apresentação & Posicionamento</h2>
            <p class="text-grafite-soft">
              Uma formação construída com compromisso ético, fundamentação científica e valorização da subjetividade humana.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <article class="rounded-xl border border-grafite/15 border-t-4 border-t-terracota bg-white p-7 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-terracota/60 hover:shadow-md">
              <h3 class="mb-3 text-xl font-semibold">Quem sou</h3>
              <p v-for="(paragraph, idx) in about.whoIAm" :key="idx" class="mb-3 text-sm leading-relaxed text-grafite-soft last:mb-0">
                {{ paragraph }}
              </p>
            </article>

            <article class="rounded-xl border border-grafite/15 border-t-4 border-t-terracota bg-white p-7 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-terracota/60 hover:shadow-md">
              <h3 class="mb-3 text-xl font-semibold">Abordagem: {{ identity.approach }}</h3>
              <p class="text-sm leading-relaxed text-grafite-soft">
                {{ about.approachText }}
              </p>
              <div class="mt-6 rounded-lg bg-pedra/60 p-4 text-xs text-grafite">
                <strong>Formação:</strong> {{ identity.institution }} ({{ identity.startYear }} – {{ identity.expectedGraduation }})
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 02. Trajetória Acadêmica -->
      <section id="trajetoria" class="border-t border-grafite/15 py-16">
        <div class="mx-auto max-w-5xl px-6">
          <div class="mb-10 max-w-2xl">
            <h2 class="mb-2 text-3xl font-semibold">Trajetória Acadêmica & Experiências</h2>
            <p class="text-grafite-soft">
              Experiências supervisionadas, atividades práticas e {{ trajectory.summaryHours.total }} de formação complementar.
            </p>
          </div>

          <div class="mb-8 grid gap-6 md:grid-cols-3">
            <article class="rounded-xl border border-grafite/15 bg-white p-6 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-floresta/60 hover:shadow-md">
              <h3 class="mb-2 text-lg font-semibold">{{ trajectory.internship.title }}</h3>
              <p class="text-sm leading-relaxed text-grafite-soft">{{ trajectory.internship.description }}</p>
            </article>

            <article class="rounded-xl border border-grafite/15 bg-white p-6 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-floresta/60 hover:shadow-md">
              <h3 class="mb-2 text-lg font-semibold">{{ trajectory.ongoingCourse.title }}</h3>
              <p class="text-sm leading-relaxed text-grafite-soft">{{ trajectory.ongoingCourse.description }}</p>
            </article>

            <article class="rounded-xl border border-grafite/15 bg-white p-6 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-floresta/60 hover:shadow-md">
              <h3 class="mb-2 text-lg font-semibold">Atividades Complementares</h3>
              <p class="text-sm leading-relaxed text-grafite-soft">{{ trajectory.complementaryActivities }}</p>
            </article>
          </div>

          <!-- Congressos & Resumo -->
          <div class="rounded-xl border border-grafite/15 bg-pedra/70 p-6 md:p-8">
            <div class="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h3 class="text-xl font-semibold">Congressos & Formação Complementar</h3>
              <span class="rounded-full bg-floresta px-3 py-1 text-xs font-semibold text-white">
                Total: {{ trajectory.summaryHours.total }}
              </span>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
              <div
                v-for="congress in trajectory.congresses"
                :key="congress.title"
                class="rounded-lg border border-grafite/10 bg-areia p-4 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-floresta/60 hover:shadow-sm"
              >
                <h4 class="mb-1 text-base font-semibold">{{ congress.title }}</h4>
                <p class="text-xs text-grafite-soft">{{ congress.period }}</p>
                <p class="text-xs text-grafite-soft">{{ congress.location }}</p>
                <p class="mt-2 text-xs font-semibold text-floresta">{{ congress.hours }}</p>
              </div>
            </div>

            <div class="mt-4 rounded-lg border border-grafite/10 bg-areia p-4 text-xs text-grafite-soft">
              <strong class="text-grafite">Minicurso ({{ trajectory.miniCourse.hours }}):</strong>
              {{ trajectory.miniCourse.title }} — {{ trajectory.miniCourse.event }} ({{ trajectory.miniCourse.date }}).
            </div>
          </div>
        </div>
      </section>

      <!-- 03. Competências -->
      <section id="competencias" class="border-t border-grafite/15 py-16">
        <div class="mx-auto max-w-5xl px-6">
          <div class="mb-10 max-w-2xl">
            <h2 class="mb-2 text-3xl font-semibold">Competências Técnicas & Comportamentais</h2>
            <p class="text-grafite-soft">Habilidades desenvolvidas ao longo da graduação e das práticas supervisionadas.</p>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <article class="rounded-xl border border-grafite/15 bg-white p-7 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-terracota/60 hover:shadow-md">
              <h3 class="mb-4 text-xl font-semibold">Hard Skills (Técnicas)</h3>
              <ul class="space-y-2.5">
                <li
                  v-for="skill in skills.hard"
                  :key="skill"
                  class="relative pl-5 text-sm text-grafite-soft before:absolute before:left-0 before:font-bold before:text-terracota before:content-['•']"
                >
                  {{ skill }}
                </li>
              </ul>
            </article>

            <article class="rounded-xl border border-grafite/15 bg-white p-7 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-terracota/60 hover:shadow-md">
              <h3 class="mb-4 text-xl font-semibold">Soft Skills (Comportamentais)</h3>
              <ul class="space-y-2.5">
                <li
                  v-for="skill in skills.soft"
                  :key="skill"
                  class="relative pl-5 text-sm text-grafite-soft before:absolute before:left-0 before:font-bold before:text-terracota before:content-['•']"
                >
                  {{ skill }}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- 04 & 05. Serviço e Metodologia -->
      <section id="servico" class="border-t border-grafite/15 py-16">
        <div class="mx-auto max-w-5xl px-6">
          <div class="mb-10 max-w-2xl">
            <h2 class="mb-2 text-3xl font-semibold">Proposta de Atuação & Metodologia</h2>
            <p class="text-grafite-soft">
              {{ service.name }} — {{ service.format }} • {{ service.duration }}.
            </p>
          </div>

          <div class="rounded-xl border-l-4 border-l-floresta bg-pedra p-7 md:p-9">
            <h3 class="mb-3 text-2xl font-semibold">Demandas e Etapas do Acompanhamento</h3>
            <p class="mb-5 text-sm leading-relaxed text-grafite-soft">
              Direcionada ao público adulto, a proposta acolhe demandas como:
              <strong class="text-grafite">{{ service.demands.join(', ') }}</strong>.
            </p>

            <div class="grid gap-4 md:grid-cols-3">
              <div
                v-for="step in service.steps"
                :key="step.number"
                class="rounded-lg border border-grafite/10 bg-areia p-5 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-floresta/60 hover:shadow-sm"
              >
                <span class="text-xs font-bold tracking-wider text-floresta uppercase">Etapa {{ step.number }}</span>
                <h4 class="mt-1 mb-2 text-base font-semibold">{{ step.title }}</h4>
                <p class="text-xs leading-relaxed text-grafite-soft">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 07. Considerações Finais & Contato -->
      <section id="contato" class="border-t border-grafite/15 py-16">
        <div class="mx-auto max-w-5xl px-6">
          <div class="grid gap-8 md:grid-cols-2">
            <div class="rounded-xl border border-grafite/15 bg-white p-7 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-floresta/60 hover:shadow-md">
              <h2 class="mb-3 text-2xl font-semibold">Considerações Finais</h2>
              <p class="text-sm leading-relaxed text-grafite-soft">{{ finalConsiderations }}</p>
            </div>

            <div class="flex flex-col justify-between rounded-xl border border-grafite/15 bg-white p-7 transition-all duration-300 motion-safe:hover:scale-[1.02] hover:border-floresta/60 hover:shadow-md">
              <div>
                <h2 class="mb-3 text-2xl font-semibold">Contato</h2>
                <p class="mb-6 text-sm leading-relaxed text-grafite-soft">
                  {{ identity.location }} • Disponível para contatos acadêmicos, estágios e networking profissional.
                </p>
              </div>

              <div>
                <a
                  :href="identity.whatsappUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contato via WhatsApp"
                  class="inline-flex items-center gap-2.5 rounded-lg bg-floresta px-6 py-3 text-sm font-semibold text-white transition hover:bg-floresta-dark"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.188.109-1.922-.125-.453-.141-1.031-.344-1.766-.656-3.094-1.344-5.109-4.469-5.266-4.672-.156-.203-1.266-1.688-1.266-3.219 0-1.531.797-2.281 1.078-2.594.281-.313.609-.391.813-.391.203 0 .406 0 .578.016.188.016.438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.016.547-.109.203-.156.344-.313.531-.156.188-.328.422-.469.563-.156.156-.313.328-.141.641.172.313.781 1.297 1.672 2.094 1.156 1.031 2.125 1.344 2.438 1.5.313.156.484.125.672-.078.188-.203.781-.906.984-1.219.203-.313.406-.266.688-.156.281.109 1.781.844 2.094 1 .313.156.516.234.594.359.078.125.078.734-.172 1.438z"
                    />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-grafite/15 py-10 text-center text-xs text-grafite-soft">
      <div class="mx-auto max-w-3xl px-6">
        <div class="mb-4 rounded-lg border border-grafite/10 bg-white p-4">
          <strong class="text-grafite">Compromisso Ético (CFP/CRP):</strong> Portfólio acadêmico de estudante do 10º período de Psicologia. As informações apresentadas refletem exclusivamente a formação, experiências supervisionadas e proposta futura de atuação, em conformidade com o Código de Ética Profissional do Psicólogo.
        </div>
        <p>© 2026 {{ identity.name }} • Paleta Refúgio com Presença</p>
      </div>
    </footer>
  </div>
</template>
