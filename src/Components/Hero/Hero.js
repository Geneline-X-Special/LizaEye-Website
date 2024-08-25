import React, { useEffect } from 'react';
import './Hero.css';
import dark_arrow from '../../images/arrow-line-vector-icon-on-white-background.jpg';
import { Link } from 'react-scroll';

const Hero = () => {
    useEffect(() => {
        document.activeElement.blur();
    
        },[])

    return (
        <div className='hero container' name='hero'>
            <div className='hero-text'>
                <h1>We Ensure Better Protection to your Systems Networks and Data</h1>
                <p>Our cutting-edge service is to provide security to your systems from malicious attacks </p>
                <p>We are the guardians to your digital world</p>
                <button className='btn'><Link to='serve' smooth={true} offset={-50} duration={500}>Explore more</Link><img src={dark_arrow} alt='Loading'/></button>
            </div>
        </div>
    )
};

export default Hero;