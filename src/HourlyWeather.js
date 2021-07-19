import moment from 'moment';

const HourlyWeather = (props) => {

    const hour = props.hour;

    // Converts military time to standard time
    function convert(i) {
        return moment(i, 'HH:mm:ss').format('h:mm a');
    }

    return ( 
        <div className="hourlyWeather">
            <h4>{ convert(hour.time.split(' ')[1]) }</h4>
            <img className="hourlyIcon" src={ hour.condition.icon } alt="" />
            <h4>{ Math.round(hour.temp_f) }&#176;</h4>
        </div>
    );
}
 
export default HourlyWeather;