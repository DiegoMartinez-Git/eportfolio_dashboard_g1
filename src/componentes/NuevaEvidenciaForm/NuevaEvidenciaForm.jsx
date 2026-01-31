import { useForm } from "react-hook-form"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";


const NuevaEvidenciaForm = (props) => {

    const usuario = useContext(UserContext)

    const TAREA = {
        TAREA_ID: "tarea_id",
        ESTUDIANTE_ID: "estudiante_id",
        URL: "url",
        DESCRIPCION: "descripcion",
        ESTADO_VALIDACION: "estado_validacion"
    }

    const TAREA_INICIAL = {
        tarea_id: props.tarea.id,
        estudiante_id: usuario,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: TAREA_INICIAL
    })



    const manejarFormulario = handleSubmit((nuevaEvidencia) => {
        //Preguntar a Victor
        const evidenciaFinal = {
            ...nuevaEvidencia,
            tarea_id: props.tarea.id,
            estudiante_id: usuario,
            estado_validacion: "pendiente"
        }
        props.manejarFormulario(evidenciaFinal)
        reset()
    })

    return (
        <>
            <form onSubmit={manejarFormulario}>
                <TextField id="outlined-basic" label={TAREA.URL} variant="outlined" fullWidth {...register(TAREA.URL, {
                    required: true,
                    message: "La URL es obligatoria"
                })} />
                <br /><br />
                <TextField id="outlined-basic" label={TAREA.DESCRIPCION} variant="outlined" fullWidth multiline rows={4}{...register(TAREA.DESCRIPCION, {
                    required: true,
                    message: "La descripción es obligatoria"
                })} />
                <br /><br />
                <Button type="submit" variant="contained">Añadir Evidencia</Button>
            </form>
        </>
    )
}

export default NuevaEvidenciaForm