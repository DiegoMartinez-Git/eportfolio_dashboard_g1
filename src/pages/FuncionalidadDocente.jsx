import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PlanificarCriterios from '../componentes/PlanificarCriterios/PlanificarCriterios';
import EvaluarEvidencias from '../componentes/EvaluarEvidencias/EvaluarEvidencias';
import AsignarRevisiones from '../componentes/AsignarRevisiones/AsignarRevisiones';


export default function FuncionalidadDocente() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Planificar criterios" value="1" />
                        <Tab label="Evaluar evidencias" value="2" />
                        <Tab label="Asignar revisiones" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><PlanificarCriterios /></TabPanel>
                <TabPanel value="2"><EvaluarEvidencias /></TabPanel>
                <TabPanel value="3"><AsignarRevisiones /></TabPanel>
            </TabContext>
        </Box>
    );
}