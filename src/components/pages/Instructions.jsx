import React from 'react'
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import left from "../../assests/hermes-left.svg";
import right from "../../assests/herm.svg";
import bgvideo from "../../assests/bg.mp4"
import "./ins.css"
export default function Instructions() {
  return (
  <>
     <div className="bg">
        <video autoPlay loop muted id="video1">
          <source src={bgvideo} type="video/mp4" />
        </video>
        </div>
        <div className="headingi">
       
          <Fade left cascade>
          
            <img src={right} alt="" className="headimage" />
          </Fade>

          <h1>
            <Fade><Link to="/">HERMES</Link></Fade>
          </h1>
          <Fade right cascade>
            <img src={left} alt="" className="headimage" />
            
          </Fade>
        
        </div>
  </>
  )
}
