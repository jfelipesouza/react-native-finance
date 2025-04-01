import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'localhost:3001/';

const useFetchApi = axios.create({
  baseURL: baseUrl,
});

export {useFetchApi};
