import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="row">
      <div className="container d-flex mt-5">
        <div className="col-md-6 col-12">
          <img
            src="https://i.ibb.co/0XH9YNX/20-Converted-2x.png"
            alt="contact"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 align-self-center">
          <h1>Stay Running & Project</h1>
          <small>
            It is a long established fact that a reader will be distracted by
            the <br />
            readable content of a page when looking at its layout. The point of{" "}
            <br />
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of <br />
            letter.
          </small>
          <br />
          <button className="contact-btn mt-4 px-4 py-2 border-0 btn btn-primary">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
