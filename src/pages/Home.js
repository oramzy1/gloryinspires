import '../components/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
  
function Home() {

        AOS.init()
  return (
    <div className="App">
       <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <div className="container">
    <a className="navbar-brand" href="/home"><img src="./img/Component 1.png" alt="" /></a>
    <button className="navbar-toggler d-lg-none border-0 fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0 ms-auto gap-3">
        <li className="nav-item present">
          <a className="nav-link" href="/home">Podcasts</a>
        </li>
        <li className="nav-item past">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item past">
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
      <div data-aos="zoom-out" data-aos-duration='2000' className="container-fluid main-body">
        <div className="container">
          <div className="row  discover">
            <div className="col-12">
            <h1 className="display-3 fw-bold">Discover Inspiration,<br/>Faith and Community</h1>
            <p className="lead">Tune in to uplifting podcasts, delve into insightful blogs, and join a <br />community rooted in faith and positivity. Let us inspire and empower you <br />on your spiritual journey. Welcome to Glory Inspires.</p>
             <button className="signup me-3 py-1">Sign Up</button>
             <button className="signin py-1">Sign In</button>
            </div>
          </div>
        </div>
      </div>
     <div className="container-fluid feature-blog">
      <div className="row justify-content-center">
        <h2 className="text-center text-white fw-medium my-4">Featured Blog</h2>
        <Feature title="Feature 1" description="This is the first feature." />
        <Feature title="Feature 2" description="This is the second feature." />
        <Feature title="Feature 3" description="This is the third feature." />
      </div>
     </div>
     <Footer/>
    </div>
  );
}

export default Home;
