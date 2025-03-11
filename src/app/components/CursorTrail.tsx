// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  vx: number;
  vy: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.life = 1;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= 0.01;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(235, 106, 30, ${this.life})`; // Using your brand orange color
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animateTrail = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw(ctx);
        if (particlesRef.current[i].life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animateTrail);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      for (let i = 0; i < 5; i++) {
        particlesRef.current.push(new Particle(x, y));
      }
    };

    // Initial setup
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ 
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default CursorTrail;