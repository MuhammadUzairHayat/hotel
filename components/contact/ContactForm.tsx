"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const fieldBase =
  "w-full rounded-md border border-border bg-card px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-primary";
const labelBase =
  "mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground-muted";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-card px-6 py-16 text-center shadow-card">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-xl text-foreground">Message Sent</h3>
        <p className="max-w-sm text-sm text-foreground-muted">
          Thank you for reaching out. Our team will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-5 rounded-2xl bg-card p-6 shadow-card sm:grid-cols-2 sm:p-8"
    >
      <div>
        <label className={labelBase} htmlFor="name">
          Full Name
        </label>
        <input id="name" type="text" required placeholder="Your name" className={fieldBase} />
      </div>
      <div>
        <label className={labelBase} htmlFor="email">
          Email
        </label>
        <input id="email" type="email" required placeholder="you@email.com" className={fieldBase} />
      </div>
      <div>
        <label className={labelBase} htmlFor="phone">
          Phone
        </label>
        <input id="phone" type="tel" placeholder="Phone number" className={fieldBase} />
      </div>
      <div>
        <label className={labelBase} htmlFor="subject">
          Subject
        </label>
        <input id="subject" type="text" placeholder="How can we help?" className={fieldBase} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelBase} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Write your message..."
          className={`${fieldBase} resize-none`}
        />
      </div>
      <button type="submit" className="btn-primary sm:col-span-2">
        Send Message
      </button>
    </form>
  );
}
