import React from 'react';
import GlassCard from './GlassCard';
import { publicationsData, personalData } from '../data/content';
import { BookOpen, ExternalLink, Award } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publicacoes" style={{ padding: '5rem 0' }}>
      <div className="section-header">
        <span className="section-eyebrow">Produção Científica</span>
        <h2 className="section-title">Pesquisa & Publicações</h2>
        <p className="section-subtitle">
          Artigos publicados em periódicos e pesquisas conduzidas junto ao Laboratório de Aprendizagem Robótica (LAR/UERN).
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
        {publicationsData.map((pub, index) => (
          <GlassCard key={index}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span
                  style={{
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '6px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  {pub.year}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: '#c084fc',
                    fontSize: '0.88rem',
                    fontWeight: 600
                  }}
                >
                  <Award size={15} /> {pub.venue}
                </span>
              </div>

              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                Acessar Registro <ExternalLink size={14} />
              </a>
            </div>

            <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: '0.4rem 0' }}>
              {pub.title}
            </h3>

            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.75rem' }}>
              {pub.authors}
            </p>

            <p style={{ fontSize: '0.94rem', color: '#94a3b8', marginBottom: '1rem' }}>
              {pub.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {pub.tags.map((tag, i) => (
                <span key={i} className="tech-chip">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a
            href={personalData.links.orcid}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <BookOpen size={18} /> Ver Perfil Completo no ORCID (0009-0000-9724-4930)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
