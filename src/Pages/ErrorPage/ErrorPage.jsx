import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-4xl text-red-600'>Opps...</h1>
            <p>Something Wrong. Please try again!</p>
            <Link to='/'>
                    <button className='px-2 py-1'>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;