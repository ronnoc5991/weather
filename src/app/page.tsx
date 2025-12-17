import { fetchForecast } from "@/api/weather/fetchForecast";
import SearchBar from "@/components/SearchBar";

const randomCities = [
  "Paris",
  "New York City",
  "Chicago",
  "Amsterdam",
  "Rome",
  "Madrid",
  "Barcelona",
  "Tarifa",
  "San Diego",
] as const;

function getRandomCity() {
  return randomCities[Math.floor(Math.random() * (randomCities.length + 1))];
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = ("q" in params ? params["q"] : getRandomCity()) as string;
  const forecast = await fetchForecast(query, 10);

  return (
    <div>
      <main>
        <h1>My Location</h1>
        <SearchBar initialValue={query}></SearchBar>
        <p>{forecast.location.name}</p>
        <p>
          {forecast.current.temp_f}/{forecast.current.temp_c}
        </p>
        <p>{forecast.current.condition.text}</p>
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
      </main>
    </div>
  );
}
