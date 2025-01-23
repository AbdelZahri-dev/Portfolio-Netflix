import React from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import search_icon from'../../assets/search_icon.svg'
import bell_icon from'../../assets/bell_icon.svg'
import profile_img from'../../assets/profile_img.png'
import caret_icon from'../../assets/caret_icon.svg'
import { Link } from 'react-scroll';



const Navbar = () => {
  return (
    <div className='navbar'>
<div className="navbar-left">

<img src={logo} alt="Logo" />
<ul className='hidden'>
        <li><Link to="hero" spy={true} smooth={true} offset={-80} duration={500}>Home</Link></li>
          <li><Link to="blockbuster-movies" spy={true} smooth={true} offset={-80} duration={500}>Portfolio</Link></li>
          <li><Link to="only-on-netflix" spy={true} smooth={true} offset={-80} duration={500}>Dessins graphiques</Link></li>
          <li><Link to="top-picks" spy={true} smooth={true} offset={-80} duration={500}>Mes passions</Link></li>

</ul>
    </div>

    <div className="navbar-right">
    <img src={search_icon} alt="" className='icons' />
    <p>Enfants</p>
    <img src={bell_icon} alt="" className='icons' />
<div className="navbar-profile"> 
<img src={profile_img} alt="" className='profile' />
<img src={caret_icon} alt=""/>
<div className="dropdown">

          <p>Sign Out of Netflix</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar