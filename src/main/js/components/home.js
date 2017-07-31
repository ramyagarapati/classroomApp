'use strict';
import React from 'react';
import events from './events';
import BigCalendar from 'react-big-calendar';
import { Link } from 'react-router';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

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
         	<FlatButton className="but" label="Schedule Session" fullWidth={true} />
         	<br/>
	         <div className="container">
		         <BigCalendar
		         events={events}
		         step={15}
		         timeslots={8}
		         defaultDate={new Date()}
		       />
		      </div>         	    
		</div>
      )
   }
}
export default Home;