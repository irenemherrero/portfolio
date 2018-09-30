import React, { Component, Fragment } from 'react';

class Presentation extends Component {

    render() {
        return (
            <Fragment>
                <div className='anchor' id="presentation" />
                <div className="presentationText">
                    <p className='paragraphTitle'>Encantada de conocerte.</p>
                    <p className="fontText">Soy Irene Mateo Herrero, programadora Front-End Junior formada en Adalab (Madrid).
                    </p>
                    <p className="fontText">
                    Tras trabajar como profesora de español en Bélgica y Portugal decidí volver a España y entonces, consciente de la importancia de dominar la tecnología en el mundo actual, me he formado en programación Front-End. Ahora busco mi primera experiencia laboral en el sector.
                    </p>
                    <p className="fontText">Soy una persona vital y positiva. Adaptarme a nuevos entornos y equipos es mi mayor cualidad. </p>
                    <p className='paragraphTitle'>¿Qué puedo aportar a tu proyecto?</p>
                </div>
            </Fragment>
        );
    };
};

export default Presentation;

