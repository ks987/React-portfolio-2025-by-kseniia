import React, { Component } from "react";

import {Link} from "react-router-dom";

import './SampleWeek.css';


class SampleWeek extends Component {

    render() {
        return (
            <div>
                <nav className="navbar-calendar">
                    <button className="calendar-color-btn">THEME</button>
                    <Link id="open-one-day-btn" className="calendar-link" to='/go-to-day'>Day</Link>
                    <Link id="github-link" className="calendar-link" to='/go-to-four-days'>Four Days</Link>
                    <Link id="fake-log-in" className="calendar-link" to='/go-to-week'>Week</Link>
                    <Link id="calendar-app" className="calendar-link" to='/go-to-month'>Month</Link>
                    <Link id="to-do-app" className="calendar-link" to='/go-to-year'>Year</Link>
                </nav>


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