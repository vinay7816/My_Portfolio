import React, { useState ,useEffect} from "react";
import "./Header.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import Switchbutton from "../Switchbutton";

const Header = (props) => {
    const [isSticky, setIsSticky] = useState(false);
    const [mode, setMode] = useState("light");
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) { 
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const handlemode=(e)=>{
      e.prevent.Defaultvalue();
      if(mode==="light"){
        setMode("dark")
      }
      else{
        setMode("light");
      }
    }

  return (
    <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`}   >
      <div className="container-fluid" style={{backgroundColor:"black"}}>
        <a className="navbar-brand " href="#" style={{color:props.mode==='light'?'black':'white',fontFamily:'itim'}} >
          Vinay
        </a>
        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa-solid fa-bars " style={{color:props.mode==='light'?'black':'white'}}> </span>

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav  mb-2 mb-lg-0 text-center" >
            <li className="nav-item">
              <a className="nav-link active"  href="#scrollspyHome" aria-current="page" style={{color:props.mode==='light'?'black':'white'}} >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#scrollspyAbout" style={{color:props.mode==='light'?'black':'white'}}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true"  href="#scrollspyProjects" style={{color:props.mode==='light'?'black':'white'}}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true"  href="#scrollspySkills" style={{color:props.mode==='light'?'black':'white'}}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true"  href="#scrollspyContactme" style={{color:props.mode==='light'?'black':'white'}}>
                Contact me
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
