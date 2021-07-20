import HourlyWeather from "./HourlyWeather";
import { useState } from 'react';
import ForecastDay from "./ForecastDay";
import moment from 'moment';

const LocalWeather = (props) => {

    // Initializing props
    const currentWeather = props.currentWeather;
    
    // This will create an array to store the forecast for the next two days.
    const [futureForecast] = useState(currentWeather.forecast.forecastday.splice(1));

    // This will create an array of objects that is used to display
    // weather conditions for upcoming 24 hours
    const now = new Date();
    const currentHour = now.getHours();
    const [hours] =  useState(
        currentWeather.forecast.forecastday[0].hour.slice(currentHour + 1 ,24).concat(
        futureForecast[0].hour.splice(0 , currentHour)));
        
    console.log(currentWeather);


    return (
            <div className="content" className="bg-black">
                <div className="currentForecast">

                    {/* display current location */}
                    <h3>{ currentWeather.location.name }, { currentWeather.location.region }</h3>

                    {/* display current weather condition */}
                    <p>{ currentWeather.current.condition.text }</p>

                    {/* display current temperature in fahrenheit rounded to nearest integer */}
                    <h1>&nbsp;{ Math.round(currentWeather.current.temp_f) }&#176;</h1>

                    {/* display other current conditions */}
                    <div className="dailyInfo">
                        <div>
                            Sunrise
                            <p>{ moment(currentWeather.forecast.forecastday[0].astro.sunrise, 'HH:mm A').format('h:mm a' ) }</p>
                        </div>
                        <div>
                            Sunset
                            <p>{  moment(currentWeather.forecast.forecastday[0].astro.sunset, 'HH:mm A').format('h:mm a' ) }</p>
                        </div>
                        <div>
                            Humidity
                            <p>{  currentWeather.current.humidity }%</p>
                        </div>
                    </div>

                    {/* Second row of current weather conditions */}
                    <hr />
                    <div className="dailyInfo">
                        <div>
                            Feels Like
                            <p>&nbsp;{ Math.round(currentWeather.current.temp_f) }&#176;</p>
                        </div>
                        <div>
                            Moon Phase
                            <p>{  currentWeather.forecast.forecastday[0].astro.moon_phase }</p>
                        </div>
                        <div>
                            Pressure
                            <p>{  currentWeather.current.pressure_in } inHg</p>
                        </div>
                    </div>

                    <hr />
                    {/* display time, weather condition, and temperature for upcoming hours */}
                    <div className="hourlyWeatherContainer">
                        { hours.map((hour) => (
                            <HourlyWeather hour={ hour } key={ hour.time_epoch } />
                        )) }
                    </div>
                    <hr />
                    
                    {/* display next 2 days weather */}
                    <div className="forecast">
                        { futureForecast.map((forecast) => (
                            <ForecastDay forecast={ forecast } key={ forecast.date_epoch } />
                        )) } 
                    </div>
                </div>
            </div>
    );
}
 
export default LocalWeather;