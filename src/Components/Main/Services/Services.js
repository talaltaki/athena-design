import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'
const Services = () => {
    const serviceData = [
        {
            id: 1,
            img: "https://i.ibb.co/xzCn8VN/Group-65-2x.png",
            title: "Experience Design",
            info: " The point of using Lorem Ipsum is that it has a more-or-less normal."
        },
        {
            id: 2,
            img: "https://i.ibb.co/q7tY9P0/Group-66-2x.png",
            title: "Interface Design",
            info: " The point of using Lorem Ipsum is that it has a more-or-less normal."
        },
        {
            id: 1,
            img: "https://i.ibb.co/whg2tkB/Group-69-2x.png",
            title: "Prototyping",
            info: " The point of using Lorem Ipsum is that it has a more-or-less normal."
        },
        {
            id: 1,
            img: "https://i.ibb.co/dJNpNNJ/Group-72-2x.png",
            title: "Illustration",
            info: " The point of using Lorem Ipsum is that it has a more-or-less normal."
        },
    ]
    return (
        <section className="service py-5" >
            <div className="service-line">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 col-md-6 offset-md-3 text-center">
                            <h2 className="title section-title">What we do</h2>
                            <p className="my-2">Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.</p>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-center">
                        {
                            serviceData.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                        }
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Services;