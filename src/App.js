import { useEffect, useState } from 'react';
import './App.css';
import { getCurrentWeather } from './weather-api/weather-api';
import CurrentWeather from './CurrentWeather';

function App() {

    useEffect(() => {
        let longitude , latitude;
    
        function locationExists(position) {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
    
            getCurrentWeather(latitude + ',' + longitude)
            .then((result) => {
                console.log(result);
                setLocalWeather(result);
                setIsLoading(false);
            }); 
        }

        // check user's current location
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(locationExists);
        } else {
            // insert a "cannot get location screen" here
        }    
    }, []);

    // set current location's weather object
    const [localWeather, setLocalWeather] = useState(null);
    // used to toggle loading message while fetching data
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="App">
            { isLoading && <div><h1>Loading...</h1></div> }
            { localWeather && <CurrentWeather localWeather={localWeather}/> }
        </div>
    );
}

export default App;
