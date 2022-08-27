import axios from 'axios';

export function useApi() {
  const instance = axios.create({
    baseURL: 'https://todoo.5xcamp.us/'
  })

  instance.interceptors.request.use((config) => {
    console.log(config);
  })

  return instance;
}