import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className="service">
          {/* ReactJS Developer */}
          <div className="service__head">
            <h3>ReactJS Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in JavaScript, including variables, functions, and
                arrays, with experience in working with JavaScript frameworks
                and libraries.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Sound knowledge of ReactJS basics: components, JSX syntax, state
                management, and lifecycle methods.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Familiarity with React ecosystem tools like React Router, Redux,
                state management, and API requests.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Skilled in building responsive web applications using ReactJS,
                employing media queries and flexbox for responsive design
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experienced in Git version control and collaborating on projects
                using platforms like GitHub.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Continuous learning and problem-solving mindset, staying updated
                with ReactJS trends, participating in open-source projects, and
                overcoming challenges.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          {/* Frontend Developer */}
          <div className="service__head">
            <h3>Frontend Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in HTML, CSS, and JavaScript for front-end
                development.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strong grasp of HTML semantics, CSS styling, and JavaScript
                interactivity.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Familiar with React and other popular front-end frameworks and
                libraries.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Builds responsive websites using modern CSS techniques for
                optimal user experience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experienced in Git version control and collaborating on projects
                using platforms like GitHub.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Constantly learning and adapting to stay updated with the latest
                front-end development trends and best practices.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
