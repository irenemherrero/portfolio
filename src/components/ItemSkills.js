import React, { Component, Fragment } from 'react';

class ItemSkills extends Component {

    render() {
        const {skill}=this.props;
        return (
            <li className="skill">
                <span className="checkbox">
                    <i className="fas fa-check"></i>
                </span>{skill}
            </li>
        );
    }
}

export default ItemSkills;