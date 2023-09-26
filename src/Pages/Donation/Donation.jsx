import React, { useEffect, useState } from 'react';
import Donet from './Donet';

const Donation = () => {

    const [isShow, setIsShow] = useState(false);
    const [donatedItems, setDonatedItems] = useState([]);
    const [noFound, setNoFound] = useState("")

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donation"));

        if (donatedItems) {
            setDonatedItems(donatedItems);
        }
        else {
            setNoFound('no data found');
        }
    }, [])



    return (
        <div>

            {
                noFound ? <p>{noFound}</p> : <div>

                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            isShow ? donatedItems.map(donet => <Donet key={donet.id} donet={donet}></Donet>)
                                : donatedItems.slice(0, 4).map(donet => <Donet key={donet.id} donet={donet}></Donet>)

                        }
                    </div>

                    <div className='text-center mt-4'>
                        {
                            donatedItems.length > 4 && !isShow &&

                            <button onClick={() => setIsShow(!isShow)} className='px-3 py-1 rounded bg-[#009444] text-white'>
                                {isShow ? "See Less" : "See All"}
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;