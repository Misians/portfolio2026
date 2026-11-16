import React from 'react';
import GlassCard from './GlassCard';
import { skills } from '../data/content';

const TechStack = () => {
  return (
    <section id="tech" style={{ padding: '5rem 0' }}>
      <div className="section-header">
        <span className="section-eyebrow">Stack & Competências</span>
        <h2 className="section-title">Tecnologias & Ferramentas</h2>
        <p className="section-subtitle">
          Atuação versátil conectando interfaces modernas, APIs distribuídas, inteligência artificial e hardware embarcado.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {skills.map((skill, index) => (
          <GlassCard key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div
                  style={{
                    color: '#38bdf8',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '0.65rem',
                    borderRadius: '12px',
                    display: 'inline-flex'
                  }}
                >
                  {skill.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#a855f7',
                    background: 'rgba(168, 85, 247, 0.12)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '999px'
                  }}
                >
                  {skill.level}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>
                {skill.category}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                {skill.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {skill.items.map((item, i) => (
                <span key={i} className="tech-chip">
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
