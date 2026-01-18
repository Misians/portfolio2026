import React from 'react';
import GlassCard from './GlassCard';
import { skills } from '../data/content';

const TechStack = () => {
  return (
    <section id="tech" style={{ padding: '4rem 0' }}>
      <h2>Tecnologias</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {skills.map((skill, index) => (
          <GlassCard key={index}>
            <div style={{ color: '#38bdf8', marginBottom: '1rem' }}>{skill.icon}</div>
            <h3 style={{ fontSize: '1.2rem' }}>{skill.name}</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{skill.level}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default TechStack;