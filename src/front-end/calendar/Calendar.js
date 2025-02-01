import React, { useState } from "react";


// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Footer from '../Footer.js';


// import js files


// import css files
import './Calendar.css';





export default function Calendar() {

        return(
            <div>
                <div>

             

                   <CalendarNavbar/>


                   <div className="Calendar-intro-note">
                    <h1>Welcome to the Calendar App! </h1>
                   </div>
   
                    <Footer/>



                </div>
            </div>
        )
};



