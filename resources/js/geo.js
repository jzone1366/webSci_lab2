$(document).ready(getWeather());

function getWeather() {
	var apikey = 'bf5483dbc2ddf7ad2be4c320ef75b582';
	var weatherUrl = 'https://api.forecast.io/forecast/';
	var mapUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
	var mapEnd = '&sensor=true';
	var lat = '42.6957503';
	var lon = '-73.8966634';
	var data;

	
	$.getJSON(mapUrl + lat + "," + lon + mapEnd, function(data) {
		$('#city').html(data.results[0].address_components[2].short_name);
		//console.log(data.results[0].address_components[2].short_name);
	})
	$.getJSON(weatherUrl + apikey + "/" + lat + "," + lon + "?callback=?", function(data) {
		//console.log(data.currently.temperature);
		//console.log(data.currently.summary);
		var skycons = new Skycons({"color" : "black"});
		$('#temp').html(data.currently.temperature);
		$('#cond').html(data.currently.summary);
		skycons.set("img", data.currently.icon);
		skycons.play();
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