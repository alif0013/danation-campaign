import React from 'react';
import Swal from 'sweetalert2';
const Info = ({ donation }) => {
    const { id, Picture, Title, Description, Price, Text_button_bg } = donation || {};

    const bgStyle = {
        backgroundColor: Text_button_bg,
    };

    const handleButtonClick = () => {
        Swal.fire(
            'Good job!',
            'your donation is succesfull!',
            'success'
        )

        const addDonatedArray = [];

        const donatedItems = JSON.parse(localStorage.getItem("donation"));

        if (!donatedItems) {
            addDonatedArray.push(donation);
            localStorage.setItem("donation", JSON.stringify(addDonatedArray))
        }
        else {

            const isExist = donatedItems.find(items => items.id === id)

            if (!isExist) {
                addDonatedArray.push(...donatedItems, donation)
                localStorage.setItem("donation", JSON.stringify(addDonatedArray))
            }
            else {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'already added',
                    
                })
            }


        }

    }



    return (
        <div>
            <div className="card md:w-full mt-10 bg-base-100 shadow-xl">
                <figure><img className='md:w-[600px] h-[300px] mx-auto' src={Picture} alt="img" /></figure>

                <div className='md:-mt-20 w-[600px] py-4 mx-auto md:bg-[#0b0b0b80] relative'>
                    <button onClick={handleButtonClick} className=' px-2  md:px-4 py-2  text-white rounded ml-10' style={bgStyle}>Donate ${Price}</button>
                </div>

                <div className="card-body px-5">
                    <h2 className="card-title text-center py-6 text-2xl font-bold">{Title}</h2>
                    <p className='pb-4'>{Description}</p>

                </div>
            </div>
        </div>
    );
};

export default Info;