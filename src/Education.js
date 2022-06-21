import React from "react";
import EducationCard from "./EducationCard";
function Education(){
  let educationData=[
    {
      title:"Fullstack development",
      institute:"Guvi Geek Technologies Pvt Ltd",
      duration:"Jan 2022-June 2022",
      marks:"",
    },
    {
      title:"B.E-Electrical and Electronics Engineering",
      institute:"Anna university - Tuticorin campus, Tamilnadu",
      duration:"2014-2018",
      marks:"CGPA - 6.33",
    },
    {
      title:"Higher Secondary Education",
      institute:"Sakthi Matric.Hr.Sec.School,Kallakurichi(Dt), Tamilnadu",
      duration:"2012-2014",
      marks:"Pass - 87.25%",
    },
    {
      title:"Secondary Education",
      institute:"Government Boys.Hr.Sec.School,Kallakurichi(Dt), Tamilnadu",
      duration:"2010-2012",
      marks:"Pass - 89.25%",
    },
  ]
    return(
        <div className='container'>
          <div className='row mt-3'>
        <div className="col-lg-12">
          <h1 className='text-center text-primary fw-bolder'>Education</h1>
          </div>
          </div>
      {/* <div className='row mt-5 d-flex justify-content-center align-items-center'> */}
      <div className='row mt-5 mb-5'>
        {
          educationData.map(eData => {
            return(
              // <div className="col-lg-6">
              // <div className='row mt-5'>
              // <>
                <div className="col-lg-6 mb-5">
              <EducationCard education={eData}></EducationCard>
              </div>
             // <hr></hr>
              // </>
              //  </div>
            // </div>
            )
          })
        }
        </div>
      {/* </div> */}
      {/* <div className='row mt-3 d-flex justify-content-center align-items-center'>
        <div className="col-lg-12">
          <EducationCard></EducationCard>
        </div>
      </div> */}
    </div>
    )
}

export default Education;