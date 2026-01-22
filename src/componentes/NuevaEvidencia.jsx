import { useState } from "react"
import SelectorTareaRA from "./SelectorTareaRA"
import NuevaEvidenciaForm from "./NuevaEvidenciaForm"

const NuevaEvidencia = () => {

    const [tareaSeleccionada, setTareaSeleccionada] = useState({id: 0, observaciones: ""})
    const [evidencia, setEvidencia] = useState({
        tarea_id: tareaSeleccionada.id,
        estudiante_id: 0,
        url: "",
        descripcion: "",
    })



    function manejarTarea(tarea){
        setTareaSeleccionada(tarea)
    }

    function manejarFormulario(evidencia){
        setEvidencia(evidencia)
    }

    console.log(evidencia)

    return(

        <>
            <SelectorTareaRA className="SelectorTareaRA" manejarTarea = {manejarTarea}></SelectorTareaRA>
            <br />
            <NuevaEvidenciaForm className="NuevaEvidenciaForm" tarea = {tareaSeleccionada} manejarFormulario = {manejarFormulario}></NuevaEvidenciaForm>
        
        </>
    )

}

export default NuevaEvidencia