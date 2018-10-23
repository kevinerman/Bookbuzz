import React from "react";
import { Link} from "react-router-dom";


const Nav = () => (
  <div>
    
    
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <div className="container">
        {/* <a className="" href="#page-top">BookBuzz..</a> */}
        <Link to="/" className="navbar-brand js-scroll-trigger">Logout</Link>{" "}
        
        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              {/* <a  href="#portfolio">Portfolio</a> */}
              <Link to="/home" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Home</Link>{" "}
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              {/* <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a> */}
              <Link to="/about" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">About</Link>{" "}
            </li>
            <li className="nav-item mx-0 mx-lg-1">
            <Link to="/about" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Contact</Link>{" "}
              {/* <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>




  </div>
);

export default Nav;
