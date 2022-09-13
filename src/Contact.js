import React from 'react';

function Contact() {
  return (
    <div className='container text-white'>
      <h1 className='text-center text-primary'>Contact info</h1>
      <div className='row'>
        <div className='col-lg-6'>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <div className='bg-success w-75 p-3'>
                    <h2>Gmail</h2>
                    <img src="https://img.icons8.com/color-glass/25/gmail.png"></img><span> ramviru9@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                <div className='bg-info w-75 p-3'>
                    <h2>Linkedin</h2>
                    <img src="https://img.icons8.com/fluency/35/linkedin-circled.png"></img><a className='text-white' href="https://www.linkedin.com/in/ramkumar-j-803baa201/">Linkedin Profile</a>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                <div className='bg-success w-75 p-3'>
                    <h2>Phone</h2>
                    <img src="https://img.icons8.com/ios-glyphs/30/add-phone.png"></img><span> +91 7708548246</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-6'>
            <img className='img-fluid' src="https://kamalesh-portfolio-k13h11.netlify.app/assets//20220330_130548.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Contact;