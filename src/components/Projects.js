import React, { Component, Fragment } from 'react';
import ProjectItem from './ProjectItem';
import web1 from "../images/web4.png"
import web2 from "../images/web5.png"
import web3 from "../images/web2.png"
import web4 from "../images/web3.png"
import web5 from "../images/web1.png"

const webRefs = [
    'http://beta.adalab.es/dorcas-s3-b-geeks/#/card-generator',
    'http://beta.adalab.es/dorcas-s3-evaluacion-final-irenemherrero/#/',
    'http://beta.adalab.es/dorcas-s2-evaluacion-final-irenemherrero/',
    'http://beta.adalab.es/dorcas-s2-tarjetas-martirio/',
    'http://beta.adalab.es/d-s1-give-me-divs/',
]

const photoSrc = [
    web1,
    web2,
    web3,
    web4,
    web5,
]

const photoAlt = [
    'Enlace a aplicación de generación de tarjetas con React',
    'Enlace a buscador de personajes de HarryPotter',
    'Enlace a buscador de series',
    'Enlace a aplicación de generación de tarjetas con JS Vainilla',
    'Enlace a proyecto de web grupal con HTML y CSS (solo maquetación)'
]

class Projects extends Component {
    render() {
        console.log(webRefs);
        const [webRef1, webRef2, webRef3, webRef4, webRef5] = webRefs;
        const [web1, web2, web3, web4, web5] = photoSrc;
        const [alt1, alt2, alt3, alt4, alt5] = photoAlt;
        return (
            <Fragment>
                <div className='anchor' id='projects'>
                </div>
                <div className="containerSectionProjects">
                    <p className='paragraphTitle'>Estos son mis últimos proyectos...</p>
                    <div className="containerProjects">
                        <ProjectItem webRef={webRef1} photoSrc={web1} photoAlt = {alt1}/>
                        <ProjectItem webRef={webRef2} photoSrc={web2} photoAlt = {alt2}/>
                        <ProjectItem webRef={webRef3} photoSrc={web3} photoAlt = {alt3}/>
                        <ProjectItem webRef={webRef4} photoSrc={web4} photoAlt = {alt4}/>
                        <ProjectItem webRef={webRef5} photoSrc={web5} photoAlt = {alt5}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Projects;