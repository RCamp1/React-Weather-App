import { useState, useEffect } from 'react';
import { getWeather } from './services/weatherService';
import { handleIcon} from './utils/handleIcon.jsx';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("New York");
  const [searchCity, setSearchCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setCity(searchCity);
  }

  useEffect(() => {
    getWeather(city)
    .then((data) => setWeatherData(data))
    .catch((err) => console.log(err));
  }, [city]);

 const description = weatherData.weather?.[0]?.description || ""
 const temperature = weatherData.main?.temp

  
return (
  <>
    <div className='header'> 
      <h1 > Find the Weather</h1>
    </div>
    <div className='form'>
      <label htmlFor="searchCity">Enter Your City:</label>
      <form onSubmit={handleSubmit}>
        <input className ='input_box' type="text" name="searchCity" id="searchCity" placeholder="ex. New York" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} required/>
        <br></br>
        <button type="submit">Search City</button>
      </form>
    </div>

    <div className = 'app_Container'>
      <h1>{city} Weather</h1> 
    <div className="weather-icon">
      {description && (
    <>
      <img className="weather-image"
        src={handleIcon(description)}
        alt={description}
      />

      <p className="weather-description">{description}</p>
    </>
  )}

  {temperature !== undefined && (
    <p className="weather-temp">
      {Math.round(temperature)}°F
    </p>
  )}
  </div>

  </div>
  </>
  )
}

export default App
