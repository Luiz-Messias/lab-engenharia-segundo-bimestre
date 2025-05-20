const MyButton = ({ texto, onClick, tipo = "mais", desabilitado = false }) => {
    return (
        <button
            className={`botao ${tipo}`}
            onClick={onClick}
            disabled={desabilitado}
        >
            {texto}
        </button>
    );
};

export default MyButton;
