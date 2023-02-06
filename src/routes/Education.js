import React from "react";
import EducationCard from "../components/EducationCard";
function Education() {
  let educationData = [
    {
      title: "Fullstack development",
      institute: "Guvi Geek Network Pvt Ltd - IITM Research park, Chennai",
      duration: "Jan 2022 - Feb 2023",
      marks: "",
    },
    {
      title: "B.E-Electrical and Electronics Engineering",
      institute: "Anna university - Tuticorin campus, Tamilnadu",
      duration: "2014 - 2018",
      // marks: "",
      marks:"CGPA - 6.33",
    },
    {
      title: "Higher Secondary Education",
      institute: "Sakthi Matric.Hr.Sec.School,Kallakurichi(Dt), Tamilnadu",
      duration: "2012 - 2014",
      marks: "Pass - 87.25%",
    },
    {
      title: "Secondary Education",
      institute: "Government Boys.Hr.Sec.School,Kallakurichi(Dt), Tamilnadu",
      duration: "2010 - 2012",
      marks: "Pass - 89.25%",
    },
  ];
  return (
    <section className="container">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center fw-bolder" data-aos="fade-up">
            Education
          </h1>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        {educationData.map((eData) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-5">
              <EducationCard education={eData}></EducationCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
