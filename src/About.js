import React from 'react';


function About() {
  return (
    // <main className='container-fluid bg-dark'>
      <div className='container'>
      <div className='row mt-3'>
        <div className="col-lg-12">
          <h1 className='text-center text-warning fw-bold'>About</h1>
        </div>
        </div>
      <div className='row mt-5'>
        <div className="col-lg-6">
          <p>Hello! I'm Mayank, a Software Engineer from Kolkata, India.</p>

<p>An experienced mobile app developer who has a track record of successfully creating Android apps that are both well-received and commercially viable. Have published 10+ apps on Play Store with over 5 million combined downloads.</p>

<p>I enjoy working on side projects to upskill myself and learn new stuff. Not only skilled in Android Development, but also proficient in Back-end development and Cross Platform App Development. I have also dabbled in Web technologies like React and built some projects using it, including this website.</p>
<audio controls>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/ogg"/>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>

        </div>
        <div className="col-lg-6">
          <img className='img-fluid img-size' src="./assets/23925(2).jpg"></img>
        </div>
      </div>
      </div>
    // </main>
  )
}

export default About;