import { useState } from 'react';
import './styles/global.css';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      {/* Navbar simplificada */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Portfólio.</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#tech" style={{ color: '#fff', textDecoration: 'none' }}>Tecnologias</a>
          <a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projetos</a>
        </div>
      </nav>

      <main>
        <Hero />
        <TechStack />
        <Timeline />
        <Projects />
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem 0', color: '#64748b' }} >
        <p>© 2026 Desenvolvedora Misians.</p>
      </footer>
    </div>
  )
}

export default App
