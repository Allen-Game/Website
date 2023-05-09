const images = document.querySelectorAll('.banner-image img');
const texts = document.querySelectorAll('.banner-image div');
let currentIndex = 0;

/**
 * Shows the next image and its corresponding text in a slideshow.
 */
function showNextImage() {
    // 隐藏当前图片和文字
    images[currentIndex].classList.remove('active');
    texts[currentIndex].classList.remove('active');

    // 切换到下一张图片和文字
    currentIndex = (currentIndex + 1) % images.length;

    // 显示下一张图片和文字
    images[currentIndex].classList.add('active');
    texts[currentIndex].classList.add('active');
}

// 每隔3秒切换一次图片和文字
setInterval(showNextImage, 3000);
