import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Nav />
      <div id="about" className="bg-slate-800 p-8">
        <About />
      </div>
      <div id="projects" className="bg-slate-900 p-8">
        <Projects />
      </div>
      <div id="contact" className="bg-slate-800 p-8">
        <Contact />
      </div>
      <div id="resume" className="bg-slate-900 p-8">
        <Resume />
      </div>
    </>
  );
}

export default App;