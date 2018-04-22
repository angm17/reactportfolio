import React, { Component } from 'react';
import './Perfil.css';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faPhone,  faEnvelope} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Perfil extends Component {
  constructor(){
    super();
    this.state = {
      profile:{
        img: '',
        name:'',
        age: '',
        location: '',
        cel: '',
        email: '',
        github: ''
      }
    }
  }
  componentDidMount(){
    fetch('http://www.angarita.ga/profile.json')
    .then(res =>  res.json())
    .then(profile => {
      this.setState(profile);
    });
  }
  render() {
    return (
      <div className="Perfil">
        <img className='profileImg' src={this.state.profile.img} alt='Miguel Angarita'/>
        <div className='contactInfo'>
          <div className="info">
            <h4>{this.state.profile.name} <small>({this.state.profile.age})</small></h4>
            <small>{this.state.profile.location}</small>
          </div>
          <ul className="contact">
            <li><FontAwesomeIcon icon={faPhone}/> {this.state.profile.cel}</li>
            <li><FontAwesomeIcon icon={faEnvelope}/> <a href={`mailto:${this.state.profile.email}`}>{this.state.profile.email.split('@')[0]}</a></li>
            <li><FontAwesomeIcon icon={faGithub}/> <a href={`https://github.com/${this.state.profile.github}`} target="_blank" rel="noopener noreferrer">{this.state.profile.github}</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Perfil;