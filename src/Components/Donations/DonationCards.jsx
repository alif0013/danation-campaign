import React from 'react';
import { Link } from 'react-router-dom';

const DonationCards = ({ donation }) => {

    const {id, Picture, Category, Title, Card_bg, Category_bg, Text_button_bg} = donation || {};

//Styling the card follow the requirement

    const titleStyle = {
        backgroundColor: Category_bg,
       
    };
    const textStyle = {
        color: Text_button_bg,
    };
    const bgStyle = {
        backgroundColor:  Card_bg,
    };

    return (
        <div>
          <Link to={`/donations/${id}`} >
          <div className="card bg-base-100 shadow-xl" style={bgStyle}>
                <figure><img className='w-full md:w-[304px] h-[180px]' src={Picture} alt="donation" /></figure>
                <div className='px-3 py-2'>
                    <h2 className="card-title w-20 text-center rounded" style={titleStyle}>{Category}</h2>
                    <p className='py-1 font-semibold' style={textStyle}>{Title}</p>

                </div>
            </div>
          </Link>
        </div>
    );
};

export default DonationCards;