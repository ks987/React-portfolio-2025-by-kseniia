import React, { Component } from "react";
import {Routes, Route, Link} from 'react-router-dom';

// Links to apps

import AboutAndContact from './about-and-contact/About-and-contact';
import GithubLink from './github-page/GitHub-page';

import Login from './sample-log-in/Sample-log-in';
import Calendar from './calendar/Calendar';
import ToDoApp from './to-do-app/To-do-app';


import './Navbar.css';

class Navbar extends Component {

    render() {
        return(
            <div>
        
                <nav className="navbar-portfolio"> 
                    <Link id="about-and-contact" className="navbar-link" to='/about-and-contact'>About and Contact</Link>
                    <Link id="github-link" className="navbar-link" to='/github-profile'>GitHub Profile</Link>
                    <Link id="fake-log-in" className="navbar-link" to='/sample-log-in'>"Sample Login" in React</Link>
                    <Link id="calendar-app" className="navbar-link" to='/calendar-in-react'>"Calendar" in React</Link>
                    <Link id="to-do-app" className="navbar-link" to='/to-do-app-in-react'>"To-Do App" in React</Link>
                </nav>



                <Routes>
                    <Route exact path='/about-and-contact' element={<AboutAndContact/>}></Route>
                    <Route exact path='/github-profile' element={<GithubLink/>}></Route>
                    <Route exact path='/sample-log-in' element={<Login/>}></Route>
                    <Route exact path='/calendar-in-react' element={<Calendar/>}></Route>
                    <Route exact path='/to-do-app-in-react' element={<ToDoApp/>}></Route>
                </Routes>

            </div>
        )
    }
}



export default Navbar;