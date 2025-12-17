import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useLocalStorage = <T extends string>({
  key,
  isValid,
  fallback,
}: {
  key: string;
  fallback: T;
  isValid: (v: string | null) => v is T;
}): [T, Dispatch<SetStateAction<T>>] => {
  const valueFromLocalStorage = localStorage.getItem(key);
  const initialValue = isValid(valueFromLocalStorage)
    ? valueFromLocalStorage
    : fallback;

  const [value, setValue] = useState<T>(initialValue);

  const updateValue = (v: T | ((prev: T) => T)) => {
    const nextValue = typeof v === "function" ? v(value) : v;
    localStorage.setItem(key, nextValue);
    setValue(nextValue);
  };

  useEffect(() => {
    // ensure value is set initially
    localStorage.setItem(key, value);
  }, []);

  return [value, updateValue] as const;
};
