import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="contactus-heading">Contact Us</h1>
      <div className="contactus-container">
        <div className="contact-details">
          <h2>Our Location</h2>
          <p>
            <a
              href="https://www.google.com/maps/dir//Nalapaka+Pure+Veg+Family+restaurant/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bb0917c8e68714b:0x260e36a38de10666?sa=X&ved=1t:3061&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
            >
              #30/6, 150A Highway, Heggere, Sanikere Post <br></br>
              Chitradurga-577522
            </a>
          </p>

          <h2>Phone</h2>
          <p>
            <a href="tel:+918310023983">+91 83100 23983</a>
          </p>

          <h2>Email</h2>
          <p>
            <a href="mailto:nalapaakapureveg@gmail.com">
              nalapaakapureveg@gmail.com
            </a>
          </p>

          <h2>Hours of Operation</h2>
          <p>Monday - 11:00AM -11:00PM</p>
          <p>Tuesday - 11:00AM -11:00PM</p>
          <p>Wednesday - 11:00AM -11:00PM</p>
          <p>Thursday - 11:00AM -11:00PM</p>
          <p>Friday- 11:00AM -11:00PM</p>
          <p>Saturday - 11:00AM -11:00PM</p>
          <p>Sunday - 11:00AM -11:00PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
