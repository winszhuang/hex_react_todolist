import useLocalStorage from '../hooks/useLocalStorage';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function RouteGuard() {
  const location = useLocation();
  const token = useLocalStorage().getItem('token');

  if (!token && location.pathname === '/'){
    return <Navigate to="/signIn" replace />;
  }
  if (token && location.pathname.match(/^\/sign(in|up)/i)) {
    return <Navigate to="/" replace/>;
  }
  return <Outlet />
}