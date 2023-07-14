import React from "react";
import '../styles/Boton.css'

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
        // isNaN: funccion nativa de JS: Define si un valor no es un numero, devuelve que 'esOperador' es true o false.
    }
    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}>
            {/* trimEnd(): Elimina Espacios al final de una cadena de caracteres */}
            {props.children}
            {/* Se usa para definir el valor de los botones (1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -, +, /, *) */}
        </div>
    )
}

export default Boton