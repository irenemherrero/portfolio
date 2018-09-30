import React, { Component, Fragment } from 'react';
import BoxSkills from './BoxSkills';

const technicalSkills = {
    title: 'Habilidades técnicas',
    icon: 'fas fa-laptop-code',
    id: "skillsBox1",
    skills: [
        'HTML5',
        'CSS3, Flexbox, CSS Grid',
        'SASS',
        'JavaScript Vainilla',
        'ES6 y React',
    ],
};

const personalSkills = {
    title: 'Habilidades personales',
    icon: 'far fa-user-circle',
    id: "skillsBox2",
    skills: [
        'Adaptación al cambio',
        'Trabajo en equipo',
        'Aprendizaje continuo',
        'Habilidades comunicativas',
        'Planificación y organización',
    ],
};

class Skills extends Component {
    render() {
        return (
            <Fragment>
                <ul className="generalSkillsList">
                    <BoxSkills boxData={technicalSkills} />
                    <BoxSkills boxData={personalSkills} />
                </ul>
            </Fragment>
        );
    };
};

export default Skills;