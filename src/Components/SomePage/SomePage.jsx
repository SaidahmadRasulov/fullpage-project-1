import React from 'react';
import "./style.css";
import Static from "../../assets/static.png"

function SomePage() {
  return (
    <div className='somepage-container-fluid'>
        <div className="container">
        <div className="somepage-content">
          <div className="left-somepage-content">
            <h1>Saving and investing. All while you’re relaxing.</h1>
            <p>Tell us what you’re saving for, and we’ll automatically set aside extra cash to hit your goals. And since we connect with all your accounts, you only need one app to watch your wealth grow.</p>
          </div>
          <div className="right-somepage-content">
            <img src={Static} alt="" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default SomePage