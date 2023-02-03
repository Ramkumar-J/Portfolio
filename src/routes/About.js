import React from "react";

function About() {
  return (
    <section className="container">
      <div className="row mt-3">
        <div className="col-12">
          <h1 className="text-center fw-bolder" data-aos="fade-up">
            About me
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="img-fluid bg-secondary"
            src="./assets/images/about_page_image.jpg"
            alt="Person sitting on the chair and working with Laptop"
          ></img>
        </div>
        <div
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2 fs-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* <p className='mt-2'>Hello! I'm <span className='fw-bolder'>Ramkumar</span>, a <span className='fw-bolder'>Fullstack developer</span> from Kallakurichi(Dt), Tamilnadu, India.</p> */}
          <p className="mt-2">
            I'm a Passionate and hardworking person love to work in App
            development.
          </p>
          {/* <p className='mt-2'>I'm a Passionate and hardworking person love to work in App development. I'm a Fullstack developer having right mix of knowledge in both Frontend as well as Backend Technologies.</p> */}
          <p className="mt-2">
            I enjoy working on these technologies to upskill myself and learn
            new stuff. I have also dabbled in Web technologies like React and
            built some projects using it, including this website.
          </p>
          <button className="btn btn-success">
            <a
              class="text-white fw-bolder"
              // href="https://drive.google.com/file/d/1nvr8xrHj5AkPMLyu-jCqhtqZYapXCVZ0/view?usp=sharing"
              href="https://drive.google.com/file/d/1gHlv-7OagXZm_AwL6ruzqQEohcdkUpLh/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
