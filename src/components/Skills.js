import React, { Component, Fragment } from 'react';

class Skills extends Component {
   
    render() {
        return (
            <Fragment>
                <div className="containerSkills">
                <div className="listBackground"></div>
                    <ul className="generalSkillsList">
                        <li className="itemListGeneralSkills">
                            <h3 className="titleGeneralSkill fontPreTitle">Habilidades técnicas</h3>
                                <div className="iconContainer">
                                <i className="fas fa-laptop-code"></i>
                                </div>
                                <ul className="skillsList fontListSkills">
                                    <li className="skill">HTML5</li>
                                    <li className="skill">CSS3, Flexbox, CSS Grid</li>
                                    <li className="skill">SASS</li>
                                    <li className="skill">JavaScript Vainilla</li>
                                    <li className="skill">ES6 y React</li>
                      </ul>
                  </li>
                            <li className="itemListGeneralSkills">
                                <h3 className="titleGeneralSkill fontPreTitle">Habilidades personales</h3>
                                <ul className="skillsList fontListSkills">
                                    <li className="skill">Adaptación al cambio</li>
                                    <li className="skill">Trabajo en equipo</li>
                                    <li className="skill">Aprendizaje continuo</li>
                                    <li className="skill">Habilidades comunicativas</li>
                                    <li className="skill">Planificación y organización</li>
                                </ul>
                            </li>
                  
              </ul>
          </div>
      </Fragment>
                );
           }
       }
        
export default Skills;