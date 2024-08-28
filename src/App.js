import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Hero from './Components/Hero/Hero.js';
import Title from './Components/Title/Title.js';
import Services from './Components/Services/Services.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js'
import Testimonial  from './Components/Testimonial/Testimonial.js';
 


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='OUR SERVICES' title='What We Offer' />
          <Services />  
          <About />
          <Title subTitle='TESTIMONIAL' title='What Clients Say' />
          <Testimonial/>
          <Title subTitle='CONTACT US' title='Get In Touch'/>
          <Contact />
          <Footer />
      </div>
      
      
    </div>
  )
}
export default App;
