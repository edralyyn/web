// App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar'; // Import Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication
  const handleLogin = (username, password) => {
    // For simplicity, let's assume authentication is successful
    setIsAuthenticated(true);
    console.log('User authenticated:', isAuthenticated);
  }

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log('User logged out');
  }

  console.log('Rendering App. isAuthenticated:', isAuthenticated);

  return (
    <div className="App">
      {/* Pass handleLogin to Login component */}
      {isAuthenticated ? <Homepage /> : <Login onLogin={handleLogin} />}
      {/* Pass handleLogout to Navbar component */}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
    </div>
  );
}

export default App;
