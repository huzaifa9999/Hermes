import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route, Link } 
       from "react-router-dom";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="container">
        <Fade left big cascade>
          <div className="heading1">
            <h1>App Name</h1>
            <h2> Welcome to our Voice Command News App.</h2>
            <h3> With progress in Artificial Intelligence, the ways of reading news is also evolving. So here we present you a innovative to read the news where you only have to speak and hear.</h3>
          </div>
        </Fade>
        <br></br>
        <br></br>

        <Fade right big cascade>
          <div className="heading2">
            <h3>
              {" "}
              You can also ask general questions form AI<br></br> For example
              "How are you?" .
            </h3>

            <Link to={'/news'}><button className="start">Get Started</button></Link>
          </div>
        </Fade>
        <br></br>
      </div>
    </>
  );
}
