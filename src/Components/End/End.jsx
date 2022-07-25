import React from 'react';
import "./style.css";
import EndI from "../../assets/end.png";
import firstLogo from "../../assets/home-logo-1.png";
import SecondLogo from "../../assets/home-logo-2.png";
import ThirdLogo from "../../assets/home-logo-3.png";
import FourthLogo from "../../assets/home-logo-4.png";
import FivethLogo from "../../assets/home-logo-5.png";

function End() {
  return (
    <div className='end-container'>
        <div className="container">
            <div className="end-title">
                <img src={EndI} alt="" />
            </div>
            <div className="end-content">
                <h1>Over <span>450,000</span> people are already using Wealthfront to earn more and worry less</h1>
            </div>
            <div className="end-footer">
                <div className="end-footer-btn">
                    <button className='start-btn'>Get Started</button>
                </div>
                <div className="end-footer-title">
                    <p>as futured in</p>
                    <div className="end-footer-logos">
                        <ul className='logos-group'>
                            <li className='logos-group-item'>
                                <img src={firstLogo} alt="" />
                            </li>
                            <li className='logos-group-item'>
                                <img src={SecondLogo} alt="" />
                            </li>
                            <li className='logos-group-item'>
                                <img src={ThirdLogo} alt="" />
                            </li>
                            <li className='logos-group-item'>
                                <img src={FourthLogo} alt="" />
                            </li>
                            <li className='logos-group-item'>
                                <img src={FivethLogo} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default End