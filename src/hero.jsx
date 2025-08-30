import React from "react";

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="info-cards">
                        <div className="card">
                            <h2>Why Us</h2>
                            <p>
                                We create accountability in the transport sector, enhance mobility and ease of accessing various transport modes.
                            </p>
                        </div>
                        <div className="card">
                            <h2>Core Values</h2>
                            <p>
                                Excellence, Trust and Openness, Integrity, Take Responsibility, Customer Orientation.
                            </p>
                        </div>
                        <div className="card">
                            <h2>Our Services</h2>
                            <p>We offer car rentals, real-time tracking, and 24/7 customer support for a seamless travel experience.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
