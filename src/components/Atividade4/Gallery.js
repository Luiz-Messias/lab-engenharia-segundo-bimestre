import { useState } from "react";

const sculptureList = [
  {
    name: "Homenaje a la Neurocirugía",
    artist: "Marta Colvin Andrade",
    description:
      "Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.",
    url: "https://i.imgur.com/Mx7dA2Y.jpg",
    alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips.",
  },
  {
    name: "Floralis Genérica",
    artist: "Eduardo Catalano",
    description:
      "This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
    url: "https://i.imgur.com/ZF6s192m.jpg",
    alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.",
  },
  {
    name: "Eternal Presence",
    artist: "John Woodrow Wilson",
    description:
      "Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind.",
    url: "https://i.imgur.com/aTtVpES.jpg",
    alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.",
  },
  {
    name: "Lamborghini Diablo VT",
    artist: "Automobili Lamborghini S.p.A.",
    description: "Papa gato",
    url: "https://i.imgur.com/cvJZZKd.jpeg",
    alt: "Lamborghini Diablo VT vermelho estacionado em uma estrada, exibindo suas linhas aerodinâmicas e faróis escamoteáveis.",
  },
  {
    name: "Lamborghini Diablo VT",
    artist: "Automobili Lamborghini S.p.A.",
    description: "Papa gato",
    url: "https://i.imgur.com/9JoCZaa.jpeg",
    alt: "Lamborghini Diablo VT vermelho estacionado em uma estrada, exibindo suas linhas aerodinâmicas e faróis escamoteáveis.",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const sculpture = sculptureList[index];

  function handleNextClick() {
    setIndex((prev) => (prev + 1) % sculptureList.length);
  }

  return (
    <div className="component-container">
      <p>
        <strong>Gallery</strong>
      </p>
      <button onClick={handleNextClick}>Next</button>
      <h3>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h3>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.name} />
    </div>
  );
}
