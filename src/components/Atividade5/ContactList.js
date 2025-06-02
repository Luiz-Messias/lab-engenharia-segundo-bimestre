export default function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <h2 className="contact-list-title">Contacts</h2>
      <ul className="contact-list-ul">
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              className={`contact-button ${
                selectedContact?.email === contact.email ? "selected" : ""
              }`}
              onClick={() => onSelect(contact)}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
