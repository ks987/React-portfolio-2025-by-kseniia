import React, { Component } from "react";
import './About-and-contact.css';

class AboutAndContact extends Component {



    render() {
        return (
            <div className="AboutAndContact">

                <h1>About and Contact</h1>
                <hr></hr>
                <div>


                    <div className="contact-info">
                        <h3>Name: Kseniia Bondarenko</h3>
                        <h3>Gmail: something new</h3>
                        <h3>Gmail: something new</h3>
                        <h3>GitHub: @ks987 Link: <span>insert the link</span></h3>
                        <div>
                            <h4 className="about-me-note">My name is Kseniia Bondarenko, and I have been studying web development for over two years as of 2025.

                                This portfolio website contains a few React.js projects which can be found by clicking on the tabs at the top of the page. </h4>

                            The list of projects provided on this website include: a Calendar App, a To-Do List App, and a fake Login Page.

                            <h4>Available pages on this portfolio website include: </h4>
                            <ul className="list-of-projects">
                                <li>About and Contact</li>
                                <li>GitHub Profile</li>
                                <li>"Fake Login" in React</li>
                                <li>"Calendar" in React</li>
                                <li>"To-Do List" in React</li>
                            </ul>

                        </div>

                        <h3></h3>
                    </div>

                </div>
            </div>
        )
    }

}


export default AboutAndContact;