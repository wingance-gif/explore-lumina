import { useEffect, useState } from "react";

const KEY = "te-theme";

export function useTheme() {
  const [light, setLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = window.localStorage.getItem(KEY);
    if (stored === "dark") return false;
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", light);
    try {
      window.localStorage.setItem(KEY, light ? "light" : "dark");
    } catch {}
  }, [light]);

  return { light, toggle: () => setLight((v) => !v), setLight };
}
