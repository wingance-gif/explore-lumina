import { useEffect, useState } from "react";

const KEY = "te-font-scale";
const MIN = 0.85;
const MAX = 1.3;
const STEP = 0.05;

export function useFontSize() {
  const [scale, setScale] = useState<number>(() => {
    if (typeof window === "undefined") return 1;
    const v = parseFloat(window.localStorage.getItem(KEY) || "1");
    return Number.isFinite(v) ? v : 1;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${scale * 100}%`;
    try {
      window.localStorage.setItem(KEY, String(scale));
    } catch {}
  }, [scale]);

  const inc = () => setScale((s) => Math.min(MAX, +(s + STEP).toFixed(2)));
  const dec = () => setScale((s) => Math.max(MIN, +(s - STEP).toFixed(2)));
  const reset = () => setScale(1);

  return { scale, inc, dec, reset };
}
