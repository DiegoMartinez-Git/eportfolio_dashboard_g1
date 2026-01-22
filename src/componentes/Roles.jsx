import { useContext } from "react";
import TokenContext from "../context/TokenContext";
import UserContext from "../context/UserContext";


function Roles(props) {

  const token = useContext(TokenContext)
    const usuario = useContext(UserContext)


  return (
    
    <div className="col-3 text-center gris main">
                                                      <aside>
      <p>ROLES, {usuario}, {token}, {props.menu}</p>
    </aside></div>
  );
}

export default Roles;