'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const RETURN_KEY_CODE = 13;

class CreateEventPage extends React.Component {

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
				<div className="logout2"><label for="create classroom schedule"></label>
				</div><br/>
				<div id="CreateEvent" >
					<div>
						<h2>Create classroom session</h2>
						<form>
							<p><TextField onChange={this.handleChange} 
							 hintText={"session type"} fullWidth={true} /></p>
    						<p><TextField type="date" selected={new Date()}
    						hintText="Start Date" onChange={this.handleChange} /></p>	
    						<p><TextField type="date" selected={new Date()}
    						hintText="To Date" onChange={this.handleChange} /></p>
    						<p><TextField onChange={this.handleChange}
							hintText={"Description "} fullWidth={true} /></p>
							<button onClick={this.handleSubmit}>Create</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateEventPage;