function onLoad(){
    var xhr = new XMLHttpRequest();
    var response;
    xhr.open("GET", "https://pool-league-api.herokuapp.com/api/player", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          response = JSON.parse(xhr.responseText);
          showPlayers(response);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
}

function showPlayers(players){
    var htmlText = '';

                for (var player in players) {
                    htmlText += '<div class="div-conatiner">';
                    htmlText += '<p class="p-name"> Name: ' + player.name + '</p>';
                    htmlText += '</div>';
                }

                document.getElementsByTagName("body").append(htmlText);
}