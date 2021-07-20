# React Weather App

The application is designed to check if the user is using https. If https is used it will ask the user's browser for geolocation data. If https is not being used it will ask the user to enter their location manually. 

## Weather API

To acquire the data needed for the app [Weather API](https://www.weatherapi.com/) is used. A credentials.js file including your API key will need to be created to make calls to the Weather API.

## credentials.js

The credentials.js file will need to be placed within the src/weather-api/ folder.

```javascript
export const KEY = "[INSERT YOUR API KEY]";
```

## Photos

![Cincinnati Weather](https://github.com/maskedmage77/Weather-React-App/blob/master/public/cinci.PNG?raw=true)
![Indianapolis Weather](https://github.com/maskedmage77/Weather-React-App/blob/master/public/indy.jpg?raw=true)
