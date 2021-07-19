import HourlyWeather from "./HourlyWeather";
import { useEffect, useState } from 'react';
import ForecastDay from "./ForecastDay";

const LocalWeather = (props) => {

    const currentWeather = props.currentWeather;
    const now = new Date();
    const currentHour = now.getHours();
    const [hours, setHours] = useState(currentWeather.forecast.forecastday[0].hour.slice(currentHour + 1 ,24));

    const [futureForecast, setFutureForecast] = useState(currentWeather.forecast.forecastday.splice(1));
    console.log(futureForecast);
    return (
            <div className="content" className="bg-black">
                <div className="currentForecast">
                    <img className="todayIcon"src={ currentWeather.current.condition.icon } alt={ currentWeather.current.condition.text } />
                   <h3>{ currentWeather.location.name }, { currentWeather.location.region }</h3>
                    <p>{ currentWeather.current.condition.text }</p>
                    <h1>&nbsp;&nbsp;{ Math.round(currentWeather.current.temp_f) }&#176;</h1>

                    <hr />
                    <div className="hourlyWeatherContainer">
                        
                        { hours.map((hour) => (
                            <HourlyWeather hour={ hour } key={ hour.time_epoch } />
                        )) }
                       
                    </div>
                    <hr />

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