import { useState } from "react";



// import js files
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Overlay from './Overlay.js';
import Sidebar from './Sidebar.js';
import Footer from  '../Footer.js';

// import css files
import './OneMonth.css';



export default function OneMonth() {

    // toggle visiblity of overlay with assigning tasks

    const [isVisible, setIsVisible] = useState(false);

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    }


    // render a month-long calendar

    const daysInMonth = Array(49).fill(null); // Maximum slots in a calendar (6 weeks)


    const [dayOfMonth, setDayOfMonth] = useState('');


    // all months in existence
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    // determine today's date

    const today = new Date();
    const day = today.getDate(); // day of the month
    const month = today.getMonth() + 1; // Month is indexed at 0, so add 1
    const year = today.getFullYear(); // Full year

    const formattedDate = `${month}/${day}/${year}`;
    const monthYear = `${month}/${year}`;
    const wordMonth = `${months[month - 1]}`;
    const onlyYear = `${year}`;




    // add one more month to the date
    const [nextMonth, setNextMonth] = useState(wordMonth);
    const [nextYear, setNextYear] = useState(onlyYear);


    const addOneMonth = () => {
        const currMonthIndex = months.indexOf(nextMonth);
        if (currMonthIndex === 11) {
            setNextMonth(months[0]);
            setNextYear(parseInt(nextYear) + 1);
        } else {
            setNextMonth(months[currMonthIndex + 1]);
        }

    }

    const subtractOneMonth = () => {
        const currMonthIndex = months.indexOf(nextMonth);
        if (currMonthIndex === 0) {
            setNextMonth(months[11]);
            setNextYear(parseInt(nextYear) - 1);
        } else {
            setNextMonth(months[currMonthIndex - 1]);
        }


    }



    return (
        <div className="OneMonth">
            <CalendarNavbar />

            {isVisible && <Overlay />}

            <br></br>

            <div className="OneMonth-top-row">
                <button
                    onClick={subtractOneMonth}
                ><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">{nextMonth}{' '}{nextYear}</div>
                <button
                    onClick={addOneMonth}
                ><i class="fa-solid fa-arrow-right"></i></button>
            </div>


            <div className="OneMonth-sidebar-and-one-month">
                <Sidebar/>
                <div>
                <button className="SampleMonth-add-new-task-btn"
                    onClick={toggleOverlay}>Add New Task</button>




                <div className="OneMonth-monthly-calendar">

                    {daysInMonth.map((dayOfMonth, index) => (
                        <div key={index} className="OneMonth-slot">{dayOfMonth}</div>
                    ))}


                </div>
                </div>



            </div>

            {/* sample overlay */}
            <Overlay/>

            <Footer/>
        </div>
    )
}




