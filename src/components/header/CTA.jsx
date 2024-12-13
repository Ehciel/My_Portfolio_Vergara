import React from 'react';
import CV from '../../assets/Ehciel_Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        This is my Resume
      </a>
      <a href="#contact" className="btn btn-primary">
       Let's talk!
      </a>
    </div>
  );
};

export default CTA;
