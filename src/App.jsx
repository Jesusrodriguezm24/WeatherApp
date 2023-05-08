
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
        <header className='header_container'>
          <h1>Weather App</h1>
        </header>
        <body className='main_container'>
          
       
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
            
          ) : <p>Loading weather...</p>}

            
        </body>
        <footer className='footer_container'>

        </footer>
    </section>
  )
}

export default App
