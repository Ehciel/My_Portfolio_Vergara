import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Ehciel Vergara</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">More About Me</a></li>
        <li><a href="#portfolio">Education</a></li>
        <li><a href="#testimonials">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.facebook.com/ehciel19/" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://www.instagram.com/e.chaiiii/profilecard/?igsh=eXMwbnRmcm5wcnY=" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      <a href="https://x.com/notesheyl?t=JHlSnA1cIOn3f24yspKeFg&s=09" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <big>&copy; Vergara 2024. All rights reserved.</big>
      </div>
    </footer>
  )
}

export default Footer