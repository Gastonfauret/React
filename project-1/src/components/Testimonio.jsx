import React from "react";
import '../styles/Testimonio.css'

function Testimonio(props) {
    return (
        <>
            <div className="contenedor-testimonio">
                <img className="imagen-testimonio" src={require(`../images/${props.imagen}.jpg`)} 
                    alt='Foto de Marcela' />

                <div className="contenedor-texto-testimonio">
                    <p className="nombre-testimonio">
                        <strong>{props.nombre}</strong> de {props.pais}</p>
                    <p className="cargo-testimonio">
                        <strong>{props.cargo}</strong> en {props.empresa}</p>
                    <p className="texto-testimonio">
                        "{props.testimonio}"</p>
                </div>
            </div>
        </>
    );
}

export default Testimonio;

