import React from 'react';
import GlassCard from './GlassCard';
import { timelineData } from '../data/content';
import { Briefcase, GraduationCap } from 'lucide-react';

const Timeline = () => {
  return (
    <section id="jornada" style={{ padding: '5rem 0' }}>
      <div className="section-header">
        <span className="section-eyebrow">Trajetória</span>
        <h2 className="section-title">Experiência & Formação</h2>
        <p className="section-subtitle">
          Evolução acadêmica e profissional entre desenvolvimento de software, pesquisa científica e sistemas embarcados.
        </p>
      </div>

      <div className="timeline-wrapper">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <GlassCard>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    color: '#38bdf8',
                    fontWeight: 600
                  }}
                >
                  {item.year}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    background: 'rgba(168, 85, 247, 0.12)',
                    color: '#c084fc',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  {item.type.includes('Profissional') ? (
                    <Briefcase size={13} />
                  ) : (
                    <GraduationCap size={13} />
                  )}
                  {item.type}
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '0.25rem' }}>
                {item.role}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#cbd5e1',
                  fontWeight: 500,
                  marginBottom: '0.85rem'
                }}
              >
                {item.org}
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.1rem' }}>
                {item.desc}
              </p>

              {item.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {item.tags.map((tag, i) => (
                    <span key={i} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
