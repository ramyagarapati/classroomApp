'use strict';
import React from 'react';
import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
<<<<<<< HEAD
import NewTodo from './NewTodo';
=======

BigCalendar.momentLocalizer(moment);
>>>>>>> 2d036be6df906f460ee89762494552d82094bd27

BigCalendar.momentLocalizer(moment);
class Home extends React.Component {
<<<<<<< HEAD
=======
	
>>>>>>> 2d036be6df906f460ee89762494552d82094bd27
	constructor(props) {
		super(props);
		//const role = JSON.parse(localStorage.getItem('role'));
		this.notAuthorizedPath = '/noAccess';
		}
   render() {
      return (
         <div className="home">
         	<div>Calender view of classroom schedule</div>
<<<<<<< HEAD
         	<NewTodo/>
=======
>>>>>>> 2d036be6df906f460ee89762494552d82094bd27
	         <div className="jumbotron">
		         <div className="container">
			         <BigCalendar
			         events={events}
			         step={15}
			         timeslots={8}
			         defaultDate={new Date()}
			       />
			      </div>         
<<<<<<< HEAD
			  </div>	 
=======
			  </div>	    
>>>>>>> 2d036be6df906f460ee89762494552d82094bd27
		  </div>
      )
   }
}
export default Home;