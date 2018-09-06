import React, { Component, Fragment } from 'react';

class IconSkills extends Component {
    render() {
        const {icon} = this.props;
        return (
            <div className="iconContainer">
                <i className={`${icon} icon`}></i>
            </div>
        );
    }
}

export default IconSkills;