import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faConciergeBell, faParking, faWifi, faBicycle, faBookOpen, faTaxi, faFire } from '@fortawesome/free-solid-svg-icons';

const amenities = [
  { icon: faUtensils, title: 'Dining' },
  { icon: faConciergeBell, title: 'Hotel Teller' },
  { icon: faParking, title: 'Car Parking' },
  { icon: faWifi, title: 'Wifi' },
  { icon: faBicycle, title: 'Cycle Hire' },
  { icon: faBookOpen, title: 'Library' }, // Added library
  { icon: faTaxi, title: 'Airport Transfer' },
  { icon: faFire, title: 'Fireplace' }, // Updated to use Fireplace
];

const Amenities = () => {
  return (
    <div className="site-section" id="amenities">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 className="mb-5">Hotel Features</h2>
          </div>
        </div>
        <div className="row">
          {amenities.map((amenity, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="text-center p-4 item">
                <FontAwesomeIcon icon={amenity.icon} className="display-3 mb-3 d-block text-primary" />
                <h2 className="h5">{amenity.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
