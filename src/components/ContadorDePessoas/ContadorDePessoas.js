import { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "./ContadorDePessoas.css";
import homemImg from "../../assets/homem.jpg";
import mulherImg from "../../assets/mulher.jpg";

const ContadorDePessoas = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="card">
      <div className="topo">
        <h1>Total</h1>
        <button className="reset-btn" onClick={resetar}>
          🔄
        </button>
      </div>
      <div className="total-box">{homens + mulheres}</div>
      <div className="generos">
        <div className="genero">
          <img src={homemImg} alt="Homem" />
          <div className="botoes">
            <MyButton
              texto="+"
              tipo="mais"
              onClick={() => setHomens(homens + 1)}
            />
            <MyButton
              texto="-"
              tipo="menos"
              onClick={() => homens > 0 && setHomens(homens - 1)}
              desabilitado={homens === 0}
            />
          </div>
          <p>Homens</p>
          <div className="valor">{homens}</div>
        </div>
        <div className="genero">
          <img src={mulherImg} alt="Mulher" />
          <div className="botoes">
            <MyButton
              texto="+"
              tipo="mais"
              onClick={() => setMulheres(mulheres + 1)}
            />
            <MyButton
              texto="-"
              tipo="menos"
              onClick={() => mulheres > 0 && setMulheres(mulheres - 1)}
              desabilitado={mulheres === 0}
            />
          </div>
          <p>Mulheres</p>
          <div className="valor">{mulheres}</div>
        </div>
      </div>
    </div>
  );
};

export default ContadorDePessoas;
