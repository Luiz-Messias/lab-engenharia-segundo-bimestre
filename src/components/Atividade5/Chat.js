import { useState } from "react";
import "./components.css";

export default function Chat({ contact }) {
  const [text, setText] = useState("");

  function submitMessage() {
    if (text.trim() === "") {
      alert("Please enter a message.");
      return;
    }
    alert(`Message sent to ${contact?.email}: ${text}`);
    setText("");
  }

  return (
    <section className="chat-container">
      <h2 className="chat-title">Chat with {contact?.name}</h2>
      <textarea
        className="chat-textarea"
        value={text}
        placeholder={"Write your message..."}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="chat-button" onClick={submitMessage}>
        Send to {contact?.email}
      </button>
    </section>
  );
}
