// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Link to="/" className="text-white text-lg font-bold">My Website</Link>
//         </div>
//         <div className="flex space-x-8">
//           <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
//           <Link to="/upcoming" className="text-gray-300 hover:text-white">Buy</Link>
//           <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
//           <Link to="/previousmatches" className="text-gray-300 hover:text-white">Predictions</Link>
//           <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50"> {/* Increase z-index value */}
//       <div className="container mx-auto flex justify-between items-center relative"> {/* Relative positioning */}
//         <div className="flex items-center">
//           <Link to="/" className="text-white text-lg font-bold">My Website</Link>
//         </div>
//         <div className="hidden md:flex space-x-8">
//           <NavLink exact to="/" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Home</NavLink>
//           <NavLink to="/upcoming" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Buy</NavLink>
//           <NavLink to="/about" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>About</NavLink>
//           <NavLink to="/previousmatches" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Predictions</NavLink>
//           <NavLink to="/contact" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Contact</NavLink>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden z-50 absolute top-0 left-0 w-full"> {/* Increase z-index value */}
//           <div className="bg-gray-800">
//             <div className="p-4">
//               <NavLink exact to="/" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Home</NavLink>
//               <NavLink to="/upcoming" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Buy</NavLink>
//               <NavLink to="/about" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>About</NavLink>
//               <NavLink to="/previousmatches" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Predictions</NavLink>
//               <NavLink to="/contact" className="text-gray-300 hover:text-white" activeClassName="font-bold" onClick={closeMenu}>Contact</NavLink>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-bold">My Website</Link>
        </div>
        <div className="hidden md:flex md:flex-col md:items-start md:space-y-4 md:text-gray-300 md:ml-4">
          <NavLink exact to="/" className="hover:text-white" activeClassName="font-bold text-white" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/upcoming" className="hover:text-white" activeClassName="font-bold text-white" onClick={closeMenu}>Buy</NavLink>
          <NavLink to="/about" className="hover:text-white" activeClassName="font-bold text-white" onClick={closeMenu}>About</NavLink>
          <NavLink to="/previousmatches" className="hover:text-white" activeClassName="font-bold text-white" onClick={closeMenu}>Predictions</NavLink>
          <NavLink to="/contact" className="hover:text-white" activeClassName="font-bold text-white" onClick={closeMenu}>Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden z-50 absolute top-0 left-0 w-full">
          <div className="bg-gray-800">
            <div className="p-4">
              <NavLink exact to="/" className="text-white" activeClassName="font-bold" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/upcoming" className="text-white" activeClassName="font-bold" onClick={closeMenu}>Buy</NavLink>
              <NavLink to="/about" className="text-white" activeClassName="font-bold" onClick={closeMenu}>About</NavLink>
              <NavLink to="/previousmatches" className="text-white" activeClassName="font-bold" onClick={closeMenu}>Predictions</NavLink>
              <NavLink to="/contact" className="text-white" activeClassName="font-bold" onClick={closeMenu}>Contact</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;




