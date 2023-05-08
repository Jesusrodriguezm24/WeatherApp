
import { useState, useEffect } from 'react'
import { getCoordinates } from './services/getCoordinates'
import { getCurrentWeather } from './services/getCurrentWeatherData';


import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true)

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();
      if (coordinates) {
        const weatherData = await getCurrentWeather(coordinates.latitude, coordinates.longitude);
        console.log(weatherData);
        setWeather(weatherData);
      }
      
    }

     loadWeather(); 
  }, []); 
  


  return (
    <section className='container_app'>
      <h1>Weather App</h1>
      {weather ? (
        <>
          <section>
            <h2>{weather.weather.main}</h2>
            <p>{weather.weather.descrption}</p>
            <p>{isCelsius 
                  ? weather.temperature.celsius.toFixed(2) 
                  : weather.temperature.farenheit.toFixed(2)}{" "}
                  °{isCelsius ? "C" : "F"}
            </p>
            <div>
              <img src={weather.weather.icon} alt={weather.weather.descrption} />
            </div>

            <p>{weather.city}, {weather.country}</p>
          </section>
          <button onClick={()=>setIsCelsius(!isCelsius)}>Change °{isCelsius ? "F" : "C"}</button>
        </>
        
      ) : <p>Loading weather...</p>}
    </section>
  )
}

export default App
