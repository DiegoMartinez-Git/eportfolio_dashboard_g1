import { useState, useEffect } from "react"
import getRoles from "../services/rolesService"


const useRoles = (usuario) => {

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState([])


    function rolesUsuario(usuario) {
        setBuscando(true)
        getRoles().then((data) => {
            if (data[usuario]) {
                setLista(data[usuario].roles)
            } else {
                setLista([])
            }
            setBuscando(false)
        })
    }

    useEffect(() => {
        rolesUsuario(usuario)
    }, [usuario])

    return { lista, buscando }


}

export default useRoles