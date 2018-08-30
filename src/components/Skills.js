import React, { Component, Fragment } from 'react';

class Skills extends Component {

    render() {
        return (
            <Fragment>
                <div className="containerSkills">
                    {/*<div className="containerPresentation">
                    <p className="fontText textPresentation">Tras ser profesora de español en España, Bélgica y Portugal durante más de 7 años, me he formado en programación Front-End y he descubierto que “hablar" con ordenadores me gusta tanto como comunicarme con personas.
                    <br></br> <br></br> 
                    Conectar con lo que hago es mi motor. Por eso me gusta trabajar en proyectos que contribuyen a mejorar la sociedad.
                    <br></br> <br></br> 
                    Soy una persona vital y positiva. Adaptarme a nuevos entornos y equipos es mi mayor cualidad. 
                    </p>
        </div>*/}
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