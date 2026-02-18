function Cabecera(props) {
  return (
    <header>
      <div className="row">
        <div className="col-12 header text-center">
          <h1>HEADER </h1>
          <h3>Diego Martinez</h3>
          <h4>Su usuario es: {props.usuario}</h4>
        </div>
      </div>
    </header>
  );
}

export default Cabecera;