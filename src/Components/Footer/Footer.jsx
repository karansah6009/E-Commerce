import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo1.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="foo<li>ter_logo" />
        <p><p id="e1">E</p>SHOP</p>
      </div>
      <ul className="footer-links">
      <li><h4>Help</h4><li>Payments </li><li>Shipping</li><li> Cancellation & Returns</li> <li>FAQ</li></li>
      <li><h4>Products</h4><li>Mens Wear</li> <li>Womens Wear</li> <li> Kids Wear</li></li>
      <li><h4>Offices</h4><li>EShop Internet Private Limited,<li> Gurgaon NCR 100112,Delhi,India</li></li></li>
      <li><h4>About</h4><li>Contact Us </li><li> About Us</li> <li> Careers</li> <li>EShop Corporate</li></li>
      <li><h4>Contact</h4><li>IndiaCIN : U51109KA2012PTC066107</li> <li>Telephone: 044-45614700 / 044-67415800</li></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="instagram_icon" />
        </div>
         <div className="footer-icons-container">
            <img src={pintester_icon} alt="pintester_icon" />
        </div>
         <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© 2009-2026 ESHOP. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
