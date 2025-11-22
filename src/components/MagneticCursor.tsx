import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const speed = 0.15;
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      // Update main cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }

      // Update dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${mouseX}px`;
        cursorDotRef.current.style.top = `${mouseY}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle - solid white fill */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 -ml-8 -mt-8 rounded-full pointer-events-none z-9999"
        style={{ 
          mixBlendMode: "difference",
          backgroundColor: "white"
        }}
      />

      {/* Center dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 -ml-1 -mt-1 bg-white rounded-full pointer-events-none z-9999"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
