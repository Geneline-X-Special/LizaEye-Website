import React from 'react';
import './Hero.css';
import dark_arrow from '../../images/arrow-line-vector-icon-on-white-background.jpg';


const Hero = () => {
    return (
        <div className='hero container' id='hero'>
            <div className='hero-text'>
                <h1>We Ensure Better Protection to your Systems Networks and Data</h1>
                <p>Our cutting-edge service is to provide security to your systems from malicious attacks </p>
                <p>We are the guardians to your digital world</p>
                <button className='btn'>Explore more<img src={dark_arrow} alt='Loading'/></button>
            </div>
        </div>
    )
};

export default Hero;