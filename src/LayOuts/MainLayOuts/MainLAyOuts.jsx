import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Header/Navbar/Navbar';




const MainLAyOuts = () => {
    return (
        <div className="max-w-[1280px]  mx-auto">

            <div className='text-center py-2'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLAyOuts;