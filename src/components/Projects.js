import React, { Component, Fragment } from 'react';
import web1 from "../images/web4.png"
import web2 from "../images/web5.png"
import web3 from "../images/web2.png"
import web4 from "../images/web3.png"
import web5 from "../images/web1.png"

class Projects extends Component {
    render() {
        return (
           <Fragment>
                <div className="containerProjects">
                    <a className="imageProject" href="http://beta.adalab.es/dorcas-s3-b-geeks/#/card-generator" target="_blank">
                        <img className="imageWeb" src={web1} alt="Error"/>
                    </a>
                    <a className="imageProject" href="http://beta.adalab.es/dorcas-s3-evaluacion-final-irenemherrero/#/" target="_blank">
                    <img className="imageWeb" src={web2} alt="Error"/>
                    </a>

                    <a className="imageProject" href="http://beta.adalab.es/dorcas-s2-evaluacion-final-irenemherrero/" target="_blank">
                    <img className="imageWeb" src={web3} alt="Error"/>
                    </a>
   
                    <a className="imageProject" href="http://beta.adalab.es/dorcas-s2-tarjetas-martirio/" target="_blank">
                    <img className="imageWeb" src={web4} alt="Error"/>
                    </a>

                    <a className="imageProject" href="http://beta.adalab.es/d-s1-give-me-divs/" target="_blank">
                    <img className="imageWeb" src={web5} alt="Error"/>
                    </a>
                </div>
           </Fragment>
        );
    }
}

export default Projects;