import { useContext } from "react";
import TokenContext from "../../context/TokenContext";

function Cabecera(props) {
  const token = useContext(TokenContext)
  return (
    <header>
      <div className="row">
        <div className="col-12 header text-center">
          <h1>HEADER </h1>
          <h2>DIEGO MARTÍNEZ</h2>
          <p>TOKEN: {token}</p>
        </div>
      </div>
    </header>
  );
}

export default Cabecera;