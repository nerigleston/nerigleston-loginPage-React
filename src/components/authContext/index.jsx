/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('authenticated') === 'true'
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = (data) => {
    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('user', JSON.stringify(data));
    setAuthenticated(true);
    setUser(data);
  };

  const logout = () => {
    localStorage.setItem('authenticated', 'false');
    localStorage.removeItem('user');
    setAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const checkAuthentication = () => {
      const storedAuth = localStorage.getItem('authenticated') === 'true';
      if (storedAuth) {
        setAuthenticated(true);
        setUser(JSON.parse(localStorage.getItem('user')) || null);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
