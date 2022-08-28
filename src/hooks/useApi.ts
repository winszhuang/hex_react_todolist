import axios from 'axios';
import useLocalStorage from './useLocalStorage';

export function useApi() {
  const instance = axios.create({
    baseURL: 'https://todoo.5xcamp.us/'
  });

  instance.interceptors.request.use((config) => {
    const token = useLocalStorage().getItem('token');
    if (token) {
      (config.headers as any).authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use((config) => {
    console.log(config);
    const token = config.headers?.authorization;
    if (token) {
      useLocalStorage().setItem('token', token.split('Bearer')[1].trim());
    }
    return config;
  });

  return instance;
}