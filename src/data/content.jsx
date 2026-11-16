import {
  Code2,
  Cpu,
  Database,
  PenTool,
  Terminal,
  Smartphone,
  Server,
  BrainCircuit,
  Bot,
  Sparkles,
  BookOpen,
  Layers
} from 'lucide-react';

export const personalData = {
  name: "Artemísia Kimberlly",
  fullName: "Artemísia Kimberlly Marques da Silva",
  handle: "Misians",
  role: "Desenvolvedora Full Stack • Pesquisadora em IA, Robótica Social & IoT",
  shortBio:
    "Mestranda e Bacharela em Ciência da Computação (UERN), com Residência em IoT e pesquisadora no Laboratório de Aprendizagem Robótica (LAR/UERN).",
  bio: "Uno Engenharia de Software, Sistemas Embarcados e Inteligência Artificial para transformar pesquisa em produtos reais — de plataformas governamentais e automação internacional com RPA/LLMs até robôs sociais assistivos.",
  aboutPillars: [
    {
      title: "Full Stack & RPA Freelancer",
      desc: "Arquitetura Front-End para o setor público (SETHAS/RN) e engenharia Back-End/RPA como freelancer internacional (Artbiz)."
    },
    {
      title: "Robótica Social & IoT",
      desc: "Sistemas embarcados (ESP32, MQTT) e tecnologias assistivas gamificadas para inclusão de crianças com TEA (Roboldo)."
    },
    {
      title: "Pesquisa em IA (Mestrado)",
      desc: "Mestranda na UERN (LAR) com artigos publicados em Visão Computacional (YOLO), HRI, Deep Learning e Voz Neural."
    }
  ],
  location: "Rio Grande do Norte, Brasil",
  email: "artemisiakmds@gmail.com",
  links: {
    github: "https://github.com/Misians",
    gitlab: "https://gitlab.com/artemisiakmds",
    orcid: "https://orcid.org/0009-0000-9724-4930",
    researchgate: "https://www.researchgate.net/search/publication?q=Artem%C3%ADsia+Kimberlly",
    email: "mailto:artemisiakmds@gmail.com"
  },
  highlights: [
    { value: "10+", label: "Sistemas & Projetos", detail: "Web, Mobile, RPA e IoT" },
    { value: "3+", label: "Publicações Científicas", detail: "JBCS, HRI & Visão Computacional" },
    { value: "M.Sc.", label: "Pós-Graduação", detail: "Mestranda em Ciência da Computação" },
    { value: "End-to-End", label: "Hardware à Nuvem", detail: "Full Stack, Embarcados & IA" }
  ],
  badges: [
    "Mestranda em Ciência da Computação (UERN)",
    "Pesquisadora LAR / UERN",
    "Engenheira RPA Freelancer",
    "Robótica Social & IoT"
  ]
};

export const skills = [
  {
    category: "Front-End & Web Architecture",
    level: "Avançado",
    icon: <Terminal size={24} />,
    description: "Arquitetura escalável de SPAs, design systems acessíveis, gerenciamento de estado global e cache assíncrono.",
    items: ["React 19", "TypeScript", "Next.js / Nuxt.js", "Vue.js & Angular", "Chakra UI", "Tailwind CSS", "Zustand", "React Query", "Vite"]
  },
  {
    category: "Back-End, APIs & Automação RPA",
    level: "Avançado",
    icon: <Server size={24} />,
    description: "APIs RESTful de alta concorrência, orquestração de crawlers distribuídos, integração com LLMs e microsserviços.",
    items: ["Python / FastAPI", "Django", "PHP / Laravel", "Node.js / Express", "Selenium Grid", "Playwright", "Skyvern (LLM RPA)", "REST & Webhooks"]
  },
  {
    category: "Mobile & Aplicações Híbridas",
    level: "Avançado",
    icon: <Smartphone size={24} />,
    description: "Aplicativos multiplataforma com integração nativa a hardware via Bluetooth/Wi-Fi/MQTT, síntese de voz e gamificação.",
    items: ["Dart / Flutter", "React Native", "Comunicação Serial / BLE", "Interfaces Assistivas (CAA/PECS)", "Animações Interativas"]
  },
  {
    category: "Robótica Social & IoT",
    level: "Especialista",
    icon: <Cpu size={24} />,
    description: "Projetos completos de sistemas embarcados, controle de servomotores, telemetria em tempo real e Interação Humano-Robô (HRI).",
    items: ["ESP32 & ESP-IDF", "Arduino", "Raspberry Pi / Pico", "C / C++ Embarcado", "Protocolo MQTT (Mosquitto)", "Impressão 3D & Hardware"]
  },
  {
    category: "IA, Visão Computacional & Deep Learning",
    level: "Pesquisa & Produção",
    icon: <BrainCircuit size={24} />,
    description: "Modelos de detecção de objetos, síntese neural de voz (TTS offline), previsão de séries temporais e agentes com LLMs locais.",
    items: ["PyTorch", "YOLO (Computer Vision)", "Piper TTS (ONNX)", "Ollama / Google GenAI", "Scikit-Learn", "Transformers, LSTM & GRU", "Pandas / NumPy"]
  },
  {
    category: "Bancos de Dados, Cloud & UI/UX",
    level: "Avançado",
    icon: <Database size={24} />,
    description: "Modelagem relacional e NoSQL, regras de segurança granulares, containerização e prototipação de alta fidelidade.",
    items: ["PostgreSQL", "MySQL & SQLite", "Firebase Auth & Firestore", "Redis", "Docker & Compose", "Object Storage (S3)", "Figma, Adobe XD & Photoshop"]
  }
];

