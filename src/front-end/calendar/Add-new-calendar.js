import React, { useState } from "react";


// import js files
import PickCalendarColor from './PickCalendarColor.js';

// import css files

import './Add-new-calendar.css';

export default function AddNewCalendar() {
const [addNewCalendarOn, setAddNewCalendarOn] = useState('true');



    return (
        <div>

           {addNewCalendarOn && (<div className="AddNewCalendar">


                <div>

                    <p>Type the title for your new calendar</p>
                    <button className="AddNewCalendar-close-btn">X</button>
                    <input type="text" placeholder="Calendar title"></input>

                    <p>Pick the color for your new calendar</p>
                    <div className="AddNewCalendar-color-picker-box"><PickCalendarColor /></div>
                    <button className="AddNewCalendar-save-btn">Save</button>


                </div>
            </div>)}

        </div>
    )
};