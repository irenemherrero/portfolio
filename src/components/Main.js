import React, { Component, Fragment } from 'react';
import Skills from './Skills';
import Projects from './Projects';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Skills/>
        <Projects/>
        {/*<Timeline/>
        <Contact/>*/}
        </Fragment>
    );
  }
}

export default Main;