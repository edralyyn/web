import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark rounded-2 m-2">
            <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-light btn-sm m-2 mt-0 mb-0">Small button</button>
            <button type="button" className="btn btn-light btn-sm m-2 mt-0 mb-0">Small button</button>
            </div>
        </nav>
    );
}

export default Navbar;
