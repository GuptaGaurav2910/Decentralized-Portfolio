import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".text", {
      strings: ["Blockchain Developer . . ", "Programmer . . .", "Full Stack Developer . . ."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    // Cleanup function to destroy Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me,</h3>
          <h1>Gaurav Gupta.</h1>
          <h3>And I'm a <span className="text"></span></h3>
          <p>Developed decentralized apps in web3 space <br />and Full Stack Applications.</p>
          <div className="home-sic">
            <a href="#" style={{ "--i": 6 }}><i className="fa-brands fa-linkedin fa-beat-fade"></i></a>
            <a href="#" style={{ "--i": 7 }}><i className="fa-brands fa-github fa-beat-fade"></i></a>
            <a href="#" style={{ "--i": 8 }}><i className="fa-brands fa-whatsapp fa-beat-fade"></i></a>
            <a href="#" style={{ "--i": 9 }}><i className="fa-brands fa-twitter fa-beat-fade"></i></a>
          </div>
          <a href="#" className="btn">More About Me</a>
        </div>
        {/* <div className="home-img">
        <img src="/g1.jpg" alt="image" />
      </div> */}
      </section>
    </div>
  );
}

export default Home;
