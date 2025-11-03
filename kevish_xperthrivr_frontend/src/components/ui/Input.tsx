import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
  error?: string;
  id?: string;
};

// PUBLIC_INTERFACE
export default function Input({ label, description, error, id, className, ...rest }: Props) {
  /** Accessible input with label, description, and error messaging. */
  const inputId = id || rest.name || "input";
  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx("input", className)}
        aria-invalid={!!error || undefined}
        aria-describedby={description ? `${inputId}-desc` : undefined}
        {...rest}
      />
      {description && (
        <p id={`${inputId}-desc`} className="help-text mt-1">
          {description}
        </p>
      )}
      {error && (
        <p role="alert" className="error-text mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
