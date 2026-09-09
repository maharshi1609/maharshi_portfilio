"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", message: "" };

// Deliberately permissive: enough to catch typos without rejecting valid addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  const name = values.name.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  const email = values.email.trim();
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";

  const message = values.message.trim();
  if (!message) errors.message = "Please enter a message.";
  else if (message.length < 10)
    errors.message = "Message must be at least 10 characters.";

  return errors;
}

const fieldClass = (invalid: boolean) =>
  cn(
    "w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors duration-200",
    invalid
      ? "border-red-500/70 focus:border-red-500"
      : "border-line hover:border-line-strong focus:border-accent",
  );

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const update = (key: keyof Fields, value: string) => {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (touched[key]) setErrors(validate(next));
      return next;
    });
  };

  const blur = (key: keyof Fields) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });

    const firstError = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return;
    }

    setStatus("sending");

    // No mail backend is wired up, so the message is handed to the visitor's
    // own email client — nothing is silently dropped or faked.
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${values.name.trim()}`,
    );
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setValues(EMPTY);
    setTouched({});
    setErrors({});

    timer.current = setTimeout(() => setStatus("idle"), 7000);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="card p-5 sm:p-7">
      <h3 className="text-base font-semibold text-fg">Send a message</h3>
      <p className="mt-1.5 text-sm text-muted">
        Fill this in and it will open in your email app, addressed and ready to
        send.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-[13px] font-medium text-fg"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Your full name"
            className={fieldClass(Boolean(errors.name))}
          />
          {errors.name ? (
            <p
              id="contact-name-error"
              role="alert"
              className="mt-2 text-[13px] text-red-400"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-[13px] font-medium text-fg"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@example.com"
            className={fieldClass(Boolean(errors.email))}
          />
          {errors.email ? (
            <p
              id="contact-email-error"
              role="alert"
              className="mt-2 text-[13px] text-red-400"
            >
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-[13px] font-medium text-fg"
          >
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => blur("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-hint"
            }
            placeholder="Tell me about the role or project…"
            className={cn(fieldClass(Boolean(errors.message)), "resize-y")}
          />
          {errors.message ? (
            <p
              id="contact-message-error"
              role="alert"
              className="mt-2 text-[13px] text-red-400"
            >
              {errors.message}
            </p>
          ) : (
            <p id="contact-message-hint" className="mt-2 text-[13px] text-faint">
              At least 10 characters.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <span
                aria-hidden="true"
                className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              />
              Opening your email app…
            </>
          ) : (
            <>
              Send Message
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>

      {/* Status region — announced to assistive tech. */}
      <div aria-live="polite" className="mt-4">
        {status === "sent" ? (
          <p className="flex items-start gap-2.5 rounded-xl border border-accent/40 bg-accent-soft px-4 py-3 text-[13px] text-fg">
            <CheckIcon className="mt-px size-4 shrink-0 text-accent" />
            <span>
              Your email app should now be open with the message ready. If
              nothing happened, write to{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-accent underline underline-offset-2"
              >
                {site.email}
              </a>
              .
            </span>
          </p>
        ) : null}
      </div>
    </form>
  );
}
