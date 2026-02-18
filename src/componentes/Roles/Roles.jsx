import { useContext } from "react";
import TokenContext from "../../context/TokenContext";
import UserContext from "../../context/UserContext";
import useRoles from '../../hooks/useRoles'
import MenuDinamicoRoles from "../MenuDinamicoRoles/MenuDinamicoRoles";
import Loader from "../Loader/Loader";

function Roles() {

  const token = useContext(TokenContext)
  const usuario = useContext(UserContext)
  const roles = useRoles(usuario)

  return (

    <div className="col-3 text-center gris main">
      <aside>
        <h1>ROLES</h1>
        <p>Usuario: <strong>{usuario}</strong>, Token: <strong>{token}</strong></p>
      </aside>
      {roles.buscando ? <Loader /> : <MenuDinamicoRoles roles={roles} usuario={usuario}></MenuDinamicoRoles>}
    </div>
  );
}

export default Roles;