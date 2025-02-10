import React, { useState } from "react";



// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Footer from '../Footer.js';


// import other functions
import Overlay from './Overlay.js';
import './database-sample.js';


import './OneWeek.css';



export default function OneWeek() {
    // front-end database with tasks 

    const [isVisible, setIsVisible] = useState(false);
    const [rowColor, setRowColor] = 'gold';

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    }


    function handleChange() {


    }

    function sayTime() {

    }

    const oldTimesOfDay = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM'];

    const timesOfDay = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];


    const namesOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const emptySlots = ['', '', '', '', '', '', ''];
    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const [monthStart, setMonthStart] = useState('Feb');
    const [monthEnd, setMonthEnd] = useState('Feb');
    const [dayStart, setDayStart] = useState('5');
    const [dayEnd, setDayEnd] = useState('11');
    const [yearEnd, setYearEnd] = useState('2024');




    function addOneWeek() {
        setMonthStart('Feb');
        setMonthEnd('Feb');
        setDayStart('12');
        setDayEnd('18');
        setYearEnd('2024');



    }


    function subtractOneWeek() {
        setMonthStart('Jan');
        setMonthEnd('Jan');
        setDayStart('50');
        setDayEnd('51');
        setYearEnd('1900');
    }


    return (
        <div className="OneWeek">
            {isVisible && <Overlay />}

            <CalendarNavbar />

            <br></br>

            <div className="OneWeek-top-row">
                <button onClick={subtractOneWeek}><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">{monthStart} {dayStart} - {monthEnd} {dayEnd}, {yearEnd}</div>
                <button onClick={addOneWeek}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <br></br>


            <br></br>

            <div className="OneWeek-table">


                <div className="OneWeek-table-row-1">
                    <div className="OneWeek-table-time"></div>
                    {namesOfDays.map((dayOfWeek) => (
                        <div>
                            <div className="OneWeek-day-of-week">{dayOfWeek}</div>
                        </div>

                    ))}

                </div>


                <div className="OneWeek-all-other-rows">
                    {timesOfDay.map((time, rowIndex) => (
                        <div key={rowIndex} className="OneWeek-table-row">
                            <div className="OneWeek-table-time">{time}</div>


                            {
                                emptySlots.map((weekday, indexOfDay) => (
                                    <div key={indexOfDay} className="OneWeek-timeslot" onClick={toggleOverlay}>{weekday}</div>
                                ))
                            }

                        </div>
                    ))}

                </div>



            </div>

            <br></br>
            <br></br>
            <br></br>
            <Footer />



        </div>

    )
};

