import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { useState } from 'react';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
 
  
      document.body.style.backgroundColor = 'black';
   
    
  
  return (
    <>
    <div className='App'>
    <Header  />
    <div className='container-fluid w-100 d-flex flex-column align-items-center justify-content-center' >

<Home />
<About/>
<Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
    </div>
    </>
  );
}

export default App;
{/* <Header getmode={getmode} mode={mode}/> */}
     
      {/* 
      */}