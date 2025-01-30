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
    const [currDate, setCurrDate] = useState(new Date());

    const toggleOverlay = () => { setIsVisible(!isVisible) };


    // drag and drop overlay

    // change the date to the next day or to the previous one



    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();


    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const onlyMonth = monthsArray[month - 1];
    const onlyDay = daysArray[day - 1];
    const onlyYear = year;
    const modifiedDate = `${onlyMonth} ${onlyDay}, ${onlyYear}`;


    // const [nextDay, setNextDay] = useState(day);
    // const [nextMonth, setNextMonth] = useState(monthsArray[month]);
    // const [nextYear, setNextYear] = useState(year);

    const [nextDay, setNextDay] = useState(parseInt(day));
    const [nextMonth, setNextMonth] = useState(monthsArray[month]);
    const [nextYear, setNextYear] = useState(year);

    // change to the previous day
    function subtractOneDay() {
 

        if (nextDay <= 31 && nextMonth === 'April' || 'June' || 'September' || 'November') {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(nextDay - 1);
            setNextYear(nextYear);
        } else if (nextDay === 1 && nextMonth === 'April' || 'June' || 'September' || 'November'){
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth) - 1]);
            setNextDay(31);
            setNextYear(nextYear);
        } else if (nextMonth === 'January' && nextDay === 1) {
            setNextMonth(monthsArray[11]);
            setNextDay(31);
            setNextYear(parseInt(nextYear) - 1);
        }

    }
    // change to the next day

    function addOneDay() {


        if ((nextDay === 31) && (nextMonth === 'January' || 'March' || 'May' || 'July' || 'August' || 'October' || 'December')) {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth) + 1]);
            setNextDay(1);
            setNextYear(nextYear);
        } else if ((nextDay === 30) && (nextMonth === 'April' || 'June' || 'September' || 'November')) {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(30);
            setNextYear(nextYear);
        } else if ((nextDay <= '32') && (nextMonth !== 'February')) {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(parseInt(nextDay) + 1);
            setNextYear(nextYear);
        } else if (nextMonth === 'December' && nextDay === 1) {
            setNextMonth(monthsArray[0]);
            setNextYear(parseInt(nextYear) + 1);
        } else if (nextYear % 4 === 0 && nextMonth === 'February') {
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth)]);
            setNextDay(29);
        } else if (nextMonth === 'December' && nextDay === 31) {
            setNextDay(1);
            setNextYear(parseInt(nextYear) + 1);
        } else if (nextMonth === 'February' && nextDay < '29') {
            setNextDay(parseInt(nextDay) + 1);
            setNextMonth(monthsArray[monthsArray.indexOf(nextMonth + 1)]);
        }



    };








    return (
        <div className="OneDay">

            {isVisible && <Overlay />}

            <CalendarNavbar />

            <br></br>

            <div className="OneDay-top-row">
                <button
                    onClick={subtractOneDay}>
                    <i className="fa-solid fa-arrow-left"></i></button>

                <div className="month-year-label">{nextMonth} {nextDay}, {nextYear}</div>
                <button
                    onClick={addOneDay}>
                    <i className="fa-solid fa-arrow-right"></i></button>
            </div>


            <div className="toolbar-calendar">
            </div>


            <div className="Planner">
                <br></br>


                <button className="OneDay-add-new-task-btn"
                    onClick={toggleOverlay}
                >Add New Task</button>
        
                <div className="timeslots">
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">12:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">1:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">2:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">3:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">4:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">5:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">6:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">7:00 AM</div><TaskCode /></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">8:00 AM</div></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">9:00 AM</div><TaskReading /></div>
                    <div className="timeslots-row" onClick={toggleOverlay}><div className="Planner-time">10:00 AM</div><TaskGroceries /></div>
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
                <div className="OneDay-footer"></div>
            </div>

            <Footer />

        </div>
    )
};

