//Forecasting.js

import React, { useState } from 'react';

const Forecasting = () => {
    const [forecastValue, setForecastValue] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleForecast = () => {
        if (inputValue.trim() === '') {
            alert('Please enter a valid input');
            return;
        }

        fetch('http://localhost:5000/forecast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_input: inputValue
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.forecast_value !== undefined) {
                setForecastValue(data.forecast_value);
            } else {
                console.error('Error in response:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="forecastInput" className="form-label">Forecast Input: </label>
                <input
                    type="text"
                    id="forecastInput"
                    className="form-control"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="text-start">
                <button type="button" className="btn btn-primary" onClick={handleForecast}>Forecast</button>
            </div>
            {forecastValue !== null && (
                <div className="mt-3">
                    <p>Forecast Value: {forecastValue}</p>
                </div>
            )}
        </div>
    );
}

export default Forecasting;
