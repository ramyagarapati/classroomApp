'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import UpdateDialog from './updateDialog';

class Student extends React.Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		this.props.onDelete(this.props.student);
	}

	render() {
		return (
			<tr>
				<td>{this.props.course.entity.name}</td>
				<td>{this.props.course.entity.description}</td>
				<td>{this.props.course.entity.year}</td>
				<td>{this.props.course.entity.semester}</td>
				<td>{this.props.course.entity.active}</td>
				<td>{this.props.course.entity.courseType}</td>
				<td>{this.props.course.entity.maximumMarks}</td>
				<td>{this.props.course.entity.minimumPassMarks}</td>
				<td>{this.props.course.entity.manadotory}</td>
				<td>{this.props.course.entity.department}</td>
				<td>
					<UpdateDialog student={this.props.student}
								  attributes={this.props.attributes}
								  onUpdate={this.props.onUpdate} />
				</td>
				<td>
					<div className="but"><button onClick={this.handleDelete}>Delete</button></div>
				</td>
			</tr>
		)
	}
}

export default Student;