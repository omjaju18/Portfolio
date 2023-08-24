import React from "react";
import ME from "../../Assets/ME.jpg";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Hello, I'm Om Jaju, an Electronics and Computer Engineering
            undergraduate from SNIST. I'm passionate about being a ReactJS
            Developer and Front End Developer, specializing in building modern
            web applications. Also I'm an aspiring Cybersecurity enthusiast. My
            technical skills include HTML, CSS, JavaScript, Python, Ethical
            Hacking, ReactJS,NextJS, Tailwind CSS, MongoDB, Cybersecurity and C.
            I believe in continuous learning and staying updated in this dynamic
            industry. Outside of work, I enjoy cricket, movies, and web series.
            With excellent communication skills and a collaborative mindset, I'm
            confident in being a valuable asset to any organization. Thank you
            for considering my profile, and I look forward to connecting with
            industry professionals.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
