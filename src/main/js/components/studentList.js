'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Student from './student';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {
	  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
	} from 'material-ui/Table';
	
	const style = {
			  margin: 12,
			};
class StudentList extends React.Component {

	constructor(props) {
		super(props);
		this.handleNavFirst = this.handleNavFirst.bind(this);
		this.handleNavPrev = this.handleNavPrev.bind(this);
		this.handleNavNext = this.handleNavNext.bind(this);
		this.handleNavLast = this.handleNavLast.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}		
	handleInput(e) {
		e.preventDefault();
		var pageSize = ReactDOM.findDOMNode(this.refs.pageSize).value;
		if (/^[0-9]+$/.test(pageSize)) {
			this.props.updatePageSize(pageSize);
		} else {
			ReactDOM.findDOMNode(this.refs.pageSize).value = pageSize.substring(0, pageSize.length - 1);
		}
	}
	handleNavFirst(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.first.href);
	}

	handleNavPrev(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.prev.href);
	}

	handleNavNext(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.next.href);
	}

	handleNavLast(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.last.href);
	}

	render() {
	var pageInfo = this.props.page.hasOwnProperty("number") ?
		<h3 className="pageControls" >Page {this.props.page.number + 1} of {this.props.page.totalPages}</h3> : null;
		
		var students = this.props.students.map(student =>
			<Student key={student.entity._links.self.href}
					  student={student}
					  attributes={this.props.attributes}
					  onUpdate={this.props.onUpdate}
					  onDelete={this.props.onDelete}/>
		);
		
		var navLinks = [];
		if ("first" in this.props.links) {
			navLinks.push(<RaisedButton key="first" onClick={this.handleNavFirst} label="&lt;&lt; First"/>);
		}
		if ("prev" in this.props.links) {
			navLinks.push(<RaisedButton key="prev" onClick={this.handleNavPrev} label="&lt; Prev"/>);
		}
		if ("next" in this.props.links) {
			navLinks.push(<RaisedButton key="next" onClick={this.handleNavNext} label="Next &gt;"/>);
		}
		if ("last" in this.props.links) {
			navLinks.push(<RaisedButton key="last" onClick={this.handleNavLast} label="Last &gt;&gt; "/>);
		}
		
		return (
			<div>
				<div className="tableControls">
					<div className="pages2">
						<h3 className="pageControls" >Page size -<input ref="pageSize" type="number" defaultValue={this.props.pageSize} onInput={this.handleInput}/></h3>
					</div>
				</div>
				<br/>
				<div className="tables">
					<br/>
					<Divider />
					<Table className="standard">
						<TableHeader>
							<TableRow>
								<TableHeaderColumn className="standardTh">First Name</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">Last Name</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">E-mail</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">Gender</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">Year</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">Semester</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">Department</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">Join Date</TableHeaderColumn>
								<TableHeaderColumn className="standardTh">Graduation Year</TableHeaderColumn>
								<TableHeaderColumn className="standardTh"></TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody className="standardTbody">
							{students}
						</TableBody>
					</Table>
				</div>
				<div className="navLinks">
					{navLinks}
					{pageInfo}
				</div>
			</div>
		)
	}
}

export default StudentList;