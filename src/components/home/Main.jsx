import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./main.css";
import bgvideo from "../../assests/bg.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import left from "../../assests/hermes-left.svg";
import right from "../../assests/herm.svg";
import MainCard from "./MainCard";

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <>
      <div className="home">
        <video autoPlay loop muted id="video">
          <source src={bgvideo} type="video/mp4" />
        </video>

        <div className="heading">
          <Fade left cascade>
            <img src={right} alt="" className="headimage" />
          </Fade>
          <h1>
            <Fade>HERMES</Fade>
          </h1>
          <Fade right cascade>
            <img src={left} alt="" className="headimage" />
          </Fade>
        </div>
       
        <div className="heading1">
       
       <MainCard heading="About" link="/about" />
        <MainCard heading="Instructions" link="/instructions" />
        <MainCard heading="News" link="/news"/>

        </div>
      </div>
    </>
  );
}
