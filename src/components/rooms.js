import React from 'react';

const roomsData = [
  {
    name: "Double Room with balcony",
    image: "images/img_1.jpg",
    price: 350.00
  },
  {
    name: "Family Room with garden view",
    image: "images/img_2.jpg",
    price: 400.00
  },
  {
    name: "Double room with garden view",
    image: "images/img_3.jpg",
    price: 255.00
  },
  {
    name: "Double Room",
    image: "images/img_1.jpg",
    price: 150.00
  }
];

function RoomItem({ name, image, price }) {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="hotel-room text-center">
        <a href="#" className="d-block mb-0 thumbnail">
          <img src={image} alt="Room" className="img-fluid" />
        </a>
        <div className="hotel-room-body">
          <h3 className="heading mb-0">
            <a href="#">{name}</a>
          </h3>
          <strong className="price">₹{price.toFixed(2)} / per night</strong>
        </div>
      </div>
    </div>
  );
}

function Rooms() {
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 className="mb-5">Our Rooms</h2>
          </div>
        </div>
        <div className="row">
          {roomsData.map((room, index) => (
            <RoomItem 
              key={index}
              name={room.name}
              image={room.image}
              price={room.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
