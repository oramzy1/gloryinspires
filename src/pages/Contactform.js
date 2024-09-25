import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Maincontact from '../components/Maincontact'
import Mainform from '../components/Mainform'

function Contactform() {
    
  return (
    <div  className='the-body'>
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
                <li className="nav-item past">
                    <a className="nav-link" href="/development">Christian Wallpaper</a>
                </li>
                <li className="nav-item past">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item present">
                    <a className="nav-link" href="/contactform">Connect With Us</a>
                </li>
        
      </ul>
    </div>
  </div>
</nav>
        < Maincontact/>
        <Mainform/>
        <Footer/>
    </div>
  )
}

export default Contactform