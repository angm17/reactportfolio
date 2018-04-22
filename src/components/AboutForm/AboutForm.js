import React, { Component } from 'react';
import './aboutform.css';


class AboutForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			about: ''
		};
		this.editAbout = this.editAbout.bind(this)
	}
	componentDidMount(){
		this.setState({
			about: this.props.about
		});
		
	}
	editAbout(e){
		e.preventDefault();
		this.props.editAbout(this.state.about);
	}
	onChange(e){
		this.setState({
				about : e.target.value
			})
	}
	render() {
		return(
			<div className="ProjectForm">
				<form onSubmit={this.editAbout}>
					<div className="form-group">
						<textarea autoFocus onChange = {this.onChange.bind(this)} className="form-item" name="about" cols="30" rows="10" placeholder="About" value={this.state.about}></textarea>
					</div>
					<input type="submit" value="Submit" className="btn btn-block btn-primary"/>
				</form>
			</div>
		);
	}
}

export default AboutForm;
