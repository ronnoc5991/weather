"use client";
import { PropsWithChildren } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage";
import { Unit, UnitContext, units } from "@/contexts/UnitContext";

type UnitProviderProps = PropsWithChildren<{}>;

function isUnitValid(u: string | null): u is Unit {
  if (u === null) return false;
  return (units as unknown as Array<string>).includes(u);
}

export default function UnitProvider({ children }: UnitProviderProps) {
  const [unit, setUnit] = useLocalStorage<Unit>({
    key: LOCAL_STORAGE_KEYS.preferredUnit,
    fallback: "imperial",
    isValid: isUnitValid,
  });

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitContext.Provider>
  );
}
