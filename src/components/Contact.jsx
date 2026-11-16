import React from 'react';
import GlassCard from './GlassCard';
import { personalData } from '../data/content';
import { Mail, Github, Gitlab, BookOpen, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" style={{ padding: '5rem 0 3rem' }}>
      <GlassCard
        style={{
          textAlign: 'center',
          padding: '3.5rem 2rem',
          background:
            'linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
          borderColor: 'rgba(56, 189, 248, 0.25)'
        }}
      >
        <span className="section-eyebrow">Vamos Conversar?</span>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>
          Aberta a Projetos, Pesquisa & Oportunidades
        </h2>
        <p
          style={{
            color: '#94a3b8',
            maxWidth: '620px',
            margin: '0 auto 2rem',
            fontSize: '1.05rem'
          }}
        >
          Seja para desenvolvimento Full Stack, automação inteligente com IA/RPA ou parcerias em pesquisa acadêmica e IoT, entre em contato!
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <a href={personalData.links.email} className="btn-primary">
            <Mail size={18} /> Enviar E-mail
          </a>
          <a
            href={personalData.links.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Github size={18} /> GitHub (@Misians)
          </a>
          <a
            href={personalData.links.gitlab}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Gitlab size={18} /> GitLab (@artemisiakmds)
          </a>
          <a
            href={personalData.links.researchgate}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <BookOpen size={18} /> ResearchGate <ExternalLink size={14} />
          </a>
        </div>
      </GlassCard>
    </section>
  );
};

export default Contact;
