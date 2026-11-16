import React, { useEffect, useState, useMemo } from 'react';
import GlassCard from './GlassCard';
import { personalData } from '../data/content';
import { Github, GitCommit, ExternalLink, Calendar, Star, GitFork } from 'lucide-react';

const NEON_COLORS = [
  'rgba(255, 255, 255, 0.05)', // level 0
  'rgba(56, 189, 248, 0.25)',  // level 1
  'rgba(56, 189, 248, 0.5)',   // level 2
  '#38bdf8',                   // level 3
  '#a855f7',                   // level 4
];

const MONTHS_PT = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const GithubActivity = () => {
  const [contributions, setContributions] = useState([]);
  const [totalLastYear, setTotalLastYear] = useState(null);
  const [profileStats, setProfileStats] = useState(null);
  const [recentRepos, setRecentRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubData() {
      try {
        const [contribRes, userRes, reposRes] = await Promise.allSettled([
          fetch('https://github-contributions-api.jogruber.de/v4/Misians?y=last'),
          fetch('https://api.github.com/users/Misians'),
          fetch('https://api.github.com/users/Misians/repos?sort=updated&per_page=4'),
        ]);

        if (!isMounted) return;

        if (contribRes.status === 'fulfilled' && contribRes.value.ok) {
          const data = await contribRes.value.json();
          if (data && Array.isArray(data.contributions)) {
            setContributions(data.contributions);
            setTotalLastYear(data.total?.lastYear ?? data.contributions.reduce((acc, d) => acc + d.count, 0));
          }
        }

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          const userData = await userRes.value.json();
          setProfileStats(userData);
        }

        if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
          const reposData = await reposRes.value.json();
          if (Array.isArray(reposData)) {
            setRecentRepos(reposData.slice(0, 3));
          }
        }
      } catch {
        // Silencioso; usa fallback visual caso offline
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGithubData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Agrupa os dias em semanas (colunas de 7 dias, Domingo a Sábado)
  const { weeks, monthLabels } = useMemo(() => {
    if (!contributions.length) return { weeks: [], monthLabels: [] };

    const cols = [];
    let currentWeek = [];

    const firstDate = new Date(contributions[0].date + 'T00:00:00');
    const firstDayOfWeek = firstDate.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    contributions.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        cols.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      cols.push(currentWeek);
    }

    const labels = [];
    let lastMonth = -1;
    cols.forEach((week, colIdx) => {
      const firstValid = week.find((d) => d !== null);
      if (firstValid) {
        const m = new Date(firstValid.date + 'T00:00:00').getMonth();
        if (m !== lastMonth) {
          labels.push({ month: MONTHS_PT[m], colIdx });
          lastMonth = m;
        }
      }
    });

    return { weeks: cols, monthLabels: labels };
  }, [contributions]);

  const formatDateBR = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
  };

  return (
    <section id="github" style={{ padding: '4.5rem 0' }}>
      <div className="section-header">
        <span className="section-eyebrow">
          <Github size={14} /> Open Source & Código
        </span>
        <h2 className="section-title">Atividade no GitHub</h2>
        <p className="section-subtitle">
          Mural de contribuições em tempo real sincronizado diretamente com{' '}
          <a
            href={personalData.links.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}
          >
            @Misians
          </a>
          .
        </p>
      </div>

      <GlassCard>
        {/* Cabeçalho do Card de Contribuições */}
        <div className="gh-header">
          <div className="gh-header-left">
            <div className="gh-avatar-badge">
              <Github size={22} color="#38bdf8" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '0.15rem' }}>
                {totalLastYear !== null
                  ? `${totalLastYear} contribuições no último ano`
                  : 'Mural de Contribuições (@Misians)'}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
                {profileStats
                  ? `${profileStats.public_repos} repositórios públicos • Atualizado automaticamente via GitHub API`
                  : 'Commits, Pull Requests e projetos públicos no GitHub'}
              </p>
            </div>
          </div>

          <div className="gh-header-actions">
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noreferrer"
              className="gh-profile-link"
            >
              <span>Ver Perfil</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Grade de Quadradinhos Neon (Mural de Contribuições) */}
        <div className="gh-calendar-wrapper">
          {loading ? (
            <div style={{ padding: '2.5rem 0', textAlign: 'center', color: '#94a3b8' }}>
              Carregando mural de contribuições do GitHub...
            </div>
          ) : weeks.length > 0 ? (
            <div className="gh-calendar-scroll">
              {/* Linha dos Meses */}
              <div
                className="gh-months-row"
                style={{ gridTemplateColumns: `repeat(${weeks.length}, 13px)` }}
              >
                {weeks.map((_, idx) => {
                  const found = monthLabels.find((m) => m.colIdx === idx);
                  return (
                    <span key={idx} className="gh-month-label">
                      {found ? found.month : ''}
                    </span>
                  );
                })}
              </div>

              {/* Grid Semanal Neon */}
              <div className="gh-grid">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="gh-week-col">
                    {week.map((day, dIdx) => {
                      if (!day) {
                        return <span key={dIdx} className="gh-day-cell empty" />;
                      }
                      const bg = NEON_COLORS[day.level] || NEON_COLORS[0];
                      return (
                        <span
                          key={day.date}
                          className={`gh-day-cell level-${day.level}`}
                          style={{
                            backgroundColor: bg,
                            boxShadow:
                              day.level >= 3
                                ? '0 0 8px rgba(56, 189, 248, 0.5)'
                                : 'none',
                          }}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ overflowX: 'auto', padding: '1rem 0', textAlign: 'center' }}>
              <img
                src="https://ghchart.rshah.org/38bdf8/Misians"
                alt="Gráfico de contribuições do GitHub de Misians"
                style={{ maxWidth: '100%', minWidth: '680px' }}
              />
            </div>
          )}

          {/* Rodapé do Mural: Tooltip Interativo + Legenda Menos/Mais */}
          <div className="gh-calendar-footer">
            <div className="gh-tooltip-status">
              <Calendar size={14} color="#38bdf8" />
              {hoveredDay ? (
                <span>
                  <strong>
                    {hoveredDay.count === 0
                      ? 'Nenhuma contribuição'
                      : `${hoveredDay.count} ${hoveredDay.count === 1 ? 'contribuição' : 'contribuições'}`}
                  </strong>{' '}
                  em {formatDateBR(hoveredDay.date)}
                </span>
              ) : (
                <span>Passe o mouse sobre os quadradinhos para ver os detalhes de cada dia</span>
              )}
            </div>

            <div className="gh-legend">
              <span>Menos</span>
              {[0, 1, 2, 3, 4].map((lvl) => (
                <span
                  key={lvl}
                  className="gh-day-cell"
                  style={{ backgroundColor: NEON_COLORS[lvl], cursor: 'default' }}
                />
              ))}
              <span>Mais</span>
            </div>
          </div>
        </div>

        {/* Repositórios Atualizados Recentemente no GitHub */}
        {recentRepos.length > 0 && (
          <div className="gh-recent-repos">
            <div className="gh-recent-title">
              <GitCommit size={15} color="#38bdf8" />
              <span>Repositórios Públicos Recentes em @Misians</span>
            </div>
            <div className="gh-repos-grid">
              {recentRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="gh-repo-mini-card"
                >
                  <div className="gh-repo-top">
                    <span className="gh-repo-name">{repo.name}</span>
                    <ExternalLink size={13} color="#64748b" />
                  </div>
                  <p className="gh-repo-desc">
                    {repo.description || 'Repositório público no GitHub de Artemísia Kimberlly.'}
                  </p>
                  <div className="gh-repo-meta">
                    {repo.language && (
                      <span className="gh-repo-lang">
                        <span className="lang-dot" />
                        {repo.language}
                      </span>
                    )}
                    <span className="gh-repo-stat">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="gh-repo-stat">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </GlassCard>
    </section>
  );
};

export default GithubActivity;
