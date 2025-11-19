function Cabecera(props) {
  return (
    <header>
      <p>HEADER Prueba, {props.usuario}, {props.token}, {props.menu}</p>
    </header>
  );
}

export default Cabecera;