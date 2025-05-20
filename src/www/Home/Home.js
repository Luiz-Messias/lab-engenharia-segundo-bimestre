// Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* cartão glassmorphism */}
      <section className="home-card">
        <h1 className="home-title">Sistema de Atividades</h1>
        <p className="home-subtitle">Escolha uma das opções abaixo:</p>

        <nav className="home-menu">
          <Link className="home-button" to="/atv01">
            Atividade 01
          </Link>
          <Link className="home-button" to="/atv02">
            Atividade 02
          </Link>
          <Link className="home-button" to="/atv03">
            Atividade 03
          </Link>
          <Link className="home-button" to="/atv04">
            Atividade 04
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default Home;
