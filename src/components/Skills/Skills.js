import React, { Component } from 'react';
import './Skills.css';
import SkillBar from '../SkillBar/SkillBar';
import SkillsForm from '../SkillsForm/SkillsForm';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Skills extends Component {
	constructor(){
		super();
		this.state = {
			skills: [],
			form: false,
			editSkill: ''
		};
		this.form = this.form.bind(this);
	}
	componentDidMount(){
		fetch('http://www.angarita.ga/skills.json')
		.then(res =>  res.json())
		.then(skills => {
			this.setState({ skills });
		});
	}
	form(edit = false){
		if (edit) {
			this.setState({
				editSkill:''
			});
		}
		this.setState(prevState => ({
			form: !prevState.form
		}));
	}
	addSkill(skill, edit=false){
		let skills;
		if (edit) {
			skills = this.state.skills.map(sk => {
					if (sk.id === skill.id) {
						return skill;
					}
					return sk;
				});
				this.setState({ skills }, ()=>{
					this.form();
				});
		}else{
			skills = this.state.skills
			skills.push(skill)
			this.setState({
				skills
			}, ()=>{
				this.form();
			}); 
		}
	}
	edit(editSkill){
		this.setState({
			editSkill
		}, ()=>{
			this.form();
		});
	}
	delete(skill){
		let skills = this.state.skills.filter(sk => sk.id !== skill);
		this.setState({ skills });
	}
	render() {
		if (this.state.form) {
			return(
				<div className="Portfolio item">
					<SkillsForm closeform={this.form} addSkill={this.addSkill.bind(this)} skill={this.state.editSkill}/>
				</div>
			);
		}else{
			const skills = this.state.skills.map((skill) => {
				return <SkillBar skill={skill} key={skill.id} isLoggedIn={this.props.isLoggedIn} editSkill={this.edit.bind(this)} deleteSkill={this.delete.bind(this)}/>;
			})
			return (
				<div className="Skills item">
					<div className="portHeader">
						<h1 className="title">Skills</h1>{this.props.isLoggedIn ? <a onClick={this.form} className="button"><FontAwesomeIcon icon={faPlus}/> Add New Skill</a> : ''}
					</div>
					{skills}
				</div>
			);
		}
	}
}

export default Skills;