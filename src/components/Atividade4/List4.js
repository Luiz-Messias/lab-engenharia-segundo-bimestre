import { useState } from "react";

export default function List4() {
  const [reverse, setReverse] = useState(false);

  const items = ["Big Bellies", "Lunar Landscape", "Terracotta Army"];
  const list = reverse ? [...items].reverse() : items;

  return (
    <div className="component-container">
      <button onClick={() => setReverse(!reverse)}>Reverse</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
