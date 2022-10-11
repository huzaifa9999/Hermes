import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.css";
import bgvideo from "../.././assests/b4.mp4"
import Aos from "aos";
import "aos/dist/aos.css";
import lo from "../../assests/hermes.svg"
import logo from '../../assests/hermeslogo.png'

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <>
      <div className="container">

        <video autoPlay loop muted id='video'>

          <source src={bgvideo} type='video/mp4' />
        </video>

       
        <div className="heading">
        <div className="img-container">
              <img
                src={lo}
                alt="a"
                className="image"
              />
            </div><h1>
          {" "}
          HERMES </h1>
          
          <div className="img-container">
              <img
                src={lo}
                alt="a"
                className="image"
              />
            </div>
          
          </div>
        <div className="heading1">
        
          <Fade left big cascade>

            <div className="text">
              <ul class="small-block-grid-2 medium-block-grid-3 flip-cards">

                <li ontouchstart="this.classList.toggle('hover');">
                  <div class="large button card-front">
                    <a>Learn More about the App</a>
                    <i class="fa fa-code card-icon "></i>
                  </div>
                  <div class="panel card-back">
                    <i class="fa fa-code card-icon"></i>
                    <div class="hub-info">
                      <a >JKLCode.com</a>
                      <p>Find coding gists, cheatsheets, plugins, themes, resources, and tutorials.</p>
                    </div>
                    <small class="clear">Updated TTH.</small>
                  </div>
                </li>

                <li ontouchstart="this.classList.toggle('hover');">
                  <div class="large button card-front">
                    <a>Instructions</a>
                    <i class="fa fa-pencil-square-o card-icon"></i>
                  </div>

                  <div class="panel card-back">
                    <i class="fa fa-pencil-square-o card-icon"></i>
                    <div class="hub-info">
                      <a>AaronSnowberger.com</a>
                      <p>Take a look at my graphic design portfolio and contact me for design work.</p>
                    </div>
                    <small class="clear">Updated Saturdays.</small>
                  </div>
                </li>

                <li ontouchstart="this.classList.toggle('hover');">
                  <div class="large button card-front">
                    <a>Get Started</a>
                    <i class="fa fa-paper-plane-o card-icon"></i>
                  </div>

                  <div class="panel card-back">
                    <i class="fa fa-paper-plane-o card-icon"></i>
                    <div class="hub-info">
                      <a>Udemy.com</a>
                      <p>Join classes about Computers, Technology, Coding, Design, and Language Learning.</p>
                    </div>
                    <small class="clear">Updated Mondays.</small>
                  </div>
                </li>
              </ul>
              {/* <span><h2>Welcome to Hermes, a News App as agile and fast as the Greek
                Messenger of Gods.</h2></span>

              <h3>
                {" "}
                With progress in Artificial Intelligence, the ways of reading
                news is also evolving. So here we present you an innovation to
                read the news where you only have to speak and hear.
              </h3>
              {/* <h3>
                You can also ask general questions from AI<br></br> For example
                "How are you?" .
              </h3> */}
            </div></Fade>
        </div>
        {/* <div className="button">
            <button className="btn">
              {" "}
              <Link to={"/news"}>Get Started</Link>
            </button>
          </div> */}
      </div>
    </>
  );
}
