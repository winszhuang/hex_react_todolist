import useLocalStorage from '../hooks/useLocalStorage';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiCheckAuthorization } from '../apis/test';

export default function RouteGuard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() => {
    checkAuth();
  }, [token]);

  async function checkAuth() {
    if (token && location.pathname.match(/^\/sign(in|up)/i)) {
      return navigate('/');
    }
    try {
      await apiCheckAuthorization();
      const localToken = useLocalStorage().getItem('token')!;
      setToken(localToken);
    } catch (error) {
      useLocalStorage().removeItem('token');
      if (!location.pathname.match(/^\/sign(in|up)/i)) {
        alert((error as Error).message);
        navigate('/signIn');
      }
    }
  }

  return <Outlet />
}