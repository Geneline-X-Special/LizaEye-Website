import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../images/LizaEye_logo-01.png'


const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='Loading' className='logo'></img>
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='serve' smooth={true} offset={-240} duration={500}>Services</Link></li>
                <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
                <li><Link to='testimonial' smooth={true} offset={-250} duration={500}>Testimonial</Link></li>
                <li><Link to='contact-us' smooth={true} offset={-240} duration={500}>Contact Us</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;