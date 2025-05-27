import { useState } from "react";
import "../../Atividade4/Atv04.css";

// Componente de forma
function Shape({ type, offset }) {
  const classes = `shape ${type}`;
  return (
    <div
      className={classes}
      style={{ marginTop: type === "circle" ? `${offset}px` : 0 }}
    />
  );
}

// Componente principal
export default function ShapeEditor() {
  const [circleOffset, setCircleOffset] = useState(0);

  const moveCirclesDown = () => {
    setCircleOffset((prev) => prev + 20);
  };

  const shapes = [
    { id: 1, type: "circle" },
    { id: 2, type: "square" },
    { id: 3, type: "circle" },
  ];

  return (
    <div className="shape-editor">
      <h1>ShapeEditor</h1>
      <div className="box">
        <button className="move-button" onClick={moveCirclesDown}>
          Move circles down!
        </button>
        <div className="shape-row">
          {shapes.map((shape) => (
            <Shape key={shape.id} type={shape.type} offset={circleOffset} />
          ))}
        </div>
      </div>
    </div>
  );
}
