// Home.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Core Photos Manager</h1>
      <Link to="/upload">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
          Upload New Core Photos
        </button>
      </Link>
      <Link to="/photos">
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600">
          All Photos
        </button>
      </Link>
    </div>
  );
};

export default Home;
