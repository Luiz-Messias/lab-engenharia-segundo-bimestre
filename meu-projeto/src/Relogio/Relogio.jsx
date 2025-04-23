import { useEffect, useState } from "react";
import "./Relogio.css";

export default function Relogio() {
  const [horario, setHorario] = useState(getHorarioAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHorario(getHorarioAtual());
    }, 1000);

    return () => clearInterval(intervalo); 
  }, []);

  function getHorarioAtual() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }

  return (
    <div className="relogio">
      <h1>{horario}</h1>
    </div>
  );
}
