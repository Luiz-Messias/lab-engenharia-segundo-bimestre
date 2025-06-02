import "./Atv05.css";
import { Link } from "react-router-dom";

import Accordion from "../components/Atividade5/Accordion";
import FormQuiz from "../components/Atividade5/FormQuiz";
import FormTicket from "../components/Atividade5/FormTicket";
import Messenger from "../components/Atividade5/Messenger";

export default function Atv05() {
  return (
    <div className="page">
      <h1 className="main-title">Atividade Aula 12</h1>

      <Section>
        <div className="component-box">
          <Accordion />
        </div>
      </Section>

      <Section>
        <div className="component-box">
          <FormQuiz />
        </div>
      </Section>
      <Section>
        <div className="component-box">
          <FormTicket />
        </div>
      </Section>
      <Section>
        <div className="component-box">
          <Messenger />
        </div>
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
