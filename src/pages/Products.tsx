import { useNavigate } from "react-router";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import { listaProdutos } from "../data/products";
import { Fragment } from "react/jsx-runtime";

function Products() {
  const navegador = useNavigate();

  const handleClick = () => {
    navegador("/");
  };

  return (
    <Fragment>
      <Title texto="Products" />

      <Button texto="Voltar para Home" funcaoDeClique={handleClick} />

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {listaProdutos.map((produto) => {
          return (
            <Card
              key={produto.id}
              titulo={produto.titulo}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default Products;
