'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class CreateDialog extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		var newEvent = {};
		this.props.attributes.forEach(attribute => {
			newEvent[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
		});
		this.props.onCreate(newEvent);
		this.props.attributes.forEach(attribute => {
			ReactDOM.findDOMNode(this.refs[attribute]).value = ''; // clear out the dialog's inputs
		});
		window.location = "#";
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	render() {
		return (
			<div>
				<div className="logout2"><label for="create"></label>
				<a href="#createEvent"><input className="but" type="submit" id="create" value="Create"/></a>
				</div><br/>
				<div id="createEvent" className="modalDialog" >
					<div>
						<a href="#" title="Close" className="close">X</a>

						<h2>Create Event</h2>
						<form>
							<p><input type="text" ref ="firstName"
							 placeholder="title" className="field" /></p>
							<p><label for="joindate">JoinDate</label><input type="Date" ref ="joinDate" placeholder="joindate" className="field"/></p
							<button onClick={this.handleSubmit}>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateDialog;