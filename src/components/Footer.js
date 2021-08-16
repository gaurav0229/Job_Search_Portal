import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' style={{backgroundColor: "#242424"}}>
        <p className='footer-subscription-heading' style={{color: "white"}}>
         <b> Join the Get Hired and be one step ahead of your dreams</b>
        </p>

        <p style={{color: "white"}}>Copyright@GetHired</p>
     
    </div>
  );
}

export default Footer;