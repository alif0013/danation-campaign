import React from 'react';
import { Link } from 'react-router-dom';


const Donet = ({ donet }) => {
    const { id, Picture, Title, Category_bg, Category, Card_bg, Text_button_bg, Price } = donet || {}

    


    const titleStyle = {
        backgroundColor: Category_bg,

    };
    const textStyle = {
        color: Text_button_bg,
    };
    const btnBgStyle = {
        backgroundColor: Text_button_bg,
    };
    const bgStyle = {
        backgroundColor: Card_bg,
    };

    return (
        <div>

            <div style={bgStyle} className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className='w-full md:w-[304px] h-[180px]' src={Picture} alt="img" />
                <div className="flex flex-col justify-between p-4 leading-normal">

                    <h2 className="card-title w-20 mb-2 text-center rounded" style={titleStyle}>{Category}</h2>

                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
                    <p className='font-semibold' style={textStyle}>${Price}</p>

                    <div className='mt-3'>
                        <Link to={`/donations/${id}`}>
                            <button className='px-2 py-1 text-white rounded' style={btnBgStyle}>View Details</button>
                        </Link>
                  
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Donet;