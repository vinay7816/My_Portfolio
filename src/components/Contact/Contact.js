import React, { useRef } from "react";
import "./Contact.scss";

import file from '../../assets/file.png';
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
import icon from "../../assets/main.png"
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kwlz5gm", "template_qejlra8", form.current, {
        publicKey: "uER_Js1RL2rRc1H_C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container-fluid w-75 main-contact d-flex justify-content-center" style={{ marginTop: "10rem ",color:"white"}} >
      <div className="contact-section w-100">
        <h2 className="text-center pt-3" id="scrollspyContactme" style={{ fontFamily: "itim" }}>
          Contact me
        </h2>
        <div className="main-contact row d-flex align-items-center" style={{ padding: "1rem" }}>
          <div className="right col-12 col-lg-5 d-flex flex-column align-items-center mb-4 mb-lg-0">
            <div className="">
              <img
                src={icon}
                className=" contact-img c-img img-fluid p-3"
                style={{ height: "15rem" }}
                alt="..."
              />
            </div>
            <div className="paragraph text-center">
              <p className="paragraph1">Vinay Reddy</p>
              <p className="paragraph1">Frontend Web Developer</p>
              <p className="paragraph1">Connect with me</p>
            </div>
            <div className="icons d-flex justify-content-center" style={{ columnGap: "1rem" }}>
              <span>
              <i class="fa-brands fa-linkedin fa-lg"></i>
              </span>
              <span>
              <i class="fa-brands fa-whatsapp fa-lg "></i>
              </span>
              <span>
              <i class="fa-brands fa-github fa-lg"></i>
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control info"
                  required
                  style={{backgroundColor:"#404040"}}
                  id="inputName"
                  name="user_name"
                 
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  style={{backgroundColor:"#404040"}}
                  className="form-control info"
                  required
                  id="inputEmail"
                  name="user_email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputMessage" className="form-label">
                  Message
                </label>
                <textarea
      
                  className="form-control"
                  required
                  style={{backgroundColor:"#404040"}}
                  rows={4}
                  id="inputMessage"
                  name="message"
                />
              </div>
              <input
                className="submit btn btn-primary w-100 "
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
