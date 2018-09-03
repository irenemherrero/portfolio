import React, { Component, Fragment } from 'react';

class Skills extends Component {

    render() {
        return (
            <Fragment>
                <div className="containerSkills">
                    
                    <ul className="generalSkillsList">
                        <li className="itemListGeneralSkills">
                            <div className="iconContainer">
                                <i className="fas fa-laptop-code icon"></i>
                            </div>
                            <h3 className="titleGeneralSkill fontTitleSkill">Habilidades técnicas</h3>
                            <ul className="skillsList fontListSkills">
                                <li className="skill">
                                    <span className="checkbox"><i className="fas fa-check"></i></span>
                                    HTML5</li>
                                <li className="skill">
                                    <span className="checkbox"><i className="fas fa-check"></i></span>CSS3, Flexbox, CSS Grid</li>
                                <li className="skill">
                                    <span className="checkbox"><i className="fas fa-check"></i></span>SASS</li>
                                <li className="skill">
                                    <span className="checkbox"><i className="fas fa-check"></i></span>JavaScript Vainilla</li>
                                <li className="skill">
                                    <span className="checkbox"><i className="fas fa-check"></i></span>ES6 y React</li>
                            </ul>
                        </li>
                        <li className="itemListGeneralSkills">
                            <div className="iconContainer">
                                <i className="far fa-user-circle icon"></i>
                            </div>
                            <h3 className="titleGeneralSkill fontTitleSkill">Habilidades personales</h3>
                            <ul className="skillsList fontListSkills">
                                <li className="skill"><span className="checkbox"><i className="fas fa-check"></i></span>Adaptación al cambio</li>
                                <li className="skill"><span className="checkbox"><i className="fas fa-check"></i></span>Trabajo en equipo</li>
                                <li className="skill"><span className="checkbox"><i className="fas fa-check"></i></span>Aprendizaje continuo</li>
                                <li className="skill"><span className="checkbox"><i className="fas fa-check"></i></span>Habilidades comunicativas</li>
                                <li className="skill"><span className="checkbox"><i className="fas fa-check"></i></span>Planificación y organización</li>
                            </ul>
                        </li>

                    </ul>
               
                </div>
            </Fragment>
        );
    }
}

export default Skills;