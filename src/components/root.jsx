import React from 'react';
import NavbarComponent from './NavbarComponent';
import Intro from './Introduction';
import About from './About';
import ProfileLinks from './ProfileLinks';
import Projects from './Projects';
import Footer from './Footer';

function LandingPage() {
  return (
    <div>
      <NavbarComponent/>
      <Intro/>
      <About/>
      <ProfileLinks/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
