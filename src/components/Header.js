import React, { Component } from 'react';
import Hero from './Hero';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openMenu: "hidden-hidden",
            // openList: "hidden-hidden"
        }
        this.handleMenu = this.handleMenu.bind(this);
    }
//Arreglar esto!!
    handleMenu() {
        if (this.state.openMenu === "hidden-hidden" || "hidden") {
            this.setState({
                openMenu: "containerMenu",
                // openList: "listMenu",
            })
        } else if(this.state.openMenu === "containerMenu"){
            this.setState({
                openMenu: "hidden",
            })
        }
    }

    render() {
        return (
            <header id="top" className="header_bg">
                <nav className="menu">
                    <div className={this.state.openMenu}>
                        <ul className="listMenu">
                            <li>
                                <a className="linkMenu font-menu" href="#">Sobre mí</a>
                            </li>
                            <li>
                                <a className="linkMenu font-menu" href="#">Proyectos</a>
                            </li>
                            <li>
                                <a className="linkMenu font-menu" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="boton-hamburguesa" href="#" onClick={this.handleMenu}>
                    </div>

                </nav>
                <Hero />
            </header>
        );
    }
}

export default Header;
