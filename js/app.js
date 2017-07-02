var players;
var matches;

var matchUrl='https://pool-league-api.herokuapp.com/api/match';
var playerUrl='https://pool-league-api.herokuapp.com/api/player';
var httpGet='GET';

function onLoad(){
   getPlayers();
   getMatches();
}

function getMatches(){
    callApi(httpGet, matchUrl);
}

function getPlayers(){
     callApi(httpGet, playerUrl);
    }

function callApi(method, url, result){
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
            if(url == playerUrl){
            players = JSON.parse(xhr.responseText);
            }else{
            matches = JSON.parse(xhr.responseText);
            }

            } else {

              console.error(xhr.statusText);
            }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };

    xhr.open(method, url, true);
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
                    currentMatch = matches[match];
                    htmlText += '<div>';
                    htmlText += '<p>' + currentMatch.division + ': ' + players.find(x => x.id === currentMatch.playerOne).name  + ' ' +  currentMatch.playerOneScore;
                    htmlText += ' - ' + currentMatch.playerTwoScore + ' ' + players.find(x => x.id === currentMatch.playerTwo).name ;
                    htmlText += ' (' + currentMatch.table + ' - ' + currentMatch.time + ')';
                    htmlText += '</p>';
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
var selectFixturesWeek = document.getElementById('selectFixturesWeek');
var week = selectFixturesWeek.options[selectFixturesWeek.selectedIndex].value;
for(var match in matches){
    if(matches[match].playerOneScore != 5 && matches[match].playerTwoScore != 5 && matches[match].week == week){
fixtures.push(matches[match]);
    }
}
return fixtures;
}



function getResultsFrom(matches){
var results = [];
var selectResultsWeek = document.getElementById('selectResultsWeek');
var week = selectResultsWeek.options[selectResultsWeek.selectedIndex].value;
for(var match in matches){
    if((matches[match].playerOneScore == 5 || matches[match].playerTwoScore == 5) && week == matches[match].week){
results.push(matches[match]);
    }
}
return results;
}

function showLeague(){

var selectDivision = document.getElementById('selectDivision');
var division = selectDivision.options[selectDivision.selectedIndex].value;
var leagueMatches = [];



}
