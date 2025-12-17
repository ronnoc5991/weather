"use client";
import { createContext, Dispatch, SetStateAction } from "react";
import { useContextSafe } from "../hooks/useContextSafe";

export const units = ["imperial", "metric"] as const;

export type Unit = (typeof units)[number];

type UnitContextValue = {
  unit: Unit;
  setUnit: Dispatch<SetStateAction<Unit>>;
};

export const UnitContext = createContext<UnitContextValue | null>(null);

export const useUnitContext = () =>
  useContextSafe<UnitContextValue>(UnitContext, "UnitContext");
