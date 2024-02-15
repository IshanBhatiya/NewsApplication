import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/#">News Protal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                        
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href="/#">World</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">India</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Bussiness</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Science</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
