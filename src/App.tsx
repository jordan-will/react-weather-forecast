import { useState } from "react";
import { Card } from "@components/Card"
import { Message } from "@components/Message";
import { Search } from "@components/Search"
import { useWeatherAPI } from "hooks/useWeatherAPI";
import { getFiveDays } from "utils/getFiveDays";

const App = () => {

  const [city, setCity] = useState<string | null>(null);
  const { data, data5Days, loading, error } = useWeatherAPI({ city: city || undefined });

  return (
    <main className="l-main">

      <header className="m-header">
        <h1 className="m-header__title">Weather Forecast</h1>
        <Search setCityName={setCity}/>
      </header>

      <Message type={error ? 'error' : (loading ? 'loading' : null)} showMessage={error || loading} />

      {data && <section className="l-main-weather">
        <Card>
          <h1 className="m-card__title">{data?.name}</h1>
          <span className="m-card__temperature">
            <img
              className="m-card__info--icon"
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
            />
            {data?.main.temp} °C
          </span>
          <span className="m-card__weather">{data?.weather[0].description}</span>
          <div className="m-card__info">
            <span>Feels like: {data?.main.feels_like} °C</span>
            <span>Humidity: {data?.main.humidity} %</span>
            <span>Pressure: {data?.main.pressure} hPa</span>
          </div>
        </Card>
      </section>}

      {data5Days && <section className="l-week-weather">
        <h1 className="l-week-weather__title">Forecast for the next 5 days</h1>
        <div className="l-week-weather__cards">
          {getFiveDays(data5Days?.list).map((data) => (
            <Card key={data?.dt}>
              <div className="m-card__info m-card__info--week">
                <span>{data?.main.temp}°C</span>
                <img
                  className="m-card__info--icon"
                  src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
                />
                <span>{data?.day}</span>
                <span className="m-card__info--description">{data?.weather[0].description}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>}

    </main>
  );

}

export default App
