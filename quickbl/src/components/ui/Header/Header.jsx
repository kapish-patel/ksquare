import React from 'react';
import { Avatar } from '@mui/material';
import logo from '../../../assets/quickbl_logo_no_bg_fixed.png';

function Header() {
  return (
    <div className='shadow-md py-4 px-6 flex justify-between items-center'>
      {/* Leading section with the logo */}
      <div className="flex items-center">
        <img src={logo} alt="quickbl logo" className="h-12 w-auto" />
      </div>

      {/* Navigation links */}
      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-500">Some Page</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Some Page</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Some Page</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Some Page</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Some Page</a>
      </div>

      {/* Tailing section with the avatar */}
      <div className="flex items-center">
        <Avatar alt="Manoj" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header;
