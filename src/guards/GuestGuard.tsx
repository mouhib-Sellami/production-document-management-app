import useAuth from '@/hooks/useAuth';
import { PATH_APP } from '@/routes/paths';
import React from 'react';
import { Navigate } from 'react-router';

interface GuestGuardProps {
    children: React.ReactNode;
}

const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Navigate to={PATH_APP.general.dashboard.home} /> : children;
}

export default GuestGuard;