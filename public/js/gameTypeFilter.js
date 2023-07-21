var Simulator_game = $(".Simulator");
var Fighting_game = $(".Fighting");

function get_Simulator(show) {
    for (var i = 0; i < Simulator_game.length; i++) {
        Simulator_game[i].style.display = show
    }
}

function get_Fighting(show) {
    for (var i = 0; i < Fighting_game.length; i++) {
        Fighting_game[i].style.display = show
    }
}

$(document).ready(function () {
    $("#checkType").on("change", function () {
        var ct = document.getElementById("checkType");
        var index = ct.selectedIndex;
        var sv = ct.options[index].value;
        if (sv == "all") {
            Simulator_game("flex");
            Fighting_game("flex");
        } else if (sv == "Simulator") {
            Simulator_game("flex");
            Fighting_game("none");
        }
    })
})