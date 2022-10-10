import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.css";
import bgvideo from "../.././assests/b4.mp4"
import Aos from "aos";
import "aos/dist/aos.css";
import lo from "../../assests/hermes2-transformed-transformed.png"
export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <>
      <div className="container">

      <video autoPlay loop  muted id='video'>

<source src={bgvideo} type='video/mp4' />
    </video>
        
          {/* <div className="logo">
            <img src= {lo} alt="" />
          </div> */}
        <div className="heading1">
        <Fade left big cascade>
            <div className="text">
              <h1>
                {" "}
                Welcome to Hermes </h1>
               <span><h2>A News App as agile and fast as the Greek
                Messenger God.</h2></span> 
              
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
            <Fade right big cascade>
            <div className="img-container">
              <img
                src={lo}
                alt="a"
                className="image"
              />
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
