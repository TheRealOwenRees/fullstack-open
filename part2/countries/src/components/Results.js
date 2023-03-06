import { useState } from 'react'

const Results = ({ allCountries, countryFilter, setCountryFilter }) => {

    const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY

    const [temperature, setTemperature] = useState()
    const [windSpeed, setWindSpeed] = useState()

    const fetchWeather = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`)
            if (!response.ok) throw new Error(`Request failed with a status of ${response.status}`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }

    const countries = allCountries.filter(country => {
        return Object
            .values(country.name.official)
            .join('')
            .toLowerCase()
            .includes(countryFilter.length > 0 ? countryFilter.toLowerCase() : countryFilter)
    })

    if (countries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    } else if (countries.length > 1 && countries.length <= 10) {
        return (
            countries.map(country => <div>
                <p>
                    {country.name.official}
                    <button onClick={() => setCountryFilter(country.name.official)}>show</button>
                </p>
            </div>)
        )
    } else if (countries.length === 1) {
        const languages = Object.values(countries[0].languages)
        const lat = countries[0].capitalInfo.latlng[0]
        const lon = countries[0].capitalInfo.latlng[1]
        const weather = fetchWeather(lat, lon)
        weather.then(data => {
            setTemperature(data.main.temp);
            setWindSpeed(data.wind.speed)
        })

        return (
            <div>
                <h2>{countries[0].name.official}</h2>
                <p>Capital: {countries[0].capital[0]}</p>
                <p>Area: {countries[0].area}</p>
                <h3>Languages:</h3>
                <ul>
                    {languages.map(language => {
                        return (
                            <li>{language}</li>
                        )
                    })}
                </ul>
                <img src={countries[0].flags.png} alt={countries[0].flags.alt} />
                <h2>Weather in {countries[0].capital[0]}</h2>
                <p>Temperature: {(temperature - 273.15).toFixed(2)}c</p>
                <p>Wind speed: {windSpeed} m/s</p>
            </div>
        )
    }
}

export default Results