import { useState } from "react"
import roles from '../mocks/mock-roles'

const useRoles = (usuario)  => {

    const [buscando, setBuscando] = useState(false)
    const [lista, setLista] = useState(roles[usuario] ? roles[usuario].roles : [])

    return {lista, buscando}
}

export default useRoles