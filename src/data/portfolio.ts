export interface Congress {
  title: string
  period: string
  location: string
  hours: string
}

export interface MethodologyStep {
  number: string
  title: string
  description: string
}

export const portfolioData = {
  identity: {
    name: 'Roberta Santos da Silva de Menezes',
    shortName: 'Roberta Menezes',
    institution: 'Centro Universitário CESMAC',
    course: 'Psicologia',
    startYear: '2021',
    period: '10º período',
    expectedGraduation: '1º semestre de 2027',
    location: 'Maceió – AL',
    photo: '/foto_perfil.jpeg',
    approach: 'Gestalt-terapia',
    headline: 'Escuta qualificada, acolhimento e respeito à sua singularidade.',
    whatsappUrl: 'https://wa.me/5582988883039',
  },
  about: {
    whoIAm: [
      'Graduanda do 10º período de Psicologia pelo Centro Universitário CESMAC, com direcionamento para a Psicologia Clínica voltada ao público adulto.',
      'Minha trajetória acadêmica é pautada pela atualização científica contínua, pelo rigor ético e pelo aprimoramento de competências técnicas e relacionais essenciais à prática clínica.',
      'Dedico-me à compreensão dos processos emocionais, do comportamento humano e das vivências que atravessam a saúde mental, construindo uma atuação fundamentada na escuta qualificada, no acolhimento e no respeito à singularidade de cada história.',
    ],
    approachText:
      'Minha formação e futura atuação são orientadas pela Gestalt-terapia, abordagem que compreende o ser humano de forma integral e singular. O olhar clínico volta-se para a experiência presente, os sentimentos, as relações e o modo como cada pessoa estabelece contato consigo mesma e com o mundo ao seu redor, favorecendo a consciência e novas possibilidades de desenvolvimento.',
  },
  trajectory: {
    internship: {
      title: 'Estágio Supervisionado – Clínica de Psicologia do CESMAC',
      description:
        'Atendimento a pacientes adultos acompanhados pela instituição e participação no Plantão Psicológico, sempre com orientação de supervisão. Vivência com demandas de conflitos familiares, ampliando a compreensão sobre relações interpessoais, processos emocionais e sofrimento psicológico.',
    },
    complementaryActivities:
      'Participação em atividades práticas em sala de aula, como simulações de situações profissionais (role-play) e rodas de conversa, além de cursos, palestras e congressos.',
    ongoingCourse: {
      title: 'Avaliação Psicológica – RM Cursos',
      description:
        'Curso em andamento direcionado ao aprofundamento dos conhecimentos relacionados aos processos de avaliação psicológica e aos instrumentos utilizados nesse campo.',
    },
    summaryHours: {
      total: '102 horas',
      courses: '12 horas',
      congresses: '90 horas (3 congressos)',
      miniCourse: '4 horas (Minicurso V Congresso)',
    },
    congresses: [
      {
        title: 'III Congresso de Psicologia Contemporânea',
        period: '20 a 22 de agosto de 2024',
        location: 'Maceió – Alagoas',
        hours: '30 horas',
      },
      {
        title: 'IV Congresso de Psicologia Contemporânea',
        period: '20 a 22 de agosto de 2025',
        location: 'Centro Cultural Reitor João Sampaio Filho – CESMAC, Maceió – AL',
        hours: '30 horas',
      },
      {
        title: 'V Congresso de Psicologia Contemporânea',
        period: '24 a 26 de agosto de 2026',
        location: 'Maceió – Alagoas',
        hours: '30 horas',
      },
    ] as Congress[],
    miniCourse: {
      title: 'Psicologia, Território e Determinantes Sociais da Saúde dos Povos Indígenas',
      event: 'V Congresso de Psicologia Contemporânea',
      date: '24 de agosto de 2026',
      hours: '4 horas',
    },
  },
  skills: {
    hard: [
      'Conhecimentos teóricos e científicos dos fundamentos da Psicologia',
      'Experiência acadêmica em Psicologia Clínica com adultos',
      'Participação em Plantão Psicológico supervisionado',
      'Desenvolvimento de habilidades de escuta e observação clínica',
      'Conhecimentos introdutórios em Avaliação Psicológica (curso em andamento)',
      'Elaboração de registros de atendimentos em contexto de estágio',
      'Conhecimentos sobre ética profissional e documentação psicológica',
      'Participação em atividades práticas e simulações de atendimento',
      'Familiaridade com pesquisas e fontes de informação científica',
    ],
    soft: [
      'Empatia e acolhimento',
      'Escuta ativa e comunicação respeitosa',
      'Responsabilidade e comprometimento',
      'Organização e planejamento',
      'Capacidade de reflexão e pensamento crítico',
      'Trabalho em equipe',
      'Respeito à diversidade e às diferenças individuais',
      'Interesse pelo aprendizado contínuo',
      'Postura ética e profissional',
    ],
  },
  service: {
    name: 'Atendimento Psicológico Clínico para Adultos',
    format: 'Presencial (Maceió – AL) e Online',
    duration: 'Sessões individuais de 50 minutos',
    demands: [
      'Ansiedade e dificuldades emocionais',
      'Insegurança e autoestima',
      'Conflitos familiares',
      'Dificuldades nos relacionamentos interpessoais',
      'Questões relacionadas à vida profissional',
      'Autoconhecimento e desenvolvimento pessoal',
      'Situações de sofrimento psicológico',
    ],
    steps: [
      {
        number: '01',
        title: 'Acolhimento',
        description: 'Estabelecimento de uma relação respeitosa e receptiva, proporcionando um ambiente de confiança.',
      },
      {
        number: '02',
        title: 'Escuta Clínica',
        description: 'Atenção às experiências, sentimentos e necessidades apresentadas pelo paciente.',
      },
      {
        number: '03',
        title: 'Compreensão da Demanda',
        description: 'Identificação dos aspectos relevantes da experiência individual, considerando história e contexto de vida.',
      },
      {
        number: '04',
        title: 'Intervenções Psicológicas',
        description: 'Recursos fundamentados na Gestalt-terapia adequados às necessidades identificadas, respeitando os limites éticos.',
      },
      {
        number: '05',
        title: 'Supervisão',
        description: 'Reflexão sobre os atendimentos e orientação técnica para o aprimoramento contínuo da prática.',
      },
      {
        number: '06',
        title: 'Aprimoramento Profissional',
        description: 'Atualização contínua por meio de cursos, congressos, palestras e estudos científicos.',
      },
    ] as MethodologyStep[],
  },
  finalConsiderations:
    'Minha trajetória acadêmica representa um processo contínuo de aprendizado, amadurecimento e construção da identidade profissional. Entendo que a formação em Psicologia não se encerra com a graduação, mas constitui um processo permanente de estudo, reflexão e desenvolvimento profissional pautado na ética, na responsabilidade e no respeito à singularidade de cada pessoa.',
}
