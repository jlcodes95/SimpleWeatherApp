# SimpleWeatherApp
A Simple Weather App with small express server

## WeatherApp
* Using React Navigation and Redux to navigate the screens as well as setting the initial city states
* API call with Axios to server upon item selection (change IP address in api.js to remote access server in the same network - since server is not hosted anywhere)

## WeatherServer
* Using Redis and Moment in express to rate-limit the backend requests (i.e. 5/minute)
* Calling weather API to get the actual weather data
