import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function List2() {
  const [list, setList] = useState(initialList);

  function handleClick(artworkId) {
    setList(list.filter((a) => a.id !== artworkId));
  }

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>
            {artwork.title}{" "}
            <button onClick={() => handleClick(artwork.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
