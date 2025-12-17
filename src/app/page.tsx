import { fetchForecast } from "@/api/weather/fetchForecast";
import ForecastWidget from "@/components/ForecastWidget";
import SearchBar from "@/components/SearchBar";
import TemperatureDisplay from "@/components/TemperatureDisplay";
import UnitToggle from "@/components/UnitToggle";

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
  return randomCities[Math.floor(Math.random() * randomCities.length)];
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
        <SearchBar initialValue={query}></SearchBar>
        <p>{forecast.location.name}</p>
        <TemperatureDisplay
          temp={{
            imperial: forecast.current.temp_f,
            metric: forecast.current.temp_c,
          }}
        />
        <p>{forecast.current.condition.text}</p>
        <UnitToggle></UnitToggle>
        <ForecastWidget forecastDays={forecast.forecast.forecastday} />
      </main>
    </div>
  );
}
