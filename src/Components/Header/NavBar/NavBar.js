import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light ">
                <div className="container text-center">
  <Navbar.Brand href="#home"><img src="https://i.ibb.co/3hvKCjc/Group-86.png" style={{height: '11vh'}}  alt=""/></Navbar.Brand>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon my-toggler"></span>
 </button> 


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Nav.Link class="nav-link " href="#">Home <span class="sr-only">(current)</span></Nav.Link >
      </li>
      <li class="nav-item">
        <Nav.Link  class="nav-link " href="#">About</Nav.Link >
      </li>
      <li class="nav-item">
        <Nav.Link  class="nav-link " href="#">Services</Nav.Link >
      </li>
      <li class="nav-item">
        <Nav.Link  class="nav-link " href="#">Pricing</Nav.Link >
      </li>
      <li class="nav-item">
        <Nav.Link  class="nav-link " href="#">Contact</Nav.Link >
      </li>
     
    </ul>

  </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;