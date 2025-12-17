"use client";
import { useState } from "react";

type SearchBarProps = {
  initialValue: string;
};

export default function SearchBar({ initialValue }: SearchBarProps) {
  const [query, setQuery] = useState<string>(initialValue);

  return (
    <form action="/" method="GET">
      <input
        type="text"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
