import React from 'react'
import {Nav, Navbar ,Form , Button } from 'react-bootstrap'
import './Header.css'
function Header() {
  return (
    <>
      <Navbar className='Header  ' expand="lg" >
  <Navbar.Brand href="#home">Milton</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Features</Nav.Link>
      <Nav.Link href="#link">Testimonial</Nav.Link>
      <Nav.Link href="#home">Pricing</Nav.Link>
      <Nav.Link href="#link">FAQs</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      
    </Nav>
    

     <div  className='mr-5 login' >Log in</div>
      <div   className='get'>Get started</div>
    
    
  </Navbar.Collapse>
  
</Navbar>
    </>
  )
}

export default Header;
