import React from "react";

function ProjectCard(props) {
  return (
    <section className="project-card-container" data-aos="fade-right">
      <img
        className="project-card-image"
        src={props.project.image}
        alt="Project Image"
      ></img>
      <div className="project-card-content mt-2 p-2">
        <h3 className="project-card-heading fw-bolder mb-0">
          {props.project.title}
        </h3>
        <p className="project-card-tools mt-2">{props.project.tools}</p>
        <div className="project-btn-area mt-2">
          <button className="btn btn-warning project-btn">
            <a href={props.project.deploylink} target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src="./assets/logos/netlify_logo.png"
                alt="Netlify Logo"
              ></img>{" "}
              Live Demo
            </a>
          </button>
          <button className="btn btn-warning project-btn">
            <a href={props.project.githublink} target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src="./assets/logos/github_logo_2.png"
                alt="Github Logo"
              ></img>{" "}
              Live Code
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
