var players;
var matches;


function onLoad(){
   getPlayers();
   getMatches();
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
              matches = JSON.parse(xhr.responseText);
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


function showMatches(matches, div){
    var htmlText = '';

                for (var match in matches) {
                    htmlText += '<div>';
                    htmlText += '<p>' + players.find(x => x.id === matches[match].playerOne).name  + ' ' +  matches[match].playerOneScore;
                    htmlText +=  ' - ' + matches[match].playerTwoScore + ' ' + players.find(x => x.id === matches[match].playerTwo).name + '</p>';
                    htmlText += '</div>';
                }

                div.innerHTML = htmlText;
}

function showFixtures(){
    var fixturesDiv = document.getElementById('fixtures');
    var fixtures = getFixturesFrom(matches);
    showMatches(fixtures, fixturesDiv);
}

function showResults(){
    var resultsDiv = document.getElementById('results');
    var results = getResultsFrom(matches);
    showMatches(results, resultsDiv);
}

function getFixturesFrom(matches){
var fixtures = [];
for(var match in matches){
    if(matches[match].playerOneScore != 5 && matches[match].playerTwoScore != 5){
fixtures.push(matches[match]);
    }
}
return fixtures;
}

function getResultsFrom(matches){
var results = [];
for(var match in matches){
    if(matches[match].playerOneScore == 5 || matches[match].playerTwoScore == 5){
results.push(matches[match]);
    }
}
return results;
}


//get all matches then FE to get Results if one score == 5 or fixtures if not.