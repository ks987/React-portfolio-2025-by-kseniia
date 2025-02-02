import React, { useState } from 'react';

import PickCalendarColor from './PickCalendarColor.js';
import AddNewCalendar from './sidebar/Add-new-calendar.js';
import CreatedNewCalendar from './sidebar/Created-new-calendar.js';


import './Sidebar.css';


export default function Sidebar() {
    const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const calendarNames = ['Main Calendar', 'Sample Schedule', 'Holidays', 'Travel Calendar', 'Menu Calendar'];

    const [circleColor, setCircleColor] = useState(['tomato', 'greenyellow', 'pink', 'cornflowerblue', 'violet', 'deeppink', 'gold', 'coral', 'yellowgreen', 'lightblue']);
    const [isVisible, setIsVisible] = useState(true);
    const [checkedItems, setCheckedItems] = useState({ calendarNames }); // track checked conditions for every calendar
    const [checked, setChecked] = useState('fa-solid fa-square-check');
    const [addNewCalendarOn, setAddNewCalendarOn] = useState(true);

    // determine day of week
    function getWeekday() {
        return weekDayArray[new Date().getDay()];
    }

    // set new color 
    function handleColorChange(newColor) {
        setCircleColor(newColor);
    }

    // show or hide the color picker

    function toggleColorPicker() {
        setIsVisible(!isVisible);
    }


    function toggleAllCheckboxes() {
        if(checked === 'fa-solid fa-square-check') {
            setChecked('fa-solid fa-square');
        } else {
            setChecked('fa-solid fa-square-check');
        }
    }

    function toggleOneCheckbox(index) {

        setCheckedItems(checkedItems.map(() => { 
            if (checked === 'fa-solid fa-square-check') {
                calendarNames[index].setChecked('fa-solid fa-square');
            } else {
                calendarNames[index].setChecked('fa-solid fa-square-check');
            }
        }))
    }


    // set custom ID to each checkbox icon

    const [iconID, setIconID] = useState('checkbox-1');



    // check or uncheck the custom checkbox 


// display a field to add a new calendar to the list

function displayAddNewCalendar(event) {
    setAddNewCalendarOn(!addNewCalendarOn);
    event.stopPropagation();
}

    return (
        <div className="Sidebar">

            <div className="Sidebar-color-picker-box">
                {!isVisible && <PickCalendarColor onColorChange={handleColorChange} />}
            </div>

            <div className="Sidebar-today">
                <div>Today is {getWeekday()}, </div>
                <div>{monthsArray[month]} {day}, {year}</div>
            </div>



            <div className="Sidebar-list">
                <div className="Sidebar-title">My Calendars: </div>
                <div className="calendars-list-itself">

                    {
                        calendarNames.map((title, index) => (
                            <div key={index} className="Sidebar-row" id={`row-${index + 1}`}>
                                <input type="checkbox" style={{ display: "none" }}></input>
                                <i className={`${checked} Sidebar-custom-checkbox`}
                                    onClick={() => (toggleAllCheckboxes(index))}></i>
                                {title}, {index}
                                <div style={{ background: circleColor[index] }} className="Sidebar-color-circle"></div>
                            </div>
                        ))
                    }

                </div>

                <div>
                    <button className="Sidebar-add-btn"
                    onClick={displayAddNewCalendar}>Add new calendar</button>

                    {!addNewCalendarOn && <AddNewCalendar/>}

                </div>
            </div>
        </div>
    )
};

