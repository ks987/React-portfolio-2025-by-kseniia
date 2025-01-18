import React, { Component } from "react";
import SampleWeek from './SampleWeek';
import { Link } from 'react-router-dom';
import './SampleMonth.css';




class SampleMonth extends Component {




    render() {

        return (
            <div>
                <nav className="navbar-calendar">
                    <Link id="open-one-day-btn" className="calendar-link" to='/go-to-day'>Day</Link>
                    <Link id="github-link" className="calendar-link" to='/go-to-four-days'>Four Days</Link>
                    <Link id="fake-log-in" className="calendar-link" to='/go-to-week'>Week</Link>
                    <Link id="calendar-app" className="calendar-link" to='/go-to-month'>Month</Link>
                    <Link id="to-do-app" className="calendar-link" to='/go-to-year'>Year</Link>
                </nav>

                <div>
                    <h1>Month view</h1>
                </div>
            </div>
        )
    }
}


export default SampleMonth;

