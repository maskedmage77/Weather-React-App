import { useEffect, useState } from 'react';
import { getForecast } from './weather-api/weather-api';
import LocalWeather from './LocalWeather';

function App() {

    // The application is designed to check if the user is using https. 
    // If https is used it will ask the user's browser for geolocation data.
    // If https is not being used it will ask the user to enter their
    // location manually. 

    useEffect(() => {
        // If protocol is secure get geolocation, if its not manually ask user for location.
        if (document.location.protocol === 'https:') {
            navigator.geolocation.getCurrentPosition(locationExists);
        }
        else {
            setManualCheck(true);
            setIsLoading(false);
        }  
    }, []);

    // This will execute if client's geolocation is available.
    const locationExists = (position) => {
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        getForecast(latitude + ',' + longitude, 3)
        .then((result) => {
            // console.log(result);
            setCurrentWeather(result);
            setIsLoading(false);
        }); 
    }

    // This will execute if client manually inputs zipcode/city.
    const lookupLocation = (e) => {
        let code = e.keyCode || e.which;
        // An API call is performed once input is sumbitted with the Enter key. 
        if(code === 13) { 
            let userInput = document.getElementById('manualCheck').value;
            setIsLoading(true);
            setManualCheck(false);
            window.scrollTo(0,0);
            getForecast(userInput, 3)
            .then((result) => {
                setCurrentWeather(result);
                setIsLoading(false);
            }); 
        } 
    }

    // set current location's weather object
    const [currentWeather, setCurrentWeather] = useState(null);

    // used to toggle loading message while fetching data
    const [isLoading, setIsLoading] = useState(true);

    // used to toggle the manual location lookup
    const [manualCheck, setManualCheck] = useState(false);

    return (
        <div className="App">
            {/* render loading message */}
            { isLoading && 
            <div><img src="spinner.svg" alt="Loading..."></img></div>
            }

            {/* render a manual check for the user's location */}
            { manualCheck && 
                <div className="manualCheck">
                    <h3>React Weather App</h3>
                    <p>This is a small project created in react by Jacob Hines.
                        This project is meant to demonstrate an ability to create 
                        something from the ground up and be an example of
                        structure skills, design skills, and API implementation. 
                        To get started please enter your zipcode below.
                    </p>
                    <input type="text" id='manualCheck' placeholder="What is your Zipcode/City?"
                        onKeyPress={event => lookupLocation(event) }
                    />
                    <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p>
                </div>
            }
            
            {/* render weather once fetched */}
            { currentWeather && <LocalWeather currentWeather={currentWeather}/> } 

        </div>
    );
}

export default App;
