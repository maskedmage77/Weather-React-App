import { useEffect, useState } from 'react';
import { getForecast } from './weather-api/weather-api';
import LocalWeather from './LocalWeather';
import Footer from './Footer';

function App() {

    useEffect(() => {
        let longitude , latitude;
    
        // will execute once client geolocation available 
        function locationExists(position) {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
    
            getForecast(latitude + ',' + longitude, 3)
            .then((result) => {
                // console.log(result);
                setCurrentWeather(result);
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
    const [currentWeather, setCurrentWeather] = useState(null);
    // used to toggle loading message while fetching data
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="App">
            {/* render loading message */}
            { isLoading && <div><h2>Loading...</h2></div> }
            {/* render weather once fetched */}
            { currentWeather && <LocalWeather currentWeather={currentWeather}/> } 
            {/* <Footer /> */}
        </div>
    );
}

export default App;
