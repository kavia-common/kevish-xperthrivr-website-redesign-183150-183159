import { SelectHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  description?: string;
  error?: string;
  id?: string;
  children: ReactNode;
};

// PUBLIC_INTERFACE
export default function Select({ label, description, error, id, className, children, ...rest }: Props) {
  /** Accessible select with label, description, and error messaging. */
  const inputId = id || rest.name || "select";
  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
        </label>
      )}
      <select
        id={inputId}
        className={clsx("select", className)}
        aria-invalid={!!error || undefined}
        aria-describedby={description ? `${inputId}-desc` : undefined}
        {...rest}
      >
        {children}
      </select>
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
