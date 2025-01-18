import React, { Component } from "react";
import {Routes, Route, Link} from 'react-router-dom';



import './SampleCalendar.css';




class SampleCalendar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'],
            year: [2025]
        }

        this.createWeek = this.createWeek.bind(this);
    }



    createWeek(dayofweek) {

    }



    boxesGenerator() {

    }

    render() {

        return (
            <div className='SampleCalendar'>
                <div>
                <div className="title-calendar-app">Calendar App</div>
                <nav className="navbar-calendar"> 
                    <Link id="open-one-day-btn" className="calendar-link" to='/go-to-day'>Day</Link>
                    <Link id="github-link" className="calendar-link" to='/go-to-four-days'>Four Days</Link>
                    <Link id="fake-log-in" className="calendar-link" to='/go-to-week'>Week</Link>
                    <Link id="calendar-app" className="calendar-link" to='/go-to-month'>Month</Link>
                    <Link id="to-do-app" className="calendar-link" to='/go-to-year'>Year</Link>
                </nav>



                <div>this is the year YEAR YEAR view</div>


           


                </div>
            </div>
        )
    }
}


export default SampleCalendar;

