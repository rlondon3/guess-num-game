import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImgCard from '../components/ImgCard';
import coffee from '../img/coffee.jpg';
import coffeeTogo from '../img/togo.jpg';
import beans from '../img/beans.jpg';

const FeaturedProducts = () => {
    return ( 
    <Carousel 
    fade
    indicators={false}
    >
        <Carousel.Item className='img-fluid'>
            <ImgCard
            img={coffee}
            text={'See Our Menu'}
            />
            
        </Carousel.Item>
        <Carousel.Item className='img-fluid'>
            <ImgCard
            img={coffeeTogo}
            text={'Shop Speciality Coffee'}
            />
        </Carousel.Item>
        <Carousel.Item className='img-fluid'>
            <ImgCard
            img={beans}
            text={'Order Coffee Now'}
            />
        </Carousel.Item>
    </Carousel>
     );
}
 
export default FeaturedProducts;