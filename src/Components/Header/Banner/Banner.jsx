import { useState } from "react";


const Banner = ({donations}) => {

   const {Category} = donations || {};
   const [searchInput, setSearchInput] = useState('');
   
   // Filter categories based on the search input
   const filteredCategories = Category
     ? Category.filter((category) =>
         category.toLowerCase().includes(searchInput.toLowerCase())
       )
     : [];
   
    return (
        <div>
            <div className='mb-20 md:h-[60vh] text-center  bg-[#ffffffb0]  pt-28' style={{ backgroundBlendMode:'overlay', backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0zOU_TLjiFugonNdlNdM-yaqROHjskrC7v4vDX2VsEkhBVIC4Z97hPAuk)' }}>
                <h1 className='text-xl text-black md:text-4xl font-bold mb-8'>I Grow By Helping People In Need</h1>
                <input  value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search here" className="md:input ml-16 px-2 py-1 input-bordered w-full max-w-xs" />
                <button className='my-5 py-1 px-3  md: ml-1 rounded bg-[#FF444A] text-[white]'>Search</button>
            </div>
            

        </div>
    );
};

export default Banner;