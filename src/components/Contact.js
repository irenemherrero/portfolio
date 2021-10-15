import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return (
            <div id="contact" className="containerContact">
                <p className="paragraphContact paragraphTitle"> Contacto </p>
                <p className="fontListSkill">Si quieres contactar conmigo, escribe a:</p>
                <a className="linkMenu" href="mailto:irenemherrero@gmail.com" target="_blank" rel="noopener noreferrer"> irenemherrero@gmail.com </a>
            </div>
        );
    };
};

export default Contact;