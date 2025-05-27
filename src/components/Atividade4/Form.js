import { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Bob");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Sending "${message}" to ${to}`);
  }

  return (
    <div className="component-container">
      <p>
        <strong>Form</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          To:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option>Bob</option>
            <option>Alice</option>
          </select>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
