const person = {
  name: "Zé comeia",
  theme: {
    backgroundColor: "black",
    color: "pink",
    avatar: {
      width: "300px",
      height: "300px",
      borderRadius: "50%",
    },
    ul: {
      padding: 0,
      listStylePosition: "inside",
    },
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Homem abraçando urso peludo na floresta - {person.name}</h1>
      <img
        style={person.theme.avatar}
        src="https://i.imgur.com/gpXgFWP.jpeg"
        alt="Mouse"
      />
      <ul style={person.theme.ul}>
        <li>Abraçar</li>
        <li>Amar</li>
        <li>Hibernar</li>
        <li>Devorar HUMANO</li>
      </ul>
    </div>
  );
}
