import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Mytopblog({img, title, content, link}) {
    AOS.init()
  return (
    <div data-aos="flip-down" data-aos-duration='1000' className="col-12 col-md-3 bg-white p-1 mb-5 mx-3 mytopblog">
    <img src={img} alt="" height={250}  />
    <div className="d-flex mt-3 insidedown">
        <h6 className='me-4'>Blog</h6>
        <small typeof='date' className='text-black-50'>13 March 2024</small>
    </div>
    <h4 className=' pt-2'>{title}</h4>
    <p className='pt-2 '>{content}</p>
    <a className='pt-3 text-decoration-none fw-medium' href={link}>Read More...</a>
    </div>
  )
}

export default Mytopblog