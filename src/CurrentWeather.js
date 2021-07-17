const CurrentWeather = (props) => {
    const localWeather = props.localWeather;

    return (
            <div className="content">
                <h1>{ localWeather.location.name }, { localWeather.location.region }</h1>
                <div className="currentForecast">
                    <h2>{ localWeather.current.condition.text }</h2>
                    <img src={ localWeather.current.condition.icon } alt="" />
                    <h1>{ localWeather.current.temp_f }&#176;</h1>
                </div>
            </div>
    );
}
 
export default CurrentWeather;