import React from 'react';

const amenities = [
  { icon: 'flaticon-tray', title: 'Dining' },
  { icon: 'flaticon-desk', title: 'Hotel Teller' },
  { icon: 'flaticon-parking', title: 'Car Parking' },
  { icon: 'flaticon-hair-dryer', title: 'Hair Dryer' },
  { icon: 'flaticon-tv', title: 'Television' },
  { icon: 'flaticon-drink', title: 'Drinks' },
  { icon: 'flaticon-cab', title: 'Car Airport' },
];

const Amenities = () => {
  return (
    <div className="site-section">
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
                <span className={`${amenity.icon} display-3 mb-3 d-block text-primary`} />
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
