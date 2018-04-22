import React, { Component } from 'react';
import './skillsform.css';


class AboutForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			skill: {
				id: '',
				skillName: '',
				percentage: '',
				extra: ''
			},
			edit: false
		};
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount(){
		if (this.props.skill) {
			this.setState({
				skill: this.props.skill,
				edit: true
			});
		}
	}
	addSkill(e){
		e.preventDefault();
		const skill = this.state.skill;
		//this id is something temporal, to be able to add more items on the frontend.
		skill.id = !skill.id ? '45s4ds10s1d5'+skill.skillName : skill.id;
		this.props.addSkill(skill, this.state.edit);
	}
	onChange(e){
		const skill = this.state.skill;
        skill[e.target.name] = e.target.value;
		this.setState({ skill });
	}
	render() {
		return(
			<div className="ProjectForm">
				<div className="portHeader">
					<h1 className="title">{!this.state.edit ? 'Add New Skill' : 'Edit Skill'}</h1>
					<a onClick={this.props.closeform} className="btn btn-primary">&times;</a>
				</div>
				<form onSubmit={this.addSkill.bind(this)}>
					<div className="form-group">
						<input autoFocus onChange = {this.onChange} className="form-item" type="text" name='skillName' placeholder="Skill" value={this.state.skill.skillName}/>
					</div>
					<div className="form-group">
						<input onChange = {this.onChange} className="form-item" type="number" name='percentage' placeholder="How much do you know? 1-100" value={this.state.skill.percentage}/>
					</div>
					<div className="form-group">
						<input onChange = {this.onChange} className="form-item" type="text" name="extra" placeholder="Extra" value={this.state.skill.extra}/>
					</div>
					<input type="submit" value={!this.state.edit ? 'Add New Skill' : 'Edit Skill'} className="btn btn-block btn-primary"/>
				</form>
			</div>
		);
	}
}

export default AboutForm;
