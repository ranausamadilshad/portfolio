import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                  <h1>Web development and Social Media Marketing</h1>
                  <Typed className="typed-text" strings={["Web Design","Social Media Marketing", "Youtube Marketing","Web Development"]} typeSpeed={40} backSpeed={60} loop/>
                   <a href="#" className="btn btn-outline-warning">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;
