// App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication
  const handleLogin = (username, password) => {
    // For simplicity, let's assume authentication is successful
    setIsAuthenticated(true);
    console.log('User authenticated:', isAuthenticated);
  }

  console.log('Rendering App. isAuthenticated:', isAuthenticated);

  return (
    <div className="App">
      {isAuthenticated ? <Homepage /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
