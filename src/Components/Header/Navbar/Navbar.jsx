import React from 'react';
import Logo from './Logo/Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='md:flex justify-between items-center px-5 py-4'> 
               <div>
               <Logo></Logo>
               </div>

                <ul className='md:flex gap-5'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;