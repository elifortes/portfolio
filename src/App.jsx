import React, { useState } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';


const ThemeContext = createContext(null);


const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const themeMessage = theme === 'light' ? 'Light Mode' : 'Dark Mode'

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <div className='swith'>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
         <span className='message'> { themeMessage } </span>
        </div>
        <Header />
        <Nav />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
