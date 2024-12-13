import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Ehciel P.Vergara</h1>
        <h2 className="text-light">Bachelor of Science in Computer Science 4th Yr. Student</h2>
        <CTA />
      
      </div>
    </header>
  );
};

export default Header;
