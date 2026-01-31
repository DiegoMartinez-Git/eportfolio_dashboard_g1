import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import tareasRA from '../../mocks/mock-tareasRA'
import { useState } from 'react';

const SelectorTareaRA = (props) => {

    const [tareaSeleccionada, setTareaSeleccionada] = useState({ id: 0, observaciones: "" });

    const handleChange = (event) => {
        const id = event.target.value;
        const tarea = tareasRA.lista.find(t => t.id === id);
        if (tarea) {
            setTareaSeleccionada(tarea);
            props.manejarTarea(tarea);
        }
    };

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="tarea-select-label">Tarea</InputLabel>
                <Select
                    labelId="tarea-select-label"
                    id="tarea-select"
                    value={tareaSeleccionada.id || ''}
                    label="Tarea"
                    onChange={handleChange}
                >
                    {tareasRA.lista.map((tarea) => (
                        <MenuItem key={tarea.id} value={tarea.id}>
                            {tarea.observaciones}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl><br />
        </>
    )
}

export default SelectorTareaRA