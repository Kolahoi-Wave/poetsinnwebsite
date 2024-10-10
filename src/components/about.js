import React from 'react';
import '../App.css'; // Import any required styles

  // Data for the AboutUs section
  const aboutUsData = {
    videoUrl: 'https://vimeo.com/28959265',
    mainImage: 'images/img_2.jpg',
    secondaryImage: 'images/img_1.jpg',
    heading: 'About Us',
    description: `Nestled in the serene Pahalgam Valley, Poet’s Inn offers a tranquil escape where nature and comfort blend seamlessly. Surrounded by the breathtaking Lidder River and majestic mountains, our boutique inn provides an intimate and personalised experience for travellers. Whether you’re here to explore, immerse yourself in local culture, or simply unwind, we offer a peaceful retreat that feels like home. Welcome to an oasis of tranquillity, where every guest is treated like family.`
  };



// AboutUs component
function AboutUs({ videoUrl, mainImage, secondaryImage, heading, description }) {
  return (
    <div className="site-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="img-border">
              <a href={videoUrl} className="popup-vimeo image-play">
                <span className="icon-wrap">
                  <span className="icon icon-play" />
                </span>
                <img src={mainImage} alt="Main" className="img-fluid" />
              </a>
            </div>
            <img src={secondaryImage} alt="Secondary" className="img-fluid image-absolute" />
          </div>
          <div className="col-md-5 ml-auto">
            <div className="section-heading text-left">
              <h2 className="mb-5">{heading}</h2>
            </div>
            <p className="mb-4 text-left-align">{description}</p>
            <p>
              <a href={videoUrl} className="popup-vimeo text-uppercase">
                Watch Video <span className="icon-arrow-right small" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main AboutUs file with component and data in the same file
function AboutUsSection() {

  return (
    <div className="App">
      {/* Render AboutUs component with data */}
      <AboutUs
        videoUrl={aboutUsData.videoUrl}
        mainImage={aboutUsData.mainImage}
        secondaryImage={aboutUsData.secondaryImage}
        heading={aboutUsData.heading}
        description={aboutUsData.description}
      />
    </div>
  );
}

export default AboutUsSection;
