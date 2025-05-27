import { useState } from "react";

const initialItems = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialItems);
  const [yourList, setYourList] = useState(initialItems);

  function handleToggle(list, setList, id) {
    const updated = list.map((item) =>
      item.id === id ? { ...item, seen: !item.seen } : item
    );
    setList(updated);
  }

  return (
    <div className="component-container">
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <List
        items={myList}
        onToggle={(id) => handleToggle(myList, setMyList, id)}
      />
      <h2>Your list of art to see:</h2>
      <List
        items={yourList}
        onToggle={(id) => handleToggle(yourList, setYourList, id)}
      />
    </div>
  );
}

function List({ items, onToggle }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.seen}
              onChange={() => onToggle(item.id)}
            />{" "}
            {item.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
