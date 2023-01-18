import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
// import Landingbgvideo from "./assets/Landingbgvideo.mp4";
// import Typed from "react-typed";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <div className='container-fluid m-0 p-0 home-content home-bg'>
        <div className='overlay'></div>
        {/* <video className='bgvideo' src="./assets/Landingbgvideo.mp4" autoPlay loop muted></video> */}
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
          <div className='contents'> 
        {/* <img className='home-img' src="https://ayushb.me/images/laptop.png"></img> */}
        <img className='home-img' src="https://i.pinimg.com/564x/53/aa/eb/53aaebede8803acec60d5f11f3295bfb.jpg"></img>
      <p className='mb-0 mt-3'>Hi, I am</p> 
      <h1 className='myName mb-0'>Ramkumar J</h1>
      {/* <h4>Fullstack developer</h4> */}
      <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(`I'm a <span style="color: crimson;font-weight:bold;font-size:25px;">Full stack developer</span>`)
        .pauseFor(2000)
        .deleteChars(20)
        .typeString(`<span style="color: crimson;font-weight:bold;font-size:25px;">MERN stack developer</span>`)
        .pauseFor(2000)
        .deleteChars(20)
        .typeString(`<span style="color: crimson;font-weight:bold;font-size:25px;">Frontend developer</span>`)
        .pauseFor(2000)
        .deleteChars(18)
        .typeString(`<span style="color: crimson;font-weight:bold;font-size:25px;">React developer</span>`)
        .pauseFor(2000)
        // .deleteChars(15)
        // .typeString("Full stack developer")
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
      {/* <h4>Welcome to my Portfolio</h4> */}
      <div className='my-icons mt-3'>
        <a href="https://github.com/Ramkumar-J"><img className='bg-white rounded-circle ms-0' src="https://img.icons8.com/ios-glyphs/50/github.png"></img></a>
        
        <a href="https://www.linkedin.com/in/ramkumar-j-803baa201/"><img className='bg-white rounded-circle ms-5' src="https://img.icons8.com/fluency/50/linkedin-circled.png"></img></a>
        {/* <img className='bg-white rounded-circle ms-5' src="https://img.icons8.com/color/50/gmail-new.png"></img> */}
      </div>
      {/* <h2>fullstack web developer</h2> */}
      </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 home-main-img'>
          <img className='img-fluid img-main ms-4' src="./assets/23925(2).jpg"></img>
          </div>
        </div>
        
      {/* <img className='img-fluid img-main ms-4' src="./assets/23925(2).jpg"></img> */}
      <About className='main-bg'></About>
      {/* <hr className='text-danger'></hr>
      <hr className='text-danger'></hr> */}
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      {/* <Experience></Experience> */}
      <Contact></Contact>
      </div>
      </>

    // <>
    //   <div className='home-content home-bg'>
    //     {/* <div className='overlay'></div>
    //     <video className='bgvideo' src="./assets/Landingbgvideo.mp4" autoPlay loop muted></video> */}
    //     <div className='contents'> 
    //     <img className='home-img' src="https://ayushb.me/images/laptop.png"></img>
    //   <p className='mb-0'>Hi, I am</p> 
    //   <h1 className='myName mb-0'>Ramkumar J</h1>
    //   <h4>Fullstack developer</h4>
    //   {/* <h4>Welcome to my Portfolio</h4> */}
    //   <div className='my-icons mt-3'>
    //     <a href="https://github.com/Ramkumar-J"><img className='bg-white rounded-circle ms-0' src="https://img.icons8.com/ios-glyphs/50/github.png"></img></a>
        
    //     <a href="https://www.linkedin.com/in/ramkumar-j-803baa201/"><img className='bg-white rounded-circle ms-5' src="https://img.icons8.com/fluency/50/linkedin-circled.png"></img></a>
    //     {/* <img className='bg-white rounded-circle ms-5' src="https://img.icons8.com/color/50/gmail-new.png"></img> */}
    //   </div>
    //   {/* <h2>fullstack web developer</h2> */}
    //   </div>
    //   <About className='main-bg'></About>
    //   <Skills></Skills>
    //   <Projects></Projects>
    //   <Education></Education>
    //   <Experience></Experience>
    //   </div>
     
    //   </>

    // <div className='container home-content'>
    //   <p className='mb-0'>Hi, I am</p>
    //   <h1>Ramkumar J</h1>
    //   <h2>fullstack web developer</h2>
    // </div>
  )
}

export default Home;