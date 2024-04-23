import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import TableCom from './components/main/main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        {isLoggedIn ? (
          <Route path="/" element={<Navigate to="/TableCom" />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        <Route path="/TableCom" element={<TableCom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

