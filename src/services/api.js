import axios from 'axios';

//https://rest-api-bemobile.herokuapp.com/collaborators

const api = axios.create({
  baseURL: 'https://rest-api-bemobile.herokuapp.com/',
});

export default api;
