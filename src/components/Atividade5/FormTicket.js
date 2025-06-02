import { useState } from "react";
import "./components.css"; // Vamos criar esse CSS

export default function FormTicket() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <section className="form-ticket">
      <h2 className="form-title">Let's check you in</h2>

      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <p className="ticket-info">
        Your ticket will be issued to: <b>{fullName || "—"}</b>
      </p>
    </section>
  );
}
