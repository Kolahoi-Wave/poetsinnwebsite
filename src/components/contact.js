import React, { useState } from 'react';
import '../App.css'; // Ensure you have the necessary CSS

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    fromDate: '',
    toDate: '',
    noOfPersons: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, fromDate, toDate, noOfPersons, contactNumber } = formData;

    const message = `Hi, I need to book a room or rooms from ${fromDate} to ${toDate} for ${noOfPersons} person(s). My name is ${fullname}, and you can reach me at ${contactNumber}.`;
    const mailtoLink = `mailto:info@poetsinn.in?subject=Room Booking Request&body=${encodeURIComponent(message)}`;

    // Open in a new tab
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="site-section site-section-sm" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 className="mb-5">Get In Touch</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-8 mb-5">
            <form className="p-5 bg-white" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    className="form-control"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* From Date and To Date */}
              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fromDate">From Date</label>
                  <input
                    type="date"
                    id="fromDate"
                    className="form-control"
                    value={formData.fromDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="toDate">To Date</label>
                  <input
                    type="date"
                    id="toDate"
                    className="form-control"
                    value={formData.toDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* No of Persons and Contact Number */}
              <div className="row form-group">
                <div className="col-md-6">
                  <label className="font-weight-bold" htmlFor="noOfPersons">No of Persons</label>
                  <input
                    type="number"
                    id="noOfPersons"
                    className="form-control"
                    placeholder="No of Persons"
                    value={formData.noOfPersons}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="font-weight-bold" htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    className="form-control"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-primary pill px-4 py-2" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="p-4 mb-3 bg-white">
              <h3 className="h5 text-black mb-3">Contact Info</h3>
              <p className="mb-0 font-weight-bold">Address</p>
              <p className="mb-4">Rafting Point, Pahalgam - 192401</p>
              <p className="mb-0 font-weight-bold">Phone</p>
              <p className="mb-4"><a href="tel:+91-9103-770-966">+91-9103 770 966</a></p>
              <p className="mb-0 font-weight-bold">Email Address</p>
              <p className="mb-0"><a href="mailto:info@poetsinn.in">info@poetsinn.in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
