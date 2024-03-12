// SignUpForm.js

import React, { useState } from 'react';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Signing up...');
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
        </div>
        </div>
    );
}

export default SignUpForm;
