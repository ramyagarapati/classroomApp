'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class UpdateDialog extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var updatedStudent = {};
		this.props.attributes.forEach(attribute => {
			updatedStudent[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onUpdate(this.props.student, updatedStudent);
		window.location = "#";
	}

	render() {
		var inputs = this.props.attributes.map(attribute =>
				<p key={this.props.student.entity[attribute]}>
					<input type="text" placeholder={attribute}
						   defaultValue={this.props.student.entity[attribute]}
						   ref={attribute} className="field" />
				</p>
		);

		var dialogId = "updateStudent-" + this.props.student.entity._links.self.href;

		return (
			<div>
				<a href={"#" + dialogId}>Update</a>

				<div id={dialogId} className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Update an student</h2>

						<form>
						
						<p><input type="text" ref ="firstName"
							 placeholder="firstName" className="field" /></p>
   						<p><input type="text" ref ="lastName"
							placeholder="lastName" className="field"/></p>
   						<p><select onChange={this.handleChange} ref ="gender">
									<option value="MALE">Male</option>
									<option value="FEMALE">Female</option>
								</select></p>
							<p><select onChange={this.handleChange} ref ="currentYear">
									<option selected="selected">Year</option>
									<option value="ONE">1</option>
									<option value="TWO">2</option>
									<option value="THREE">3</option>
									<option value="FOUR">4</option>
								</select></p>
							<p><select onChange={this.handleChange} ref ="currentSemester">
							<option selected="selected">Semester</option>
									<option value="ONE">1</option>
									<option value="TWO">2</option>
								</select></p>
   						<p><input type="text" placeholder="E-mail" ref ="email"
							 className="field"/></p>
							<p><select onChange={this.handleChange}  ref ="department">
									<option selected="selected">Department</option>
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

export default UpdateDialog;