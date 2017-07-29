import React from 'react';
import TextField from 'material-ui/TextField';

import events from './events';

const RETURN_KEY_CODE = 13;

class NewTodo extends React.Component {
    
   constructor(props) {
        super(props);
        this.state = {
          events: props
        };
    }
    
   add(event)
   {
	   event.preventDefault();
	    this.idCount++;
	    let title = this.refs.title.value;
	    let startDate=this.refs.startDate.value;
	    let endDate=this.refs.endDate.value;
	    this.setState({events:this.state.events.push({})});
	    this.refs.title.value='';
	    this.refs.startDate.value='';
	    this.refs.endDate.value='';
   }
	    
    
    render() {
        return (
           /* <div style={this.styles.spacing} >*/
        	<div>	
            <form onSubmit{this.add.bind(this)}>
                /*<p style={this.styles.prompt}>What do you want to get done? </p>*/
              /*  <TextField

                    onKeyDown={this.onKeyDown} 
                    hintText={"New todo"}
                    fullWidth={true}
                />*/
                <p><input type="text" ref ="title"
					 placeholder="title" /></p>
                <p><label for="startDate">start date</label><input type="Date" ref ="startDate" placeholder="startDate" className="field"/></p>
                <p><label for="endDate">JoinDate</label><input type="Date" ref ="endDate" placeholder="endDate" className="field"/></p>
                <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewTodo;