import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  let projectData = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/1789/7273/files/Pinterest_Guide.png?format=jpg&quality=90&v=1578568021",
      deploylink:"https://leafy-sunflower-5bad48.netlify.app",
      title: "Chrome New Tab",
      list1: "It has collection of Images and Gif.",
      list2: "You can create your own pin and uploaded it",
      tools: "HTML,CSS",
    },
    {
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple127/v4/e4/99/61/e49961f0-fdbd-5e69-9183-a2159415730b/source/256x256bb.jpg",
      deploylink:"https://prismatic-beignet-75437a.netlify.app",
      title: "Google Calender",
      list1: "IE tracker is used to Track your Incomes and Expenses",
      list2:
        "You can easily get your income,expense and Balance data in home page",
      tools: "JavaScript",
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
      deploylink:"https://nimble-scone-6fb9aa.netlify.app",
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

  const [datafilter, setFilter] = useState(projectData);
  const filterProduct = (tool) => {
    const updatedlist = projectData.filter((e) => {
      return e.tools === tool;
    });
    setFilter(updatedlist);
  };

  const [load,setLoad]=useState(3);
  const loadData=datafilter.slice(0,load)
  const showMore=() => {
    setLoad(load + load);
  }
  
  return (
    <section className="container">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center fw-bolder" data-aos="fade-up">Projects</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="600">
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
              <ProjectCard project={pData}></ProjectCard>
             </div>
          );
        })}
        <button className="showmore-btn" data-aos="fade-right" onClick={() => showMore()}>Show More</button>
       </div>
    </section>
  );
}

export default Projects;
