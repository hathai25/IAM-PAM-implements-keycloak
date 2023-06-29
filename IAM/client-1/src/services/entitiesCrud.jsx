import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL
  baseURL: 'http://localhost:8081/api/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});


export const getItems = (resource, body) => {
  return instance.get(`${resource}`, body);
}