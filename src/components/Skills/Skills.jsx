import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        {/*Frontend skills*/}
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />

              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />

              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>NextJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/*Programming and Other skills*/}
        <div className="skills__frontend">
          <h3>Programming and Other Skills</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Ethical Hacking</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Linux</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details_icon" />
              <div>
                <h4>Stripe</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
