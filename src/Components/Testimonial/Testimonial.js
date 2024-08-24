import React, { useRef } from 'react';
import './Testimonial.css';
import next_icon from '../../images/9-97633_right-arrow-white-png-right-arrow-png-white (1).png';
import back_icon from '../../images/9-97633_right-arrow-white-png-right-arrow-png-white (1) (1).png';
import users_img from '../../images/Unknown_person.jpg'



const Testimonial = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    return (
        <div className='testify' id='testimonial'>
            <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={users_img} alt='Loading'/>
                                <div>
                                    <h3>Emmanuel Demby</h3>
                                    <span>LizaEye, Sierra Leone</span>
                                </div>
                                <p>"I was incredibly vulnerable before partnering with LizaEye. Their team conducted a thorough assessment of my systems and identified several critical security gaps. I highly recommend their services to any business looking to safeguard their digital assets"</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={users_img} alt='Loading'/>
                                <div>
                                    <h3>Dennis Kamara</h3>
                                    <span>LizaEye, Sierra Leone</span>
                                </div>
                                <p>"My company deals with a vast amount of sensitive customer and financial information. LizaEye has been an invaluable partner in safeguarding our digital infrastructure. I am extremely satisfied with their services. "</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={users_img} alt='Loading'/>
                                <div>
                                    <h3>Iyeba Kallon</h3>
                                    <span>LizaEye, Sierra Leone</span>
                                </div>
                                <p>"As an individual, i was concerned about protecting my personal information online. LizaEye provided me with easy-to-use tools and guidance to enhance my online security. Their customer support team is always available to answer my questions and address my concerns."</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={users_img} alt='Loading'/>
                                <div>
                                    <h3>Anonymous</h3>
                                    <span>LizaEye, Sierra Leone</span>
                                </div>
                                <p>"As a healthcare provider, protecting patient data is our top priority. LizaEye has been instrumental in ensuring the confidentiality and integrity of our electronic health records."</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        
    )
}
export default Testimonial;
