import type { SiteData } from "@/lib/types";

/**
 * SITE DATA
 * ---------
 * Every piece of copy, every image reference and every contact detail
 * rendered on the page comes from this file. To reuse this template for
 * a new client, duplicate this file's values — no component needs to change.
 */
export const siteData: SiteData = {
  companyName: "Kaio Piercer",
  ownerName: "Kaio",
  titlePrimary: "KAIO",
  titleSecondary: "PIERCER",
  tagline: "Body Piercing de Precisão",

  heroTitle: "PERFURAÇÕES DE PRECISÃO, JOALHERIA DE VERDADE",
  heroSubtitle:
    "Estúdio especializado em body piercing com técnica cirúrgica, agulha descartável e biossegurança rigorosa. Cada furo é planejado — nada é feito no improviso.",
  heroBackground:
    "https://images.unsplash.com/photo-1590246814883-57764a4c7f30?q=80&w=1800&auto=format&fit=crop",

  stats: [
    { value: "100%", label: "Material Estéril" },
    { value: "+3 mil", label: "Perfurações Feitas" },
    { value: "5.0", label: "Avaliação Média" },
  ],

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
    { label: "Agendar", href: "#agendamento" },
  ],

  about: {
    eyebrow: "Sobre o Estúdio",
    title: "TÉCNICA, ",
    highlight: "não improviso",
    paragraphs: [
      "Kaio Piercer é especialista em perfurações auriculares, faciais e corporais, com formação contínua em biossegurança e anatomia aplicada ao piercing.",
      "Cada atendimento começa com uma avaliação da sua anatomia antes da agulha tocar a pele — o objetivo é sempre o mesmo: um furo bem posicionado, com a joia certa, cicatrizando sem dor desnecessária.",
      "Agulha catéter descartável, autoclave certificada e protocolo de barreira em 100% dos procedimentos. Sem pistola de perfuração, sem atalho.",
    ],
  },

  benefits: [
    {
      id: "biosseguranca",
      title: "Biossegurança Hospitalar",
      description:
        "Materiais descartáveis, autoclave com biológico mensal e protocolo de barreira em cada atendimento.",
      icon: "shield",
    },
    {
      id: "tecnica",
      title: "Técnica com Agulha",
      description:
        "Perfuração exclusiva com agulha catéter — corte limpo, menos trauma e cicatrização mais previsível.",
      icon: "hand",
    },
    {
      id: "horario",
      title: "Hora Marcada",
      description:
        "Atendimento individual, sem fila e sem pressa. Você tem o tempo do seu procedimento só para você.",
      icon: "clock",
    },
    {
      id: "joalheria",
      title: "Joalheria Nobre",
      description:
        "Titânio grau implante (ASTM F136) e ouro 18k, com rosca interna e topo de pressão. Nada de liga níquel.",
      icon: "award",
    },
  ],

  services: [
    {
      id: "auriculares",
      name: "Perfurações Auriculares",
      description:
        "Lóbulo, hélix, tragus, conch, daith e rook com agulha catéter e joia inicial em titânio.",
      priceLabel: "Sob Agendamento",
      icon: "sparkle",
    },
    {
      id: "faciais",
      name: "Perfurações Faciais",
      description:
        "Septo, nostril, asa do nariz e sobrancelha, com marcação prévia e simetria conferida antes do furo.",
      priceLabel: "Sob Agendamento",
      icon: "target",
    },
    {
      id: "corporais",
      name: "Piercings Corporais",
      description:
        "Umbigo, mamilo e outras regiões, com avaliação individual de anatomia e indicação de joia adequada.",
      priceLabel: "Avaliação Individual",
      icon: "layers",
    },
    {
      id: "ear-styling",
      name: "Ear Styling & Projetos",
      description:
        "Composição planejada de múltiplos piercings na orelha, pensada como um conjunto — não peça por peça.",
      priceLabel: "Projeto Personalizado",
      icon: "gem",
    },
    {
      id: "troca-joia",
      name: "Troca & Upgrade de Joia",
      description:
        "Substituição por peças em titânio F136 ou ouro 18k, com avaliação da cicatrização no momento da troca.",
      priceLabel: "Joalheria à Parte",
      icon: "refresh",
    },
    {
      id: "acompanhamento",
      name: "Acompanhamento Pós-Perfuração",
      description:
        "Retorno para avaliar cicatrização e orientação de limpeza, incluído em todo procedimento realizado no estúdio.",
      priceLabel: "Suporte Incluído",
      icon: "shield",
    },
  ],
  servicesNote:
    "* Valores variam conforme a joia escolhida (titânio grau implante F136 ou ouro 18k) e a região perfurada.",

  portfolio: [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1633681138475-2ffb3d68f2d0?q=80&w=900&auto=format&fit=crop",
      title: "Septo em Titânio com Acabamento Circular",
      tag: "Perfuração Facial / Septo",
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1590246814883-57764a4c7f30?q=80&w=900&auto=format&fit=crop",
      title: "Projeto Auricular com Hélix Duplo",
      tag: "Ear Styling",
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1622445275649-d2401d5b04f6?q=80&w=900&auto=format&fit=crop",
      title: "Conch com Argola Segmentada em Titânio",
      tag: "Perfuração Auricular",
    },
    {
      id: "4",
      imageUrl:
        "/images/rosto1.jpg",
      title: "Composição Industrial & Lóbulo em Ouro 18k",
      tag: "Projeto Exclusivo",
    },
  ],

  testimonials: [
    {
      id: "1",
      name: "Larissa Menezes",
      stars: 5,
      text: "Fiz meu septo com o Kaio e não senti nem metade da dor que eu esperava. Explicou cada etapa antes de furar e o material era todo lacrado na minha frente. Cicatrizou rápido.",
    },
    {
      id: "2",
      name: "Pedro Andrade",
      stars: 5,
      text: "Já tinha piercing furado com pistola em outro lugar e a diferença pra agulha catéter é gigante. Ambiente muito limpo, atendimento pontual e joia de titânio de verdade.",
    },
    {
      id: "3",
      name: "Yasmin Cordeiro",
      stars: 5,
      text: "Montei meu projeto de ear styling com o Kaio, foram três sessões planejadas. Ele pensou a composição toda antes de furar qualquer coisa. Hoje minha orelha parece um projeto, não um amontoado de piercing.",
    },
    {
      id: "4",
      name: "Diego Farias",
      stars: 5,
      text: "Troquei a joia de um piercing antigo que estava incomodando e ele identificou na hora que era alergia a níquel. Trocou por titânio F136 e resolveu. Atendimento honesto.",
    },
  ],

  faq: [
    {
      id: "1",
      question: "Perfuração com agulha dói mais que pistola?",
      answer:
        "Dói menos e cicatriza melhor. A agulha catéter faz um corte limpo e único, sem o impacto e o esmagamento de tecido que a pistola causa — por isso é o padrão recomendado por profissionais em qualquer região do corpo.",
    },
    {
      id: "2",
      question: "Qual a idade mínima para fazer um piercing?",
      answer:
        "Menores de 18 anos precisam estar acompanhados de um responsável legal com documento, que deve autorizar e permanecer durante o procedimento.",
    },
    {
      id: "3",
      question: "Quanto tempo leva para cicatrizar?",
      answer:
        "Varia por região: lóbulo cicatriza em cerca de 6 a 8 semanas, cartilagem entre 3 e 6 meses, e piercings orais ou de mucosa costumam levar mais tempo. Você recebe orientação de higienização específica para o seu piercing.",
    },
    {
      id: "4",
      question: "Posso escolher qualquer joia para a perfuração inicial?",
      answer:
        "Não — a joia inicial precisa ser em titânio grau implante (ASTM F136) ou ouro 18k, sem níquel, para reduzir o risco de reação alérgica durante a cicatrização.",
    },
    {
      id: "5",
      question: "Preciso levar algum documento no dia?",
      answer:
        "Sim, documento de identificação com foto. Se for menor de idade, é necessário levar também um responsável legal com documento.",
    },
  ],

  schedule: [
    { day: "Terça a Sábado", hours: "10:00 às 19:00" },
    { day: "Domingo e Segunda", hours: "Fechado" },
  ],

  locations: [
    {
      id: "estudio-kaio-piercer",
      label: "Estúdio Kaio Piercer",
      addressLine: "Endereço completo disponível ao confirmar o agendamento",
      description:
        "Atendimento individual, com hora marcada, em ambiente privativo e biossegurança hospitalar.",
      googleMapsUrl: "https://maps.app.goo.gl/8JPQAZRbBatD766P7",
      appleMapsUrl: "https://maps.app.goo.gl/8JPQAZRbBatD766P7",
    },
  ],

  contact: {
    phoneFormatted: "(98) 8558-7188",
    phoneRaw: "559885587188",
    whatsappCta: "Agendar pelo WhatsApp",
    rideAppSearchTerm: "Kaio Piercer - Body Piercing",
  },

  socials: {
    instagramHandle: "kaiopiercer",
    instagramUrl:
      "https://www.instagram.com/kaiopiercer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },

  colors: {
    primary: "#2C74EC",
    secondary: "#28E0F0",
    background: "#030507",
    text: "#EDF1F8",
  },
};
