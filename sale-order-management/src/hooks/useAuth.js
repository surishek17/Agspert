import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('authenticated');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username, password) => {
    console.log('Attempting login with', username, password);
    if (username === 'admin' && password === 'password12') {
      console.log('Login successful');
      localStorage.setItem('authenticated', 'true');
      setIsAuthenticated(true);
      console.log('Navigating to /orders');
      navigate('/orders'); // Navigate to orders page after login
    } else {
      console.log('Invalid credentials');
      alert('Invalid username or password');
    }
  };
  
  

  const logout = () => {
    localStorage.removeItem('authenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
