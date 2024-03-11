//Navbar.js

import React from 'react';
import { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { Offcanvas } from 'react-bootstrap';

const Navbar = ({ onLogout }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [forecastValue, setForecastValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [forecastList, setForecastList] = useState([]);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
        // Clear the error message and input field when the Offcanvas is closed
        setErrorMessage('');
        setForecastValue('');
    };

    const handleShowOffcanvas = () => setShowOffcanvas(true);

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
        <>
            <nav className="navbar navbar-dark fixed-top bg-dark rounded-2 m-2">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div>
                        <button type="button" className="btn btn-dark btn-sm m-2 mt-0 mb-0" onClick={handleShowOffcanvas}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <button type="button" className="btn btn-primary btn-md ps-5 pe-5 mt-0 mb-0">Collect</button>
                    </div>
                    <button type="button" className="btn btn-light m-2 mt-0 mb-0" onClick={onLogout}>
                        <BiLogOut />
                    </button>
                </div>
            </nav>

            <Offcanvas className="bg-dark rounded-2 m-2" style={{ color: 'white' }} show={showOffcanvas} onHide={handleCloseOffcanvas}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Forecasting</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="text-start">
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
                    {forecastList.length > 0 && (
                        <div className="mt-3 border bg-white rounded-2 p-2" style={{ color: 'black' }}>
                            <h5>Forecast Values:</h5>
                            <ul>
                                {forecastList.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Navbar;
