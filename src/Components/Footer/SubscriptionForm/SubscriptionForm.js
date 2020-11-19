import React from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = () => {
    return (
        <React.Fragment>
            <h1 className="text-center title">
                Get your design right, right now
            </h1>
            <p className="text-center sub-text mt-4 mb-2">
                Be the first know our latest offers and updates!
            </p>
            <div className="d-flex justify-content-center my-5">
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="email" id="email" placeholder="Enter your email address" />
                        <input type="submit" value="Get Started" id="started-btn" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SubscriptionForm;