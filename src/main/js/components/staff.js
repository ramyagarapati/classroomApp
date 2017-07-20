'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import UpdateDialogSf from './updateDialogSf';

class Staff extends React.Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		this.props.onDelete(this.props.staff);
	}

	render() {
		return (
			<tr>
				<td>{this.props.staff.entity.firstName}</td>
				<td>{this.props.staff.entity.lastName}</td>
				<td>{this.props.staff.entity.department}</td>
				<td>{this.props.staff.entity.joinDate}</td>
				<td>ntng</td>
				<td>
					<UpdateDialogSf staff={this.props.staff}
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

export default Staff;