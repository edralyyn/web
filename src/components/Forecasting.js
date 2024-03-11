//Forecasting.js

import React, { useState } from 'react';

const Forecasting = ({ forecastList, setForecastList }) => {
    const [forecastValue, setForecastValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleForecastSubmit = (e) => {
        e.preventDefault();
        if (!forecastValue.trim()) {
            setErrorMessage('Please enter a value for forecasting.');
            return;
        }
        setErrorMessage('');
        setForecastList([...forecastList, forecastValue]);
        console.log('Forecast value:', forecastValue);
        setForecastValue('');
    };

    const handleChangeForecastValue = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setForecastValue(value);
        }
    };  

    return (
        <div>
            <form onSubmit={handleForecastSubmit}>
                <div className="mb-3">
                    <label htmlFor="forecastInput" className="form-label">Days of prediction: </label>
                    <input
                        type="number"
                        id="forecastInput"
                        className="form-control"
                        value={forecastValue}
                        onChange={handleChangeForecastValue}
                    />
                </div>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <div className="text-start">
                    <button type="submit" className="btn btn-primary">Forecast</button>
                </div>
            </form>
        </div>
    );
}

export default Forecasting;
