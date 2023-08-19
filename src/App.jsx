import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import NavbarMain from './components/Navbar';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <NavbarMain />
      <Header />
      <Features />
      <Testimonials />
      <Footer />
     

    </>
  )
}

export default App