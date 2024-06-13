import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='wembLogo' src={assets.wembLogo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quos nisi odit ullam similique repellendus placeat qui repudiandae sint. Cumque deserunt inventore est dolor unde alias expedita quod, et iure?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+234-704-278-5342</li>
                <li>contact@wembly.com</li>
            </ul>
        </div>
      </div>
      <hr />
       <p className="footer-copyright">
        Copyright 2024 © Wembly.com - All Right Reserved.
       </p>
    </div>
  )
}

export default Footer