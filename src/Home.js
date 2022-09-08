import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
// import Landingbgvideo from "./assets/Landingbgvideo.mp4";

function Home() {
  return (
    <>
      <div className='home-content home-bg'>
        <div className='overlay'></div>
        <video className='bgvideo' src="./assets/Landingbgvideo.mp4" autoPlay loop muted></video>
        <div className='contents'> 
      <p className='mb-0'>Hi, I am</p> 
      <h1 className='myName mb-0'>Ramkumar J</h1>
      <h4>Fullstack developer</h4>
      {/* <h4>Welcome to my Portfolio</h4> */}
      <div className='my-icons mt-3'>
        <a href="https://github.com/Ramkumar-J"><img className='bg-white rounded-circle ms-0' src="https://img.icons8.com/ios-glyphs/50/github.png"></img></a>
        
        <a href="https://www.linkedin.com/in/ramkumar-j-803baa201/"><img className='bg-white rounded-circle ms-5' src="https://img.icons8.com/fluency/50/linkedin-circled.png"></img></a>
        {/* <img className='bg-white rounded-circle ms-5' src="https://img.icons8.com/color/50/gmail-new.png"></img> */}
      </div>
      {/* <h2>fullstack web developer</h2> */}
      </div>
      <About className='main-bg'></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Experience></Experience>
      </div>
     
      </>
    // <div className='container home-content'>
    //   <p className='mb-0'>Hi, I am</p>
    //   <h1>Ramkumar J</h1>
    //   <h2>fullstack web developer</h2>
    // </div>
  )
}

export default Home;