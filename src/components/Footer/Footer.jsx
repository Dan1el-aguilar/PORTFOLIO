import React from 'react'
import './footer.css'
import  {BsLinkedin}  from 'react-icons/bs'
import { AiFillFacebook } from  'react-icons/ai'
import { FaWhatsappSquare } from  'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-info'>
        <h1>Daniel Aguilar</h1>
        <p>Santa Fe, Argentina</p>
      </div>
      <div className='footer-links'>
         <a href="https://www.linkedin.com/in/daniel-aguilar-006722217/" target='_blank' rel="noreferrer">
          <BsLinkedin/>
         </a>
         <a href="https://www.facebook.com/profile.php?id=100010034970747" target='_blank' rel="noreferrer">
          <AiFillFacebook/>
         </a>
         <a href="https://wa.me/543425473314" target='_blank' rel="noreferrer">
          <FaWhatsappSquare/>
         </a>
       </div>
      
    </footer>
  )
}

export default Footer