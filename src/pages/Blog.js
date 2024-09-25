import React from 'react'
import Footer from '../components/Footer'
import Mytopblog from '../components/Mytopblog'
import Mydownblog from '../components/Mydownblog'
import Abovefooter from '../components/Abovefooter'

function Blog() {
  return (
    <div className='blog-body'>
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
                <li className="nav-item present">
                    <a className="nav-link" href="/blog">Blog</a>
                </li>
                <li className="nav-item past">
                    <a className="nav-link" href="/development">Christian Wallpaper</a>
                </li>
                <li className="nav-item past">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item past">
                    <a className="nav-link" href="/contactform">Connect With Us</a>
                </li>
        
      </ul>
    </div>
  </div>
</nav>
    <div data-aos='zoom-out' data-aos-duration='2000' className="d-block text-center">
        <h5 className="text-black-50 my-4">OUR BLOGS</h5>
        <h1 className='mb-3'>Find all our Inspiring Blogs here</h1>
        <p>our blogs are written from our very research and by well known writers so that we can provide <br /> you the best blogs and articles for you to read them all along</p>
    </div>
   <div className="container">
    <div className="row justify-content-center">
    <Mytopblog  img="./img/road.png" title="8 Rules of Travelling In Sea That You Need To Know" content="Travelling in sea might have many advantages. Some of the advantages of transporting goods by sea include: you can ship large volume at costs" link="" />
    <Mytopblog img="./img/hands.png" title="How to build strong portfolio and get a Job in UI/UX" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from" link="" />
    <Mytopblog img="./img/sky.png" title="How to Be a Professional Footballer in 2024" content="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure proactive " link="" />
    </div>
   </div>
   <div className="container my-2">
    <div className=" container text-center d-flex mb-2 popular">
        <h2>Popular Posts</h2>
        <button className="view text-white">View all</button>
    </div>
    <div className="row justify-content-center">
        <Mydownblog img='./img/sky.png' title="Best Website to research for your next project" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from" link="" />
        <Mydownblog img='./img/lady.png' title="Best Website to research for your next project" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from" link="" />
        <Mydownblog img='./img/hope.png' title="Best Website to research for your next project" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs from" link="" />
        <Mydownblog img='./img/scripture.png' title="Who is the best singer on chart? Know him?" content="Chart by Billboard which ranks the all-time greatest artists based on their performance o the weekly Billboard Hot 100 and" link="" />
        <Mydownblog img='./img/light.png' title="How to start import export business from home?" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional"  link="" />
        <Mydownblog img='./img/tree.png' title="Make some drinks with milk and chocolates" content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional" link="" />
        
    </div>
   </div>
    <Abovefooter/>
    <Footer/>
    </div>
  )
}

export default Blog