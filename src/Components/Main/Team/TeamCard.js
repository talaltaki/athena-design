import React from 'react';
import { Col } from 'react-bootstrap';

const TeamCard = ({ team }) => {
    const { price, type, feature1, feature2, feature3, feature4, feature5, feature6, feature7 } = team
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="p-5 card-border">
                <h1 className="text-center font-weight-bolder display-3">
                    {price}
                </h1>
                <p className="text-center mb-5">
                    {type}
                </p>
                <p
                    style={{
                        borderBottom: '1px solid gray',
                    }}
                ></p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>{feature1}</p>
                    <p>{feature2}</p>
                    <p>{feature3}</p>
                    <p>{feature4}</p>
                    <p>{feature5}</p>
                    <p>{feature6}</p>
                    <p>{feature7}</p>
                    <button className="btn-common">
                        Order Now
                </button>
                </div>
            </div>
        </Col>
    );
};

export default TeamCard;