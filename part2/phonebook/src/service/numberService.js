'use strict';
import axios  from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(resp => resp.data);
}

const post = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then(resp => resp.data);
}

export default { getAll post };
