'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import  AuthorizedComponent from 'react-router-role-authorization';
import Home from './components/home';
import StudentPage from './components/studentPage';
import StaffPage from './components/staffPage';
import CoursesPage from './components/coursesPage';
import CreateEventPage from './components/createEventPage';
import NoAccess from './components/noAccess';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
//From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

class App extends React.Component {
	
	  constructor(props) {
		    super();
		    this.state = {
		      activeTab: props.activeTab || 1,
		      slideIndex: 'a',
		  };
    }
	
	handleChange(value) {
		this.setState({
			slideIndex : value,
		});
	};
	
    render() {
      return (
        <MuiThemeProvider>
	        <div>
		        <Tabs className="tabs" onChange={this.handleChange} value={this.state.slideIndex} >
			       	<Tab className="tab" label={<Link to="/home" ><label>Home</label></Link>} value='a' ></Tab>
			       	<Tab className="tab" label={<Link to="/students" ><label>Students</label></Link>} value='b' />
			       	<Tab className="tab" label={<Link to="/staff" ><label>Staff</label></Link>} value='c'/>
			       	<Tab className="tab" label={<Link to="/courses" ><label>Courses</label></Link>}  value='d' />
		       	 </Tabs>
	        <div>{this.props.children || <Home/>}</div>
	        </div>
     	</MuiThemeProvider>
      )
   };
  
}

ReactDOM.render((
   <Router history={browserHistory} >
      <Route path = "/" component = {App}>
        <Route path = "/home" component = {Home} />      	
        <Route path = "/students" component = {StudentPage} />
        <Route path = "/staff" component = {StaffPage} />
        <Route path = "/courses" component = {CoursesPage} />
      </Route>
      <Route component={NoAccess} path="/noAccess" />
   </Router>
	
), document.getElementById('react'));

