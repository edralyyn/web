//Navbar.js

import React, { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { Offcanvas } from 'react-bootstrap';
import Forecasting from './Forecasting';
import FloatingContainer from './Floating';
import '../App.css';

const Navbar = ({ onLogout }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isCollectClicked, setIsCollectClicked] = useState(false);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };

    const handleShowOffcanvas = () => setShowOffcanvas(true);

    const handleCollectClick = () => {
        setIsCollectClicked(true);
    };

    return (
        <>
            <nav className="navbar navbar-dark fixed-top bg-dark rounded-2 m-2">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div>
                        <button type="button" className="btn btn-dark btn-sm m-2 mt-0 mb-0" onClick={handleShowOffcanvas}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <button type="button" className="btn btn-primary btn-md ps-5 pe-5 mt-0 mb-0" onClick={handleCollectClick}>Collect</button>
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
                    <Forecasting />
                </Offcanvas.Body>
            </Offcanvas>
            <FloatingContainer isCollectClicked={isCollectClicked} />
        </>
    );
}

export default Navbar;
