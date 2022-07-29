import React from 'react';

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-brand fw-bold">Efficiency</div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Username
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><div className="dropdown-item">Settings</div></li>
                                <li><div className="dropdown-item">Login</div></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;