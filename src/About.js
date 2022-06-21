import React from 'react';


function About() {
  return (
    // <main className='container-fluid bg-dark'>
      <div className='container'>
      <div className='row mt-3'>
        <div className="col-lg-12">
        <h1 className="text-center text-primary fw-bolder">About</h1>
        </div>
        </div>
      <div className='row mt-5'>
        <div className="col-lg-6 fs-5">
          <p>Hello! I'm <span className='fw-bolder'>Ramkumar</span>, a <span className='fw-bolder'>Fullstack developer</span> from Kallakurichi(Dt), Tamilnadu, India.</p>

<p>I'm a Passionate and hardworking person love to work in App development. I'm a Fullstack developer having right mix of knowledge in both Frontend as well as Backend Technologies.</p>

<p>I enjoy working on these technologies to upskill myself and learn new stuff. I have also dabbled in Web technologies like React and built some projects using it, including this website.</p>
{/* <audio controls>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/ogg"/>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
Your browser does not support the audio element.
</audio> */}

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