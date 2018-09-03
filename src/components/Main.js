import React, { Component, Fragment } from 'react';
import Presentation from './Presentation';
import Skills from './Skills';
import Projects from './Projects';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Presentation/>
        <Skills/>
        <Projects/>
        {/*<Timeline/>
        <Contact/>*/}
        </Fragment>
    );
  }
}

export default Main;