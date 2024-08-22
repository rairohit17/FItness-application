import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="text-white font-serif font-medium text-xl md:w-[760px] w-auto flex justify-between ">
      <img className="h-24" src="src/assets/images/logo.png" alt="logo" />
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-orange-500 p-5" : "no-underline text-white p-5"
        }
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-orange-600 p-5" : "no-underline text-white p-5"
        }
        to='/exercise'
      >
        Exercise
      </NavLink>
    </div>
  );
}

export default Navbar;
