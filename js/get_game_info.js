$(document).ready(function () {
    fetchGameData();
});

function fetchGameData() {
    $.ajax({
        url: 'https://games.roblox.com/v1/games?universeIds=4400421245',
        dataType: 'json',
        success: function (data) {
            const gameData = data.data[0];
            const game = {
                name: gameData.name,
                views: gameData.visits,
                creationTime: gameData.created,
                imageUrl: gameData.iconUrl
            };
            populateGameCard(game);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

function populateGameCard(game) {
    const gameCard = $('.game-card');
    const loadingText = $('.loading-text');

    gameCard.append(`
      <div class="game-image">
        <img src="${game.imageUrl}" alt="${game.name}">
      </div>
      <div class="game-details">
        <h3 class="game-name">${game.name}</h3>
        <p class="game-views">浏览量: ${game.views}</p>
        <p class="game-creation">创作时间: ${game.creationTime}</p>
      </div>
    `);

    gameCard.show();
    loadingText.hide();
}