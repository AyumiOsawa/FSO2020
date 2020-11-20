import axios  from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(resp => resp.data);
}

const post = newObj => {
  const request = axios.post(baseUrl, newObj);
  return request.then(resp => resp.data);
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
}

const update = (id, newObj) => {
  return axios.put(`${baseUrl}/${id}`, newObj);
}

export default { getAll, post, remove, update };
