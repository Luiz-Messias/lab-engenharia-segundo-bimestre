import "./Atv04.css";
import { Link } from "react-router-dom";

import Toolbar from "../components/Atividade4/Toolbar";
import Gallery from "../components/Atividade4/Gallery";
import Counter from "../components/Atividade4/Counter";
import Form from "../components/Atividade4/Form";
import MovingDot from "../components/Atividade4/MovingDot";
import Form2 from "../components/Atividade4/Form2";
import Form3 from "../components/Atividade4/Form3";
import List from "../components/Atividade4/List";
import List2 from "../components/Atividade4/List2";
import ShapeEditor from "../components/Atividade4/ShapeEditor";
import CounterList from "../components/Atividade4/CounterList";
import List3 from "../components/Atividade4/List3";
import List4 from "../components/Atividade4/List4";
import BucketList from "../components/Atividade4/BucketList";

export default function Atv04() {
  return (
    <div className="page">
      <h1 className="main-title">Atividade Aula 11 - Componentes React</h1>

      <Section>
        <ShapeEditor />
      </Section>

      <Section title="Ações com Propriedades">
        <Toolbar
          onPlayMovie={() => alert("Playing!")}
          onUploadImage={() => alert("Uploading!")}
        />
      </Section>

      <Section title="Gerenciamento de Estado e Comportamentos">
        <Gallery />
        <Form />
      </Section>

      <Section title="Estados com Objetos Dinâmicos">
        <MovingDot />
        <Form2 />
        <Form3 />
      </Section>

      <Section title="Renderização de Listas e Mutabilidade">
        <Counter />
        <List />
        <List2 />
        <CounterList />
      </Section>

      <Section title="Atualização Reativa de Listas">
        <List3 />
        <List4 />
        <BucketList />
      </Section>

      <Link to="/" className="botao-voltar">
        Voltar
      </Link>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="component-box">{children}</div>
    </section>
  );
}
