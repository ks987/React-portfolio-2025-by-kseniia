import React, { Component } from "react";
import { Link } from "react-router-dom";

import MonthRigid from './Month-rigid';
import Footer from '../Footer.js';

class SampleYear extends Component {


    render() {
        return (
            <div>

                <nav className="navbar-calendar">
                <button className="calendar-color-btn">THEME</button>
                    <Link id="open-one-day-btn" className="calendar-link" to='/go-to-day'>Day</Link>
                    <Link id="github-link" className="calendar-link" to='/go-to-four-days'>Four Days</Link>
                    <Link id="fake-log-in" className="calendar-link" to='/go-to-week'>Week</Link>
                    <Link id="calendar-app" className="calendar-link" to='/go-to-month'>Month</Link>
                    <Link id="to-do-app" className="calendar-link" to='/go-to-year'>Year</Link>
                </nav>


                <button>go to 2024</button>
                <div>year 2025</div>
                <button>go to 2026</button>




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
}

export default SampleYear;