import React, { useState} from "react";


// import js files
import OneTaskList from './One-task-list.js';
import Footer from '../Footer.js';



// import css files
import './ToDoApp.css';

export default function ToDoApp(){

        return(
            <div>

                <div>something along the lines of a to do application</div>
                <div>
                <OneTaskList/>
                </div>
                <Footer/>
            </div>
        )
    };

