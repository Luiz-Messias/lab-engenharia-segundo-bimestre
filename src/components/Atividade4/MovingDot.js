import { useState, useRef } from "react";
import "../../Atividade4/Atv04.css";

export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const radius = 10; // metade do tamanho da bola (20px)

    let x = e.clientX - rect.left - radius;
    let y = e.clientY - rect.top - radius;

    // Restringe a bola dentro dos limites do container
    x = Math.max(0, Math.min(x, rect.width - radius * 2));
    y = Math.max(0, Math.min(y, rect.height - radius * 2));

    setPosition({ x, y });
  };

  return (
    <div
      className="mouse-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className="ponto"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
}
