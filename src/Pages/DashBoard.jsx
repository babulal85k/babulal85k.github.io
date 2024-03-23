import React from 'react';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { NavBar } from '../components/NavBar';
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Achievement from '../components/Achievement';
import GitStatus from '../components/GitStatus';

function DashBoard() {
  

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitStatus />
      <Achievement />
      <Contact />
      <Footer />
    </>
  )
}

export default DashBoard;