import React, { Component } from "react";


import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';


import './OneWeek.css';



export default function OneWeek() {


    return (
        <div className="OneWeek">
            <CalendarNavbar />

            <br></br>

            <div className="OneWeek-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">January 20-26, 2025</div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <br></br>
            <table>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    <td></td>
                    <td></td>
                    <td></td>

                </tr>

            </table>


        </div>
    )
};

