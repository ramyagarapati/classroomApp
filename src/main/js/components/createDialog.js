'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class CreateDialog extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var newStudent = {};
		this.props.attributes.forEach(attribute => {
			newStudent[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onCreate(newStudent);
		this.props.attributes.forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = ''; // clear out the dialog's inputs
		});
		window.location = "#";
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	render() {
		return (
			<div>
				<div className="logout2"><label for="create"></label>
				<a href="#createStudent"><input className="but" type="submit" id="create" value="Create"/></a>
				</div><br/>
				<div id="createStudent" className="modalDialog" >
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Create new student</h2>
						<form>
							<p><input type="text" ref ="firstName"
							 placeholder="firstName" className="field" /></p>
    						<p><input type="text" ref ="lastName"
							placeholder="lastName" className="field"/></p>
    						<p><select onChange={this.handleChange} ref ="gender">
									<option value="MALE" >Male</option>
									<option value="FEMALE" >Female</option>
								</select></p>
							<p><select onChange={this.handleChange} ref ="currentYear">
									<option >Year</option>
									<option value="ONE">1</option>
									<option value="TWO">2</option>
									<option value="THREE">3</option>
									<option value="FOUR">4</option>
								</select></p>
							<p><select onChange={this.handleChange} ref ="currentSemester">
							<option >Semester</option>
									<option value="ONE">1</option>
									<option value="TWO">2</option>
								</select></p>
    						<p><input type="text" placeholder="E-mail" ref ="email"
							 className="field"/></p>
							<p><select onChange={this.handleChange}  ref ="department">
									<option >Department</option>
									<option value="CSE">Coumputer Science</option>
									<option value="ECE">Electronics and Communications</option>
								</select></p>
							<p><label for="joindate">JoinDate</label><input type="Date" ref ="joinDate" placeholder="joindate" className="field"/></p>
    						<p><label for="gyear">GraduationYear</label><input type="year" ref ="graduationYear"
							id="gyear" className="field"/></p>	
							<button onClick={this.handleSubmit}>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateDialog;