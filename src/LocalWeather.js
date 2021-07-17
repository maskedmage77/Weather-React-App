const LocalWeather = (props) => {

    const currentWeather = props.currentWeather;

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const now = new Date();

    return (
            <div className="content" className="bg-black">
                <div className="currentForecast">
                    <img className="todayIcon"src={ currentWeather.current.condition.icon } alt={ currentWeather.current.condition.text } />
                   {/* <h2>{ currentWeather.location.name }, { currentWeather.location.region }</h2> */}
                    <h3>{ currentWeather.current.condition.text }</h3>
                    <h3>Current { Math.round(currentWeather.current.temp_f) }&#176;</h3>
                    
                    <div className="forecast">
                        <div className="forecastDay">
                            <h3>Sunday</h3>
                            Patchy rain possible
                            <br />
                            High: 75&#176;
                            <br />
                            Low: 69&#176;
                        </div>
                        <div className="forecastDay">
                            <h3>Monday</h3>
                            Patchy rain possible
                            <br />
                            High: 75&#176;
                            <br />
                            Low: 69&#176;
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default LocalWeather;