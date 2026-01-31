import { useContext } from "react";
import TokenContext from "../../context/TokenContext";
import UserContext from "../../context/UserContext";
import NuevaEvidencia from "../NuevaEvidencia/NuevaEvidencia";
import { Route, Routes } from "react-router-dom";

function Principal(props) {

  const token = useContext(TokenContext)
  const usuario = useContext(UserContext)

  return (
    <p>MAIN, {usuario}, {token}, {props.menu}</p>
  );
}

export default Principal;