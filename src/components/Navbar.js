import React from 'react';
import { BiLogOut } from 'react-icons/bi'; // Import logout icon from react-icons library
import { Offcanvas } from 'react-bootstrap'; // Import Offcanvas component from react-bootstrap

const Navbar = () => {
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

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
                    <button type="button" className="btn btn-light m-2 mt-0 mb-0">
                        <BiLogOut />
                    </button>
                </div>
            </nav>

            <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Add your content here */}
                    This is the content of the Offcanvas.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Navbar;
