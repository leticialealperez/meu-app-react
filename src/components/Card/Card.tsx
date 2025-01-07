import "./Card.css";

interface CardProps {
  titulo: string;
  descricao: string;
  preco: number;
}

function Card(props: CardProps) {
  return (
    <div className="container-card">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
      <h3>
        {props.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        {/* R$ 200,50 */}
      </h3>
    </div>
  );
}

export default Card;
