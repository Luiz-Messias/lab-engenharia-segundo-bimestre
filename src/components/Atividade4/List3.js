import { useState } from "react";

export default function List3() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([
    "Marta Colvin Andrade",
    "Teste",
    "Lamidi Olonade Fakeye",
    "Louise Nevelson",
  ]);

  function handleClick() {
    if (name.trim() !== "") {
      setArtists([...artists, name]);
      setName("");
    }
  }

  return (
    <div className="component-container">
      <h3>Inspiring sculptors:</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add artist"
      />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist, index) => (
          <li key={index}>{artist}</li>
        ))}
      </ul>
    </div>
  );
}
