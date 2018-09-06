import React, { Component } from 'react';

class ProjectItem extends Component {
    render() { 
        const {webRef, photoSrc, photoAlt} = this.props;
        return ( 
            <a className="imageProject" href={webRef} target="_blank">
                <img className="imageWeb" src={photoSrc} alt={photoAlt}/>
            </a>
         );
    }
}
 
export default ProjectItem;