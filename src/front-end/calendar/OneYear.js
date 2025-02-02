
import React, { useState } from "react";

// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Footer from '../Footer.js';


// import js files
import Sidebar from './Sidebar.js';
// import css files


import './OneYear.css';


export default function OneYear() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekDayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const weekDayFullNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


    const today = new Date();
    const day = today.getDate(); // day of the month
    const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    const year = today.getFullYear(); // Full year
    const dayOfWeek = 6 - today.getDay();  //to start week on Monday

    const [yearArray, setYearArray] = useState([]);
    const [nextYear, setNextYear] = useState(year);

    function addYear() {
        setNextYear(nextYear + 1);
    }

    function subtractYear() {
        setNextYear(nextYear - 1);
    }


    // start the first week of the month on the correct week day
    function determineWeekDay() {

        
    };





    return (
        <div className="OneYear">

            <CalendarNavbar />

            <br></br>

            <div className="OneYear-top-row">
                <button  onClick={subtractYear}><i class="fa-solid fa-arrow-left"></i></button>
                <div className="OneYear-month-year-label">{nextYear}</div>
                <button  onClick={addYear}><i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className="OneYear-sample-note">{weekDayFullNames[dayOfWeek]}</div>


            <div className="OneYear-sidebar">
                <Sidebar />
            </div>

            <div className="OneYear-year-box">

                {monthNames.map((m) => (
                    <div className="OneYear-month-box">
                        <div className="OneYear-name-of-month-week-days">
                            <div className="OneYear-month-title">{m}</div>

                            <div className="OneYear-week">
                                {weekDayNames.map((w) => (
                                    <div className="OneYear-week-day-name">{w}</div>

                                ))}
                            </div>


                        </div>


                        <div className="OneYear-monthly-boxes">

                            {array.map((_, d,) => (

                                <div className="OneYear-day">{array[d]}</div>


                            ))}


                        </div>

                    </div>
                )
                )}
            </div>



            <Footer />
        </div>
    )
}
