// CSRF protection: Next.js Server Actions enforce same-origin via the Origin header.
// If a reverse proxy is added, verify it forwards the Origin header unmodified.
"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254; // RFC 5321

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
});

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const ip = (await headers()).get("x-forwarded-for") ?? "unknown";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return { status: "error", message: "Too many requests. Please try again later." };
  }

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

  try {
    // TODO: Connect to email service (Resend, Mailchimp, etc.)
    return { status: "success", message: "Thanks for subscribing!" };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
