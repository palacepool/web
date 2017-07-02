var players;


function onLoad(){
   getPlayers();
}

function getMatches(){
var xhr = new XMLHttpRequest();
    var response;

    xhr.onreadystatechange = function (e) {
        console.log('On Load called');
        console.log('ready state check, currently ' + xhr.readyState);
          if (xhr.readyState === 4) {
          console.log('ready state check ===4');
          console.log('xhr status check');
            if (xhr.status === 200) {
            console.log('200 ok for matches api')
              response = JSON.parse(xhr.responseText);

              showMatches(response);
            } else {

              console.error(xhr.statusText);
            }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };

    xhr.open("GET", "https://pool-league-api.herokuapp.com/api/match", true);
    xhr.send(null);
    }

function getPlayers(){
var xhr = new XMLHttpRequest();
    var response;

    xhr.onreadystatechange = function (e) {
        console.log('On Load called');
        console.log('ready state check, currently ' + xhr.readyState);
          if (xhr.readyState === 4) {
          console.log('ready state check ===4');
          console.log('xhr status check');
            if (xhr.status === 200) {
            console.log('200 ok for player api')
              players = JSON.parse(xhr.responseText);
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
                    htmlText += '<div>';
                    htmlText += '<p> Name: ' + players[player].name + '</p>';
                    htmlText += '</div>';
                }
                var playersDiv = document.getElementById('players');
                playersDiv.innerHTML = playersDiv.innerHTML + htmlText;
}


function showMatches(matches){
    var htmlText = '';

                for (var match in matches) {
                    htmlText += '<div>';
                    htmlText += '<p>' + players.find(x => x.id === matches[match].playerOne).name  + ' ' +  matches[match].playerOneScore;
                    htmlText +=  ' - ' + matches[match].playerTwoScore + ' ' + players.find(x => x.id === matches[match].playerTwo).name + '</p>';
                    htmlText += '</div>';
                }
                var fixturesDiv = document.getElementById('fixtures');
                fixturesDiv.innerHTML = htmlText;
}

function showFixtures(){
    getMatches();
}

//************************ TABS ***************
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}