import { fetchCurrentWeather } from "@/api/weather/fetchCurrentWeather";

export default async function Home() {
  const currentWeather = await fetchCurrentWeather("Charlotte");

  return (
    <div>
      <main>
        <h1>Hello World</h1>
        <p>{currentWeather.location.name}</p>
        <p>{currentWeather.current.condition.text}</p>
        <p>{currentWeather.current.temp_f}</p>
      </main>
    </div>
  );
}
