const $ = require('jquery');

$(document).ready(function(){
  let lat, lon, city;
  // grab all the targets
  const locationTarget = $('#location');
  const tempTarget = $('#temperature');

  function getLocation() {
    var xhr = new XMLHttpRequest();
    var url = 'https://ipfind.co/me?auth=60262ad8-e6c4-4fd8-bfb1-d48383f50897&ip=8.8.8.8'
		xhr.open('GET', url, true);
		xhr.send();

    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var data = JSON.parse(this.responseText);
				console.log(data);
        lat = data.latitude;
        lon = data.longitude;
        city = data.city;
				coordinates = '&lat=' + lat + '&lon=' + lon;
				getWeather();
      } else if (this.status === 429 || this.status === 400) {
        error();
      }
    };

    function error(){
      // if there is error
      console.log("You knocked me off the edge!!The location API only allows 300 requests per day. Please enter you location manually.");
    }

  };
  getLocation();

  var location, weather, temp;

  function getWeather(){
    var api = 'http://api.openweathermap.org/data/2.5/weather?&APPID=6bd81b03a64f7ae2cb9240d3271279aa'
      units = '&units=metric'
      url = api + coordinates + units
      xml = new XMLHttpRequest()

    xml.open('GET', url, true);
    xml.send();
    xml.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        console.log('got weather');
        gotData(data);
      }
    };


    function gotData(data){
      console.log(data);
      console.log('got data');
      location = city.toLowerCase();
      temp = Math.floor(data.main.temp);

      locationTarget.html( '<p>' + location + '</p>');
      tempTarget.html( '<p> ' + temp + '°C</p>');
    };
  }
});
