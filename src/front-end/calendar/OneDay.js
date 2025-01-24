import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Overlay from './Overlay.js';
import SampleGrid from './SampleGrid.js';

// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Footer from '../Footer.js'

// import sample tasks
import TaskCode from './sample-tasks/TaskCode.js';
import TaskGroceries from './sample-tasks/TaskGroceries.js';
import TaskReading from './sample-tasks/TaskReading.js';


// styles
import './OneDay.css';


export default function OneDay() {

    const [isVisible, setIsVisible] = useState(false);
    const [rowColor, setRowColor] = 'gold';

    const toggleOverlay = () => {
        setIsVisible(!isVisible);

    }




    // drag and drop overlay

    function dropOverlay() {

    }


    return (
        <div className="OneDay">

{isVisible && <Overlay />}
            {/* one day grid of the whole page */}

         
            <CalendarNavbar/>

            <br></br>

            <div className="OneDay-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">January 22, 2025</div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>


            <div className="toolbar-calendar">
            </div>

           
            <div className="Planner">
                <br></br>


            <button className="OneDay-add-new-task-btn"
            onClick={toggleOverlay}
            >Add New Task</button>
                {/* <div>Add a new task</div> */}

                {/* <input type="text" className="Planner-input-field" placeholder="type a new task"></input>
                <button className="Planner-add-btn">Add</button> */}


                <div className="timeslots">
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">12:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">1:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">2:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">3:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">4:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">5:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">6:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">7:00 AM</div><TaskCode/></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">8:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">9:00 AM</div><TaskReading/></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">10:00 AM</div><TaskGroceries/></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">11:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">12:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">1:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">2:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">3:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">4:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">5:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">6:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">7:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">8:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">9:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">10:00 PM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">11:00 PM</div></div>
                </div>
            </div>

        </div>
    )
}
