import React from 'react';
import './About.scss'
import reacticon from "../../assets/React_icon.png"
import careericon from "../../assets/career_icon.png"
import aspirationsicon from "../../assets/aspirations.png"
import about from "../../assets/about.png"

const About = () => {
  return (
    <div className=' container-fluid mx-5 d-flex  main-about w-75  align-items-center justify-content-center' style={{ marginTop: "10rem" }}>
      <div className='section w-100 my-8 p-4 rounded-3' >
        <h1 className='about text-center' id="scrollspyAbout" style={{ fontFamily: "itim", fontSize: "2rem", margin: "2rem" }}>About me</h1>
        <div className='content row align-items-center justify-content-center'>
          <div className='col-12 col-lg-4 pb-4 pb-lg-0 text-center mx-5' >
            <img src={about}
              className="img-fluid about-picture" alt="..." />
          </div>
          <div className='article col-12 col-lg-6'>
            <div className='pt-2'>
              <div className='d-flex align-items-center'>
                <span><img src={reacticon} alt="react" style={{ height: "2rem", width: "2rem" ,color:"red"}} /></span>
                <h2 className="px-2" style={{ fontFamily: "itim", fontSize: "1.2rem" }}>Introduction</h2>
              </div>
              <p style={{fontSize:"0.9rem"}}>I am a Frontend React JS Developer with a passion for creating responsive and interactive web applications.</p>
            </div>
            <div className='pt-2'>
              <div className='d-flex align-items-center'>
                <span>
                  <img src={careericon} alt="career" style={{ height: "2rem", width: "2rem" }} />
                </span>
                <h2 className="px-2" style={{ fontFamily: "itim", fontSize: "1.2rem" }}>Professional Qualities</h2>
              </div>
              <p style={{fontSize:"0.9rem"}}>I am a quick learner and I am always looking forward to expanding my knowledge and skill set.</p>
            </div>
            <div className='pt-2'>
              <div className='d-flex align-items-center'>
                <span><img src={aspirationsicon} alt="aspirations" style={{ height: "2rem", width: "2rem" }} /></span>
                <h2 className="px-2" style={{ fontFamily: "itim", fontSize: "1.2rem" }}>Career Aspirations</h2>
              </div>
              <p style={{fontSize:"0.9rem"}}>I am excited to contribute to a professional team and work on meaningful projects as a Frontend Web Developer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
