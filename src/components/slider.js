import React from 'react';
import '../App.css'

function SliderItem({ image, heading, caption }) {
    return (
        <div class="site-blocks-cover overlay" style={{ backgroundImage: `url(${image})` }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
        <div class="row align-items-center justify-content-center">
        <div class="col-md-7 text-center" data-aos="fade">
        <h1 class="mb-2">{heading}</h1>
        <h2 class="caption">{caption}</h2>
        </div>
        </div>
        </div>
        </div>
    );
}

// Main slider component to loop over data
function Slider() {
    const contentList = [
        {
            image: '../images/hero_1.jpg',
            heading: 'Welcome To Suites',
            caption: 'Hotel & Resort'
        },
        {
            image: '../images/hero_2.jpg',
            heading: 'Unique Experience',
            caption: 'Enjoy With Us'
        },
        {
            image: '../images/hero_3.jpg',
            heading: 'Relaxing Room',
            caption: 'Your Room, Your Stay'
        }
    ];

    return (
        <div className="slide-one-item home-slider owl-carousel">
            {contentList.map((item, index) => (
                <SliderItem 
                    key={index}
                    image={item.image}
                    heading={item.heading}
                    caption={item.caption}
                />
            ))}
        </div>
    );
}

export default Slider;
