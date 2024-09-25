import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Maincontact() {
  AOS.init()
  return (
    <div>
        <div data-aos="zoom-out" data-aos-duration='2000' className="container-fluid main-contact">
        <div className="container">
          <div className="row  discover">
            <div className="col-12 in-touch">
            <h4 className="">Contact</h4>
            <h1 className="display-3 fw-bold">Get in touch<br/>With Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maincontact