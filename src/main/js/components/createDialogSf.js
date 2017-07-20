'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class CreateDialogSf extends React.Component {

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
		this.props.onCreate(newStaff);
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
				<a href="#createStaff"><input className="but" type="submit" id="create" value="Create"/></a>
				</div><br/>
				<div id="createStaff" className="modalDialog" >
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Create new staff</h2>
						<form>
							<p><input type="text" ref ="firstName"
							 placeholder="firstName" className="field" /></p>
    						<p><input type="text" ref ="lastName"
							placeholder="lastName" className="field"/></p>
							
							<p><select onChange={this.handleChange} ref ="department">
									<option value="CSE">Coumputer Science</option>
									<option value="ECE">Electronics and Communications</option>
								</select></p>
							<p><input type="text" ref ="joinDate" placeholder="joinDate" className="field"/></p>
    						
    						
							<button onClick={this.handleSubmit}>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateDialogSf;