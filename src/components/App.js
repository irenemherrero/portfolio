import React, { Component, Fragment } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  
  handleScroll() {
    const distanceToTop = document.body.getBoundingClientRect().top;
    console.log(distanceToTop);
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("skillsBox1").className = "showBox1";
        document.getElementById("skillsBox2").className = "showBox2";
    } else{
        document.getElementById("skillsBox1").className = "hiddeBox";
        document.getElementById("skillsBox2").className = "hiddeBox";
    }
  } 
  render() {
    return (
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
