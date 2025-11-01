import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PATH_AUTH } from '@/routes/paths';
import useAuth from '@/hooks/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = React.useState<string | null>(null);


  React.useEffect(() => {
    if (!isAuthenticated && location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
  }, [isAuthenticated, location.pathname, requestedLocation]);

  if (!isAuthenticated) return <Navigate to={PATH_AUTH.login} state={{ from: location }} replace />;

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} replace />;
  }

  return children;
};

export default AuthGuard;