// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
const PhotoUploader = ({ onUpload }) => {
  const [idName, setIdName] = useState('');
  const [boxNumber, setBoxNumber] = useState('');
  const [fromMeters, setFromMeters] = useState('');
  const [toMeters, setToMeters] = useState('');
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState('');

  // Function to validate form
  const validateForm = () => {
    const newErrors = {};
    if (!idName) newErrors.idName = 'ID Name is required';
    if (!boxNumber) newErrors.boxNumber = 'Box Number is required';
    if (!fromMeters || fromMeters <= 0) newErrors.fromMeters = 'From Meters must be greater than 0';
    if (!toMeters || toMeters <= 0 || toMeters <= fromMeters) newErrors.toMeters = 'To Meters must be greater than From Meters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to validate file types
  const validateFiles = (files) => {
    const validImageTypes = ['image/jpeg', 'image/png'];
    for (let i = 0; i < files.length; i++) {
      if (!validImageTypes.includes(files[i].type)) {
        setFileError('Invalid file type. Only JPG and PNG are allowed.');
        return false;
      }
    }
    setFileError('');
    return true;
  };

  const handleFiles = (files) => {
    if (!validateForm() || !validateFiles(files)) return;

    const uploadedPhotos = Array.from(files).map((file) => ({
      idName,
      boxNumber,
      fromMeters,
      toMeters,
      date: new Date(),
      file,
    }));

    onUpload(uploadedPhotos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('fileInput');
    if (input.files.length > 0) {
      handleFiles(input.files);
    }
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded p-6 mb-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Upload Core Photos</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                className="border p-2 rounded w-full"
                type="text"
                placeholder="ID Name"
                value={idName}
                onChange={(e) => setIdName(e.target.value)}
              />
              {errors.idName && <p className="text-red-500 text-sm">{errors.idName}</p>}
            </div>
            <div>
              <input
                className="border p-2 rounded w-full"
                type="text"
                placeholder="Box Number"
                value={boxNumber}
                onChange={(e) => setBoxNumber(e.target.value)}
              />
              {errors.boxNumber && <p className="text-red-500 text-sm">{errors.boxNumber}</p>}
            </div>
            <div>
              <input
                className="border p-2 rounded w-full"
                type="number"
                placeholder="From (Meters)"
                value={fromMeters}
                onChange={(e) => setFromMeters(e.target.value)}
              />
              {errors.fromMeters && <p className="text-red-500 text-sm">{errors.fromMeters}</p>}
            </div>
            <div>
              <input
                className="border p-2 rounded w-full"
                type="number"
                placeholder="To (Meters)"
                value={toMeters}
                onChange={(e) => setToMeters(e.target.value)}
              />
              {errors.toMeters && <p className="text-red-500 text-sm">{errors.toMeters}</p>}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              id="fileInput"
              className="border p-2 rounded w-full"
              type="file"
              multiple
              onChange={(e) => validateFiles(e.target.files)}
            />
            {fileError && <p className="text-red-500 text-sm">{fileError}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
            >
              Upload Photo(s)
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PhotoUploader;