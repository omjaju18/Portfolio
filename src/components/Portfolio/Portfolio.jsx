import React from "react";

import stock from "../../Assets/stock-market.jpg";
import foodieHeaven from "../../Assets/foodieHeaven.png";
import Linkedin from "../../Assets/Linkedin.avif";
import linkedin from "../../Assets/linkedin.png";
import amazon from "../../Assets/amazon.png";
import airbnb from "../../Assets/airbnb.png";
import threads from "../../Assets/threads.png";
import Dog from "../../Assets/Dog.jpg";
import yoga from "../../Assets/yoga.jpg";
import medium from "../../Assets/medium.jpg";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={threads} alt="" width={330} height={263} />
          </div>
          <h3> Threads Clone Using ReactJS, NextJS , MongoDB, Tailwind CSS </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Threads-Clone"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://threads-clone-omjaju.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={medium} alt="" width={330} height={263} />
          </div>
          <h3> Medium Clone using NextJS and Firebase</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Medium-Clone"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://medium-clone-omjaju.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={foodieHeaven} alt="" width={330} height={263} />
          </div>
          <h3> FoodieHavan Using ReactJS, Context API </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/FoodieHeaven"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://foodie-haven-omjaju.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Linkedin} alt="" width={330} height={263} />
          </div>
          <h3>Linkedin-Clone Using ReactJS, Redux and Firebase</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Linkedin-clone"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://lc-omjaju.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={amazon} alt="" width={330} height={263} />
          </div>
          <h3> Amazon Clone using HTML, CSS </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Amazon-Clone"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://amazon-clone-omjajus-projects.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={linkedin} alt="" width={330} height={263} />
          </div>
          <h3> Linkedin Clone using HTML, CSS </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Linkedin-Clone-Using-HTML-CSS"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://linkedinclone-omjaju.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Dog} alt="" width={330} height={263} />
          </div>
          <h3>Yahdog - A Dog Adoption Website Using HTML, CSS</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Yahdog"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://yahdog-omjaju.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
