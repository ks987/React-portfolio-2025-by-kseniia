import { useState } from "react";
import { Link } from "react-router-dom";

import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import CalendarsList from './CalendarsList.js';

import './FourDays.css';

export default function FourDays() {


    const [isVisible, setIsVisible] = useState(false);


    const toggleOverlay = () => {
        setIsVisible(!isVisible);

    }


    return (
        <div className="FourDays">

            <CalendarNavbar />

            <CalendarsList/>


            <br></br>

            <div className="FourDays-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label"></div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>



            <div className="FourDays-four-columns">

                

       


            </div>
        </div>
    )
}

