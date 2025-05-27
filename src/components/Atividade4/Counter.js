import { useState } from "react";
import "../../Atividade4/Atv04.css";

export default function Counter() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore(score + 3);
  }

  return (
    <div className="component-container">
      <p>
        <strong>Counter</strong>
      </p>
      <div className="counter-row">
        <h1>{score}</h1>
        <button onClick={handleClick}>+3</button>
      </div>
    </div>
  );
}
