import React, { Component } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import './Landing-page.css';

class LandingPage extends Component {


    render() {
        return (
            <div className="LandingPage">
                <div className="my-main-logo">React Portfolio 2025 by Kseniia Bondarenko</div>
                <Navbar/>




                {/* <div className="important-note">
                    Click on tabs at the top of the page to view portoflio
                </div> */}


                <Footer/>
            </div>
        )
    }
}


export default LandingPage;