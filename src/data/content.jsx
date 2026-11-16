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
      desc: "Arquitetura Front-End para o setor público (SETHAS/RN) e engenharia Back-End/RPA como freelancer internacional (Artbiz / Scal)."
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
    org: "Artbiz / Scal (Mercado Segurador Português)",
    type: "Freelancer • Internacional",
    desc: "Atuação como freelancer no desenvolvimento e manutenção da Simulation & Emission API em FastAPI, PostgreSQL e Docker. Orquestração paralela de robôs (Selenium Grid, Playwright e Skyvern com visão + LLM via Ollama) integrando 10 seguradoras portuguesas (Allianz, Fidelidade, Mapfre, Zurich, etc.) para cotação e emissão automatizada de apólices.",
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
    desc: "Prancha de Comunicação Alternativa e Aumentativa (PECS) gamificada integrada ao robô social Roboldo (ESP32, braço robótico e matriz expressiva). Conta com controle via MQTT/Django e painel web com síntese de voz neural em português (Piper TTS / ONNX) para apoio terapêutico e educacional no TEA.",
    highlights: [
      "Integração em tempo real entre app Flutter, broker MQTT, controlador Django e microcontrolador ESP32",
      "Servidor de síntese de voz neural offline (Piper TTS pt-BR) com ajuste dinâmico de cadência e expressividade"
    ],
    tags: ["Flutter", "ESP32", "C++", "Python", "Piper TTS (ONNX)", "MQTT", "Django", "TEA / PECS"],
    link: "https://github.com/Misians"
  },
  {
    title: "Simulation & Emission API — Automação RPA de Seguros",
    category: "Back-End & IA",
    featured: true,
    status: "Freelancer • Artbiz / Scal",
    desc: "Projeto freelancer de engenharia Back-End e RPA para o mercado português: API de alta disponibilidade que realiza cotações simultâneas e emissão de apólices de seguro automóvel em 10 seguradoras (Allianz, Fidelidade, Mapfre, Zurich, Ageas, Lusitania, Tranquilidade, Caravela, Una e Victoria).",
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
  },
  {
    title: "Inventário LAR — Gestão de Laboratório de Robótica",
    category: "Full Stack & Web",
    featured: true,
    status: "Open Source / UERN",
    desc: "Plataforma completa para o Laboratório de Aprendizagem Robótica (LAR/UERN), gerenciando empréstimos de equipamentos, reservas de impressora 3D, controle de estoque de filamentos, projetos de pesquisa e diretório da comunidade.",
    highlights: [
      "Controle de acesso baseado em papéis (Aluno, Professor, Administrador) com aprovação de matrículas",
      "Segurança no servidor via Firestore Security Rules e autenticação com confirmação de e-mail"
    ],
    tags: ["React", "TypeScript", "Vite", "Firebase Auth", "Cloud Firestore", "Security Rules"]
  },
  {
    title: "Gamificar para Incluir",
    category: "Full Stack & Web",
    featured: false,
    status: "Educação Inclusiva",
    desc: "Aplicação web interativa voltada à inclusão educacional por meio de mecânicas de gamificação e recursos de inteligência artificial generativa, com suporte a deploy híbrido (Firebase Hosting & Cloud Functions).",
    highlights: [
      "Interface fluida e acessível construída com React 19, Tailwind CSS 4 e animações com Motion",
      "Integração com Google GenAI SDK e backend serverless em Firebase"
    ],
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Google GenAI", "Firebase", "Motion"],
    link: "https://github.com/Misians"
  },
  {
    title: "Deep Learning para Séries Temporais em Gamificação",
    category: "Back-End & IA",
    featured: false,
    status: "Pesquisa em IA",
    desc: "Estudo experimental comparativo para previsão multi-horizonte (t+1 a t+6) de engajamento e XP em plataformas gamificadas (Duolingo), contrastando estratégias de Bontempi et al. (Direta/MIMO vs. Recursiva) com 6 arquiteturas neurais.",
    highlights: [
      "Implementação em PyTorch de MLP, CNN 1D, LSTM, GRU, Seq2Seq e Transformer com prevenção estrita de data leakage",
      "Avaliação rigorosa por horizonte de previsão utilizando MAE, RMSE e MASE"
    ],
    tags: ["PyTorch", "Deep Learning", "Transformers", "LSTM / GRU", "Scikit-Learn", "Séries Temporais"]
  },
  {
    title: "Fish Quality AI — Rastreabilidade de Pescado (Produmar)",
    category: "Back-End & IA",
    featured: false,
    status: "P&D Industrial",
    desc: "Sistema de Visão Computacional para inspeção automatizada de qualidade e rastreabilidade logística de atuns, combinando detecção de objetos em tempo real com leitura de tags de identificação.",
    highlights: [
      "Treinamento e inferência com arquitetura YOLO para classificação visual de qualidade do pescado",
      "Resultou em publicação científica na Revista FT (2026)"
    ],
    tags: ["Python", "YOLO", "Computer Vision", "OpenCV", "Rastreabilidade"]
  },
  {
    title: "Portais Leite Potiguar & Jovem Potiguar",
    category: "Full Stack & Web",
    featured: false,
    status: "Programas Sociais",
    desc: "Prototipação de alta fidelidade e implementação das interfaces web e mobile para gestão operacional do Programa Leite Potiguar e do portal do Programa Jovem Potiguar no Rio Grande do Norte.",
    highlights: [
      "Foco em usabilidade para agentes públicos e beneficiários em múltiplos dispositivos",
      "Design system consistente do protótipo no Figma à implementação em React / React Native"
    ],
    tags: ["React", "React Native", "UI/UX Design", "Figma", "Front-End"]
  },
  {
    title: "Maxxi App — Consulta Veicular",
    category: "Mobile & Design",
    featured: false,
    status: "App Mobile",
    desc: "Aplicativo móvel e protótipo interativo desenvolvidos para a empresa Maxxi, permitindo busca rápida, visualização de histórico e consulta detalhada de dados veiculares.",
    highlights: [
      "Fluxo de busca otimizado e visualização clara de indicadores e laudos veiculares",
      "Desenvolvimento mobile multiplataforma com React Native"
    ],
    tags: ["React Native", "Figma", "UI/UX", "Mobile", "Consumo de API"]
  }
];
