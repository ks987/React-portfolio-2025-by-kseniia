import React, {Component} from "react";
import './SampleWeek.css';


class SampleWeek extends Component {

render(){
    return(
        <div>
            <button>go back</button><div className="month-year-label">January 2025</div><button>go forward</button>
           <div className="week-names-setup">
           <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
           </div>
      
        </div>

    )
}



}



export default SampleWeek;