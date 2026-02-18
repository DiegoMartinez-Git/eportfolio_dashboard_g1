import { useState } from "react"
import impartidos from "../mocks/mock-impartidos"

const useMisModulosImpartidos = (usuario) => {
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(impartidos[usuario] ? impartidos[usuario].lista : [])
    
    return { lista, buscando }
}

export default useMisModulosImpartidos