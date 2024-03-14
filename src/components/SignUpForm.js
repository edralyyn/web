// SignUpForm.js

import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = ({ setShowSignUp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                username: username,
                password: password
            });

            console.log(response.data.message);
            // Optionally, you can redirect the user to the login page or display a success message

        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('An unexpected error occurred');
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
                    {error && <div className="text-danger mb-3">{error}</div>}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <button type="button" className="btn btn-link" onClick={() => setShowSignUp(false)}>Already have an account? Log in.</button>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
