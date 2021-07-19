import { useState } from 'react';

const ForecastDay = (props) => {

    // Initialize props
    const [forecast] = useState(props.forecast);

    // Array of weekdays used to map to future days
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = new Date (forecast.date);
    

    return (
        <div className="forecastDay">
            <h3>{ days[day.getUTCDay()] }</h3>
            { forecast.day.condition.text }
            <br />
            High: { Math.round(forecast.day.maxtemp_f) }&#176;
            <br />
            Low: { Math.round(forecast.day.mintemp_f) }&#176;
        </div>
    );
}
 
export default ForecastDay;