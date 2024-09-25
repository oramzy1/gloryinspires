import React from 'react'
import Abovefooter from '../components/Abovefooter'
import Footer from '../components/Footer'
import Mydownblog from '../components/Mydownblog'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Development() {
    AOS.init();

  return (
    <div data-aos="zoom-out" data-aos-duration='1500' className='develop-body'>
         <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container">
            <a className="navbar-brand" href="/home"><img src="./img/Component 1.png" alt="" /></a>
            <button className="navbar-toggler d-lg-none border-0 fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
             </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 ms-auto gap-3">
                <li className="nav-item past">
                    <a className="nav-link" href="/home">Podcasts</a>
                </li>
                <li className="nav-item past">
                    <a className="nav-link" href="/blog">Blog</a>
                </li>
                <li className="nav-item present">
                    <a className="nav-link" href="/development">Christian Wallpaper</a>
                </li>
                <li className="nav-item past">
                    <a className="nav-link" href="/home">About</a>
                </li>
                <li className="nav-item past">
                    <a className="nav-link" href="/contactform">Connect With Us</a>
                </li>
        
      </ul>
    </div>
  </div>
        </nav>
    <div className="container">
        <div className="d-flex ms-3 mt-2">
        <h6 className='me-4'>Development</h6>
        <small typeof='date' className='text-black-50'>16 March 2024</small>
    </div>
    <h1 className='my-2'>Finding Strength in Faith: <br />Overcoming Life's Challenges</h1>
    <img src="./img/horizon.png" alt="" className='mt-4 horizon'/>
    <div class="card mt-3 border-0">
        <div className="w-75 m-auto">
            <p  className='mb-4' >
            <small>Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.</small>
            </p>
            <p  className='mb-4' >
            <small>Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.</small>
            </p>
            <div className='w-75 m-auto'>
            <p className="lead explore text-black ps-2">Explore stories of individuals who have found strength and resilience through their faith during difficult times. Explore</p>
            <small className=' text-black-50 ps-3 fs-6'>-Pedro Domingos</small>
            </div>
            <p  className='mb-3' >
            <small>Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of ndividuals who have found strength and resilience through their faith during difficult times.Explore stories of ndividuals who have found strength and resilience through their faith during difficult times.Explore stories of ndividuals who have found strength and resilience through their faith during difficult times.</small>
            </p>

            
        </div>
        <img class="w-50 m-auto mb-3" src="./img/doorway.png" alt="Title" />
        <div class="card-body w-75 m-auto">
            <p  className='mb-4' >
            <small>Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of individuals who have found strength and resilience through their faith during difficult times.Explore stories of ndividuals who have found strength and resilience through their faith during difficult times.</small>
            </p>
        </div>
    </div>
    
    
    </div>
    <div className="container my-2">
    <div className=" container text-center d-flex mb-2 popular">
        <h2>Popular Posts</h2>
        <button className="view text-white">View all</button>
    </div>
    <div className="row justify-content-center">
        <Mydownblog img='./img/sky.png' title="Best Website to research for your next project" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from" link="/home" />
        <Mydownblog img='./img/lady.png' title="Best Website to research for your next project" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from" link="/home" />
        <Mydownblog img='./img/hope.png' title="Best Website to research for your next project" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from" link="/home" />
    </div>
    </div>
    <Abovefooter/>
    <Footer/>
    </div>
  )
}

export default Development