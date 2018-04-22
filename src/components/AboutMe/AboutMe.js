import React, { Component } from 'react';
import './AboutMe.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/fontawesome-free-solid';
import AboutForm from '../AboutForm/AboutForm';

class AboutMe extends Component {
  constructor(){
    super();
    this.state = {
        about: '',
        edit: false
      };
    this.editAbout = this.editAbout.bind(this)
  }
  componentDidMount(){
    fetch('http://www.angarita.ga/about.json')
    .then(res =>  res.json())
    .then(about => {
      this.setState(about);
    });
  }
  edit(){
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  }
  editAbout(about){
    this.setState({
      about
    }, ()=>{
      this.edit()
    })
  }
  render() {
    return (
      <div className="AboutMe item">
        <div className="portHeader">
          <h1 className='title'>About me</h1>{this.props.isLoggedIn ? <a onClick={this.edit.bind(this)} className="button"><FontAwesomeIcon icon={!this.state.edit ? faEdit :  faTimes}/></a> : ''}
        </div>
        { !this.state.edit ? <p>{this.state.about}</p> :  <AboutForm about={this.state.about} editAbout={this.editAbout}/>}
      </div>
    );
  }
}

export default AboutMe;