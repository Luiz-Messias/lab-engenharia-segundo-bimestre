import './Relogio.css';
import { useEffect, useState } from 'react';

export default function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatarHora = (data) => {
    return data.toLocaleTimeString();
  };

  return (
    <div className="relogio-container">
      {formatarHora(horaAtual)}
    </div>
  );
}
