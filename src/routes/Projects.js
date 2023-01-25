import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  let projectData = [
    {
      title: "Chrome New Tab",
      tools: "HTML,CSS",
      image: "./assets/images/Chrome Tab.jpg",
      deploylink: "https://leafy-sunflower-5bad48.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Google-Chrome-Newtab-Page",
    },
    {
      title: "Product Preview Card",
      tools: "HTML,CSS",
      image: "./assets/images/product_preview_card.png",
      deploylink: "https://creative-crisp-297b32.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-Task-Product-Preview-Card",
    },
    {
      title: "QR Code Component",
      tools: "HTML,CSS",
      image: "./assets/images/qr_code_component.jpg",
      deploylink: "https://fluffy-squirrel-6116f2.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-Task-QRcode-Component",
    },
    {
      title: "NFT Preview Card",
      tools: "HTML,CSS",
      image: "./assets/images/nft_preview_card.jpg",
      deploylink: "https://visionary-biscuit-8c363e.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-NFT-Preview-Card",
    },
    {
      title: "Order Summary Card",
      tools: "HTML,CSS",
      image: "./assets/images/order_summary_card.webp",
      deploylink: "https://luxury-kulfi-b8d372.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-Order-Summary-Component",
    },
    {
      title: "Obesity Banner",
      tools: "HTML,CSS,Bootstrap",
      image: "./assets/images/obesity_banner.webp",
      deploylink: "https://confident-joliot-fc1b5e.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Zen-Day16-Bootstrap-Task3",
    },
    {
      title: "Time Table",
      tools: "HTML,CSS",
      image: "./assets/images/time_table_project.jpg",
      deploylink: "https://courageous-druid-be0c1d.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Time-Table",
    },
    {
      title: "Google Calendar Events",
      tools: "JavaScript",
      image: "./assets/images/google_calendar_events.jpg",
      deploylink: "https://prismatic-beignet-75437a.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Google-Calendar-Events-Task",
    },
    {
      title: "Random Animal",
      tools: "JavaScript",
      image: "./assets/images/random_animal.jpg",
      deploylink: "https://stirring-cuchufli-5f6f39.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Zen-Day25-API-Task1",
    },
    {
      title: "Random Quote Generator",
      tools: "JavaScript",
      image: "./assets/images/random_quote_generator.png",
      deploylink: "https://tangerine-souffle-aa81d2.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Zen-Day25-API-Task3",
    },
    {
      title: "Blog App",
      tools: "Fullstack",
      image: "./assets/images/blog_app.jpg",
      deploylink: "https://dapper-otter-9d489b.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Blogers-Junction-Frontend",
    },
    {
      title: "Pinterest clone",
      tools: "Fullstack",
      image: "./assets/images/pinterest_clone_app.webp",
      deploylink: "https://nimble-scone-6fb9aa.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Pinterest-Clone-Front-End",
    },
    {
      title: "IE Tracker",
      tools: "Fullstack",
      image: "./assets/images/IE_tracker.jpg",
      deploylink: "https://visionary-stardust-352866.netlify.app",
      githublink: "https://github.com/Ramkumar-J/money-manager-frontend",
    },
    {
      title: "Portfolio",
      tools: "Reactjs",
      image: "./assets/images/portfolio_app.jpg",
      deploylink: "https://calm-banoffee-cf6f31.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Portfolio",
    },
    {
      title: "Shopping Page",
      tools: "Reactjs",
      image: "./assets/images/shopping_page.webp",
      deploylink: "https://glowing-puppy-fb622f.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Zen-Day27-Shop-homepage-Task",
    },
    {
      title: "Restaurent App",
      tools: "Fullstack",
      image: "./assets/images/restaurent_app.jpg",
      deploylink: "https://dapper-otter-9d489b.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Blogers-Junction-Frontend",
    },
  ];

  const [datafilter, setFilter] = useState(projectData);
  const filterProduct = (tool) => {
    const updatedlist = projectData.filter((e) => {
      return e.tools === tool;
    });
    setFilter(updatedlist);
  };

  const [load, setLoad] = useState(3);
  const loadData = datafilter.slice(0, load);
  const showMore = () => {
    setLoad(load + load);
  };

  return (
    <section className="container">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center fw-bolder" data-aos="fade-up">
            Projects
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div
          className="col-lg-12 d-flex justify-content-center"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <button
            className="category-btn"
            onClick={() => setFilter(projectData)}
          >
            All
          </button>
          <button
            className="category-btn"
            onClick={() => filterProduct("HTML,CSS")}
          >
            HTML&CSS
          </button>
          <button
            className="category-btn"
            onClick={() => filterProduct("JavaScript")}
          >
            JavaScript
          </button>
          <button
            className="category-btn"
            onClick={() => filterProduct("Reactjs")}
          >
            Reactjs
          </button>
          <button
            className="category-btn"
            onClick={() => filterProduct("Fullstack")}
          >
            Fullstack
          </button>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        {loadData.map((pData) => {
          return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-5">
              <ProjectCard project={pData}></ProjectCard>
            </div>
          );
        })}
        <button className="showmore-btn" onClick={() => showMore()}>
          Show More
        </button>
      </div>
    </section>
  );
}

export default Projects;
