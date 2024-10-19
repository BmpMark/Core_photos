// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const PhotoGallery = ({ photos = [] }) => {
  const [searchId, setSearchId] = useState('');
  const [searchMeters, setSearchMeters] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  useEffect(() => {
    setFilteredPhotos(photos);
  }, [photos]);

  const handleSearch = () => {
    const result = photos.filter(photo => 
      (photo.idName.includes(searchId) || searchId === '') &&
      (photo.fromMeters <= searchMeters && photo.toMeters >= searchMeters || searchMeters === '')
    );
    setFilteredPhotos(result);
  };

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded p-6 mb-6">
      <h2 className="text-xl font-semibold justify-center mb-4">Search Core Photos</h2>
      <div className="mb-4">
        <input
          className="border p-2 rounded mb-2 mr-2"
          type="text"
          placeholder="Search by ID Name"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <input
          className="border p-2 rounded mb-2 mr-2"
          type="number"
          placeholder="Search by Meters Distance"
          value={searchMeters}
          onChange={(e) => setSearchMeters(e.target.value)}
        />
        <button
          className="border p-2 rounded bg-blue-500 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.isArray(filteredPhotos) && filteredPhotos.map((photo, index) => (
          <div key={index} className="border rounded shadow-md p-4 bg-white">
            <img
              src={URL.createObjectURL(photo.file)}
              alt={`${photo.idName} - ${photo.boxNumber}`}
              className="w-full h-32 object-cover mb-2"
            />
            <p>ID Name: {photo.idName}</p>
            <p>Box Number: {photo.boxNumber}</p>
            <p>From: {photo.fromMeters}m, To: {photo.toMeters}m</p>
            <p>Date Uploaded: {photo.date.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
