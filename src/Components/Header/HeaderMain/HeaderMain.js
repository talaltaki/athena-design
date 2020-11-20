import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5  bg-sm-dark">
                        <h1 className="title">Florence <br/> agency</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className=" btn-common">See Pricing</button>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <img  src="https://i.ibb.co/tmPyRZp/16-Converted-2x.png" alt="header" className="img-fluid w-100 " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;