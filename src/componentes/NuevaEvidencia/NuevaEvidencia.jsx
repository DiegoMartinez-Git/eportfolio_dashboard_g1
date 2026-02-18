import { useState } from "react"
import SelectorTareaRA from "../SelectorTareaRA/SelectorTareaRA"
import NuevaEvidenciaForm from "../NuevaEvidenciaForm/NuevaEvidenciaForm"

const NuevaEvidencia = () => {

    const [tareaSeleccionada, setTareaSeleccionada] = useState({ id: 0, observaciones: "" })
    const [evidencia, setEvidencia] = useState({
        tarea_id: tareaSeleccionada.id,
        estudiante_id: 0,
        url: "",
        descripcion: "",
    })


    function manejarTarea(tarea) {
        setTareaSeleccionada(tarea)
    }

    function manejarFormulario(nueva_evidencia) {
        setEvidencia(nueva_evidencia)
        console.log("Tarea que se insertará cuando funcione el Post: ",  nueva_evidencia)
        setTareaSeleccionada({ id: 0, observaciones: "" })
    }


    return (

        <><div className="col-9 text-center fondo-main main">
            <SelectorTareaRA className="SelectorTareaRA" manejarTarea={manejarTarea} tareaSeleccionada={tareaSeleccionada}></SelectorTareaRA>
            <br />
            <NuevaEvidenciaForm className="NuevaEvidenciaForm" tarea={tareaSeleccionada} manejarFormulario={manejarFormulario}></NuevaEvidenciaForm>
        </div>


        </>
    )

}

export default NuevaEvidencia