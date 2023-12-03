import React from 'react'
import './second.css'

import Card from 'react-bootstrap/Card';

function Second() {
  return (
    <>
    <div className="all container-fluid">

     <div className="second">
      <h6>Our main features 🦸🏼</h6>
      <h1>Discover your new superpowers</h1>
     </div>
     <div className="row ">
      <div className="col-lg-6">
      <Card  className='one-card'>
      <h6>Seamless Scheduling</h6>
      <Card.Body>
        <Card.Title className='tittle'>Focus on what matters most for you</Card.Title>
        <Card.Text className='p'>
        Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
        </Card.Text>
   <div className='card-buttom'>

          <h5>I tested many calendar apps. This app is the best of all! It saves me hours of time.</h5>
         <h3 className='tex'>Carla, Head of Finance </h3>
   </div>
   <img src="https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png" className='img-fluid img' alt="" />
       
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-6">
        <img src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png" alt="" className='img-fluid' />
      </div>
     </div>
     <div className="row ">
     <div className="col-lg-6">
        <img src="https://framerusercontent.com/images/EgCwW6bpD4t2JQoyjgySRkUXc.png" alt="" className='img-fluid' />
      </div>
      <div className="col-lg-6">
      <Card  className='one-car'>
      <h6 className='teee'>Smart Reminders & Task</h6>
      <Card.Body>
        <Card.Title className='tittl'>Never miss an important deadline or event again

</Card.Title>
        <Card.Text className='pp'>
        Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.
        </Card.Text>
   <div className='card-butto'>

          <h5>I love how user-friendly this app is! It's so easy to add events and set reminders!</h5>
         <h3 className='tex'>Adam, entrepreneur</h3>
   </div>
   <img src="https://framerusercontent.com/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png" className='img-fluid imgg' alt="" />
       
      </Card.Body>
    </Card>
      </div>
      
     </div>
     <div className="row ">
      <div className="col-lg-6">
      <Card  className='one-card'>
      <h6 className='tee'>Seamless Scheduling</h6>
      <Card.Body>
        <Card.Title className='tittle'>Focus on what matters most for you</Card.Title>
        <Card.Text className='p'>
        Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.
        </Card.Text>
   <div className='card-buttom'>

          <h5>I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.</h5>
         <h3 className='tex'>Annie, Designer</h3>
   </div>
   <img src="https://framerusercontent.com/images/1OwzdZHx9ElDw1ZAavs6WGWBSw.png" className='img-fluid img' alt="" />
       
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-6">
        <img src="https://framerusercontent.com/images/xjG69OjCFt0Z3YQvNa3HNBBP5G0.png" alt="" className='img-fluid' />
      </div>
     </div>
     <div className="row ">
     <div className="col-lg-6">
        <img src="https://framerusercontent.com/images/ow5cq9Ercs5KlWFqhMUsdUkCl8.png" alt="" className='img-fluid' />
      </div>
      <div className="col-lg-6">
      <Card  className='one-car'>
      <h6 className='te'>Smart Reminders & Task</h6>
      <Card.Body>
        <Card.Title className='tittl'>Never miss an important deadline or event again</Card.Title>
        <Card.Text className='pp'>
        Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.


        </Card.Text>
   <div className='card-butto'>

          <h5>I've recommended this app to all my friends and colleagues! </h5>
         <h3 className='tex'>Karl, CTO of a cool startup</h3>
   </div>
   <img src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png" className='img-fluid imgg' alt="" />
       
      </Card.Body>
    </Card>
      </div>
    
     </div>
    </div>
    </>
  )
}

export default Second;
