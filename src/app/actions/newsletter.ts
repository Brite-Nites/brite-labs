"use server";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { status: "error", message: "Email is required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: Connect to email service (Resend, Mailchimp, etc.)
  console.log(`[Newsletter] New subscription: ${email}`);

  return { status: "success", message: "Thanks for subscribing!" };
}
