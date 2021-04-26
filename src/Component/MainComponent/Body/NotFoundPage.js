import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div >
            <div id='Notfound' className='d-flex align-items-center justify-content-center container'>
                <div className=" text-center " >
                    <h1 className="display-1 text-danger">404</h1>
                    <h4>OPS! - page not found!</h4>
                    <p className='text-muted'>Sorry , the page you're looking for doesn't exist </p>

                    <Link className='btn btn-outline-primary text-uppercase font-weight-bold' to="/">return home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;