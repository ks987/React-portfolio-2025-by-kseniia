
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

    const [yearArray, setYearArray] = useState([]);


    function createYearArray() {
        for (let i = 0; i < 365; i++) {
            yearArray.push(i + 1);
        }
        setYearArray(yearArray);
    }


    return (
        <div className="OneYear">

            <CalendarNavbar />



            <br></br>

            <div className="OneYear-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="OneYear-month-year-label">2025</div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>


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
