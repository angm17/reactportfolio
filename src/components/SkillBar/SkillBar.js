import React, { Component } from 'react';
import './SkillBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/fontawesome-free-solid';
class SkillBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			skill: {}
		};
		
	}
	componentWillMount(){
		this.setState({
			skill: this.props.skill
		});
	}
	edit(){
		this.props.editSkill(this.state.skill);
	}
	delete(){
		this.props.deleteSkill(this.state.skill.id);
	}
	render() {
		const backgroundColor = this.state.skill.backgroundColor ? this.state.skill.backgroundColor : '#ddd';
		const barColor = this.state.skill.barColor ? this.state.skill.barColor : '#4CAF50';
		const fontColor = this.state.skill.fontColor ? this.state.skill.fontColor : '#FFF';
		return (
			<div className="SkillBar">
				<div className="portHeader">
					<h4 className="skill">{this.state.skill.skillName}</h4>{this.props.isLoggedIn ? <div className="buttons"><a onClick={this.edit.bind(this)} className="button"><FontAwesomeIcon icon={faEdit}/></a><a onClick={this.delete.bind(this)} className="button"><FontAwesomeIcon icon={faTrash}/></a></div> : ''}
				</div>
				<div className="skillContainer" style={{backgroundColor: backgroundColor}}>
				<div className="skills" style ={{width: `${this.state.skill.percentage}%`, backgroundColor: barColor, color: fontColor}}>{this.state.skill.percentage}%</div>
				</div>
				<p className='skill skillExtra'>{this.state.skill.extra ? 'Extra: '+this.state.skill.extra : ''}</p>
			</div>
		);
	}
}

export default SkillBar;