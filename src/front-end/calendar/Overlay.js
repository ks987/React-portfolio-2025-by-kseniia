import { useState } from "react";
import './Overlay.css';

export default function Overlay() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleOverlay = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>

            {!isVisible && <div className="Overlay">

                <button className="Overlay-close-btn"
                    onClick={toggleOverlay}>X</button>
                <input type="text" className="Overlay-event-title"
                    placeholder="Add title"></input>
                <div className="Overlay-date-row">

                    <div className="Overlay-day-of-week">Saturday,</div>
                    <select className="Overlay-months" name="months" id="months">
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>

                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="AUgust">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>

                        <option value="November">November</option>
                        <option value="December">December</option>

                    </select>
                    <div className="Overlay-day" contentEditable="true">18</div>
                    <div className="Overlay-comma">, </div>
                    <div className="Overlay-year" contentEditable="true">2025</div>
                    <div className="Overlay-at"> @ </div>

                    <div className="Overlay-starting-time"
                        contentEditable="true">10:30 am</div>
                    <div className="Overlay-dash">-</div>
                    <div className="Overlay-starting-time"
                        contentEditable="true">11:30 am</div>
                </div>
                <div className="Overlay-note">Add description</div>
                <div className="Overlay-description"
                    contentEditable="true">

                </div>
                <div className="Overlay-picked-calendar">"Main Calendar"</div>
                <div className="Overlay-event-color">Yellow</div>

                <button className="Overlay-save-event-btn">Save</button>
            </div>}

        </div>
    )
}

