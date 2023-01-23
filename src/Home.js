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
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className='container-fluid m-0 p-0 home-content'>
        <div className='overlay'></div>
        {/* <video className='bgvideo' src="./assets/Landingbgvideo.mp4" autoPlay loop muted></video> */}
        {/* <div className='row'> */}
          {/* <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'> */}
          <div className='contents'> 
        {/* <img className='home-img' src="https://i.pinimg.com/564x/53/aa/eb/53aaebede8803acec60d5f11f3295bfb.jpg"></img> */}
        <img className='home-img' src="./assets/23925_1_-min-removebg-preview.png"></img>
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
        {/* <a href="https://www.frontendmentor.io/profile/Ramkumar-J"><img className='bg-white rounded-circle ms-0 h-25 w-25' src="https://cdn.worldvectorlogo.com/logos/frontendmentor-logo.svg"></img></a> */}
        {/* <img className='bg-white rounded-circle ms-5' src="https://img.icons8.com/color/50/gmail-new.png"></img> */}
      </div>
      {/* <button className="hire-btn"><a class="text-dark" href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=1da0c324f4&attid=0.1&permmsgid=msg-a:r5805485599974745911&th=18105694a458e3ec&view=att&disp=safe&realattid=f_l3oeenaq0&saddbat=ANGjdJ9x9uxeOEVArABngIui1WxY5sRrAjKPKzR9TfwjPVnfQDOFLUo_UZX1JaW9dQyLNPtC3a8dKwKXKWmfuUa1TuhM1sMY-jY-N19aT4ZtHMB1R4PSNydiYEcaS7skeBWC32444q5ZFgTf6L_yoAfjEckaMhq3fGo8ok9QQkJw34HWTJMuf88CcWZLADCP7d_nGEwFTgL9mZPHmkgATy4ubmfo0FFyG3lO990E0nRcu7lpFrtYrPqnuUS1g2mS9cjkNz9IOmQHvHI2Bok7aKHwcm8sZaAtO_M_AxsOmquWQG39eA0u5ZuKdHrtfe09MmVZI_edJ4Yg9OtUNopMv-5NCjoT0eoWtPdM2Ni1-yAE6AwUes6zKQ7MYfKTN3uhfdEI2ne-Dn9Q_94oDIQsuRWjjj7zCrkL_xKz-Z-fq8aRglAYTkBuRwdbUQd0aeqLsoBRDbY2R1nEtHzPvVqz_heC4Z_EYXlwGkjcqi4jX_jlixuH1wpb4eXV8ObhbQaMeIQy9q2j6vkDru2CSG2RCNnpT9L6_C8lQDMcZatGwYKBs34Pd2-WjqrRR_IBGjXQrtV-qrI2IFQVbNW6pbHUkH1ozkcGpHLUKmHg4koEJ7K4lJJhf4Yy98ABcn5ZwKkKJIWmj4FJB1ozgfPgGKVpIo_7odxgyxukUNM4u2GaAl_PEcOpoNa3aj6JfE33RuNdRkluejHi8LicaGSYq_njGQR0TBNbICI1_-IcytfVF802aXPLvznWPjrXCl7JThM">Hire Me</a></button>
      <button className="hire-btn"><a class="text-dark" href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=1da0c324f4&attid=0.1&permmsgid=msg-a:r5805485599974745911&th=18105694a458e3ec&view=att&disp=safe&realattid=f_l3oeenaq0&saddbat=ANGjdJ9x9uxeOEVArABngIui1WxY5sRrAjKPKzR9TfwjPVnfQDOFLUo_UZX1JaW9dQyLNPtC3a8dKwKXKWmfuUa1TuhM1sMY-jY-N19aT4ZtHMB1R4PSNydiYEcaS7skeBWC32444q5ZFgTf6L_yoAfjEckaMhq3fGo8ok9QQkJw34HWTJMuf88CcWZLADCP7d_nGEwFTgL9mZPHmkgATy4ubmfo0FFyG3lO990E0nRcu7lpFrtYrPqnuUS1g2mS9cjkNz9IOmQHvHI2Bok7aKHwcm8sZaAtO_M_AxsOmquWQG39eA0u5ZuKdHrtfe09MmVZI_edJ4Yg9OtUNopMv-5NCjoT0eoWtPdM2Ni1-yAE6AwUes6zKQ7MYfKTN3uhfdEI2ne-Dn9Q_94oDIQsuRWjjj7zCrkL_xKz-Z-fq8aRglAYTkBuRwdbUQd0aeqLsoBRDbY2R1nEtHzPvVqz_heC4Z_EYXlwGkjcqi4jX_jlixuH1wpb4eXV8ObhbQaMeIQy9q2j6vkDru2CSG2RCNnpT9L6_C8lQDMcZatGwYKBs34Pd2-WjqrRR_IBGjXQrtV-qrI2IFQVbNW6pbHUkH1ozkcGpHLUKmHg4koEJ7K4lJJhf4Yy98ABcn5ZwKkKJIWmj4FJB1ozgfPgGKVpIo_7odxgyxukUNM4u2GaAl_PEcOpoNa3aj6JfE33RuNdRkluejHi8LicaGSYq_njGQR0TBNbICI1_-IcytfVF802aXPLvznWPjrXCl7JThM">My Resume</a></button> */}
      {/* <h2>fullstack web developer</h2> */}
      </div>
          {/* </div> */}
          {/* <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 home-main-img'>
          <img className='img-fluid img-main ms-4' src="./assets/23925(2).jpg"></img>
          </div> */}
        {/* </div> */}
        
      {/* <img className='img-fluid img-main ms-4' src="./assets/23925(2).jpg"></img> */}
      {/* <motion.div animate={{ opacity: isVisible ? 1 : 0 }} /> */}
      <About className='main-bg'></About>
      {/* <hr className='text-danger'></hr>
      <hr className='text-danger'></hr> */}
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      {/* <Experience></Experience> */}
      <Contact></Contact>
      <Footer></Footer>
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