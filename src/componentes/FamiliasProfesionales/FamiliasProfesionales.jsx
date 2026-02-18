import React from 'react';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';
import BasicTable from '../BasicTable/BasicTable';
import Loader from '../Loader/Loader';

const FamiliasProfesionales = () => {
    const { lista, buscando } = useFamiliasProfesionales();

    return (
        <div>
            <h1>Familias Profesionales</h1>
            {buscando ? <Loader /> : <BasicTable rows={lista} />}
        </div>
    );
}

export default FamiliasProfesionales;
