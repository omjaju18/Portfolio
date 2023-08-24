import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <h5>What I have Studied</h5>
      <h2>My Education</h2>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">
                Electronics and Computer Science Engineering
              </h3>
              <span className="qualification__subtitle">
                Sreenidhi Institute of Science and Technology, Hyderabad, India
              </span>
              <div className="qualification__calender">
                <LuCalendarDays className="qualification__icon" />
                2020 - Present
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