export const timelineData = [
  {
    year: "2026 — Atual",
    role: "Mestranda em Ciência da Computação & Pesquisadora",
    org: "UERN • Laboratório de Aprendizagem Robótica (LAR)",
    type: "Acadêmico & Pesquisa",
    desc: "Pesquisa avançada em Interação Humano-Robô (HRI), síntese de voz neural offline (Piper TTS/ONNX), controle expressivo do robô social Roboldo e modelagem preditiva com Deep Learning (PyTorch) aplicada à gamificação e tecnologias assistivas.",
    tags: ["Mestrado", "Robótica Social", "PyTorch", "Piper TTS", "HRI"]
  },
  {
    year: "2025 — 2026",
    role: "Engenheira de Software Back-End & Automação RPA (Freelancer)",
    org: "Artbiz (Mercado Segurador Europeu)",
    type: "Freelancer • Internacional",
    desc: "Atuação como freelancer no desenvolvimento e manutenção de API de simulação e emissão em FastAPI, PostgreSQL e Docker. Orquestração paralela de robôs (Selenium Grid, Playwright e Skyvern com visão + LLM via Ollama) integrando múltiplas seguradoras europeias para cotação e emissão automatizada de apólices.",
    tags: ["Freelancer", "FastAPI", "Python", "Playwright", "Selenium Grid", "Ollama LLM", "PostgreSQL", "Docker"]
  },
  {
    year: "2025 — 2026",
    role: "Desenvolvedora Full Stack / Arquitetura Front-End",
    org: "SETHAS/RN — Secretaria de Estado do Trabalho, da Habitação e da Assistência Social",
    type: "Profissional",
    desc: "Criação da arquitetura base Front-End e desenvolvimento dos sistemas estaduais do SUAS (Gestão, Apoio Técnico, Portal CSM e API SUAS), além dos sistemas do Programa Leite Potiguar e Programa Jovem Potiguar.",
    tags: ["React", "TypeScript", "Chakra UI", "Zustand", "React Query", "Design System"]
  },
  {
    year: "2025 — 2026",
    role: "Graduação em Ciência da Computação, Residência em IoT & TCC",
    org: "Universidade do Estado do Rio Grande do Norte (UERN)",
    type: "Formação Acadêmica",
    desc: "Conclusão do Bacharelado em Ciência da Computação e Residência Tecnológica em IoT. Desenvolvimento do TCC 'Roboldo', unindo aplicativo móvel gamificado em Flutter e robótica social (ESP32) para Comunicação Alternativa e Aumentativa (PECS) de crianças com TEA.",
    tags: ["Ciência da Computação", "Residência IoT", "Flutter", "ESP32", "Educação Inclusiva"]
  },
  {
    year: "2025",
    role: "Pesquisadora em Visão Computacional & Designer de Identidade Visual",
    org: "Projetos P&D (Produmar) & Branding (Sweet Hell)",
    type: "Pesquisa & Design",
    desc: "Desenvolvimento de sistema inteligente para classificação de qualidade e rastreabilidade logística de atuns com YOLO e Visão Computacional, além de projetos de UI/UX e criação de identidade visual (Sweet Hell).",
    tags: ["YOLO", "Visão Computacional", "Python", "UI/UX", "Branding"]
  }
];

