import React from 'react';
import '../Services.css'
const ServiceCard = ({service}) => {
    const {img, info, title} = service;
    return (
        <div className="col-10 mx-auto col-md-4 col-lg-3 text-center ">
            <div className="custom-card  py-4 px-3">
                <div className="img-container">
                    <img src={img} alt=""className=" mb-4 w-50 img-fluid"/>
                </div>
                <h6 className="service-title">{title}</h6>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default ServiceCard;