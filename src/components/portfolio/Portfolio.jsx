import "./portfolio.css";

import IMG1 from "../../assets/central.png";
import IMG2 from "../../assets/aclc.jpg";
import IMG4 from "../../assets/mchs.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Basic Education",
      img: IMG1,
      description:
        "I graduated from Rosario Central Elementary School in 2014. Growing up in the province of Rosario, Agusan del Sur, my early education laid the foundation for my values of hard work and perseverance.",
     
    },
    {
      id: 2,
      title: "Secondary Education",
      img: IMG4,
      description:
        "I graduated from Mt. Carmel High School - Rosario, a private school, in 2018. This experience further enriched my values of discipline, dedication, and a strong commitment to personal growth.",
    
    },
    {
      id: 3,
      title: "Senior High School ",
      img: IMG2,
      description: "I graduated from ACLC (AMA Computer Learning Center) in 2020. This milestone marked another step in my journey of acquiring knowledge and skills to prepare for the future.",
      
    },
    
    
    
  ];

  return (
    <section id="portfolio">
      <h2>Educational Background</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
             
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
