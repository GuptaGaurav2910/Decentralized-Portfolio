import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section>
            <div className="container1" id="skills">
                <h1 className="heading1">Technical Skills</h1>
                <div className="Technical-bars">
                    <div className="bar">
                        <i style={{ color: '#c95d2e' }} className="fa-solid fa-code"></i>
                        <div className="info">
                            <span>C++</span>
                        </div>
                        <div className="progress-line html">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <i style={{ color: '#147bbc' }} className="fa-brands fa-java"></i>
                        <div className="info">
                            <span>Java</span>
                        </div>
                        <div className="progress-line css">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <i style={{ color: '#b0bc1e' }} className="fa-brands fa-square-js"></i>
                        <div className="info">
                            <span>JavaScript</span>
                        </div>
                        <div className="progress-line javascript">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <i style={{ color: '#c32ec9' }} className="fa-brands fa-ethereum"></i>
                        <div className="info">
                            <span>Solidity</span>
                        </div>
                        <div className="progress-line python">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <i style={{ color: '#69bcbc' }} className="fa-brands fa-react"></i>
                        <div className="info">
                            <span>React</span>
                        </div>
                        <div className="progress-line react">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container1">
                <h1 className="heading1">Professional Skills</h1>
                <div className="radial-bars">
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">90%</div>
                        <div className="test">Creativity</div>
                    </div>
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">65%</div>
                        <div className="test">Communication</div>
                    </div>
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">75%</div>
                        <div className="test">Problem Solving</div>
                    </div>
                    <div className="radial-bar">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">80%</div>
                        <div className="test">Teamwork</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
