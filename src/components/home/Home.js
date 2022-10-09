import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
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

            <h2>Just Some basic instructions before we begin</h2>
          </div>
        </Fade>
        <br></br>
        <div className="instructions" >
          <h2>Say the following</h2>
          <ul  className="list" data-aos="fade-up"   data-aos-easing="ease-in-out">
            <li>"Go Back" To go back to the previous page</li>
            <li>
              Open Article number "any no. of your choice" to open the Desired
              article
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
