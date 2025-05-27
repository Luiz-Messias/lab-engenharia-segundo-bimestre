import { useState } from "react";

export default function Form3() {
  const [sculpture, setSculpture] = useState({
    name: "Niki de Saint Phalle",
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  });

  function handleChange(e) {
    setSculpture({
      ...sculpture,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="component-container">
      <label>
        Name:
        <input name="name" value={sculpture.name} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input name="title" value={sculpture.title} onChange={handleChange} />
      </label>
      <label>
        City:
        <input name="city" value={sculpture.city} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input name="image" value={sculpture.image} onChange={handleChange} />
      </label>
      <p>
        <b>{sculpture.title}</b> by {sculpture.name}
        <br />
        (located in {sculpture.city})
      </p>
      <img src={sculpture.image} alt={sculpture.title} />
    </div>
  );
}
