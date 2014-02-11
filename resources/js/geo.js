$(document).ready(function() { 
	var lat = '42.6957503';
	var lon = '-73.8966634';
	
	/**
	 * Check if the browser supports Geolocation. 
	 * If it does then attempt to get the position, if the position is acquired successfully then pass the position to the getCoords function.
	 * If there is an error getting the position it will be logged to the console and the default (global) values will be passed in to the getWeather function. 
	 */
	if(navigator.geolocation) {
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
		getWeather(lat, lon);
	}
	/**
	 * Check if there was an error when trying to retrieve the current users position from the HTML5 Geolocation API.
	 * If there is an error then pass the default lat and lon to the getWeather function. 
	 * @param  Array error list of errors that will be returned. 
	 * @return error to write to the console for debugging. 
	 */
	function getError(error) {
		var errors = {
			1: 'Permission denied',
			2: 'Position unavailable',
			3: 'Request timeout'
		};
		console.log("Error: " + errors[error.code])
		getWeather(lat, lon);

	}
});

/**
 * Attains the lat, lon coords from the HTML5 Geolocation API if the browser supports it. 
 * @param  position current Position data from the Geolocation API.
 * @return passes the lat and lon information from the API to the getWeather Function for another API function call. 
 */
function getCoords(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	getWeather(lat, lon);
}

/**
 * Function to get all the information from the 2 API calls that are performed. 
 * JSON Objects are returned and parsed for the correct information which is then displayed in <divs> in the HTML.
 * @param  lat Latitude passed in either as a default location or from the HTML5 geolocation API data. 
 * @param  lon Longitude passed in either as a default location or from the HTML5 geolocation API data. 
 */
function getWeather(lat, lon) {
	var apikey = 'bf5483dbc2ddf7ad2be4c320ef75b582';
	var weatherUrl = 'https://api.forecast.io/forecast/';
	var mapUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
	var mapEnd = '&sensor=true';
	var data;

	/**
	 * API Call to do reverse geocoding to get the city name of the current LAT, LON Coordinates
	 * @param data JSON object of the address based on the current Lat, Lon Coordinates. 
	 */
	$.getJSON(mapUrl + lat + "," + lon + mapEnd, function(data) {
		$('#city').html(data.results[0].address_components[2].short_name);
	})

	/**
	 * API Call to get the weather forecast for the current Lat, Lon Coordinates.
	 * @param data JSON object for the weather forecast of the current coordinates. 
	 */
	$.getJSON(weatherUrl + apikey + "/" + lat + "," + lon + "?callback=?", function(data) {
		var skycons = new Skycons({"color" : "black"});
		$('#temp').html(data.currently.temperature + "&deg");
		$('#cond').html(data.currently.summary);
		skycons.set("skycon-img", data.currently.icon);
		skycons.play();
	});
}
