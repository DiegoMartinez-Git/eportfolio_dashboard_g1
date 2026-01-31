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
            case "administrador":
                return acordeonAdmin()
            case 'estudiante':
                return acordeonEstudiante()
            case 'docente':
                return acordeonDocente()
        }

    }

    function acordeonAdmin() {
        return (<Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">adminstrador</Typography>
            </AccordionSummary>

            {opcionesAdmin.administrador.map((pestaña, index) => {
                return (
                    <AccordionDetails key={index}>
                        <Link key={index + 1} to={pestaña.ruta} >{pestaña.nombre}</Link>
                    </AccordionDetails>)
            })}

        </Accordion>)
    }

    function acordeonDocente() {
        return (<Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">docente</Typography>
            </AccordionSummary>

            {modulosDocente.lista.map((modulo, index) => {
                return (
                    <AccordionDetails key={index}>
                        <Link key={modulo.ciclo_formativo_id} to={`/funcionalidaddocente/${modulo.id}`} >{modulo.nombre}</Link>
                    </AccordionDetails>)
            })}

        </Accordion>)
    }

    function acordeonEstudiante() {
        return (<Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">estudiante</Typography>
            </AccordionSummary>

            {modulosEstudiante.lista.map((modulo, index) => {
                return (
                    <AccordionDetails key={index}>
                        <Link key={modulo.ciclo_formativo_id} to={`/funcionalidadestudiante/${modulo.id}`} >{modulo.nombre}</Link>
                    </AccordionDetails>)
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