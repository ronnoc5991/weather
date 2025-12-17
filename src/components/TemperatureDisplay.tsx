"use client";
import { Unit, useUnitContext } from "@/contexts/UnitContext";

type TemperatureDisplayProps = {
  temp: Record<Unit, number>;
};

export default function TemperatureDisplay({ temp }: TemperatureDisplayProps) {
  const { unit } = useUnitContext();
  return <span>{temp[unit]}°</span>;
}
