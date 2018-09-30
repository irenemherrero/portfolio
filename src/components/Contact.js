import React, { Component, Fragment } from 'react';
class Contact extends Component {
    render() {
        return (
            <div id="contact" className="containerContact">
                <p className="paragraphContact paragraphTitle"> Contacto </p>
                <p className="fontListSkill">Si crees que puedo ayudarte en tu proyecto, escribe a:</p>
                <a className="linkMenu" href="mailto:irenemherrero@gmail.com" target="_blank"> irenemherrero@gmail.com </a>
            </div>
        );
    };
};

export default Contact;