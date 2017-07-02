function onLoad(){
    var xhr = new XMLHttpRequest();
    var response;

    xhr.onreadystatechange = function (e) {
        console.log('On Load called');
        console.log('ready state check');
          if (xhr.readystate === 4) {
          console.log('ready state check ===4');
          console.log('xhr status check');
            if (xhr.status === 200) {
            console.log('200 ok for player api')
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

    xhr.open("GET", "https://pool-league-api.herokuapp.com/api/player", true);
    xhr.send(null);

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