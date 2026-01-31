import { useContext } from "react";
import TokenContext from "../../context/TokenContext";
import UserContext from "../../context/UserContext";
import useRoles from '../../hooks/useRoles'
import MenuDinamicoRoles from "../MenuDinamicoRoles/MenuDinamicoRoles";

function Roles(props) {

  const token = useContext(TokenContext)
  const usuario = useContext(UserContext)
  const roles = useRoles(usuario)

  return (

    <div className="col-3 text-center gris main">
      <aside>
        <p>ROLES, {usuario}, {token}, {props.menu}</p>
      </aside>
      <MenuDinamicoRoles roles={roles} usuario={usuario}></MenuDinamicoRoles>
    </div>
  );
}

export default Roles;