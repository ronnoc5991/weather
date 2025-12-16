import { fetchForecast } from "@/api/weather/fetchForecast";
import { headers } from "next/headers";

export default async function Home() {
  const forecast = await fetchForecast("Charlotte", 10);
  const ip = (await headers()).get("X-Forwarded-For");
  console.log("IP: ", ip);

  return (
    <div>
      <main>
        <h1>My Location</h1>
        <p>{forecast.location.name}</p>
        <p>
          {forecast.current.temp_f}/{forecast.current.temp_c}
        </p>
        <p>{forecast.current.condition.text}</p>
        <p>
          {forecast.forecast.forecastday.map((day) => (
            <>
              <p>{day.date}</p>
              <p>
                {day.day.mintemp_f}/{day.day.maxtemp_f}
              </p>
              <p>
                {day.astro.sunrise} - {day.astro.sunset}
              </p>
              <br />
            </>
          ))}
        </p>
      </main>
    </div>
  );
}
