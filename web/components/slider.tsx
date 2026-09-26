"use client";

import { useId } from "react";

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
  hint?: string;
};

export function Slider({ label, value, min, max, step, display, onChange, hint }: SliderProps) {
  const id = useId();
  const fill = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-gray-800">
          {label}
        </label>
        <output htmlFor={id} className="text-lg font-bold tabular-nums text-navy">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="fc-range"
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
      />
      {hint && <p className="mt-1.5 text-xs leading-[1.5] text-gray-600">{hint}</p>}
    </div>
  );
}
