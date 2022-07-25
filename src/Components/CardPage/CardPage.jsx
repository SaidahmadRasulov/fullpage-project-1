import React from 'react';
import "./style.css";

function CardPage() {
  return (
    <div className="cardpage-container">
        <div className="container">
            <div className="cardpage-content">
                <div className="cardpage-cards">
                    <div className="cardpage-card">
                        <div className="cardpage-card-header">
                            <p>Testimonial</p>
                        </div>
                        <div className="cardpage-card-body">
                            <h1><span>It's the single best</span> resource for both investing, managing retirement and seeing my entire financial picture.</h1>
                        </div>
                        <div className="cardpage-card-footer">
                            <p>Joshua B</p>
                        </div>
                    </div>
                    <div className="cardpage-card">
                        <div className="cardpage-card-header">
                            <p>Testimonial</p>
                        </div>
                        <div className="cardpage-card-body">
                            <h1><span>Wealthfront</span> is the first thing in my life that actually motivated me to save money.</h1>
                        </div>
                        <div className="cardpage-card-footer mt">
                            <p>Isidore</p>
                        </div>
                    </div>
                    <div className="cardpage-card">
                        <div className="cardpage-card-header">
                            <p>Testimonial</p>
                        </div>
                        <div className="cardpage-card-body">
                            <h1><span>It’s automatic</span>, and I’m lazy.</h1>
                        </div>
                        <div className="cardpage-card-footer mt-t">
                            <p>Ryan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardPage
