Joshua M. Zone - zonej - 660892754
Lab 2 - Weather Forecast API

This application uses the HTML5 geolocation API to obtain a users location if the user allows it, to pass their coordinates to the forecast.io weather API.
This weather API returns a JSON object of the current weather forecast which is then parsed and written to the DOM using jquery (.html).
The Coordinates are also passed to the Google Maps API to do a reverse Geocode to get the city name based on the coordinates since forecast.io does not return the city as part of the JSON object. 
Skycons and HTML canvas are used to create the animated icons for the weather. 
The Application is styled with the GroudworkCSS css/js framework. 

Three API's were needed to get the location as a lat and long coordinate, then pass it to the Google maps API to get the City name. After that the coords are passed into the Forecast.io API to get the weather information as a JSON object. Jquery is used for event bindings as well as the parsing of the JSON objects that are returned. Communicating with the API's was relatively straight-forward. The Documentation on all the API's were easy to work with so it made gathering the information very simple. The styling is where I lack. I tried to add some basic styling to make it simple and elegant. I also used an icon and click events to create a +, - button that is clickable to display additional information. The Fonts were acquired from Google Fonts API. Creating a weather application can become very sophisticated if all the information that is requested is to be used. There is a lot of information that is passed through the API. API documentation that is well written is a must to ensure that users are able to get the correct information. I was able to use all three API's Documentation from the documentation. 



REFERENCES:
Reverse Geocoding done via the google maps API.
	https://developers.google.com/maps/documentation/geocoding/?csw=1
Weather information is attained from the forecast.io API. Forecast.IO documentation is used for JSON fields to parse.
	http://forecast.io/
Weather Icons are skycons that were developed by darkskyapp(Forecase.io).
	http://darkskyapp.github.io/skycons/
Framework used for the responsive grid, all typography and layout is done using this framework.
	http://groundworkcss.github.io/
All Source code is developed using Sublime Text 3 for linux.
	http://www.sublimetext.com/