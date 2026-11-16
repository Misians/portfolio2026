import React, { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: null, y: null, radius: 170 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Paleta de cores dos nós (Cyan, Roxo e Indigo)
    const palette = [
      { r: 56, g: 189, b: 248 },  // #38bdf8
      { r: 168, g: 85, b: 247 },  // #a855f7
      { r: 129, g: 140, b: 248 }, // #818cf8
    ];

    const nodeCount = Math.min(Math.floor((width * height) / 16000), 85);
    const maxDistance = 165;

    const nodes = Array.from({ length: nodeCount }, () => {
      const color = palette[Math.floor(Math.random() * palette.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 2 + 1.4,
        color,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    });

    // Pulsos sinápticos viajando pelas arestas do grafo
    const pulses = [];

    const spawnPulse = (n1, n2) => {
      if (pulses.length > 18) return;
      pulses.push({
        from: n1,
        to: n2,
        progress: 0,
        speed: 0.015 + Math.random() * 0.018,
        color: n1.color,
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Atualiza posição dos nós
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulsePhase += 0.03;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Interação suave com o cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius && dist > 0) {
            n.x += (dx / dist) * 0.35;
            n.y += (dy / dist) * 0.35;
          }
        }
      }

      // Desenha arestas do grafo entre nós próximos
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(${n1.color.r}, ${n1.color.g}, ${n1.color.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Dispara ocasionalmente um pulso neural na conexão
            if (Math.random() < 0.0007) {
              spawnPulse(n1, n2);
            }
          }
        }

        // Conexão com o cursor do mouse
        if (mouse.x !== null && mouse.y !== null) {
          const n1 = nodes[i];
          const dx = n1.x - mouse.x;
          const dy = n1.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // Atualiza e desenha pulsos sinápticos nas arestas
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const px = p.from.x + (p.to.x - p.from.x) * p.progress;
        const py = p.from.y + (p.to.y - p.from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.85)`;
        ctx.shadowColor = `rgb(${p.color.r}, ${p.color.g}, ${p.color.b})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Desenha os nós (neurônios / vértices)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const glow = 0.55 + Math.sin(n.pulsePhase) * 0.25;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${glow})`;
        ctx.fill();

        // Halo suave ao redor do nó
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, 0.08)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default NeuralBackground;
