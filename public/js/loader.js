$(window).on('load', function() {
  var $Imagelist = $("Image");

  $Imagelist.each(function(index, Image) {
    var $Image = $(Image);
    if (localStorage.getItem($Image.attr("src"))) {
      $Image.data("loading", true);
      Images($Image.attr("src-data"), function(obj) {
        $Image.attr("src", localStorage.getItem(obj.src));
        checkAllImagesLoaded();
      }, function() {
        $Image.attr("src", "../icon/failed.svg");
        checkAllImagesLoaded();
      });
    } else {
      Image_loading();
    }
  });

  function checkAllImagesLoaded() {
    var loadedCount = $Imagelist.filter(function() {
      return $(this).data("loading") === true;
    }).length;

    if (loadedCount === $Imagelist.length) {
      console.log("所有图片加载完成");
    }
  }
});

function Images(url, callback, error) {
  var val = url;
  var Image = new Image();

  if (/msie/.test(navigator.userAgent.toLowerCase())) {
    Image.onreadystatechange = function() {
      if (Image.readyState == "complete" || Image.readyState == "loaded") {
        callback(Image);
      }
    };
  } else {
    Image.onload = function() {
      if (Image.complete == true) {
        callback(Image);
      }
    };
  }

  if (error) {
    Image.onerror = error;
  } else {
    Image.onerror = function() {
      Image.src = "../icon/failed.svg";
    };
  }
  Image.src = val;
}

function Image_loading() {
  var $Imagelist = $("Image");

  $Imagelist.each(function(index, Image) {
    var $Image = $(Image);
    if ($Image.data("loading") === true) {
      return true; // 跳过已加载的图片
    }
    if (!$Image.attr("src-data")) {
      return true; // 跳过没有 src-data 属性的图片
    }
    $Image.data("loading", true);
    $Image.attr("src", "../icon/loading.gif");

    var ImageObj = new Image(); // 创建新的 Image 对象

    $(ImageObj).on("load", function() {
      $Image.attr("src", ImageObj.src);
      localStorage.setItem(ImageObj.src, ImageObj.src);
      checkAllImagesLoaded();
    });

    $(ImageObj).on("error", function() {
      $Image.attr("src", "../icon/failed.svg");
      checkAllImagesLoaded();
    });

    ImageObj.src = $Image.attr("src-data");
  });

  function checkAllImagesLoaded() {
    var loadedCount = $Imagelist.filter(function() {
      return $(this).data("loading") === true;
    }).length;

    if (loadedCount === $Imagelist.length) {
      console.log("所有图片加载完成");
    }
  }
}
