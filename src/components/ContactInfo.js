import React from 'react'

function ContactInfo(props) {
  return (
            <>
                <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 social-info-container'>
            <i class="bi bi-telephone-fill social-icon"></i>
            <p className='social-name'>Contact Number</p>
            <p className='social-text'>+91 7708548246</p>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 social-info-container'>
         <i class="bi bi-envelope-fill social-icon"></i>
         <p className='social-name'>E-mail address</p>
         <p className='social-text'>ramviru9@gmail.com</p>
    </div>
     <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 social-info-container'>
        <i class="bi bi-linkedin social-icon"></i>
        <p className='social-name'>Linkedin profile</p>
         <p className='social-text'>https://www.linkedin.com/in/ramkumar-j-803baa201/</p>
    </div>
    </>
  )
}

export default ContactInfo