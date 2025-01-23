import React, { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom';

// Links to apps

import AboutAndContact from './about-and-contact/About-and-contact';
import GithubLink from './github-page/GitHub-page';

import Login from './sample-log-in/Sample-log-in';
import Calendar from './calendar/Calendar';
import ToDoApp from './to-do-app/To-do-app';


// Links to calendar pages


import OneDay from './calendar/OneDay';
import FourDays from './calendar/FourDays';

import OneWeek from './calendar/OneWeek';
import OneMonth from './calendar/OneMonth';

import OneYear from './calendar/OneYear';




import './Navbar.css';

export default function Navbar() {


   
        return(
            <div>
        <div className="portfolio-title">React portfolio by Kseniia Bondarenko</div>
                <nav className="navbar-portfolio"> 
                    <Link id="about-and-contact" className="navbar-link" to='/about-and-contact'>About</Link>
                    <Link id="github-link" className="navbar-link" to='/github-profile'>GitHub</Link>
                    <Link id="fake-log-in" className="navbar-link" to='/sample-log-in'>Sample Login</Link>
                    <Link id="calendar-app" className="navbar-link" to='/calendar-in-react'>Calendar App</Link>
                    <Link id="to-do-app" className="navbar-link" to='/to-do-app-in-react'>To-Do App</Link>
                </nav>



                <Routes>
                    <Route exact path='/about-and-contact' element={<AboutAndContact/>}></Route>
                    <Route exact path='/github-profile' element={<GithubLink/>}></Route>
                    <Route exact path='/sample-log-in' element={<Login/>}></Route>
                    <Route exact path='/calendar-in-react' element={<Calendar/>}></Route>
                    <Route exact path='/to-do-app-in-react' element={<ToDoApp/>}></Route>



                    {/* calendar routes */}

             
                    <Route exact path='/go-to-day' element={<OneDay/>}></Route>
                    <Route exact path='/go-to-four-days' element={<FourDays/>}></Route>
                    <Route exact path='/go-to-week' element={<OneWeek/>}></Route>
                    <Route exact path='/go-to-month' element={<OneMonth/>}></Route>
                    <Route exact path='/go-to-year' element={<OneYear/>}></Route>
      
                </Routes>

            </div>
        )
    };