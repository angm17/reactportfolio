import React, { Component } from 'react';
import './ProjectForm.css';
class ProjectForm extends Component {
	constructor(props){
		super(props);
		this.addProject = this.addProject.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			project:{
				id:'',
				title: '',
				descr: '',
				tags: ''
			},
			edit: false
		};
	}
	componentDidMount(){
		if (this.props.project) {
			this.setState({
				project: this.props.project,
				edit: true 
			});
		}
		
	}
	addProject(e){
		e.preventDefault();
		const project = this.state.project;
		//this id is something temporal, to be able to add more items on the frontend.
		project.id = !project.id ? '45s4ds10s1d5'+project.title : project.id;
		this.props.addProject(project, this.state.edit);

		
	}
	onChange(e){
		const project = this.state.project;
        project[e.target.name] = e.target.value;
		this.setState({ project });
	}
	render() {
		return(
			<div className="ProjectForm">
				<div className="portHeader">
					<h1 className="title">{!this.state.edit ? 'Add New Project' : 'Edit Project'}</h1>
					<a onClick={this.props.closeform} className="btn btn-primary">&times;</a>
				</div>
				<form onSubmit={this.addProject}>
					<div className="form-group">
						<input autoFocus onChange = {this.onChange} className="form-item" type="text" name='title' placeholder="Titulo del Proyecto" value={this.state.project.title}/>
					</div>
					<div className="form-group">
						<textarea onChange = {this.onChange} className="form-item" name="descr" cols="30" rows="10" placeholder="Descripción" value={this.state.project.descr}></textarea>
					</div>
					<div className="form-group">
						<input onChange = {this.onChange} className="form-item" type="text" name="tags" placeholder="Etiquetas/Tecnologias Usadas" value={this.state.project.tags}/>
					</div>
					<input type="submit" value={!this.state.edit ? 'Add New Project' : 'Edit Project'} className="btn btn-block btn-primary"/>
				</form>
			</div>
		);
	}
}

export default ProjectForm;