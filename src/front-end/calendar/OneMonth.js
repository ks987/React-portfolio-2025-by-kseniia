import { useState } from "react";




import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Overlay from './Overlay.js';


import './OneMonth.css';



export default function OneMonth() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="OneMonth">
            <CalendarNavbar />
            <br></br>

            <div className="OneMonth-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">January 2025</div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>


            <div>
                <br></br>
                <div className="SampleMonth-box">the overlay is now hidden</div>
                <button className="SampleMonth-show-overlay"
                    onClick={toggleOverlay}>Show overlay</button>



                {isVisible && <Overlay />}

            </div>
        </div>
    )
}




