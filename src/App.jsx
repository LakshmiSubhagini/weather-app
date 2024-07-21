import React, { useState } from 'react';
import Axios from 'axios';

const KEY = '439bdbe638cf7fe1f033ef4d87892ab1';
const initialCity = 'London';

const App = () => {
  const [city, setCity] = useState(initialCity);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      alert('Error in API call');
    }
  };

  return (
    <div className='App'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input
          type="text"
          className="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button onClick={fetchData}>Fetch</button>
      {data && (
        <div className='weather-data'>
          <h2>{data.name}</h2>
          <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
