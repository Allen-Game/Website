import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const NextJsCarousel = () => {

    const legendStyle = {
        fontSize: '25px'
    };

    const imgStyle = {
        width: '50% !important',
        height: '50% !important'
    }

    const banner = {
        width: "50%",
        height: "300px",
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
        margintop: "2%",
    }


    return (
        <div style={banner}>
            <Carousel showIndicators={false}>
                <div>
                    <img src="https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png" alt="Every Second +1 ki in DBZ" style={imgStyle} />
                    <div className="banner-text" style={legendStyle}>Every Second +1 ki in DBZ</div>
                </div>
                <div>
                    <img src="https://tr.rbxcdn.com/091981dd1705a8a13bc9134c93483635/420/420/Image/Png" alt="Clicker Fighting Simulator" style={imgStyle} />
                    <div className="banner-text" style={legendStyle}>Clicker Fighting Simulator</div>
                </div>
                <div>
                    <img src="https://tr.rbxcdn.com/ca116716b6d59182792e5ea76d8eac6f/420/420/Image/Png" alt="Naruto But Every Second +1 Chakra" style={imgStyle} />
                    <div className="banner-text" style={legendStyle}>Naruto But Every Second +1 Chakra</div>
                </div>
            </Carousel>
        </div >
    );
};

export default NextJsCarousel;