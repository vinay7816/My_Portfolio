import React from 'react';
import htmlicon from "../../assets/html_icon.png";
import cssicon from "../../assets/css.png";
import booticon from "../../assets/bootstrap.png";
import javascript from "../../assets/javascript.png";
import reacticon from "../../assets/react.png";
import javaicon from "../../assets/java.png";
import springicon from '../../assets/springboot.png';
import sqlicon from "../../assets/mysql.png";
import giticon from "../../assets/GIT.png"
import './Skills.scss';

const Skills = () => {
  const skillimg = [
    { Skillurl: htmlicon, title: "HTML" },
    { Skillurl: cssicon, title: "CSS" },
    { Skillurl: booticon, title: "Bootstrap" },
    { Skillurl: javascript, title: "JAVASCRIPT" },
    { Skillurl: reacticon, title: "REACT" },
    { Skillurl: javaicon, title: "JAVA" },
    { Skillurl: springicon, title: "SPRINGBOOT" },
    { Skillurl: sqlicon, title: "MY SQL" },
    { Skillurl: giticon, title: "Git" }
  ];

  return (
    <div className='container d-flex justify-content-center h-100' id="scrollspySkills" style={{ marginTop: "8rem" }}>
      <div className='skill w-100'>
        <h1 className='text-center'>Skills</h1>
        <div className='row d-flex align-items-center justify-content-center' style={{ marginTop: "3.5rem", rowGap: "2rem" }}>
          {skillimg.map((skills, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 d-flex flex-column align-items-center mb-4">
              <div className='main2'>
                <img src={skills.Skillurl} className='img-fluid' alt={skills.title} style={{ height: "6rem", width: "6rem" }} />
              </div>
              <div className='mt-3'>
                <p className='text-center'>{skills.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
