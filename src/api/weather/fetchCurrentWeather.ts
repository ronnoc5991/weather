import { fetchWeatherAPI } from "./fetchWeatherAPI";

// TODO: expand to accept things other than location?
export async function fetchCurrentWeather(location: string) {
  const response = await fetchWeatherAPI("/current.json", { q: location });
  return response.json();
}
