import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='md: text-center mt-36'>
            <h1 className='text-4xl mb-5 text-red-600'>Opps...</h1>
            <p>Something Wrong. Please try again!</p>
            <Link to='/'>
                    <button className='px-2 mt-3 bg-slate-300 rounded py-1'>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;