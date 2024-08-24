import React from 'react';
import './About.css';
import about_img from '../../images/Golden-Gate-March-2024-Blog-Image-Cybersecurity.jpg';

const About = ( ) => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img className='about-img'src={about_img} alt='Loading'/>
            </div>
            <div className='about-right'>
                <h3>ABOUT COMPANY</h3>
                <h2>Providing a sustainable Cyber Security and Forensic services in the domain where we operate.
                </h2>
                <p>At LizaEYE Cyber Operations we intend to provide our customers advance cyber security services that will enable them remain ahead in whatever industry they are in. With that we provide the following services.</p>
                <p>Our cybersecurity company is dedicated to safeguarding your digital assets in toady's increasingly interconnected world. With a team of highly skilled experts, we provide comprehensive solutions tailored to meet the unique needs of businesses and individuals. Our services encompass a wide range of cybersecurity measures, including network security, data protection, threat detection and response, and compliance management. We leverage the latest technologies and best practices to ensure that your sensitive information remains secure against cyber threats.</p>
            </div>
        </div>
    )
}
export default About;