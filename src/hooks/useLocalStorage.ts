import { Dispatch, SetStateAction, useEffect, useState } from "react";

// NOTE: must check for existence of window to avoid errors thrown on server
export const useLocalStorage = <T extends string>({
  key,
  isValid,
  fallback,
}: {
  key: string;
  fallback: T;
  isValid: (v: string | null) => v is T;
}): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const valueFromLocalStorage =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;
    const initialValue = isValid(valueFromLocalStorage)
      ? valueFromLocalStorage
      : fallback;
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  }, [value]);

  return [value, setValue] as const;
};
