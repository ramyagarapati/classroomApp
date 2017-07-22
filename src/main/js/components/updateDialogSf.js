'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class UpdateDialogSf extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var newStaff = {};
		this.props.attributes.forEach(attribute => {
			newStaff[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onUpdate(newStaff);
		this.props.attributes.forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = ''; // clear out the dialog's inputs
		});
		window.location = "#";
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	render() {
		var inputs = this.props.attributes.map(attribute =>
		<p key={this.props.staff.entity[attribute]}>
			<input type="text" placeholder={attribute}
				   defaultValue={this.props.staff.entity[attribute]}
				   ref={attribute} className="field" />
		</p>
		);

var dialogId = "updateStaff-" + this.props.staff.entity._links.self.href;

		
		return (
			<div>
			<a href={"#" + dialogId}>Update</a>

			<div id={dialogId} className="modalDialog">
				<div>
					<a href="#" title="Close" className="close">X</a>

					<h2>Update an course</h2>
						<form>
						<p> <label for="firstName">FirstName</label><input type="text" ref ="firstName"
							 id="firstName" className="field" /></p>
   						<p><label for="lastName">LastName</label><input type="text" ref ="lastName"
							id="lastName" className="field"/></p>
							
							<p><label for="dept">Department</label><select onChange={this.handleChange} id="dept" ref ="department">
									<option value="CSE">Coumputer Science</option>
									<option value="ECE">Electronics and Communications</option>
								</select></p>
							<p><label for="date">JoinDate</label>
							<input type="date" ref="joinDate" id="date" name="bday" className="field"/></p>
    						
    						
							<button onClick={this.handleSubmit}>Update</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default UpdateDialogSf;