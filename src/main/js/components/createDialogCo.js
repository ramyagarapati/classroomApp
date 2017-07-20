'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class CreateDialogCo extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var newCourse = {};
		this.props.attributes.forEach(attribute => {
			newCourse[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onCreate(newCourse);
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
			<a href="#createCourse"><input className="but" type="submit" id="create" value="Create"/></a>
			</div><br />
				<div id="createCourse" className="modalDialog" >
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Create new course</h2>
						<form>
						<p><input type="text" ref ="name"
							 placeholder="courseName" className="field" /></p>
  						<p><input type="text" ref ="description"
							placeholder="description" className="field"/></p>
							<p><select onChange={this.handleChange} ref ="year">
									<option value="ONE">1</option>
									<option value="TWO">2</option>
									<option value="THREE">3</option>
									<option value="FOUR">4</option>
								</select></p>
							<p><select onChange={this.handleChange}  ref ="semester">
									<option value="ONE">1</option>
									<option value="TWO">2</option>
								</select></p>
								<p><select onChange={this.handleChange} ref ="courseType">
								<option value="CLASSROOM">classroom</option>
								<option value="LAB">lab</option>
							</select></p>
							<p><input type="number" ref ="maximumMarks"
								placeholder="maximumMarks" className="field"/></p>
							<p><input type="number" ref ="minimumPassMarks"
								placeholder="minimumPassMarks" className="field"/></p>
							<p><select onChange={this.handleChange} ref ="department">
									<option value="CSE">Coumputer Science</option>
									<option value="ECE">Electronics and Communications</option>
								</select></p>
						<button onClick={this.handleSubmit}>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateDialogCo;