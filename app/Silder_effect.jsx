import { useEffect } from 'react';
import $ from 'jquery'; // Import the jQuery library
import Image from 'next/image';
const Silder_effect = () => {
    useEffect(() => {
        const $images = $('.banner_image Image');
        const $texts = $('.banner_image div');
        let currentIndex = 0;
        let intervalId;

        /**
         * Shows the next image and its corresponding text in a slideshow.
         */
        function showNextImage() {
            // Hide current image and text
            $images.eq(currentIndex).animate({ opacity: 0 }, 1000);
            $texts.eq(currentIndex).animate({ opacity: 0 }, 1000);

            // Switch to the next image and text
            currentIndex = (currentIndex + 1) % $images.length;

            // Show the next image and text
            $images.eq(currentIndex).animate({ opacity: 1 }, 1000);
            $texts.eq(currentIndex).animate({ opacity: 1 }, 1000);
        }

        // Start the slideshow
        const startSlideshow = () => {
            intervalId = setInterval(showNextImage, 3000);
        };


        // Call the startSlideshow function when component mounts
        startSlideshow();
    }, []);
};

export default Silder_effect;
