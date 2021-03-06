import axios from 'axios';

const baseUrl = '/api/people';

export const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

export const create = newPerson => {
  const request = axios.post(baseUrl, newPerson);
  return request.then(response => response.data);
};

export const update = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return request.then(response => response.data);
};

export const remove = id => {
  return axios.delete(`${baseUrl}/${id}`);
};
