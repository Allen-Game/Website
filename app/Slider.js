import React, { useState } from "react";

import Carousel, { CarouselItem, CarouselInfo } from "Carousel";

// 轮播图数据
const info = [
    {
        id: 1,
        title: "Every Second +1 ki in DBZ",
        image: "https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/720/720/Image/Png",
        backgroundColor: "transparent",
    },
    {
        id: 2,
        title: "Clicker Fighting Simulator",
        image: "https://tr.rbxcdn.com/091981dd1705a8a13bc9134c93483635/720/720/Image/Png",
        backgroundColor: "transparent",
    },
    {
        id: 3,
        title: "Naruto But Every Second +1 Chakra",
        image: "https://tr.rbxcdn.com/ca116716b6d59182792e5ea76d8eac6f/720/720/Image/Png",
        backgroundColor: "transparent",
    },
];

const App = () => {
    return (
        <Carousel>
            {info?.map((item) => {
                return (
                    <CarouselItem
                        key={item.id}
                        styles={{ backgroundColor: item.backgroundColor }}
                    >
                        <CarouselInfo
                            title={item.title}
                            describe={item.describe}
                            image={item.image}
                        />
                    </CarouselItem>
                );
            })}
        </Carousel>
    );
};

export default App;

