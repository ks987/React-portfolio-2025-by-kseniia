import React, { Component } from "react";
import SampleWeek from './SampleWeek';
import './SampleMonth.css';




class SampleMonth extends Component {




    render(){

        return(
            <div>
                <div>

                    <SampleWeek/>
                    <SampleWeek/>
                    <SampleWeek/>
                    <SampleWeek/>
                    <SampleWeek/>
                    <SampleWeek/>
                </div>
            </div>
        )
    }
}


export default SampleMonth;

