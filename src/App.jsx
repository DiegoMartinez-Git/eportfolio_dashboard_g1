import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/Cabecera.jsx'
import Principal from './componentes/Principal.jsx'
import Roles from './componentes/Roles.jsx'
import TokenContext from './context/TokenContext.jsx'
import UserContext from './context/UserContext.jsx'


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
            <Principal 
              menu={menu}>
            </Principal>
          </div>
        </UserContext.Provider>
      </div>
    </TokenContext.Provider>
  )
}

export default App
