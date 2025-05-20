import { useEffect, useState } from 'react';
import './Letreiro.css';

export default function Letreiro() {
    const texto = "Bem-vindo à atividade 1!";
    const [exibido, setExibido] = useState('');
    const [indice, setIndice] = useState(0);
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (!apagando) {
                setExibido(texto.slice(0, indice + 1));
                setIndice(prev => prev + 1);
                if (indice === texto.length) {
                    setApagando(true);
                    setTimeout(() => {}, 1000); 
                }
            } else {
                setExibido(texto.slice(0, indice - 1));
                setIndice(prev => prev - 1);
                if (indice === 0) {
                    setApagando(false);
                }
            }
        }, 100); 

        return () => clearInterval(intervalo);
    }, [indice, apagando]);

    return (
        <div className="atv01-letreiro">
            {exibido}
            <span className="cursor">|</span>
        </div>
    );
}
