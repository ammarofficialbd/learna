import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from './Home'
import Footer from './../Components/Footer/Footer';

function HomePage() {
  return (
    <div>
        <Navbar >  
            <Home />
        </Navbar>
        <Footer />
    </div>
  )
}

export default HomePage