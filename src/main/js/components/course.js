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
				<td>{this.props.course.entity.name}</td>
				<td>{this.props.course.entity.description}</td>
				<td>{this.props.course.entity.year}</td>
				<td>{this.props.course.entity.semester}</td>
				<td>{this.props.course.entity.courseType}</td>
				<td>{this.props.course.entity.maximumMarks}</td>
				<td>{this.props.course.entity.minimumPassMarks}</td>
				<td>{this.props.course.entity.department}</td>
				<td>
					<UpdateDialogCo course={this.props.course}
								  attributes={this.props.attributes}
								  onUpdate={this.props.onUpdate} />
				</td>
				<td>
					<button onClick={this.handleDelete}>Delete</button>
				</td>
			</tr>
		)
	}
}

export default Course;