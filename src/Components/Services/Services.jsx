import React from 'react';
import "./style.css";
import Phone2 from "../../assets/phone-2.png";
import Card from "../../assets/card.png"

function Services() {
  return (
    <div className='service-container'>
        <div className="service-content">
        <div className="left-service-content">
            <img src={Card} alt="" className='card-img'/>
            <img src={Phone2} alt="" />
        </div>
        <div className="right-service-content">
            <h1>Everyday cash, designed to build long-term wealth.</h1>
            <p>Our Cash account, offered with Green Dot Bank, lets you automate your savings, so you can pay bills, withdraw from 19,000+ ATMs, and invest your extra cash in seconds to keep building your future.</p>
            <div className="service-btns">
                <button>Start Saving</button>
                <p>Learn more</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services