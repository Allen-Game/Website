$(window).on('load', function() {
  var $imglist = $("img");

  $imglist.each(function(index, img) {
    var $img = $(img);
    if (localStorage.getItem($img.attr("src"))) {
      $img.data("loading", true);
      Images($img.attr("src-data"), function(obj) {
        $img.attr("src", localStorage.getItem(obj.src));
        checkAllImagesLoaded();
      }, function() {
        $img.attr("src", "../icon/failed.png");
        checkAllImagesLoaded();
      });
    } else {
      img_loading();
    }
  });

  function checkAllImagesLoaded() {
    var loadedCount = $imglist.filter(function() {
      return $(this).data("loading") === true;
    }).length;

    if (loadedCount === $imglist.length) {
      console.log("所有图片加载完成");
    }
  }
});

function Images(url, callback, error) {
  var val = url;
  var img = new Image();

  if (/msie/.test(navigator.userAgent.toLowerCase())) {
    img.onreadystatechange = function() {
      if (img.readyState == "complete" || img.readyState == "loaded") {
        callback(img);
      }
    };
  } else {
    img.onload = function() {
      if (img.complete == true) {
        callback(img);
      }
    };
  }

  if (error) {
    img.onerror = error;
  } else {
    img.onerror = function() {
      img.src = "../icon/failed.png";
    };
  }
  img.src = val;
}

function img_loading() {
  var $imglist = $("img");

  $imglist.each(function(index, img) {
    var $img = $(img);
    if ($img.data("loading") === true) {
      return true; // 跳过已加载的图片
    }
    if (!$img.attr("src-data")) {
      return true; // 跳过没有 src-data 属性的图片
    }
    $img.data("loading", true);
    $img.attr("src", "../icon/loading.gif");

    var imgObj = new Image(); // 创建新的 Image 对象

    $(imgObj).on("load", function() {
      $img.attr("src", imgObj.src);
      localStorage.setItem(imgObj.src, imgObj.src);
      checkAllImagesLoaded();
    });

    $(imgObj).on("error", function() {
      $img.attr("src", "../icon/failed.png");
      checkAllImagesLoaded();
    });

    imgObj.src = $img.attr("src-data");
  });

  function checkAllImagesLoaded() {
    var loadedCount = $imglist.filter(function() {
      return $(this).data("loading") === true;
    }).length;

    if (loadedCount === $imglist.length) {
      console.log("所有图片加载完成");
    }
  }
}
