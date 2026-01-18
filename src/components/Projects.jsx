import React from 'react';
import GlassCard from './GlassCard';
import { projectsData } from '../data/content';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 0' }}>
      <h2>Projetos em Destaque</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projectsData.map((project, index) => (
          <GlassCard key={index}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                background: 'rgba(56, 189, 248, 0.1)', 
                color: '#38bdf8', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '99px', 
                fontSize: '0.8rem' 
              }}>
                {project.category}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p style={{ color: '#94a3b8', margin: '1rem 0' }}>{project.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{ fontSize: '0.8rem', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;