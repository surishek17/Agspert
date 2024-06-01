import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ActiveOrders from './components/ActiveOrders';
import CompletedOrders from './components/CompletedOrders';
import Login from './components/Login';
import DarkModeToggle from './components/DarkModeToggle';
import Orders from './components/Orders';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <DarkModeToggle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/active-orders" element={<ProtectedRoute><ActiveOrders /></ProtectedRoute>} />
          <Route path="/completed-orders" element={<ProtectedRoute><CompletedOrders /></ProtectedRoute>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;







