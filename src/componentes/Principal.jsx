import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import UserContext from "../context/UserContext";
import NuevaEvidencia from "./NuevaEvidencia";

function Principal(props) {

  const token = useContext(TokenContext)
  const usuario = useContext(UserContext)

  return (
    
    <div className="col-9 text-center verde main">
        <main>
      <p>MAIN, {usuario}, {token}, {props.menu}</p>
      <NuevaEvidencia></NuevaEvidencia>
    </main>
        </div>
  );
}

export default Principal;