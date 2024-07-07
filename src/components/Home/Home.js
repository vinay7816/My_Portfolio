import React from 'react';
import Header from '../Header/Header';
import icon from "../../assets/main.png";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import "./Home.scss";

const Home = ({ mode }) => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Reactjs Developer'],
    loop: true,
    typeSpeed: 120,
  });

  return (
    <>
      <div className={`home-container d-flex flex-column align-items-center justify-content-center ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`} id="scrollspyHome">
        <div className="row d-flex main-home align-items-center justify-content-around " >
          <div className="col-5 col-md-3 order-1 order-md-2 mt-5 mb-md-0 mx-5 responsive-img">
            <img src={icon} className="photo rounded-circle img" alt="..." />
          </div>
          <div className="col-12 col-md-5 order-2 order-md-1 mt-5 " style={{  fontFamily: "Kavoon" }}>
            <h1 className='info' style={{ fontFamily: "Kavoon" }}>Hello I'm</h1>
            <span className="typer mt-0" style={{ fontFamily: "itim" }}>
              {text}<Cursor />
            </span>
            <p className='para'>I'm a Frontend Developer with a passion for creating interactive and user-friendly web applications.</p>
            <div className="buttons row g-3">
              <div className="col-12 col-md-6">
                <a href='Vinays_Resume.pdf' download='resume.pdf' className="btn btn w-100 download-button">Download CV</a>
              </div>
              <div className="col-12 col-md-6">
                <button className="btn w-100 contact-button">Contact me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
