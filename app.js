function onLoad(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pool-league-api.herokuapp.com/api/player", true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          response = JSON.parse(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    
}
