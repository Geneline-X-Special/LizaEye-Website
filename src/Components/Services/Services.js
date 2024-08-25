import React from 'react';
import './Services.css';
import service_1 from '../../images/man-touching-screen-generating-data.jpg';
import service_2 from '../../images/online-colleges-cybersecurity-degree-blog8-1900x900.jpg';
import service_3 from '../../images/risk-based-vul-management.jpg';

const Services = () => {
    return (
        <div className='services' name='serve'>
            <div className='service'>
                <img src={service_1} alt='Loading'/>
                <p>Forensics</p>
                <article>We help you investigate, recover and provide findings of computer and mobile related incidents and crimes in a forensically sound manner that can enable you present the evidence in the court of law.</article>
            </div>
            <div id='service2'>
                <img src={service_2} alt='Loading'/>
                <p>Training</p>
               <article>We offer custom made courses designed to skill security professionals at different progressions of practice.</article>
            </div>
            <div className='service'>
                <img src={service_3} alt='Loading'/>
                <p>Vulnerability Assessment</p>
                <article>With advanced intelligence and manual efforts, we conduct Vulnerability Assessment of your platform. We show we provide reports indicating all vulnerabilities detected and a possible solutions to mitigate those vulnerabilities.</article>
            </div>
        </div>
    )
}
export default Services;