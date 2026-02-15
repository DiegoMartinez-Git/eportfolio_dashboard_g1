import { useContext } from "react";
import TokenContext from "../../context/TokenContext";
import UserContext from "../../context/UserContext";
import NuevaEvidencia from "../NuevaEvidencia/NuevaEvidencia";
import { Route, Routes } from "react-router-dom";
import FuncionalidadEstudiante from "../../pages/FuncionalidadEstudiante";
import FuncionalidadDocente from "../../pages/FuncionalidadDocente";

function Principal(props) {

  const token = useContext(TokenContext)
  const usuario = useContext(UserContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>MAIN</h1>}></Route>
        <Route path='/funcionalidadestudiante/:modulo' element={<FuncionalidadEstudiante />}></Route>
        <Route path='/funcionalidaddocente/:modulo' element={<FuncionalidadDocente />}></Route>
      </Routes>
    </>
  );
}

export default Principal;