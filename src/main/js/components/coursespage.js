'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
const when = require('when');
const client = require('./common/client');

const follow = require('./common/follow'); // function to hop multiple links by "rel"
const stompClient = require('./common/websocket-listener');
const root = '/api';

import CourseList from './courseList';
import CreateDialogCo from './createDialogCo';

class CoursePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {courses: [], attributes: [], page: 1, pageSize: 4, links: {}};
		this.updatePageSize = this.updatePageSize.bind(this);
		this.onCreate = this.onCreate.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onNavigate = this.onNavigate.bind(this);
		this.refreshCurrentPage = this.refreshCurrentPage.bind(this);
		this.refreshAndGoToLastPage = this.refreshAndGoToLastPage.bind(this);
	}
	
	loadFromServer(pageSize) {6511
		follow(client, root, [
				{rel: 'courses', params: {size: pageSize}}]
		).then(courseCollection => {
			return client({
				method: 'GET',
				path: courseCollection.entity._links.profile.href,
				headers: {'Accept': 'application/schema+json'}
			}).then(schema => {
				// tag::json-schema-filter[]
				/**
				 * Filter unneeded JSON Schema properties, like uri references and
				 * subtypes ($ref).
				 */
				Object.keys(schema.entity.properties).forEach(function (property) {
					if (schema.entity.properties[property].hasOwnProperty('format') &&
						schema.entity.properties[property].format === 'uri') {
						delete schema.entity.properties[property];
					}
					else if (schema.entity.properties[property].hasOwnProperty('$ref')) {
						delete schema.entity.properties[property];
					}
				});

				this.schema = schema.entity;
				this.links = courseCollection.entity._links;
				return courseCollection;
				// end::json-schema-filter[]
			});
		}).then(courseCollection => {
			this.page = courseCollection.entity.page;
			return courseCollection.entity._embedded.courses.map(course =>
					client({
						method: 'GET',
						path: course._links.self.href
					})
			);
		}).then(coursePromises => {
			return when.all(coursePromises);
		}).done(courses => {
			this.setState({
				page: this.page,
				courses: courses,
				attributes: Object.keys(this.schema.properties),
				pageSize: pageSize,
				links: this.links
			});
		});
	}
	// tag::on-create[]
	onCreate(newCourse) {
		follow(client, root, ['courses']).done(response => {
			client({
				method: 'POST',
				path: response.entity._links.self.href,
				entity: newCourse,
				headers: {'Content-Type': 'application/json'}
			})
		})
	}
	// end::on-create[]

	// tag::on-update[]
	onUpdate(course, updatedCourse) {
		client({
			method: 'PUT',
			path: course.entity._links.self.href,
			entity: updatedCourse,
			headers: {
				'Content-Type': 'application/json',
				'If-Match': course.headers.Etag
			}
		}).done(response => {
			/* Let the websocket handler update the state */
		}, response => {
			if (response.status.code === 403) {
				alert('ACCESS DENIED: You are not authorized to update ' +
					course.entity._links.self.href);
			}
			if (response.status.code === 412) {
				alert('DENIED: Unable to update ' + course.entity._links.self.href +
					'. Your copy is stale.');
			}
		});
	}
	// end::on-update[]

	// tag::on-delete[]
	onDelete(course) {
		client({method: 'DELETE', path: course.entity._links.self.href}
		).done(response => {/* let the websocket handle updating the UI */},
		response => {
			if (response.status.code === 403) {
				alert('ACCESS DENIED: You are not authorized to delete ' +
					course.entity._links.self.href);
			}
		});
	}
	// end::on-delete[]

	onNavigate(navUri) {
		client({
			method: 'GET',
			path: navUri
		}).then(courseCollection => {
			this.links = courseCollection.entity._links;
			this.page = courseCollection.entity.page;

			return courseCollection.entity._embedded.courses.map(course =>
					client({
						method: 'GET',
						path: course._links.self.href
					})
			);
		}).then(coursePromises => {
			return when.all(coursePromises);
		}).done(courses => {
			this.setState({
				page: this.page,
				courses: courses,
				attributes: Object.keys(this.schema.properties),
				pageSize: this.state.pageSize,
				links: this.links
			});
		});
	}


	// tag::websocket-handlers[]
	refreshAndGoToLastPage(message) {
		follow(client, root, [{
			rel: 'courses',
			params: {size: this.state.pageSize}
		}]).done(response => {
			if (response.entity._links.last !== undefined) {
				this.onNavigate(response.entity._links.last.href);
			} else {
				this.onNavigate(response.entity._links.self.href);
			}
		})
	}

	refreshCurrentPage(message) {
		follow(client, root, [{
			rel: 'courses',
			params: {
				size: this.state.pageSize,
				page: this.state.page.number
			}
		}]).then(courseCollection => {
			this.links = courseCollection.entity._links;
			this.page = courseCollection.entity.page;

			return courseCollection.entity._embedded.courses.map(course => {
				return client({
					method: 'GET',
					path: course._links.self.href
				})
			});
		}).then(coursePromises => {
			return when.all(coursePromises);
		}).then(courses => {
			this.setState({
				page: this.page,
				courses: courses,
				attributes: Object.keys(this.schema.properties),
				pageSize: this.state.pageSize,
				links: this.links
			});
		});
	}
	// end::websocket-handlers[]
	
	updatePageSize(pageSize) {
		if (pageSize !== this.state.pageSize) {
			this.loadFromServer(pageSize);
		}
	}

	// tag::register-handlers[]
	componentDidMount() {
		this.loadFromServer(this.state.pageSize);
		stompClient.register([
			{route: '/topic/newCourse', callback: this.refreshAndGoToLastPage},
			{route: '/topic/updateCourse', callback: this.refreshCurrentPage},
			{route: '/topic/deleteCourse', callback: this.refreshCurrentPage}
		]);
	}

	render() {
		return (
			<div>
				<CreateDialogCo attributes={this.state.attributes} onCreate={this.onCreate}/>
				<CourseList page={this.state.page}
							  courses={this.state.courses}
							  links={this.state.links}
							  pageSize={this.state.pageSize}
							  attributes={this.state.attributes}
							  onNavigate={this.onNavigate}
							  onUpdate={this.onUpdate}
							  onDelete={this.onDelete}
							  updatePageSize={this.updatePageSize} />
			</div>
		)
	}
}

export default CoursePage;