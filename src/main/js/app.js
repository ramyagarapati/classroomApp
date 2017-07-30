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

const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginBottom: 12,
		    fontWeight: 400,
		  },
		  slide: {
		    padding: 10,
		  },
		};

class App extends React.Component {
	
	  constructor(props) {
		    super();
		    this.state = {
		      // Takes active tab from props if it is defined there
		      activeTab: props.activeTab || 1,
		      slideIndex: 0
		  };
    }
	
   handleChange(value){
	    this.setState({
	      slideIndex: value,
	  });
	};
	
    render() {
      return (
        <MuiThemeProvider>
        	<div>
	         <Tabs onChange={this.handleChange} value={this.state.slideIndex} >
		        <Tab label={<Link to="/home" ><label>Home</label></Link>} value={0} />
		        <Tab label={<Link to="/students" ><label>Students</label></Link>} value={1} />
		        <Tab label={<Link to="/staff" ><label>Staff</label></Link>} value={2} />
		        <Tab label={<Link to="/courses" ><label>Courses</label></Link>} value={3} />
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

