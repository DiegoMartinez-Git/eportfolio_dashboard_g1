import { useForm } from "react-hook-form"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import useEvidencias from "../../hooks/useEvidencias";


const NuevaEvidenciaForm = (props) => {

    const usuario = useContext(UserContext)
    const { nuevaEvidencia, lista } = useEvidencias()

    const TAREA = {
        TAREA_ID: "tarea_id",
        ESTUDIANTE_ID: "estudiante_id",
        URL: "url",
        DESCRIPCION: "descripcion",
        ESTADO_VALIDACION: "estado_validacion"
    }

    const TAREA_INICIAL = {
        tarea_id: "",
        estudiante_id: usuario,
        url: "",
        descripcion: "",
        estado_validacion: ""
    }

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: TAREA_INICIAL
    })



    const manejarFormulario = handleSubmit((data) => {
        const evidenciaFinal = {
            ...data,
            tarea_id: props.tarea.id,
            estudiante_id: usuario,
            estado_validacion: "pendiente"
        }
        nuevaEvidencia(evidenciaFinal)
        props.manejarFormulario(evidenciaFinal)
        reset()
    })

    return (
        <>
            <form onSubmit={manejarFormulario}>
                <TextField id="outlined-basic" label={TAREA.URL} variant="outlined" fullWidth {...register(TAREA.URL, {
                    required: { value: true, message: "La URL es obligatoria" }
                })} />
                {errors.url && <span className="error">{errors.url.message}</span>}
                <br /><br />
                <TextField id="outlined-basic" label={TAREA.DESCRIPCION} variant="outlined" fullWidth multiline rows={4}{...register(TAREA.DESCRIPCION, {
                    required: { value: true, message: "La descripción es obligatoria" }
                })} />
                {errors.descripcion && <span className="error">{errors.descripcion.message}</span>}
                <br /><br />
                <Button type="submit" variant="contained">Añadir Evidencia</Button>
            </form>
        </>
    )
}

export default NuevaEvidenciaForm