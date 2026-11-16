import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { projectsData } from '../data/content';
import { CheckCircle2, Sparkles, ExternalLink, Maximize2, X } from 'lucide-react';

const Projects = () => {
  const categories = ['Todos', ...Array.from(new Set(projectsData.map((p) => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeSlideByCard, setActiveSlideByCard] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getActiveImage = (project, idx) => {
    if (project.gallery && project.gallery.length > 0) {
      const selectedIdx = activeSlideByCard[idx] ?? 0;
      return project.gallery[selectedIdx]?.src || project.image;
    }
    return project.image;
  };

  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="section-header">
        <span className="section-eyebrow">Portfólio Técnico & Visual</span>
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-subtitle">
          Sistemas em produção, plataformas governamentais, robótica assistiva e aplicações Full Stack com prévias reais das telas.
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '1.75rem'
        }}
      >
        {filteredProjects.map((project, index) => {
          const currentImg = getActiveImage(project, index);
          const activeTabIdx = activeSlideByCard[index] ?? 0;

          return (
            <GlassCard
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: project.featured ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                {currentImg && (
                  <div style={{ marginBottom: '1.15rem' }}>
                    <div
                      onClick={() => setLightboxImage({ src: currentImg, title: project.title })}
                      style={{
                        position: 'relative',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        background: '#0f172a',
                        height: '205px',
                        cursor: 'pointer'
                      }}
                    >
                      <img
                        src={currentImg}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top center',
                          display: 'block',
                          transition: 'transform 0.35s ease'
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          background: 'rgba(15, 23, 42, 0.82)',
                          color: '#e2e8f0',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '8px',
                          padding: '4px 8px',
                          fontSize: '0.72rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          backdropFilter: 'blur(8px)'
                        }}
                      >
                        <Maximize2 size={12} /> Ampliar
                      </span>
                    </div>

                    {project.gallery && project.gallery.length > 1 && (
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.4rem',
                          marginTop: '0.55rem',
                          flexWrap: 'wrap'
                        }}
                      >
                        {project.gallery.map((g, gIdx) => (
                          <button
                            key={gIdx}
                            type="button"
                            onClick={() =>
                              setActiveSlideByCard((prev) => ({ ...prev, [index]: gIdx }))
                            }
                            style={{
                              padding: '0.22rem 0.65rem',
                              borderRadius: '99px',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              border:
                                activeTabIdx === gIdx
                                  ? '1px solid rgba(56, 189, 248, 0.6)'
                                  : '1px solid rgba(255, 255, 255, 0.1)',
                              background:
                                activeTabIdx === gIdx
                                  ? 'rgba(56, 189, 248, 0.18)'
                                  : 'rgba(255, 255, 255, 0.04)',
                              color: activeTabIdx === gIdx ? '#38bdf8' : '#94a3b8'
                            }}
                          >
                            {g.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.85rem',
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

                <h3 style={{ fontSize: '1.22rem', color: '#f8fafc', marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1rem' }}>
                  {project.desc}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 1.2rem 0',
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
                          fontSize: '0.84rem',
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

                {(project.link || project.liveUrl) && (
                  <div
                    style={{
                      marginTop: '1.15rem',
                      paddingTop: '0.9rem',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#34d399',
                          textDecoration: 'none',
                          fontSize: '0.86rem',
                          fontWeight: 700
                        }}
                      >
                        Demo Online <ExternalLink size={14} />
                      </a>
                    )}
                    {project.link && (
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
                          fontSize: '0.86rem',
                          fontWeight: 600
                        }}
                      >
                        Repositório GitHub <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>

      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(2, 6, 23, 0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1120px',
              width: '100%',
              background: '#0f172a',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <strong style={{ color: '#f8fafc', fontSize: '1rem' }}>{lightboxImage.title}</strong>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: 'none',
                  color: '#f8fafc',
                  borderRadius: '8px',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex'
                }}
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
