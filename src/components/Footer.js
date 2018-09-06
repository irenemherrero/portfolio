import React, { Component, Fragment } from 'react';
class Footer extends Component {
    render() { 
        return ( 
            <footer className="containerFooter">
                <ul className="containerNetworks">
                    <li className='iconContainerNW'><a href="https://twitter.com/irenemateoh" target='_blank'><i className='iconNW fab fa-twitter'></i></a></li>
                    <li className='iconContainerNW'><a href="https://www.linkedin.com/in/irenemateoh-frontend/" target='_blank'><i className='iconNW fab fa-linkedin-in'></i></a></li>
                    <li className='iconContainerNW'><a href="https://github.com/irenemherrero" target='_blank'><i className='iconNW fab fa-github-alt'></i></a></li>
                    <li className='iconContainerNW'><a href="mailto:irenemherrero@gmail.com" target='_blank'><i className='iconNW fas fa-envelope'></i></a></li>
                </ul>
                <ul className="containerLinks">
                    <li className="itemLink" ><a className='linkWeb footerLink' href="#top">Home</a></li>
                    <span className="dot1">.</span>
                    <li className="itemLink"><a className='linkWeb footerLink' href="#presentation">Sobre mí</a></li>
                    <span className="dot2">.</span>
                    <li className="itemLink"><a className='linkWeb footerLink' href="#projects">Proyectos</a></li>
                    <span className="dot3">.</span>
                    <li className="itemLink"><a className='linkWeb footerLink' href="#top">Contacto</a></li>
                </ul>
            </footer>    
         );
    }
}
 
export default Footer;