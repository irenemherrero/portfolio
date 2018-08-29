import React, { Component, Fragment } from 'react';
class Skills extends Component {
    state = {  }
    render() { 
        return ( 
          <Fragment>
          <div className="containerSkills">
              <ul className="skillsList">
                  <li className="itemListSkills">
                      <h3 className="titleSkill">Habilidades comunicativas</h3>
                      <p className="paragraphSkill">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </li>
                  <li className="itemListProj">
                      <h3 className="titleSkill">Adaptación al cambio</h3>
                      <p className="paragraphSkill">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </li>
                  <li className="itemListProj">
                      <h3 className="titleSkill">Aprendizaje continuo</h3>
                      <p className="paragraphSkill">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </li>
              </ul>
          </div>
      </Fragment>
         );
    }
}
 
export default Skills;