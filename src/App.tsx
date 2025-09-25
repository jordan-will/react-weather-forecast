import { Card } from "@components/Card"
import { Search } from "@components/search"

const data = [
  { id: 1, day: "Sun", icon: "☀️", temperature: '19/20Cº', weather: 'Sky Clear' },
  { id: 2, day: "Mon", icon: "🌤️", temperature: '21/20Cº', weather: 'Storm Thunder' },
  { id: 3, day: "Tue", icon: "🌧️", temperature: '17/20Cº', weather: 'Raining' },
  { id: 4, day: "Wed", icon: "⛈️", temperature: '16/20Cº', weather: 'Cloudy' },
]

const App = () => {
  return (
    <main className="l-main">

      <header className="m-header">
        <h1 className="m-header__title">Weather Forecast</h1>
        <Search />
      </header>

      <section className="l-main-weather">
        <Card>
          <h1 className="m-card__title">Hell de Janeiro</h1>
          <span className="m-card__temperature">29º</span>
          <span className="m-card__weather">Céu limpo</span>
          <div className="m-card__info">
            <span>Thermal sensaction: 20º</span>
            <span>Humidy: 51%</span>
            <span>Pressurre: 40 atm</span>
          </div>
        </Card>
      </section>

      <section className="l-week-weather">
        {data.map(({ day, icon, temperature, weather }) => (
          <Card>
            <div className="m-card__info m-card__info--week">
              <span>{day}</span>
              <span className="m-card__info--icon">{icon}</span>
              <span>{temperature}</span>
              <span>{weather}</span>
            </div>
          </Card>
        ))}
      </section>

    </main>
  )
}

export default App
