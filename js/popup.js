// 打开弹窗
function openPopup(gameName, description) {
    // 获取要加载的数据（这里仅做示例）
    const title = gameName;
    const content = description;

    // 将数据填充到弹窗的元素中
    window.location.href = "Game.html#Name=" + title;

    // 加载图片并设置显示
    $("#popup-img").attr("src", $("#game-image").attr("src-data"));

    
    $("#popup-title").text(title);
    $("#popup-content").text(content);

    // 显示弹窗
    $("#popup").css("display", "block");
    $("#popupOverlay").css("display", "block");
}

// 关闭弹窗
function closePopup() {
    history.replaceState({}, document.title, window.location.pathname);

    // 关闭弹窗
    $("#popup").css("display", "none");
    $("#popupOverlay").css("display", "none");
}
