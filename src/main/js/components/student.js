'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import UpdateDialog from './updateDialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
	  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
	} from 'material-ui/Table';

class Student extends React.Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {value: 1};
	}

	handleDelete() {
		this.props.onDelete(this.props.student);
	}
	handleChange(event, index, value) { 
		this.setState({value});
	}
	
	render() {
		return (
			<TableRow >
				<TableRowColumn ></TableRowColumn>
				<TableRowColumn className="standardTd" >{this.props.student.entity.firstName}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.lastName}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.email}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.gender}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.currentYear}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.currentSemester}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.department}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.joinDate}</TableRowColumn>
				<TableRowColumn className="standardTd">{this.props.student.entity.graduationYear}</TableRowColumn>
				<TableRowColumn className="standardTd">
					<DropDownMenu value={this.state.value} onChange={this.handleChange}>
			          <MenuItem value={1} primaryText="Update" />
			          <MenuItem value={2} primaryText="Delete" />
					</DropDownMenu>
				</TableRowColumn>
			</TableRow>
		)
	}
}

export default Student;