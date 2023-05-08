import axios from "axios";
import { kelvinToCelsius } from "../utils/kelvinToCelsius";
import { kelvinToFahrenheit } from "../utils/kelvinToFahrenheit";
import { getIconById } from "../utils/getIconById";

 const urlWeateherData = 'https://api.openweathermap.org/data/2.5/weather';
 const appid = 'b31fa93860d00f897fd3c98cec122e2f';

export const getCurrentWeather = async (lat, lon) => {

    try {
        const res = await axios.get(`${urlWeateherData}`,{params:{lat, lon, appid}});
        const weatherInfo = {
            country:res.data.sys.country,
            city:res.data.name,
            weather: {
                main: res.data.weather[0].main,
                description: res.data.weather[0].description,
                icon: getIconById(res.data.weather[0].icon),
            },
            temperature: {
                kelvin: res.data.main.temp,
                celsius: kelvinToCelsius(res.data.main.temp),
                farenheit: kelvinToFahrenheit(res.data.main.temp)
            },
        };
        return weatherInfo;
        
    } catch (er) {
        console.error(`Fail: ${er}}`)
    }
 } 