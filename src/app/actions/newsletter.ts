// CSRF protection: Next.js Server Actions enforce same-origin via the Origin header.
// If a reverse proxy is added, verify it forwards the Origin header unmodified.
"use server";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254; // RFC 5321

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
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
    // TODO: Add rate limiting before connecting to a real provider
    return { status: "success", message: "Thanks for subscribing!" };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
