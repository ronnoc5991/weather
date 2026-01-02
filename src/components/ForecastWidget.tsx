import React from "react";
import { Forecast } from "@/api/weather/types/Forecast";
import TemperatureDisplay from "./TemperatureDisplay";
import Widget from "./Widget";

type ForecastWidgetProps = {
  forecastDays: Forecast["forecastday"];
};

export default function ForecastWidget({ forecastDays }: ForecastWidgetProps) {
  const today = new Date();

  return (
    <Widget title="Forecast">
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
            <React.Fragment key={forecastDay.date}>
              <hr />
              <li>
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
            </React.Fragment>
          );
        })}
      </ul>
    </Widget>
  );
}
