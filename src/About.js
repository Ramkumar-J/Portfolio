import React from 'react';


function About() {
  return (
    // <main className='container-fluid bg-dark'>
      <div className='container'>
      <div className='row mt-3'>
        <div className="col-lg-12">
        <h1 className="text-center text-primary fw-bolder">About me</h1>
        </div>
        </div>
      <div className='row mt-5'>
      <div className="col-lg-6 mb-5">
          <img className='img-fluid img-size ms-4' src="./assets/23925(2).jpg"></img>
        </div>
        <div className="col-lg-6 fs-5 mb-5 text-white">
          {/* <div className='row'>
            <div className="col-lg-6">
              <h4>Experience</h4>
              <p>Fresher</p>
            </div>
            <div className="col-lg-6">
              <h4>Experience</h4>
              <p>Fresher</p>
            </div>
          </div> */}
          <p className='mt-2'>Hello! I'm <span className='fw-bolder'>Ramkumar</span>, a <span className='fw-bolder'>Fullstack developer</span> from Kallakurichi(Dt), Tamilnadu, India.</p>

<p className='mt-2'>I'm a Passionate and hardworking person love to work in App development. I'm a Fullstack developer having right mix of knowledge in both Frontend as well as Backend Technologies.</p>

<p className='mt-2'>I enjoy working on these technologies to upskill myself and learn new stuff. I have also dabbled in Web technologies like React and built some projects using it, including this website.</p>
<button className="btn btn-success"><a class="text-white" href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=1da0c324f4&attid=0.1&permmsgid=msg-a:r5805485599974745911&th=18105694a458e3ec&view=att&disp=safe&realattid=f_l3oeenaq0&saddbat=ANGjdJ9x9uxeOEVArABngIui1WxY5sRrAjKPKzR9TfwjPVnfQDOFLUo_UZX1JaW9dQyLNPtC3a8dKwKXKWmfuUa1TuhM1sMY-jY-N19aT4ZtHMB1R4PSNydiYEcaS7skeBWC32444q5ZFgTf6L_yoAfjEckaMhq3fGo8ok9QQkJw34HWTJMuf88CcWZLADCP7d_nGEwFTgL9mZPHmkgATy4ubmfo0FFyG3lO990E0nRcu7lpFrtYrPqnuUS1g2mS9cjkNz9IOmQHvHI2Bok7aKHwcm8sZaAtO_M_AxsOmquWQG39eA0u5ZuKdHrtfe09MmVZI_edJ4Yg9OtUNopMv-5NCjoT0eoWtPdM2Ni1-yAE6AwUes6zKQ7MYfKTN3uhfdEI2ne-Dn9Q_94oDIQsuRWjjj7zCrkL_xKz-Z-fq8aRglAYTkBuRwdbUQd0aeqLsoBRDbY2R1nEtHzPvVqz_heC4Z_EYXlwGkjcqi4jX_jlixuH1wpb4eXV8ObhbQaMeIQy9q2j6vkDru2CSG2RCNnpT9L6_C8lQDMcZatGwYKBs34Pd2-WjqrRR_IBGjXQrtV-qrI2IFQVbNW6pbHUkH1ozkcGpHLUKmHg4koEJ7K4lJJhf4Yy98ABcn5ZwKkKJIWmj4FJB1ozgfPgGKVpIo_7odxgyxukUNM4u2GaAl_PEcOpoNa3aj6JfE33RuNdRkluejHi8LicaGSYq_njGQR0TBNbICI1_-IcytfVF802aXPLvznWPjrXCl7JThM">My Resume</a></button>
{/* <audio controls>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/ogg"/>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
Your browser does not support the audio element.
</audio> */}

        </div>
        {/* <div className="col-lg-6">
          <img className='img-fluid img-size' src="./assets/23925(2).jpg"></img>
        </div> */}
      </div>
      </div>
    // </main>
  )
}

export default About;