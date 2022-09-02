import { useApi } from '../hooks/useApi';

export function apiCheckAuthorization() {
  return useApi().get('/check');
}