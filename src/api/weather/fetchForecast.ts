import { fetchWeatherAPI } from "./fetchWeatherAPI";
import { Alerts } from "./types/Alerts";
import { Current } from "./types/Current";
import { Forecast } from "./types/Forecast";
import { Location } from "./types/Location";

type ForecastResponse = {
  location: Location;
  current: Current;
  forecast: Forecast;
  alerts: Alerts;
};

export async function fetchForecast(
  location: string,
  days: number
): Promise<ForecastResponse> {
  const response = await fetchWeatherAPI("/forecast.json", {
    q: location,
    days: String(days),
  });
  return response.json() as unknown as ForecastResponse;
}
