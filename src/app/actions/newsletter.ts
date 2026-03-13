"use server";

// CSRF protection: Next.js Server Actions enforce same-origin via the Origin header.
// If a reverse proxy is added, verify it forwards the Origin header unmodified.

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254; // RFC 5321

// Lazy-initialized to avoid crashing the module if env vars are missing at import time.
let _ratelimit: Ratelimit | null = null;
function getRatelimit(): Ratelimit {
  if (!_ratelimit) {
    _ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
    });
  }
  return _ratelimit;
}

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  // Validate input first (free) before hitting Redis (network round-trip)
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { status: "error", message: "Email is required." };
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // Rate limit by IP — parse first entry from x-forwarded-for (client IP),
  // fall back to x-real-ip, then reject if unknown.
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0].trim() || h.get("x-real-ip") || null;

  if (!ip) {
    return { status: "error", message: "Unable to verify request origin." };
  }

  let rateLimitPassed = true;
  try {
    const { success } = await getRatelimit().limit(ip);
    rateLimitPassed = success;
  } catch {
    // Redis unavailable — fail closed to prevent abuse
    return { status: "error", message: "Service temporarily unavailable. Please try again later." };
  }

  if (!rateLimitPassed) {
    return { status: "error", message: "Too many requests. Please try again later." };
  }

  try {
    // TODO: Connect to email service (Resend, Mailchimp, etc.)
    return { status: "success", message: "Thanks for subscribing!" };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
