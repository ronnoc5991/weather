import { fetchCurrentWeather } from "@/api/weather/fetchCurrentWeather";

export default async function Home() {
  const currentWeather = await fetchCurrentWeather("Charlotte");

  return (
    <div>
      <main>
        <h1>Hello World</h1>
        <p>{currentWeather.location.name}</p>
      </main>
    </div>
  );
}
