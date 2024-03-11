// App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    setIsAuthenticated(true);
    console.log('User authenticated:', isAuthenticated);
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log('User logged out');
  }

  console.log('Rendering App. isAuthenticated:', isAuthenticated);

  return (
    <div className="App">
      {isAuthenticated ? <Homepage /> : <Login onLogin={handleLogin} />}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
    </div>
  );
}

export default App;
