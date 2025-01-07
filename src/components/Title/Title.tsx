import "./Title.css";

interface TitleProps {
  texto?: string;
}

function Title(props: TitleProps) {
  // !== null, undefined, "" ou 0

  // if(!props.texto) {
  //   return null
  // }

  // return <h1>{props.texto}</h1>;

  return <>{props.texto ? <h1>{props.texto}</h1> : null}</>;
}

export default Title;
