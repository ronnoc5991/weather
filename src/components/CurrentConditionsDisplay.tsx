import { Current } from "@/api/weather/types/Current";
import { Location } from "@/api/weather/types/Location";
import TemperatureDisplay from "./TemperatureDisplay";

type CurrentConditionsDisplayProps = {
  current: Current;
  location: Location;
};

export default function CurrentConditionsDisplay({
  location,
  current,
}: CurrentConditionsDisplayProps) {
  return (
    <div>
      <p>{location.name}</p>
      <TemperatureDisplay
        temp={{
          imperial: current.temp_f,
          metric: current.temp_c,
        }}
      />
      <p>
        Feels like:&nbsp;
        <TemperatureDisplay
          temp={{
            imperial: current.feelslike_f,
            metric: current.feelslike_c,
          }}
        />
      </p>
    </div>
  );
}
