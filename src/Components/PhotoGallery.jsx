// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-gray-100">
    <h1 className="text-4xl font-bold mb-8">Core Photos Gallery</h1>
    <Link to="/all">
      <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-300">
        View All Photos
      </button>
    </Link>
    <Link to="/search">
      <button className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-red-500">
        Search Photos
      </button>
    </Link>
    </div>
  )
}

export default PhotoGallery;