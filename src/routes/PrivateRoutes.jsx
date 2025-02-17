import React, { useState, createContext, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthContext = createContext();

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </AuthContext.Provider>
  );
};

export default PrivateRoute ;