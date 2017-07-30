import React from 'react';
import TextField from 'material-ui/TextField';

<<<<<<< HEAD
import events from './events';
=======
import TodosStore from './TodosStore';
>>>>>>> 1275fd570819b21ef340c1b29bd9d13ae2cae79a

const RETURN_KEY_CODE = 13;

class NewTodo extends React.Component {
    
<<<<<<< HEAD
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
=======
    constructor() {
        super();
        this.styles = {
            spacing: {
                float: 'left',
                width: '30%',
                margin: '3%'
            },
            prompt: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: 16,
                lineHeight: '16px'
            }
        };
    }
    
    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();
            if (text == '') {
                return;
            }
            TodosStore.add(event.target.value.trim());
            
            // clear input
            event.target.value = '';
        }
    }
    
    render() {
        return (
            <div style={this.styles.spacing} >
                <p style={this.styles.prompt}>What do you want to get done? </p>
                <TextField
<<<<<<< Updated upstream
>>>>>>> 1275fd570819b21ef340c1b29bd9d13ae2cae79a

=======
>>>>>>> Stashed changes
                    onKeyDown={this.onKeyDown} 
                    hintText={"New todo"}
                    fullWidth={true}
<<<<<<< HEAD
                />*/
                <p><input type="text" ref ="title"
					 placeholder="title" /></p>
                <p><label for="startDate">start date</label><input type="Date" ref ="startDate" placeholder="startDate" className="field"/></p>
                <p><label for="endDate">JoinDate</label><input type="Date" ref ="endDate" placeholder="endDate" className="field"/></p>
                <button type="submit">Submit</button>
                </form>
=======
                />
>>>>>>> 1275fd570819b21ef340c1b29bd9d13ae2cae79a
            </div>
        );
    }
}

export default NewTodo;