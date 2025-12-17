import { Forecast } from "@/api/weather/types/Forecast";
import TemperatureDisplay from "./TemperatureDisplay";

type ForecastWidgetProps = {
  forecastDays: Forecast["forecastday"];
};

export default function ForecastWidget({ forecastDays }: ForecastWidgetProps) {
  const today = new Date();

  return (
    <div>
      <h1>Forecast</h1>
      <ul>
        {forecastDays.map((forecastDay) => {
          const date = new Date(forecastDay.date);
          const isToday = today.toDateString() === date.toDateString();
          // TODO: using browser here... if we i18n-ize the app... we probably would need to run off of the selected locale
          const dayName = isToday
            ? "Today"
            : date.toLocaleDateString("en-US", {
                weekday: "short",
              });

          return (
            <li key={forecastDay.date}>
              {dayName} - {forecastDay.day.condition.text} -{" "}
              <TemperatureDisplay
                temp={{
                  imperial: forecastDay.day.mintemp_f,
                  metric: forecastDay.day.mintemp_c,
                }}
              />
              &nbsp;-&nbsp;
              <TemperatureDisplay
                temp={{
                  imperial: forecastDay.day.maxtemp_f,
                  metric: forecastDay.day.maxtemp_c,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
