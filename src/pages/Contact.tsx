import { useNavigate } from "react-router";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";

function Contact() {
  const navegador = useNavigate();

  return (
    <>
      <Title texto="Contact" />
      <Button
        texto="Ir para Produtos"
        funcaoDeClique={() => {
          navegador("/products");
        }}
      />
    </>
  );
}

export default Contact;
