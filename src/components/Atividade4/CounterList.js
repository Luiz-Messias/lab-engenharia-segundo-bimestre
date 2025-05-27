import { useState } from "react";
import "../../Atividade4/Atv04.css";

export default function CounterList() {
  const initialCounters = [0, 0, 0];
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div className="component-container">
      <h2>CounterList</h2>
      <ul>
        {counters.map((counter, i) => (
          <li key={i} className="counter-item">
            {counter}
            <button onClick={() => handleIncrementClick(i)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
