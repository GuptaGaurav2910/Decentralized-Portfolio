import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <section>
      <div className="services" id="services">
        <div className="container">
          <h1 className="sub-title">My <span>Projects</span></h1>
          <div className="services-list">
            <div>
            <i className="fa-solid fa-laptop-code" style={{ color: '#00eeff' }}></i>
              <h2>Campus Connect</h2>
              <p>
              Utilized MERN stack for the development and integration 
of user-friendly interfaces. Implemented Firebase 
databases for efficient data management.
              </p>
              <a href="https://github.com/GuptaGaurav2910/CampusConnect" className="read">Read More</a>
            </div>
            <div>
            <i className="fa-solid fa-cube" style={{ color: '#00eeff' }}></i>
              <h2>BlockSafe Banking</h2>
              <p>
              Blockchain based banking system with Multi Factor Authentication 
Technologies used: React Js, Firebase, Truffle, ganache, solidity
Application for web3 secure transaction between wallets 
              </p>
              <a href="https://github.com/GuptaGaurav2910/Blocksafe-Banking" className="read">Read More</a>
            </div>
            <div>
            <i className="fa-solid fa-wallet" style={{ color: '#00eeff' }}></i>
              <h2>Staking Application</h2>
              <p>
              Developed a decentralized application (DApp) for cryptocurrency staking, enabling users to securely stake their tokens and earn rewards through smart contracts. Utilized blockchain technology to ensure transparency, immutability, and efficiency in staking operations
              </p>
              <a href="https://github.com/GuptaGaurav2910/Stacking-Dapp" className="read">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
