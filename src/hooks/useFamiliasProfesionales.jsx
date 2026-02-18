import { useState, useEffect } from "react"
import getFamiliasProfesionales from "../services/familiasService"

const useFamiliasProfesionales = () => {
    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])

    function obtenerFamilias() {
        setBuscando(true)
        getFamiliasProfesionales().then((data) => {
            setLista(data)
            setBuscando(false)
        })
    }

    useEffect(() => {
        obtenerFamilias()
    }, [])

    return { lista, buscando }
}

export default useFamiliasProfesionales
