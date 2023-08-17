import "./random-weather.css";
const RandomWeather = ({ data }) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="row">
      <div className="card">
      <img alt="weather" className="icon-small" src={`icons/${data[0].weatherType}.png`}/>
        <p className="date">Day: {days[data[0].date.getDay()]}</p>
        <p>Date: {data[0].date.getFullYear()+"-"+(data[0].date.getMonth()+1)+"-"+ data[0].date.getDate()}</p>
        <p className="temperature">{data[0].temperature}°C</p>
        <p className="weather-description">Description: {data[0].weatherType}</p>
      </div>
      <div className="card">
      <img alt="weather" className="icon-small" src={`icons/${data[1].weatherType}.png`}/>
        <p className="date">Day: {days[data[1].date.getDay()]}</p>
        <p>Date: {data[1].date.getFullYear()+"-"+(data[1].date.getMonth()+1)+"-"+ data[1].date.getDate()}</p>
        <p className="temperature">{data[1].temperature}°C</p>
        <p className="weather-description">Description: {data[1].weatherType}</p>
      </div>
      <div className="card">
      <img alt="weather" className="icon-small" src={`icons/${data[2].weatherType}.png`}/>
        <p className="date">Day: {days[data[2].date.getDay()]}</p>
        <p>Date: {data[2].date.getFullYear()+"-"+(data[2].date.getMonth()+1)+"-"+ data[2].date.getDate()}</p>
        <p className="temperature">{data[2].temperature}°C</p>
        <p className="weather-description">Description: {data[2].weatherType}</p>
      </div>
      <div className="card">
      <img alt="weather" className="icon-small" src={`icons/${data[3].weatherType}.png`}/>
        <p className="date">Day: {days[data[3].date.getDay()]}</p>
        <p>Date: {data[3].date.getFullYear()+"-"+(data[3].date.getMonth()+1)+"-"+ data[3].date.getDate()}</p>
        <p className="temperature">{data[3].temperature}°C</p>
        <p className="weather-description">Description: {data[3].weatherType}</p>
      </div>
      <div className="card">
      <img alt="weather" className="icon-small" src={`icons/${data[4].weatherType}.png`}/>
        <p className="date">Day: {days[data[4].date.getDay()]}</p>
        <p>Date: {data[4].date.getFullYear()+"-"+(data[4].date.getMonth()+1)+"-"+ data[4].date.getDate()}</p>
        <p className="temperature">{data[4].temperature}°C</p>
        <p className="weather-description">Description: {data[4].weatherType}</p>
      </div>
    </div>
  );
};

export default RandomWeather;
