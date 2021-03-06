'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import UpdateDialogCo from './updateDialogCo';

class Course extends React.Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		this.props.onDelete(this.props.course);
	}
	render() {
		return (
			<tr>
				<td><UpdateDialogCo course={this.props.course}
				  attributes={this.props.attributes}
				  onUpdate={this.props.onUpdate}
				dispName={this.props.course.entity.name} /></td>
				<td>{this.props.course.entity.description}</td>
				<td>{this.props.course.entity.year}</td>
				<td>{this.props.course.entity.semester}</td>
				<td>{this.props.course.entity.courseType}</td>
				<td>{this.props.course.entity.maximumMarks}</td>
				<td>{this.props.course.entity.minimumPassMarks}</td>
				<td>{this.props.course.entity.department}</td>
				<td>
					<button className="delete" onClick={this.handleDelete}>X</button>
				</td>
			</tr>
		)
	}
}

export default Course;