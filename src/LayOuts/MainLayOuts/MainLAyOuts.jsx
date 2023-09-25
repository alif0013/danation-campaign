import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Header/Navbar/Navbar';




const MainLAyOuts = () => {
    return (
        <div className="max-w-[1280px]  mx-auto">

            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLAyOuts;