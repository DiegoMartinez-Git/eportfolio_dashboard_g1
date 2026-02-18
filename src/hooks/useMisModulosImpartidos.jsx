import { useState, useEffect } from "react"
import { getModulosImpartidos } from "../services/modulosService"

const useMisModulosImpartidos = (usuario) => {
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])

    function misModulosImpartidos(usuario) {
        setBuscando(true)
        getModulosImpartidos().then((data) => {
            if (data[usuario]) {
                setLista(data[usuario].lista)
            } else {
                setLista([])
            }
            setBuscando(false)
        })
    }



    useEffect(() => {
        misModulosImpartidos(usuario)
    }, [usuario])

    return { lista, buscando }
}

export default useMisModulosImpartidos