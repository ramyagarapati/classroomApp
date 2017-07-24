'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class UpdateDialogCo extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var updatedCourse = {};
		this.props.attributes.forEach(attribute => {
			updatedCourse[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onUpdate(this.props.course, updatedCourse);
		window.location = "#";
	}

	render() {
		var inputs = this.props.attributes.map(attribute =>
				<p key={this.props.course.entity[attribute]}>
					<input type="text" placeholder={attribute}
						   defaultValue={this.props.course.entity[attribute]}
						   ref={attribute} className="field" />
				</p>
		);

		var dialogId = "updateCourse-" + this.props.course.entity._links.self.href;

		return (
			<div>
				<a href={"#" + dialogId}>{this.props.dispName}</a>

				<div id={dialogId} className="modalDialog">
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Update an course</h2>

						<form>
						<p><input type="text" ref ="name"
							 placeholder="courseName" className="field" /></p>
 						<p><input type="text" ref ="description"
							placeholder="description" className="field"/></p>
							<p><select onChange={this.handleChange} ref ="year">
							<option>Year</option>
									<option value="ONE">1</option>
									<option value="TWO">2</option>
									<option value="THREE">3</option>
									<option value="FOUR">4</option>
								</select></p>
							<p><select onChange={this.handleChange} ref ="semester">
									<option>Semester</option>
									<option value="ONE">1</option>
									<option value="TWO">2</option>
								</select></p>
								<p><select onChange={this.handleChange} ref ="courseType">
								<option>CourseType</option>
								<option value="CLASSROOM">classroom</option>
								<option value="LAB">lab</option>
							</select></p>
							<p><input type="number" ref ="maximumMarks"
								placeholder="maxmarks" className="field"/></p>
							<p><input type="number" ref ="minimumPassMarks"
								placeholder="minimarks" className="field"/></p>
							<p><select onChange={this.handleChange} ref ="department">
							<option>Department</option>
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

export default UpdateDialogCo;