$(document).ready(getWeather());
function getWeather() {
	var apikey = 'bf5483dbc2ddf7ad2be4c320ef75b582';
	var url = 'https://api.forecast.io/forecast/';
	var lat = '42.6957503';
	var lon = '-73.8966634';
	var data;

	$.getJSON(url + apikey + "/" + lat + "," + lon + "?callback=?", function(data) {
		console.log(data.currently.temperature);
		console.log(data.currently.summary);
		console.log(data.currently.icon);
		var skycons = new Skycons({"color" : "black"});
		$('#temp').html(data.currently.temperature);
		$('#cond').html(data.currently.summary);
		switch (data.currently.icon) {
			case "partly-cloudy-day":
				skycons.add("img", Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "clear-day":
				break;
			case "clear-night":
				break;
			case "rain":
				break;
			case "snow":
				break;
			case "sleet":
				break;
			case "wind":
				break;
			case "fog":
				break;
			case "cloudy":
				break;

		}
		skycons.play();
		//$('#img').(data.currently.icon);
	}); 
}
/*if(navigator.geolocation) {
	var timeoutVal = 10 * 1000 * 1000;
	navigator.geolocation.getCurrentPosition(
		getCoords,
		getError,
		{ enableHighAccuracy: true, 
			timeout: timeoutVal,
			maximumAge: 0}
			);
}
else {
	console.log("Geolocation is not supported by this browser");
}

function getError(error) {
	var errors = {
		1: 'Permission denied',
		2: 'Position unavailable',
		3: 'Request timeout'
	};
	console.log("Error: " + errors[error.code])
}

function getCoords(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	//console.log("latitude: " + lat + " Longitude: " + lon);
}*/