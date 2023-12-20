import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './../components/authContext/index';

function ProtectedRoute() {
  const { authenticated } = useAuth();

  return authenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;