export const publicationsData = [
  {
    year: "2025",
    title: "The Influence of Age, Gender, and Gaming Experience on Robot Control Interface: An Exploratory Study",
    venue: "Journal of the Brazilian Computer Society (JBCS)",
    authors: "Coautora • Laboratório de Aprendizagem Robótica (LAR/UERN)",
    desc: "Estudo exploratório avaliando como fatores demográficos e experiência prévia com jogos influenciam a usabilidade e o desempenho em diferentes interfaces de controle robótico (dual-joystick, giroscópio mobile e controle PS5).",
    tags: ["Interação Humano-Robô (HRI)", "Usabilidade", "Controle Robótico", "JBCS"],
    link: "https://orcid.org/0009-0000-9724-4930"
  },
  {
    year: "2025",
    title: "Artificial Intelligence in Broadcasting: Public Trust and Misinformation Detection in Robotic News Presentation",
    venue: "Pesquisa em Robótica Social & IA (LAR/UERN)",
    authors: "Coautora • Artemísia Kimberlly Marques da Silva et al.",
    desc: "Investigação experimental sobre a percepção de confiança pública e detecção de desinformação em apresentações automatizadas de notícias conduzidas pelo robô social não-humanoide Roboldo.",
    tags: ["Robótica Social", "Roboldo", "IA & Sociedade", "HRI"],
    link: "https://www.researchgate.net/search/publication?q=Artem%C3%ADsia+Kimberlly"
  },
  {
    year: "2026",
    title: "Classificação da Qualidade e Rastreabilidade Logística de Atum Utilizando Visão Computacional",
    venue: "Revista FT — Ciências Exatas e Engenharias",
    authors: "Coautora • Artemísia Kimberlly Marques da Silva et al.",
    desc: "Proposta e validação de um pipeline baseado em redes neurais profundas (YOLO) e identificadores visuais para inspeção automatizada de qualidade e rastreabilidade na cadeia produtiva pesqueira.",
    tags: ["Visão Computacional", "YOLO", "Rastreabilidade", "Indústria 4.0"],
    link: "https://orcid.org/0009-0000-9724-4930"
  }
];

