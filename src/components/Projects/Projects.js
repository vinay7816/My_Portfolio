import React from 'react';
import './Projects.scss';
import giticon from '../../assets/github.png';
import socialmedia from "../../assets/social_media (1).png"
import crypto from "../../assets/crypto_tracker.png"
import youtube from "../../assets/youtube.png"
import movie from "../../assets/movie_review.png"
import news from "../../assets/web_news.png"
import codeclone from "../../assets/code-clone.png"

const Projects = () => {
  // Array of project details
  const projectsData = [
    {
      imageName:socialmedia,
      title: 'Socialmedia_App',
      demoLink: 'https://socialmedia-murex.vercel.app',
      gitlink:'https://github.com/vinay7816/socialmedia'
    },
    {
      imageName: crypto,
      title: 'Crypto_tracker',
      demoLink: 'https://crypto-tracker-dashboard-dynamic.vercel.app/',
      gitlink:'https://github.com/vinay7816/Crypto_Tracker'
    },
    {
      imageName: youtube,
      title: 'Youtube_Clone',
      demoLink: '/',
      gitlink:'https://github.com/vinay7816/Youtube_Clone'
    },
    {
      imageName: codeclone,
      title: 'CodeCraft',
      demoLink: '/',
      gitlink:'https://github.com/vinay7816/CodeCraft'
    },
    {
      imageName: news,
      title: 'Webnews',
      demoLink: '/',
      gitlink:'https://github.com/vinay7816/newsapp'
    }
    
  ];

  return (
    <div className='container-fluid  mainproject scrollspy-example g-0 d-flex flex-column align-items-center justify-content-center' id="scrollspyProjects" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabindex="0" style={{ marginTop: '8rem' }}>
      <h1 className='text-center text-white' >My Projects</h1>
      <div className='row gx-0 d-flex align-items-center justify-content-center ' style={{ rowGap: '2rem', paddingTop: '2.5rem' }}>
        {projectsData.map((project, index) => (
              <div className=' col main-projects col-lg-5 col-xl-4 col-md-6 col-sm-7 col-auto d-flex align-items-center justify-content-center mx-0'>
            <div key={index} className='bg-black border text-white card rounded-4 px-0 mx-0' style={{ width: '17rem', height: '20rem'}}>
              <img src={project.imageName} className='card-img-top rounded-4 mb-0 p-2 ' alt='...' style={{ height: '12rem' }} />
              <div className='card-body m-0' style={{ height: '4rem' }}>
                <h6 className='card-title'>{project.title}</h6>
                <div className='d-flex mt-4 justify-content-between align-items-center' >
                  <a href={project.demoLink} className='demo btn btn-primary'>
                    Demo
                  </a>
                  <span>
                    <a href={project.gitlink} style={{color:"white"}}>
                  <i class="fa-brands fa-github fa-2xl" style={{cursor:"pointer"}}></i>
                  </a>
                  </span>
                </div>
              </div>
            </div>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
