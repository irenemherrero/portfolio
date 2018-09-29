import React, { Component, Fragment } from 'react';
import Hero from './Hero';
import Menu from './Menu';


class Header extends Component {
    render(){
        return(
            <Fragment>
                <Menu/>
                <Hero/>
            </Fragment>
        );
    }
}
    

export default Header;
