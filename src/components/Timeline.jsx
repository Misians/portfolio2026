import React from 'react';
import GlassCard from './GlassCard';
import { timelineData } from '../data/content';

const Timeline = () => {
  return (
    <section style={{ padding: '4rem 0' }}>
      <h2>Minha Jornada</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {timelineData.map((item, index) => (
          <div key={index} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '80px', color: '#38bdf8', fontWeight: 'bold', paddingTop: '1.5rem' }}>
              {item.year}
            </div>
            <GlassCard className="timeline-card" style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8' }}>{item.desc}</p>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;