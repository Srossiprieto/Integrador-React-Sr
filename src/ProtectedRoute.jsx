import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Skeleton from './components/Skeleton/Skeleton';

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();


  if (loading) return <Skeleton/>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;