import React, { useState } from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm'; // Import the SignUpForm component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // State to manage whether to show the sign-up form

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
      {/* Conditional rendering based on isAuthenticated and showSignUp */}
      {isAuthenticated ? (
        <>
          <Homepage />
          <Navbar onLogout={handleLogout} />
        </>
      ) : (
        <>
          {/* Check if showSignUp is true, if yes, render SignUpForm, else render Login */}
          {!showSignUp ? (
            <Login onLogin={handleLogin} setShowSignUp={setShowSignUp} />
          ) : (
            <SignUpForm setShowSignUp={setShowSignUp} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
