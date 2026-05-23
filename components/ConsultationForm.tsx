"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  matter: string;
  description: string;
  contactMethod: "Call" | "Text" | "Email";
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  matter: "",
  description: "",
  contactMethod: "Call",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "Please enter your phone number.";
  } else if (digits.length < 10) {
    errors.phone = "Phone number should be at least 10 digits.";
  }
  if (!values.matter) errors.matter = "Please choose a matter type.";
  if (!values.description.trim()) {
    errors.description = "Please share a brief description.";
  }
  return errors;
}

export default function ConsultationForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (touched[key]) {
      setErrors(validate({ ...values, [key]: value }));
    }
  }

  function blur(key: keyof FormState) {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    setTouched({
      name: true,
      email: true,
      phone: true,
      matter: true,
      description: true,
      contactMethod: true,
    });
    if (Object.keys(next).length > 0) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      setValues(initial);
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center" role="status" aria-live="polite">
        <div className="mx-auto w-12 h-12 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center">
          <ShieldCheck size={24} aria-hidden />
        </div>
        <h3 className="mt-4 font-serif text-2xl text-navy">Thank you</h3>
        <p className="mt-2 text-ink leading-relaxed">
          Your consultation request has been received. Johnson Law Center will
          contact you as soon as possible.
        </p>
        <button
          type="button"
          className="btn btn-secondary mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="card space-y-5">
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          onBlur={() => blur("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
          required
        />
        {errors.name && <p id="err-name" className="field-error">{errors.name}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            required
          />
          {errors.email && <p id="err-email" className="field-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            required
          />
          {errors.phone && <p id="err-phone" className="field-error">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="matter">Type of Legal Matter</label>
        <select
          id="matter"
          name="matter"
          value={values.matter}
          onChange={(e) => update("matter", e.target.value)}
          onBlur={() => blur("matter")}
          aria-invalid={!!errors.matter}
          aria-describedby={errors.matter ? "err-matter" : undefined}
          required
        >
          <option value="">Select a matter type</option>
          <option>Car Accident</option>
          <option>Truck Accident</option>
          <option>Motorcycle Accident</option>
          <option>Boating Accident</option>
          <option>Personal Injury</option>
          <option>Wrongful Death</option>
          <option>Other</option>
        </select>
        {errors.matter && <p id="err-matter" className="field-error">{errors.matter}</p>}
      </div>

      <div>
        <label htmlFor="description">Briefly Describe Your Situation</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={(e) => update("description", e.target.value)}
          onBlur={() => blur("description")}
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "err-description" : undefined}
          required
        />
        {errors.description && (
          <p id="err-description" className="field-error">{errors.description}</p>
        )}
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-navy mb-2">
          Preferred Contact Method
        </legend>
        <div className="flex flex-wrap gap-4">
          {(["Call", "Text", "Email"] as const).map((m) => (
            <label
              key={m}
              className="inline-flex items-center gap-2 text-sm font-normal text-ink cursor-pointer"
            >
              <input
                type="radio"
                name="contactMethod"
                value={m}
                className="w-auto"
                checked={values.contactMethod === m}
                onChange={() => update("contactMethod", m)}
              />
              <span>{m}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p className="field-error" role="alert">
          Something went wrong sending your request. Please call our office
          directly or try again.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Request Consultation"}
      </button>

      <p className="text-xs text-muted leading-relaxed">
        Your information is confidential. Submitting this form does not create
        an attorney-client relationship.
      </p>
    </form>
  );
}
