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
				<td>{this.props.student.entity.firstName}</td>
				<td>{this.props.student.entity.lastName}</td>
				<td>{this.props.student.entity.email}</td>
				<td>{this.props.student.entity.gender}</td>
				<td>{this.props.student.entity.currentYear}</td>
				<td>{this.props.student.entity.currentSemester}</td>
				<td>{this.props.student.entity.department}</td>
				<td>{this.props.student.entity.joinDate}</td>
				<td>{this.props.student.entity.graduationYear}</td>
				<td>
					<div className="btn-group">
						<a className="btn dropdown-toggle" data-toggle="dropdown" href="#">
				    		Action
				    	<span className="caret"></span>
				    	</a>
						<ul className="dropdown-menu">
							<li><UpdateDialog student={this.props.student}
							  attributes={this.props.attributes}
							  onUpdate={this.props.onUpdate} /></li>
							<li><a className="delete" onClick={this.handleDelete}>Delete</a></li>
						</ul>
					</div>
				</td>
			</tr>
		)
	}
}

export default Student;