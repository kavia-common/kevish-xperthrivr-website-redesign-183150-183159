import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  description?: string;
  error?: string;
  id?: string;
};

// PUBLIC_INTERFACE
export default function Textarea({ label, description, error, id, className, ...rest }: Props) {
  /** Accessible textarea with label, description, and error messaging. */
  const inputId = id || rest.name || "textarea";
  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={clsx("textarea", className)}
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
