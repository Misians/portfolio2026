import React, { useState } from 'react';
import { personalData } from '../data/content';
import {
  ArrowRight,
  Printer,
  Github,
  BookOpen,
  Mail,
  MapPin,
  Cpu,
  Bot,
  Code2,
  BrainCircuit,
  Sparkles,
  Award,
  Layers
} from 'lucide-react';
import profile3 from '../assets/profile3.jpg';
import profile1 from '../assets/profile.jpg';
import profile2 from '../assets/profile2.jpg';

const photos = [
  { src: profile3, label: "Perfil 1" },
  { src: profile1, label: "Perfil 2" },
  { src: profile2, label: "Perfil 3" },
];

const pillarIcons = [
  <Code2 size={20} key="code" />,
  <Bot size={20} key="bot" />,
  <BrainCircuit size={20} key="brain" />
];

const statIcons = [
  <Layers size={20} key="layers" />,
  <Award size={20} key="award" />,
  <Sparkles size={20} key="sparkles" />,
  <Cpu size={20} key="cpu" />
];

const Hero = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section className="hero-section" id="sobre">
      {/* Grid Principal do Sobre */}
      <div className="hero-container">
        {/* Coluna Esquerda: Apresentação + Bento de Pilares */}
        <div className="hero-content">
          <div className="hero-eyebrow-row">
            <div className="status-pill">
              <span className="status-dot" />
              <span>Mestranda em Ciência da Computação • UERN</span>
            </div>
            <span className="terminal-tag">~/misians</span>
          </div>

          <h1 className="hero-headline">
            Olá, eu sou <br />
            <span className="gradient-text">{personalData.name}</span>
          </h1>

          <div className="hero-role-box">
            <span className="role-indicator" />
            <p className="hero-role">{personalData.role}</p>
          </div>

          <p className="hero-bio">{personalData.bio}</p>

          {/* Mini-Cards Bento de Especialidades no Sobre */}
          <div className="about-pillars-grid">
            {personalData.aboutPillars.map((pillar, idx) => (
              <div key={idx} className="about-pillar-card">
                <div className="about-pillar-header">
                  <span className="about-pillar-icon">{pillarIcons[idx]}</span>
                  <h4>{pillar.title}</h4>
                </div>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">
              <span>Explorar Projetos</span>
              <ArrowRight size={18} />
            </a>
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalData.links.orcid}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <BookOpen size={18} />
              <span>ORCID / Artigos</span>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-secondary"
              title="Imprimir ou salvar versão em PDF"
            >
              <Printer size={18} />
              <span>Salvar CV</span>
            </button>
          </div>

          {/* Rodapé de Localização & E-mail Rápido */}
          <div className="hero-meta-bar">
            <span className="hero-meta-item">
              <MapPin size={15} color="#38bdf8" />
              {personalData.location}
            </span>
            <span className="hero-meta-divider">•</span>
            <a href={personalData.links.email} className="hero-meta-item link">
              <Mail size={15} color="#a855f7" />
              {personalData.email}
            </a>
          </div>
        </div>

        {/* Coluna Direita: Showcase Visual com Moldura Orbital & Cards Flutuantes */}
        <div className="image-wrapper">
          <div className="blob-glow" />
          <div className="orbital-ring ring-1" />
          <div className="orbital-ring ring-2" />

          <div className="profile-showcase">
            {/* Card Flutuante Superior */}
            <div className="floating-badge badge-top-right">
              <div className="floating-badge-icon cyan">
                <Bot size={18} />
              </div>
              <div>
                <div className="floating-badge-title">Robótica Social & IoT</div>
                <div className="floating-badge-sub">Pesquisadora LAR / UERN</div>
              </div>
            </div>

            {/* Moldura Hexagonal/Circular com Brilho */}
            <div className="profile-frame">
              <img
                src={photos[activePhoto].src}
                alt={`Foto de ${personalData.name}`}
                className="profile-pic"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=400';
                }}
              />
            </div>

            {/* Card Flutuante Inferior */}
            <div className="floating-badge badge-bottom-left">
              <div className="floating-badge-icon purple">
                <Code2 size={18} />
              </div>
              <div>
                <div className="floating-badge-title">Full Stack & RPA</div>
                <div className="floating-badge-sub">SETHAS/RN • Artbiz Freelancer</div>
              </div>
            </div>
          </div>

          {/* Seletor de Fotos Estilizado */}
          <div className="photo-switcher" aria-label="Alternar foto de perfil">
            <span className="photo-switcher-label">Foto:</span>
            {photos.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                className={`photo-dot ${activePhoto === idx ? 'active' : ''}`}
                onClick={() => setActivePhoto(idx)}
                title={`Visualizar ${photo.label}`}
              >
                <img src={photo.src} alt={photo.label} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Barra de Destaques Bento */}
      <div className="stats-grid">
        {personalData.highlights.map((item, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-card-top">
              <div className="stat-value">{item.value}</div>
              <div className="stat-icon">{statIcons[idx]}</div>
            </div>
            <div className="stat-label">{item.label}</div>
            <div className="stat-detail">{item.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
