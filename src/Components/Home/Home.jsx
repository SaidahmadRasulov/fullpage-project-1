import React from 'react';
import "./style.css";
import home from "../../assets/home-page.png"

function Home() {
  return (
    <div className='home-container'>
      <div className="top-content">
        <div className="left-content">
          <img src={home} alt="" />
        </div>
        <div className="right-content">
          <div className="home-title">
            <h1>Make wealth your own.</h1>
          </div>
          <div className="home-content">
            <p>Personalized, Automated, Effortless Investing and Savings.</p>
          </div>
          <div className="home-btn">
            <button className='start-btn'>Get Started</button>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <ul className='bottom-list-group'>
          <li className='bottom-list-group-item list-ds'><span>N</span>nerdwallet</li>
          <li className='bottom-list-group-item'>Best Robo-advisor, 2019 <sup>1</sup></li>
          <li className='bottom-list-group-item'>Best Cash Management App, 2020 <sup>1</sup></li>
        </ul>
        <ul className='bottom-list-group'>
          <li className='bottom-list-group-item list-ds'><i className='bi bi-info-circle'></i>investopedia</li>
          <li className='bottom-list-group-item'>Best Robo-advisor, 2019 <sup>1</sup></li>
        </ul>
        <ul className='bottom-list-group'>
          <li className='bottom-list-group-item list-ds'>450K+</li>
          <li className='bottom-list-group-item'>Trusted clients</li>
        </ul>
        <ul className='bottom-list-group'>
          <li className='bottom-list-group-item list-ds'>$26B+</li>
          <li className='bottom-list-group-item'>In client funds</li>
        </ul>
        <ul className='bottom-list-group'>
          <li className='bottom-list-group-item list-ds'>4.9 <i className='bi bi-star-fill'></i></li>
          <li className='bottom-list-group-item'>Apple App Store <sup>2</sup></li>
        </ul>
        <ul className='bottom-list-group'>
          <li className='bottom-list-group-item list-ds'>4.5 <i className='bi bi-star-fill'></i></li>
          <li className='bottom-list-group-item'>Apple App Store <sup>2</sup></li>
        </ul>
      </div>
    </div>
  ) 
}

export default Home