"use client";

import { useState } from "react";
import { Calendar, BedDouble, Users, User, Phone, Mail, MessageSquare, Check } from "lucide-react";
import { roomTypes } from "@/lib/site";

type Variant = "panel" | "full";

const fieldBase =
  "w-full rounded-md border border-border bg-card px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-primary";

const labelBase =
  "mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-foreground-muted";

export function EnquiryForm({
  variant = "panel",
  defaultRoomType,
}: {
  variant?: Variant;
  defaultRoomType?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-card px-6 py-10 text-center shadow-card">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-xl text-foreground">Thank you</h3>
        <p className="max-w-sm text-sm text-foreground-muted">
          Your enquiry has been received. Our reservations team will be in touch
          shortly to help plan your stay.
        </p>
      </div>
    );
  }

  if (variant === "panel") {
    return (
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
      >
        <div>
          <label className={labelBase} htmlFor="start">
            <Calendar className="h-3.5 w-3.5 text-primary" /> Starting Date
          </label>
          <input id="start" type="date" required className={fieldBase} />
        </div>
        <div>
          <label className={labelBase} htmlFor="end">
            <Calendar className="h-3.5 w-3.5 text-primary" /> Ending Date
          </label>
          <input id="end" type="date" required className={fieldBase} />
        </div>
        <div>
          <label className={labelBase} htmlFor="room">
            <BedDouble className="h-3.5 w-3.5 text-primary" /> Room Type
          </label>
          <select id="room" defaultValue={defaultRoomType} className={fieldBase}>
            {roomTypes.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelBase} htmlFor="guests">
            <Users className="h-3.5 w-3.5 text-primary" /> Guests
          </label>
          <select id="guests" className={fieldBase}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-primary h-[46px] w-full">
          Enquire Now
        </button>
      </form>
    );
  }

  // Full variant (room detail page)
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={labelBase} htmlFor="fstart">
          <Calendar className="h-3.5 w-3.5 text-primary" /> Starting Date
        </label>
        <input id="fstart" type="date" required className={fieldBase} />
      </div>
      <div>
        <label className={labelBase} htmlFor="fend">
          <Calendar className="h-3.5 w-3.5 text-primary" /> Ending Date
        </label>
        <input id="fend" type="date" required className={fieldBase} />
      </div>
      <div>
        <label className={labelBase} htmlFor="froom">
          <BedDouble className="h-3.5 w-3.5 text-primary" /> Room Type
        </label>
        <select id="froom" defaultValue={defaultRoomType} className={fieldBase}>
          {roomTypes.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelBase} htmlFor="fguests">
          <Users className="h-3.5 w-3.5 text-primary" /> Number of Guests
        </label>
        <select id="fguests" className={fieldBase}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n}>
              {n} {n === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelBase} htmlFor="fname">
          <User className="h-3.5 w-3.5 text-primary" /> Name
        </label>
        <input id="fname" type="text" required placeholder="Your full name" className={fieldBase} />
      </div>
      <div>
        <label className={labelBase} htmlFor="fphone">
          <Phone className="h-3.5 w-3.5 text-primary" /> Phone
        </label>
        <input id="fphone" type="tel" required placeholder="Phone number" className={fieldBase} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelBase} htmlFor="femail">
          <Mail className="h-3.5 w-3.5 text-primary" /> Email
        </label>
        <input id="femail" type="email" required placeholder="you@email.com" className={fieldBase} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelBase} htmlFor="fmessage">
          <MessageSquare className="h-3.5 w-3.5 text-primary" /> Message
        </label>
        <textarea
          id="fmessage"
          rows={4}
          placeholder="Tell us about your stay..."
          className={`${fieldBase} resize-none`}
        />
      </div>
      <button type="submit" className="btn-primary sm:col-span-2">
        Send Enquiry
      </button>
    </form>
  );
}
