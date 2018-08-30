import React, { Component } from 'react';
import Hero from './Hero';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: "unactiveInitial",
            openList: "unactiveInitial"
        }
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu() {
        if (this.state.openMenu === "unactiveInitial") {
            this.setState({
                openMenu: "containerMenu",
                openList: "listMenu",
            });
        }
        else if (this.state.openMenu === "hidden") {
            console.log(this.state.openMenu);
            this.setState({
                openMenu: "containerMenu",
                openList: "listMenu",
            });
        } else if (this.state.openMenu === "containerMenu") {
            console.log('adios');
            this.setState({
                openMenu: "hidden",
                openList: "hiddenMenu"
            });
        }
    }
    
    render() {
        return (
            <header id="top" className="headerBackground">
                <nav className="menuBar">
                    <div className={this.state.openMenu}>
                        <ul className={this.state.openList}>
                            <li>
                                <a className="linkMenu fontItemMenu" href="#">Sobre mí</a>
                            </li>
                            <li>
                                <a className="linkMenu fontItemMenu" href="#">Proyectos</a>
                            </li>
                            <li>
                                <a className="linkMenu fontItemMenu" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="buttonHamburger" href="#" onClick={this.handleMenu}>
                    </div>
                </nav>
                <Hero />
            </header>
        );
    }
}

export default Header;
