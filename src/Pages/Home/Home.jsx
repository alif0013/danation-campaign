import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import Donations from '../../Components/Donations/Donations';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    
    const donations = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;