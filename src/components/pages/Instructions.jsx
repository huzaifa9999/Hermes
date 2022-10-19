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
  <div class="flex flex-col items-center justify-center">
     <div className="bg">
        <video autoPlay loop muted id="video1">
          <source src={bgvideo} type="video/mp4" />
        </video>
        </div>
        <div className="headingi">
       
          <Fade left cascade>
          
            <img src={right} alt="" className="headimage" />
          </Fade>

          <h1 className="hh">
            <Fade><Link to="/">HERMES</Link></Fade>
          </h1>
          <Fade right cascade>
            <img src={left} alt="" className="headimage" />
            
          </Fade>
        
        </div>

<div class="flex flex-col justify-center items-center  md:w-[59rem] w-full h-full bg-[#ffff]/[0.3] rounded-2xl p-9">
<h2 class="text-center text-4xl p-2 ">Instructions</h2>
<ul class=" text-2xl p-3 m-2 list-disc leading-9 ">
  <li>Click on the bottom right icon to acitvate and deactivate the assistan.</li>
  <li>For the procedure for asking the News refer to the News page.</li>
  <li>When News is shown a one time command is asked for reading the news by assistant which is answered in yes or no.</li>
  <li>Deactivate the assistant by clicking on its icon.</li>
  <li>To get detailed info about any article command the assistant to open that article or simply click on it.</li>
  <li>The assistant also responds to small talk like "how are you?".</li>
</ul>
  <div class="flex flex-row justify-center items-center p-3 m-2 w-full"> 

     <Link to="/news">  <button >News</button></Link>
      </div>
</div>
</div>

  </>
  )
}
