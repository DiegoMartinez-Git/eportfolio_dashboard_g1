import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import opcionesAdmin from '../../mocks/mock-administrador'
import { Link } from "react-router-dom";
import useMisModulosImpartidos from '../../hooks/useMisModulosImpartidos';
import useMisModulosMatriculados from '../../hooks/useMisModulosMatriculados';


const MenuDinamicoRoles = (props) => {

    console.log(opcionesAdmin.administrador)

    const modulosDocente = useMisModulosImpartidos(props.usuario)

    const modulosEstudiante = useMisModulosMatriculados(props.usuario)


    function generarAcordeon(rol) {

        switch (rol) {
            case 'administrador':
                return acordeonGeneral(rol, opcionesAdmin.administrador)
            case 'docente':
                return acordeonGeneral(rol, modulosDocente.lista)
            case 'estudiante':
                return acordeonGeneral(rol, modulosEstudiante.lista)
            default:
                return null
        }

    }

    function acordeonGeneral(rol, opciones) {

        return (
            <Accordion key={`panel1-${rol}`}>
                <AccordionSummary key={`panel1-header-${rol}`}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel1-content-${rol}`}
                    id={`panel1-header-${rol}`}
                >
                    <Typography component="span">{rol}</Typography>
                </AccordionSummary>
                {console.log(opciones)}
                {opciones.map((pestaña, index) => {
                    return (
                        <AccordionDetails key={index}>
                            <Link key={index + 1} to={pestaña.ruta} >{pestaña.nombre}</Link>
                        </AccordionDetails>
                    )
                })}
            </Accordion>)
    }

    return (
        <div>
            {props.roles.lista.map((rol) => {
                return generarAcordeon(rol)
            })}
        </div>
    )
}
export default MenuDinamicoRoles