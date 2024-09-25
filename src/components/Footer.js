import React from 'react'
import facebookImage from './facebook.png';
import newtwitterImage from './newtwitter.png';
import newlinkedinImage from './newlinkedin.png';


function Footer() {
  return (
   <footer>
     <div className='container'>
        <div className="row gap-5">
            <div className="col-12 col-md-2">
                <img src="./img/White Logo.png" alt="" />
                <ul className="list-unstyled">
                  <li className='pb-2'>&copy; Copyright Finsweet 2022</li>
                  <li className='pb-2'>(480) 555-0103</li>
                  <li className='pb-2'>4517 Washington Ave.</li>
                  <li className='pb-2'>finsweet@example.com</li>
                </ul>
            </div>
            <div className="col-12 col-md-2">
                <p className="lead fs-4 fw-medium">Quicklinks</p>
                <ul className="list-unstyled quicklinks">
                <a href="/home"><li className='pb-2 pt-1'>About Us</li></a>
                <a href="/home"><li className='pb-2'>Podcast</li></a>
                <a href="/contactform"><li className='pb-2'>Contact Us</li></a>
                <a href="/blog"><li className='pb-2'>Blog</li></a>
                </ul>
            </div>
            <div className="col-12 col-md-2 ">
            <p className="lead fs-4 fw-medium">Connect</p>
            <div>
                <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebookImage} height={30} alt="" /></a>
                <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer" className='mx-2'><img src={newtwitterImage} height={30} alt="" /></a>
                <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer"><img src={newlinkedinImage} height={28} alt="" /></a>
            </div>
            </div>
            <div className="col-12 col-md-4">
                <h2 className="news">
                    Subscribe to get Latest <br /> Updates and span <div className="spinner-grow"></div>
                </h2>
                <form className='subscribe' action="">
                    <input className='py-2' type="text" placeholder='Yourmail@gmail.com' />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer