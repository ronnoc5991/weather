import { API_KEY, BASE_URL } from "./constants";

// TODO: how to handle errors?
// errors from fetch
// errors from... bad response
// etc
// does each endpoint have a unique way of handling errors?
// what level of detail am I interested in?
export async function fetchWeatherAPI(
  endpoint: string,
  queryParams: Record<string, string>
) {
  const queryString = new URLSearchParams({
    ...queryParams,
    key: API_KEY ?? "",
  });

  const url = `${BASE_URL}${endpoint}?${queryString}`;

  return fetch(url);
}
