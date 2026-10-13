"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { appointmentForm } from "@/data/appointments";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FieldName = "name" | "phone" | "email" | "date" | "treatment" | "notes";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const inputClasses =
  "w-full rounded-md border border-line bg-mist/60 px-4 py-3 text-[0.95rem] text-heading outline-none transition-colors placeholder:text-subtle/70 focus:border-teal focus:bg-paper";

const labelClasses =
  "text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-subtle";

function initialValues(treatment: string | null): FormValues {
  const fallback = appointmentForm.treatments[0];
  const matched =
    treatment && appointmentForm.treatments.includes(treatment)
      ? treatment
      : fallback;

  return {
    name: "",
    phone: "",
    email: "",
    date: "",
    treatment: matched,
    notes: "",
  };
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a contactable phone number.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.date) {
    errors.date = "Please choose a preferred date.";
  }

  return errors;
}

type AppointmentFormProps = {
  initialTreatment?: string | null;
  onCancel?: () => void;
};

export function AppointmentForm({
  initialTreatment = null,
  onCancel,
}: AppointmentFormProps) {
  const [values, setValues] = useState<FormValues>(() =>
    initialValues(initialTreatment),
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle",
  );

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => setStatus("submitted"), 700);
  };

  const reset = () => {
    setValues(initialValues(initialTreatment));
    setErrors({});
    setStatus("idle");
  };

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-start">
        <span className="flex size-12 items-center justify-center rounded-full bg-highlight text-teal">
          <CircleCheck className="size-6" />
        </span>
        <h2
          id="appointment-dialog-title"
          className="mt-6 font-display text-2xl text-heading"
        >
          {appointmentForm.successTitle}
        </h2>
        <p className="mt-3 text-[0.95rem] leading-7 text-body">
          {appointmentForm.successBody}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button variant="primary" onClick={reset}>
            {appointmentForm.resetLabel}
          </Button>
          {onCancel ? (
            <Button variant="ghost" onClick={onCancel}>
              Close
            </Button>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2
        id="appointment-dialog-title"
        className="pr-10 font-display text-2xl text-heading"
      >
        {appointmentForm.title}
      </h2>
      <p className="mt-3 text-[0.9rem] leading-6 text-body">
        {appointmentForm.description}
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="appointment-name"
            name="name"
            label={appointmentForm.fields.name}
            value={values.name}
            error={errors.name}
            autoComplete="name"
            autoFocus
            onChange={handleChange}
            className="sm:col-span-2"
          />
          <Field
            id="appointment-phone"
            name="phone"
            type="tel"
            label={appointmentForm.fields.phone}
            value={values.phone}
            error={errors.phone}
            autoComplete="tel"
            onChange={handleChange}
          />
          <Field
            id="appointment-email"
            name="email"
            type="email"
            label={appointmentForm.fields.email}
            value={values.email}
            error={errors.email}
            autoComplete="email"
            onChange={handleChange}
          />
          <Field
            id="appointment-date"
            name="date"
            type="date"
            label={appointmentForm.fields.date}
            value={values.date}
            error={errors.date}
            onChange={handleChange}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="appointment-treatment" className={labelClasses}>
              {appointmentForm.fields.treatment}
            </label>
            <select
              id="appointment-treatment"
              name="treatment"
              value={values.treatment}
              onChange={handleChange}
              className={cn(inputClasses, "appearance-none")}
            >
              {appointmentForm.treatments.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="appointment-notes" className={labelClasses}>
            {appointmentForm.fields.notes}
          </label>
          <textarea
            id="appointment-notes"
            name="notes"
            rows={3}
            value={values.notes}
            onChange={handleChange}
            className={cn(inputClasses, "resize-none")}
          />
        </div>

        <p className="rounded-md border border-line bg-mist px-4 py-3 text-xs leading-5 text-subtle">
          {appointmentForm.disclaimer}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
          >
            {status === "submitting"
              ? appointmentForm.submittingLabel
              : appointmentForm.submitLabel}
          </Button>
          {onCancel ? (
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

type FieldProps = {
  id: string;
  name: FieldName;
  label: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Field({
  id,
  name,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  autoFocus,
  className,
  onChange,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        data-autofocus={autoFocus ? "" : undefined}
        className={cn(inputClasses, error && "border-red-400 bg-red-50")}
      />
      {error ? (
        <span id={errorId} className="text-xs font-medium text-red-600">
          {error}
        </span>
      ) : null}
    </div>
  );
}
