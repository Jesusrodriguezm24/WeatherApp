import { kelvinToCelsius } from "./kelvinToCelsius"

export const kelvinToFahrenheit = (kelvinDegrades) => {
    const fahrenheitConversion = 9/5;
    const constFromKelvinToFahrenheit = 32;

    const fahrenheitDegrades = (kelvinToCelsius(kelvinDegrades)) * fahrenheitConversion + constFromKelvinToFahrenheit; 
    return fahrenheitDegrades;
}