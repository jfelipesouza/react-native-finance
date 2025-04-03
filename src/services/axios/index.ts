import axios from 'axios';
import {FINANCE_BFF_URL} from '@env';

const baseUrl = FINANCE_BFF_URL || 'localhost:3001/';

const useFetchApi = axios.create({
  baseURL: baseUrl,
});

export {useFetchApi};
