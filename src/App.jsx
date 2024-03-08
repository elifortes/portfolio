import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';



const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <Projects />
    <About />
    <Contact />
    </>
  );
}

export default App;
