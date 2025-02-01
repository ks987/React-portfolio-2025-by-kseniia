import React, { useState } from "react";


// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Footer from '../Footer.js';


// import js files
import OneYear from './OneYear.js';

// import css files
import './Calendar.css';





export default function Calendar() {

        return(
            <div>
                    <OneYear/>
            </div>
        )
};



