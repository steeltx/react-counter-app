import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {
    
    return (
        <>
            <h1> {saludo} </h1>
            <p>{ subtitulo }</p>
        </>
    );

}

// Validar que las propiedades existan y el tipo de dato
PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}

// Establecer los valores por defecto para las diferentes propiedades
PrimeraApp.defaultProps = {
    subtitulo : 'Subtitulo'
}

export default PrimeraApp;
