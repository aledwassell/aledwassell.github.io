$(document).ready(function(){
	// $("#top").touching("li").mouseover(function(){
	// 	$("#top").css({"color": "#000", "border-bottom": "1px solid #000"});
	// });

  var lat, lon, city;
  //default location
	var coordinates = '&q=London';
  // grab all the targets
  var locationTarget = $('#location');
  var weatherTarget = $('#weather');
  var tempTarget = $('#temp');
  // grab the text from the input

	var locationUrl = '//ipinfo.io/json';

	var locationText = $('#locationText').keyup(function(){
	   coordinates = '&q=' + $(this).val();
	})
	$('#locationBtn').click(function(){
		generate();
	})

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

    // while looking for you location would like to try using an animated gif here
    weatherTarget.html("<p>Finding your location…</p>");

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
        gotData(data);
      }
    };


    function gotData(data){

      location = city.toLowerCase();
      weather = data.weather[0].main;
      temp = Math.floor(data.main.temp);

      locationTarget.html( '<p>' + location + '</p>');
      weatherTarget.html('<p> ' + weather + '</p>');
      tempTarget.html( '<p> ' + temp + '°C</p>');
    };
  }
});
