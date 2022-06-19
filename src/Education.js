import React from "react";
import EducationCard from "./EducationCard";
function Education(){
    return(
        <div className='container'>
          <div className='row mt-3'>
        <div className="col-lg-12">
          <h1 className='text-center text-primary fw-bolder'>Education</h1>
          </div>
          </div>
      <div className='row'>
        <div className="col-lg-5 v1">
          <EducationCard></EducationCard>
        </div>
        <div className="col-lg-2 v1"></div>
        <div className="col-lg-5">
        <EducationCard></EducationCard>
        </div>
      </div>
    </div>
    )
}

export default Education;