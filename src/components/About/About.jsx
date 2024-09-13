import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/imag.jpg" alt="image" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Blockchain Developer</h4>
        <p>
          Detail-oriented and highly motivated engineering graduate with a
          strong foundation in software development, eager to contribute to
          Company’s innovative projects. Demonstrated proficiency in
          designing, building, testing, and deploying applications using various
          technologies. Equipped with excellent problem-solving and
          communication skills. Committed to delivering high-quality software
          solutions that meet client expectations
        </p>
        <a href="#skills" className="btn">More About Me</a>
      </div>
    </section>
  );
}

export default About;
