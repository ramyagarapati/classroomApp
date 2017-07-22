'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Course from './course';

class CourseList extends React.Component {

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
				<h3 className="pages">Page {this.props.page.number + 1} of {this.props.page.totalPages}</h3> : null;
		
		var courses = this.props.courses.map(course =>
			<Course key={course.entity._links.self.href}
					  course={course}
					  attributes={this.props.attributes}
					  onUpdate={this.props.onUpdate}
					  onDelete={this.props.onDelete}/>
		);

		var navLinks = [];
		if ("first" in this.props.links) {
			navLinks.push(<button key="first" onClick={this.handleNavFirst}>&lt;&lt; First</button>);
		}
		if ("prev" in this.props.links) {
			navLinks.push(<button key="prev" onClick={this.handleNavPrev}>&lt; Prev</button>);
		}
		if ("next" in this.props.links) {
			navLinks.push(<button key="next" onClick={this.handleNavNext}>Next &gt;</button>);
		}
		if ("last" in this.props.links) {
			navLinks.push(<button key="last" onClick={this.handleNavLast}>Last &gt;&gt;</button>);
		}

		return (
			<div>
				{pageInfo}
				<div className="pages2"><label><h3>courses per page - <input type="number" ref="pageSize" defaultValue={this.props.pageSize} onInput={this.handleInput}/></h3></label></div>
				<div>
					<table>
						<tbody>
							<tr>
								
								<th>Course Name</th>
								<th>Description</th>
								<th>year</th>
								<th>Semester</th>
								<th>Course Type</th>
								<th>Max Marks</th>
								<th>Min Marks</th>
								<th>Department</th>
								<th></th>
							</tr>
							{courses}
						</tbody>
					</table>
				</div>
				<div className="navLinks">
					{navLinks}
				</div>
			</div>
		)
	}
}

export default CourseList;