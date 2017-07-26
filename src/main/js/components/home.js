'use strict';
import React from 'react';
import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import NewTodo from './NewTodo';

BigCalendar.momentLocalizer(moment);
class Home extends React.Component {
	constructor(props) {
		super(props);
		//const role = JSON.parse(localStorage.getItem('role'));
		this.notAuthorizedPath = '/noAccess';
		}
   render() {
      return (
         <div className="home">
         	<div>Calender view of classroom schedule</div>
         	<NewTodo/>
	         <div className="jumbotron">
		         <div className="container">
			         <BigCalendar
			         events={events}
			         step={15}
			         timeslots={8}
			         defaultDate={new Date()}
			       />
			      </div>         
			  </div>	 
		  </div>
      )
   }
}
export default Home;