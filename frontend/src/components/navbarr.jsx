import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import  {HamburgetMenuOpen} from "./Icons.jsx";
import logo from '/logo_final.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [previousmatch,setPreviousmatch] = useState(null)

  useEffect(() => {
    async function fetchPreviousMatch() {
      try {
        const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/LPL24');
        const matchData = await response.json();
        setPreviousmatch(matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchPreviousMatch();
  }, []); // Empty dependency array, runs once on component mount

  var total = 262;
  // var tosspassed = 186;
  var matchpassed = 247;

if(previousmatch) 
   {previousmatch.forEach(item => {
      total += 1;
  
      if (item.actualmatchWinner === item.matchWinner) {
          matchpassed += 1;
      }
  
      // if (item.actualtossWinner === item.tossWinner) {
      //     tosspassed += 1;
      // }
  });
}

    // const tosspassed = props.tosspassed
    // const percentage = 99
    const percentage = ((matchpassed/total) *100).toFixed(0);


  const [click, setClick] = useState(false);
      // Phone number with country code
      const phoneNumber = "918445659152";
      // Default message (URL encoded)
      const defaultMessage = encodeURIComponent("Hello there, I would like to ask you some question about Cricket Prediction.");

      const username = "tips_insight";

  const handleClick = () => setClick(!click);
  return (
    <>
        <div className="bg-[#212529] flex flex-col md:flex-row m-0 justify-evenly">
<div className="flex justify-center gap-5  md:p-4 pt-4 pb-2 md:basis-4/12">
<a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`}><FaWhatsapp className="text-2xl md:text-3xl text-white cursor-pointer"/></a>
<a href={`https://t.me/${username}`}><FaTelegram className="text-2xl md:text-3xl text-white cursor-pointer"/></a>
<a href="https://www.instagram.com/tipsinsight?igsh=bzltMXE0c2V1d293"><FaInstagram className="text-2xl md:text-3xl text-white cursor-pointer"/></a>


</div>

<div className="flex justify-around md:gap-14 text-white md:text-xl text-base md:p-4 p-2 md:basis-8/12">
    <p>Matches: {total}</p>
    <p>Pass: {matchpassed}</p>
    <p>Percentage: {percentage}%</p>
</div>
        </div>
      <nav className="navbar font-mont">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
            <img src={logo} alt="" className="w-36 h-36"/>
            {/* <i className="fas fa-code"></i> */}
            </Link>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/upcoming"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Buy
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/buypackages"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Buy Packages
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/previousmatches"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Predictions
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/screenshots"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Screenshots
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;