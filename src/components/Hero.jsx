import React from 'react';
import GlassCard from './GlassCard';
import { personalData } from '../data/content';
import { ArrowRight, Download } from 'lucide-react'; // Ícones para os botões
import profile from '../assets/profile3.jpg'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Lado Esquerdo: Texto */}
        <div className="hero-content">
          <span style={{ color: '#38bdf8', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Portfólio
          </span>
          <h1>
            Olá, eu sou <br />
            <span style={{ 
              background: 'linear-gradient(to right, #38bdf8, #a855f7)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>
              {personalData.name}
            </span>
          </h1>
          
          <h2>{personalData.role}</h2>
          
          <p className="bio-card">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#e2e8f0' }}>
              {personalData.bio}
            </p>
          </p>

          <div className="cta-buttons">
            <a href="#projects" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Ver Projetos <ArrowRight size={20} />
            </a>
            {/* Botão secundário estilo vidro */}
            <a href="#" style={{ 
              padding: '12px 32px', 
              border: '1px solid rgba(255,255,255,0.2)', 
              borderRadius: '50px', 
              color: '#fff', 
              textDecoration: 'none',
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px'
            }}>
              Baixar CV <Download size={18} />
            </a>
          </div>
        </div>

        {/* Lado Direito: Imagem */}
        <div className="image-wrapper">
          <div className="blob-glow"></div>
          {/* Lembre-se de colocar sua foto na pasta 'public' */}
          <img 
            src={profile}
            alt={`Foto de ${personalData.name}`} 
            className="profile-pic"
            onError={(e) => {
              // Fallback caso não tenha foto ainda: usa uma imagem aleatória tech
              e.target.src = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=400";
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;