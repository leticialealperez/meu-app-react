import "./Button.css";

interface ButtonProps {
  texto: string;
  funcaoDeClique?: () => void;
}

function Button(parametro: ButtonProps) {
  return (
    <div className="container-btn">
      <button
        className="my-btn"
        onClick={
          parametro.funcaoDeClique
            ? parametro.funcaoDeClique
            : () => {
                console.log("Nada programado aqui");
              }
        }
      >
        {parametro.texto}
      </button>
    </div>
  );
}

export default Button;
