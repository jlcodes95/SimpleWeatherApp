# SimpleWeatherApp
A Simple Weather App with small express server

## WeatherApp
* Using React Navigation and Redux to navigate the screens as well as setting the initial city states
* API call with Axios to server upon item selection (change IP address in api.js to remote access server in the same network - since server is not hosted anywhere)

## WeatherServer
* Using Redis and Moment in express to rate-limit the backend requests (i.e. 5/minute)
* Calling weather API to get the actual weather data

### Devices & Preview
* Tested on Physical Android Device - Oneplus 5
<div>
<img src="https://user-images.githubusercontent.com/9597150/113522640-4adff880-9570-11eb-9332-5c48ed7e424d.png" width="33%" height="33%">
<img src="https://user-images.githubusercontent.com/9597150/113522641-4ddae900-9570-11eb-8895-2640396f1749.png" width="33%" height="33%">
</div>
