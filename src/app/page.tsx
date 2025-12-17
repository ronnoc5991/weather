import { fetchForecast } from "@/api/weather/fetchForecast";
import SearchBar from "@/components/SearchBar";
import UnitToggle from "@/components/UnitToggle";
import ForecastWidget from "@/components/ForecastWidget";
import CurrentConditionsDisplay from "@/components/CurrentConditionsDisplay";

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
  const { current, location, forecast } = await fetchForecast(query, 10);

  return (
    <main>
      <SearchBar initialValue={query} />
      <UnitToggle />
      <CurrentConditionsDisplay current={current} location={location} />
      <ForecastWidget forecastDays={forecast.forecastday} />
    </main>
  );
}
