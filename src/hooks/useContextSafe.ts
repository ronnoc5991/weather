import { Context, useContext } from "react";

export const useContextSafe = <T>(
  context: Context<T | null>,
  name: string
): T => {
  const c = useContext(context);
  if (c === null) throw new Error(`${name} must be provided!`);
  return c;
};
