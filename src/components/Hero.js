import React, { Component, Fragment } from 'react';
import photoMe from "../images/foto_perfil_prop.jpg"

class Hero extends Component {

    render() {
        return (
            <Fragment>
                <div className="heroTextContainer">
                    <h1 className="fontPreTitle preTitleEffect">Junior Front-End Developer</h1>
                    <h2 className="fontTitle typewriter">Soy Irene Mateo.</h2>
                    <img className="photoMe" src={photoMe} alt="error" />
                </div>
            </Fragment>

        );
    }
}

export default Hero;