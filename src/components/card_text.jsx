function Card_text() {
    return (
        <div className="card-container w-100">
            <section className="card-section"> {/* Removed bg-black */}
                <h2 className="text-white">Información sobre el Clima</h2>
                <p className="text-white">
                    A continuación, puedes consultar los datos del clima en el formulario. Los resultados aparecerán en las tarjetas, mostrando:
                </p>
                <ul>
                    <li>**Temperaturas**</li> {/* Removed bg-black and text-white, as text will be white from parent */}
                    <li>**Región/País/Estado**</li> {/* Removed bg-black and text-white */}
                </ul>
                <p className="creator-info text-white">
                    Creador: **Eber Colmenares**
                </p>
            </section>
            <section className="card-section"> {/* Removed bg-black */}
                <h2 className="text-white">Acerca de esta Aplicación</h2>
                <p className="text-white">
                    Esta aplicación utiliza la API **OpenWeather**, diseñada para obtener datos del clima en tiempo real. Para usarla, simplemente introduce tu ciudad, país y estado. Una vez que hayas ingresado los datos, haz clic en el botón **"Obtener Clima"** y verás la información del clima en las tarjetas.
                </p>
            </section>
        </div>
    )
}

export default Card_text;