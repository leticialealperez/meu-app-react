import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import { useNavigate } from "react-router";

function Home() {
  const navegador = useNavigate();

  return (
    <>
      <Title texto="Home" />
      <Button
        texto="Ir para Contatos"
        funcaoDeClique={() => {
          navegador("/contact");
        }}
      />
    </>
  );
}

export default Home;
