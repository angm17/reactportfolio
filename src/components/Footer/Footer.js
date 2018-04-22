import React, { Component } from 'react';
import './Footer.css';
import reactLogo from './logo.svg'
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Creado usando <img src={reactLogo} className="reactLogo" alt = "reactjs"/>. Copyright &copy; 2018, Miguel A.</p>
        <button onClick={this.props.login}>{this.props.isLoggedIn ? 'Log out' : 'Log in'}</button>
      </footer>
    );
  }
}

export default Footer;