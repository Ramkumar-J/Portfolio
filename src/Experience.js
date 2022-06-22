import React from "react";

function Experience() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-12">
          <h1 className="text-dark text-center text-uppercase">Experience</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <h3 className="text-dark">Fullstack developer</h3>
          <h5 className="text-dark">
            Guvi Geek Technologies Pvt.Ltd, Chennai, Tamilnadu, India{" "}
            <span className="fs-6">2022-Present</span>
          </h5>
          <ul>
            <li>I learned about how to create a web page layouts and how to styling</li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <h3 className="text-dark">FAE and Automation Engineer</h3>
          <h5 className="text-dark">
            Bharat FIH Pvt.Ltd (Foxconn), Chennai, Tamilnadu,India{" "}
            <span className="fs-6">10/2018 – 11/2021</span>
          </h5>
          <ul className="mt-2">
            <li className="mt-2">
              Responsible for design and Making Li-ion Battery packs based on
              the customer requirement.
            </li>
            <li className="mt-2">
              Responsible for monitoring the performance of Automated Guided
              Vehicle (AGV), lithium ion battery testing and designing test
              cases for Li-ion battery packs to estimate of its SOC, SOH
              capacity and end of life
            </li>
            <li className="mt-2">
              Responsible for maintaining the database of each Battery packs for
              Automated Guided Vehicle, Problem Finding, improvements and
              solutions in Automation Team.
            </li>
            <li className="mt-2">
              Responsible for failure diagnosing and solving the failure mobile
              from FATP.
            </li>
            <li className="mt-2">
              Responsible for continual improvement activities to enhance the
              quality system, such as 5S, Kaizen and ESD
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
