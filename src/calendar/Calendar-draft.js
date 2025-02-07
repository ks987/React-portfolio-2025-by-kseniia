import React, { Component } from "react";
import OneDay from './OneDay.js';
import './draft-Calendar.css';

class Calendar extends Component {



    render() {
        return (
            <div>
                <div className="Calendar-box">
                    this is an advanced calendar
                    <br></br>
                    I started creating this advanced calendar app on Wed Dec 4, 2024. Wed Dec 4, 2024.
                    <br></br>
                    the main feature is = scheduling appointments
                </div>
                <div className="main-section">

                    <h3>December 2024</h3>


                    <div className="row-1">
                        <div className="day-of-week">Mon</div>
                        <div className="day-of-week">Tue</div>
                        <div className="day-of-week">Wed</div>
                        <div className="day-of-week">Thu</div>
                        <div className="day-of-week">Fri</div>
                        <div className="day-of-week">Sat</div>
                        <div className="day-of-week">Sun</div>
                    </div>
                    <div className="days-of-month">
                        <div className="row-2">
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day">1</div>
                        </div>
                        <div className="row-3">
                            <div className="day">
        
                                <OneDay/>
                            </div>
                            <div className="day">3
                            <OneDay/>
                            </div>
                            <div className="day">4
                            <OneDay/>
                            </div>
                            <div className="day">5
                            <OneDay/>
                            </div>
                            <div className="day">6
                            <OneDay/>
                            </div>
                            <div className="day">7
                            <OneDay/>
                            </div>
                            <div className="day">8
                            <OneDay/>
                            </div>
                        </div>
                        <div className="row-4">
                            <div className="day">9</div>
                            <div className="day">10</div>
                            <div className="day">11</div>
                            <div className="day">12</div>
                            <div className="day">13</div>
                            <div className="day">14</div>
                            <div className="day">15</div>
                        </div>
                        <div className="row-5">
                            <div className="day">16</div>
                            <div className="day">17</div>
                            <div className="day">18</div>
                            <div className="day">19</div>
                            <div className="day">20</div>
                            <div className="day">21</div>
                            <div className="day">22</div>
                        </div>
                        <div className="row-6">
                            <div className="day">23</div>
                            <div className="day">24</div>
                            <div className="day">25</div>
                            <div className="day">26</div>
                            <div className="day">27</div>
                            <div className="day">28</div>
                            <div className="day">29</div>
                        </div>
                        <div className="row-7">
                            <div className="day">30</div>
                            <div className="day">31</div>
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day"></div>
                            <div className="day"></div>
                        </div>


                    </div>



                </div>
            </div>
        )
    }


}




export default Calendar;