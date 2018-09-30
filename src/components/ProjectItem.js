import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        console.log(this.props.description);
        const { webRef, photoSrc, description } = this.props;
        return (
            <a className="imageProject" href={webRef} target="_blank">
                <img className="imageWeb" src={photoSrc} alt={description} />
                <span className="projectsSpan">
                    <p className="webDescription">{description}</p>
                </span>
            </a>
        );
    }
}

export default ProjectItem;