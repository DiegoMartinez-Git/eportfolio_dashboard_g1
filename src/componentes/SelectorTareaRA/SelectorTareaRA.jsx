import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useTareasRA from '../../hooks/useTareas';
import Loader from '../Loader/Loader';

const SelectorTareaRA = (props) => {

    const { lista, buscando } = useTareasRA()

    const handleChange = (event) => {
        const id = event.target.value;
        const tarea = lista.find(t => t.id === id);
        if (tarea) {
            props.manejarTarea(tarea);
        }
    };

    return (
        <>
            {buscando ? <Loader /> : <FormControl fullWidth error={props.error}>
                <InputLabel id="tarea-select-label">Tarea</InputLabel>
                <Select
                    labelId="tarea-select-label"
                    id="tarea-select"
                    value={props.tareaSeleccionada?.id || ''}
                    label="Tarea"
                    onChange={handleChange}
                >
                    {lista.map((tarea) => (
                        <MenuItem key={tarea.id} value={tarea.id}>
                            {tarea.observaciones}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>}
            <br />
        </>
    )
}

export default SelectorTareaRA