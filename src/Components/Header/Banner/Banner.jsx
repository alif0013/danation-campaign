import React from 'react';

const Banner = () => {
    return (
        <div className='mb-20 md:h-[60vh] text-center bg-gray-300 pt-28'>
            <h1 className='text-xl md:text-4xl font-bold mb-8'>I Grow By Helping People In Need</h1>
            <input type="text" placeholder="Search here" className="md:input ml-16 px-2 py-1 input-bordered w-full max-w-xs" />
            <button className='my-5 py-1 px-3  md: ml-1 rounded bg-[#FF444A] text-[white]'>Search</button>
        </div>
    );
};

export default Banner;