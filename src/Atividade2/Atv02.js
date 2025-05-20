import ContadorDePessoas from "../components/ContadorDePessoas/ContadorDePessoas";
import { Link } from "react-router-dom";
import "./Atv02.css";

const Atv02 = () => {
  return (
    <div className="atv02-container">
      <h1 className="atv02-title">Atividade 2 - Contador de Pessoas</h1>
      <div className="contador-card">
        <ContadorDePessoas />
      </div>
      <Link className="atv02-link" to="/">
        Voltar
      </Link>
    </div>
  );
};

export default Atv02;
