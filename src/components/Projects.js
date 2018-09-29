import React, { Component, Fragment } from 'react';
import ProjectItem from './ProjectItem';
import web0 from "../images/web0.png"
import web1 from "../images/web4.png"
import web2 from "../images/web5.png"
import web3 from "../images/web2.png"
import web4 from "../images/web3.png"
import web5 from "../images/web1.png"

const projectsData = [
    {
        webRef: 'http://beta.adalab.es/dorcas-s4-tpr/',
        photoSrc: web0,
        photoAlt: 'Enlace a formulario realizado para la empresa Triporate',
    },
    {
        webRef: 'http://beta.adalab.es/dorcas-s3-b-geeks/#/card-generator',
        photoSrc: web1,
        photoAlt: 'Enlace a aplicación de generación de tarjetas con React',
    },
    {
        webRef: 'http://beta.adalab.es/dorcas-s3-evaluacion-final-irenemherrero/#/',
        photoSrc: web2,
        photoAlt: 'Enlace a buscador de personajes de HarryPotter',
    },
    {
        webRef: 'http://beta.adalab.es/dorcas-s2-evaluacion-final-irenemherrero/',
        photoSrc: web3,
        photoAlt: 'Enlace a buscador de series',
    },
    {
        webRef:  'http://beta.adalab.es/dorcas-s2-tarjetas-martirio/',
        photoSrc: web4,
        photoAlt: 'Enlace a aplicación de generación de tarjetas con JS Vainilla',
    },
    {
        webRef:  'http://beta.adalab.es/d-s1-give-me-divs/',
        photoSrc: web5,
        photoAlt: 'Enlace a proyecto de web grupal con HTML y CSS (solo maquetación)',
    },
]

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <div className='anchor' id='projects'>
                </div>
                <div className="containerSectionProjects">
                    <p className='paragraphTitle'>Estos son mis últimos proyectos...</p>
                    <div className="containerProjects">
                        {projectsData.map((web,index) => {
                            return(
                            <ProjectItem key={index} webRef={web.webRef} photoSrc={web.photoSrc} photoAlt = {web.photoAlt}/>
                            );
                        })
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Projects;