import React, { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';
import ProjectForm from '../ProjectForm/ProjectForm'

import { faPlus } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
class Portfolio extends Component {
	constructor(props){
		super(props);
		this.state = {
			projects: [],
			form: false,
			editProject: ''
		};
		this.addProject = this.addProject.bind(this);
		this.form = this.form.bind(this);
	}
	componentDidMount(){
		fetch('http://www.angarita.ga/projects.json')
		.then(res =>  res.json())
		.then(projects => {
			this.setState({ projects });
		});
	}
	addProject(project, edit=false){
		let projects;
		if (edit) {
			projects = this.state.projects.map(prj => {
				if (prj.id === project.id) {
					return project;
				}
				return prj;
			})
			this.setState({ projects }, ()=>{
				this.form()
			});
		}else{
			projects = this.state.projects;
			projects.push(project);
			this.setState({ projects }, ()=>{
				this.form()
			});
		}
		
		
	}
	form(edit = false){
		if (edit) {
			this.setState({
				editProject:''
			});
		}
		this.setState(prevState => ({
			form: !prevState.form
		}));
	}
	delete(project){
		let projects = this.state.projects.filter(prj => prj.id !== project);
		this.setState({ projects });
	}
	edit(editProject){
		this.setState({
			editProject
		}, ()=>{
			this.form();
		});
	}
	render() {
		if (this.state.form) {
			return(
				<div className="Portfolio item">
					<ProjectForm addProject={this.addProject} closeform={this.form} project={this.state.editProject}/>
				</div>
			);
		}else{
			const projects = this.state.projects.length>0 ? this.state.projects.map((project) => { 
						return <Project key={project.id} project={project} editProject={this.edit.bind(this)} isLoggedIn = {this.props.isLoggedIn} deleteProject={this.delete.bind(this)}/>
					}) : <p className="project">There are no projects to show!</p>;
			return (
					<div className="Portfolio item">
						<div className="portHeader">
							<h1 className="title">Projects</h1>{this.props.isLoggedIn ? <a onClick={this.form} className="button"><FontAwesomeIcon icon={faPlus}/> Add New Project</a> : ''}
						</div>
						{projects}
					</div>
			);
		}
	}
}

export default Portfolio;