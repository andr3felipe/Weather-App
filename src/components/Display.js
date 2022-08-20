


const Display = ( {data} ) => {
    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{data.main ? data.name : null}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{Math.floor(data.main.temp)}°C</h1> : null}
                </div>
                <div className="description">
                    <p>{data.weather ? data.weather[0].main : null}</p>
                </div>
            </div>
        {data.name !== undefined &&
                    <div className="bottom">
                    <div className="feels">
                        {data.main? <p className="bold">{Math.floor(data.main.feels_like)}°</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.main ?<p className="bold">{data.wind.speed} MPH</p>: null}
                        <p>Wind Speed</p>
                    </div>
                </div>
        }
        </div>
    )
}

export default Display;