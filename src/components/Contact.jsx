import React from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="flex items-center mb-4">
        <Icon icon="mdi:github" className="text-4xl mr-4" />
        <p>MJ-AZN</p>
      </div>
      <div className="flex items-center mb-4">
      <Icon icon="skill-icons:linkedin" className="text-4xl mr-4"/>
        <p>n/a</p>
      </div>
      <div className="flex items-center mb-4">
      <Icon icon="devicon:twitter" className="text-4xl mr-4"/>
        <p>n/a</p>
      </div>
      <div className="flex items-center">
      <Icon icon="skill-icons:instagram" className="text-4xl mr-4"/>
        <p>mj_azn</p>
      </div>
    </div>
  );
}

export default Contact;
