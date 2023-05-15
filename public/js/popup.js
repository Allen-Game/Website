// 打开弹窗
function openPopup(gameName, description) {
    // 获取要加载的数据
    const game_name = gameName; // 游戏名称
    const content = description; // 游戏介绍

    // 将数据填充到弹窗的元素中
    history.replaceState({}, document.title + `?title={game_name}`, window.location.pathname);

    // 加载图片并设置显示
    $("#popup-Image").attr("src", $("#game-image").attr("src-data"));

    
    $("#popup-title").text(game_name);
    $("#popup-content").text(content);

    // 显示弹窗
    $("#popup").css("display", "block");
    $("#popupOverlay").css("display", "block");
}

// 关闭弹窗
function closePopup() {
    history.replaceState({}, document.title, window.location.pathname); // 清除数据

    // 关闭弹窗
    $("#popup").css("display", "none");
    $("#popupOverlay").css("display", "none");
}
