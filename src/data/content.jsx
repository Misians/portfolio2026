import { Code2, Cpu, Database, PenTool, Terminal, Smartphone } from 'lucide-react';

export const personalData = {
  name: "Artemísia Kimberlly", // Coloque seu nome real aqui
  role: "Desenvolvedora Full Stack",
  bio: "Com residência em IoT e formada em Ciência da Computação pela UERN. Especialista em frontend e IoT, com foco na construção de sistemas interligando microcontroladores e desenvolvimento web.",
};

export const skills = [
  { name: "Flutter/Dart, React Native", icon: <Smartphone size={24} />, level: "Mobile" },
  { name: "React, Nuxt.js, VueJs & Angular", icon: <Terminal size={24} />, level: "FrontEnd" },
  { name: "ESP32, Arduino & Raspberry pi pico", icon: <Cpu size={24} />, level: "Robótica" },
  { name: "PostgreSQL, MySql, Sqlite & Redis", icon: <Database size={24} />, level: "Banco de Dados" },
  { name: "Photoshop, Adobe XD, Figma & Canva", icon: <PenTool size={24} />, level: "Design Tools" },
];

export const timelineData = [
  {
    year: "2026",
    title: "Graduação e TCC",
    desc: "Finalização do projeto 'Roboldo', integrando Flutter e robótica para auxílio no TEA."
  },
  {
    year: "2025",
    title: "Projetos de IoT e IA",
    desc: "Desenvolvimento de sistema de rastreabilidade de pescado (Produmar) usando Visão Computacional."
  },
  {
    year: "2025",
    title: "Identidade Visual",
    desc: "Criação de branding para produtos artesanais (Sweet Hell)."
  }
];

export const projectsData = [
  {
    title: "Roboldo - TCC",
    category: "Mobile & IoT",
    desc: "Prancha de comunicação alternativa gamificada integrada a um robô social (ESP32) para crianças com autismo (PECS).",
    tags: ["Flutter", "ESP32", "C++", "Educação Inclusiva"]
  },
  {
    title: "Fish Quality AI",
    category: "IA & Computer Vision",
    desc: "Sistema para análise de qualidade e rastreabilidade de atuns utilizando algoritmo YOLO e tags de identificação.",
    tags: ["Python", "YOLO", "Computer Vision"]
  },
  {
    title: "Sweet Hell Branding",
    category: "Design",
    desc: "Desenvolvimento de identidade visual minimalista e dinâmica para marca de geleias artesanais.",
    tags: ["Design", "Branding", "Criatividade"]
  }
];