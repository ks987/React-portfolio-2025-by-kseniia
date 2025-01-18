import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './OneDay.css';

import OneTask from './OneTask';

class OneDay extends Component {










    render() {

        return (
            <div className="OneDay">
                <div className="toolbar-calendar">
                <button className="calendar-color-btn">
                    <i class="fa-solid fa-palette"></i> <div className="color-btn-text">Change color theme</div></button>
                {/* a floating description of the palette icon*/}
                </div>




                <nav className="navbar-calendar">
                    <Link id="open-one-day-btn" className="calendar-link" to='/go-to-day'>Day</Link>
                    <Link id="github-link" className="calendar-link" to='/go-to-four-days'>Four Days</Link>
                    <Link id="fake-log-in" className="calendar-link" to='/go-to-week'>Week</Link>
                    <Link id="calendar-app" className="calendar-link" to='/go-to-month'>Month</Link>
                    <Link id="to-do-app" className="calendar-link" to='/go-to-year'>Year</Link>
                </nav>

                <div className="Planner">

                <div>planner </div>

                <div>Add a new task</div>
                <input type="text" className="Planner-input-field" placeholder="type a new task"></input>
                <button className="Planner-add-btn">Add</button>





                <div className="timeslots">
                    <div className="timeslots-row"><div className="Planner-time">12:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">1:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">2:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">3:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">4:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">5:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">6:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">7:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">8:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">9:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">10:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">11:00 AM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">12:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">1:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">2:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">3:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">4:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">5:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">6:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">7:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">8:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">9:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">10:00 PM</div></div>
                    <div className="timeslots-row"><div className="Planner-time">11:00 PM</div></div>
                </div>
            </div>
            </div>
        )
    }

}

export default OneDay;