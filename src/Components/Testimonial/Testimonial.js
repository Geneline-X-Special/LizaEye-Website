import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css'
import unKnownPerson from '../../images/Unknown_person.jpg'
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Card = ({ image, title, description}) => {
    return(
        <div className='card'>
            <div className='card-content'>
                <img src={image} className='card-image'/>
                <p className='card-title'>{title}</p>
                <article className='card description'>{description}</article>
            </div>
        </div>
       
    )
}

const Testimonial = () => {
    return(
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className='swiper'
        spaceBetween={32}
        grabCursor={true}
        slidesPerView={1}
        pagination={{ 
            clickable: true
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 1, 
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3, 
          },
        }}



        >
            <SwiperSlide>
                <Card 
                image = {unKnownPerson}
                title='Emmanuel Leo Demby'
                description='I was incredibly vulnerable before partnering with LizaEye. Their team conducted a thorough assessment of my systems and identified several critical security gaps. I highly recommend their services to any business looking to safeguard their digital assets'
                />
            </SwiperSlide>
            <SwiperSlide> 
                <Card
                 image = {unKnownPerson}
                title='Dennis Stephen Kamara'
                description='My company deals with a vast amount of sensitive customer and financial information. LizaEye has been an invaluable partner in safeguarding our digital infrastructure. I am extremely satisfied with their services.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                 image = {unKnownPerson}
                title='Iyeba Kallon'
                description='As an individual, i was concerned about protecting my personal information online. LizaEye provided me with easy-to-use tools and guidance to enhance my online security. Their customer support team is always available to answer my questions and address my concerns'
                />
            </SwiperSlide>
            <SwiperSlide> 
                <Card
                 image ={unKnownPerson}
                title='Anonymous'
                description='As a healthcare provider, protecting patient data is our top priority. LizaEye has been instrumental in ensuring the confidentiality and integrity of our electronic health records'
                />
            </SwiperSlide>
            </Swiper>
    )
}

export default Testimonial;