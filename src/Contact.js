import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactInfo from './ContactInfo';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure();
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7bif0m9', 'template_o3p3cpd', form.current, 'LMaRIzuqPe-qJCmp9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  // const toastMessage = () => toast.success("Your Mail Sended Successfully",{
  //   position:toast.POSITION.TOP_CENTER,
  //   autoclose:3000
  // });

  // const socialInfo=[
  //   {
  //     "socialicon":"bi bi-telephone-fill",
  //     "socialname":"Contact number",
  //     "socialtext":"+91 7708548246",
  //   },
  //   {
  //     "socialicon":"bi bi-telephone-fill",
  //     "socialname":"E-mail address",
  //     "socialtext":"ramviru9@gmail.com",
  //   },
  //   {
  //     "socialicon":"bi bi-telephone-fill",
  //     "socialname":"Linkedin profile",
  //     "socialtext":"https://www.linkedin.com/in/ramkumar-j-803baa201/",
  //   },
  // ]

  return (
    <div className='container text-white'>
      <h1 className='text-center text-primary mb-3'>Get In Touch</h1>
      <div className='row mt-5' data-aos="fade-left">
      <ContactInfo></ContactInfo>
        {/* <ContactInfo socialInfo={socialInfo}></ContactInfo> */}
        {/* <ContactInfo></ContactInfo>
        <ContactInfo></ContactInfo> */}
      </div>
      <div className='row'>
      <div className='col-lg-6 order-md-2 order-lg-2 order-xl-2 order-xxl-2' data-aos="fade-left">
            <img className='img-fluid' src="https://kamalesh-portfolio-k13h11.netlify.app/assets//20220330_130548.png"></img>
        </div>
        <div className='col-lg-6 order-md-1 order-lg-1 order-xl-1 order-xxl-1' data-aos="fade-right">
        <form ref={form} onSubmit={sendEmail}>
      <div className='input-container'>
      <label className='input-field-name' for="yourname">Your Name</label><sup className='text-danger'>*</sup><br></br>
      <input className='input-field' id="yourname" type="text" name="user_name" required/>
      </div>
      <div className='input-container'>
      <label className='input-field-name' for="youremail">Your Email</label><sup className='text-danger'>*</sup><br></br>
      <input className='input-field' id="youremail" type="email" name="user_email" required/>
      </div>
      <div className='input-container'>
      <label className='input-field-name' for="subject">Subject</label><sup className='text-danger'>*</sup><br></br>
      <input className='input-field' id="subject" type="text" name="subject" required/>
      </div>
      <div className='input-container'>
      <label className='input-field-name' for="message">Message</label><sup className='text-danger'>*</sup><br></br>
      <textarea className='input-field' id="message" name="message" required/>
      </div>
      <div className='input-container'>
      <input className='submit-btn' type="submit" value="Send"/>
      {/* <input className='submit-btn' type="submit" value="Send" onClick={toastMessage}/> */}
      {/* <ToastContainer /> */}
      </div>
    </form>
            {/* <div className='row mt-5'>
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
            </div> */}
        </div>
        {/* <div className='col-lg-6 order-sm-1'>
            <img className='img-fluid' src="https://kamalesh-portfolio-k13h11.netlify.app/assets//20220330_130548.png"></img>
        </div> */}
      </div>
    </div>
  )
}

export default Contact;