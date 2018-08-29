import React, { Component, Fragment } from 'react';
class Footer extends Component {
    render() { 
        return ( 
            <footer className="container-footer">
            <div className="boton-subir"> 
            <a href="#top"> 
            <img className="flecha-arriba" src="images/ico-arrow.svg" alt="icono para subir al menu"/>
            </a> 
            </div>
            <p className="footer-line-1 font-footer-paragraph">©2017</p>
            <p className="footer-line-2 font-footer-paragraph">we 
            <span className="corazon">❤︎</span> components</p>
          </footer>    
         );
    }
}
 
export default Footer;