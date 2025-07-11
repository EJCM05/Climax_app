import Card from "./components/card_content";
import Card_text from "./components/card_text";
import Climax_form from "./components/climax_form";
import { Climax_Key } from "./keys";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    temperature: '',
    temperatureMax: '',
    temperatureMin: '',
    description: '',
    humidity: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  });

  const getClimax = async (e) => {
    e.preventDefault();

    const ciudad = e.target.elements.ciudad.value;
    const pais = e.target.elements.pais.value;
    const estado = e.target.elements.estado.value;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${estado},${pais}&appid=${Climax_Key}&units=metric`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      console.log(data);

      setState({
        temperature: data.main.temp,
        temperatureMax: data.main.temp_max,
        temperatureMin: data.main.temp_min,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        error: null
      });
      // console.log(state)
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  return (
    <div className="content">
      <h1 className="title-one">Bienvenido a CliMax 🌦</h1>
      <div className="container w-75">

      <div className="position-text">
        <Card_text />
      </div>
      <div className="position-cards w-100">
        <Card {...state} />
      </div>
      <div className="position-forms">
        <Climax_form getClimax={getClimax} />
      </div>
      </div>
    </div>
  );
}

export default App;

