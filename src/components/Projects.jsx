import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { projectsData } from '../data/content';
import { CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

const Projects = () => {
  const categories = ['Todos', ...Array.from(new Set(projectsData.map((p) => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="section-header">
        <span className="section-eyebrow">Portfólio Técnico</span>
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-subtitle">
          Sistemas em produção, plataformas governamentais, robótica assistiva e experimentos de inteligência artificial.
        </p>
      </div>

      {/* Filtro por categoria */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem'
        }}
      >
        {filteredProjects.map((project, index) => (
          <GlassCard
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderColor: project.featured ? 'rgba(56, 189, 248, 0.22)' : 'rgba(255, 255, 255, 0.08)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <span
                  style={{
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '99px',
                    fontSize: '0.78rem',
                    fontWeight: 600
                  }}
                >
                  {project.category}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem',
                    color: project.featured ? '#34d399' : '#94a3b8',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  {project.featured && <Sparkles size={13} />}
                  {project.status}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.65rem' }}>
                {project.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.94rem', marginBottom: '1.1rem' }}>
                {project.desc}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.25rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem'
                  }}
                >
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: '#cbd5e1'
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="#38bdf8"
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#38bdf8',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      fontWeight: 600
                    }}
                  >
                    Ver no GitHub <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
