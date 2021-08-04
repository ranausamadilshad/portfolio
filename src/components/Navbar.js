import React from 'react';
import pic from  '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
  <Link className="navbar-brand" to="#">
  <img alt="logo" src={pic}  className="logo" />
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About ME</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/services">services</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contact">contact</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/prices">Prices</Link>
      </li>
     
    </ul>
   
  </div>
  </div>
</nav>
       
    )
}

export default Navbar;
