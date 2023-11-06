import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex items-center mb-4">
        <img
          src="/src/assets/BlueSuit.jpg"
          alt="Your Name"
          className="w-64 h-64 rounded-full mr-4"
        />
        <p>
          Young Filipino American looking to break away from the nursing stereotype
          and dive into the world of web development. My toolbelt consists of skills
          in HTML, CSS, Javascript, and anything in the MERN stack. I love taking ideas
          and bringing them to life through visually appealing web applications.
        </p>
      </div>
    </div>
  );
}

export default About;

