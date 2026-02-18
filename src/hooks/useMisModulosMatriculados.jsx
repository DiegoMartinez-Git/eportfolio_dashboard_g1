import { useState, useEffect } from 'react'
import { getModulosMatriculados } from '../services/modulosService'

const useMisModulosMatriculados = (usuario) => {

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])

    function misModulosMatriculados(usuario) {
        setBuscando(true)
        getModulosMatriculados().then((data) => {
            if (data[usuario]) {
                setLista(data[usuario].lista)
            } else {
                setLista([])
            }
            setBuscando(false)
        })
    }

    useEffect(() => {
        misModulosMatriculados(usuario)
    }, [usuario])

    return { lista, buscando }

}
export default useMisModulosMatriculados