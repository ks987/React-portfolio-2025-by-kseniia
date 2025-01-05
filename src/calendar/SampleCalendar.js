import React, { Component } from "react";
import SampleMonth from './SampleMonth';
import MonthRigid from './Month-rigid';
import './SampleCalendar.css';



class SampleCalendar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'],
            year: [2025]
        }

        this.createWeek = this.createWeek.bind(this);
    }



    createWeek(dayofweek) {

    }



    boxesGenerator() {

    }

    render() {

        return (
            <div>
                <div>

                   <h3><span>TODAY is </span> Saturday January 4, 2025</h3>


                    <div className="months-list">{this.state.month}</div>
                    <div className="years-list">{this.state.year}</div>
                    <div className="week-list">{this.state.week}</div>
                    <button className="btn-months-list" onClick={this.boxesGenerator}>Generate</button>


                    <div className="year-long">
                        <div className="month-box-of-year-long"><MonthRigid/></div>
                        {/* <div className="February-box-year-long"><MonthRigid/></div>
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


                </div>
            </div>
        )
    }
}


export default SampleCalendar;

