import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Info from './Info';

const DonetInfo = () => {

    const [donation, setDonation] = useState({});

    const { id } = useParams();

    const donations = useLoaderData();
    

   useEffect(()=>{
    const findDonations = donations.find(donation => donation.id === id)
    
    setDonation(findDonations);

   },[])


    return (
        <div>
            <Info donation={donation}></Info>
        </div>
    );
};

export default DonetInfo;