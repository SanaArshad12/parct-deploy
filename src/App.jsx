import { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';

import './App.css';

const api = {
  key: "d7ec9ff81a91c3c42fdc3e9e38c02af4",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);


  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(result => {
        setWeather(result);
        setError(null); // Clear any previous errors
      })
      .catch(err => {
        setWeather({});
        setError(err.message);
      });
  };

  return (
    <>
    <div className="App">
            <Navbar />
        
        </div>
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
          </div>

          {error && <p>{error}</p>}
          {weather.main ? (
            <div>
              <p>{weather.name}</p>
              <p>Temperature: {weather.main.temp} °C</p>
              <p>Weather: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          ) : (
            <p>Enter a city and click "Search" to get the weather information.</p>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
