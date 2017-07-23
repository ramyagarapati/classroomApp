'use strict';
import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class Home extends React.Component {
	
	constructor(props) {
		super(props);
		}
	
   render() {
      return (
         <div className="home">          
	         <BigCalendar
	         events={[]}
	         startAccessor='startDate'
	         endAccessor='endDate'
	       />
         </div>
      )
   }
}

export default Home;