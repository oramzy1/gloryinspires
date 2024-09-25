import React from 'react'
import facebookImage from './facebook.png';
import twitterImage from './twitter.png';
import linkedinImage from './linkedin.png';
import AOS from 'aos';
import 'aos/dist/aos.css'


function Mainform() {
    AOS.init();
  return (
   <div data-aos="fade-up" data-aos-duration='2000'>
    <h2 className="text-center my-4">
        Contact Form:
    </h2>
     <form className='main-form text-center '>
        <div className='inside-form text-start align-items-center '><input className='my-3 ps-4' type="text" placeholder='Your Full Name'/></div>
        <div className='inside-form text-start align-items-center '><input className='my-3 ps-4' type="text" placeholder='Your Email'/></div>
        <div className='inside-form text-start align-items-center '><input className='my-3 ps-4' type="text" placeholder='Query Related'/></div>
        <div className='inside-form text-start align-items-center the-message'><input className='my-3 ps-4' type="text" placeholder='Message'/></div>
        
        <button className='text-white p-4'>Send Message</button>
    </form>
    <div className="text-center d-block my-3">
        <p className='lead'>Contact Details</p>
        <h2><a className='text-dark text-decoration-none' href="tel:+234 907 089 4569">+234 907 089 4569</a></h2>
        <h4><a className='text-dark text-decoration-none'href='mailto:info@gloryinspires.com' >Info@gloryinspires.com</a></h4>
        <p className="my-3">Find Us Here</p>
        <div className="">
        <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" ><img src={facebookImage} height={30} alt="" /></a>
        <a href="https://twitter.com/?lang=en" className='mx-4' target="_blank" rel="noopener noreferrer" ><img src={twitterImage} height={30} alt="" /></a>
        <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" ><img src={linkedinImage} height={30} alt="" /></a>
        </div>
    </div>
   </div>
  )
}

export default Mainform
 