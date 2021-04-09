import React from 'react';

const Navigation = () => {
    return (
        <div className='bg-light'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container ">

                <a className="navbar-brand" href="/"><img src="assets/images/logo.png" alt=""/></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home </a>
                        <a className="nav-item nav-link" href="#">Shoes</a>
                        <a className="nav-item nav-link" href="#">Backpack</a>
                        <a className="nav-item nav-link" href="#">Contact us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;