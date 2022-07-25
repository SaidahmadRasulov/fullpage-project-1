import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"
import "./All.css";
import CNavbar from './Components/CNavbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import SomePage from './Components/SomePage';
import CardPage from './Components/CardPage/CardPage';
import End from './Components/End/End';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <div className='container'>
      <CNavbar />
      <Home />
      <About />
      <Services />
    </div>
    {/* For Container-Fluid */}
      <SomePage />
      <CardPage />
      <End />
      <Footer />
    </>
  )
}

export default App