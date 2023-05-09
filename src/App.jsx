
import './App.css'

import Footer from './components/Footer/Footer';
import WeatherDataView from './components/WeatherDataView/WeatherDataView';

function App() {
  
  return (
    <section className='container_app'>
        <header className='header_container'>
          <h1>Weather App</h1>
        </header>
        <main className='main_container'>
          <WeatherDataView/>
        </main>
          <Footer /> 
    </section>
  )
}

export default App
