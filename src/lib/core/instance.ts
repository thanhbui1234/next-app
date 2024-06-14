import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers : {
    "Authorization":"auth"
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Handle successful responses
    return response.data;
  },
  error => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default axiosInstance;
