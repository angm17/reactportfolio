import React, { Component } from 'react';
import './Container.css';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio'

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <AboutMe isLoggedIn={this.props.isLoggedIn} />
        <Skills isLoggedIn={this.props.isLoggedIn} />
        <Portfolio isLoggedIn={this.props.isLoggedIn} />
      </div>
    );
  }
}

export default Container;