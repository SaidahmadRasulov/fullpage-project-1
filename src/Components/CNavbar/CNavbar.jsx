import React from 'react';
import "./style.css";
import Logo from "../../assets/logo.png"

function CNavbar() {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links">
            <ul className='list-group'>
                <li className='list-group-item'>invest</li>
                <li className='list-group-item'>Cash</li>
                <li className='list-group-item'>Borrow</li>
                <li className='list-group-item'>Blog</li>
            </ul>
        </div>
        <div className="navbar-buttons">
            <button className='log-btn'>Log In</button>
            <button className='start-btn'>Get Started</button>
        </div>
    </div>
  )
}

export default CNavbar