"use client";
import { useUnitContext } from "@/contexts/UnitContext";

type UnitToggleProps = {};

export default function UnitToggle({}: UnitToggleProps) {
  const { unit, setUnit } = useUnitContext();

  const toggleUnit = () => {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  };

  return <button onClick={toggleUnit}>Toggle Unit</button>;
}
