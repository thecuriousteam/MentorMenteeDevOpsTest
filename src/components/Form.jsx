import React, { useState } from 'react';
import Mentee from './Mentee';
import Mentor from './Mentor';

const Form = () => {
  const [activeTab, setActiveTab] = useState('mentor');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-purple-100 py-8">
      <div className="flex justify-center mb-4">
        <button
          className={`${
            activeTab === 'mentor' ? 'bg-gray-500 text-white outline-none' : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-l`}
          onClick={() => handleTabChange('mentor')}
        >
          Mentor
        </button>
        <button
          className={`${
            activeTab === 'mentee' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-r`}
          onClick={() => handleTabChange('mentee')}
        >
          Mentee
        </button>
      </div>
      <div className="mx-auto max-w-md bg-white p-6 rounded-lg shadow">
        {activeTab === 'mentor' && <Mentee />}
        {activeTab === 'mentee' && <Mentor />}
      </div>
    </div>
  );
};

export default Form;
