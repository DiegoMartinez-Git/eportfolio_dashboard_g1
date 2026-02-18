import { useContext } from "react";
import TokenContext from "../../context/TokenContext";
import UserContext from "../../context/UserContext";
import { Route, Routes } from "react-router-dom";
import FuncionalidadEstudiante from "../../pages/FuncionalidadEstudiante";
import FuncionalidadDocente from "../../pages/FuncionalidadDocente";
import PaginaFamiliasProfesionales from "../../pages/PaginaFamiliasProfesionales";
import useRoles from "../../hooks/useRoles";
import Loader from "../Loader/Loader";

function Principal(props) {

  const token = useContext(TokenContext)
  const usuario = useContext(UserContext)
  const roles = useRoles(usuario)

  if (roles.buscando) {
    return <Loader />
  }

  return (
    <div className="col-9 text-center fondo-main main">
      <Routes>
        <Route path="/" element={<h1>MAIN</h1>}></Route>
        {roles.lista.includes("estudiante") && <Route path='/funcionalidadestudiante/:modulo' element={<FuncionalidadEstudiante />}></Route>}
        {roles.lista.includes("docente") && <Route path='/funcionalidaddocente/:modulo' element={<FuncionalidadDocente />}></Route>}
        {roles.lista.includes("administrador") && <Route path='/familiasprofesionales' element={<PaginaFamiliasProfesionales />}></Route>}
      </Routes>
    </div>
  );
}

export default Principal;