import "./WeatherDataView.css"

import { useState, useEffect } from 'react'
import { getCoordinates } from '../../services/getCoordinates'
import { getCurrentWeather } from '../../services/getCurrentWeatherData';

import LoadingPage from '../LoadingPage/LoadingPage';

const WeatherDataView = () => {

  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();
      if (coordinates) {
        const weatherData = await getCurrentWeather(coordinates.latitude, coordinates.longitude);
        
        setWeather(weatherData);
      } 
    }
    loadWeather(); 
  }, []);  

  return (
       <>
          {weather ? (
            <>
              <section className='showData_container'>
                <div className='dv_degrees_icon'>
                  <p>{isCelsius 
                        ? weather.temperature.celsius.toFixed(0) 
                        : weather.temperature.farenheit.toFixed(0)}
                        °{isCelsius ? "C" : "F"}
                  </p>
                  <img src={weather.weather.icon} alt={weather.weather.description} />
                </div>    
                <div className='dv_weather_main'>
                  <h2>{weather.weather.main}</h2>
                </div>
                <div className='dv_country_description'>
                  <p>{weather.city}, {weather.country}</p>
                  <p>{weather.weather.description}</p>               
                </div> 
              </section>
              <button className='btn_change_degrees' onClick={()=>setIsCelsius(!isCelsius)}>Change °{isCelsius ? "F" : "C"}</button>
            </>
          ) : <LoadingPage/>}
       </>
 
  )  
}

export default WeatherDataView