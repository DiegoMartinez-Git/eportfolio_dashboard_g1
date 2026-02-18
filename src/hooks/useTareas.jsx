import { useState, useEffect } from "react"
import { getTareas } from "../services/tareasService"

const useTareas = () => {
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])

    function obtenerTareas() {
        setBuscando(true)
        getTareas().then((data) => {
            setLista(data.lista)
            setBuscando(false)
        })
    }

    useEffect(() => {
        obtenerTareas()
    }, [])

    return { lista, buscando }
}

export default useTareas
