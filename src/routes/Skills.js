import React from "react";

function Skills() {
  const frontendTools = [
    {
      logo: "./assets/logos/html5_logo.png",
      name: "HTML5",
    },
    {
      logo: "./assets/logos/css3_logo.png",
      name: "CSS3",
    },
    {
      logo: "./assets/logos/bootstrap_logo.png",
      name: "Bootstrap",
    },
    {
      logo: "./assets/logos/javascript_logo.png",
      name: "JavaScript",
    },
    {
      logo: "./assets/logos/react_logo.png",
      name: "Reactjs",
    },
    {
      logo: "./assets/logos/postman-api_logo.png",
      name: "Postman",
    },
  ];
  const backendTools = [
    {
      logo: "./assets/logos/nodejs_logo.png",
      name: "Nodejs",
    },
    {
      logo: "./assets/logos/mysql_logo.png",
      name: "MySQL",
    },
    {
      logo: "./assets/logos/mongodb_logo.png",
      name: "MongoDB",
    },
  ];
  const versionTools = [
    {
      logo: "./assets/logos/git_logo.png",
      name: "Git",
    },
    {
      logo: "./assets/logos/github_logo.png",
      name: "Github",
    },
  ];
  return (
    <section class="container">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center fw-bolder" data-aos="fade-up">
            Skills
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12">
          <h3 className="text-center text-danger fw-bolder" data-aos="fade-up">
            Frontend Tools
          </h3>
        </div>
      </div>
      <div className="row mt-2" data-aos="fade-right" data-aos-duration="600">
        {frontendTools.map((frontendTool) => {
          return (
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
              <img
                className="img-fluid skill-logo"
                src={frontendTool.logo}
                alt="Frontend Tool Logo"
              ></img>
              <h6 className="fw-bolder">{frontendTool.name}</h6>
            </div>
          );
        })}
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <h3 className="text-center text-danger fw-bolder" data-aos="fade-up">
            Backend Tools
          </h3>
        </div>
      </div>
      <div className="row mt-2" data-aos="fade-right" data-aos-duration="600">
        {backendTools.map((backendTool) => {
          return (
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
              <img
                className="img-fluid skill-logo"
                src={backendTool.logo}
                alt="Backend Tool Logo"
              ></img>
              <h6 className="fw-bolder">{backendTool.name}</h6>
            </div>
          );
        })}
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <h3 className="text-center text-danger fw-bolder" data-aos="fade-up">
            Version Control Tools
          </h3>
        </div>
      </div>
      <div className="row mt-2" data-aos="fade-right" data-aos-duration="600">
        {versionTools.map((versionTool) => {
          return (
            <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center">
              <img
                className="img-fluid skill-logo"
                src={versionTool.logo}
                alt="Version Tool Logo"
              ></img>
              <h6 className="fw-bolder">{versionTool.name}</h6>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
