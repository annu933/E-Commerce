import React from 'react'
import './Footer.css'
import logo from '../Assets/img/shoppingBagLogo.jpg'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";



export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="footer_logo" width={100} />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <FaInstagram />
            </div>
            <div className="footer-icon-container">
                <FaSquareFacebook />
            </div>
            <div className="footer-icon-container">
               <FaTwitter />
            </div>
            <div className="footer-icon-container">
                <AiOutlineLinkedin />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}
