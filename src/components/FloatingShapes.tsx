import { useEffect, useRef } from "react";
import { theme } from "../config/theme";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function FloatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Use theme colors
    const colors = [
      theme.colors.accent.primary,
      theme.colors.accent.secondary,
      theme.colors.accent.tertiary,
    ];
    const particles: Particle[] = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Use theme background color with transparency
      ctx.fillStyle = theme.colors.background + "1a"; // 10% opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Mouse interaction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx -= (dx / dist) * force * 0.5;
          p.vy -= (dy / dist) * force * 0.5;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "30"; // 30 = ~20% opacity
        ctx.fill();

        // Draw subtle glow
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 8
        );
        gradient.addColorStop(0, p.color + "15"); // 15 = ~8% opacity
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect nearby particles - use theme primary accent color
      ctx.strokeStyle = theme.colors.accent.primary + "0d"; // 5% opacity
      ctx.lineWidth = 0.5;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
