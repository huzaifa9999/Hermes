
import Fade from "react-reveal/Fade";
import React from "react";
import "./maincard.css";
import { Link } from "react-router-dom";

export default function MainCard(props) {
  return (
    <>  
    <div className="container">

  <div className="content" >
  <Fade bottom>
   <h2 className="head">{props.heading}</h2>
   <Link to={props.link}><button>Click me</button></Link>

    </Fade>
    </div>


</div>  
    </>
  );
}
