import { createEvidencia } from "../services/evidenciasService"
import { useState, useEffect } from "react"

const useEvidencias = () => {

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])

    function nuevaEvidencia(evidencia) {
        setBuscando(true)
        createEvidencia(evidencia).then((data) => {
            setLista([...lista, data])
            setBuscando(false)
        })
    }

    //Uso el useEffect para que se ejecute cada vez que se actualiza la lista y lo muestre, porque si lo pongo
    //En la funcion nueva evidencia o en el componente form la primera vez no se muestra por asincronia
    useEffect(() => {
        if (lista.length > 0) {
            console.log("Evidencia insertada:", lista)
        }
    }, [lista])

    return { nuevaEvidencia, lista, buscando }
}

export default useEvidencias
