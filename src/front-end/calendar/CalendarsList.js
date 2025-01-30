

import './CalendarsList.css';

export default function CalendarsList() {


    return (
        <div className="CalendarsList">
            <div>
                <div className="CalendarsList-title">My Calendars: </div>
                <div className="calendars-list-itself">
                    <div><input type="checkbox"></input>Sample Schedule</div>
                    <div><input type="checkbox"></input>Workday Simulation</div>
                    <div><input type="checkbox"></input>Main Calendar</div>
                    <div><input type="checkbox"></input>Travel Calendar</div>
                    <div><input type="checkbox"></input>Holidays</div>
                    <div><i class="fa-regular fa-square"></i></div>
                    <div><i class="fa-solid fa-square-check"></i></div>
                </div>
            </div>
        </div>
    )
}

