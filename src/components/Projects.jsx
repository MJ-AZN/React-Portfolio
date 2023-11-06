import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Empty Your Fridge',
      image: '/src/assets/EmptyYourFridge.png',
      link: 'https://mj-azn.github.io/Empty-Your-Fridge/'
    },
    {
      name: 'Forecast Genius',
      image: '/src/assets/ForecastGenius.png',
      link: 'https://mj-azn.github.io/Forecast-Genius-Weather-App/'
    },
    {
      name: 'Work Day Scheduler',
      image: '/src/assets/WorkDayScheduler.png',
      link: 'https://mj-azn.github.io/Nichijou-daily-schedule/'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
      <div className="flex space-x-4">
        {projects.map((project, index) => (
          <div key={index} className="flex-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
                  {project.name}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

