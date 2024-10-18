import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'aos/dist/aos.css';
import OwlCarousel from 'react-owl-carousel';
import AOS from 'aos';
import '../App.css';

function SliderItem({ image, heading, caption }) {
  return (
    <div className="site-blocks-cover overlay" style={{ backgroundImage: `url(${image})` }} data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container" >
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 text-center" data-aos="fade">
            <h1 className="mb-2">{heading}</h1>
            <h2 className="caption">{caption}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider() {
  const contentList = [
    {
      image: '/images/hero_1.jpg',
      heading: "Welcome To Poet's Inn",
      caption: 'Where Every Stay Is A Story'
    },
    {
      image: '/images/hero_2.jpg',
      heading: 'Unique Experience',
      caption: 'Enjoy With Us'
    },
    {
      image: '/images/hero_3.jpg',
      heading: 'Relaxing Room',
      caption: 'Your Room, Your Stay'
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <OwlCarousel
      className="slide-one-item home-slider"
      items={1}
      loop
      autoplay
      autoplayTimeout={5000}
      smartSpeed={800}
      animateOut="fadeOut"
      animateIn="fadeIn"
    >
      {contentList.map((item, index) => (
        <SliderItem
          key={index}
          image={item.image}
          heading={item.heading}
          caption={item.caption}
        />
      ))}
    </OwlCarousel>
  );
}

export default Slider;
