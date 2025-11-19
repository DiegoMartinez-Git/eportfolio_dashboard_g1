function Cabecera(props) {
  return (
    <header>
      <p>HEADER, {props.usuario}, {props.token}, {props.menu}</p>
    </header>
  );
}

export default Cabecera;