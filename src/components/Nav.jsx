import React from 'react';

const Nav = () => {
  return (
    <header className="bg-slate-900 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Michael Joseph V. Ibarra</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-white">About</a>
          </li>
          <li>
            <a href="#projects" className="text-white">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-white">Contact</a>
          </li>
          <li>
            <a href="#resume" className="text-white">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
