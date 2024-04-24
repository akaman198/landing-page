import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Rockets from './Rockets.jsx'
import Testimonials from './Testimonials.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Rockets />
    <Testimonials />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
