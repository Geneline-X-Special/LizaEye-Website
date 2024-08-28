import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/LizaEye_logo-01.png'
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }
    return (
         
         <nav  className={`container ${sticky ? 'dark-nav' : ''}`}>
            <MenuIcon className='custom'onClick={toggleMenu}/>
            <img src={logo} alt='Loading' className='logo'/>
            <ul className={mobileMenu ?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='serve' smooth={true} offset={-240} duration={500}>Services</Link></li>
                <li><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
                <li><Link to='testimonial' smooth={true} offset={-250} duration={500}>Testimonial</Link></li>
                <li><Link to='contact-us' smooth={true} offset={-240} duration={500}>Contact</Link></li>
            </ul>
         </nav>
    )
};

export default Navbar;