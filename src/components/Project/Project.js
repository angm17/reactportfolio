import React, { Component } from 'react';
import './Project.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/fontawesome-free-solid';
class Project extends Component {
	constructor(props){
		super(props);
		this.state = {
			project : {}
		}
	}
	componentDidMount(){
		this.setState({
			project: this.props.project
		})
	}
	edit(){
		this.props.editProject(this.state.project);
	}
	delete(){
		this.props.deleteProject(this.state.project.id);
	}
	render() {
		const tags = this.state.project.tags ? <p className="tags">Tags: {this.state.project.tags}</p> : '';
		return (
			<div className="project">
				<div className="portHeader">
					<h4>{this.state.project.title}</h4>{this.props.isLoggedIn ? <div className="buttons"><a onClick={this.edit.bind(this)} className="button"><FontAwesomeIcon icon={faEdit}/></a><a onClick={this.delete.bind(this)} className="button"><FontAwesomeIcon icon={faTrash}/></a></div> : ''}
				</div>
				<p>{this.state.project.descr}</p>
				{tags}
			</div>
		);
	}
}

export default Project;