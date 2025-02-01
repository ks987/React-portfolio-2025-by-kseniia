import React, { useState } from 'react';

import PickCalendarColor from './PickCalendarColor.js';

import './Sidebar.css';

export default function Sidebar() {
    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const [date, setDate] = useState('');
    const [circleColor, setCircleColor] = useState('#ffddcc');

    function getWeekday() {
        return weekDayArray[new Date().getDay()];
    }

    function handleColorChange(newColor) {
        setCircleColor(newColor);
    }


    return (
        <div className="Sidebar">

            <PickCalendarColor onColorChange={handleColorChange}/>

            <div className="Sidebar-today">
                <div>Today is {getWeekday()}, </div>
                <div>{monthsArray[month]} {day}, {year}</div>
            </div>



            <div className="CalendarsList-list">
                <div className="Sidebar-title">My Calendars: </div>
                <div className="calendars-list-itself">

                    <div className="Sidebar-row">
                        <input type="checkbox"></input>
                        Main Calendar
                        <div style={{background: circleColor}} className="Sidebar-color-circle"></div>
                    </div>

                    <div className="Sidebar-row">
                        <input type="checkbox"></input>
                        Workday Simulation
                        <div className="Sidebar-color-circle"></div>
                    </div>

                    <div className="Sidebar-row">
                        <input type="checkbox"></input>
                        Sample Schedule
                        <div className="Sidebar-color-circle"></div>
                    </div>

                    <div className="Sidebar-row">
                        <input type="checkbox"></input>
                        Travel Planning
                        <div className="Sidebar-color-circle"></div>
                    </div>

                    <div className="Sidebar-row">
                        <input type="checkbox"></input>
                        Holidays
                        <div className="Sidebar-color-circle"></div>
                    </div>


                </div>
            </div>
        </div>
    )
}

