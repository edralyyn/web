import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const SignUpForm = ({ setShowSignUp }) => { // Ensure setShowSignUp is received as a prop
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }
    
        try {
            // Send a POST request to the Flask backend to create a new account
            const response = await axios.post('http://localhost:5000/signup', {
                username: username,
                password: password
            });
    
            // Handle success response
            console.log(response.data.message); // Log success message
    
            // Optionally, you can redirect the user to the login page or display a success message
        } catch (error) {
            // Handle error response
            if (error.response && error.response.data && error.response.data.error) {
                console.error('Error signing up:', error.response.data.error); // Log error message
            } else {
                console.error('An unexpected error occurred:', error); // Log unexpected error
            }
        }
    }
    

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
            <div className="card p-4 mt-3">
                <h2 className="mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="signup-username" className="form-label">Username:</label>
                        <input type="text" id="signup-username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signup-password" className="form-label">Password:</label>
                        <input type="password" id="signup-password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password:</label>
                        <input type="password" id="confirm-password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                {/* Link to switch back to the login page */}
                <div className="text-center mt-3">
                    <button type="button" className="btn btn-link" onClick={() => setShowSignUp(false)}>Already have an account? Log in.</button>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
