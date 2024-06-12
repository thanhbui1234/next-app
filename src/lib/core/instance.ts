import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // You can modify request headers or do other actions here
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
