import React from 'react';

const images = [
  'images/img_1.jpg',
  'images/img_2.jpg',
  'images/img_3.jpg',
  'images/img_4.jpg',
  'images/img_5.jpg',
  'images/img_6.jpg',
  'images/img_7.jpg',
];

const Gallery = () => {
  return (
    <div className="site-section" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 className="mb-5">Our Gallery</h2>
          </div>
        </div>
        <div className="row no-gutters">
          {images.map((image, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <a href={image} className="image-popup img-opacity">
                <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
