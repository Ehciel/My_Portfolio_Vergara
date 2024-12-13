import "./intro.css";
import React from "react";
import img from '../../assets/me.png'


const Intro = () => {
  return (
    <section id="about">
      <h2>  "Exploring Possibilities, Creating Impact."</h2>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Ehciel" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          
          </div>
          <h3>
          Hello! I am Ehciel Vergara, a dedicated and passionate student currently pursuing a Bachelor of Science in Computer Science (BSCS). With a strong interest in technology and innovation, I am constantly seeking to expand my skills and knowledge in the field of computer science. Through my academic journey, I aim to contribute to the development of creative and impactful solutions. Welcome to my portfolio, where I showcase my projects and skills in programming, problem-solving, and much more!
          </h3>
         
        </div>
      </div>
    </section>
  );
};

export default Intro;
