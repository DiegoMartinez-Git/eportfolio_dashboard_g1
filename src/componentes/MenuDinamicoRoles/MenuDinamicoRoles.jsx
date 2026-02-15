import React from 'react';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import opcionesAdmin from '../../mocks/mock-administrador';
import useMisModulosImpartidos from '../../hooks/useMisModulosImpartidos';
import useMisModulosMatriculados from '../../hooks/useMisModulosMatriculados';

const MenuDinamicoRoles = ({ usuario, roles }) => {
    
    const { lista: listaDocente } = useMisModulosImpartidos(usuario);
    const { lista: listaEstudiante } = useMisModulosMatriculados(usuario);

    const roles_usuario = {
        administrador: {
            lista: opcionesAdmin.administrador,
            url: (usuario) => usuario.ruta, 
            id: (usuario) => usuario.id
        },
        docente: {
            lista: listaDocente,
            url: (usuario) => `/funcionalidaddocente/${usuario.id}`,
            id: (usuario) => usuario.ciclo_formativo_id
        },
        estudiante: {
            lista: listaEstudiante,
            url: (usuario) => `/funcionalidadestudiante/${usuario.id}`,
            id: (usuario) => usuario.ciclo_formativo_id
        }
    };

    return (
        <div>
            {roles.lista.map((rol) => {
                const config = roles_usuario[rol]; 
                if (!config || config.lista.length === 0) return null;

                return (
                    <Accordion key={rol}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel-${rol}-content`}
                            id={`panel-${rol}-header`}
                        >
                            <Typography component="span" sx={{ textTransform: 'capitalize' }}>
                                {rol}
                            </Typography>
                        </AccordionSummary>

                        {config.lista.map((usuario) => (
                            <AccordionDetails key={config.id(usuario)}>
                                <Link to={config.url(usuario)}>
                                    {usuario.nombre}
                                </Link>
                            </AccordionDetails>
                        ))}
                    </Accordion>
                );
            })}
        </div>
    );
}

export default MenuDinamicoRoles;