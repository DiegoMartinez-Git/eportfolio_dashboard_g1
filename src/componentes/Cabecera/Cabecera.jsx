import { useContext } from "react";
import TokenContext from "../../context/TokenContext";

function Cabecera(props) {
  const token = useContext(TokenContext)
  return (
    <header>
      <div className="row">
        <div className="col-12 header text-center">
          <p>HEADER, {props.usuario}, {token}, {props.menu}</p>
        </div>
      </div>
    </header>
  );
}

export default Cabecera;