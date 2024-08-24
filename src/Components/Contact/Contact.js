import React from 'react';
import './Contact.css';
import email_icon from '../../images/png-clipart-email-address-computer-icons-bounce-address-email-miscellaneous-blue-thumbnail.png';
import location_icon from '../../images/156-1568247_icon-contact-flat-web-business-symbol-blue-location.png';
import contact_icon from '../../images/156-1568270_blue-phone-icon-png-clipart-png-download-transparent.png';

const Contact = () => {
    return (
        <div className='contact' id='contact-us'>
            <div className='contact-col'>
                <h3>Send us a message</h3>
                <p>Feel free to reach out through our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our clients</p>
                <ul>
                    <li><img id='email-icon'src={email_icon} alt=''/>lizaeyeco@gmail.com</li>
                    <li><img id='contact-icon' src={contact_icon} alt=''/>+232 76 878779 / +1 623 280-5823</li>
                    <li><img id='location-icon' src={location_icon} alt=''/>N316 Lowcost Housing Kissy, Freetown, Sierra Leone. </li>
                </ul>
            </div>
        </div>
    )
}
export default Contact