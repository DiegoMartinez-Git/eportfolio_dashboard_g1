import { useState } from 'react'
import matriculados from '../mocks/mock-matriculados'

const useMisModulosMatriculados = (usuario) => {

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(matriculados[usuario] ? matriculados[usuario].lista : [])
    

    return {lista, buscando}
}
export default useMisModulosMatriculados