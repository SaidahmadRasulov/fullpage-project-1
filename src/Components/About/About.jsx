import React from 'react';
import "./style.css";
import Phone from "../../assets/phone-1.png";
import frame from "../../assets/Frame (1).png";

function About() {
  return (
    <div className='about-container'>
        <div className="about-content">
            <div className="about-left-content">
                <h1>Investing isn’t easy. We just make it feel that way.</h1>
                <p>Let us customize a portfolio just for you or build it yourself, and our powerful automation will make the most of your investments, optimizing your performance and helping lower your taxes.</p>
                <div className="about-btns">
                    <button className='btn-about'>Start investing</button>
                    <p>Learn more</p>
                </div>
            </div>
            <div className="about-right-content">
                <div className="phone-div">
                    <img src={Phone} alt="" />
                    <img src={frame} alt="" className='frame-img'/>
                    <img src={frame} alt="" className='frame-img-2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About