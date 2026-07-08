import { useId, type ReactNode } from "react";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
};

type InputProps = BaseProps & {
  type?: "text" | "email" | "tel" | "number" | "date";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  min?: string | number;
  max?: string | number;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "decimal";
};

export function TextField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
  error,
  hint,
  min,
  max,
  autoComplete,
  inputMode,
  className = "",
}: InputProps) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-foreground/60">
        {label} {required && <span aria-hidden className="text-primary">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={`mt-2 w-full rounded-full bg-input/40 border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error ? (
        <p id={errId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

type TextAreaProps = BaseProps & {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
};

export function TextAreaField({
  label,
  name,
  required,
  placeholder,
  value,
  onChange,
  error,
  hint,
  rows = 6,
  className = "",
}: TextAreaProps) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-foreground/60">
        {label} {required && <span aria-hidden className="text-primary">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={`mt-2 w-full rounded-2xl bg-input/40 border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error ? (
        <p id={errId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

type SelectProps = BaseProps & {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export function SelectField({
  label,
  name,
  required,
  value,
  onChange,
  options,
  placeholder,
  error,
  hint,
  className = "",
}: SelectProps) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-foreground/60">
        {label} {required && <span aria-hidden className="text-primary">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={`mt-2 w-full rounded-full bg-input/40 border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none ${
          error ? "border-destructive" : "border-border"
        } ${!value ? "text-muted-foreground/70" : "text-foreground"}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-foreground">
            {o.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errId} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export function FormBanner({
  variant,
  children,
}: {
  variant: "success" | "error";
  children: ReactNode;
}) {
  const isSuccess = variant === "success";
  return (
    <div
      role={isSuccess ? "status" : "alert"}
      className={`rounded-2xl border px-5 py-4 text-sm ${
        isSuccess
          ? "border-primary/40 bg-primary/10 text-foreground"
          : "border-destructive/40 bg-destructive/10 text-destructive"
      }`}
    >
      {children}
    </div>
  );
}
