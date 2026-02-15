import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera.jsx'
import Principal from './componentes/Principal/Principal.jsx'
import Roles from './componentes/Roles/Roles.jsx'
import TokenContext from './context/TokenContext.jsx'
import UserContext from './context/UserContext.jsx'

function App() {

  const nombre = "Victor"
  const [user, setUser] = useState(nombre)


  const token = "diegoToken"

  return (
    <TokenContext.Provider value={token}>
      <div className="container-fluid">
        <Cabecera usuario={user}></Cabecera>
        <UserContext.Provider value={user}>
          <div className="row">
            <Roles/>
            <div className="col-9 text-center verde main">
              <Principal/>
            </div>
          </div>
        </UserContext.Provider>
      </div>
    </TokenContext.Provider>
  )
}

export default App
