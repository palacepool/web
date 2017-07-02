function onLoad(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://pool-league-api.herokuapp.com/api/player", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}