export const projectsData = [
  {
    title: "Roboldo — Ecossistema de Robótica Social & CAA",
    category: "IoT & Robótica",
    featured: true,
    status: "TCC & Mestrado",
    image: "projects/roboldo-quiz.png",
    gallery: [
      { label: "Quiz Assistivo", src: "projects/roboldo-quiz.png" },
      { label: "Desafio Ciências", src: "projects/roboldo-start.png" }
    ],
    desc: "Prancha de Comunicação Alternativa e Aumentativa (PECS) e jogo educativo gamificado integrados ao robô social Roboldo (ESP32, braço robótico e matriz expressiva). Conta com controle via UDP/MQTT/Django e síntese de voz neural em português (Piper TTS / ONNX) para apoio terapêutico e educacional no TEA.",
    highlights: [
      "Integração em tempo real entre app Flutter, pacotes UDP/MQTT, controlador Python e microcontrolador ESP32",
      "Expressões faciais reativas do Roboldo e síntese de voz neural offline (Piper TTS pt-BR)"
    ],
    tags: ["Flutter", "ESP32", "C++", "Python", "Piper TTS (ONNX)", "UDP / MQTT", "TEA / PECS"],
    liveUrl: "https://misians.github.io/Roboldo-Game-Perguntas-e-Respostas/",
    link: "https://github.com/Misians/Roboldo-Game-Perguntas-e-Respostas"
  },
  {
    title: "Inventário LAR — Gestão de Laboratório de Robótica",
    category: "Full Stack & Web",
    featured: true,
    status: "Open Source / UERN",
    image: "projects/inventario-lar-overview.png",
    gallery: [
      { label: "Visão Geral", src: "projects/inventario-lar-overview.png" },
      { label: "Impressora 3D", src: "projects/inventario-lar-printer.png" },
      { label: "Relatórios", src: "projects/inventario-lar-reports.png" },
      { label: "Login", src: "projects/inventario-lar-login.png" }
    ],
    desc: "Plataforma completa para o Laboratório de Aprendizagem Robótica (LAR/UERN), gerenciando empréstimos de equipamentos embarcados, reservas da impressora 3D, controle de insumos e relatórios analíticos.",
    highlights: [
      "Controle de acesso baseado em papéis (Professor e Aluno) com aprovação de reservas de impressão 3D",
      "Exportação de relatórios gerenciais em PDF e CSV com histórico completo de movimentações"
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase / Supabase"],
    liveUrl: "https://misians.github.io/Inventario-Lar/",
    link: "https://github.com/Misians/Inventario-Lar"
  },
  {
    title: "Gamificar para Incluir — Catálogo REA Acessível",
    category: "Full Stack & Web",
    featured: true,
    status: "Educação Inclusiva",
    image: "projects/gamificar-catalogo.png",
    gallery: [
      { label: "Catálogo", src: "projects/gamificar-catalogo.png" },
      { label: "Detalhes do Jogo", src: "projects/gamificar-detalhes.png" }
    ],
    desc: "Recurso Educacional Aberto (REA) interativo voltado à inclusão educacional por meio de jogos digitais acessíveis, controles de alto contraste, escala tipográfica e integração com IA generativa.",
    highlights: [
      "Interface acessível construída com React 19, Tailwind CSS 4, barra de acessibilidade e animações Motion",
      "Painel administrativo integrado ao Firebase Auth, Firestore e Google GenAI SDK"
    ],
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Google GenAI", "Firebase", "Motion"],
    liveUrl: "https://misians.github.io/Gamificar-Para-Incluir/",
    link: "https://github.com/Misians/Gamificar-Para-Incluir"
  },
  {
    title: "SO Docente Hub — Plataforma de Sistemas Operacionais",
    category: "Full Stack & Web",
    featured: true,
    status: "Ensino Superior",
    image: "projects/so-inicio.png",
    gallery: [
      { label: "Início", src: "projects/so-inicio.png" },
      { label: "Simulados ENADE", src: "projects/so-simulados.png" },
      { label: "Banco de Questões", src: "projects/so-questoes.png" },
      { label: "Pedagógico", src: "projects/so-pedagogica.png" }
    ],
    desc: "Ambiente acadêmico interativo de apoio ao ensino de Sistemas Operacionais, reunindo gerador de simulados no padrão ENADE, banco de questões comentadas, acervo de materiais e trilha pedagógica.",
    highlights: [
      "Simulados interativos filtráveis por tópico (Processos, Threads, Memória Virtual, escalonamento e E/S)",
      "Modo de impressão de provas e gerenciamento de estado com Zustand e React Query"
    ],
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Vite"],
    liveUrl: "https://misians.github.io/Sistemas-Operacionais/",
    link: "https://github.com/Misians/Sistemas-Operacionais"
  },
  {
    title: "Irrigador Automatizado — Telemetria IoT & ESP32",
    category: "IoT & Robótica",
    featured: true,
    status: "Hardware + Cloud",
    image: "projects/irrigador-dashboard.png",
    desc: "Sistema embarcado em ESP32 (PlatformIO C++) integrado a um dashboard web em React e Firebase Realtime Database para monitoramento microclimático e acionamento autônomo de irrigação.",
    highlights: [
      "Leitura contínua de umidade do solo, temperatura/umidade do ar (DHT22), sensor de chuva e vazão",
      "Gráficos históricos em tempo real (Recharts) e tabela paginada de acionamento da válvula solenoide"
    ],
    tags: ["ESP32", "C++ / PlatformIO", "React", "Firebase RTDB", "Recharts", "IoT"],
    liveUrl: "https://misians.github.io/Irrigador-Automatizado/",
    link: "https://github.com/Misians/Irrigador-Automatizado"
  },
  {
    title: "Portal Acadêmico Dr. Anderson Abner (LAR/UERN)",
    category: "Full Stack & Web",
    featured: false,
    status: "Portal de Pesquisa",
    image: "projects/site-abner-sobre.png",
    gallery: [
      { label: "Sobre & Artigos (Light)", src: "projects/site-abner-sobre.png" },
      { label: "Projetos LAR (Dark)", src: "projects/site-abner-projetos.png" },
      { label: "Formação Acadêmica", src: "projects/site-abner-academico.png" }
    ],
    desc: "Site profissional bilíngue (PT/EN) e com suporte a temas claro/escuro desenvolvido para o coordenador do Laboratório de Aprendizagem Robótica da UERN, destacando projetos de P&D e publicações.",
    highlights: [
      "Alternância instantânea de idioma (Context API PT/EN) e tema visual (Glassmorphism Light & Dark)",
      "Galeria de projetos em Robótica Educacional (CellBots), Visão Computacional e Navegação Autônoma"
    ],
    tags: ["React", "TypeScript", "Vite", "Context API", "Bilingual PT/EN"],
    liveUrl: "https://misians.github.io/Site-Abner/",
    link: "https://github.com/Misians/Site-Abner"
  },
  {
    title: "COIN 2024 — Congresso Interdisciplinar UERN",
    category: "Full Stack & Web",
    featured: false,
    status: "Site Oficial de Evento",
    image: "projects/coin2024-home.png",
    gallery: [
      { label: "Sobre & Eixos", src: "projects/coin2024-home.png" },
      { label: "Programação", src: "projects/coin2024-programacao.png" }
    ],
    desc: "Plataforma web oficial do Congresso Interdisciplinar da UERN (Campus Natal), reunindo eixos temáticos, cronograma completo de 4 dias, submissão de trabalhos e comissão organizadora.",
    highlights: [
      "Desenvolvido com Vue 3, Vuetify 3 e Pinia com layout responsivo e suporte a temas",
      "Organização clara de mesas temáticas, palestras, oficinas e instituições parceiras (UERN, UFRN, UFERSA, IFRN)"
    ],
    tags: ["Vue 3", "Vuetify", "Pinia", "Vite", "JavaScript"],
    liveUrl: "https://misians.github.io/coin2024/",
    link: "https://github.com/Misians/coin2024"
  },
  {
    title: "ResPets — Rede Social de Monitoramento Animal",
    category: "Full Stack & Web",
    featured: false,
    status: "Impacto Social",
    image: "projects/respets-feed.png",
    gallery: [
      { label: "Mural & Alertas", src: "projects/respets-feed.png" },
      { label: "Feed de Resgate", src: "projects/respets-adocao.png" }
    ],
    desc: "Rede social solidária sem fins lucrativos criada para conectar cuidadores independentes, mapear animais em situação vulnerável, organizar lares temporários e impulsionar adoções responsáveis.",
    highlights: [
      "Front-end em Vue 3 integrado a API RESTful em Node.js, Express, TypeScript e Prisma ORM",
      "Registro rápido de alertas geolocalizados por bairro e nível de urgência veterinária"
    ],
    tags: ["Vue 3", "TypeScript", "Node.js", "Express", "Prisma ORM"],
    liveUrl: "https://misians.github.io/respets/",
    link: "https://github.com/Misians/respets"
  },
  {
    title: "NanaBaby Store — E-Commerce Infantil Full Stack",
    category: "Full Stack & Web",
    featured: false,
    status: "E-Commerce",
    image: "projects/nanababy-produtos.png",
    gallery: [
      { label: "Vitrine de Ofertas", src: "projects/nanababy-produtos.png" },
      { label: "Home & Categorias", src: "projects/nanababy-home.png" }
    ],
    desc: "Loja virtual completa especializada em artigos infantis e enxoval de bebê, com navegação por categorias, vitrine promocional (Nenê Friday), favoritos e API Back-End em Express + Prisma.",
    highlights: [
      "Catálogo dinâmico com indicadores de desconto, avaliação por estrelas e entrega expressa",
      "Arquitetura desacoplada com React no Front-End e API TypeScript/Prisma no Back-End"
    ],
    tags: ["React", "TypeScript", "Express", "Prisma", "REST API"],
    liveUrl: "https://misians.github.io/nanababy-store/",
    link: "https://github.com/Misians/nanababy-store"
  },
  {
    title: "Gelato On Ice — Sorveteria Artesanal Online",
    category: "Full Stack & Web",
    featured: false,
    status: "Web App + API",
    image: "projects/gelato-home.png",
    gallery: [
      { label: "Cardápio Gelato", src: "projects/gelato-home.png" },
      { label: "Login Firebase", src: "projects/gelato-login.png" }
    ],
    desc: "Aplicação web de sorveteria artesanal com autenticação social via Firebase (Google Auth), filtro por linhas cremosas, picolés e opções veganas, consumindo API Node.js/Express.",
    highlights: [
      "Autenticação integrada ao Firebase Auth com persistência de sessão e rotas privadas",
      "Catálogo visual de gelatos com detalhamento de ingredientes e selo vegano"
    ],
    tags: ["React", "Firebase Auth", "Node.js", "Express", "React Router"],
    liveUrl: "https://misians.github.io/GelatoOnIce/",
    link: "https://github.com/Misians/GelatoOnIce"
  },
  {
    title: "FiguresLoja — Ateliê de Action Figures & Resina 3D",
    category: "Full Stack & Web",
    featured: false,
    status: "Laravel + Vue 3",
    image: "projects/figuresloja-home.png",
    desc: "Plataforma de e-commerce para venda e encomenda de action figures artesanais impressas em resina 8K e pintadas à mão, construída com Laravel, Inertia.js, Vue 3 e Tailwind CSS v4.",
    highlights: [
      "Vitrine dark/neon com filtro por escala (1/6, 1/8, 1/10) e orçamento de modelos STL personalizados",
      "Stack moderna combinando SSR com Inertia.js, Vue 3, TypeScript e Reka UI"
    ],
    tags: ["Vue 3", "TypeScript", "Laravel", "Inertia.js", "Tailwind CSS v4"],
    liveUrl: "https://misians.github.io/FiguresLoja/",
    link: "https://github.com/Misians/FiguresLoja"
  },
  {
    title: "Ecommerce-Django — API RESTful & Catálogo CRUD",
    category: "Back-End & IA",
    featured: false,
    status: "Django REST API",
    image: "projects/ecommerce-django.png",
    desc: "Sistema de e-commerce e gerenciamento de estoque em Python e Django REST Framework (DRF), com controle de permissões granulares entre leitura pública e mutação administrativa.",
    highlights: [
      "Modelagem de produtos com slug único, controle de estoque e serialização DRF",
      "Módulo de autenticação de contas e permissões diferenciadas (AllowAny vs IsAdminUser)"
    ],
    tags: ["Python", "Django", "Django REST Framework", "SQLite / PostgreSQL"],
    liveUrl: "https://misians.github.io/Ecommerce-django/",
    link: "https://github.com/Misians/Ecommerce-django"
  },
  {
    title: "Simulation & Emission API — Automação RPA de Seguros",
    category: "Back-End & IA",
    featured: true,
    status: "Freelancer • Artbiz",
    desc: "Projeto freelancer de engenharia Back-End e RPA para o mercado europeu: API de alta disponibilidade que realiza cotações simultâneas e emissão automatizada de apólices de seguro automóvel integrando múltiplas seguradoras.",
    highlights: [
      "Orquestração multi-thread de crawlers Selenium Grid, Playwright e agentes autônomos Skyvern (Visão + LLM)",
      "Matching semântico de catálogo de veículos com LLM local (Ollama), armazenamento S3 e métricas no Grafana"
    ],
    tags: ["FastAPI", "PostgreSQL", "Playwright", "Selenium Grid", "Skyvern", "Ollama LLM", "Docker", "S3"]
  },
  {
    title: "Ecossistema SUAS — Assistência Social do RN (SETHAS)",
    category: "Full Stack & Web",
    featured: true,
    status: "Governo do RN",
    desc: "Arquitetura base e desenvolvimento dos módulos web da Secretaria de Estado do Trabalho, da Habitação e da Assistência Social do RN: SUAS Gestão, SUAS Apoio Técnico, Portal CSM e integração com a API SUAS.",
    highlights: [
      "Criação do repositório base padronizado com TypeScript, Chakra UI, Zustand e React Query para toda a equipe",
      "Módulos de gestão estadual, acompanhamento técnico e portais cidadãos de alto impacto social"
    ],
    tags: ["React", "TypeScript", "Chakra UI", "Zustand", "React Query", "REST API", "Figma"]
  }
];
