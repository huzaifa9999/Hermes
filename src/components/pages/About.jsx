import React from 'react'
import { Fade } from 'react-reveal'
import left from "../../assests/hermes-left.svg";
import right from "../../assests/herm.svg";
import bgvideo from "../../assests/bg.mp4"
export default function About() {
  return (
  <>
     <div className="home">
        <video autoPlay loop muted id="video">
          <source src={bgvideo} type="video/mp4" />
        </video>
        </div>
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
  </>
  )
}
