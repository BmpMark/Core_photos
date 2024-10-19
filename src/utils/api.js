// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/photos'; // Change this to your production URL when deploying

export const uploadPhotos = async (photos, idName, boxNumber, fromMeters, toMeters) => {
  const formData = new FormData();
  photos.forEach(photo => {
    formData.append('files', photo.file);
  });
  formData.append('idName', idName);
  formData.append('boxNumber', boxNumber);
  formData.append('fromMeters', fromMeters);
  formData.append('toMeters', toMeters);

  const response = await axios.post(API_URL, formData);
  return response.data;
};

export const fetchPhotos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
