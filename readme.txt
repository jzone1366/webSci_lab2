Joshua M. Zone - zonej - 660892754
Lab 2 - Weather Forecast API

This application uses the HTML5 geolocation API to obtain a users location if the user allows it, to pass their coordinates to the forecast.io weather API.
This weather API returns a JSON object of the current weather forecast which is then parsed and written to the DOM using jquery (.html).
The Coordinates are also passed to the Google Maps API to do a reverse Geocode to get the city name based on the coordinates since forecast.io does not return the city as part of the JSON object. 
Skycons and HTML canvas are used to create the animated icons for the weather. 
The Application is styled with the GroudworkCSS css/js framework. 


REFERENCES:
Reverse Geocoding done via the google maps API.
	https://developers.google.com/maps/documentation/geocoding/?csw=1
Weather information is attained from the forecast.io API. Forecast.IO documentation is used for JSON fields to parse.
	http://forecast.io/
Icons are skycons that were developed by darkskyapp(Forecase.io).
	http://darkskyapp.github.io/skycons/
Framework used for the responsive grid.
	http://groundworkcss.github.io/
All Source code is developed using Sublime Text 3 for linux.
	http://www.sublimetext.com/