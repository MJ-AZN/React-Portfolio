import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">WORK EXPERIENCE</h3>
        <div className="mb-4">
          <p className="font-bold">Gyu-Kaku Rancho Cucamonga: Kitchen Crew</p>
          <p>June 2022 - July 2023</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Gyu-Kaku Rancho Cucamonga: Host Stand</p>
          <p>February 2023 - July 2023</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Jollibee Rancho Cucamonga: Kitchen Crew</p>
          <p>January 2021 - May 2022</p>
          <p>Pantry and grill assembly station, kitchen runner and stocks.</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Jollibee Rancho Cucamonga: Counter Crew</p>
          <p>September 2021 - May 2022</p>
          <p>Register and order assembly station</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Jollibee Rancho Cucamonga: Crew Trainer</p>
          <p>October 2021 - December 2021</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">EDUCATION</h3>
        <div className="mb-4">
          <p className="font-bold">University of California: Irvine, Irvine — Web Development Bootcamp</p>
          <p>August 2023 - November 2023</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Chaffey College, Rancho Cucamonga — General Ed</p>
          <p>June 2020 - May 2023</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Etiwanda High School, Rancho Cucamonga</p>
          <p>August 2016 - May 2020</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">SKILLS</h3>
        <ul className="list-disc list-inside">
          <li>Confident Speaker</li>
          <li>Understand and speak Tagalog</li>
          <li>Memorize recipes easily</li>
          <li>Crew Training Experience</li>
          <li>Host Stand Experience</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">LANGUAGES</h3>
        <p>English, Tagalog</p>
      </div>
    </div>
  );
}

export default Resume;
