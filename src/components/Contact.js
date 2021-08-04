import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import logo from '../images/logo.png';



const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justify-content-center align-items-center">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src={logo} alt="Logo" />
              </div>
              <p>
              <strong> We display with pride.We don't want to push
                       our ideas on to customers, we simply want to make
                       what they want.We’ve been in business for a long 
                       time because people love our products and trust us.
            </strong>
              </p>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;