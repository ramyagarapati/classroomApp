'use strict';
import React from 'react';
import events from './events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

function Event({ event }) {
	  return (
	    <span>
	      <strong>
	      {event.title}
	      </strong>
	      { event.desc && (':  ' + event.desc)}
    </span>
  )
}

function EventAgenda({ event }) {
  return <span>
    <em style={{ color: 'magenta'}}>{event.title}</em>
    <p>{ event.desc }</p>
  </span>
}

class Home extends React.Component {
	
	constructor(props) {
		super(props);
		//const role = JSON.parse(localStorage.getItem('role'));
		this.notAuthorizedPath = '/noAccess';
		}
   render() {
      return (
         <div className="home">          
	         <BigCalendar
	         events={events}
	         startAccessor='startDate'
	         endAccessor='endDate'
	         defaultView='agenda'
	       />
         </div>
      )
   }
}

export default Home;