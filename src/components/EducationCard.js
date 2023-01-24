import React from "react";

function EducationCard(props) {
  return (
    <section className="container" data-aos="fade-up-right">
      <div className="education-info border-start border-3 border-secondary p-3">
        <h3 className="course-title text-danger fw-bolder">
          {props.education.title}
        </h3>
        <h6 className="education-institute">{props.education.institute}</h6>
        <p className="course-duration mb-0">{props.education.duration}</p>
        <p className="course-mark mt-1">{props.education.marks}</p>
      </div>
    </section>
  );
}

export default EducationCard;
