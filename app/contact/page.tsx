"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6Ld2SsssAAAAACG8JuOWTR3ND6er4UX8hXBH-wck";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!captchaToken) {
      setState("error");
      return;
    }

    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("g-recaptcha-response", captchaToken);

    try {
      const res = await fetch("https://formspree.io/f/xnjlrrqo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      } else {
        setState("error");
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch {
      setState("error");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  }

  return (
    <div className="mx-auto max-w-[640px] px-6 py-24 md:py-32">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-mute transition-colors hover:text-ink"
      >
        ← Back
      </Link>

      <div className="mt-10">
        <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold tracking-[0.125px] text-accent-text">
          Contact
        </span>
        <h1 className="display-48 mt-4 text-ink">
          Send me a <span className="text-accent">message</span>
        </h1>
        <p className="lead mt-4">
          Have a question, a project idea, or just want to say hi? Fill in the form and I&apos;ll get back to you!
        </p>
      </div>

      {state === "success" ? (
        <div className="mt-12 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-text" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-[20px] font-bold text-ink">Message sent!</h2>
          <p className="mt-2 text-[15px] text-ink-soft">Thanks for reaching out. I&apos;ll reply as soon as I can.</p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-all hover:bg-accent-dark"
          >
            Back to home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[13px] font-semibold text-ink">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Igor Tarantino"
                className="rounded-lg border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-mute outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[13px] font-semibold text-ink">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-lg border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-mute outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-[13px] font-semibold text-ink">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What's this about?"
              className="rounded-lg border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-mute outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[13px] font-semibold text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Your message here..."
              className="resize-none rounded-lg border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-mute outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />

          {state === "error" && (
            <p className="text-[14px] text-red-500">
              {captchaToken
                ? "Something went wrong. Please try again or reach out directly."
                : "Please complete the CAPTCHA before sending."}
            </p>
          )}

          <button
            type="submit"
            disabled={state === "submitting"}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.97] disabled:opacity-60"
          >
            {state === "submitting" ? "Sending…" : "Send message →"}
          </button>

          <div className="border-t border-[rgba(0,0,0,0.08)] pt-5">
            <p className="text-[13px] italic leading-relaxed text-ink-mute">
              The information you enter in this form (name, email, subject, and message) is not stored or saved anywhere on this site. Your message is forwarded directly to me via{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ink transition-colors"
              >
                Formspree
              </a>
              , a third-party delivery service, and is used solely to allow me to reply to you. Please refer to Formspree&apos;s privacy policy for details on how they handle your data.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
