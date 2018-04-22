import React, { Component } from 'react';
import './Sidebar.css';
import Perfil from '../Perfil/Perfil';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
      	<Perfil/>
      </div>
    );
  }
}

export default Sidebar;