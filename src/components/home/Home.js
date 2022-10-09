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
      <div>
        <Fade left big cascade>
          <div className="heading1">
            <h1>Hii there!</h1>
            <h2> Welcome to our voice command news App.</h2>
            <h3> You can search news by seeing the info on cards below .</h3>
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
