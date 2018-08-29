import React, { Component, Fragment } from 'react';
import photoMe from "../images/foto_perfil_prop.jpg"
class Hero extends Component {
    
    render() { 
        return ( 
            <div className="hero-text-container">
            <h1 className="font-pre-title">Más que diseño web.</h1>
            <h2 className="big-title font-big-title">Soy Irene Mateo, Junior Front-End Developer.</h2>
            <h2 className="font-big-title-smaller">
            Estoy en busca de mi primera experiencia laboral como desarrolladora.</h2>
            <h2 className="font-big-title-smaller">Descubre lo que puedo aportar a tu proyecto.</h2>
            <img className="photoMe" src={photoMe} alt="error"/>
            </div>
         );
    }
}
 
export default Hero;