// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PhotoUploader from './components/PhotoUploader.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import SearchPhotos from "./Components/SearchPhotos.jsx";
import AllPhotos from "./Components/AllPhotos.jsx";
import Navbar from './Components/Navbar.jsx';



const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<PhotoUploader />} />
            <Route path="/photos" element={<PhotoGallery />} />
            <Route path="/search" element={<SearchPhotos />} />
            <Route path="/all" element={<AllPhotos />} />
          </Routes>
        </div>
      <footer className="bg-gray-800 text-white text-center p-4">
        Mark Boampong © {new Date().getFullYear()}
      </footer>
    </div>
    </Router>
  );
};


export default App;


