import React from 'react';
import '../App.css'; // Ensure you have the necessary CSS

function Footer() {
  const quickMenuItems = ['About', 'Services', 'Recognitions', 'Careers'];
  const amenitiesItems = ['Wifi', 'Television', 'Intercom', 'Restaurant'];
  const socialIcons = [
    { href: '#', className: 'icon-facebook' },
    { href: '#', className: 'icon-twitter' },
    { href: '#', className: 'icon-instagram' },
    { href: '#', className: 'icon-vimeo' }
  ];

  return (
    <div className="container" id="footer">
      <div className="row">
        <div className="col-md-4">
          <h3 className="footer-heading mb-4 text-white">About</h3>
          <p>
            Poet’s Inn, nestled in Pahalgam Valley, offers a serene retreat where nature and comfort unite. With the Lidder River and mountains as your backdrop, enjoy a personalised stay.
          </p>
          <p>
            <a href="#" className="btn btn-primary pill text-white px-4">
              Read More
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
              <ul className="list-unstyled">
                {quickMenuItems.map((item, index) => (
                  <li key={index}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="footer-heading mb-4 text-white">Amenities</h3>
              <ul className="list-unstyled">
                {amenitiesItems.map((item, index) => (
                  <li key={index}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="col-md-12">
            <h3 className="footer-heading mb-4 text-white">Social Icons</h3>
          </div>
          <div className="col-md-12">
            <p>
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.href} className="p-2">
                  <span className={icon.className} />
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <p>
            Copyright © All Rights Reserved | Made In-House{" "}
            <i className="icon-heart text-primary" aria-hidden="true" /> by{" "}
            <a href="https://poetsinn.in/" target="_blank" rel="noopener noreferrer">Poet's Inn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
