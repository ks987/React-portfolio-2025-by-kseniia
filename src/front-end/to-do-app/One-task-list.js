import { useState } from "react";

import './One-task-list.css';

export default function OneTaskList() {
    const tasks = ['go grocery shopping', 'do laundry', 'code', 'go on a walk', 'read a book'];





    return (
        <div className="Onetasklist">
            <div>
                <div className="Onetasklist-title">to-do list # 1</div>
                <div className="Onetasklist-tasks-themselves">

                    {tasks.map((task, taskIndex) => {
                        <div key={taskIndex} className="Onetasklist-task">{task}</div>
                    })}
                </div>

            </div>
        </div>
    )
};


