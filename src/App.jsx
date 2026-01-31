import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera.jsx'
import Principal from './componentes/Principal/Principal.jsx'
import Roles from './componentes/Roles/Roles.jsx'
import TokenContext from './context/TokenContext.jsx'
import UserContext from './context/UserContext.jsx'
import { Route, Routes } from 'react-router-dom'
import FuncionalidadEstudiante from './pages/funcionalidadEstudiante.jsx'
import FuncionalidadDocente from './pages/funcionalidadDocente.jsx'

function App() {

  const nombre = "Victor"
  const [user, setUser] = useState(nombre)


  const token = "token"
  const menu = "Inicio, Perfil, Configuración"

  return (
    <TokenContext.Provider value={token}>
      <div className="container-fluid">
        <Cabecera usuario={user}
          menu={menu}
        ></Cabecera>
        <UserContext.Provider value={user}>
          <div className="row">
            <Roles
              menu={menu}>
            </Roles>
            <div className="col-9 text-center verde main">
              <Routes>
                <Route path='/' element={<Principal menu={menu} />}></Route>
                <Route path='/funcionalidadestudiante/:modulo' element={<FuncionalidadEstudiante />}></Route>
                <Route path='/funcionalidaddocente/:modulo' element={<FuncionalidadDocente />}></Route>
              </Routes>
            </div>
          </div>
        </UserContext.Provider>
      </div>
    </TokenContext.Provider>
  )
}

export default App
