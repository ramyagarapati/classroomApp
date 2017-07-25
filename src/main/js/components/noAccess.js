'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import UpdateDialogCo from './updateDialogCo';

class NoAccess extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>User Not AUTHORIZED, PLEASE LOGOUT!!</div>
		)
	}
}

export default NoAccess;