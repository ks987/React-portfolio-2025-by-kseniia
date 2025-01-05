import React, { Component } from "react";

import SampleCalendar from './SampleCalendar';
import './SampleCalendar.css';



class Calendar extends Component {


    render(){

        return(
            <div>
                <div>
                    <SampleCalendar/>
                </div>
            </div>
        )
    }
}


export default Calendar;

