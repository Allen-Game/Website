console.log("Loading Images");

const $images = $('#banner-image img');
const $texts = $('#banner-image .banner-text');
let currentIndex = 0;
console.log("Loaded Images")


/**
 * 显示下一张图片和对应的文本内容。
 */
function showNextImage() {
  // 隐藏当前的图片和文本
  $images.eq(currentIndex).removeClass('active');
  $texts.eq(currentIndex).removeClass('active');

  // 切换到下一张图片和文本
  currentIndex = (currentIndex + 1) % $images.length;

  // 显示下一张图片和文本
  $images.eq(currentIndex).addClass('active');
  $texts.eq(currentIndex).addClass('active');
}

// 每隔3秒调用 showNextImage 函数
setInterval(showNextImage, 3000);
