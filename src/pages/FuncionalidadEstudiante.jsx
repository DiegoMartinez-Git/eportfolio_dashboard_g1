import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProgresoCompletoAlumno from '../componentes/ProgresoCompletoAlumno/ProgresoCompletoAlumno';
import NuevaEvidencia from '../componentes/NuevaEvidencia/NuevaEvidencia';
import RevisionesPendientes from '../componentes/RevisionesPendientes/RevisionesPendientes';


export default function FuncionalidadEstudiante() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="MI PROGRESO COMPLETO" value="1" />
            <Tab label="SUBIR NUEVA EVIDENCIA" value="2" />
            <Tab label="MIS REVISIONES PENDIENTES" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><ProgresoCompletoAlumno /></TabPanel>
        <TabPanel value="2"><NuevaEvidencia /></TabPanel>
        <TabPanel value="3"><RevisionesPendientes /></TabPanel>
      </TabContext>
    </Box>
  );
}