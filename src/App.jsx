import { useState, useEffect } from 'react';
import './styles/global.css';
import NeuralBackground from './components/NeuralBackground';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import GithubActivity from './components/GithubActivity';
import Timeline from './components/Timeline';
import Publications from './components/Publications';
import Contact from './components/Contact';
import { personalData } from './data/content';
import {
  Sparkles,
  Cpu,
  FolderGit2,
  Compass,
  BookOpen,
  Send,
  Github,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('sobre');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['sobre', 'tech', 'projects', 'github', 'jornada', 'publicacoes', 'contato'];
      const scrollPos = window.scrollY + 240;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'sobre', label: 'Sobre', icon: <Sparkles size={15} /> },
    { id: 'tech', label: 'Stack', icon: <Cpu size={15} /> },
    { id: 'projects', label: 'Projetos', icon: <FolderGit2 size={15} /> },
    { id: 'github', label: 'GitHub', icon: <Github size={15} /> },
    { id: 'jornada', label: 'Jornada', icon: <Compass size={15} /> },
    { id: 'publicacoes', label: 'Artigos', icon: <BookOpen size={15} /> }
  ];

  return (
    <>
      {/* Fundo Animado de Rede Neural / Grafo */}
      <NeuralBackground />

      {/* Navbar Limpa Sem Bordas Encaixotadas */}
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            {/* Brand com Monograma & Status */}
            <a href="#sobre" className="brand-logo">
              <div className="brand-monogram">
                <span>AK</span>
              </div>
              <div className="brand-text-group">
                <span className="brand-name">
                  Artemísia<span className="brand-accent">.dev</span>
                </span>
                <span className="brand-sub">Full Stack • IoT • IA</span>
              </div>
            </a>

            {/* Links Centrais Limpos */}
            <div className="nav-dock">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-pill ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Ações à Direita */}
            <div className="nav-actions">
              <a
                href={personalData.links.github}
                target="_blank"
                rel="noreferrer"
                className="nav-icon-btn"
                title="GitHub (@Misians)"
              >
                <Github size={18} />
              </a>
              <a href="#contato" className="nav-cta-btn">
                <Send size={14} />
                <span>Contato</span>
              </a>
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {/* Menu Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="mobile-nav-dropdown">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
              <a
                href="#contato"
                className="mobile-nav-link highlight"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Send size={15} />
                <span>Entrar em Contato</span>
              </a>
            </div>
          )}
        </div>
      </header>

      <div className="container">
        <main>
          <Hero />
          <TechStack />
          <Projects />
          <GithubActivity />
          <Timeline />
          <Publications />
          <Contact />
        </main>

        <footer
          style={{
            textAlign: 'center',
            padding: '3rem 0',
            color: '#64748b',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            marginTop: '2rem',
            fontSize: '0.9rem'
          }}
        >
          <p>
            © {new Date().getFullYear()} {personalData.fullName} (@{personalData.handle}). Desenvolvido com React & Vite.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
