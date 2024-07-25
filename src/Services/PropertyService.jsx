import axios from 'axios';

const API_URL = 'http://localhost:5000/api/properties';

const createProperty = (propertyData, token) => {
  return axios.post(API_URL, propertyData, {
    headers: {
      'x-auth-token': token,
    },
  });
};

const getProperties = (token) => {
  return axios.get(API_URL, {
    headers: {
      'x-auth-token': token,
    },
  });
};

const updateProperty = (id, propertyData, token) => {
  return axios.put(`${API_URL}/${id}`, propertyData, {
    headers: {
      'x-auth-token': token,
    },
  });
};

const deleteProperty = (id, token) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      'x-auth-token': token,
    },
  });
};

const searchProperties = (queryData, token) => {
  const params = new URLSearchParams(queryData).toString();
  return axios.get(`${API_URL}/search?${params}`, {
    headers: {
      'x-auth-token': token,
    },
  });
};

const getProperty = (id, token) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: {
      'x-auth-token': token,
    },
  });
};

export default {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty,
  searchProperties,
  getProperty,
};
