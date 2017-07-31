'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Student from './student';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {
	  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
	} from 'material-ui/Table';
import Slider from 'material-ui/Slider';
	
const styles = {
		headStyle : {textAlign: 'center',
			backgroundColor: '#0066CC',
			fontSize:'15px',
			textColor: '#FAFAFA',
			fontFamily:'Tahoma',
			fontWeight : 'bold'
			}
		};

const min = 1;
const max = 15;

class StudentList extends React.Component {

	constructor(props) {
		super(props);
		this.handleNavFirst = this.handleNavFirst.bind(this);
		this.handleNavPrev = this.handleNavPrev.bind(this);
		this.handleNavNext = this.handleNavNext.bind(this);
		this.handleNavLast = this.handleNavLast.bind(this);
		this.handleSlider = this.handleSlider.bind(this);
		this.state = { selected:false,
				slider: 4, };
		}

	handleSlider(event, value) {
		 this.setState({slider: value});
		 this.props.updatePageSize(value);
	};
		  
	handleNavFirst(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.first.href);
	};

	handleNavPrev(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.prev.href);
	};

	handleNavNext(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.next.href);
	};

	handleNavLast(e) {
		e.preventDefault();
		this.props.onNavigate(this.props.links.last.href);
	};

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
					{pageInfo}
				</div>
				
				<div className="tables" >
					<Slider ref="pageSize1" min={min} max={max} step={1} value={this.state.slider}
					onChange={this.handleSlider} /> 
					<Divider />
					<Table className="standard">
						<TableHeader>
							<TableRow selectable={this.state.selected} >
								<TableHeaderColumn className="standardTh" style={styles.headStyle} >First Name</TableHeaderColumn>
								<TableHeaderColumn className="standardTh" style={styles.headStyle} >Last Name</TableHeaderColumn>
								<TableHeaderColumn className="standardTdA" style={styles.headStyle} >E-mail</TableHeaderColumn>
								<TableHeaderColumn className="standardTdA" style={styles.headStyle} >Gender</TableHeaderColumn>
								<TableHeaderColumn className="standardTh" style={styles.headStyle} >Year</TableHeaderColumn>
								<TableHeaderColumn className="standardTh" style={styles.headStyle} >Semester</TableHeaderColumn>
								<TableHeaderColumn className="standardTh" style={styles.headStyle} >Department</TableHeaderColumn>
								<TableHeaderColumn className="standardTdA" style={styles.headStyle} >Join Date</TableHeaderColumn>
								<TableHeaderColumn className="standardTdA" style={styles.headStyle} >Graduation Year</TableHeaderColumn>
								<TableHeaderColumn className="standardTdA" style={styles.headStyle} ></TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody className="standardTbody" >
							{students}
						</TableBody>
					</Table>
				</div>
				<div className="navLinks">
					{navLinks}
				</div>
			</div>
		)
	}
}

export default StudentList;