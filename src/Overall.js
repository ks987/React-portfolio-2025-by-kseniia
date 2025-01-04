import React, { Component } from "react";
import Calendar from './Calendar';
import './Overall.css';



class Overall extends Component {


    render() {
        return(
            <div>
                <div className="responsiveness">
                    <div className="desktop-tab"><h3>Desktop</h3></div>
                    <div className="tablet-tab"><h3>Tablet</h3></div>
                    <div className="tablet-portrait-tab"><h3>Tablet (Portrait)</h3></div>
                    <div className="mobile-tab"><h3>Mobile</h3></div>
                </div>

                <div>
                    <Calendar/>
                </div>
            </div>
        )
    }
}


export default Overall;