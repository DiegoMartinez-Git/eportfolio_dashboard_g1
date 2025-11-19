import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera.jsx'
import Principal from './componentes/Principal.jsx'
import Roles from './componentes/Roles.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid">
      <header>
        <div className="row">
          <div className="col-12 header">
            <p className="text-center"><Cabecera></Cabecera></p>
          </div>
        </div>
      </header>
      <div className="row">
        <div className="col-3 text-center gris main"><Roles></Roles></div>
        <div className="col-9 text-center verde main"><Principal></Principal></div>
      </div>
    </div>
  )
}

export default App
