import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value );

    // Sumar
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    // Restar
    const handleSubtract = () => setCounter( counter - 1 );

    // Reset al valor del argumento
    const handleReset = () => setCounter( value );

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd } > +1 </button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSubtract } >-1</button>
        </>
    );
}

// Validar las propiedades
PropTypes.defaultProps = {
    value : PropTypes.number
}

export default CounterApp;