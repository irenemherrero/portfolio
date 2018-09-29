import React, { Component, Fragment } from 'react';
class Presentation extends Component {

    render() { 
        return ( 
                <div id="presentation" className="presentationText"> 
                    <p className='paragraphTitle'>Encantada de conocerte.</p>
                    <p className="fontText">Tras ser profesora de español en España, Bélgica y Portugal durante más de 7 años, me he formado en programación Front-End y he descubierto que “hablar" con ordenadores me gusta tanto como comunicarme con personas.</p>
    
                    <p className="fontText"><span className='fontTextHighlight'>Conectar con lo que hago es mi motor.</span> Por eso me gusta trabajar en proyectos con impacto social.</p>

                    <p className="fontText">Soy una persona vital y positiva. Adaptarme a nuevos entornos y equipos es mi mayor cualidad. </p>
                    <br></br>

                    <p className='paragraphTitle'>¿Qué puedo aportar a tu proyecto?</p>
                </div>
        );
    }
}
 
export default Presentation;

