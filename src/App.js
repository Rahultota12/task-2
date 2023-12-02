import React from 'react';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
function App() {
   
  return (
    <>
    <BrowserRouter>  
      
        <Header/>
      <Home/>
      </BrowserRouter>

    </>
  );
}

export default App;
