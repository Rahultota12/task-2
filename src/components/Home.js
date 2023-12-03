import React from 'react'
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ima from './Ima';
import Secon from './Second';
import PrincingOne from './PricingOne';
import Collabas from './Collabas';
import Card6 from './Card6';
import Footer from './Footer';
function Home() {
  return (
    <>
    <div className="Home">
        <h6>An other way to manage time️</h6>
        <Card className='home-card'>
      
      <Card.Body>
        <Card.Title className='card-tittle'>Your new favorite calendar 🗓️ app </Card.Title>
        <Card.Text className='card-dis'>
        Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. 
        </Card.Text>
        <Button variant="dark" className='button'>Get started, it's free</Button>
        <p>Free 14 days trials,no credit card needed</p>
      </Card.Body>
    </Card>
    </div>
      <Ima/>
      <Secon/>
      <Card6/>
      <PrincingOne/>
      {/* <Collabas/> */}
      {/* <Footer/> */}
    </>
  )
}

export default Home
