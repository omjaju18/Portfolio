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
import netflix from "../../Assets/netflix.jpg";

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
              href="https://linkedin-cloneoj.netlify.app/"
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
              href="https://foodiehaven.netlify.app/"
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
            <img src={airbnb} alt="" width={330} height={263} />
          </div>
          <h3> Airbnb Clone using HTML, CSS </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Airbnb-Clone"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://airbnbclone-oj.netlify.app/"
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
              href="https://amazon-clone-oj.netlify.app/"
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
            <img src={netflix} alt="" width={330} height={263} />
          </div>
          <h3> Netflix Clone using HTML, CSS </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Netflix-Clone"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://nf-om.netlify.app/"
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
              href="https://linkedin-oj.netlify.app/"
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
            <img src={stock} alt="" width={330} height={263} />
          </div>
          <h3>Market Trend Analysis using Machine Learning</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Stock-Market-Prediction-using-Machine-Learning"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="http://localhost:8888/notebooks/STOCK%20PROJECT/Google%20stock%20price.ipynb"
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
              href="https://yahdog.netlify.app/"
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
            <img src={yoga} alt="" width={330} height={263} />
          </div>
          <h3>Fitness Guru - Yoga website using HTML, CSS and Bootstrap</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/omjaju18/Fitness-Guru"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://fitnessguru18.netlify.app/"
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
