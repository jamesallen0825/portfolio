import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/James Allen image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="James Allen" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>8 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>&nbsp;&nbsp;
          Senior Software Engineer with 8+ years of expertise in web applications. Expert in Ruby, Go, Java, python and modern
          JavaScript frameworks, demonstrating excellence in delivering high-performance applications that reduced load times
          by 30% and amplified user engagement by 45%. Distinguished record in responsive UI and RESTful APIs development, driving substantial improvements in system efficiency and user satisfaction. Proven mastery in frontend and backend
          development, specializing in Gin, Ruby on Rails, Spring Boot, Node.js, Django, Laravel and React, Angular, Vue.js.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
