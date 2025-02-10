import React, { useState } from "react";



// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Footer from '../Footer.js';


// import other functions
import Overlay from './Overlay.js';
import FrontEndDatabase from './Front-end-database.js';



import './OneWeek.css';



export default function OneWeek() {


    const [isVisible, setIsVisible] = useState(false);
    const [rowColor, setRowColor] = 'gold';

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    }



    function handleChange() {


    }

    function sayTime() {

    }


    const timesOfDay = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM'];
    const namesOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const emptySlots = ['', '', '', '', '', '', ''];

    return (
        <div className="OneWeek">
            {isVisible && <Overlay />}

            <CalendarNavbar />

            <br></br>

            <div className="OneWeek-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">January 20-26, 2025</div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <br></br>


            <FrontEndDatabase/>

            <br></br>



            <div className="OneWeek-table">


                <div className="OneWeek-table-row OneWeek-table-row-1">
                    <div className="OneWeek-table-time"></div>
                    <div className="OneWeek-day-of-week">Monday</div>

                    <div className="OneWeek-day-of-week">Tuesday</div>
                    <div className="OneWeek-day-of-week">Wednesday</div>
                    <div className="OneWeek-day-of-week">Thursday</div>

                    <div className="OneWeek-day-of-week">Friday</div>
                    <div className="OneWeek-day-of-week">Saturday</div>
                    <div className="OneWeek-day-of-week">Sunday</div>
                </div>


                <div>
                    {timesOfDay.map((time, rowIndex) => {
                        <div key={rowIndex} className="OneWeek-table-row">
                            <div className="OneWeek-table-time">{time}</div>

                            {emptySlots.map((weekday, indexOfDay) => {
                                <div key={indexOfDay} className="OneWeek-timeslot" onClick={toggleOverlay}>{weekday}</div>
                            })}

                        </div>



                    })}

                </div>


                {/* <div className="OneWeek-table-row OneWeek-table-row-4">
                    <div className="OneWeek-table-time">2:00 AM </div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>

                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                    <div className="OneWeek-timeslot" onClick={toggleOverlay}></div>
                </div> */}



            </div>

            <br></br>
            <br></br>
            <br></br>
            <Footer />

        </div>

    )
};

