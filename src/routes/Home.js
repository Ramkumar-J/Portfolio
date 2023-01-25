import React from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
// import Landingbgvideo from "./assets/Landingbgvideo.mp4";
// import Typed from "react-typed";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="home-contents">
          <img
            className="my-img"
            src="./assets/images/my_image.png"
            alt="Myimage"
          ></img>
          <p className="mb-0 mt-3 fs-5">Welcome to My Portfolio I'm</p>
          <h1 className="my-name mb-0">Ramkumar J</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `I'm a <span style="color: crimson;font-weight:bold;font-size:25px;">Frontend developer</span>`
                )
                .pauseFor(2000)
                .deleteChars(18)
                .typeString(
                  `<span style="color: crimson;font-weight:bold;font-size:25px;">React developer</span>`
                )
                .pauseFor(2000)
                .deleteChars(15)
                .typeString(
                  `<span style="color: crimson;font-weight:bold;font-size:25px;">MERN stack developer</span>`
                )
                .pauseFor(2000)
                .deleteChars(20)
                .typeString(
                  `<span style="color: crimson;font-weight:bold;font-size:25px;">Full stack developer</span>`
                )
                .pauseFor(2000)
                // .deleteChars(20)
                // .typeString("Frontend developer")
                .start();
            }}
            options={{
              // strings: ["I'm a Full stack developer", "I'm a MERN stack developer", "I'm a Frontend developer", "I'm a React developer"],
              autoStart: true,
              loop: true,
            }}
          />
          {/* <Typed
          strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All My Subscribers",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        /> */}
          <div className="mt-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ramkumar-J"
            >
              <img
                className="rounded-circle ms-0"
                src="./assets/logos/github_logo3_home.png"
                alt="Github logo"
              ></img>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ramkumar-j-803baa201/"
            >
              <img
                className="rounded-circle ms-5"
                src="./assets/logos/linkedin_logo.png"
                alt="Linkedin logo"
              ></img>
            </a>
          </div>
          {/* <div className='hire-btn-container'>
      <button className="hire-btn"><a class="text-dark" href="">Hire Me</a></button>
      <button className="hire-btn"><a class="text-dark" href="">My Resume</a></button>
      </div> */}
        </div>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
