import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function List() {
  const [name, setName] = useState("");
  const [list, setList] = useState(initialList);

  function handleClick() {
    const insertAt = 1;
    const nextList = [
      ...list.slice(0, insertAt),
      { id: nextId++, title: name },
      ...list.slice(insertAt),
    ];
    setList(nextList);
    setName("");
  }

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Add </button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}
