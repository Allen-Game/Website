$(document).ready(function() {
    const $images = $('.banner-image img');
    const $texts = $('.banner-image div');
    let currentIndex = 0;
  
    /**
     * Shows the next image and its corresponding text in a slideshow.
     */
    function showNextImage() {
      // Hide current image and text
      $images.eq(currentIndex).removeClass('active');
      $texts.eq(currentIndex).removeClass('active');
  
      // Switch to the next image and text
      currentIndex = (currentIndex + 1) % $images.length;
  
      // Show the next image and text
      $images.eq(currentIndex).addClass('active');
      $texts.eq(currentIndex).addClass('active');
    }
  
    // Call the showNextImage function every 3 seconds
    const intervalId = setInterval(showNextImage, 3000);
  
    // Check if all images have finished loading
    const checkAllImagesLoaded = function() {
      const loadedCount = $images.filter('.active').length;
      const totalCount = $images.length;
  
      if (loadedCount === totalCount) {
        // All images have finished loading
        clearInterval(intervalId); // Stop the slideshow interval
        console.log('All images loaded');
        // Your code to handle the completion of image loading
      }
    };
  
    // Attach load event handler to images
    $images.on('load', checkAllImagesLoaded);
  });
  