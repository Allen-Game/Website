import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel className="banner">
                    <div className="banner_image">
                        <img src="https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png" alt="Every Second +1 ki in DBZ" width="100%" height="100%" />
                        <div className="legend banner-text">Every Second +1 ki in DBZ</div>
                    </div>
                    <div className="banner_image">
                        <img src="https://tr.rbxcdn.com/091981dd1705a8a13bc9134c93483635/420/420/Image/Png" alt="Clicker Fighting Simulator" width="100%" height="100%" />
                        <div className="legend banner-text">Clicker Fighting Simulator</div>
                    </div>
                    <div className="banner_image">
                        <img src="https://tr.rbxcdn.com/ca116716b6d59182792e5ea76d8eac6f/420/420/Image/Png" alt="Naruto But Every Second +1 Chakra" width="100%" height="100%" />
                        <div className="legend banner-text">Naruto But Every Second +1 Chakra</div>
                    </div>
                </Carousel>
            </div>
        );
    }
};
