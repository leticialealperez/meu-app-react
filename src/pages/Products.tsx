import { useNavigate } from "react-router";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

const listaProdutos = [
  {
    titulo: "Produto 1",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    preco: 200.5,
  },
  {
    titulo: "Produto 2",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    preco: 200.5,
  },
  {
    titulo: "Produto 3",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    preco: 200.5,
  },
];

function Products() {
  const navegador = useNavigate();

  return (
    <>
      <Title texto="Products" />

      <Button
        texto="Voltar para Home"
        funcaoDeClique={() => {
          navegador("/");
        }}
      />

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {listaProdutos.map((produto) => {
          return (
            <Card
              titulo={produto.titulo}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          );
        })}
      </div>
    </>
  );
}

export default Products;
