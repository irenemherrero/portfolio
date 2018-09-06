import React, { Component, Fragment } from 'react';
import web1 from "../images/web4.png"
import web2 from "../images/web5.png"
import web3 from "../images/web2.png"
import web4 from "../images/web3.png"
import web5 from "../images/web1.png"

class ProjectItem extends Component {
    render() { 
        return ( 
            <a className="imageProject" href="http://beta.adalab.es/dorcas-s3-b-geeks/#/card-generator" target="_blank">
                <img className="imageWeb" src={web1} alt="Error"/>
            </a>
         );
    }
}
 
export default ProjectItem;