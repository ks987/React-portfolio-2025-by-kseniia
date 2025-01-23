import React, { useState } from "react";

// import navbar and footer
import CalendarNavbar from './calendar-navbar/CalendarNavbar.js';
import Footer from '../Footer.js';


// import components
import MonthRigid from './calendar-for-one-year/Month-rigid.js';




import './OneYear.css';


export default function OneYear() {

        return (
            <div>

                <CalendarNavbar/>

                <br></br>

           

               
            <div className="OneYear-top-row">
                <button><i class="fa-solid fa-arrow-left"></i></button>
                <div className="month-year-label">2025</div>
                <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>


                <h3><span>TODAY is </span> Saturday January 4, 2025</h3>
{/* 

                <div className="months-list">{this.state.month}</div>
                <div className="years-list">{this.state.year}</div>
                <div className="week-list">{this.state.week}</div>
                <button className="btn-months-list" onClick={this.boxesGenerator}>Generate</button> */}


                <div className="year-long">
                    <div className="month-box-of-year-long"><MonthRigid /></div>
                    {/* <div className="February-box-year-long"><MonthRigid /></div>
                    <div className="March-box-year-long"><MonthRigid /></div>
                    <div className="April-box-year-long"><MonthRigid /></div>
                    <div className="May-box-year-long"><MonthRigid /></div>
                    <div className="June-box-year-long"><MonthRigid /></div>

                    <div className="July-box-year-long"><MonthRigid /></div>
                    <div className="August-box-year-long"><MonthRigid /></div>
                    <div className="September-box-year-long"><MonthRigid /></div>
                    <div className="October-box-year-long"><MonthRigid /></div>
                    <div className="November-box-year-long"><MonthRigid /></div>
                    <div className="December-box-year-long"><MonthRigid /></div> */}

                </div>



<Footer/>
            </div>
        )
    }
