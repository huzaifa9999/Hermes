import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom';
import left from "../../assests/hermes-left.svg";
import right from "../../assests/herm.svg";
import bgvideo from "../../assests/bg.mp4"
export default function About() {
  return (
  <>
  <div class="flex flex-col justify-center items-center">
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
           <Link to="/"> <Fade>HERMES</Fade></Link>
          </h1>
          <Fade right cascade>
            <img src={left}  alt="" className="headimage" />
          </Fade>
     
        </div>
        <div class="flex flex-col p-9 items-center md:w-[59rem] w-full h-full bg-[#ffff]/[0.3] rounded-2xl">

             <h1 class="text-4xl text-center p-3 m-2">Welcome to Hermes, a News App as agile and fast as the Greek Messenger of Gods.</h1>
             <h3 class="text-3xl text-justify p-2 m-2">With progress in Artificial Intelligence, the ways of reading news is also evolving. So here we present you an innovation to read the news where you only have to speak and hear.</h3>
     <div class="flex flex-row justify-between items-center p-3 m-2 w-full"> 
     <Link to="/instructions"> <button >Instructions</button> </Link>
     <Link to="/news">  <button >News</button></Link>
      </div>
</div>
        </div>
  </>
  )
}
