import React from "react";

const AboutPage = () => {
  return (
    <div className="px-10 py-5 md:px-24 max-w-[1000px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">What We Do</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Feature point 1</li>
            <li>Feature point 2</li>
            <li>Feature point 3</li>
            <li>Feature point 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 