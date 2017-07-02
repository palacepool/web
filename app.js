function onLoad(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://pool-league-api.herokuapp.com/api/player", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}
