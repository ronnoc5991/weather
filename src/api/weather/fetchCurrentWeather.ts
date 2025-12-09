import { fetchWeatherAPI } from "./fetchWeatherAPI";
import { Current } from "./types/Current";
import { Location } from "./types/Location";

// TODO: expand to accept things other than location?

type CurrentWeatherResponse = {
  location: Location;
  current: Current;
};

export async function fetchCurrentWeather(
  location: string
): Promise<CurrentWeatherResponse> {
  const response = await fetchWeatherAPI("/current.json", { q: location });
  return response.json() as unknown as CurrentWeatherResponse;
}
