import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  let projectData = [
    {
      title: "Chrome New Tab",
      category: "Frontend",
      tools: "HTML,CSS",
      image: "./assets/images/Chrome Tab.jpg",
      deploylink: "https://chrome-new-tab.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Google-Chrome-Newtab-Page",
    },
    {
      title: "Restaurent App",
      category: "Fullstack",
      tools: "HTML,CSS,JS,Bootstrap,React,Mongodb,Nodejs",
      image: "./assets/images/restaurent_app.jpg",
      deploylink: "https://sanburg-restaurent.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Food-App-Frontend",
    },
    {
      title: "Pinterest clone",
      category: "Fullstack",
      tools: "HTML,CSS,JS,Bootstrap,React,Mongodb,Nodejs",
      image: "./assets/images/pinterest_clone_app.webp",
      deploylink: "https://pinterest-image-gallery.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Pinterest-Clone-Front-End",
    },
    {
      title: "Blog App",
      category: "Fullstack",
      tools: "HTML,CSS,JS,Bootstrap,React,Mongodb,Nodejs",
      image: "./assets/images/blog_app.jpg",
      deploylink: "https://blogers-junction.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Blogers-Junction-Frontend",
    },
    {
      title: "IE Tracker",
      category: "Fullstack",
      tools: "HTML,CSS,JS,Bootstrap,React,Mongodb,Nodejs",
      image: "./assets/images/IE_tracker.jpg",
      deploylink: "https://incomeexpense-tracker.netlify.app",
      githublink: "https://github.com/Ramkumar-J/money-manager-backend",
    },
    {
      title: "Obesity Banner",
      category:"Frontend",
      tools: "HTML,CSS,Bootstrap",
      image: "./assets/images/obesity_banner.webp",
      deploylink: "https://confident-joliot-fc1b5e.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Zen-Day16-Bootstrap-Task3",
    },
    {
      title: "Portfolio",
      category: "Frontend",
      tools: "Reactjs",
      image: "./assets/images/portfolio_app.jpg",
      deploylink: "https://eclectic-paprenjak-b08705.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Portfolio",
    },
    {
      title: "Client Details Form",
      category: "Frontend",
      tools: "HTML,CSS",
      image: "./assets/images/client_details_form.jpg",
      deploylink: "https://client-details-form.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Client-Details-Form",
    },
    {
      title: "Google Calendar Events",
      category: "Frontend",
      tools: "HTML,CSS,JavaScript",
      image: "./assets/images/google_calendar_events.jpg",
      deploylink: "https://g-calendar-events.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Google-Calendar-Events-Task",
    },
    {
      title: "Random Quote Generator",
      category: "Frontend",
      tools: "HTML,CSS,JavaScript",
      image: "./assets/images/random_quote_generator.png",
      deploylink: "https://tangerine-souffle-aa81d2.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Zen-Day25-API-Task3",
    },
    {
      title: "Shopping Page",
      category: "Frontend",
      tools: "Reactjs",
      image: "./assets/images/shopping_page.webp",
      deploylink: "https://glowing-puppy-fb622f.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Zen-Day27-Shop-homepage-Task",
    },
    {
      title: "Product Preview Card",
      category: "Frontend",
      tools: "HTML,CSS",
      image: "./assets/images/product_preview_card.png",
      deploylink: "https://fem-productpreviewcard.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-Task-Product-Preview-Card",
    },
    {
      title: "NFT Preview Card",
      category: "Frontend",
      tools: "HTML,CSS",
      image: "./assets/images/nft_preview_card.jpg",
      deploylink: "https://fem-nftpreviewcard.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-NFT-Preview-Card",
    },
    {
      title: "Order Summary Card",
      category: "Frontend",
      tools: "HTML,CSS",
      image: "./assets/images/order_summary_card.webp",
      deploylink: "https://fem-ordersummarycard.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-Order-Summary-Component",
    },
    {
      title: "QR Code Component",
      category: "Frontend",
      tools: "HTML,CSS",
      image: "./assets/images/qr_code_component.jpg",
      deploylink: "https://fem-qrcodecomponent.netlify.app",
      githublink: "https://github.com/Ramkumar-J/FEM-Task-QRcode-Component",
    },
    {
      title: "Time Table",
      category: "Frontend",
      tools: "HTML,CSS",
      image: "./assets/images/time_table_project.jpg",
      deploylink: "https://html-timetable.netlify.app",
      githublink: "https://github.com/Ramkumar-J/Time-Table",
    },
    // {
    //   title: "Random Animal",
    //   category: "Frontend",
    //   tools: "HTML,CSS",
    //   image: "./assets/images/random_animal.jpg",
    //   deploylink: "https://stirring-cuchufli-5f6f39.netlify.app",
    //   githublink: "https://github.com/Ramkumar-J/Zen-Day25-API-Task1",
    // },  
  ];

  const [datafilter, setFilter] = useState(projectData);
  const filterProduct = (category) => {
    const updatedlist = projectData.filter((e) => {
      return e.category === category;
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
          {/* <button
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
          </button> */}
          <button
            className="category-btn"
            onClick={() => filterProduct("Frontend")}
          >
            Frontend
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
