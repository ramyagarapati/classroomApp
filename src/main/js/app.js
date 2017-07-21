'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Router, Route, Link, browserHistory } from 'react-router';
import  AuthorizedComponent from 'react-router-role-authorization';
import Home from './components/home';
import StudentPage from './components/studentPage';
import StaffPage from './components/staffPage';
import CoursesPage from './components/coursesPage';

class App extends React.Component {
	
	  constructor(props) {
		    super();
		    this.state = {
		      // Takes active tab from props if it is defined there
		      activeTab: props.activeTab || 1
		  };
    } 
    render() {
      return (
    	  
        <div className = "tabs">
        	<div>
	        	<ul>
	        		<li className = "tab">
	        		<label><Link to="/home" >Home</Link></label>
	        		</li>
	        		<li className = "tab">
	        		<label ><Link to="/students" >Student</Link></label>
	        		</li>
	        		<li className = "tab">
	        		<label ><Link to="/staff">Staff</Link></label>
	        		</li>
	        		<li className = "tab">
	        		<label ><Link to="/courses">Courses</Link></label>
	        		</li>
	            </ul>    
            </div>
            <br />
             <div>
             <ul><div>{this.props.children || <Home/>}</div></ul>
     		</div>
            </div>     
      )
   };
  
}

ReactDOM.render((
   <Router history={browserHistory} >
      <Route path = "/" component = {App}>
        <Route  path = "home" component = {Home} />
        <Route authorize={['ADMIN','STUDENT']} path = "students" component = {StudentPage} />
        <Route authorize={['ADMIN','STAFF']} path = "staff" component = {StaffPage} />
        <Route authorize={['ADMIN']} path = "courses" component = {CoursesPage} />
      </Route>
   </Router>
	
), document.getElementById('react'));

