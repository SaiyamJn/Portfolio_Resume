import { useEffect, useRef } from 'react';

type CanvasBackgroundProps = {
  mousePosition: { x: number; y: number };
};

const CanvasBackground = ({ mousePosition }: CanvasBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef(mousePosition);
  const spotsRef = useRef<{ x: number; y: number }[]>([]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 60;
    if (!spotsRef.current.length) {
      spotsRef.current = Array.from({ length: 5 }).map(() => ({
        x: Math.random(),
        y: Math.random()
      }));
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(15,23,42,0.05)';
    ctx.lineWidth = 1;

    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    spotsRef.current.forEach((spot) => {
      const size = 250;
      const x = spot.x * canvas.width;
      const y = spot.y * canvas.height;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, 'rgba(15,23,42,0.04)');
      gradient.addColorStop(1, 'rgba(15,23,42,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    if (mouseRef.current.x && mouseRef.current.y) {
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        150
      );
      gradient.addColorStop(0, 'rgba(15,23,42,0.06)');
      gradient.addColorStop(1, 'rgba(15,23,42,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    mouseRef.current = mousePosition;
    draw();
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default CanvasBackground;

