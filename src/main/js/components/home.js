'use strict';
import React from 'react';

class Home extends React.Component {
   render() {
      return (
         <div className="home">          
                <table width="80%" align="center" >
                <tr className="padding">
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thrusday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr> 

                <tr className="padding">
                    <td>8:30am - 10:00am</td>
                    
                        <td>OS</td>
                        <td>DBMS</td>
                        <td title="No Class" class="Holiday"></td>
                        <td>AI</td>
                        <td>DOA</td>
                        <td>WT</td>                   
                </tr>

                <tr className="padding">
                    <td>10:00am - 11:30am</td>
                    
                        <td>AI</td>
                        <td>Elective</td>
                        <td>DBMS</td>
                        <td>OS</td>
                        <td>WT</td>
                        <td>DOA</td>
                </tr>

                <tr className="padding">
                    <td>11:30am - 01:00pm</td>
                    
                        <td>DBMS</td>
                        <td>WT</td>
                        <td>DOA</td>
                        <td>DOA</td>
                        <td>Elective</td>
                        <td>OS</td>

                </tr>

                <tr className="padding">
                    <td>02:00pm - 03:30pm</td>
                    
                        <td>Elective</td>
                        <td>DAA</td>
                        <td>OS</td>
                        <td>DBMS LAB</td>
                        <td>OS</td>
                        <td>OS LAB</td>
                </tr>

                <tr className="padding">
                    <td>03:30pm - 05:00pm</td>
                    
                        <td>DOA</td>
                        <td>AI</td>
                        <td></td>
                        <td>DBMS LAB</td>
                        <td>OS</td>
                        <td>OS LAB</td>
                </tr>
            </table>
         </div>
      )
   }
}

export default Home;