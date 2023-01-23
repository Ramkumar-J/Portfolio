import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  let projectData = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Fullstack",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "HTML,CSS",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/yummy-grilled-chicken-burger-double-cutlet-fries-cola-wooden-table-side-view-hamburger-french-fast-food-concept-208658076.jpg",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "SandBurg",
      list1: "It is the house Sandwich and Burgers",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Reactjs",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "Fullstack",
    },
    {
      image:
        "https://www.indiaspend.com/h-upload/2021/03/17/1500x900_440951-illegal-pets-import-india.jpg",
      deploylink:"https://stirring-cuchufli-5f6f39.netlify.app/",
      title: "Random Animal",
      list1: "Random Animal public API used for ",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Fullstack",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "HTML,CSS",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/yummy-grilled-chicken-burger-double-cutlet-fries-cola-wooden-table-side-view-hamburger-french-fast-food-concept-208658076.jpg",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "SandBurg",
      list1: "It is the house Sandwich and Burgers",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Reactjs",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "Fullstack",
    },
    {
      image:
        "https://www.indiaspend.com/h-upload/2021/03/17/1500x900_440951-illegal-pets-import-india.jpg",
      deploylink:"https://stirring-cuchufli-5f6f39.netlify.app/",
      title: "Random Animal",
      list1: "Random Animal public API used for ",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Fullstack",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "HTML,CSS",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/yummy-grilled-chicken-burger-double-cutlet-fries-cola-wooden-table-side-view-hamburger-french-fast-food-concept-208658076.jpg",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "SandBurg",
      list1: "It is the house Sandwich and Burgers",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Reactjs",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "Fullstack",
    },
    {
      image:
        "https://www.indiaspend.com/h-upload/2021/03/17/1500x900_440951-illegal-pets-import-india.jpg",
      deploylink:"https://stirring-cuchufli-5f6f39.netlify.app/",
      title: "Random Animal",
      list1: "Random Animal public API used for ",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Fullstack",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "HTML,CSS",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/yummy-grilled-chicken-burger-double-cutlet-fries-cola-wooden-table-side-view-hamburger-french-fast-food-concept-208658076.jpg",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "SandBurg",
      list1: "It is the house Sandwich and Burgers",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-tiramisu-d395e5.netlify.app/",
      title: "Pinterest clone",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "Reactjs",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://voluble-torrone-9375e0.netlify.app",
      title: "IE Tracker",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "Fullstack",
    },
    {
      image:
        "https://www.indiaspend.com/h-upload/2021/03/17/1500x900_440951-illegal-pets-import-india.jpg",
      deploylink:"https://stirring-cuchufli-5f6f39.netlify.app/",
      title: "Random Animal",
      list1: "Random Animal public API used for ",
      list2: "You can choose your favorite one order it we delivered faster",
      tools: "JavaScript",
    },
  ];

  let [datafilter, setFilter] = useState(projectData);
  let filterProduct = (tool) => {
    const updatedlist = projectData.filter((e) => {
      return e.tools === tool;
    });
    setFilter(updatedlist);
  };

  const [load,setLoad]=useState(3);
  const loadData=datafilter.slice(0,load)
  let showMore=() => {
    setLoad(load + load);
  }
  // let showLess=() => {
  //   setLoad(loadData - load);
  // }
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center text-primary fw-bolder">Projects</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="600">
          <button className="category-btn" onClick={() => setFilter(projectData)}>All</button>
        <button className="category-btn" onClick={() => filterProduct("HTML,CSS")}>HTML&CSS</button>
          <button className="category-btn" onClick={() => filterProduct("JavaScript")}>JavaScript</button>
          <button className="category-btn" onClick={() => filterProduct("Reactjs")}>Reactjs</button>
          <button className="category-btn" onClick={() => filterProduct("Fullstack")}>Fullstack</button>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        {loadData.map((pData) => {
          return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-5">
              {/* <ProjectCard project={pData}></ProjectCard> */}
              <div className="card card-bg" data-aos="fade-right">
      <div className="one">
      {/* <a href={props.project.deploylink}> */}
      <img
        className="card-img-top project-image"
        src={pData.image}
        // onMouseEnter={() => setProjectinfo(true)}
        // onMouseLeave={() => setProjectinfo(false)}
      ></img>
      {/* </a> */}
      {/* <div className={`two ${projectinfo ? "" : "visually-hidden"}`}>
      <h4>Frontend</h4>
      <i class="bi bi-github"></i>
        <h4>Backend</h4>
        <i class="bi bi-github"></i>
        <h4>Livedemo</h4>
        <img className='img-fluid' src="https://img.icons8.com/glyph-neue/20/github.png"></img>
      </div> */}
      {/* <ul className={`two ${projectinfo ? "" : "visually-hidden"}`}>
      Frontend
      <li className="three"> 
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
</a> 
</li>
Backend
      <li className="three"> 
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
</a> 
</li>
Livedemo
      <li> 
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-camera-reels" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
</a> 
</li> */}
    
     
        {/* <h4>Backend</h4>
        <i class="bi bi-github"></i>
        <h4>Livedemo</h4>
        <img className='img-fluid' src="https://img.icons8.com/glyph-neue/20/github.png"></img> */}
      {/* </ul> */}
      </div>
      <div className="card-body mt-2">
        <h2 className="card-title fw-bolder">
          {pData.title}
        </h2>
        <p>{pData.tools}</p>
        <div className="project-btn-area">
          <button className="btn btn-warning project-btn"><a href='#'><img className="img-fluid" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png"></img> Live Demo</a></button>
          <button className="btn btn-warning project-btn"><a href='#'><img className="img-fluid" src="https://img.icons8.com/3d-fluency/25/github.png"></img> Live Code</a></button>
        </div>
        {/* <ul className="card-list">
          <li>{props.project.list1}</li>
          <li>{props.project.list2}</li>
        </ul>
        <p className="card-text">
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2 mb-2">
            {props.project.tool1}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool2}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool3}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool4}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool5}
          </span>
          <span className="badge bg-danger rounded-pill text-dark fs-6 ms-2">
            {props.project.tool6}
          </span>
        </p> */}
      </div>
    </div>
            </div>
          );
        })}
        <button className="showmore-btn" onClick={() => showMore()}>Show More</button>
        {/* <button className="btn btn-transparent border-dark rounded-pill p-3 fw-bolder project-btn" onClick={() => showLess()}>Show Less</button> */}
      </div>
    </div>
  );
}

export default Projects;
